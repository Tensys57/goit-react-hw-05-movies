"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(r,t,n){n.r(t);var e=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(689),o=n(887),f=n(184);t.default=function(){var r=(0,i.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),u=n[0],p=n[1];if((0,s.useEffect)((function(){try{var t=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,o.Jh)(t);case 2:n=r.sent,p(n.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();t(r)}catch(n){console.log("Error")}}),[r]),u)return(0,f.jsxs)(f.Fragment,{children:[0===u.length&&(0,f.jsx)("p",{children:"We don't have any reviews for this movie."}),(0,f.jsx)("ul",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:u.map((function(r){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",r.author]}),(0,f.jsx)("p",{children:r.content})]},r.id)}))})]})}},887:function(r,t,n){n.d(t,{Hg:function(){return s},IQ:function(){return f},Jh:function(){return p},s_:function(){return o},zi:function(){return i}});var e=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"d36c76811afe64ae46b83ec8fd55864b"};var s=function(){var r=(0,e.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/all/day?");case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search/movie?query=".concat(t,"&page=1"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/reviews?page=1"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.c4c3150b.chunk.js.map