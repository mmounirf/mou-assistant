(this["webpackJsonpmou-assistant"]=this["webpackJsonpmou-assistant"]||[]).push([[0],{26:function(e,t,n){e.exports=n(57)},31:function(e,t,n){},32:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),l=(n(31),n(32),n(2)),s=n(20),i=n(21),u=n(22),m=n.n(u),p=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"send",value:function(e){var t={sessionId:"12345678",queryInput:{text:{text:e,languageCode:"en"}}};return m.a.post("https://us-central1-mouassistant-ewdyyc.cloudfunctions.net/dialogflowGateway",t)}},{key:"scrollToBottom",value:function(){var e=document.getElementsByClassName("conversation")[0].children;e[e.length-1]&&e[e.length-1].scrollIntoView({behavior:"smooth",block:"end"})}}]),e}(),f=function(){var e=Object(l.b)(),t=function(t){return e({type:"SEND_MESSAGE",payload:t})};return o.a.createElement("input",{type:"text",placeholder:"Tell me something!",onKeyDown:function(e){13===e.keyCode&&e.target.value.length&&(e.preventDefault(),t({message:e.target.value,timestamp:new Date,type:"human"}),p.send(e.target.value).then((function(e){t({message:e.data.fulfillmentText,timestamp:new Date,type:"bot"})})),e.target.value="")}})},y=function(e){return e.children},g=(n(55),n(56),function(){return o.a.createElement("p",{className:"bot loading"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))}),d=function(){var e=Object(l.c)((function(e){return e.messages})),t=Object(l.c)((function(e){return e.waitingBotReply}));return Object(a.useEffect)((function(){p.scrollToBottom()})),o.a.createElement("div",{className:"conversation"},e.map((function(e,t){return o.a.createElement(y,{key:t},o.a.createElement("p",{className:e.type},e.message))})),function(){if(t)return o.a.createElement(g,null)}())},h=function(){var e=Object(l.b)(),t=function(t){return e({type:"SEND_MESSAGE",payload:t})};return p.send("hi").then((function(e){t({message:e.data.fulfillmentText,timestamp:new Date,type:"bot"})})).catch((function(){return t({message:"Looks like you have a connection problem",timestamp:new Date,type:"error"})})),o.a.createElement("div",{className:"main-wrapper"},o.a.createElement(d,null),o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(5),v=n(25),E=n(23);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={messages:[],waitingBotReply:!0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return"SEND_MESSAGE"===t.type?O({},e,{messages:[].concat(Object(v.a)(e.messages),[t.payload]),waitingBotReply:"human"===t.payload.type}):e},k=n(24),S=Object(b.createStore)(D,Object(k.composeWithDevTools)()),B=document.getElementById("root");c.a.render(o.a.createElement(l.a,{store:S},o.a.createElement(h,null)),B),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e91dc222.chunk.js.map