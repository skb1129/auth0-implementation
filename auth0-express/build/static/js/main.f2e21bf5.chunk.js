(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),s=(n(13),n(3)),i=n(1),u=n.n(i),l=n(2),p=n(7),h="",d="",f=new p.a.WebAuth({domain:"dev-4bulwykj.auth0.com",clientID:"XXH9skh44KSude1nhCGM74R9TciHylrj",audience:"http://10.14.2.206:8000",redirectUri:"http://localhost:8000",scope:"openid profile email address phone read:profile",responseType:"token id_token"}),m=function(){var e=Object(l.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dev-4bulwykj.auth0.com/mfa/associate",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(d)},body:JSON.stringify({authenticator_types:["oob"],oob_channels:["sms","email"],phone_number:"+919814068029"})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,h=n.oob_code,console.log(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://dev-4bulwykj.auth0.com/mfa/challenge",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({mfa_token:d,challenge_type:"oob",client_id:"XXH9skh44KSude1nhCGM74R9TciHylrj"})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,h=n.oob_code,console.log(n),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),m(),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark(function e(t){var n,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/private",{headers:{Authorization:"".concat(t.tokenType," ").concat(t.accessToken)}});case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,console.log(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark(function e(t){var n,o,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,{grant_type:"http://auth0.com/oauth/grant-type/mfa-oob",client_id:"XXH9skh44KSude1nhCGM74R9TciHylrj",mfa_token:d,oob_code:h,binding_code:t},(n=new FormData).append("grant_type","http://auth0.com/oauth/grant-type/mfa-oob"),n.append("client_id","XXH9skh44KSude1nhCGM74R9TciHylrj"),n.append("mfa_token",d),n.append("oob_code",h),n.append("binding_code",t),e.next=10,fetch("https://dev-4bulwykj.auth0.com/oauth/token",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(d)},body:n});case 10:return o=e.sent,e.next=13,o.json();case 13:a=e.sent,console.log(a),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[0,17]])}));return function(t){return e.apply(this,arguments)}}(),g=function(e,t){f.client.login({realm:"Username-Password-Authentication",username:e,password:t},function(e,t){if(e&&"mfa_required"===e.code)return d=e.original.response.body.mfa_token,b(),void console.log(e);console.log(t),v(t)})};n(15);var w=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),i=Object(s.a)(c,2),u=i[0],l=i[1],p=Object(o.useState)(""),h=Object(s.a)(p,2),d=h[0],f=h[1];return a.a.createElement("div",{className:"App"},a.a.createElement("input",{type:"email",value:n,onChange:function(e){return r(e.target.value)}}),a.a.createElement("input",{type:"password",value:u,onChange:function(e){return l(e.target.value)}}),a.a.createElement("button",{type:"button",onClick:function(){return g(n,u)}},"Sign In"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",value:d,onChange:function(e){return f(e.target.value)}}),a.a.createElement("button",{type:"button",onClick:function(){return y(d)}},"Verify OTP"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.f2e21bf5.chunk.js.map