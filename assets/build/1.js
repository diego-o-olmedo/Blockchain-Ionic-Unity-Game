webpackJsonp([1],{237:function(l,n,u){"use strict";function o(l){return a._19(0,[(l()(),a.Z(0,0,null,null,3,"ion-spinner",[["class","col"],["col-12",""],["ion-col",""]],[[2,"spinner-paused",null]],null,null,w.b,w.a)),a.Y(1,16384,null,0,M.a,[],null,null),a.Y(2,114688,null,0,S.a,[N.a,a.j,a.z],null,null),(l()(),a._18(-1,null,["\n      "]))],function(l,n){l(n,2,0)},function(l,n){l(n,0,0,a._13(n,2)._paused)})}function t(l){return a._19(0,[(l()(),a.Z(0,0,null,null,2,"ship-card",[["class","col"],["col-12",""],["col-lg-4",""],["col-md-6",""],["col-xl-3",""],["ion-col",""]],null,null,null,P.b,P.a)),a.Y(1,114688,null,0,j.a,[],{ship:[0,"ship"]},null),a.Y(2,16384,null,0,M.a,[],null,null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function i(l){return a._19(0,[(l()(),a.Z(0,0,[["head",1]],null,6,"ion-header",[],null,null,null,null,null)),a.Y(1,16384,null,0,z.a,[N.a,a.j,a.z,[2,C.a]],null,null),(l()(),a._18(-1,null,["\n  "])),(l()(),a.Z(3,0,null,null,2,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,I.b,I.a)),a.Y(4,49152,null,0,L.a,[O.a,[2,C.a],[2,D.a],N.a,a.j,a.z],null,null),(l()(),a._18(-1,3,["\n  "])),(l()(),a._18(-1,null,["\n"])),(l()(),a._18(-1,null,["\n"])),(l()(),a.Z(8,0,null,null,1,"header-component",[],null,null,null,E.b,E.a)),a.Y(9,49152,null,0,A.a,[D.a,e.a,a.u],null,null),(l()(),a._18(-1,null,["\n\n"])),(l()(),a.Z(11,0,null,null,19,"ion-content",[["no-padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,R.b,R.a)),a.Y(12,4374528,null,0,W.a,[N.a,F.a,T.a,a.j,a.z,O.a,G.a,a.u,[2,C.a],[2,D.a]],null,null),(l()(),a._18(-1,1,["\n  "])),(l()(),a.Z(14,0,null,1,12,"ion-grid",[["class","contentRoom grid"]],null,null,null,null,null)),a.Y(15,16384,null,0,V.a,[],null,null),(l()(),a._18(-1,null,["\n    "])),(l()(),a.Z(17,0,null,null,8,"ion-row",[["class","row"]],null,null,null,null,null)),a.Y(18,16384,null,0,k.a,[],null,null),(l()(),a._18(-1,null,["\n      "])),(l()(),a.U(16777216,null,null,1,null,o)),a.Y(21,16384,null,0,x.i,[a.I,a.F],{ngIf:[0,"ngIf"]},null),(l()(),a._18(-1,null,["\n      "])),(l()(),a.U(16777216,null,null,1,null,t)),a.Y(24,802816,null,0,x.h,[a.I,a.F,a.p],{ngForOf:[0,"ngForOf"]},null),(l()(),a._18(-1,null,["\n    "])),(l()(),a._18(-1,null,["\n  "])),(l()(),a._18(-1,1,["\n\n  "])),(l()(),a.Z(28,0,null,1,1,"footer-component",[],null,null,null,B.b,B.a)),a.Y(29,49152,null,0,H.a,[],null,null),(l()(),a._18(-1,1,["\n"]))],function(l,n){var u=n.component;l(n,21,0,u.loading);l(n,24,0,u.ships)},function(l,n){l(n,3,0,a._13(n,4)._hidden,a._13(n,4)._sbPadding);l(n,11,0,a._13(n,12).statusbarPadding,a._13(n,12)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=u(0),e=(u(5),u(39),u(25)),s=u(118),r=(u(244),function(){function l(l,n,u,o,t){var i=this;this.navCtrl=l,this.navParams=n,this.appState=u,this.http=o,this.events=t,this.ships=[],this.noAccount=!1,this.loading=!0,this.request(),t.subscribe("account:changed",function(l){i.changeAccount()})}return l.prototype.request=function(){var l=this;if(this.appState.account&&this.appState.account.length>8){var n="https://api.eth.bid/api/v1/ships?address="+encodeURI(this.appState.account);console.log(n),this.http.get(n).map(function(l){return l.json()}).subscribe(function(n){return l.parseResult(n)},function(l){return console.log(l)},function(){return console.log("Complete")})}else this.noAccount=!0,this.loading=!1,this.ships=[{id:777,name:"Placeholder Ship1",model:0,size:"Small",color1:"Blue",color2:"Orange",img:"randomColo"+Math.floor(4.99*Math.random())+".png"},{id:333,name:"Placeholder Ship2",model:1,size:"Large",color1:"Blue",color2:"Green",img:"randomColo"+Math.floor(4.99*Math.random())+".png"},{id:123,name:"Placeholder Ship3",model:2,size:"Normal",color1:"Pink",color2:"Red",img:"randomColo"+Math.floor(4.99*Math.random())+".png"},{id:123,name:"Placeholder Ship4",model:0,size:"Normal",color1:"Pink",color2:"Red",img:"randomColo"+Math.floor(4.99*Math.random())+".png"}]},l.prototype.parseResult=function(l){this.loading=!1,console.log(l),l.length>0&&(l.forEach(function(l){l.img="randomColo"+Math.floor(4.99*Math.random())+".png"}),this.ships=l,console.log(this.ships[2].img)),console.log("done")},l.prototype.changeAccount=function(){this.loading=!0,this.ships=[],this.request()},l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad MyShipsPage")},l}()),c=u(242),h=u(243),p=u(115),d=function(){return function(){}}(),_=u(187),g=u(188),f=u(189),m=u(190),v=u(191),b=u(192),Y=u(193),Z=u(194),y=u(195),w=u(198),M=u(75),S=u(55),N=u(1),P=u(245),j=u(241),z=u(54),C=u(4),I=u(116),L=u(22),O=u(8),D=u(17),E=u(196),A=u(74),R=u(197),W=u(20),F=u(3),T=u(9),G=u(26),V=u(78),k=u(76),x=u(10),B=u(199),H=u(77),q=u(11),U=u(79),X=a.X({encapsulation:2,styles:[],data:{}}),J=a.V("page-my-ships",r,function(l){return a._19(0,[(l()(),a.Z(0,0,null,null,1,"page-my-ships",[],null,null,null,i,X)),a.Y(1,49152,null,0,r,[D.a,q.a,e.a,s.d,U.a],null,null)],null,null)},{},{},[]),$=u(14),K=u(117),Q=u(40);u.d(n,"MyShipsPageModuleNgFactory",function(){return ll});var ll=a.W(d,[],function(l){return a._10([a._11(512,a.i,a.S,[[8,[_.a,g.a,f.a,m.a,v.a,b.a,Y.a,Z.a,y.a,J]],[3,a.i],a.s]),a._11(4608,x.k,x.j,[a.r,[2,x.s]]),a._11(4608,$.o,$.o,[]),a._11(4608,$.d,$.d,[]),a._11(512,h.a,h.a,[]),a._11(512,x.b,x.b,[]),a._11(512,$.m,$.m,[]),a._11(512,$.e,$.e,[]),a._11(512,$.l,$.l,[]),a._11(512,K.a,K.a,[]),a._11(512,p.a,p.a,[]),a._11(512,c.a,c.a,[]),a._11(512,K.b,K.b,[]),a._11(512,d,d,[]),a._11(256,Q.a,r,[])])})},241:function(l,n,u){"use strict";u.d(n,"a",function(){return o});u(5);var o=function(){function l(){this.finished=!0}return l.prototype.ngOnInit=function(){var l=this;setTimeout(function(){l.finished=!0},2100)},l.prototype.ionViewDidLoad=function(){},l.prototype.doneLoading=function(){var l=this.svg.nativeElement.contentDocument.all[1].children[1];l&&this.ship.weapon2&&("B"==this.ship.weapon2[0]?(l.children[1].attributes[1].value="rgb("+this.ship.color1[0]+","+this.ship.color1[1]+","+this.ship.color1[2]+")",l.children[0].attributes[1].value="rgb("+this.ship.color1[0]+","+this.ship.color1[1]+","+this.ship.color1[2]+")",this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[3].style.fill="rgb("+this.ship.color2[0]+","+this.ship.color2[1]+","+this.ship.color2[2]+")"):(l.children[1].attributes[1].value="rgb("+this.ship.color1[0]+","+this.ship.color1[1]+","+this.ship.color1[2]+")",l.children[0].attributes[1].value="rgb("+this.ship.color2[0]+","+this.ship.color2[1]+","+this.ship.color2[2]+")"),"B"==this.ship.weapon1[0]?(this.svg.nativeElement.contentDocument.all.CENTER_CANON.innerHTML="","F"!=this.ship.weapon1[5]&&(this.svg.nativeElement.contentDocument.all.WING_CANON_2.innerHTML="")):(this.svg.nativeElement.contentDocument.all.WING_CANON_1.innerHTML="",this.svg.nativeElement.contentDocument.all.WING_CANON_2.innerHTML=""))},l}()},242:function(l,n,u){"use strict";u.d(n,"a",function(){return o});u(5),u(39);var o=function(){return function(){}}()},243:function(l,n,u){"use strict";u(5),u(0);u.d(n,"a",function(){return o});var o=function(){return function(){}}()},244:function(l,n,u){"use strict";var o=u(21),t=u(200);o.Observable.prototype.map=t.map},245:function(l,n,u){"use strict";function o(l){return t._19(0,[t._16(402653184,1,{svg:0}),(l()(),t.Z(1,0,null,null,53,"ion-card",[],null,null,null,null,null)),t.Y(2,16384,null,0,i.a,[a.a,t.j,t.z],null,null),(l()(),t._18(-1,null,["\n\n  "])),(l()(),t.Z(4,0,null,null,5,"div",[["class","shipWrap"]],null,null,null,null,null)),(l()(),t._18(-1,null,["\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(7,0,[[1,0],["svg",1]],null,1,"object",[["class","shipSVG"],["data","/assets/imgs/ships/ship1.svg"],["type","image/svg+xml"]],[[8,"hidden",0]],[[null,"load"]],function(l,n,u){var o=!0;if("load"===n){o=!1!==l.component.doneLoading()&&o}return o},null,null)),(l()(),t._18(-1,null,["\n      Ship Image\n    "])),(l()(),t._18(-1,null,["\n  "])),(l()(),t._18(-1,null,["\n\n  "])),(l()(),t.Z(11,0,null,null,41,"ion-card-content",[],null,null,null,null,null)),t.Y(12,16384,null,0,e.a,[a.a,t.j,t.z],null,null),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(14,0,null,null,2,"ion-card-title",[["style","text-overflow: ellipsis"]],null,null,null,null,null)),t.Y(15,16384,null,0,s.a,[a.a,t.j,t.z],null,null),(l()(),t._18(16,null,["\n      ","\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(18,0,null,null,11,"ion-row",[["class","row"],["no-padding",""]],null,null,null,null,null)),t.Y(19,16384,null,0,r.a,[],null,null),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(21,0,null,null,7,"ion-col",[["class","col"]],null,null,null,null,null)),t.Y(22,16384,null,0,c.a,[],null,null),(l()(),t._18(-1,null,["\n        "])),(l()(),t.Z(24,0,null,null,3,"button",[["clear",""],["color","danger"],["icon-start",""],["ion-button",""],["small",""]],null,null,null,h.b,h.a)),t.Y(25,1097728,null,0,p.a,[[8,""],a.a,t.j,t.z],{color:[0,"color"],small:[1,"small"],clear:[2,"clear"]},null),(l()(),t._18(-1,0,["\n          "])),(l()(),t._18(27,0,["\n          Ship #","\n        "])),(l()(),t._18(-1,null,["\n      "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t.Z(31,0,null,null,9,"ion-row",[["class","row"],["no-padding",""]],null,null,null,null,null)),t.Y(32,16384,null,0,r.a,[],null,null),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(34,0,null,null,5,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),t.Y(35,16384,null,0,c.a,[],null,null),(l()(),t._18(-1,null,["\n        "])),(l()(),t.Z(37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._18(38,null,["Primary Weapon: ",""])),(l()(),t._18(-1,null,["\n      "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t._18(-1,null,["\n\n    "])),(l()(),t.Z(42,0,null,null,9,"ion-row",[["class","row"],["no-padding",""]],null,null,null,null,null)),t.Y(43,16384,null,0,r.a,[],null,null),(l()(),t._18(-1,null,["\n      "])),(l()(),t.Z(45,0,null,null,5,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),t.Y(46,16384,null,0,c.a,[],null,null),(l()(),t._18(-1,null,["\n        "])),(l()(),t.Z(48,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._18(49,null,["Secondary Weapon: ",""])),(l()(),t._18(-1,null,["\n      "])),(l()(),t._18(-1,null,["\n    "])),(l()(),t._18(-1,null,["\n  "])),(l()(),t._18(-1,null,["\n\n  "])),(l()(),t._18(-1,null,["\n"]))],function(l,n){l(n,25,0,"danger","","")},function(l,n){var u=n.component;l(n,7,0,!u.finished);l(n,16,0,u.ship.name?u.ship.name:"Ship "+u.ship.id);l(n,27,0,u.ship.id);l(n,38,0,u.ship.weapon1);l(n,49,0,u.ship.weapon2)})}u.d(n,"a",function(){return d}),n.b=o;var t=u(0),i=u(119),a=u(1),e=u(120),s=u(121),r=u(76),c=u(75),h=u(27),p=u(18),d=t.X({encapsulation:2,styles:[],data:{}})}});