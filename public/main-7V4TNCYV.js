import{$ as re,A as k,B as y,C as X,D as f,E as Y,F as b,G as $,H as E,I,J as w,K as ee,M as A,N as j,O as F,P as R,Q as L,R as N,S as T,T as _,U as te,V as ne,W as ie,X as D,Y as oe,Z as v,a as q,b as G,c as U,d as J,f as W,h as d,j as H,k as Q,l as Z,m as u,n as p,o as B,p as C,q as t,r as n,s as h,t as K,u as m,v as z,w as i,x,y as g,z as S}from"./chunk-732G5AMD.js";import"./chunk-K3XG54ZU.js";var ae=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=d({type:o,selectors:[["app-quien-soy"]],standalone:!0,features:[f],decls:17,vars:0,consts:[["src","./assets/fotoAlumno.jpg","width","200"]],template:function(a,e){a&1&&(t(0,"p")(1,"b"),i(2,"Damian Nicol\xE1s Dattilo"),n(),h(3,"br"),i(4," Estudiante de la utn fra"),h(5,"br"),i(6," 32 a\xF1os"),h(7,"br")(8,"br")(9,"br")(10,"img",0)(11,"br")(12,"br")(13,"br"),t(14,"h3"),i(15,"Juego propio: generala simple"),n(),i(16," 2 jugadores tiran 5 dados al azar por turnos y segun las combinaciones de los numeros se anotan puntajes 5 numeros iguales es 'generala' y vale 100 puntos 4 iguales y 1 distinto es 'poker' y vale 80 puntos 3 iguales y 2 iguales es 'full' y vale 50 puntos El juego concluye cuando uno de los jugadores supera los 200 puntos o cuando se dan 10 tiros por cada jugador. "),n())}});let r=o;return r})();var me=(()=>{let o=class o{constructor(l,a,e){this.firestore=l,this.authF=a,this.router=e,this.userName="",this.password=""}manejarLogin(){this.authF.login(this.userName,this.password),this.guardar()}guardar(){this.firestore.collection("usuarios").add({Nombre:"Fernando",Apellido:"Frenandez",edad:30})}accesoRapido(){this.userName="robertoperez@gmail.com",this.password="1234567"}};o.\u0275fac=function(a){return new(a||o)(p(D),p(v),p(I))},o.\u0275cmp=d({type:o,selectors:[["app-login"]],standalone:!0,features:[f],decls:15,vars:3,consts:[[3,"ngSubmit"],[1,"form-group"],["for","username"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-primary",3,"click"],[2,"background-color","red"]],template:function(a,e){a&1&&(t(0,"form",0),m("ngSubmit",function(){return e.manejarLogin()}),t(1,"div",1)(2,"label",2),i(3,"Username:"),n(),t(4,"input",3),y("ngModelChange",function(c){return k(e.userName,c)||(e.userName=c),c}),n()(),t(5,"div",1)(6,"label",4),i(7,"Password:"),n(),t(8,"input",5),y("ngModelChange",function(c){return k(e.password,c)||(e.password=c),c}),n()(),t(9,"button",6),i(10,"Login"),n(),t(11,"button",7),m("click",function(){return e.accesoRapido()}),i(12,"Acceso Rapido"),n()(),t(13,"div",8),i(14),n()),a&2&&(u(4),S("ngModel",e.userName),u(4),S("ngModel",e.password),u(6),g(" ",e.authF.mensajeError," "))},dependencies:[b,_,N,A,j,F,T,L,R]});let r=o;return r})();var ue=(()=>{let o=class o{constructor(l,a){this.authF=l,this.router=a,this.authF.userCredentials==null&&this.redireccionar()}redireccionar(){this.router.navigate(["/login"])}};o.\u0275fac=function(a){return new(a||o)(p(v),p(I))},o.\u0275cmp=d({type:o,selectors:[["app-home"]],standalone:!0,features:[f],decls:7,vars:0,consts:[["routerLink","/ahorcado",1,"route-button","btn","btn-dark","m-1"],["routerLink","/mayorOMenor",1,"route-button","btn","btn-dark","m-1"]],template:function(a,e){a&1&&(t(0,"h2"),i(1,"Bienvenido a la sala"),n(),t(2,"button",0),i(3,"Ahorcado"),n(),t(4,"button",1),i(5,"Mayor o Menor"),n(),h(6,"router-outlet"))},dependencies:[w,b,_,E]});let r=o;return r})();var ce=(()=>{let o=class o{constructor(l){this.authF=l,this.userName="",this.password=""}manejarRegistro(){this.authF.register(this.userName,this.password)}};o.\u0275fac=function(a){return new(a||o)(p(v))},o.\u0275cmp=d({type:o,selectors:[["app-register"]],standalone:!0,features:[f],decls:13,vars:3,consts:[[3,"ngSubmit"],[1,"form-group"],["for","username"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","password"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-primary"],[2,"background-color","red"]],template:function(a,e){a&1&&(t(0,"form",0),m("ngSubmit",function(){return e.manejarRegistro()}),t(1,"div",1)(2,"label",2),i(3,"Username:"),n(),t(4,"input",3),y("ngModelChange",function(c){return k(e.userName,c)||(e.userName=c),c}),n()(),t(5,"div",1)(6,"label",4),i(7,"Password:"),n(),t(8,"input",5),y("ngModelChange",function(c){return k(e.password,c)||(e.password=c),c}),n()(),t(9,"button",6),i(10,"Registro"),n()(),t(11,"div",7),i(12),n()),a&2&&(u(4),S("ngModel",e.userName),u(4),S("ngModel",e.password),u(4),g(" ",e.authF.mensajeError," "))},dependencies:[b,_,N,A,j,F,T,L,R]});let r=o;return r})();var de=(()=>{let o=class o{constructor(){this.letrasIncorrectas="",this.palabraIngresada="",this.palabraCorrecta="BARCO",this.mensaje="elija una letra para comenzar",this.vidas=5,this.puntos=0,this.palabras=["BARCO","AUTO","LAPIZ","MOUSE","PUERTA"],this.nuevoJuego()}validarLetra(l){let a=!1;this.borrarGuiones(),console.log(this.palabraIngresada),console.log("aca");let e=this.palabraIngresada.length+1,s=this.palabraCorrecta.substring(0,e);this.palabraIngresada+l==s&&(a=!0),a?(this.palabraIngresada=this.palabraIngresada+l,this.mensaje="letra correcta",this.palabraCorrecta==this.palabraIngresada&&(this.mensaje="Ganaste",this.puntos=this.puntos+10,this.nuevoJuego())):(this.vidas=this.vidas-1,this.letrasIncorrectas=this.letrasIncorrectas+l+" ",this.mensaje="letra incorrecta "+l,this.vidas==0&&(this.mensaje="perdiste, la palabra era "+this.palabraCorrecta,this.puntos=this.puntos-10,this.nuevoJuego())),this.mascara()}nuevoJuego(){this.vidas=5,this.palabraIngresada="";let l=Math.floor(Math.random()*this.palabras.length);this.palabraCorrecta=this.palabras[l],this.letrasIncorrectas="",this.mascara()}mascara(){this.borrarGuiones(),this.palabraIngresada=this.palabraIngresada+"_".repeat(this.palabraCorrecta.length-this.palabraIngresada.length)}borrarGuiones(){this.palabraIngresada=this.palabraIngresada.replaceAll("_",""),this.palabraIngresada==null&&(this.palabraIngresada="")}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=d({type:o,selectors:[["app-ahorcado"]],standalone:!0,features:[f],decls:63,vars:6,consts:[["type","text","id","palabraIngresada","name","palabraIngresada","required","","readonly","",1,"form-control",3,"ngModelChange","ngModel"],[3,"click"],[2,"background-color","yellow"],[2,"background-color","orange"],[2,"background-color","blue","color","white"],[2,"background-color","green","color","white"]],template:function(a,e){a&1&&(t(0,"input",0),y("ngModelChange",function(c){return k(e.palabraIngresada,c)||(e.palabraIngresada=c),c}),n(),t(1,"button",1),m("click",function(){return e.validarLetra("A")}),i(2,"A"),n(),t(3,"button",1),m("click",function(){return e.validarLetra("B")}),i(4,"B"),n(),t(5,"button",1),m("click",function(){return e.validarLetra("C")}),i(6,"C"),n(),t(7,"button",1),m("click",function(){return e.validarLetra("D")}),i(8,"D"),n(),t(9,"button",1),m("click",function(){return e.validarLetra("E")}),i(10,"E"),n(),t(11,"button",1),m("click",function(){return e.validarLetra("F")}),i(12,"F"),n(),t(13,"button",1),m("click",function(){return e.validarLetra("G")}),i(14,"G"),n(),t(15,"button",1),m("click",function(){return e.validarLetra("H")}),i(16,"H"),n(),t(17,"button",1),m("click",function(){return e.validarLetra("I")}),i(18,"I"),n(),t(19,"button",1),m("click",function(){return e.validarLetra("J")}),i(20,"K"),n(),t(21,"button",1),m("click",function(){return e.validarLetra("L")}),i(22,"L"),n(),t(23,"button",1),m("click",function(){return e.validarLetra("M")}),i(24,"M"),n(),h(25,"br"),t(26,"button",1),m("click",function(){return e.validarLetra("N")}),i(27,"N"),n(),t(28,"button",1),m("click",function(){return e.validarLetra("O")}),i(29,"O"),n(),t(30,"button",1),m("click",function(){return e.validarLetra("P")}),i(31,"P"),n(),t(32,"button",1),m("click",function(){return e.validarLetra("Q")}),i(33,"Q"),n(),t(34,"button",1),m("click",function(){return e.validarLetra("R")}),i(35,"R"),n(),t(36,"button",1),m("click",function(){return e.validarLetra("S")}),i(37,"S"),n(),t(38,"button",1),m("click",function(){return e.validarLetra("T")}),i(39,"T"),n(),t(40,"button",1),m("click",function(){return e.validarLetra("U")}),i(41,"U"),n(),t(42,"button",1),m("click",function(){return e.validarLetra("V")}),i(43,"V"),n(),t(44,"button",1),m("click",function(){return e.validarLetra("W")}),i(45,"W"),n(),t(46,"button",1),m("click",function(){return e.validarLetra("X")}),i(47,"X"),n(),t(48,"button",1),m("click",function(){return e.validarLetra("Y")}),i(49,"Y"),n(),t(50,"button",1),m("click",function(){return e.validarLetra("Z")}),i(51,"Z"),n(),t(52,"div",2),i(53),n(),t(54,"div",3),i(55),n(),t(56,"div",3),i(57),n(),t(58,"div",4),i(59),n(),t(60,"div",5),i(61),n(),h(62,"router-outlet")),a&2&&(S("ngModel",e.palabraIngresada),u(53),x(e.vidas),u(2),x(e.mensaje),u(2),g("letras incorrectas ",e.letrasIncorrectas,""),u(2),g("puntos ",e.puntos,""),u(2),g("ayuda ",e.palabraCorrecta.substring(0,2),""))},dependencies:[b,_,A,j,T,L,E]});let r=o;return r})();var pe=(()=>{let o=class o{constructor(l,a){this.firestore=l,this.authS=a}actualizarPuntaje(l){let a={score:l},e=this.authS.userCredentials.email,s=this.firestore.collection("puntajes").doc(e);s.valueChanges().pipe(G(1),q(c=>(c&&c.score||0)+l),U(c=>s.set({score:c}))).subscribe(()=>console.log("puntaje actualizado correctamente"),c=>console.error("error al actualizar el puntaje",c))}obtenerPuntajeObs(){let l=this.authS.userCredentials.email;return this.firestore.collection("puntajes").doc(l).valueChanges()}obtenerPuntajeDoc(){let l=this.authS.userCredentials.email;return this.firestore.collection("puntajes").doc(l)}};o.\u0275fac=function(a){return new(a||o)(W(D),W(v))},o.\u0275prov=J({token:o,factory:o.\u0275fac,providedIn:"root"});let r=o;return r})();var fe=(()=>{let o=class o{constructor(l){this.puntajeS=l,this.opcionIngresada="",this.cartaVisible=Math.floor(Math.random()*10)+1,this.cartaOculta=Math.floor(Math.random()*10)+1,this.exito=!1,this.mensaje="",this.puntaje=0}ngOnInit(){this.puntajeS.obtenerPuntajeObs().subscribe(l=>{console.log(l),this.puntaje=l.score})}juego(l){this.opcionIngresada=l,this.opcionIngresada=="mayor"&&this.cartaOculta>this.cartaVisible||this.opcionIngresada=="menor"&&this.cartaOculta<this.cartaVisible?(this.exito=!0,this.mensaje="GANASTE",this.puntajeS.actualizarPuntaje(10)):this.cartaOculta==this.cartaVisible?this.mensaje="empate":(this.mensaje="PERDISTE, la carta era "+this.cartaOculta,this.puntajeS.actualizarPuntaje(-10)),this.juegoNuevo()}juegoNuevo(){this.exito=!1,this.cartaOculta=Math.floor(Math.random()*10)+1,this.cartaVisible=Math.floor(Math.random()*10)+1}};o.\u0275fac=function(a){return new(a||o)(p(pe))},o.\u0275cmp=d({type:o,selectors:[["app-mayor-omenor"]],standalone:!0,features:[f],decls:10,vars:3,consts:[[3,"click"]],template:function(a,e){a&1&&(t(0,"div"),i(1),n(),t(2,"button",0),m("click",function(){return e.juego("mayor")}),i(3,"Mayor"),n(),t(4,"button",0),m("click",function(){return e.juego("menor")}),i(5,"Menor"),n(),t(6,"div"),i(7),n(),t(8,"div"),i(9),n()),a&2&&(u(),g("La carta visible es ",e.cartaVisible,""),u(6),x(e.mensaje),u(2),g("Tu puntaje es ",e.puntaje,""))}});let r=o;return r})();var he=[{path:"login",component:me},{path:"home",component:ue},{path:"quien-soy",component:ae},{path:"register",component:ce},{path:"chat",loadChildren:()=>import("./chunk-SIPIL7AV.js").then(r=>r.ChatModule)},{path:"ahorcado",component:de},{path:"mayorOMenor",component:fe}];var P={production:!1,firebase:{apiKey:"AIzaSyBvLGXsJSyha8fl4sNzaME50PvK09ZHLak",authDomain:"dattilodamiansalajuegossp3.firebaseapp.com",projectId:"dattilodamiansalajuegossp3",storageBucket:"dattilodamiansalajuegossp3.appspot.com",messagingSenderId:"747700340042",appId:"1:747700340042:web:fa37102a50ab88fc166db3"}};var ge={providers:[ee(he),H(ne.initializeApp(P.firebase),ie,re,oe)]};function Ce(r,o){r&1&&(t(0,"button",8),i(1,"Registro"),n())}function Se(r,o){r&1&&(t(0,"button",9),i(1,"Login"),n())}function ke(r,o){r&1&&(t(0,"button",10),i(1,"Home"),n())}function ye(r,o){if(r&1){let V=K();t(0,"button",11),m("click",function(){Q(V);let a=z();return Z(a.logOut())}),i(1,"Cerrar sesion"),n()}}function Me(r,o){r&1&&(t(0,"button",12),i(1,"Sala de chat"),n())}function Ee(r,o){if(r&1&&(t(0,"div",13),i(1),n()),r&2){let V=z();u(),g("mail: ",V.nombreDeUsuario(),"")}}function Ie(r,o){r&1&&(t(0,"div")(1,"h3"),i(2,"Bienvenido a la sala de Juegos de Damian Dattilo"),n(),h(3,"br")(4,"br"),i(5," Registrese o inicie sesion para comenzar a jugar"),h(6,"br")(7,"br"),n())}var be=(()=>{let o=class o{constructor(l,a){this.authS=l,this.router=a,this.title="tp-sala-juegos"}logueado(){return console.log(this.authS.userCredentials),this.authS.userCredentials!=null}logOut(){this.authS.userCredentials=null,this.router.navigate(["/"])}nombreDeUsuario(){return this.authS.userCredentials.email}};o.\u0275fac=function(a){return new(a||o)(p(v),p(I))},o.\u0275cmp=d({type:o,selectors:[["app-root"]],standalone:!0,features:[X([{provide:te,useValue:P.firebase}]),f],decls:12,vars:7,consts:[["routerLink","register","class","route-button btn btn-dark m-1",4,"ngIf"],["routerLink","login","class","route-button btn btn-dark m-1",4,"ngIf"],["routerLink","quien-soy",1,"route-button","btn","btn-dark","m-1"],["routerLink","home","class","route-button btn btn-dark m-1",4,"ngIf"],["class","route-button btn btn-dark m-1",3,"click",4,"ngIf"],["routerLink","chat","class","route-button btn btn-dark m-1",4,"ngIf"],["style","padding-left: 10px;padding-top: 30px; ",4,"ngIf"],[4,"ngIf"],["routerLink","register",1,"route-button","btn","btn-dark","m-1"],["routerLink","login",1,"route-button","btn","btn-dark","m-1"],["routerLink","home",1,"route-button","btn","btn-dark","m-1"],[1,"route-button","btn","btn-dark","m-1",3,"click"],["routerLink","chat",1,"route-button","btn","btn-dark","m-1"],[2,"padding-left","10px","padding-top","30px"]],template:function(a,e){a&1&&(t(0,"h1"),i(1,"Sala de juegos Dattilo Damian"),n(),B(2,Ce,2,0,"button",0)(3,Se,2,0,"button",1),t(4,"button",2),i(5,"Quien soy"),n(),B(6,ke,2,0,"button",3)(7,ye,2,0,"button",4)(8,Me,2,0,"button",5)(9,Ee,2,1,"div",6)(10,Ie,8,0,"div",7),h(11,"router-outlet")),a&2&&(u(2),C("ngIf",!e.logueado()),u(),C("ngIf",!e.logueado()),u(3),C("ngIf",e.logueado()),u(),C("ngIf",e.logueado()),u(),C("ngIf",e.logueado()),u(),C("ngIf",e.logueado()),u(),C("ngIf",!e.logueado()))},dependencies:[E,w,b,Y,_],styles:[".route-button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:5px solid #00ff2a;margin:5px;padding:8px 16px;border-radius:4px;cursor:pointer}.route-button[_ngcontent-%COMP%]:hover{background-color:#0056b3;border-color:#b30000}"]});let r=o;return r})();$(be,ge).catch(r=>console.error(r));