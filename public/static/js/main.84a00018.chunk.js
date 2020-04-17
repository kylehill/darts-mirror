(this["webpackJsonpdarts-scoreboard"]=this["webpackJsonpdarts-scoreboard"]||[]).push([[0],{36:function(e,r,t){e.exports=t(75)},69:function(e,r){},72:function(e,r,t){},73:function(e,r,t){},74:function(e,r,t){},75:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),s=t(33),c=t.n(s),o=t(1),i=t(34),m=t.n(i),u=function(e){var r=e.active,t=e.score,a=e.isWinner,s=e.name,c=e.setName,o="darts-scorer-player";return r&&(o+=" darts-scorer-player-active"),a&&(o+=" darts-scorer-player-winner"),n.a.createElement("div",{className:o},n.a.createElement("input",{className:"darts-scorer-player-name",type:"text",onChange:function(e){return c(e.target.value)},value:s}),n.a.createElement("div",{className:"darts-scorer-player-score"},t),r&&n.a.createElement("div",{className:"darts-scorer-player-active-icon"},n.a.createElement("span",{role:"img","aria-label":"Current thrower"},"\ud83c\udfaf")))},l=function(e){var r=e.p0,t=e.p1;return n.a.createElement("div",{className:"darts-scorer-statsbox"},n.a.createElement("div",{className:"darts-scorer-statsbox-row"},n.a.createElement("div",{className:"darts-scorer-statsbox-number"},r.mpr.toFixed(2)),n.a.createElement("div",{className:"darts-scorer-statsbox-label"},"MPR"),n.a.createElement("div",{className:"darts-scorer-statsbox-number"},t.mpr.toFixed(2))),n.a.createElement("div",{className:"darts-scorer-statsbox-row"},n.a.createElement("div",{className:"darts-scorer-statsbox-number"},(100*r.hitRate).toFixed(2)+"%"),n.a.createElement("div",{className:"darts-scorer-statsbox-label"},"Hit %"),n.a.createElement("div",{className:"darts-scorer-statsbox-number"},(100*t.hitRate).toFixed(2)+"%")))},d=function(e){var r=e.state,t=e.setNames;return n.a.createElement("div",{className:"darts-scorer-header"},n.a.createElement(u,{isWinner:r.complete&&0===r.winner,side:0,active:0===r.currentThrow,score:r.players[0].points,name:r.names[0],setName:function(e){t(e,r.names[1])}}),n.a.createElement(u,{isWinner:r.complete&&1===r.winner,side:1,active:1===r.currentThrow,score:r.players[1].points,name:r.names[1],setName:function(e){t(r.names[0],e)}}),r.legs[0]||r.legs[1]?n.a.createElement("div",{className:"darts-scorer-header-legs"},r.legs[0]," - ",r.legs[1]):null,n.a.createElement(l,{p0:r.stats[0],p1:r.stats[1]}))},p=function(e){switch(e){case 0:return"";case 1:return"/";case 2:return"X";default:return"O"}},f=function(e){var r=e.m0,t=e.m1,a=e.name,s=e.clickDart,c=e.sector;return r>=3&&t>=3?n.a.createElement("div",{className:"darts-scorer-markboard-row-closed"},a):n.a.createElement("div",{className:"darts-scorer-markboard-row-open"},n.a.createElement("button",{className:"darts-scorer-markboard-button darts-scorer-markboard-button-single",onClick:function(){s({sector:c,multiple:1,display:"".concat(a)})}},"".concat(a)),n.a.createElement("button",{className:"darts-scorer-markboard-button darts-scorer-markboard-button-double",onClick:function(){s({sector:c,multiple:2,display:"D".concat(a)})}},"D".concat(a)),"B"!==a&&n.a.createElement("button",{className:"darts-scorer-markboard-button darts-scorer-markboard-button-triple",onClick:function(){s({sector:c,multiple:3,display:"T".concat(a)})}},"T".concat(a)))},v=function(e){var r=e.m0,t=e.m1,a=e.activePlayer;return n.a.createElement("div",{className:"darts-scorer-markboard-row"},n.a.createElement("div",{className:"darts-scorer-markboard-marks ".concat(0===a?"darts-scorer-markboard-active":"")},p(r)),n.a.createElement("div",{className:"darts-scorer-markboard-row-internal"},n.a.createElement(f,e)),n.a.createElement("div",{className:"darts-scorer-markboard-marks ".concat(1===a?"darts-scorer-markboard-active":"")},p(t)))},h=function(e){var r=e.state,t=e.clickDart;return n.a.createElement("div",{className:"darts-scorer-markboard"},[20,19,18,17,16,15,"B"].map((function(e,a){return n.a.createElement(v,{key:a,sector:a,name:e,m0:r.players[0].marks[a],m1:r.players[1].marks[a],clickDart:t,activePlayer:r.currentThrow})})))},k=function(e){var r=e.dart;if(void 0===r)return n.a.createElement("div",{className:"darts-scorer-current-turn-box"});var t="darts-scorer-current-turn-box ";switch(r.multiple){case 1:t+="darts-scorer-current-turn-box-single";break;case 2:t+="darts-scorer-current-turn-box-double";break;default:t+="darts-scorer-current-turn-box-triple"}return n.a.createElement("div",{className:t},r.display)},b=function(e){var r=e.currentThrowerName,t=e.isComplete,a=e.nextLeg,s=e.darts,c=e.eraseDart,o=e.undoTurn,i=e.confirmTurn;return t?n.a.createElement("div",{className:"darts-scorer-current-turn-container"},n.a.createElement("button",{className:"darts-scorer-current-turn-erase",onClick:o},"Undo"),n.a.createElement("button",{className:"darts-scorer-current-turn-next",onClick:a},"Next Leg")):n.a.createElement("div",{className:"darts-scorer-current-turn-container"},s.length>0&&n.a.createElement("button",{className:"darts-scorer-current-turn-erase",onClick:c},"Erase"),0===s.length&&n.a.createElement("button",{className:"darts-scorer-current-turn-erase",onClick:o},"Undo"),n.a.createElement("div",{className:"darts-scorer-current-turn-boxes"},n.a.createElement(k,{dart:s[0]}),n.a.createElement(k,{dart:s[1]}),n.a.createElement(k,{dart:s[2]})),n.a.createElement("button",{className:"darts-scorer-current-turn-confirm",onClick:i},"Confirm",n.a.createElement("div",{className:"darts-scorer-current-turn-confirm-thrower"},"(",r,")")))},E=t(35),w=function(e){return[20,19,18,17,16,15,25].reduce((function(r,t,a){return r+Math.max(0,e[a]-3)*t}),0)},N=(t(72),function(e){var r=n.a.useState(e.state||{tx:0,legs:[0,0],firstThrow:0,currentThrow:0,players:[{points:0,marks:[0,0,0,0,0,0,0]},{points:0,marks:[0,0,0,0,0,0,0]}],stats:[{turns:0,hits:0,marks:0,mpr:0,hitRate:0},{turns:0,hits:0,marks:0,mpr:0,hitRate:0}],names:["Player 1","Player 2"],pastTurns:[]}),t=Object(o.a)(r,2),a=t[0],s=t[1],c=n.a.useState([]),i=Object(o.a)(c,2),m=i[0],u=i[1],l=function(r){var t=JSON.parse(JSON.stringify(r));s(t),e.sendToMirror(t)};n.a.useEffect((function(){e.state&&s(e.state)}),[e]),n.a.useEffect((function(){var e=function(e){switch(e.key){case"Enter":f(),e.preventDefault();break;case"Backspace":p()}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a,m]);var p=function(){a.complete||u(m.slice(0,-1))},f=function(){if(!a.complete){var e=[{miss:!0},{miss:!0},{miss:!0}].map((function(e,r){return m[r]||e}));l(function(e,r){e.tx+=1;var t=e.players[e.currentThrow],a=e.players[(e.currentThrow+1)%2];return r=r.map((function(e){return e.miss||(a.marks[e.sector]>=3?(e.effectiveMarks=Math.min(3-t.marks[e.sector],e.multiple),t.marks[e.sector]=Math.min(3,t.marks[e.sector]+e.multiple)):(e.effectiveMarks=e.multiple,t.marks[e.sector]=t.marks[e.sector]+e.multiple)),e})),t.points=w(t.marks),e.stats[e.currentThrow]=function(e,r){var t=e.turns+1,a=r.reduce((function(e,r){return r.miss||0===r.effectiveMarks?e:e+1}),e.hits),n=r.reduce((function(e,r){return r.miss?e:e+r.effectiveMarks}),e.marks);return{turns:t,hits:a,marks:n,mpr:n/t,hitRate:a/(3*t)}}(e.stats[e.currentThrow],r),e.pastTurns=[].concat(Object(E.a)(e.pastTurns),[r]),function(e,r){return e.points>=r.points&&e.marks.every((function(e){return e>=3}))}(t,a)?(e.winner=e.currentThrow,e.legs[e.winner]+=1,e.complete=!0,e):(e.players[e.currentThrow]=t,e.currentThrow=(e.currentThrow+1)%2,e)}(a,e)),u([])}};return n.a.createElement("div",{className:"darts-scorer-container"},n.a.createElement(d,{state:a,setNames:function(e,r){l(function(e,r,t){return e.names=[r,t],e.tx=e.tx+1,e}(a,e,r))}}),n.a.createElement(h,{state:a,clickDart:function(e){a.complete||m.length<3&&u(m.concat(e))}}),n.a.createElement(b,{currentThrowerName:a.names[a.currentThrow],isComplete:a.complete,darts:m,undoTurn:function(){var e=function(e){var r=e.pastTurns.pop();if(!r)return{turn:[],state:e};e.tx+=1,e.currentThrow=(e.currentThrow+1)%2,e.complete&&(e.currentThrow=(e.currentThrow+1)%2,e.complete=!1,e.legs[e.winner]-=1,e.winner=void 0);var t=e.players[e.currentThrow];r.forEach((function(e){e.miss||(t.marks[e.sector]=t.marks[e.sector]-e.effectiveMarks)})),t.points=w(t.marks),e.stats[e.currentThrow]=function(e,r){var t=e.turns-1,a=r.reduce((function(e,r){return r.miss||0===r.effectiveMarks?e:e-1}),e.hits),n=r.reduce((function(e,r){return r.miss?e:e-r.effectiveMarks}),e.marks);return{turns:t,hits:a,marks:n,mpr:n/t||0,hitRate:a/(3*t)||0}}(e.stats[e.currentThrow],r);var a=r.filter((function(e){return!e.miss})).map((function(e){return{sector:e.sector,multiple:e.multiple,display:e.display}}));return e.players[e.currentThrow]=t,{turn:a,state:e}}(a),r=e.state,t=e.turn;l(r),u(t)},eraseDart:p,confirmTurn:f,nextLeg:function(){var e;l(((e=a).tx+=1,e.players=[{points:0,marks:[0,0,0,0,0,0,0]},{points:0,marks:[0,0,0,0,0,0,0]}],e.firstThrow=e.currentThrow=(e.firstThrow+1)%2,e.complete=!1,e.winner=void 0,e.pastTurns=[],e)),u([])}}))}),T=function(e){var r=e.roomCode,t=n.a.useState(null),a=Object(o.a)(t,2),s=a[0],c=a[1],i=n.a.useState(null),u=Object(o.a)(i,2),l=u[0],d=u[1];n.a.useEffect((function(){var e=m()();e.emit("join",r),e.on("state",(function(e){d(e)})),c(e)}),[r]);return n.a.createElement(N,{sendToMirror:function(e){s.emit("state",{state:e,roomCode:r})},state:l})},y=(t(73),function(){var e=n.a.useState(""),r=Object(o.a)(e,2),t=r[0],a=r[1],s=n.a.useState(Math.floor(1e12*Math.random()).toString(16).toUpperCase()),c=Object(o.a)(s,1)[0];return n.a.createElement("div",{class:"prompt-container"},n.a.createElement("div",{className:"prompt-text"},"Room Code:"),n.a.createElement("div",{className:"prompt-input-container"},n.a.createElement("input",{className:"prompt-input",type:"text",value:t,onChange:function(e){return r=e.target.value,void a(r.toUpperCase());var r}}),t?n.a.createElement("a",{className:"prompt-input-button",href:"/room/".concat(t)},"Join"):n.a.createElement("div",{className:"prompt-input-button prompt-button-inactive"},"Join")),n.a.createElement("div",{className:"prompt-random"},"I don't have a room code,"," ",n.a.createElement("a",{className:"prompt-random-link",href:"/room/".concat(c)},"let me try it with a random one.")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(74);var x=window.location.pathname.split("/")[2];c.a.render(n.a.createElement("div",{className:"container"},x?n.a.createElement(T,{roomCode:x}):n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.84a00018.chunk.js.map