"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[489],{242:function(e,t,n){n.d(t,{bI:function(){return p},kK:function(){return l},l2:function(){return s},sv:function(){return f},vw:function(){return i}});var r=n(861),a=n(757),c=n.n(a),u=n(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="2401e69eb96085cec1913a6203f07437",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/movie/day?api_key=".concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/credits?language=en-US&api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/reviews?language=en-US&page=1&api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},794:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(689),a=n(87),c=n(184),u=function(e){var t=e.movie,n=(0,r.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:(0,c.jsx)("p",{children:e.title})})},e.id)}))})})}},489:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),c=n(757),u=n.n(c),o=n(242),i=n(794),s=n(791),p=n(184);function l(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,s.useState)([]),f=(0,a.Z)(l,2),v=f[0],h=f[1],d=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n.trim()){e.next=5;break}return e.next=3,(0,o.bI)(n);case 3:t=e.sent,h(t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{type:"text",placeholder:"Enter the movie title",value:n,onChange:function(e){return c(e.target.value)}}),(0,p.jsx)("button",{onClick:function(){return d()},children:"Search"}),(0,p.jsx)(i.r,{movie:v})]})}}}]);
//# sourceMappingURL=489.ce2404c0.chunk.js.map