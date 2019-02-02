webpackJsonp([3],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipPageModule", function() { return ShipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ship__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ship_card_ship_card_module__ = __webpack_require__(193);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ship__["a" /* ShipPage */])
            ]
        })
    ], ShipPageModule);
    return ShipPageModule;
}());

//# sourceMappingURL=ship.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_web3_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(194);
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
    function ShipPage(navCtrl, navParams, http, appState, web3Service, alert) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appState = appState;
        this.web3Service = web3Service;
        this.alert = alert;
        // loading = true
        this.id = this.navParams.data.id;
        this.sell = { open: false, priceStart: null, priceEnd: null, duration: null };
        var address = "/api/v1/ship?id=" + encodeURI(this.id);
        io.socket.get(address, function (data) {
            console.log(data);
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
        console.log(this.appState);
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
        var msg;
        if (!this.appState.account) {
            msg = 'No Ethereum account found. ' + this.appState.accountStatus;
        }
        if (!msg) {
            try {
                this.web3Service.purchase(this.id);
            }
            catch (e) {
                msg = e;
            }
        }
        if (msg) {
            var alerting = this.alert.create({
                title: 'Error',
                message: msg,
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }
                ]
            });
            alerting.present();
        }
    };
    ShipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-ship",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\ship\ship.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid class="contentRoom">\n    <ion-row>\n      <ion-spinner *ngIf="!ship" class="abs-center">\n      </ion-spinner>\n      <ng-container *ngIf="ship">\n        <ship-card ion-col col-12 [ship]="ship"></ship-card>\n        <div class="actions">\n          <div *ngIf="amOwner">\n            <button ion-button round (click)="sell.open = true">Sell</button>\n            <button ion-button round>Combine Blueprints</button>\n          </div>\n          <div *ngIf="!amOwner">\n            <button ion-button round (click)="purchase()">Buy Now</button>\n          </div>\n        </div>\n      </ng-container>\n    </ion-row>\n    <div *ngIf="sell.open">\n      <form *ngIf="appState.account" (ngSubmit)="createSale()">\n        <ion-list>\n          <ion-item>\n            <ion-label fixed>Start Price</ion-label>\n            <ion-input type="number" [(ngModel)]="sell.priceStart" name="priceStart"></ion-input> Eth\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>End Price</ion-label>\n            <ion-input type="number" [(ngModel)]="sell.priceEnd" name="priceEnd"></ion-input> Eth\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>Duration</ion-label>\n            <ion-input type="number" [(ngModel)]="sell.duration" name="duration"></ion-input> Days\n          </ion-item>\n        </ion-list>\n\n        <div padding>\n          <button ion-button color="primary" block type="submit">Submit</button>\n        </div>\n      </form>\n    </div>\n  </ion-grid>\n  <footer-component>\n  </footer-component>\n\n</ion-content>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\ship\ship.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_3__app_web3_service__["a" /* Web3Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ShipPage);
    return ShipPage;
}());

//# sourceMappingURL=ship.js.map

/***/ })

});
//# sourceMappingURL=3.js.map