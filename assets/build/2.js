webpackJsonp([2],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShipsPageModule", function() { return MyShipsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_ships__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__(195);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_ships__["a" /* MyShipsPage */])
            ]
        })
    ], MyShipsPageModule);
    return MyShipsPageModule;
}());

//# sourceMappingURL=my-ships.module.js.map

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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(194);
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
            selector: "page-my-ships",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\my-ships\my-ships.html"*/'<ion-header #head>\n  <ion-navbar> </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid class="contentRoom">\n    <ion-spinner *ngIf="!appState.ships && appState.account" class="abs-center">\n    </ion-spinner>\n    <div *ngIf="!appState.account" class="column-center">\n      <h1>No Ethereum account found. {{ appState.accountStatus }}</h1>\n      <a href="https://metamask.io">\n        <img src="https://github.com/MetaMask/faq/raw/master/images/download-metamask-dark.png" />\n      </a>\n    </div>\n    <ion-row *ngIf="appState.ships" myMatchHeight="shipWrap">\n      <ship-card *ngFor="let ship of appState.ships" ion-col col-12 col-xl-3 col-lg-4 col-md-6 [ship]="ship"></ship-card>\n    </ion-row>\n  </ion-grid>\n\n  <footer-component></footer-component>\n</ion-content>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\my-ships\my-ships.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyShipsPage);
    return MyShipsPage;
}());

//# sourceMappingURL=my-ships.js.map

/***/ })

});
//# sourceMappingURL=2.js.map