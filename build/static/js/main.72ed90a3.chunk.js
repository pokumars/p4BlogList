(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,n){e.exports=n(77)},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),u=n(2),o=n.n(u),s=n(6),i=n(11),d=n.n(i),m="/api/blogs",p=null,f=function(){var e=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(m);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(m,"/").concat(t));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E={getAll:f,setToken:function(e){p="bearer ".concat(e)},create:function(){var e=Object(s.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,d.a.post(m,t,n);case 3:return a=e.sent,console.log("response from create",a.data),e.abrupt("return",a.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.put("".concat(m,"/").concat(t._id?t._id:t.id),t).then(function(e){return console.log("res in update service",e),g("".concat(e.data._id?e.data._id:e.data.id))}).catch(function(e){return console.log(e)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(s.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},console.log("delete request token",p),e.next=4,d.a.delete("".concat(m,"/").concat(t),n);case 4:return a=e.sent,console.log("delete request response",a),e.abrupt("return",a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getBlog:g},v=n(80),b=n(81),h=function(e){var t=e.handleLogin,n=e.username,a=e.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Log in to application"),r.a.createElement(v.a,{onSubmit:t},r.a.createElement(v.a.Group,null,r.a.createElement("div",{className:"username"},r.a.createElement(v.a.Label,null,"username"),r.a.createElement(v.a.Control,Object.assign({id:"usernameInput"},n))),r.a.createElement("div",{className:"password"},r.a.createElement(v.a.Label,null,"password"),r.a.createElement(v.a.Control,Object.assign({id:"passwordInput"},a))),r.a.createElement(b.a,{type:"submit"},"login"))),r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Add blogs and articles that you find interestng here. They can be commented on and liked. The original poster can delete. "))},y={login:function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},O=function(e){var t=e.title,n=e.author,a=e.url,l=e.handleCreateBlog;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onSubmit:l},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(v.a.Label,null,"title")),r.a.createElement("td",null,r.a.createElement(v.a.Control,Object.assign({id:"titleInput",minLength:"5",required:!0},t)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(v.a.Label,null,"author")),r.a.createElement("td",null,r.a.createElement(v.a.Control,Object.assign({id:"authorInput",minLength:"3",required:!0},n)))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(v.a.Label,null,"url")),r.a.createElement("td",null,r.a.createElement(v.a.Control,Object.assign({id:"urlInput",required:!0},a)))))),r.a.createElement(b.a,{type:"submit",id:"createBlogBtn"},"create")))},w=function(e){var t=e.message;if(null===t)return null;var n={color:t.positive?"green":"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return r.a.createElement("div",{style:n},r.a.createElement("p",null,t.message))},k=n(16),x=function(e){var t=Object(a.useState)(!1),n=Object(k.a)(t,2),l=n[0],c=n[1],u={display:l?"none":""},o={display:l?"":"none"},s=function(){return c(!l)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:u},r.a.createElement(b.a,{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:o},e.children,r.a.createElement(b.a,{variant:"outline-danger",size:"sm",onClick:s},"cancel")))},j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{color:"red",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),!e.user&&r.a.createElement("p",null,'to test this out you can use  username: "mojo" and password: "chelsea2005"')))},C=n(21),I=function(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),r=n[0],l=n[1];return{type:e,value:r,onChange:function(e){l(e.target.value)},reset:function(){l("")}}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return e=t.data;default:return e}},S=function(e){return{type:"SET_NOTIFICATION",notification:e}},A=function(){return{type:"SET_NOTIFICATION",notification:null}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.notification;case"REMOVE_NOTIFICATION":return null;default:return e}},T={getAll:function(){var e=Object(s.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("/api/users","/").concat(t));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS":return t.data;default:return e}},_=n(45),U=n(22),F=function(e){return e.sort(function(e,t){return t.likes-e.likes})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return F(t.data);case"ADD_BLOG":return F([].concat(Object(U.a)(e),[t.data]));case"LIKE_BLOG":var n=t.data,a=e.map(function(e){return e.id===n.id?e=n:e});return F(a);case"ADD_COMMENT":var r=t.data,l=e.map(function(e){return e.id===r.id?e=r:e});return F(l);case"DELETE_BLOG":console.log("id --".concat(t.id,"  type--").concat(t.id.type));var c=e.filter(function(e){return e.id!==t.id});return console.log(c),F(c);default:return e}},G=n(12),z=n(78),M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Users"),r.a.createElement("ul",null),r.a.createElement(z.a,{striped:!0,hover:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"User"),r.a.createElement("th",null,"BlogsCreated")),e.users.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(G.b,{key:e.id,to:"/users/".concat(e.id)},e.name?e.name:e.username)),r.a.createElement("td",null,e.blogs.length))}))))},R=function(e){var t=e.user,n=e.clearUser;return r.a.createElement(r.a.Fragment,null,t.name?t.name:t.username," is logged in",r.a.createElement(b.a,{variant:"outline-danger",size:"sm",onClick:function(){window.localStorage.clear(),n()}},"logout"))},q=function(e){var t={borderLeft:"6px solid #1a8cff",backgroundColor:"lightgray",margin:"5px 0px"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{user:e.user,clearUser:e.logout}),r.a.createElement("h2",null,"Blogs"),r.a.createElement("ol",null,e.blogs.map(function(e){return r.a.createElement("li",{key:e.id,style:t,type:"I"},r.a.createElement(G.b,{to:"blogs/".concat(e.id)}," ",e.title," "))})),r.a.createElement(G.b,{to:""}))},J=n(15),K=n(79),V=n(40),W=function(e){var t=e.blog,n=e.handleAddComment,a=I("text"),l=Object.assign({},a);delete l.reset;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),console.log(a.value),t.comments=[].concat(Object(U.a)(t.comments),[{content:a.value}]),console.log("updated blog",t),n(t),a.reset()}},r.a.createElement(K.a,null,r.a.createElement(V.a,null,r.a.createElement(v.a.Control,Object.assign({required:!0},l,{placeholder:"add anonymous comment here"}))),r.a.createElement(V.a,null,r.a.createElement(b.a,{type:"submit"},"add comment")))))},H=function(e){var t=e.blog,n=e.handleAddComment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Comments"),r.a.createElement(W,{blog:t,handleAddComment:n}),r.a.createElement("ul",null,0===t.comments.length?r.a.createElement("p",null,"No comments on this blog "):t.comments.map(function(e){return r.a.createElement("li",{key:e._id},e.content)})))},P=Object(J.e)(function(e){var t=e.blog,n=e.addLike,l=e.deleteBlog,c=e.user,u=(e.commentField,e.handleAddComment),o=Object(a.useState)(!1),s=Object(k.a)(o,2),i=s[0],d=s[1];if(void 0===t)return null;var m={display:c.username===t.user.username?"":"none"};return r.a.createElement("div",null,r.a.createElement("div",{style:{borderLeft:"6px solid #1a8cff",backgroundColor:"lightgray",padding:"10px 5px"},className:"blog"},r.a.createElement("div",{onClick:function(){return d(!i)},className:"blogAuthorTitle"},t.title," ",r.a.createElement("b",null,"~",t.author)),r.a.createElement("div",{className:"blogDetails"},r.a.createElement("p",null," ",t.likes," likes "),r.a.createElement("p",null,r.a.createElement("a",{href:t.url},t.url),r.a.createElement("br",null),"added by ",t.user.name?t.user.name:t.user.username),r.a.createElement(b.a,{variant:"danger",onClick:function(){l(t),e.history.push("/")},style:m},"delete"),r.a.createElement(b.a,{onClick:n,style:{marginLeft:10}},"like"))),r.a.createElement(H,{blog:t,handleAddComment:u}))}),Q=function(e){var t=e.user;return void 0===t?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t.name?t.name:t.username),r.a.createElement("h4",null,"Added Blogs"),r.a.createElement("p",null,0===t.blogs.length&&"No added blogs"),r.a.createElement("ul",null,t.blogs.map(function(e){return r.a.createElement("li",{key:e.id},e.title)})))},X={setUser:function(e){return{type:"SET_USER",data:e}},removeNotification:A,setNotification:S,notifyAsync:function(e,t){return function(){var n=Object(s.a)(o.a.mark(function n(a){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:a(S({message:e,positive:t})),setTimeout(function(){a({type:"SET_NOTIFICATION",notification:null})},5e3);case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},initialiseBlogs:function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},addLike:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a,r,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("id",e),t.next=3,E.getBlog(e);case 3:return a=t.sent,r=Object(_.a)({},a,{user:a.user.id,likes:a.likes+1}),t.next=7,E.update(r);case 7:l=t.sent,n({type:"LIKE_BLOG",data:l});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},createBlog:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=window.localStorage.getItem("loggedInUser"),r=JSON.parse(a),e.user=r,n({type:"ADD_BLOG",data:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},deleteBlog:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"DELETE_BLOG",id:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUsers:function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getAll();case 2:n=e.sent,t({type:"GET_USERS",data:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},addComment:function(e){return function(){var t=Object(s.a)(o.a.mark(function t(n){var a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("action creator updatedBlog",e),a=e.user.id,e.user=a,t.next=5,E.update(e);case 5:r=t.sent,n({type:"ADD_COMMENT",data:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},Y=Object(C.b)(function(e){return{user:e.user,promptMessage:e.notification,blogs:e.blogs,allUsers:e.allUsers}},X)(function(e){var t=I("text"),n=I("password"),l=I("text"),c=I("text"),u=I("url");Object(a.useEffect)(function(){e.initialiseBlogs(),e.getUsers()},[]);Object(a.useEffect)(function(){var t=window.localStorage.getItem("loggedInUser");if(t){var n=JSON.parse(t);e.setUser(n),E.setToken(n.token)}},[]);var i=function(){var a=Object(s.a)(o.a.mark(function a(r){var l;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,a.next=4,y.login({username:t.value,password:n.value});case 4:l=a.sent,e.setUser(l),window.localStorage.setItem("loggedInUser",JSON.stringify(l)),t.reset(),n.reset(),e.notifyAsync("Welcome ".concat(l.name?l.name:l.username),!0),E.setToken(l.token),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),e.notifyAsync("wrong credentials",!1);case 16:case"end":return a.stop()}},a,null,[[1,13]])}));return function(e){return a.apply(this,arguments)}}(),d=function(){var t=Object(s.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!window.confirm("Remove ".concat(n.title))){t.next=8;break}return t.next=5,E.deleteBlog(n.id);case 5:a=t.sent,e.deleteBlog(n.id),a&&e.notifyAsync("deleted successfully",!0);case 8:t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),e.notifyAsync("deletion failed",!1),console.error(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,10]])}));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(o.a.mark(function t(n){var a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(l.value.length<5||c.value.length<3||u.value.length<5)){t.next=6;break}return l.value.length<5&&alert("title should be longer than 5 characters"),c.value.length<3&&alert("author should be longer than 3 characters"),u.value.length<10&&alert("url should be longer than 10 characters"),t.abrupt("return",null);case 6:return a={title:l.value,author:c.value,url:u.value},t.next=9,E.create(a);case 9:r=t.sent,e.createBlog(r),r&&e.notifyAsync("".concat(r.title," has been added to blogs"),!0),c.reset(),l.reset(),u.reset();case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),p=function(){e.setUser(null)},f={padding:5};return r.a.createElement("div",{className:"container"},r.a.createElement(G.a,null,e.user&&r.a.createElement("div",null,r.a.createElement(G.b,{style:f,to:"/"},"home"),r.a.createElement(G.b,{style:f,to:"/users"},"users")),r.a.createElement(w,{message:e.promptMessage}),r.a.createElement(J.a,{exact:!0,path:"/"},null===e.user?function(){var e=Object.assign({},t);delete e.reset;var a=Object.assign({},n);return delete a.reset,r.a.createElement(h,{handleLogin:i,username:e,password:a})}():r.a.createElement("div",null,r.a.createElement(q,{user:e.user,blogs:e.blogs,logout:p,addLike:e.addLike,deleteBlog:d}),function(){var e=Object.assign({},l);delete e.reset;var t=Object.assign({},c);delete t.reset;var n=Object.assign({},u);return delete n.reset,r.a.createElement(x,{buttonLabel:"add blog"},r.a.createElement(O,{handleCreateBlog:m,title:e,author:t,url:n}))}())),r.a.createElement(J.a,{exact:!0,path:"/users",render:function(){return r.a.createElement(M,{users:e.allUsers})}}),r.a.createElement(J.a,{path:"/users/:id",render:function(t){var n,a=t.match;return r.a.createElement(Q,{user:(n=a.params.id,e.allUsers.find(function(e){return e.id===n}))})}}),r.a.createElement(J.a,{path:"/blogs/:id",render:function(t){var n,a=t.match;return r.a.createElement(P,{blog:(n=a.params.id,e.blogs.find(function(e){return e.id===n})),addLike:function(){return e.addLike(a.params.id)},user:e.user,handleAddComment:e.addComment,deleteBlog:d})}})),r.a.createElement(j,{user:e.user}))}),Z=n(18),$=n(44),ee=Object(Z.c)({user:L,notification:B,blogs:D,allUsers:N}),te=Object(Z.d)(ee,Object(Z.a)($.a));console.log(te.getState()),te.subscribe(function(){return console.log(te.getState())});var ne=te,ae=function(){c.a.render(r.a.createElement(C.a,{store:ne},r.a.createElement(Y,null)),document.getElementById("root"))};ae(),ne.subscribe(ae)}},[[46,1,2]]]);
//# sourceMappingURL=main.72ed90a3.chunk.js.map