(this["webpackJsonpreact-e-web"]=this["webpackJsonpreact-e-web"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var c,a,s,r,i,o,l,j,d,b=n(1),u=n.n(b),h=n(72),O=n.n(h),p=n(23),x=n(31),f=Object(x.a)(c||(c=Object(p.a)(['\n:root{\n  html,body{\n    margin:0px;\n    padding:0;\n    box-sizing: border-box;\n    font-family: "Source Sans Pro", sans-serif;\n    background-color: #fafafa;\n  }\n}\n']))),m=n(17),g=n(13),v=n(7),w=n.n(v),S=n(15),N=n(6),E=n(20),y=n(21),C=n(166),_=n(167),R=n(168),P=n(161),T=n(163),k=n(169),D=n(162),A=x.b.div(a||(a=Object(p.a)(["\n  margin: 0 5%;\n"]))),F=x.b.div(s||(s=Object(p.a)(["\n  .Grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 5px;\n  }\n\n  .Post-style {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button {\n    width: 3rem;\n    border: none;\n    outline: none;\n    border-radius: 20px;\n    background-color: white;\n  }\n  .edit-icon {\n    text-align: right;\n  }\n"]))),W=x.b.div(r||(r=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 2fr);\n  grid-gap: 30px;\n\n  .Profile-Image::-webkit-file-upload-button {\n    visibility: hidden;\n  }\n\n  @media screen and (max-width: 540px) {\n    grid-template-columns: none;\n    grid-template-rows: repeat(2, 2fr);\n    justify-items: center;\n    grid-gap: 20px;\n  }\n"]))),H=x.b.div(i||(i=Object(p.a)(["\n  color: transparent;\n  transition: all 0.3s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  transition: all 0.3s ease;\n\n  input {\n    display: none;\n  }\n\n  img {\n    position: absolute;\n    object-fit: cover;\n    width: 165px;\n    height: 165px;\n    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);\n    border-radius: 100px;\n    z-index: 0;\n  }\n\n  .-label {\n    cursor: pointer;\n    height: 165px;\n    width: 165px;\n  }\n\n  &:hover {\n    .-label {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: rgba(0, 0, 0, 0.8);\n      z-index: 10000;\n      color: rgb(250, 250, 250);\n      transition: background-color 0.2s ease-in-out;\n      border-radius: 100px;\n      margin-bottom: 0;\n    }\n  }\n\n  span {\n    display: inline-flex;\n    padding: 0.2em;\n    height: 2em;\n  }\n"]))),L=x.b.div(o||(o=Object(p.a)(["\n  .info-split {\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-gap: 10px;\n  }\n  @media screen and (max-width: 540px) {\n    .info-split {\n      grid-template-columns: 2fr 0.5fr;\n      grid-gap: 40px;\n    }\n  }\n\n  .line {\n    display: none;\n  }\n"]))),M=x.b.div(l||(l=Object(p.a)(['\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  grid-gap: 20px;\n  color: #a7a6ba;\n\n  button:hover {\n    color: black;\n  }\n\n  .hover-underline-animation {\n    position: relative;\n  }\n\n  .hover-underline-animation:after {\n    content: "";\n    position: absolute;\n    width: 235%;\n    transform: scaleX(0);\n    height: 10px;\n    bottom: -16px;\n    left: -25px;\n    background-color: black;\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n    transform-origin: bottom right;\n    transition: transform 0.25s ease-out;\n  }\n\n  .hover-underline-animation:hover:after {\n    transform: scaleX(1);\n    transform-origin: bottom left;\n  }\n']))),K=n(16),I=n.n(K),U=x.b.div(j||(j=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  width: 100%;\n  box-shadow: 0px 5px 0px 0px #ff007b;\n  -webkit-box-shadow: 0px 5px 0px 0px #ff007b;\n  -moz-box-shadow: 0px 5px 0px 0px #ff007b;\n  align-items: center;\n\n  h2 {\n    grid-column: 2/3;\n  }\n"]))),z=x.b.div(d||(d=Object(p.a)(["\n  cursor: pointer;\n  grid-column: 4/5;\n\n  ul {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-column-gap: 20px;\n    margin: 10px 0;\n    align-items: center;\n  }\n\n  li {\n    list-style: none;\n    font-size: var(--fontBig);\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  a:hover {\n    font-weight: bolder;\n  }\n\n  /* media query */\n  @media screen and (min-width: 540px) {\n    .Home-icon,\n    .new-friend-icon,\n    .profile-icon,\n    .search-icon {\n      display: none;\n    }\n    .post-icon {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 540px) {\n    .Home,\n    .post,\n    .new-friend,\n    .profile,\n    .search {\n      display: none;\n    }\n\n    ul {\n      grid-template-columns: repeat(auto, 1fr);\n      grid-column-gap: 12px;\n    }\n\n    .post-icon {\n      position: fixed;\n      z-index: 1;\n      bottom: 30px;\n      right: 30px;\n      background-color: #03bfff;\n      border-radius: 50%;\n      padding: 10px 15px;\n    }\n  }\n"]))),V=n(0),B=function(){return Object(V.jsxs)(U,{children:[Object(V.jsx)("h2",{children:"FrienZone"}),Object(V.jsxs)(z,{children:[Object(V.jsxs)("ul",{children:[Object(V.jsx)(m.b,{to:"",children:Object(V.jsx)("a",{href:"#",className:"Home",children:Object(V.jsx)("div",{children:Object(V.jsx)("li",{children:"Home"})})})}),Object(V.jsx)(m.b,{to:"/post",children:Object(V.jsx)("a",{href:"##",className:"post",children:Object(V.jsx)("li",{children:"Post"})})}),Object(V.jsx)(m.b,{to:"/request",children:Object(V.jsx)("a",{href:"###",className:"new-friend",children:Object(V.jsx)("li",{children:"Requests"})})}),Object(V.jsx)(m.b,{to:"/profile",children:Object(V.jsx)("a",{href:"#",className:"profile",children:Object(V.jsx)("li",{children:"Profile"})})}),Object(V.jsx)(m.b,{to:"/search",children:Object(V.jsx)("a",{href:"#",className:"search",children:Object(V.jsx)("li",{children:"Search"})})}),Object(V.jsx)(m.b,{to:"/",children:Object(V.jsx)("div",{children:Object(V.jsx)("li",{className:"Home-icon",children:Object(V.jsx)(E.a,{icon:y.d})})})}),Object(V.jsx)(m.b,{to:"/request",children:Object(V.jsx)("li",{className:"new-friend-icon",children:Object(V.jsx)(E.a,{icon:y.l})})}),Object(V.jsx)(m.b,{to:"/search",children:Object(V.jsx)("li",{className:"search-icon",children:Object(V.jsx)(E.a,{icon:y.g})})}),Object(V.jsx)(m.b,{to:"/profile",children:Object(V.jsx)("li",{className:"profile-icon",children:Object(V.jsx)(E.a,{icon:y.j})})})]}),Object(V.jsx)(m.b,{to:"/post",children:Object(V.jsx)("li",{className:"post-icon",children:Object(V.jsx)(E.a,{icon:y.f})})})]})]})},Z=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,t=Object(b.useState)({followers:[],following:[]}),n=Object(N.a)(t,2),c=n[0],a=n[1],s=Object(b.useState)([]),r=Object(N.a)(s,2),i=r[0],o=r[1],l=Object(b.useState)("posts"),j=Object(N.a)(l,2),d=j[0],u=j[1],h=Object(g.f)();function O(){return(O=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(e,"/Profile"));case 2:n=t.sent,a(n.data),o(n.data.posts);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(b.useEffect)((function(){try{!function(){O.apply(this,arguments)}()}catch(e){h.push("/Login")}}),[]);var p=function(){var t=Object(S.a)(w.a.mark((function t(n){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log(n.target.files[0]),(c=new FormData).append("file",n.target.files[0]),t.next=6,I.a.post("".concat(e,"/Profile"),c);case 6:500!==t.sent.status&&window.location.reload(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(B,{}),Object(V.jsx)(A,{children:Object(V.jsxs)(F,{children:[Object(V.jsxs)(W,{children:[Object(V.jsxs)(H,{children:[Object(V.jsxs)("label",{className:"-label",for:"file",children:[Object(V.jsx)("span",{className:"glyphicon glyphicon-camera",children:" "}),Object(V.jsx)("span",{children:" Change Image "})]}),Object(V.jsx)("input",{id:"file",type:"file",onChange:p}),Object(V.jsx)("img",{src:"".concat(e,"/ProfileImages/").concat(c.profile),alt:"profile",id:"output",width:"200"})]}),Object(V.jsx)(L,{children:Object(V.jsxs)("div",{children:[Object(V.jsxs)("h1",{children:[" ",c.userName," "]}),Object(V.jsx)("hr",{style:{width:"20rem"},className:"line"}),Object(V.jsxs)("div",{className:"info-split",children:[Object(V.jsxs)("div",{children:[Object(V.jsx)("h5",{children:" posts "})," ",Object(V.jsx)("h5",{children:" Followers "})," ",Object(V.jsx)("h5",{children:" Following "}),Object(V.jsx)("br",{})]}),Object(V.jsxs)("div",{children:[Object(V.jsxs)("h5",{children:[" ",i.length," "]})," ",Object(V.jsxs)("h5",{children:[" ",c.followers.length," "]})," ",Object(V.jsxs)("h5",{children:[c.following.length," "]})]})]})]})})]}),Object(V.jsx)("hr",{}),Object(V.jsxs)(M,{children:[Object(V.jsx)("button",{title:"Posts",onClick:function(e){try{e.preventDefault(),u("posts")}catch(t){console.log(t)}},className:"hover-underline-animation",children:Object(V.jsx)(E.a,{icon:y.e,size:"3x"})}),Object(V.jsx)("button",{title:"Followers",onClick:function(e){try{e.preventDefault(),u("followers")}catch(t){console.log(t)}},className:"hover-underline-animation",children:Object(V.jsx)(E.a,{icon:y.i,size:"3x"})}),Object(V.jsx)("button",{title:"Following",onClick:function(e){try{e.preventDefault(),u("following")}catch(t){console.log(t)}},className:"hover-underline-animation",children:Object(V.jsx)(E.a,{icon:y.k,size:"3x"})})]}),Object(V.jsx)("hr",{className:"hover-underline-animation"}),Object(V.jsxs)("div",{children:["posts"===d&&Object(V.jsx)("div",{className:"Grid",children:i.map((function(t,n){return Object(V.jsx)("div",{id:n,children:Object(V.jsx)("img",{className:"Post-style",src:"".concat(e,"/inProcessImages/").concat(t.image),alt:"posts"})})}))}),"followers"===d&&Object(V.jsx)(C.a,{maxWidth:"sm",children:Object(V.jsx)(_.a,{sx:{display:"flex",justifyContent:"center",borderRadius:"10px",margin:"0",height:"50vh",boxSizing:"border-box",overflow:"auto"},children:Object(V.jsxs)(R.a,{sx:{width:"100%",maxWidth:360,borderRadius:"10px",boxSizing:"border-box"},children:[Object(V.jsx)(P.a,{sx:{maxWidth:360,borderRadius:"10px",margin:"10px 0"},children:Object(V.jsx)(T.a,{primary:"Followers"})}),c.followers.map((function(t,n){return Object(V.jsxs)(P.a,{id:n,sx:{maxWidth:360,backgroundColor:"#AAAAAA",borderRadius:"10px",margin:"10px 0"},children:[Object(V.jsx)(k.a,{children:Object(V.jsx)(D.a,{alt:"Remy Sharp",src:"".concat(e,"/ProfileImages/").concat(t.profile)})}),Object(V.jsx)(T.a,{primary:t.userName,secondary:"followers : ".concat(t.followers.length)})]})}))]})})}),"following"===d&&Object(V.jsx)(C.a,{maxWidth:"sm",children:Object(V.jsx)(_.a,{sx:{display:"flex",justifyContent:"center",borderRadius:"10px",margin:"0",height:"50vh",boxSizing:"border-box",overflow:"auto"},children:Object(V.jsxs)(R.a,{sx:{width:"100%",maxWidth:360,borderRadius:"10px",boxSizing:"border-box"},children:[Object(V.jsx)(P.a,{sx:{maxWidth:360,borderRadius:"10px",margin:"10px 0"},children:Object(V.jsx)(T.a,{primary:"Following"})}),c.following.map((function(t,n){return Object(V.jsxs)(P.a,{id:n,sx:{maxWidth:360,backgroundColor:"#AAAAAA",borderRadius:"10px",margin:"10px 0"},children:[Object(V.jsx)(k.a,{children:Object(V.jsx)(D.a,{alt:"Remy Sharp",src:"".concat(e,"/ProfileImages/").concat(t.profile)})}),Object(V.jsx)(T.a,{primary:t.userName,secondary:"followers : ".concat(t.followers.length)})]})}))]})})})]})]})})]})},$=n(9),q=n(12),G=(n(120),n(16)),J=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,t=Object(g.f)(),n=Object(b.useState)({userName:"",email:"",password:"",confPassword:""}),c=Object(N.a)(n,2),a=c[0],s=c[1],r=Object(b.useState)({userNameMessage:"",emailMessage:"",passwordMessage:"",confPasswordMessage:""}),i=Object(N.a)(r,2),o=i[0],l=i[1],j=function(e){return""!==e},d=function(e){return e=e.trim(),j(e)?!!function(e){return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(e)}(e)||(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{passwordMessage:"Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"})})),!1):(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{passwordMessage:"Password cannot be blank."})})),!1)},u=function(){var n=Object(S.a)(w.a.mark((function n(c){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,l((function(){return{userNameMessage:"",emailMessage:"",passwordMessage:"",confPasswordMessage:""}})),c.preventDefault(),h=(h=a.userName).trim(),!((j(h)?(i=h.length,o=3,b=25,i>=o&&i<=b||(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{userNameMessage:"Username must be between ".concat(3," and ").concat(25," characters.")})})),0)):(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{userNameMessage:"Username is required"})})),0))&&(u=a.email,u=u.trim(),j(u)?function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(u)||(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{emailMessage:"Email is not valid."})})),0):(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{emailMessage:"Email cannot be blank"})})),0))&&d(a.password)&&(s=a.password,r=a.confPassword,r=r.trim(),s=s.trim(),j(r)?s===r||(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{confPasswordMessage:"The password does not match"})})),0):(l((function(e){return Object(q.a)(Object(q.a)({},e),{},{confPasswordMessage:"Please enter the password again"})})),0)))){n.next=8;break}return n.next=6,G.post("".concat(e,"/signup"),{userName:a.userName,email:a.email,password:a.password});case 6:200===n.sent.status&&t.push("/Login");case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}var s,r,i,o,b,u,h}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),h=function(e){var t=e.target,n=t.name,c=t.value;s((function(e){return Object(q.a)(Object(q.a)({},e),{},Object($.a)({},n,c))}))};return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{className:"outerContainer atcenter",children:Object(V.jsx)("div",{children:Object(V.jsxs)("form",{method:"post",children:[Object(V.jsx)("h1",{style:{textAlign:"center"},children:"FrenZone"}),Object(V.jsxs)("div",{children:[Object(V.jsx)("input",{type:"text",id:"userName",name:"userName",value:a.userName,placeholder:"username",autoCorrect:"false",autoComplete:"off",onChange:h}),Object(V.jsx)("br",{}),Object(V.jsx)("small",{children:o.userNameMessage})]}),Object(V.jsx)("br",{}),Object(V.jsxs)("div",{children:[Object(V.jsx)("input",{type:"text",id:"email",name:"email",value:a.email,placeholder:"email address",autoCorrect:"false",autoComplete:"off",onChange:h}),Object(V.jsx)("br",{}),Object(V.jsx)("small",{children:o.emailMessage})]}),Object(V.jsx)("br",{}),Object(V.jsxs)("div",{children:[Object(V.jsx)("input",{type:"password",id:"password",name:"password",value:a.password,placeholder:"Password",autoCorrect:"false",autoComplete:"off",onChange:h}),Object(V.jsx)("br",{}),Object(V.jsx)("small",{children:o.passwordMessage})]}),Object(V.jsx)("br",{}),Object(V.jsxs)("div",{children:[Object(V.jsx)("input",{type:"password",id:"confPassword",name:"confPassword",value:a.confPassword,placeholder:"Confirm Password",autoCorrect:"false",autoComplete:"off",onChange:h}),Object(V.jsx)("br",{}),Object(V.jsx)("small",{children:o.confPasswordMessage})]}),Object(V.jsx)("br",{}),Object(V.jsx)("button",{type:"submit",className:"submitbutton",onClick:u,children:"Sign Up"})]})})})})},X=(n(121),n(16));X.defaults.withCredentials=!0;var Q=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,t=Object(g.f)(),n=Object(b.useState)(""),c=Object(N.a)(n,2),a=c[0],s=c[1],r=Object(b.useState)(""),i=Object(N.a)(r,2),o=i[0],l=i[1],j=Object(b.useState)({emailMessage:"",passwordMessage:""}),d=Object(N.a)(j,2),u=d[0],h=d[1],O=Object(b.useState)(""),p=Object(N.a)(O,2),x=p[0],f=p[1],v=function(e){return""!==e},E=function(e){return e=e.trim(),v(e)?!!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(e)||(h((function(e){return Object(q.a)(Object(q.a)({},e),{},{emailMessage:"Email is not valid."})})),!1):(h((function(e){return Object(q.a)(Object(q.a)({},e),{},{emailMessage:"Email cannot be blank"})})),!1)},y=function(e){return e=e.trim(),v(e)?!!function(e){return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})").test(e)}(e)||(h((function(e){return Object(q.a)(Object(q.a)({},e),{},{passwordMessage:"Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"})})),!1):(h((function(e){return Object(q.a)(Object(q.a)({},e),{},{passwordMessage:"Password cannot be blank."})})),!1)},C=function(){var n=Object(S.a)(w.a.mark((function n(c){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,c.preventDefault(),h((function(){return{emailMessage:"",passwordMessage:""}})),!E(a)||!y(o)){n.next=8;break}return n.next=6,X.post("".concat(e,"/Login"),{email:a,password:o});case 6:200===n.sent.status&&(f(""),t.push("/"));case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),f("Either Email or password didn't match"),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:"background"}),Object(V.jsxs)("div",{className:"outerContainer atcenter",children:[Object(V.jsx)("div",{children:Object(V.jsxs)("form",{children:[Object(V.jsx)("h1",{style:{textAlign:"center"},children:"FrenZone"}),Object(V.jsx)("small",{style:{color:"red"},children:x}),Object(V.jsx)("input",{type:"text",id:"username",name:"username",value:a,placeholder:"Email address",autoCorrect:"false",autoComplete:"false",onChange:function(e){s(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("small",{children:u.emailMessage}),Object(V.jsx)("input",{type:"password",id:"password",name:"password",value:o,placeholder:"Password",autoCorrect:"false",autoComplete:"false",onChange:function(e){l(e.target.value)}}),Object(V.jsx)("br",{}),Object(V.jsx)("small",{children:u.passwordMessage}),Object(V.jsx)("button",{type:"submit",className:"submitbutton",onClick:C,children:"Login"})]})}),Object(V.jsx)("div",{children:Object(V.jsxs)("h4",{children:["Don't have account?"," ",Object(V.jsx)(m.b,{to:"/signup",children:Object(V.jsx)("a",{href:"",children:"Sign Up"})})]})})]})]})},Y=(n(122),n(123),function(e){var t=e.key,n=e.post,c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,a=n.image,s=n.description,r=n.user,i=Object(b.useState)(""),o=Object(N.a)(i,2),l=o[0],j=o[1],d=Object(b.useState)("#adadad"),u=Object(N.a)(d,2),h=u[0],O=u[1],p=Object(g.f)(),x=function(){var e=Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/comment",{comment:l,postid:n._id});case 2:500!==e.sent.status&&j("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(S.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="#adadad"===h?1:-1,e.next=3,I.a.post("like",{value:t,postid:n._id});case 3:500!==(c=e.sent).status?O("#ff3377"):console.log(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.jsx)(m.b,{to:{pathname:"/allcomments/".concat(n._id)}});case 2:p.push("/allcomments/".concat(n._id));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.jsx)("article",{id:t,children:Object(V.jsxs)("div",{className:"article-border",children:[Object(V.jsxs)("div",{className:"post-top",children:[Object(V.jsxs)("header",{children:[Object(V.jsx)("img",{className:"profile-image",src:"".concat(c,"/ProfileImages/").concat(r.profile),alt:"Profile"}),Object(V.jsx)("div",{className:"username-info",children:Object(V.jsx)("div",{className:"username",children:r.userName})})]}),Object(V.jsx)("div",{className:"button-container",children:Object(V.jsx)("button",{children:Object(V.jsx)("h1",{children:"..."})})})]}),Object(V.jsx)("div",{className:"post-middle",children:Object(V.jsx)("div",{children:Object(V.jsx)("img",{className:"post-image",src:"".concat(c,"/inProcessImages/").concat(a),alt:"post"})})}),Object(V.jsxs)("div",{className:"post-bottom",children:[Object(V.jsxs)("div",{className:"like-share-row",children:[Object(V.jsx)("div",{children:Object(V.jsx)("button",{title:"like",style:{color:h},onClick:f,children:Object(V.jsx)(E.a,{icon:y.c})})}),Object(V.jsx)("div",{children:Object(V.jsx)("button",{title:"See all comments",onClick:v,children:Object(V.jsx)(E.a,{icon:y.b})})})]}),Object(V.jsx)("div",{className:"description",children:s}),Object(V.jsxs)("div",{className:"comment-bar-container",children:[Object(V.jsx)("div",{className:"left-button",children:Object(V.jsx)("button",{title:"emoji keyboard",children:Object(V.jsx)(E.a,{style:{color:"FFAA00"},icon:y.h})})}),Object(V.jsx)("div",{className:"text-wrapper",children:Object(V.jsx)("input",{type:"text",value:l,onChange:function(e){j(e.target.value)}})}),Object(V.jsx)("div",{children:Object(V.jsx)("button",{className:"right-button",title:"post",onClick:""!==l?x:{},children:Object(V.jsx)(E.a,{style:{color:"#1060FF"},icon:y.f})})})]})]})]})})});n(124),n(125);var ee=function(e){var t=e.key,n=e.suggestion,c=e.fetchSuggestions,a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,s=function(){var e=Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("".concat(a,"/following"),{_id:n._id,userName:n.userName});case 3:c(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Some error happened"+e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(V.jsxs)("div",{id:t,className:"main-container",children:[Object(V.jsxs)("div",{className:"left-container",children:[Object(V.jsx)("img",{className:"profile-image",src:"".concat(a,"/ProfileImages/").concat(n.profile),alt:"Profile"}),Object(V.jsx)("div",{children:n.userName})]}),Object(V.jsx)("div",{children:Object(V.jsx)("button",{className:"follow-button",onClick:s,children:"Follow"})})]})},te=function(e){var t=e.fetchPosts,n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,c=Object(b.useState)([]),a=Object(N.a)(c,2),s=a[0],r=a[1];function i(){return o.apply(this,arguments)}function o(){return(o=Object(S.a)(w.a.mark((function e(){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("".concat(n,"/suggestions"));case 2:c=e.sent,r(c.data),t();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.useEffect)((function(){try{i()}catch(e){console.log("some error happened")}}),[]),Object(V.jsxs)("div",{className:"suggestion",children:[Object(V.jsxs)("div",{className:"heading",children:[Object(V.jsx)("div",{className:"heading-left",children:Object(V.jsx)("h3",{children:"Suggestions for you"})}),Object(V.jsx)("div",{className:"heading-right",children:Object(V.jsx)("button",{children:"see all"})})]}),Object(V.jsx)("div",{className:"follow-container",children:s.map((function(e,t){return Object(V.jsx)(ee,{suggestion:e,fetchSuggestions:i},t)}))})]})},ne=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,t=Object(b.useState)({}),n=Object(N.a)(t,2),c=(n[0],n[1]),a=Object(b.useState)([]),s=Object(N.a)(a,2),r=s[0],i=s[1],o=Object(g.f)();function l(){return j.apply(this,arguments)}function j(){return(j=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(e,"/fetchpost"));case 2:n=t.sent,i(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(e,"/Profile"));case 2:n=t.sent,c(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.useEffect)((function(){try{!function(){d.apply(this,arguments)}(),l()}catch(e){o.push("/Login")}}),[]),Object(V.jsxs)("div",{children:[Object(V.jsx)(B,{}),Object(V.jsxs)("div",{className:"feed-container",children:[Object(V.jsx)("div",{children:r.map((function(e,t){return Object(V.jsx)(Y,{post:e},t)}))}),Object(V.jsx)("div",{className:"suggestions-container",children:Object(V.jsx)(te,{fetchPosts:l})})]})]})},ce=n(79),ae=n.n(ce),se=(n(137),n(138),function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,t=Object(b.useState)(""),n=Object(N.a)(t,2),c=n[0],a=n[1],s=Object(b.useState)(null),r=Object(N.a)(s,2),i=r[0],o=r[1],l=Object(b.useState)({}),j=Object(N.a)(l,2),d=(j[0],j[1]),u=Object(b.useState)(""),h=Object(N.a)(u,2),O=h[0],p=h[1],x=Object(b.useState)(""),f=Object(N.a)(x,2),m=f[0],v=f[1],C=Object(g.f)(),_=Object(b.useRef)(null),R=Object(b.useRef)(null),P=Object(b.useState)({unit:"px",width:500,aspect:1}),T=Object(N.a)(P,2),k=T[0],D=T[1],A=Object(b.useRef)(null);Object(b.useEffect)((function(){try{var t=function(){var t=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(e,"/Profile"));case 2:n=t.sent,d(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}catch(n){C.push("/Login")}}),[]);var F=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(_.current&&t.width&&t.height)){e.next=4;break}return e.next=3,W(_.current,t,"newFile.jpeg");case 3:A.current=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t,n){if(R.current&&_.current){var c=R.current,a=e.naturalWidth/e.width,s=e.naturalHeight/e.height,r=c.getContext("2d"),i=window.devicePixelRatio;return c.width=t.width*i,c.height=t.height*i,r.setTransform(i,0,0,i,0,0),r.imageSmoothingQuality="high",r.drawImage(e,t.x*a,t.y*s,t.width*a,t.height*s,0,0,t.width,t.height),new Promise((function(e,t){c.toBlob((function(t){t?(t.name=n,e(t)):console.error("Canvas is empty")}),"image/jpeg")}))}};return Object(V.jsx)("div",{children:Object(V.jsxs)("form",{method:"post",enctype:"multipart/form-data",children:[!i&&Object(V.jsxs)("div",{className:"input-container",children:[Object(V.jsx)("input",{id:"profile-pic",onChange:function(e){if(e.target.files&&e.target.files.length>0){a(e.target.files[0].name);var t=new FileReader;t.addEventListener("load",(function(){return o(t.result)})),t.readAsDataURL(e.target.files[0]),p("Crop")}},type:"file",hidden:"hidden"}),Object(V.jsx)("label",{for:"profile-pic",children:"Choose File"})]}),i&&Object(V.jsx)("div",{children:Object(V.jsxs)("div",{className:"boss-container",children:[Object(V.jsxs)("div",{className:"top-header",children:[Object(V.jsx)("div",{className:"left-button",children:Object(V.jsx)("button",{className:"back-button",onClick:function(e){e.preventDefault(),"Crop"===O?o(null):"Compose"===O&&p("Crop")},children:Object(V.jsx)(E.a,{icon:y.a,size:"4x"})})}),Object(V.jsx)("div",{className:"middle-header",children:Object(V.jsx)("h1",{children:O})}),Object(V.jsx)("div",{className:"right-button",children:Object(V.jsx)("button",{className:"close-button",onClick:function(e){e.preventDefault(),o(null)},children:Object(V.jsx)(E.a,{icon:y.m,size:"4x"})})})]}),Object(V.jsxs)("div",{className:"body-container",children:[Object(V.jsx)("div",{className:"left-body",children:Object(V.jsx)("div",{className:"crop-container",children:Object(V.jsx)(ae.a,{src:i,onImageLoaded:function(e){_.current=e},crop:k,onChange:function(e){return D(e)},onComplete:function(e){F(e)}})})}),Object(V.jsxs)("div",{className:"right-body",children:["Crop"===O&&Object(V.jsxs)("div",{children:[Object(V.jsx)("div",{className:"cropped-image-container",children:Object(V.jsx)("canvas",{ref:R})}),Object(V.jsx)("div",{className:"next-button-container",children:Object(V.jsx)("button",{className:"next-button",onClick:function(e){e.preventDefault(),p("Compose")},children:Object(V.jsx)("h3",{children:"Next"})})})]}),"Compose"===O&&Object(V.jsxs)("div",{children:[Object(V.jsx)("div",{className:"text-area-container",children:Object(V.jsx)("textarea",{id:"subject",name:"subject",value:m,placeholder:"Write a caption",onChange:function(e){e.preventDefault(),v(e.target.value)},children:m})}),Object(V.jsx)("div",{className:"next-button-container",children:Object(V.jsx)("button",{className:"next-button",onClick:function(t){try{t.preventDefault();var n=new File([A.current],c),a=new FormData;a.append("file",n),a.append("caption",m),console.log(a),500!==I.a.post("".concat(e,"/selectImage"),a).status&&C.push("/")}catch(s){console.log(s)}},children:Object(V.jsx)("h3",{children:"Share"})})})]})]})]})]})})]})})});var re=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,t=Object(b.useState)({}),n=Object(N.a)(t,2),c=(n[0],n[1]),a=Object(g.f)();return Object(b.useEffect)((function(){try{var t=function(){var t=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("".concat(e,"/Profile"));case 2:n=t.sent,c(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}catch(n){a.push("/Login")}}),[]),Object(V.jsxs)("div",{children:[Object(V.jsx)(B,{}),Object(V.jsx)("div",{children:Object(V.jsx)(se,{})})]})},ie=n(170),oe=n(165),le=n(171),je=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER,t=Object(g.g)().idOfPost,n=Object(b.useState)({}),c=Object(N.a)(n,2),a=c[0],s=c[1],r=Object(b.useState)([]),i=Object(N.a)(r,2),o=i[0],l=i[1],j=Object(b.useState)({}),d=Object(N.a)(j,2),h=d[0],O=d[1],p=function(){var e=Object(S.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.post("/getComments",{_id:t});case 2:n=e.sent,s(n.data),O(n.data.user),l(n.data.Comments);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){try{p()}catch(e){History.push("/Login")}}),[]),Object(V.jsxs)(u.a.Fragment,{children:[Object(V.jsx)(ie.a,{}),Object(V.jsx)(C.a,{sx:{padding:"1rem 0",bgcolor:"#CCF2F4",borderRadius:"10px",marginTop:"20px"},children:Object(V.jsxs)(oe.a,{container:!0,spacing:2,children:[Object(V.jsx)(oe.a,{item:!0,xs:0,lg:6,children:Object(V.jsxs)(_.a,{sx:{display:{xs:"none",md:"none",lg:"block"}},children:[Object(V.jsxs)(P.a,{alignItems:"flex-start",sx:{bgcolor:"#CCF2F4"},children:[Object(V.jsx)(k.a,{children:Object(V.jsx)(D.a,{alt:"Remy Sharp",src:"".concat(e,"/ProfileImages/default-avatar.jpg}")})}),Object(V.jsx)(T.a,{primary:h&&h.userName,secondary:Object(V.jsx)(u.a.Fragment,{children:a.description})})]}),Object(V.jsx)("img",{className:"post-image",src:"".concat(e,"/inProcessImages/").concat(a.image),alt:"post"})]})}),Object(V.jsx)(oe.a,{item:!0,xs:12,lg:6,children:Object(V.jsx)(_.a,{sx:{maxHeight:"80vh",borderRadius:"10px",bgcolor:"#AAAAAA",overflow:"auto"},children:o.map((function(t,n){return Object(V.jsxs)(R.a,{id:n,children:[Object(V.jsxs)(P.a,{alignItems:"flex-start",children:[Object(V.jsx)(k.a,{children:Object(V.jsx)(D.a,{alt:"Remy Sharp",src:"".concat(e,"/ProfileImages/").concat(t.user.profile)})}),Object(V.jsx)(T.a,{primary:t.user.userName,secondary:Object(V.jsx)(u.a.Fragment,{children:t.comment})})]}),Object(V.jsx)(le.a,{variant:"inset",component:"li"})]})}))})})]})})]})},de=function(){return Object(V.jsx)(m.a,{children:Object(V.jsxs)(g.c,{children:[Object(V.jsx)(g.a,{exact:!0,path:"/signup",children:Object(V.jsx)(J,{})}),Object(V.jsx)(g.a,{exact:!0,path:"/login",children:Object(V.jsx)(Q,{})}),Object(V.jsx)(g.a,{exact:!0,path:"/",children:Object(V.jsx)(ne,{})}),Object(V.jsx)(g.a,{exact:!0,path:"/profile",children:Object(V.jsx)(Z,{})}),Object(V.jsx)(g.a,{exact:!0,path:"/post",children:Object(V.jsx)(re,{})}),Object(V.jsx)(g.a,{exact:!0,path:"/allComments/:idOfPost",children:Object(V.jsx)(je,{})})]})})};O.a.render(Object(V.jsxs)(u.a.StrictMode,{children:[Object(V.jsx)(f,{}),Object(V.jsx)(de,{className:"App"})]}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.d0cc96f6.chunk.js.map