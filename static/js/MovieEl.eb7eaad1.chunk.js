"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{730:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r=e(885),i=e(501),c=e(871),o=e(791),a=e(690),s="MovieEl_img__vfzP9",u="MovieEl_button__QDROA",l="MovieEl_infoFilm__CfPWg",f="MovieEl_title__hg+zm",h="MovieEl_titleText__Wz7mG",d="MovieEl_text__AWIPG",_="MovieEl_linkConteiner__uDoNU",m="MovieEl_link__vqaMX",v="MovieEl_titleLink__-iUuH",p=e(184);function j(){var n=(0,o.useState)({}),t=(0,r.Z)(n,2),e=t[0],j=t[1],x=(0,c.TH)(),N=(0,c.s0)(),g=(0,c.UO)().id;(0,o.useEffect)((function(){(0,a.Ny)(g).then(j)}),[g]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:u,onClick:function(){var n,t;N(null!==(n=null===x||void 0===x||null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==n?n:N(-1))},children:"Go back"}),(0,p.jsxs)("div",{children:[null===e.poster_path?(0,p.jsx)("img",{className:s,src:"https://via.placeholder.com/250x200",alt:e.title}):(0,p.jsx)("img",{className:s,src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:e.title}),(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("h2",{className:f,children:e.title}),(0,p.jsxs)("p",{className:h,children:["Popularity: ",(0,p.jsx)("span",{className:d,children:e.popularity})]}),(0,p.jsx)("h2",{className:h,children:"Overview"}),(0,p.jsx)("p",{className:d,children:e.overview}),(0,p.jsx)("h3",{className:h,children:"Genres"}),(0,p.jsx)("p",{className:d,children:e.genres})]}),(0,p.jsx)("div",{className:_,children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("p",{className:v,children:"Additional information"}),(0,p.jsx)("li",{children:(0,p.jsx)(i.OL,{className:m,to:"cast".concat(g),children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(i.OL,{className:m,to:"reviews".concat(g),children:" Reviews"})})]})})]}),(0,p.jsx)(c.j3,{})]})}},690:function(n,t,e){e.d(t,{Bt:function(){return l},Ny:function(){return s},f:function(){return a},jE:function(){return o},y:function(){return u}});var r=e(590),i="https://api.themoviedb.org/3/",c="da16a0fca1d07603f8ad5b63eb5e61b5",o=function(){return fetch("".concat(i,"trending/movie/day?api_key=").concat(c)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Nothing was found for your request"))}))},a=function(n){return fetch("".concat(i,"search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Nothing was found for your request"))}))},s=function(n){return fetch("".concat(i,"movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.genres=n.genres.flatMap((function(n){return n.name})).join(", "),n}))},u=function(n){return fetch("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return(0,r.XX)(n.cast)}))},l=function(n){return fetch("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return(0,r.l2)(n.results)}))}},590:function(n,t,e){e.d(t,{XX:function(){return i},l2:function(){return c},zX:function(){return r}});var r=function(n){return n.map((function(n){return{id:n.id,title:n.title}}))},i=function(n){return n.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}}))},c=function(n){return n.map((function(n){return{id:n.id,author:n.author,content:n.content}}))}}}]);
//# sourceMappingURL=MovieEl.eb7eaad1.chunk.js.map