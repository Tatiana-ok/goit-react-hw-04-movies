(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[6],{35:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return c}))},39:function(t,e,r){t.exports={castContainer:"Cast_castContainer__3e1Eb",castImg:"Cast_castImg__3g7cQ"}},49:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return d}));var n=r(36),a=r.n(n),c=r(35),s=r(37),o=r(14),i=r(15),u=r(17),p=r(16),l=r(0),h=r(38),b=r.n(h),f=r(39),j=r.n(f),O=r(1),d=function(t){Object(u.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={id:null,cast:[],noResults:!1,error:null},t}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("https://api.themoviedb.org/3/movie/".concat(this.props.movieId,"/credits?api_key=").concat("b2ac53e8621d02ada7802ecd2ad369f6","&language=en-US"));case 3:(e=t.sent).data.cast.length>0?this.setState(Object(c.a)({},e.data)):this.setState({noResults:!0}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.setState({error:t.t0.message});case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{className:j.a.castContainer,children:this.state.noResults?Object(O.jsx)("p",{children:"We don`t have information"}):this.state.cast.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{children:t.name}),Object(O.jsx)("img",{className:j.a.castImg,src:(e=t.profile_path,null===e?"http://dummyimage.com/200x140/c0c0c0&text=No+photo":"https://image.tmdb.org/t/p/w300/".concat(e)),alt:t.name}),Object(O.jsx)("p",{children:t.character})]},t.id);var e}))}),this.state.error&&Object(O.jsx)("p",{children:this.state.error})]})}}]),r}(l.Component);d.defaultProps={img:""}}}]);
//# sourceMappingURL=6.dd513897.chunk.js.map