import{A as f,E as r,Ea as A,F as n,Ga as I,I as h,M as s,O as N,P as M,Q as y,R as C,T as b,W as d,aa as F,da as w,ea as E,fa as _,ga as j,ha as v,ia as L,ja as R,ka as T,la as l,o as p,s as S,t as u,z as c}from"./chunk-CIQPYEOE.js";import"./chunk-K3XG54ZU.js";var k=(()=>{let e=class e{constructor(m,i,o){this.firestore=m,this.authF=i,this.router=o,this.userName="",this.password=""}manejarLogin(){this.authF.login(this.userName,this.password),this.guardar()}guardar(){this.firestore.collection("usuarios").add({Nombre:"Fernando",Apellido:"Frenandez",edad:30})}accesoRapido(){this.userName="robertoperez@gmail.com",this.password="1234567"}};e.\u0275fac=function(i){return new(i||e)(f(A),f(I),f(F))},e.\u0275cmp=S({type:e,selectors:[["app-login"]],standalone:!0,features:[b],decls:15,vars:3,consts:[[3,"ngSubmit"],[1,"form-group"],["for","username"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-primary",3,"click"],[2,"background-color","red"]],template:function(i,o){i&1&&(r(0,"form",0),h("ngSubmit",function(){return o.manejarLogin()}),r(1,"div",1)(2,"label",2),s(3,"Username:"),n(),r(4,"input",3),C("ngModelChange",function(a){return y(o.userName,a)||(o.userName=a),a}),n()(),r(5,"div",1)(6,"label",4),s(7,"Password:"),n(),r(8,"input",5),C("ngModelChange",function(a){return y(o.password,a)||(o.password=a),a}),n()(),r(9,"button",6),s(10,"Login"),n(),r(11,"button",7),h("click",function(){return o.accesoRapido()}),s(12,"Acceso Rapido"),n()(),r(13,"div",8),s(14),n()),i&2&&(c(4),M("ngModel",o.userName),c(4),M("ngModel",o.password),c(6),N(" ",o.authF.mensajeError," "))},dependencies:[d,l,R,E,_,j,T,L,v]});let t=e;return t})();var D=[{path:"",component:k}],q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[w.forChild(D),d,l,w]});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[d,l,q]});let t=e;return t})();export{$ as LoginModule};