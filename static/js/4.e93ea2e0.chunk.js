(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{56:function(e,t,a){"use strict";var n=a(62),s=a.n(n),r=a(63),c=a(64),A=a.n(c),i="98a377205a96ff71da3bcf70b617967d";A.a.defaults.baseURL="https://api.themoviedb.org/";var o=function(){var e=Object(r.a)(s.a.mark((function e(){var t,a,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.prev=1,e.next=4,A.a.get("3/trending/all/day?api_key=".concat(i,"&page=").concat(t,"&per_page=40"));case 4:return a=e.sent,n=a.data.results,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&include_adult=false"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return a=e.sent,e.abrupt("return",a.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return a=e.sent,n=a.data,e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),g={trendingMoviesApi:o,searchMoviesApi:l,moviesIdApi:u,castMoviesApi:p,reviewsMoviesApi:b};t.a=g},59:function(e,t,a){e.exports={title:"PageHeading_title__djAS9"}},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(59),s=a.n(n),r=a(1),c=function(e){var t=e.title;return Object(r.jsx)("h1",{className:s.a.title,children:t})}},95:function(e,t,a){},96:function(e,t,a){e.exports={general:"MoviesId_general__1KwM3",box_image:"MoviesId_box_image__2rj_x",image:"MoviesId_image__2Hv3s",box_info:"MoviesId_box_info__101gX",title:"MoviesId_title__2hjgW",title_info:"MoviesId_title_info__2UpcT",text:"MoviesId_text__DT2hb"}},97:function(e,t,a){e.exports={button:"GoBack_button__1ynk8"}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(60),s=(a(95),a(56)),r=a(0),c=a(3),A=a(61),i=a(96),o=a.n(i),l=a(1),u=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:o.a.general,children:[Object(l.jsx)("div",{className:o.a.box_image,children:Object(l.jsx)("img",{className:o.a.image,src:t.poster_path?"".concat("http://image.tmdb.org/t/p/w185").concat(t.poster_path):"data:image/jpeg;base64,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",alt:t.title})}),Object(l.jsxs)("div",{className:o.a.box_info,children:[Object(l.jsx)("h2",{className:o.a.title,children:t.original_title||t.name}),Object(l.jsxs)("p",{className:o.a.text,children:["(",t.release_date,")"]}),Object(l.jsx)("h3",{className:o.a.title_info,children:"Status"}),Object(l.jsx)("p",{className:o.a.text,children:t.status}),Object(l.jsxs)("p",{className:o.a.text,children:["User Score: ",10*t.vote_average,"%"]}),Object(l.jsx)("h3",{className:o.a.title_info,children:"Genres"}),Object(l.jsx)("p",{className:o.a.text,children:t.genres.map((function(e){return e.name})).join(", ")}),Object(l.jsx)("h3",{className:o.a.title_info,children:"Overview"}),Object(l.jsx)("p",{className:o.a.text,children:t.overview})]})]})},p=a(97),b=a.n(p),g=function(){var e=Object(c.f)(),t=Object(c.g)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:b.a.button,type:"button",onClick:function(){var a,n,s;e.push(null!==(a=null===t||void 0===t||null===(n=t.state)||void 0===n||null===(s=n.from)||void 0===s?void 0:s.location)&&void 0!==a?a:"/")},children:"\u21a9 Previous page"})})},v=function(){var e=Object(c.h)().movieId,t=Object(c.i)(),a=(t.url,t.path,Object(c.g)(),Object(r.useState)(null)),i=Object(n.a)(a,2),o=i[0],p=i[1];return Object(r.useEffect)((function(){s.a.moviesIdApi(e).then(p).catch((function(e){console.log(e.message)}))}),[e]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(A.a,{title:"Information about the film."}),Object(l.jsx)(g,{}),o&&Object(l.jsx)(u,{movie:o})]})}}}]);
//# sourceMappingURL=4.e93ea2e0.chunk.js.map