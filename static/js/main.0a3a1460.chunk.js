(this.webpackJsonpproductiv8=this.webpackJsonpproductiv8||[]).push([[0],{38:function(e,t,n){},57:function(e,t,n){e.exports=n(70)},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(23),r=n.n(l),o=n(13),i=n(7),u=n(46),m=n.n(u),s=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(m.a,null),"Productiv8"))},d=function(){var e=(new Date).getDate()+" / "+(new Date).getMonth()+" / "+(new Date).getFullYear();return c.a.createElement("footer",{className:"fixed-down"},c.a.createElement("p",null,e),c.a.createElement("a",{href:"https://github.com/arx0x0/productiv8",target:"_blank"},"Source Code"))},f=n(49),E=n.n(f),v=(n(38),function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",{className:"bold-head"},e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(E.a,null)))}),b=n(5),j=n(43),p=n(50),O=n.n(p),h=n(88),N=n(89),k=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),u=Object(i.a)(o,2),m=u[0],s=u[1],d=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(b.a)({},n,a))}))},f=function(e){"Enter"===e.key&&e.preventDefault()};return c.a.createElement("div",null,c.a.createElement("form",{className:"create-note"},l?c.a.createElement("input",{name:"title",onKeyPress:f,onChange:d,value:m.title,placeholder:"Title"}):null,c.a.createElement("textarea",{name:"content",onChange:d,onClick:function(e){r(!0)},onKeyPress:f,value:m.content,placeholder:"Take a note...",rows:l?3:1}),c.a.createElement(N.a,{in:l},c.a.createElement(h.a,{onClick:function(t){e.onAdd(m),s({title:"",content:""}),t.preventDefault()}},c.a.createElement(O.a,null)))))},g=(n(68),function(){var e=Object(a.useState)(25),t=Object(i.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(0),o=Object(i.a)(r,2),u=o[0],m=o[1],s=Object(a.useState)(!1),d=Object(i.a)(s,2),f=d[0],E=d[1];Object(a.useEffect)((function(){var e=setInterval((function(){if(clearInterval(e),0===u)if(0!==n)m(59),l(n-1);else{var t=f?24:4;m(59),l(t),E(!f)}else m(u-1)}),1e3)}),[u]);var v=n<10?"0".concat(n):n,b=u<10?"0".concat(u):u;return c.a.createElement("div",{className:"pomodoro"},c.a.createElement("div",{className:"message"},f&&c.a.createElement("div",null,"Take a break! New session starts in:")),c.a.createElement("div",{className:"timer"},v,":",b))}),w=n(51),S=n.n(w),D=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),u=Object(i.a)(r,2),m=u[0],f=u[1],E=function(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))};return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement("div",{className:"both-sides-content"},c.a.createElement("div",{className:"main-div-item"},c.a.createElement(k,{className:"main-div-item",onAdd:function(e){l((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return c.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,onDelete:E})}))),c.a.createElement("div",{className:"mine main-div-item"},m?c.a.createElement(g,null):c.a.createElement(S.a,{className:"move-down",onClick:function(){f(!0)},fontSize:"large"}))),c.a.createElement(d,null))};r.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.0a3a1460.chunk.js.map