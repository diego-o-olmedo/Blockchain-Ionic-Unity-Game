webpackJsonp([0],{240:function(l,n,u){"use strict";function o(l){return t._21(0,[(l()(),t.Z(0,0,null,null,3,"ion-spinner",[["class","col"],["col-12",""],["ion-col",""]],[[2,"spinner-paused",null]],null,null,w.b,w.a)),t.Y(1,16384,null,0,C.a,[],null,null),t.Y(2,114688,null,0,Y.a,[Z.a,t.j,t.z],null,null),(l()(),t._19(-1,null,["\n      "]))],function(l,n){l(n,2,0)},function(l,n){l(n,0,0,t._13(n,2)._paused)})}function i(l){return t._21(0,[(l()(),t.Z(0,0,null,null,2,"ship-card",[["class","col"],["col-12",""],["col-lg-4",""],["col-md-6",""],["col-xl-3",""],["ion-col",""]],null,null,null,S.b,S.a)),t.Y(1,114688,null,0,M.a,[P.c,E.a,O.a],{ship:[0,"ship"]},null),t.Y(2,16384,null,0,C.a,[],null,null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function e(l){return t._21(0,[(l()(),t.Z(0,0,[["head",1]],null,6,"ion-header",[],null,null,null,null,null)),t.Y(1,16384,null,0,z.a,[Z.a,t.j,t.z,[2,I.a]],null,null),(l()(),t._19(-1,null,["\n  "])),(l()(),t.Z(3,0,null,null,2,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,T.b,T.a)),t.Y(4,49152,null,0,L.a,[j.a,[2,I.a],[2,O.a],Z.a,t.j,t.z],null,null),(l()(),t._19(-1,3,["\n  "])),(l()(),t._19(-1,null,["\n"])),(l()(),t._19(-1,null,["\n"])),(l()(),t.Z(8,0,null,null,1,"header-component",[],null,null,null,R.b,R.a)),t.Y(9,114688,null,0,D.a,[O.a,E.a,t.u],null,null),(l()(),t._19(-1,null,["\n\n"])),(l()(),t.Z(11,0,null,null,16,"ion-content",[["no-padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,W.b,W.a)),t.Y(12,4374528,null,0,H.a,[Z.a,A.a,F.a,t.j,t.z,j.a,k.a,t.u,[2,I.a],[2,O.a]],null,null),(l()(),t._19(-1,1,["\n  "])),(l()(),t.Z(14,0,null,1,12,"ion-grid",[["class","grid"]],null,null,null,null,null)),t.Y(15,16384,null,0,B.a,[],null,null),(l()(),t._19(-1,null,["\n    "])),(l()(),t.Z(17,0,null,null,8,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(18,16384,null,0,G.a,[],null,null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.U(16777216,null,null,1,null,o)),t.Y(21,16384,null,0,U.i,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t._19(-1,null,["\n      "])),(l()(),t.U(16777216,null,null,1,null,i)),t.Y(24,802816,null,0,U.h,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._19(-1,null,["\n    "])),(l()(),t._19(-1,null,["\n  "])),(l()(),t._19(-1,1,["\n\n"]))],function(l,n){var u=n.component;l(n,9,0);l(n,21,0,u.loading);l(n,24,0,u.ships)},function(l,n){l(n,3,0,t._13(n,4)._hidden,t._13(n,4)._sbPadding);l(n,11,0,t._13(n,12).statusbarPadding,t._13(n,12)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),a=(u(5),u(27),u(116)),r=(u(246),function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.http=u,this.ships=[],this.loading=!0,this.address=this.navParams.data.address,console.log(this.address),this.request()}return l.prototype.request=function(){var l=this;if(this.address&&this.address.length>8){var n="http://localhost:8080/api/v1/ships?address="+encodeURI(this.address);console.log(n),this.http.get(n).map(function(l){return l.json()}).subscribe(function(n){return l.parseResult(n)},function(l){return console.log(l)},function(){return console.log("Complete")})}else this.loading=!1,this.ships=[{id:777,name:"Placeholder Ship1",model:0,size:"Small",color1:"Blue",color2:"Orange",img:"randomColo"+Math.floor(4.99*Math.random())+".png"},{id:333,name:"Placeholder Ship2",model:1,size:"Large",color1:"Blue",color2:"Green",img:"randomColo"+Math.floor(4.99*Math.random())+".png"},{id:123,name:"Placeholder Ship3",model:2,size:"Normal",color1:"Pink",color2:"Red",img:"randomColo"+Math.floor(4.99*Math.random())+".png"},{id:123,name:"Placeholder Ship4",model:0,size:"Normal",color1:"Pink",color2:"Red",img:"randomColo"+Math.floor(4.99*Math.random())+".png"}]},l.prototype.parseResult=function(l){this.loading=!1,console.log(l),l.length>0&&(this.ships=l),console.log("done")},l}()),s=u(245),c=u(248),p=u(115),h=function(){return function(){}}(),d=u(189),_=u(190),g=u(191),f=u(192),m=u(193),v=u(194),b=u(195),N=u(196),y=u(197),w=u(200),C=u(74),Y=u(55),Z=u(1),S=u(247),M=u(244),P=u(24),E=u(23),O=u(17),z=u(54),I=u(4),T=u(117),L=u(22),j=u(8),R=u(198),D=u(76),W=u(199),H=u(20),A=u(3),F=u(9),k=u(28),B=u(77),G=u(75),U=u(10),x=u(11),q=t.X({encapsulation:2,styles:[],data:{}}),V=t.V("page-profile",r,function(l){return t._21(0,[(l()(),t.Z(0,0,null,null,1,"page-profile",[],null,null,null,e,q)),t.Y(1,49152,null,0,r,[O.a,x.a,a.d],null,null)],null,null)},{},{},[]),X=u(14),J=u(118),$=u(40);u.d(n,"ProfilePageModuleNgFactory",function(){return K});var K=t.W(h,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[d.a,_.a,g.a,f.a,m.a,v.a,b.a,N.a,y.a,V]],[3,t.i],t.s]),t._11(4608,U.k,U.j,[t.r,[2,U.s]]),t._11(4608,X.o,X.o,[]),t._11(4608,X.d,X.d,[]),t._11(512,U.b,U.b,[]),t._11(512,X.m,X.m,[]),t._11(512,X.e,X.e,[]),t._11(512,X.l,X.l,[]),t._11(512,J.a,J.a,[]),t._11(512,p.a,p.a,[]),t._11(512,c.a,c.a,[]),t._11(512,s.a,s.a,[]),t._11(512,J.b,J.b,[]),t._11(512,h,h,[]),t._11(256,$.a,r,[])])})},244:function(l,n,u){"use strict";u.d(n,"a",function(){return o});u(5),u(23),u(27);var o=function(){function l(l,n,u){this.sanitizer=l,this.appState=n,this.navCtrl=u}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(){l.svgUrl=l.sanitizer.bypassSecurityTrustResourceUrl("/assets/imgs/ships/ship"+(l.ship.model<=2?1:2)+".svg");var n=(1==l.ship.model?l.appState.ship1:2==l.ship.model?l.appState.ship2:3==l.ship.model?l.appState.ship3:l.appState.ship4).slice(0).replace("Layer_1","Layer_1-"+Math.random()).replace(/ChangeName/g,"id"+l.ship.id);n=n.replace(/cls-/g,"id"+l.ship.id+"-"),l.appState.changedOne=!0,n=l.getColors(n),l.wrapper.nativeElement.innerHTML=n;var u=l.wrapper.nativeElement.children[0];if("B"==l.ship.weapon1[0])console.log("99"),u.children.CENTER_CANNON.innerHTML="";else{console.log("11"),u.children.WING_CANNON_1.innerHTML="";var o=u.children.WING_CANNON_2;o&&(o.innerHTML="")}},80)},l.prototype.goToShip=function(l,n){l.preventDefault(),this.navCtrl.setRoot("ShipPage",{id:n}),this.appState.activePage="/ship"},l.prototype.ionViewDidLoad=function(){},l.prototype.getColors=function(l){var n="rgb("+this.ship.color1[0]+","+this.ship.color1[1]+","+this.ship.color1[2]+")",u="rgb("+this.ship.color2[0]+","+this.ship.color2[1]+","+this.ship.color2[2]+")";if("B"==this.ship.weapon2[0]){var o=l.indexOf("fill:#");l=(l=(l=l.replace(l.substring(o+5,o+12),u)).replace(/PrimaryColor/g,n)).replace(/SecondaryColor/g,n)}else l=(l=l.replace(/PrimaryColor/g,n)).replace(/SecondaryColor/g,u);return l},l.prototype.doneLoading=function(){console.log("loading"),this.svg.nativeElement.style="--secondary-color: green;";var l=this.wrapper.nativeElement.children[0].contentDocument.all[1].children[1];if(l&&this.ship.weapon2)if("B"==this.ship.weapon2[0]?(l.children[1].attributes[1].value="rgb("+this.ship.color1[0]+","+this.ship.color1[1]+","+this.ship.color1[2]+")",l.children[0].attributes[1].value="rgb("+this.ship.color1[0]+","+this.ship.color1[1]+","+this.ship.color1[2]+")",console.log(this.svg.nativeElement.contentDocument.all[1].children[0].sheet),this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[0].style.fill="rgb("+this.ship.color2[0]+","+this.ship.color2[1]+","+this.ship.color2[2]+")"):(l.children[1].attributes[1].value="rgb("+this.ship.color1[0]+","+this.ship.color1[1]+","+this.ship.color1[2]+")",l.children[0].attributes[1].value="rgb("+this.ship.color2[0]+","+this.ship.color2[1]+","+this.ship.color2[2]+")"),"B"==this.ship.weapon1[0]){if(this.svg.nativeElement.contentDocument.all.CENTER_CANNON.innerHTML="","F"!=this.ship.weapon1[5]){(n=this.svg.nativeElement.contentDocument.all.WING_CANNON_2)&&(n.innerHTML="")}}else{this.svg.nativeElement.contentDocument.all.WING_CANNON_1.innerHTML="";var n;(n=this.svg.nativeElement.contentDocument.all.WING_CANNON_2)&&(n.innerHTML="")}},l}()},245:function(l,n,u){"use strict";u.d(n,"a",function(){return o});u(5),u(27);var o=function(){return function(){}}()},246:function(l,n,u){"use strict";var o=u(21),i=u(201);o.Observable.prototype.map=i.map},247:function(l,n,u){"use strict";function o(l){return e._21(0,[(l()(),e.Z(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._19(1,null,[""," Eth"]))],null,function(l,n){l(n,1,0,n.component.ship.price/1e18)})}function i(l){return e._21(0,[e._17(402653184,1,{svg:0}),e._17(402653184,2,{wrapper:0}),(l()(),e.Z(2,0,null,null,59,"ion-card",[],null,null,null,null,null)),e.Y(3,16384,null,0,t.a,[a.a,e.j,e.z],null,null),(l()(),e._19(-1,null,["\n  "])),(l()(),e.Z(5,0,null,null,55,"a",[],[[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0,i=l.component;if("click"===n){o=!1!==i.goToShip(u,i.ship.id)&&o}return o},null,null)),(l()(),e._19(-1,null,["\n    "])),(l()(),e.Z(7,0,[[2,0],["wrapper",1]],null,5,"div",[["class","shipWrap"]],null,null,null,null,null)),(l()(),e._19(-1,null,["\n      "])),(l()(),e._19(-1,null,["\n\n      "])),(l()(),e._19(-1,null,["\n      "])),(l()(),e._19(-1,null,["\n      "])),(l()(),e._19(-1,null,["\n\n    "])),(l()(),e._19(-1,null,["\n\n    "])),(l()(),e.Z(14,0,null,null,44,"ion-card-content",[],null,null,null,null,null)),e.Y(15,16384,null,0,r.a,[a.a,e.j,e.z],null,null),(l()(),e._19(-1,null,["\n      "])),(l()(),e.Z(17,0,null,null,2,"ion-card-title",[["style","text-overflow: ellipsis"]],null,null,null,null,null)),e.Y(18,16384,null,0,s.a,[a.a,e.j,e.z],null,null),(l()(),e._19(19,null,["\n        ","\n      "])),(l()(),e._19(-1,null,["\n      "])),(l()(),e.Z(21,0,null,null,14,"ion-row",[["class","row"],["no-padding",""]],null,null,null,null,null)),e.Y(22,16384,null,0,c.a,[],null,null),(l()(),e._19(-1,null,["\n        "])),(l()(),e.Z(24,0,null,null,10,"ion-col",[["class","col"]],null,null,null,null,null)),e.Y(25,16384,null,0,p.a,[],null,null),(l()(),e._19(-1,null,["\n          "])),(l()(),e.Z(27,0,null,null,3,"button",[["clear",""],["color","danger"],["icon-start",""],["ion-button",""],["small",""]],null,null,null,h.b,h.a)),e.Y(28,1097728,null,0,d.a,[[8,""],a.a,e.j,e.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),e._19(-1,0,["\n            "])),(l()(),e._19(30,0,["\n            Ship #","\n          "])),(l()(),e._19(-1,null,["\n          "])),(l()(),e.U(16777216,null,null,1,null,o)),e.Y(33,16384,null,0,_.i,[e.I,e.F],{ngIf:[0,"ngIf"]},null),(l()(),e._19(-1,null,["\n        "])),(l()(),e._19(-1,null,["\n      "])),(l()(),e._19(-1,null,["\n      "])),(l()(),e.Z(37,0,null,null,9,"ion-row",[["class","row"],["no-padding",""]],null,null,null,null,null)),e.Y(38,16384,null,0,c.a,[],null,null),(l()(),e._19(-1,null,["\n        "])),(l()(),e.Z(40,0,null,null,5,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),e.Y(41,16384,null,0,p.a,[],null,null),(l()(),e._19(-1,null,["\n          "])),(l()(),e.Z(43,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._19(44,null,["Primary Weapon: ",""])),(l()(),e._19(-1,null,["\n        "])),(l()(),e._19(-1,null,["\n      "])),(l()(),e._19(-1,null,["\n\n      "])),(l()(),e.Z(48,0,null,null,9,"ion-row",[["class","row"],["no-padding",""]],null,null,null,null,null)),e.Y(49,16384,null,0,c.a,[],null,null),(l()(),e._19(-1,null,["\n        "])),(l()(),e.Z(51,0,null,null,5,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),e.Y(52,16384,null,0,p.a,[],null,null),(l()(),e._19(-1,null,["\n          "])),(l()(),e.Z(54,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._19(55,null,["Secondary Weapon: ",""])),(l()(),e._19(-1,null,["\n        "])),(l()(),e._19(-1,null,["\n      "])),(l()(),e._19(-1,null,["\n    "])),(l()(),e._19(-1,null,["\n\n    "])),(l()(),e._19(-1,null,["\n  "])),(l()(),e._19(-1,null,["\n"])),(l()(),e._19(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,28,0,"danger","","");l(n,33,0,u.ship.price)},function(l,n){var u=n.component;l(n,5,0,"/ship/"+u.ship.id);l(n,19,0,u.ship.name?u.ship.name:"Ship "+u.ship.id);l(n,30,0,u.ship.id);l(n,44,0,u.ship.weapon1);l(n,55,0,u.ship.weapon2)})}u.d(n,"a",function(){return g}),n.b=i;var e=u(0),t=u(120),a=u(1),r=u(121),s=u(122),c=u(75),p=u(74),h=u(29),d=u(18),_=u(10),g=(u(23),e.X({encapsulation:2,styles:[],data:{}}))},248:function(l,n,u){"use strict";u(5),u(0);u.d(n,"a",function(){return o});var o=function(){return function(){}}()}});