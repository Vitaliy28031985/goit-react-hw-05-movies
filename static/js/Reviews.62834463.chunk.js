"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[753],{168:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),o=e(871),c=e(791),i=e(690),u="Reviews_list__okdpy",a=e(184);function f(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],s=(0,o.UO)().id;return(0,c.useEffect)((function(){(0,i.Bt)(s).then(f)}),[s]),(0,a.jsx)(a.Fragment,{children:e.length>0?(0,a.jsx)("ul",{className:u,children:e.map((function(n){return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h2",{children:["Author: ",n.author]}),(0,a.jsx)("p",{children:n.content})]},n.id)}))}):(0,a.jsx)("p",{className:u,children:"Sorry, there are no reviews"})})}},690:function(n,t,e){e.d(t,{Bt:function(){return s},Ny:function(){return a},f:function(){return u},jE:function(){return i},y:function(){return f}});var r=e(590),o="https://api.themoviedb.org/3/",c="da16a0fca1d07603f8ad5b63eb5e61b5",i=function(){return fetch("".concat(o,"trending/movie/day?api_key=").concat(c)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Nothing was found for your request"))}))},u=function(n){return fetch("".concat(o,"search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Nothing was found for your request"))}))},a=function(n){return fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return{title:n.title,popularity:n.popularity,overview:n.overview,genres:n.genres.flatMap((function(n){return n.name})).join(", "),poster_path:n.poster_path}}))},f=function(n){return fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return(0,r.XX)(n.cast)}))},s=function(n){return fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return(0,r.l2)(n.results)}))}},590:function(n,t,e){e.d(t,{XX:function(){return o},l2:function(){return c},zX:function(){return r}});var r=function(n){return n.map((function(n){return{id:n.id,title:n.title}}))},o=function(n){return n.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}}))},c=function(n){return n.map((function(n){return{id:n.id,author:n.author,content:n.content}}))}}}]);
//# sourceMappingURL=Reviews.62834463.chunk.js.map