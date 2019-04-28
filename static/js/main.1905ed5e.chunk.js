(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(n,e,t){n.exports=t(50)},37:function(n,e,t){},39:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(15),c=t.n(r),i=(t(33),t(35),t(37),t(4)),u=(t(39),t(5)),d=t(7),l=t(11),f=t(24),s=t(18),b=t(2),p=t(3);function v(){var n=Object(b.a)(["\n  display: inline-block;\n  margin: 8px 16px;\n"]);return v=function(){return n},n}function m(){var n=Object(b.a)(["\n  background-color: #039373;\n  color: #FFFFFF;\n  font-size: 1.1em;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n"]);return m=function(){return n},n}var O=p.a.footer(m()),h=p.a.span(v()),y=function(){return a.a.createElement(O,null,a.a.createElement(h,null,"App created by: Tyrice C."))};function j(){var n=Object(b.a)(["\n  color: #ffffff;\n  font-size: 1.6em;\n  margin-left: 16px;\n"]);return j=function(){return n},n}function g(){var n=Object(b.a)(["\n  background-color: #45ac4f;\n  overflow: auto;\n"]);return g=function(){return n},n}var E=p.a.header(g()),x=p.a.h1(j()),k=function(){return a.a.createElement(E,null,a.a.createElement(x,null,"What Todo"))},w=t(21),I=t(22),C=t(25),T=t(23),D=t(27);function N(){var n=Object(b.a)(["\n  background-color: #398c3a;\n  border: none;\n  color: #ffffff;\n  margin: 8px;\n  padding: 8px;\n"]);return N=function(){return n},n}function S(){var n=Object(b.a)(["\n  border: none;\n  margin: 8px 16px;\n  width: 75%;\n\n  &:focus {\n    border-bottom: 1px solid #398c3a;\n    outline: none;\n    outline-style: none;\n  }\n"]);return S=function(){return n},n}function R(){var n=Object(b.a)(["\n  display: flex;\n  background-color: #ffffff;\n  align-items: center;\n  justify-content: space-between;\n"]);return R=function(){return n},n}var _=p.a.form(R()),F=p.a.input(S()),P=p.a.button(N()),A=function(n){function e(n){var t;return Object(w.a)(this,e),(t=Object(C.a)(this,Object(T.a)(e).call(this,n))).onChange=function(n){t.setState({value:n.target.value})},t.onFocus=function(n){n.target.select()},t.onSubmit=function(n){n.preventDefault(),t.props.onSubmit(t.state.value),t.setState({value:""})},t.state={value:n.value},t}return Object(D.a)(e,n),Object(I.a)(e,[{key:"componentDidMount",value:function(){this.textInput.focus()}},{key:"render",value:function(){var n=this,e=this.props,t=e.buttonText,o=e.className,r=e.placeholder;return a.a.createElement(_,{className:o,onSubmit:this.onSubmit},a.a.createElement(F,{onChange:this.onChange,onFocus:this.onFocus,placeholder:r,innerRef:function(e){return n.textInput=e},value:this.state.value}),a.a.createElement(P,null,t))}}]),e}(a.a.Component);A.defaultProps={buttonText:"Save",className:"",placeholder:"Enter what todo",value:""};var M=A,W=function(n){var e=n.className,t=n.dispatch;return a.a.createElement(M,{buttonText:"Add",className:e,onSubmit:function(n){return t(function(n){return{payload:{todo:n},type:"ADD_TODO"}}(n))}})};W.defaultProps={className:""};var L=Object(d.b)()(W),U=t(26),z=t(6);function B(n){var e=function(n,e){if("object"!==typeof n||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===typeof e?e:String(e)}var H={todos:{byId:{},idCounter:0},lists:{byId:{0:{id:0,name:"What Todo"}}},app:{currentList:0}},J=function(n){return Object.values(n.todos.byId)},K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return Object(i.a)({},n,{todos:Object(i.a)({},n.todos,{byId:Object(i.a)({},n.todos.byId,Object(z.a)({},n.todos.idCounter,{id:n.todos.idCounter,list:0,value:e.payload.todo})),idCounter:n.todos.idCounter+1})});case"CHECK_TODO":return Object(i.a)({},n,{todos:Object(i.a)({},n.todos,{byId:Object(i.a)({},n.todos.byId,Object(z.a)({},e.payload.index,Object(i.a)({},n.todos.byId[e.payload.index],{checked:!n.todos.byId[e.payload.index].checked})))})});case"EDIT_TODO":return Object(i.a)({},n,{todos:Object(i.a)({},n.todos,{byId:Object(i.a)({},n.todos.byId,Object(z.a)({},e.payload.index,Object(i.a)({},n.todos.byId[e.payload.index],{isInEditMode:!0})))})});case"REMOVE_TODO":var t=n.todos.byId,o=(t[e.payload.index],Object(U.a)(t,[e.payload.index].map(B)));return Object(i.a)({},n,{todos:Object(i.a)({},n.todos,{byId:Object(i.a)({},o)})});case"UPDATE_TODO":return Object(i.a)({},n,{todos:Object(i.a)({},n.todos,{byId:Object(i.a)({},n.todos.byId,Object(z.a)({},e.payload.index,Object(i.a)({},n.todos.byId[e.payload.index],{value:e.payload.update,isInEditMode:!1})))})});default:return n}};function V(){var n=Object(b.a)(["\n  background-color: #ffffff;\n  cursor: pointer;\n  padding: 4px;\n  margin: 0 8px;\n  border: none;\n"]);return V=function(){return n},n}function q(){var n=Object(b.a)(["\n  background-color: #ffffff;\n  margin: 8px 0;\n"]);return q=function(){return n},n}var $=p.a.div(q()),G=p.a.button(V()),Q=function(n){var e=n.className,t=n.onCheck,o=n.onEdit,r=n.onRemove;return a.a.createElement($,{className:e},a.a.createElement(G,{onClick:t},a.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})),a.a.createElement(G,{onClick:o},a.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),a.a.createElement(G,{onClick:r},a.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})))};Q.defaultProps={className:"",onEdit:function(){},onRemove:function(){}};var X=Q;function Y(){var n=Object(b.a)(["\n  padding: 8px;\n  text-decoration: ",";\n  color: ",";\n"]);return Y=function(){return n},n}function Z(){var n=Object(b.a)(["\n  border-bottom: 1px solid #ececec;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]);return Z=function(){return n},n}var nn=p.a.li(Z()),en=p.a.div(Y(),function(n){return n.checked?"line-through":"none"},function(n){return n.checked?"#398c3a":"#000000"}),tn=function(n){var e=n.checked,t=n.children,o=n.onCheck,r=n.onEdit,c=n.onRemove;return a.a.createElement(nn,null,a.a.createElement(en,{checked:e},t),a.a.createElement(X,{onCheck:o,onEdit:r,onRemove:c}))};tn.defaultProps={onCheck:function(){},onEdit:function(){},onRemove:function(){}};var on=tn;function an(){var n=Object(b.a)(["\n  background-color: #ffffff;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"]);return an=function(){return n},n}var rn=p.a.ul(an()),cn=function(n){var e=n.dispatch,t=n.todos;return a.a.createElement(rn,null,t&&t.map(function(n,t){return n.isInEditMode?a.a.createElement(M,{onSubmit:function(t){return e(function(n,e){return{payload:{update:n,index:e},type:"UPDATE_TODO"}}(t,n.id))},value:n.value}):a.a.createElement(on,{key:t,checked:n.checked,onCheck:function(){return e({payload:{index:n.id},type:"CHECK_TODO"})},onEdit:function(){return e({payload:{index:n.id},type:"EDIT_TODO"})},onRemove:function(){return e({payload:{index:n.id},type:"REMOVE_TODO"})}},n.value)}))};cn.defaultProps={todos:[]};var un=Object(d.b)(function(n){return{todos:J(n)}})(cn);function dn(){var n=Object(b.a)(["\n  background-color: #ffffff;\n  border-bottom: 1px solid #ececec;\n"]);return dn=function(){return n},n}function ln(){var n=Object(b.a)(["\n  margin: 8px;\n"]);return ln=function(){return n},n}function fn(){var n=Object(b.a)(["\n  position: relative;\n  min-height: 100vh;\n"]);return fn=function(){return n},n}var sn=p.a.div(fn()),bn=p.a.div(ln()),pn=Object(p.a)(L)(dn()),vn=function(){return a.a.createElement(sn,null,a.a.createElement(k,null),a.a.createElement(bn,null,a.a.createElement(pn,null),a.a.createElement(un,null)),a.a.createElement(y,null))},mn=function(){var n={1:function(n){var e={};return n.todos.forEach(function(n,t){e[t]=Object(i.a)({},n,{id:t,list:0})}),Object(i.a)({},n,{todos:{byId:e,idCounter:n.todos.length}})}},e={key:"todo",storage:f.a,version:1,migrate:Object(l.a)(n,{debug:!1})},t=Object(l.b)(e,K),o=Object(u.c)(t),r=Object(l.c)(o);return a.a.createElement(s.a,{persistor:r},a.a.createElement(d.a,{store:o},a.a.createElement(vn,null)))},On=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function hn(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}c.a.render(a.a.createElement(mn,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/what-to-do",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/what-to-do","/service-worker.js");On?function(n){fetch(n).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):hn(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n):hn(n)})}}()}},[[28,2,1]]]);
//# sourceMappingURL=main.1905ed5e.chunk.js.map