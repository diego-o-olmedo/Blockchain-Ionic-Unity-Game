webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__["a" /* ShipCardComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */])
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(11);
var map_1 = __webpack_require__(191);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ship_card__ = __webpack_require__(274);
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
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
    function ShipCardComponent(sanitizer, appState, navCtrl) {
        this.sanitizer = sanitizer;
        this.appState = appState;
        this.navCtrl = navCtrl;
    }
    ShipCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var shipModel = _this.ship.model <= 2 ? 1 : 2;
            _this.svgUrl = _this.sanitizer.bypassSecurityTrustResourceUrl("/assets/imgs/ships/ship" + shipModel + ".svg");
            // console.log(this.ship)
            // let shipModel = this.ship.model == 1 ? 1 : 2
            // this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            //   "/assets/imgs/ships/ship" + shipModel + ".svg"
            // )
            // console.log(this.wrapper)
            var shipLoad;
            if (_this.ship.model == 1) {
                shipLoad = _this.appState.ship1;
            }
            else if (_this.ship.model == 2) {
                shipLoad = _this.appState.ship2;
            }
            else if (_this.ship.model == 3) {
                shipLoad = _this.appState.ship3;
            }
            else {
                shipLoad = _this.appState.ship4;
            }
            shipLoad = shipLoad.slice(0);
            shipLoad = shipLoad.replace("Layer_1", "Layer_1-" + Math.random());
            var data = shipLoad.replace(/ChangeName/g, "id" + _this.ship.id);
            data = data.replace(/cls-/g, "id" + _this.ship.id + "-");
            _this.appState.changedOne = true;
            data = _this.getColors(data);
            _this.wrapper.nativeElement.innerHTML = data;
            var svgNative = _this.wrapper.nativeElement.children[0];
            if (_this.ship.weapon1[0] == "B") {
                console.log('99');
                svgNative.children["CENTER_CANNON"].innerHTML = "";
                // if (this.ship.weapon1[5] != "F") {
                //   svgNative.children["WING_CANNON_1"].innerHTML = ""
                //   let cannon2 = svgNative.children["WING_CANNON_2"]
                //   if (cannon2) {
                //     cannon2.innerHTML = ""
                //   }
                // }
            }
            else {
                console.log('11');
                svgNative.children["WING_CANNON_1"].innerHTML = "";
                var cannon2 = svgNative.children["WING_CANNON_2"];
                if (cannon2) {
                    cannon2.innerHTML = "";
                }
            }
        }, 80);
        // this.doneLoading()
    };
    ShipCardComponent.prototype.goToShip = function (e, id) {
        e.preventDefault();
        this.navCtrl.setRoot("ShipPage", { id: id });
        this.appState.activePage = "/ship";
    };
    ShipCardComponent.prototype.ionViewDidLoad = function () { };
    ShipCardComponent.prototype.getColors = function (data) {
        var color1 = "rgb(" +
            this.ship.color1[0] +
            "," +
            this.ship.color1[1] +
            "," +
            this.ship.color1[2] +
            ")";
        var color2 = "rgb(" +
            this.ship.color2[0] +
            "," +
            this.ship.color2[1] +
            "," +
            this.ship.color2[2] +
            ")";
        if (this.ship.weapon2[0] == "B") {
            var ind = data.indexOf("fill:#");
            data = data.replace(data.substring(ind + 5, ind + 12), color2);
            data = data.replace(/PrimaryColor/g, color1);
            data = data.replace(/SecondaryColor/g, color1);
        }
        else {
            data = data.replace(/PrimaryColor/g, color1);
            data = data.replace(/SecondaryColor/g, color2);
        }
        return data;
    };
    ShipCardComponent.prototype.doneLoading = function () {
        console.log("loading");
        this.svg.nativeElement.style = "--secondary-color: green;";
        var gradient = this.wrapper.nativeElement.children[0].contentDocument.all[1]
            .children[1];
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
                console.log(this.svg.nativeElement.contentDocument.all[1].children[0].sheet);
                this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[0].style.fill =
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
                this.svg.nativeElement.contentDocument.all["CENTER_CANNON"].innerHTML =
                    "";
                if (this.ship.weapon1[5] != "F") {
                    var cannon2 = this.svg.nativeElement.contentDocument.all["WING_CANNON_2"];
                    if (cannon2) {
                        cannon2.innerHTML = "";
                    }
                }
            }
            else {
                this.svg.nativeElement.contentDocument.all["WING_CANNON_1"].innerHTML =
                    "";
                var cannon2 = this.svg.nativeElement.contentDocument.all["WING_CANNON_2"];
                if (cannon2) {
                    cannon2.innerHTML = "";
                }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("wrapper"),
        __metadata("design:type", Object)
    ], ShipCardComponent.prototype, "wrapper", void 0);
    ShipCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ship-card",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/'<ion-card>\n  <a [href]="\'/ship/\'+ship.id" (click)="goToShip($event, ship.id)">\n    <div class="shipWrap" #wrapper>\n      <!-- <img #svg class="shipSVG" src="assets/imgs/ships/ship1.svg" /> -->\n\n      <!-- <svg #svg class="svgClass">\n      <use xlink:href="#ship1" id="shiper1" style="--primary-color: #0099cc;"></use>\n    </svg> -->\n      <!-- <object #svg type="image/svg+xml" [data]="svgUrl" class="shipSVG" (load)="doneLoading()">\n      Ship Image\n    </object> -->\n      <!-- <object #svg type="image/svg+xml" [data]="this.appState.ship1" class="shipSVG" (load)="doneLoading()">\n      Ship Image\n    </object> -->\n\n    </div>\n\n    <ion-card-content>\n      <ion-card-title style="text-overflow: ellipsis">\n        {{ship.name ? ship.name : \'Ship \'+ship.id}}\n      </ion-card-title>\n      <ion-row no-padding>\n        <ion-col>\n          <button ion-button clear small color="danger" icon-start>\n            <!-- <ion-icon name=\'star\'></ion-icon> -->\n            Ship #{{ship.id}}\n          </button>\n          <span *ngIf="ship.price">{{ship.price / 1000000000000000000}} Eth</span>\n        </ion-col>\n      </ion-row>\n      <ion-row no-padding>\n        <ion-col col-12>\n          <span>Primary Weapon: {{ship.weapon1}}</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row no-padding>\n        <ion-col col-12>\n          <span>Secondary Weapon: {{ship.weapon2}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n    <!-- <ion-row no-padding>\n    <ion-col col-6>\n      <span [ngStyle]="{\'color\': \'rgb(\' + ship.color1[0] + \',\' + ship.color1[1] + \',\' + ship.color1[2] +\')\'}">Primary Color</span>\n    </ion-col>\n    <ion-col col-6>\n      <span [ngStyle]="{\'color\': \'rgb(\' + ship.color2[0] + \',\' + ship.color2[1] + \',\' + ship.color2[2] +\')\'}">Secondary Color</span>\n    </ion-col>\n  </ion-row> -->\n  </a>\n</ion-card>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]) === "function" && _c || Object])
    ], ShipCardComponent);
    return ShipCardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=ship-card.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideHeaderDirective; });
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

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var HideHeaderDirective = (function () {
    function HideHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log("Hello HideHeaderDirective Directive", this.header);
    }
    HideHeaderDirective.prototype.ngOnInit = function () {
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, "webkitTransition", "top 700ms");
        this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
        this.renderer.setElementStyle(this.scrollContent, "webkitTransition", "margin-top 700ms");
    };
    HideHeaderDirective.prototype.onContentScroll = function (event) {
        if (event.scrollTop > 56) {
            this.renderer.setElementStyle(this.header, "top", "-56px");
            this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px");
        }
        else {
            this.renderer.setElementStyle(this.header, "top", "0px");
            this.renderer.setElementStyle(this.scrollContent, "margin-top", "56px");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("header"),
        __metadata("design:type", HTMLElement)
    ], HideHeaderDirective.prototype, "header", void 0);
    HideHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[hide-header]",
            host: {
                "(ionScroll)": "onContentScroll($event)"
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], HideHeaderDirective);
    return HideHeaderDirective;
}());

//# sourceMappingURL=hide-header.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.ships = [];
        this.loading = true;
        this.address = this.navParams.data.address;
        console.log(this.address);
        this.request();
    }
    ProfilePage.prototype.request = function () {
        var _this = this;
        if (this.address && this.address.length > 8) {
            var url = 
            // "https://api.eth.bid/api/v1/ships?address="
            "http://localhost:8080/api/v1/ships?address=" + encodeURI(this.address);
            console.log(url);
            this.http
                .get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return _this.parseResult(data); }, function (err) { return console.log(err); }, function () { return console.log("Complete"); });
        }
        else {
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
    ProfilePage.prototype.parseResult = function (data) {
        this.loading = false;
        console.log(data);
        if (data.length > 0) {
            // data.forEach(ship => {
            //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
            // })
            this.ships = data;
        }
        console.log("done");
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-profile",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\profile\profile.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row>\n      <ion-spinner *ngIf="loading" ion-col col-12>\n      </ion-spinner>\n      <ship-card *ngFor="let ship of ships" ion-col col-12 col-xl-3 col-lg-4 col-md-6 [ship]="ship"></ship-card>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map