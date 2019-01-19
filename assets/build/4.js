webpackJsonp([4],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipPageModule", function() { return ShipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ship__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ship_card_ship_card_module__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShipPageModule = (function () {
    function ShipPageModule() {
    }
    ShipPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ship__["a" /* ShipPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_ship_card_ship_card_module__["a" /* ShipCardComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ship__["a" /* ShipPage */])
            ]
        })
    ], ShipPageModule);
    return ShipPageModule;
}());

//# sourceMappingURL=ship.module.js.map

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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_web3_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShipPage = (function () {
    function ShipPage(navCtrl, navParams, http, appState, web3Service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appState = appState;
        this.web3Service = web3Service;
        // loading = true
        this.id = this.navParams.data.id;
        this.sell = { open: false, priceStart: null, priceEnd: null, duration: null };
        var address = "/api/v1/ship?id=" + encodeURI(this.id);
        io.socket.get(address, function (data) {
            if (typeof data == "string") {
            }
            else {
                _this.ship = data;
                if (_this.appState.ships) {
                    _this.amOwner = _this.appState.ships.some(function (item) {
                        return item.id === _this.id;
                    });
                }
            }
        });
    }
    ShipPage.prototype.ngOnInit = function () { };
    ShipPage.prototype.ionViewDidLoad = function () { };
    ShipPage.prototype.createSale = function () {
        if (this.id &&
            this.sell.priceStart &&
            this.sell.priceEnd &&
            this.sell.duration) {
            this.web3Service.sell(this.id, this.sell.priceStart, this.sell.priceEnd, this.sell.duration);
        }
        else {
            console.log("createSale failed, missing data");
        }
    };
    ShipPage.prototype.purchase = function () {
        this.web3Service.purchase(this.id);
        console.log(this.sell);
    };
    ShipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-ship",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\ship\ship.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid class="contentRoom">\n    <ion-row>\n      <ion-spinner *ngIf="!ship" class="abs-center">\n      </ion-spinner>\n      <div *ngIf="ship">\n        <ship-card ion-col col-12 col-xl-3 col-lg-4 col-md-6 [ship]="ship"></ship-card>\n        <div class="actions">\n          <div *ngIf="amOwner">\n            <button ion-button round (click)="sell.open = true">Sell</button>\n            <button ion-button round>Combine Blueprints</button>\n          </div>\n          <div *ngIf="!amOwner">\n            <button ion-button round (click)="purchase()">Buy Now</button>\n          </div>\n        </div>\n      </div>\n    </ion-row>\n    <div *ngIf="sell.open">\n      <form *ngIf="appState.account" (ngSubmit)="createSale()">\n        <ion-list>\n          <ion-item>\n            <ion-label fixed>Start Price</ion-label>\n            <ion-input type="number" [(ngModel)]="sell.priceStart" name="priceStart"></ion-input> Eth\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>End Price</ion-label>\n            <ion-input type="number" [(ngModel)]="sell.priceEnd" name="priceEnd"></ion-input> Eth\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>Duration</ion-label>\n            <ion-input type="number" [(ngModel)]="sell.duration" name="duration"></ion-input> Days\n          </ion-item>\n        </ion-list>\n\n        <div padding>\n          <button ion-button color="primary" block type="submit">Submit</button>\n        </div>\n      </form>\n    </div>\n  </ion-grid>\n  <footer-component>\n  </footer-component>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\ship\ship.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_3__app_web3_service__["a" /* Web3Service */]])
    ], ShipPage);
    return ShipPage;
}());

//# sourceMappingURL=ship.js.map

/***/ })

});
//# sourceMappingURL=4.js.map