"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{9355:function(n,e,t){t.d(e,{bI:function(){return l},kK:function(){return d},l2:function(){return f},sv:function(){return v},vw:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),u=t(340),i=t(1686),o=t.n(i);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="2401e69eb96085cec1913a6203f07437",p=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/trending/movie/day?api_key=".concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),o().Notify.failure("".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),o().Notify.failure("".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1&api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),o().Notify.failure("".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/credits?language=en-US&api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),o().Notify.failure("".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/reviews?language=en-US&page=1&api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),o().Notify.failure("".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},4219:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,a,c,u,i,o=t(5861),s=t(9439),p=t(7757),f=t.n(p),l=t(9355),d=t(1686),v=t.n(d),h=t(2791),x=t(8881),b=t(7689),g=t(168),m=t(5867),w=m.ZP.ul(r||(r=(0,g.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),y=m.ZP.li(a||(a=(0,g.Z)(["\n  width: calc(16.666% - 10px);\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #555;\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-align: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  background-color: #eee;\n"]))),k=m.ZP.b(c||(c=(0,g.Z)(["\n  display: block;\n  font-size: 14px;\n  margin-bottom: 5px;\n"]))),Z=m.ZP.p(u||(u=(0,g.Z)(["\n  font-size: 12px;\n  margin: 5px 0;\n"]))),_=m.ZP.img(i||(i=(0,g.Z)(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  margin-top: 10px;\n"]))),j=t(184);function N(){var n=(0,h.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,b.UO)().movieId,c=(0,h.useState)(!1),u=(0,s.Z)(c,2),i=u[0],p=u[1];return(0,h.useEffect)((function(){var n=function(){var n=(0,o.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,l.kK)(a);case 4:e=n.sent,r(e.cast),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v().Notify.failure("".concat(n.t0));case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,j.jsxs)("div",{children:[i&&(0,j.jsx)(x.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),(0,j.jsx)(w,{children:t.map((function(n){var e=n.id,t=n.name,r=n.character,a=n.profile_path;return(0,j.jsxs)(y,{children:[(0,j.jsx)(k,{children:t}),(0,j.jsxs)(Z,{children:["Character: ",r]}),(0,j.jsx)(_,{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t})]},e)}))})]})}}}]);
//# sourceMappingURL=219.e682b54a.chunk.js.map