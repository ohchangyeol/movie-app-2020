(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{21:function(e,t,s){},40:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),a=s.n(n),i=s(30),c=s.n(i),o=s(17),l=s.n(o),d=s(31),j=s(11),m=s(12),u=s(14),h=s(13),b=s(8),v=s(2);s(40);var p=function(e){var t=e.id,s=e.year,n=e.title,a=e.summary,i=e.poster,c=e.genres,o=e.background,l=e.rating,d=e.torrents720p,j=e.torrents1080p;return Object(r.jsx)("div",{className:"movie",children:Object(r.jsxs)(b.b,{to:{pathname:"movie/".concat(t),state:{year:s,title:n,summary:a,poster:i,genres:c,background:o,rating:l,torrents720p:d,torrents1080p:j}},children:[Object(r.jsx)("img",{src:i,alt:n,title:n}),Object(r.jsxs)("div",{className:"movie_data",children:[Object(r.jsx)("h3",{className:"movie_title",children:n}),Object(r.jsx)("h5",{className:"movie_year",children:s}),Object(r.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(r.jsx)("li",{className:"genres_genre",children:e},t)}))})]})]})})};s(46);var O=function(e){var t=e.states,s=t.isLoading,n=t.movies;return Object(r.jsxs)("section",{className:"container",children:[Object(r.jsx)("div",{className:"movie_list",children:"Movie List"}),s?Object(r.jsx)("div",{className:"loader",children:Object(r.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(r.jsx)("div",{className:"movies",children:n.map((function(e){return Object(r.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,background:e.background_image,rating:e.rating,torrents720p:e.torrents[0].url,torrents1080p:e.torrents[1].url},e.id)}))})]})},x=(s(47),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(j.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={winwidth:window.innerWidth},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props,s=t.location,r=t.history;void 0===s.state&&r.push("/"),window.addEventListener("resize",(function(){e.setState({winwidth:window.innerWidth}),console.log(e.state.winwidth)}))}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(r.jsxs)("div",{className:"detail_container",children:[Object(r.jsx)("img",{className:"detail_background",src:this.state.winwidth>1090?e.state.background:e.state.poster}),Object(r.jsxs)("div",{className:"detail_gird",children:[Object(r.jsx)("div",{className:"detail_title",children:Object(r.jsx)("h1",{children:e.state.title})}),Object(r.jsxs)("div",{className:"bottom_grid",children:[Object(r.jsx)("div",{className:"detail_poster",children:Object(r.jsx)("img",{src:e.state.poster})}),Object(r.jsx)("div",{className:"detail_sum",children:Object(r.jsxs)("div",{className:"detail_sum",children:[Object(r.jsx)("h3",{children:"Summary"}),Object(r.jsx)("span",{children:e.state.summary})]})}),Object(r.jsxs)("div",{className:"detail_rating_down",children:[Object(r.jsx)("div",{className:"detail_rating_box",children:Object(r.jsx)("div",{className:"detail_rating",children:Object(r.jsx)("span",{children:e.state.rating})})}),Object(r.jsxs)("div",{className:"detail_down",children:[Object(r.jsx)("h3",{children:"Download"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.state.torrents720p,children:"720p"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.state.torrents1080p,children:"1080p"})})]})]})]})]})]})]}):null}}]),s}(a.a.Component));s(48);var g=function(){return Object(r.jsxs)("div",{className:"about_container",children:[Object(r.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(r.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};s(21);var f=function(e){var t=e.id,s=e.year,n=e.title,a=e.summary,i=e.poster,c=e.genres,o=e.background,l=e.rating,d=e.torrents720p,j=e.torrents1080p;return Object(r.jsx)(b.b,{to:{pathname:"movie/".concat(t),state:{id:t,year:s,title:n,summary:a,poster:i,genres:c,background:o,rating:l,torrents720p:d,torrents1080p:j}},children:n})};var _=function(e){return Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)(b.b,{className:"home",to:"/",children:Object(r.jsx)("span",{children:"M"})}),Object(r.jsx)("div",{className:"nav_movies_list",children:e.states.map((function(e){return Object(r.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,background:e.background_image,rating:e.rating,torrents720p:e.torrents[0].url,torrents1080p:e.torrents[1].url},e.id)}))})]})},y=s(33),w=s.n(y),N=(s(66),function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(j.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(l.a.mark((function t(){var s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,r=s.data.data.movies,e.setState({movies:r,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)(b.a,{children:[Object(r.jsx)(_,{states:this.state.movies}),Object(r.jsx)(v.a,{path:"/",exact:!0,render:function(){return Object(r.jsx)(O,{states:e.state})}}),Object(r.jsx)(v.a,{path:"/about",component:g}),Object(r.jsx)(v.a,{path:"/movie/:id",component:x})]})}}]),s}(a.a.Component));c.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.395a1737.chunk.js.map