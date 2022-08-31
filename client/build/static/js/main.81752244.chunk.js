(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{70:function(e,t,c){"use strict";c.r(t);var n,s=c(3),l=c.n(s),a=c(52),r=c.n(a),i=c(26),o=c(6),j=c(46),d=c(58),m=c(81),b=c(82),x=c(79),u=c(56),h=c(83),O=c(2),g=function(){return Object(O.jsx)("div",{children:" Timer "})},f=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{}),Object(O.jsx)("div",{children:"gameboard"})]})},p=function(){return Object(O.jsx)("div",{children:" Scoreboard "})},N=c(53),v=c(80),y=Object(v.a)(n||(n=Object(N.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      password\n      scores\n    }\n  }\n"]))),k=function(){var e=Object(h.a)(y),t=e.loading,c=e.data;return console.log(c),Object(O.jsx)("main",{children:Object(O.jsx)("div",{className:"flex-row justify-center",children:Object(O.jsx)("div",{className:"col-12 col-md-10 my-3",children:t?Object(O.jsx)("div",{children:"Loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(p,{})]})})})})},w=function(){return Object(O.jsx)("section",{className:" text-center text-lg-start",children:Object(O.jsx)("div",{className:"card mb-3",children:Object(O.jsxs)("div",{className:"row g-0 d-flex align-items-center",children:[Object(O.jsx)("div",{className:"col-lg-4 d-none d-lg-flex",children:Object(O.jsx)("img",{src:"https://image.shutterstock.com/image-vector/black-simple-finger-presses-on-260nw-618096680.jpg",alt:"Sign Up Photo",className:"w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"})}),Object(O.jsx)("div",{className:"col-lg-8",children:Object(O.jsx)("div",{className:"card-body py-5 px-md-5",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"form-outline mb-4",children:[Object(O.jsx)("input",{type:"text",id:"form2Example1",className:"form-control"}),Object(O.jsx)("label",{className:"form-label",htmlFor:"form2Example1",children:"Username"})]}),Object(O.jsxs)("div",{className:"form-outline mb-4",children:[Object(O.jsx)("input",{type:"password",id:"form2Example2",className:"form-control"}),Object(O.jsx)("label",{className:"form-label",htmlFor:"form2Example2",children:"Password"})]}),Object(O.jsx)("button",{type:"button",className:"btn btn-primary btn-block mb-4",children:"Sign Up"})]})})})]})})})},S=function(e){return Object(O.jsx)("section",{className:" text-center text-lg-start",children:Object(O.jsx)("div",{className:"card mb-3",children:Object(O.jsxs)("div",{className:"row g-0 d-flex align-items-center",children:[Object(O.jsx)("div",{className:"col-lg-4 d-none d-lg-flex",children:Object(O.jsx)("img",{src:"https://www.goscience.eu/common/img/login.jpg",alt:"Login Photo",className:"w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"})}),Object(O.jsx)("div",{className:"col-lg-8",children:Object(O.jsx)("div",{className:"card-body py-5 px-md-5",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"form-outline mb-4",children:[Object(O.jsx)("input",{type:"text",id:"form2Example1",className:"form-control"}),Object(O.jsx)("label",{className:"form-label",htmlFor:"form2Example1",children:"Username"})]}),Object(O.jsxs)("div",{className:"form-outline mb-4",children:[Object(O.jsx)("input",{type:"password",id:"form2Example2",className:"form-control"}),Object(O.jsx)("label",{className:"form-label",htmlFor:"form2Example2",children:"Password"})]}),Object(O.jsx)("button",{type:"button",className:"btn btn-primary btn-block mb-4",children:"Login"})]})})})]})})})},E=c(14),F=c(15),I=c(43),T=new(function(){function e(){Object(E.a)(this,e)}return Object(F.a)(e,[{key:"getProfile",value:function(){return Object(I.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(I.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),_=function(){return Object(O.jsx)("header",{className:"bg-info text-dark mb-4 py-3 display-flex align-center",children:Object(O.jsxs)("div",{className:"container flex-column justify-space-between-lg justify-center align-center text-center",children:[Object(O.jsx)(i.b,{className:"text-dark",to:"/",children:Object(O.jsx)("h1",{className:"m-0",style:{fontSize:"3rem"},children:"Animal Crusade"})}),Object(O.jsx)("div",{children:T.loggedIn()?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:function(e){e.preventDefault(),T.logout()},children:"Logout"})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(i.b,{className:"btn btn-lg btn-primary m-2",to:"/login",children:"Login"}),Object(O.jsx)(i.b,{className:"btn btn-lg btn-light m-2",to:"/signup",children:"Signup"})]})})]})})},L=function(){return Object(O.jsx)("footer",{className:"page-footer font-small blue",children:Object(O.jsxs)("div",{className:"footer-copyright text-center py-3",children:["\xa9 2022 Copyright:",Object(O.jsx)("a",{href:"/",children:" Henry Nguyen, Chelsea Burnham, Sufyaan Vaidya"})]})})},P=Object(d.a)({uri:"/graphql"}),C=Object(u.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(j.a)(Object(j.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),U=new m.a({link:C.concat(P),cache:new b.a});var B=function(){return Object(O.jsx)(x.a,{client:U,children:Object(O.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(O.jsx)(_,{}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",element:Object(O.jsx)(k,{})}),Object(O.jsx)(o.a,{path:"/login",element:Object(O.jsx)(S,{})}),Object(O.jsx)(o.a,{path:"/signup",element:Object(O.jsx)(w,{})})]})}),Object(O.jsx)(L,{})]})})};r.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(i.a,{basename:".",children:Object(O.jsx)(o.c,{children:Object(O.jsx)(o.a,{path:"*",element:Object(O.jsx)(B,{}),exact:!1,strict:!1})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.81752244.chunk.js.map