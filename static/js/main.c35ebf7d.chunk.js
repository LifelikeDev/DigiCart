(this.webpackJsonpstarter=this.webpackJsonpstarter||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(4),i=c.n(r),s=(c(11),c(2)),o=c(5),j=function(t,e){if("CLEAR_CART"===e.type)return Object(s.a)(Object(s.a)({},t),{},{cart:[]});if("DELETE_ITEM"===e.type)return Object(s.a)(Object(s.a)({},t),{},{cart:t.cart.filter((function(t){return t.id!==e.payload}))});if("TOTAL_ITEMS"===e.type){var c=t.cart.reduce((function(t,e){var c=e.amount,n=c*e.price;return t.total+=n,t.amount+=c,t}),{amount:0,total:0}),n=c.amount,a=c.total;return a=parseFloat(a.toFixed(2)),Object(s.a)(Object(s.a)({},t),{},{total:a,amount:n})}if("PAGE_LOADING"===e.type)return Object(s.a)(Object(s.a)({},t),{},{loading:!0});if("DISPLAY_DATA"===e.type)return Object(s.a)(Object(s.a)({},t),{},{loading:!1,cart:e.payload});if("CHANGE_AMOUNT"===e.type){var r=t.cart.map((function(t){if(t.id===e.payload.id){if("increase"===e.payload.type)return Object(s.a)(Object(s.a)({},t),{},{amount:t.amount+1});if("decrease"===e.payload.type)return Object(s.a)(Object(s.a)({},t),{},{amount:t.amount-1})}return t})).filter((function(t){return 0!==t.amount}));return Object(s.a)(Object(s.a)({},t),{},{cart:r})}throw new Error("no matching action type found")},l=c(0),d=a.a.createContext(),u={loading:!1,cart:[{id:1,title:"Samsung Galaxy S7",price:599.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",amount:1},{id:2,title:"google pixel ",price:499.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",amount:1},{id:3,title:"Xiaomi Redmi Note 2",price:699.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",amount:1}],amount:0,total:0},b=function(t){var e=t.children,c=Object(n.useReducer)(j,u),a=Object(o.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){i({type:"TOTAL_ITEMS"})}),[r.cart]),Object(l.jsx)(d.Provider,{value:Object(s.a)(Object(s.a)({},r),{},{emptyCart:function(){i({type:"CLEAR_CART"})},deleteItem:function(t){i({type:"DELETE_ITEM",payload:t})},changeAmount:function(t,e){i({type:"CHANGE_AMOUNT",payload:{id:t,type:e}})}}),children:e})},h=function(){return Object(n.useContext)(d)},m=c(6),O=function(){var t=h().amount;return Object(l.jsx)("nav",{children:Object(l.jsxs)("div",{className:"nav-center",children:[Object(l.jsx)("h3",{children:"DigiCart"}),Object(l.jsxs)("div",{className:"nav-container",children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(l.jsx)("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})}),Object(l.jsx)("div",{className:"amount-container",children:Object(l.jsx)("p",{className:"total-amount",children:t})}),Object(l.jsxs)("div",{className:"user-profile",children:[Object(l.jsx)(m.a,{className:"user-icon"}),Object(l.jsx)("h5",{children:"Logged In"})]})]})]})})},p=function(t){var e=t.id,c=t.img,n=t.title,a=t.price,r=t.amount,i=h(),s=i.deleteItem,o=i.changeAmount;return Object(l.jsxs)("article",{className:"cart-item",children:[Object(l.jsx)("img",{src:c,alt:n}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:n}),Object(l.jsxs)("h4",{className:"item-price",children:["$",a]}),Object(l.jsx)("button",{className:"remove-btn",onClick:function(){return s(e)},children:"remove"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"amount-btn",onClick:function(){return o(e,"increase")},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(l.jsx)("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"})})}),Object(l.jsx)("p",{className:"amount",children:r}),Object(l.jsx)("button",{className:"amount-btn",onClick:function(){return o(e,"decrease")},children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(l.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]})},x=function(){var t=h(),e=t.cart,c=t.total,n=t.emptyCart;return 0===e.length?Object(l.jsx)("section",{className:"cart",children:Object(l.jsxs)("header",{children:[Object(l.jsx)("h3",{children:"Content"}),Object(l.jsx)("h4",{className:"empty-cart",children:"is currently empty"})]})}):Object(l.jsxs)("section",{className:"cart",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h3",{children:"Content"})}),Object(l.jsx)("div",{children:e.map((function(t){return Object(l.jsx)(p,Object(s.a)({},t),t.id)}))}),Object(l.jsxs)("footer",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"cart-total",children:Object(l.jsxs)("h4",{children:["total ",Object(l.jsxs)("span",{children:["$",c]})]})}),Object(l.jsx)("button",{className:"btn clear-btn",onClick:n,children:"empty cart"})]})]})};var v=function(){return h().loading?Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("h1",{className:"loading",children:"Loading Content..."})}):Object(l.jsxs)("main",{children:[Object(l.jsx)(O,{}),Object(l.jsx)(x,{})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{children:Object(l.jsx)(v,{})})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c35ebf7d.chunk.js.map