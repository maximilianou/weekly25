(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{79:function(n,t,e){"use strict";e.r(t);var r=e(4),i=e(0),c=e(10),a=e.n(c),o=e(45),s=e(26),d=e(49),u=e(48),j=e.n(u),l=e(53),b=e(115),x=e(106),f=e(19),p=e(20);function h(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  border: 1px solid lightred;\n  border-radius: 20px;\n  height: 100%;\n\n  button {\n    border-radius: 0 0 20px 20px;\n  }\n\n  img {\n    max-height: 250px;\n    object-fit: cover;\n    border-radius: 20px 20px 0 0;\n\n  }\n\n  div {\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 1rem;\n    height: 100%;\n\n  }\n"]);return h=function(){return n},n}var m=p.a.div(h()),O=function(n){var t=n.item,e=n.handleAddToCart;return Object(r.jsxs)(m,{children:[Object(r.jsx)("img",{src:t.image,alt:t.title}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:t.title}),Object(r.jsx)("p",{children:t.description}),Object(r.jsxs)("h3",{children:["$ ",t.price]})]}),Object(r.jsx)(x.a,{onClick:function(){return e(t)},children:" Add to Cart"})]})};function v(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-family: Arial, Helvetica, sans-serif;\n  border-bottom: 1px solid grey;\n  padding-bottom: 20px;\n\n  div {\n    flex: 1;\n  }\n\n  .buttons, .information {\n     display: flex;\n     justify-content: space-beetwen;\n  }\n\n  img {\n    max-width: 80px;\n    object-fit: cover;\n    margin-left: 40px; \n  }\n"]);return v=function(){return n},n}var g=p.a.div(v()),C=function(n){var t=n.item,e=n.addToCart,i=n.removeFromCart;return Object(r.jsxs)(g,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:t.title}),Object(r.jsxs)("div",{className:"information",children:[Object(r.jsxs)("p",{children:["Price: $ ",t.price]}),Object(r.jsxs)("p",{children:["Total: $ ",(t.amount*t.price).toFixed(2)]})]}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(x.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return i(t.id)},children:"-"}),Object(r.jsx)("p",{children:t.amount}),Object(r.jsx)(x.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return e(t)},children:"+"})]})]}),Object(r.jsx)("img",{src:t.image,alt:t.title})]})};function w(){var n=Object(f.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  width: 500px;\n  padding: 20px;\n\n"]);return w=function(){return n},n}var y=p.a.aside(w()),k=function(n){var t,e=n.cartItems,i=n.addToCart,c=n.removeFromCart;return Object(r.jsxs)(y,{children:[Object(r.jsx)("h2",{children:"Your Shopping Cart"}),0===e.length?Object(r.jsx)("p",{children:"Empty Cart"}):null,e.map((function(n){return Object(r.jsx)(C,{item:n,addToCart:i,removeFromCart:c},n.id)})),Object(r.jsxs)("p",{children:["Total: $ ",(t=e,t.reduce((function(n,t){return n+t.amount*t.price}),0)).toFixed(2)]})]})},T=e(113),A=e(110),F=e(112),S=e(58),$=e.n(S),z=e(111),E=e(109);function H(){var n=Object(f.a)(["\n  position: fixed;\n  z-index: 100;\n  right: 20px;\n  top: 20px;\n"]);return H=function(){return n},n}function I(){var n=Object(f.a)(["\n  margin: 40px;\n"]);return I=function(){return n},n}var J=p.a.div(I()),N=Object(p.a)(E.a)(H()),q=function(){var n=Object(l.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n=Object(i.useState)(!1),t=Object(d.a)(n,2),e=t[0],c=t[1],a=Object(i.useState)([]),u=Object(d.a)(a,2),j=u[0],l=u[1],x=Object(b.a)("products",q),f=x.data,p=x.isLoading,h=x.error;console.log(f);var m,v=function(n){l((function(t){return t.find((function(t){return t.id===n.id}))?t.map((function(t){return t.id===n.id?Object(s.a)(Object(s.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},n),{},{amount:1})])}))};return p?Object(r.jsx)(A.a,{}):h?Object(r.jsx)("div",{children:"Something went wrong ..."}):Object(r.jsxs)(J,{children:[Object(r.jsx)(T.a,{anchor:"right",open:e,onClose:function(){return c(!1)},children:Object(r.jsx)(k,{cartItems:j,addToCart:v,removeFromCart:function(n){l((function(t){return t.reduce((function(t,e){return e.id===n?1===e.amount?t:[].concat(Object(o.a)(t),[Object(s.a)(Object(s.a)({},e),{},{amount:e.amount-1})]):[].concat(Object(o.a)(t),[e])}),[])}))}})}),Object(r.jsx)(N,{onClick:function(){return c(!0)},children:Object(r.jsx)(z.a,{badgeContent:(m=j,m.reduce((function(n,t){return n+t.amount}),0)),color:"error",children:Object(r.jsx)($.a,{})})}),Object(r.jsx)(F.a,{container:!0,spacing:3,children:null===f||void 0===f?void 0:f.map((function(n){return Object(r.jsx)(F.a,{item:!0,xs:12,sm:4,children:Object(r.jsx)(O,{item:n,handleAddToCart:v})},n.id)}))})]})},P=e(114),Y=e(57),B=new P.a;a.a.render(Object(r.jsx)(Y.a,{client:B,children:Object(r.jsx)(L,{})}),document.querySelector("#root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.eaca11a8.chunk.js.map