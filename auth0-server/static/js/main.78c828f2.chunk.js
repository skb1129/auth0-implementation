(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(5),c=t.n(r),i=(t(13),t(2)),s=t(1),u=t.n(s),l=t(6),p=new(t(7).a.WebAuth)({domain:"dev-4bulwykj.auth0.com",clientID:"XXH9skh44KSude1nhCGM74R9TciHylrj",audience:"http://10.14.2.206:8000",redirectUri:"http://localhost:8000",scope:"openid profile email address phone read:profile",responseType:"token id_token"}),h=function(){var e=Object(l.a)(u.a.mark(function e(n){var t,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/private",{headers:{Authorization:"".concat(n.tokenType," ").concat(n.accessToken)}});case 3:return t=e.sent,e.next=6,t.json();case 6:o=e.sent,console.log(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(n){return e.apply(this,arguments)}}(),d=function(e,n){p.client.login({realm:"Username-Password-Authentication",username:e,password:n},function(e,n){console.log(e),console.log(n),h(n)})};t(15);var m=function(){var e=Object(o.useState)(""),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),s=Object(i.a)(c,2),u=s[0],l=s[1];return a.a.createElement("div",{className:"App"},a.a.createElement("input",{type:"email",value:t,onChange:function(e){return r(e.target.value)}}),a.a.createElement("input",{type:"password",value:u,onChange:function(e){return l(e.target.value)}}),a.a.createElement("button",{type:"button",onClick:function(){return d(t,u)}},"Sign In"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.78c828f2.chunk.js.map