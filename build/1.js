webpackJsonp([1],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShipsPageModule", function() { return MyShipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_ships__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_module__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HeaderComponentModule } from "../../components/header/header"




// import { ComponentsModule } from "../../components/components.module"
var MyShipsPageModule = (function () {
    function MyShipsPageModule() {
    }
    MyShipsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__my_ships__["a" /* MyShipsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_module__["a" /* HeaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__["a" /* ShipCardComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_ships__["a" /* MyShipsPage */])
            ]
        })
    ], MyShipsPageModule);
    return MyShipsPageModule;
}());

//# sourceMappingURL=my-ships.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(11);
var map_1 = __webpack_require__(191);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ship_card__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShipCardComponentModule = (function () {
    function ShipCardComponentModule() {
    }
    ShipCardComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ship_card__["a" /* ShipCardComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ship_card__["a" /* ShipCardComponent */]]
        })
    ], ShipCardComponentModule);
    return ShipCardComponentModule;
}());

//# sourceMappingURL=ship-card.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipCardComponent = (function () {
    function ShipCardComponent() {
        this.finished = true;
    }
    ShipCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.ship)
        // this.svg.nativeElement.contentDocument.getElementById("GradientFill_1-2")
        setTimeout(function () {
            // console.log(this.svg.nativeElement.contentDocument.all[1].children[1])
            _this.finished = true;
        }, 2100);
        // console.log("svg=",
        // this.svg.nativeElement.getElementById("GradientFill_1-2"))
    };
    ShipCardComponent.prototype.ionViewDidLoad = function () { };
    ShipCardComponent.prototype.doneLoading = function () {
        var gradient = this.svg.nativeElement.contentDocument.all[1].children[1];
        if (gradient && this.ship.weapon2) {
            if (this.ship.weapon2[0] == "B") {
                gradient.children[1].attributes[1].value =
                    "rgb(" +
                        this.ship.color1[0] +
                        "," +
                        this.ship.color1[1] +
                        "," +
                        this.ship.color1[2] +
                        ")";
                gradient.children[0].attributes[1].value =
                    "rgb(" +
                        this.ship.color1[0] +
                        "," +
                        this.ship.color1[1] +
                        "," +
                        this.ship.color1[2] +
                        ")";
                // document.getElementsByTagName("style")[0].sheet.rules[3].style.fill
                this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[3].style.fill =
                    "rgb(" +
                        this.ship.color2[0] +
                        "," +
                        this.ship.color2[1] +
                        "," +
                        this.ship.color2[2] +
                        ")";
            }
            else {
                gradient.children[1].attributes[1].value =
                    "rgb(" +
                        this.ship.color1[0] +
                        "," +
                        this.ship.color1[1] +
                        "," +
                        this.ship.color1[2] +
                        ")";
                gradient.children[0].attributes[1].value =
                    "rgb(" +
                        this.ship.color2[0] +
                        "," +
                        this.ship.color2[1] +
                        "," +
                        this.ship.color2[2] +
                        ")";
            }
            if (this.ship.weapon1[0] == "B") {
                this.svg.nativeElement.contentDocument.all["CENTER_CANON"].innerHTML =
                    "";
                if (this.ship.weapon1[5] != "F") {
                    this.svg.nativeElement.contentDocument.all["WING_CANON_2"].innerHTML =
                        "";
                }
            }
            else {
                this.svg.nativeElement.contentDocument.all["WING_CANON_1"].innerHTML =
                    "";
                this.svg.nativeElement.contentDocument.all["WING_CANON_2"].innerHTML =
                    "";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ShipCardComponent.prototype, "ship", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("svg"),
        __metadata("design:type", Object)
    ], ShipCardComponent.prototype, "svg", void 0);
    ShipCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ship-card",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/'<ion-card>\n\n  <div class="shipWrap">\n    <!-- <img #svg class="shipSVG" src="assets/imgs/ships/ship1.svg" /> -->\n    <object #svg type="image/svg+xml" data="assets/imgs/ships/ship1.svg" class="shipSVG" [hidden]="!finished"  (load)="doneLoading()">\n      Ship Image\n    </object>\n  </div>\n\n  <ion-card-content>\n    <ion-card-title style="text-overflow: ellipsis">\n      {{ship.name ? ship.name : \'Ship \'+ship.id}}\n    </ion-card-title>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start>\n        <!-- <ion-icon name=\'star\'></ion-icon> -->\n        Ship #{{ship.id}}\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row no-padding>\n    <ion-col col-12>\n      <span>Primary Weapon: {{ship.weapon1}}</span>\n    </ion-col>\n  </ion-row>\n\n  <ion-row no-padding>\n    <ion-col col-12>\n      <span>Secondary Weapon: {{ship.weapon2}}</span>\n    </ion-col>\n  </ion-row>\n  </ion-card-content>\n\n  <!-- <ion-row no-padding>\n    <ion-col col-6>\n      <span [ngStyle]="{\'color\': \'rgb(\' + ship.color1[0] + \',\' + ship.color1[1] + \',\' + ship.color1[2] +\')\'}">Primary Color</span>\n    </ion-col>\n    <ion-col col-6>\n      <span [ngStyle]="{\'color\': \'rgb(\' + ship.color2[0] + \',\' + ship.color2[1] + \',\' + ship.color2[2] +\')\'}">Secondary Color</span>\n    </ion-col>\n  </ion-row> -->\n</ion-card>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ShipCardComponent);
    return ShipCardComponent;
}());

