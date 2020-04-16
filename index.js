const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const fs = require("fs");

const data = {};

app.use(express.static("public"));

app.get("/data", (req, res) => {
  res.json(data);
});

app.get("/data/:roomCode", (req, res) => {
  res.json(data[req.params.roomCode]);
});

app.get("/room/:roomCode", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

io.on("connection", (socket) => {
  socket.on("firehose", () => {
    socket.join("firehose");
    socket.send("ok");
  });

  socket.on("join", (roomCode) => {
    socket.join(roomCode);
    socket.emit("state", data[roomCode] && data[roomCode].state);
  });

  socket.on("state", ({ roomCode, state }) => {
    if (data[roomCode] === undefined || data[roomCode].archived) {
      data[roomCode] = {
        state,
        tx: state.tx,
        lastUpdate: Date.now(),
        archived: false,
      };
    } else {
      if (data[roomCode].tx < state.tx) {
        data[roomCode] = {
          state,
          tx: state.tx,
          lastUpdate: Date.now(),
          archived: false,
        };
      }
    }

    socket.to(roomCode).emit("state", data[roomCode].state);
    socket.to("firehose").emit("firehose", { roomCode, state: data[roomCode].state });
  });
});

http.listen(process.env.PORT || 4000, () => {
  console.log("server starting...");
});

const ARCHIVE_TIME = 1000 * 60 * 20;
const ERASE_TIME = 1000 * 60 * 60 * 24 * 2;
const ARCHIVER_FREQUENCY = 1000 * 60 * 1;

const archiver = () => {
  const archiveTime = Date.now() - ARCHIVE_TIME;
  const eraseTime = Date.now() - ERASE_TIME;

  let eraseCount = 0;
  let archiveCount = 0;

  Object.keys(data).forEach((roomCode) => {
    const { state, lastUpdate, archived } = data[roomCode];

    if (archived) {
      if (lastUpdate < eraseTime) {
        delete data[roomCode];
        eraseCount += 1;
      }
    } else {
      if (lastUpdate < archiveTime) {
        const fileName = `${process.cwd()}/.data/${roomCode}_${lastUpdate}.json`;
        fs.writeFile(fileName, JSON.stringify(state), "utf8", () => {});
        data[roomCode] = { archived: true, lastUpdate: Date.now() };
        archiveCount += 1;
      }
    }
  });

  console.log("archiver running:", `${archiveCount} archived, ${eraseCount} erased`);

  setTimeout(archiver, ARCHIVER_FREQUENCY);
};

setTimeout(archiver, ARCHIVER_FREQUENCY);
