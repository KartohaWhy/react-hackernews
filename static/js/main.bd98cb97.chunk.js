(this.webpackJsonpinsta=this.webpackJsonpinsta||[]).push([[0],{24:function(e,t,n){e.exports=n(51)},29:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/logo.bf5a18f8.svg"},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),s=n(20),i=n.n(s),c=(n(29),n(23)),l=n(6),u=n(7),h=n(2),f=n(9),m=n(8),d=n(3),v=n(4),p=n(10),S=(n(30),n(21)),b=n.n(S),y=n(5),g=n(22),E=n.n(g),w=(n(50),"https://hn.algolia.com/api/v1"),O={NONE:function(e){return e},TITLE:function(e){return Object(y.sortBy)(e,"title")},AUTHOR:function(e){return Object(y.sortBy)(e,"author")},COMMENTS:function(e){return Object(y.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(y.sortBy)(e,"points").reverse()}},j=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e))._isMounted=!1,a.state={results:null,searchKey:"",searchTerm:"",error:null,isLoading:!1},a.needsToSearchTopStories=a.needsToSearchTopStories.bind(Object(h.a)(a)),a.setSearchTopStories=a.setSearchTopStories.bind(Object(h.a)(a)),a.fetchSearchTopStories=a.fetchSearchTopStories.bind(Object(h.a)(a)),a.onSearchChange=a.onSearchChange.bind(Object(h.a)(a)),a.onSearchSubmit=a.onSearchSubmit.bind(Object(h.a)(a)),a.onDismiss=a.onDismiss.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"needsToSearchTopStories",value:function(e){return!this.state.results[e]}},{key:"setSearchTopStories",value:function(e){var t=e.hits,n=e.page;this.setState(function(e,t){return function(n){var a=n.searchKey,r=n.results,o=r&&r[a]?r[a].hits:[],s=[].concat(Object(p.a)(o),Object(p.a)(e));return{results:Object(v.a)(Object(v.a)({},r),{},Object(d.a)({},a,{hits:s,page:t})),isLoading:!1}}}(t,n))}},{key:"fetchSearchTopStories",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.setState({isLoading:!0}),b()("".concat(w).concat("/search","?").concat("query=").concat(e,"&").concat("page=").concat(n,"&").concat("hitsPerPage=").concat("20")).then((function(e){return t._isMounted&&t.setSearchTopStories(e.data)})).catch((function(e){return t._isMounted&&t.setState({error:e})}))}},{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.needsToSearchTopStories(t)&&this.fetchSearchTopStories(t),e.preventDefault()}},{key:"onDismiss",value:function(e){var t=this.state,n=t.searchKey,a=t.results,r=a[n],o=r.hits,s=r.page,i=o.filter((function(t){return t.objectID!==e}));this.setState({results:Object(v.a)(Object(v.a)({},a),{},Object(d.a)({},n,{hits:i,page:s}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTerm,a=t.results,r=t.searchKey,s=t.error,i=t.isLoading,c=a&&a[r]&&a[r].page||0,l=a&&a[r]&&a[r].hits||[];return o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"interactions"},o.a.createElement(T,{value:n,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"\u0418\u0449\u0443")),s?o.a.createElement("div",{className:"interactions"},o.a.createElement("p",null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.")):o.a.createElement(k,{list:l,onDismiss:this.onDismiss}),o.a.createElement("div",{className:"interactions"},o.a.createElement(D,{isLoading:i,onClick:function(){return e.fetchSearchTopStories(r,c+1)}},"\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0439")))}}]),n}(r.Component),T=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.onChange,r=t.onSubmit,s=t.children;return o.a.createElement("form",{onSubmit:r},o.a.createElement("input",{type:"text",value:n,onChange:a,ref:function(t){e.input=t}}),o.a.createElement("button",{type:"submit"},s))}}]),n}(r.Component),k=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={sortKey:"NONE",isSortReverse:!1},a.onSort=a.onSort.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.onDismiss,a=this.state,r=a.sortKey,s=a.isSortReverse,i=O[r](t),c=s?i.reverse():i;return o.a.createElement("div",{className:"table"},o.a.createElement("div",{className:"table-header"},o.a.createElement("span",{style:{width:"40%"}},o.a.createElement(N,{sortKey:"TITLE",onSort:this.onSort,activeSortKey:r},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a")),o.a.createElement("span",{style:{width:"30%"}},o.a.createElement(N,{sortKey:"AUTHOR",onSort:this.onSort,activeSortKey:r},"\u0410\u0432\u0442\u043e\u0440")),o.a.createElement("span",{style:{width:"10%"}},o.a.createElement(N,{sortKey:"COMMENTS",onSort:this.onSort,activeSortKey:r},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438")),o.a.createElement("span",{style:{width:"10%"}},o.a.createElement(N,{sortKey:"POINTS",onSort:this.onSort,activeSortKey:r},"\u041e\u0447\u043a\u0438")),o.a.createElement("span",{style:{width:"10%"}},"\u0410\u0440\u0445\u0438\u0432")),c.map((function(e){return o.a.createElement("div",{key:e.objectID,className:"table-row"},o.a.createElement("span",{style:{width:"40%"}},o.a.createElement("a",{href:e.url},e.title)),o.a.createElement("span",{style:{width:"30%"}},e.author),o.a.createElement("span",{style:{width:"10%"}},e.num_comments),o.a.createElement("span",{style:{width:"10%"}},e.points),o.a.createElement("span",{style:{width:"10%"}},o.a.createElement(C,{onClick:function(){return n(e.objectID)},className:"button-inline"},"\u041e\u0442\u0431\u0440\u043e\u0441\u0438\u0442\u044c")))})))}}]),n}(r.Component),N=function(e){var t=e.sortKey,n=e.activeSortKey,a=(e.isSortReverse,e.onSort),r=e.children,s=E()("button-inline",{"fas fa-arrow-up":!1&t===n,"fas fa-arrow-down":t===n});return o.a.createElement(C,{onClick:function(){return a(t)},className:s},r)},C=function(e){var t=e.onClick,n=e.className,a=e.children;return o.a.createElement("button",{onClick:t,className:n,type:"button"},a)},K=function(){return o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-spinner fa-spin fa-3x fa-fw"}),o.a.createElement("span",{class:"sr-only"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))},D=(a=C,function(e){var t=e.isLoading,n=Object(c.a)(e,["isLoading"]);return t?o.a.createElement(K,null):o.a.createElement(a,n)});C.defaultProps={className:""};var M=j,L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-hackernews",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-hackernews","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.bd98cb97.chunk.js.map