//# sourceMappingURL=ship-card.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyShipsPage = (function () {
    function MyShipsPage(navCtrl, navParams, appState, http, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appState = appState;
        this.http = http;
        this.events = events;
        this.ships = [];
        this.noAccount = false;
        this.loading = true;
        this.request();
        events.subscribe("account:changed", function (account) {
            _this.changeAccount();
        });
    }
    MyShipsPage.prototype.request = function () {
        var _this = this;
        if (this.appState.account && this.appState.account.length > 8) {
            var url = "https://api.eth.bid/api/v1/ships?address=" +
                // "http://localhost:8080/api/v1/ships?address=" +
                encodeURI(this.appState.account);
            console.log(url);
            this.http
                .get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return _this.parseResult(data); }, function (err) { return console.log(err); }, function () { return console.log("Complete"); });
        }
        else {
            this.noAccount = true;
            this.loading = false;
            this.ships = [
                {
                    id: 777,
                    name: "Placeholder Ship1",
                    model: 0,
                    size: "Small",
                    color1: "Blue",
                    color2: "Orange",
                    img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
                },
                {
                    id: 333,
                    name: "Placeholder Ship2",
                    model: 1,
                    size: "Large",
                    color1: "Blue",
                    color2: "Green",
                    img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
                },
                {
                    id: 123,
                    name: "Placeholder Ship3",
                    model: 2,
                    size: "Normal",
                    color1: "Pink",
                    color2: "Red",
                    img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
                },
                {
                    id: 123,
                    name: "Placeholder Ship4",
                    model: 0,
                    size: "Normal",
                    color1: "Pink",
                    color2: "Red",
                    img: "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
                }
            ];
        }
    };
    MyShipsPage.prototype.parseResult = function (data) {
        this.loading = false;
        console.log(data);
        if (data.length > 0) {
            data.forEach(function (ship) {
                ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png";
            });
            this.ships = data;
            console.log(this.ships[2].img);
        }
        console.log("done");
    };
    MyShipsPage.prototype.changeAccount = function () {
        this.loading = true;
        this.ships = [];
        this.request();
    };
    MyShipsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MyShipsPage");
    };
    MyShipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-my-ships",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\my-ships\my-ships.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid class="contentRoom">\n    <ion-row>\n      <ion-spinner *ngIf="loading" ion-col col-12>\n      </ion-spinner>\n      <ship-card *ngFor="let ship of ships" ion-col col-12 col-xl-3 col-lg-4 col-md-6 [ship]="ship"></ship-card>\n    </ion-row>\n  </ion-grid>\n\n  <footer-component></footer-component>\n</ion-content>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\my-ships\my-ships.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyShipsPage);
    return MyShipsPage;
}());

//# sourceMappingURL=my-ships.js.map

/***/ })

});
//# sourceMappingURL=1.js.map