webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShipsPageModule", function() { return MyShipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_ships__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HeaderComponentModule } from "../../components/header/header"



 // <-- import the module
var MyShipsPageModule = (function () {
    function MyShipsPageModule() {
    }
    MyShipsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__my_ships__["a" /* MyShipsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(11);
var map_1 = __webpack_require__(191);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ship_card__ = __webpack_require__(275);
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(273);
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





var ShipCardComponent = (function () {
    function ShipCardComponent(appState, navCtrl, http) {
        this.appState = appState;
        this.navCtrl = navCtrl;
        this.http = http;
    }
    ShipCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.demo) {
            this.initShip(this.ship.model, false);
        }
        else {
            setInterval(function () {
                var model = Math.floor(Math.random() * 5);
                _this.initShip(model, true);
            }, 700);
        }
    };
    ShipCardComponent.prototype.initShip = function (model, demo) {
        var _this = this;
        if (this.appState.shipImages[model]) {
            this.finalizeShip(this.appState.shipImages[model], demo);
        }
        else {
            this.http
                .get("/images/ships/" + model + "-ship.svg")
                .map(function (res) { return res.text(); })
                .subscribe(function (data) {
                _this.appState.shipImages[model] = data;
                _this.finalizeShip(data, demo);
            }, function (err) { return console.log(err); });
        }
    };
    ShipCardComponent.prototype.positionEleToCenter = function () {
        var bbox = this.svgNative.getBBox();
        console.log(bbox.width + " bbox " + bbox.height);
        var viewBox = this.svgNative.getAttribute("viewBox");
        console.log(viewBox);
        viewBox = viewBox.split(" ");
        var cx = parseFloat(viewBox[0]) + parseFloat(viewBox[2]) / 2;
        var cy = parseFloat(viewBox[1]) + parseFloat(viewBox[3]) / 2;
        var x = cx - bbox.x - bbox.width / 2;
        var y = cy - bbox.y - bbox.height / 2;
        var matrix = "1 0 0 1 " + x + " " + y;
        this.svgNative.setAttribute("transform", "matrix(" + matrix + ")");
    };
    ShipCardComponent.prototype.finalizeShip = function (shipLoad, demo) {
        shipLoad = shipLoad.slice(0);
        shipLoad = shipLoad.replace("Layer_1", "Layer_1-" + Math.random());
        var data = shipLoad.replace(/ChangeName/g, "id" + this.ship.id);
        data = data.replace(/cls-/g, "id" + this.ship.id + "-");
        this.appState.changedOne = true;
        this.original = data;
        if (demo) {
            data = this.getColors2(data);
        }
        else {
            data = this.getColors(data);
        }
        this.wrapper.nativeElement.innerHTML = data;
        this.svgNative = this.wrapper.nativeElement.children[0];
        if ((demo && Math.random() > 0.5) ||
            (!demo && this.ship.primaryWeapon[0] == "B")) {
            this.svgNative.children["CENTER_CANNON"].innerHTML = "";
        }
        else {
            this.svgNative.children["WING_CANNON_1"].innerHTML = "";
            var cannon2 = this.svgNative.children["WING_CANNON_2"];
            if (cannon2) {
                cannon2.innerHTML = "";
            }
        }
        // this.positionEleToCenter()
    };
    ShipCardComponent.prototype.goToShip = function (e, id) {
        e.preventDefault();
        this.navCtrl.setRoot("ShipPage", { id: id });
        this.appState.activePage = "/ship";
    };
    ShipCardComponent.prototype.ionViewDidLoad = function () { };
    ShipCardComponent.prototype.getColors2 = function (data) {
        // if (Math.random() > 0.5) {
        // if (this.ship.primaryColor[0] > 255 || this.ship.primaryColor[0] < 0) {
        this.ship.primaryColor[0] = Math.random() * 255;
        // }
        // if (this.ship.primaryColor[1] > 255 || this.ship.primaryColor[1] < 0) {
        this.ship.primaryColor[1] = Math.random() * 255;
        // }
        // if (this.ship.primaryColor[2] > 255 || this.ship.primaryColor[2] < 0) {
        this.ship.primaryColor[2] = Math.random() * 255;
        // }
        // } else {
        // if (this.ship.secondaryColor[0] > 255 || this.ship.secondaryColor[0] < 0) {
        this.ship.secondaryColor[0] = Math.random() * 255;
        // }
        // if (this.ship.secondaryColor[1] > 255 || this.ship.secondaryColor[1] < 0) {
        this.ship.secondaryColor[1] = Math.random() * 255;
        // }
        // if (this.ship.secondaryColor[2] > 255 || this.ship.secondaryColor[2] < 0) {
        this.ship.secondaryColor[2] = Math.random() * 255;
        // }
        // }
        var primaryColor = "rgb(" +
            this.ship.primaryColor[0]++ +
            "," +
            this.ship.primaryColor[1]++ +
            "," +
            this.ship.primaryColor[2]-- +
            ")";
        var secondaryColor = "rgb(" +
            this.ship.secondaryColor[0]-- +
            "," +
            this.ship.secondaryColor[1]-- +
            "," +
            this.ship.secondaryColor[2]++ +
            ")";
        if (Math.random() > 0.75) {
            var ind = data.indexOf("fill:#");
            data = data.replace(data.substring(ind + 5, ind + 12), secondaryColor);
            data = data.replace(/PrimaryColor/g, primaryColor);
            data = data.replace(/SecondaryColor/g, primaryColor);
        }
        else {
            data = data.replace(/PrimaryColor/g, primaryColor);
            data = data.replace(/SecondaryColor/g, secondaryColor);
        }
        return data;
    };
    ShipCardComponent.prototype.getColors = function (data) {
        var primaryColor = "rgb(" +
            this.ship.primaryColor[0] +
            "," +
            this.ship.primaryColor[1] +
            "," +
            this.ship.primaryColor[2] +
            ")";
        var secondaryColor = "rgb(" +
            this.ship.secondaryColor[0] +
            "," +
            this.ship.secondaryColor[1] +
            "," +
            this.ship.secondaryColor[2] +
            ")";
        if (this.ship.secondaryWeapon[0] == "B") {
            var ind = data.indexOf("fill:#");
            data = data.replace(data.substring(ind + 5, ind + 12), secondaryColor);
            data = data.replace(/PrimaryColor/g, primaryColor);
            data = data.replace(/SecondaryColor/g, primaryColor);
        }
        else {
            data = data.replace(/PrimaryColor/g, primaryColor);
            data = data.replace(/SecondaryColor/g, secondaryColor);
        }
        return data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ShipCardComponent.prototype, "ship", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ShipCardComponent.prototype, "demo", void 0);
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
            selector: "ship-card",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/'<ion-card>\n  <a [href]="\'/ship/\' + ship.id" (click)="goToShip($event, ship.id)">\n    <ion-card-content>\n      <div class="shipWrap" #wrapper>\n      </div>\n      <ion-row no-padding *ngIf="!demo">\n        <ion-col col-12>\n          <div class="weaponWrap">\n            <img class="weaponIcon" [src]="\'/assets/imgs/weapons/\' + ship.secondaryWeapon + \'.png\'" [title]="ship.secondaryWeapon" />\n            <img class="weaponIcon" [src]="\'/assets/imgs/weapons/\' + ship.primaryWeapon + \'.png\'" [title]="ship.primaryWeapon" />\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-card-title class="ellip" *ngIf="!demo">\n        {{ ship.name ? ship.name : "Ship " + ship.id }}\n      </ion-card-title>\n      <ion-row no-padding *ngIf="!demo">\n        <ion-col>\n          <button ion-button clear small color="danger" icon-start title="ship.model">\n            <!-- <ion-icon name=\'star\'></ion-icon> -->\n            Ship #{{ ship.id }}\n          </button>\n          <span *ngIf="ship.price">{{ ship.price / 1000000000000000000 }} Eth</span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </a>\n</ion-card>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_app_service__["a" /* AppState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object])
    ], ShipCardComponent);
    return ShipCardComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=ship-card.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_match_height_my_match_height__ = __webpack_require__(278);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_2__my_match_height_my_match_height__["a" /* MyMatchHeightDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_2__my_match_height_my_match_height__["a" /* MyMatchHeightDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 277:
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

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMatchHeightDirective; });
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

var MyMatchHeightDirective = (function () {
    function MyMatchHeightDirective(el) {
        this.el = el;
        console.log("in match");
    }
    MyMatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.matchHeight(_this.el.nativeElement, _this.myMatchHeight);
        }, 50);
    };
    MyMatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    MyMatchHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        console.log("match", parent);
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        Array.from(children).forEach(function (x) {
            x.style.height = "initial";
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children).map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children).forEach(function (x) { return (x.style.height = maxHeight + "px"); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MyMatchHeightDirective.prototype, "myMatchHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:resize"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyMatchHeightDirective.prototype, "onResize", null);
    MyMatchHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[myMatchHeight]" // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MyMatchHeightDirective);
    return MyMatchHeightDirective;
}());

//# sourceMappingURL=my-match-height.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(273);
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
    // loading = true
    function MyShipsPage(navCtrl, navParams, appState, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appState = appState;
        this.http = http;
        this.events = events;
        this.p = 1;
        this.noAccount = false;
        this.show = true;
        if (this.appState.account && this.appState.account.length > 8) {
        }
        else {
            this.noAccount = true;
            // this.loading = false
        }
        // this.request()
        // events.subscribe("account:changed", account => {
        //   this.changeAccount()
        // })
    }
    // request() {
    //   if (this.appState.account && this.appState.account.length > 8) {
    //     let url =
    //       "https://api.eth.bid/api/v1/ships?address=" +
    //       // "http://localhost:8080/api/v1/ships?address=" +
    //       encodeURI(this.appState.account)
    //     console.log(url)
    //     this.http
    //       .get(url)
    //       .map(res => res.json())
    //       .subscribe(
    //         data => this.parseResult(data),
    //         err => console.log(err),
    //         () => console.log("Complete")
    //       )
    //   } else {
    //     this.noAccount = true
    //     this.loading = false
    //   }
    // }
    // parseResult(data) {
    //   console.log("got result", data)
    //   this.loading = false
    //   console.log(data)
    //   if (data.length > 0) {
    //     // data.forEach(ship => {
    //     //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
    //     // })
    //     this.ships = data
    //   }
    //   console.log("done")
    // }
    // changeAccount() {
    //   this.loading = true
    //   this.ships = []
    //   this.request()
    // }
    MyShipsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MyShipsPage");
    };
    MyShipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-my-ships",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\my-ships\my-ships.html"*/'<ion-header #head> <ion-navbar> </ion-navbar> </ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid class="contentRoom">\n    <ion-spinner *ngIf="!appState.ships && appState.account" class="abs-center">\n    </ion-spinner>\n    <div *ngIf="!appState.account">\n      Ethereum account required to play. {{ appState.accountStatus }}\n    </div>\n    <ion-row *ngIf="appState.ships" myMatchHeight="shipWrap">\n      <ship-card\n        *ngFor="let ship of appState.ships"\n        ion-col\n        col-12\n        col-xl-3\n        col-lg-4\n        col-md-6\n        [ship]="ship"\n      ></ship-card>\n    </ion-row>\n  </ion-grid>\n\n  <footer-component></footer-component>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\my-ships\my-ships.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object])
    ], MyShipsPage);
    return MyShipsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=my-ships.js.map

/***/ })

});
//# sourceMappingURL=2.js.map