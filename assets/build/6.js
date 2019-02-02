webpackJsonp([6],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionsPageModule", function() { return AuctionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auctions__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ship_card_ship_card_module__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuctionsPageModule = (function () {
    function AuctionsPageModule() {
    }
    AuctionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__auctions__["a" /* AuctionsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_ship_card_ship_card_module__["a" /* ShipCardComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auctions__["a" /* AuctionsPage */])
            ]
        })
    ], AuctionsPageModule);
    return AuctionsPageModule;
}());

//# sourceMappingURL=auctions.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuctionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuctionsPage = (function () {
    function AuctionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = true;
        this.offset = 0;
        this.show = false;
        console.log("auction con");
        this.request(true);
    }
    AuctionsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AuctionsPage");
    };
    AuctionsPage.prototype.request = function (initial) {
        var _this = this;
        console.log("io auctions//");
        // io.socket.get("/api/auction", event => {
        //   console.log(event)
        //   let result = []
        //   event.auctions.forEach(record => {
        //     record.stats["price"] = record.currentPrice
        //     result.push(record.stats)
        //   })
        //   this.ships = result
        //   this.loading = false
        // })
        io.socket.get("/api/v1/shipsRandom?offset=" + (7759 + this.offset * 12), function (data) {
            _this.loading = false;
            if (data) {
                console.log(data);
                if (data.length > 0) {
                    // data.forEach(ship => {
                    //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
                    // })
                    data.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    _this.ships = data;
                    if (initial) {
                        setTimeout(function () {
                            _this.show = true;
                        }, 150);
                    }
                    _this.loading = false;
                }
            }
            else {
                console.log("unable to load ships");
            }
        });
    };
    AuctionsPage.prototype.changeTab = function (ment) {
        this.offset += ment;
        this.loading = true;
        // this.ships = null;
        this.request();
    };
    AuctionsPage.prototype.parseResult = function (data) {
        console.log("got result", data);
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
    AuctionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-auctions",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\auctions\auctions.html"*/'<ion-header #head>\n  <ion-navbar> </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid class="contentRoom">\n    <ion-row class="pagination">\n      <ion-icon name="ios-arrow-back" [style.opacity]="offset == 0 ? 0 : 1" (tap)="changeTab(-1)" tappable></ion-icon>\n      <span *ngIf="!loading">{{ offset + 1 }}</span>\n      <ion-spinner *ngIf="loading"> </ion-spinner>\n      <ion-icon name="ios-arrow-forward" (tap)="changeTab(1)" tappable></ion-icon>\n    </ion-row>\n\n    <ion-row class="ships-row">\n      <ship-card *ngFor="let ship of ships" ion-col col-12 col-xxl-3 col-xl-4 col-lg-6 col-md-6 [hidden]="!show" [ship]="ship"></ship-card>\n    </ion-row>\n  </ion-grid>\n\n  <footer-component></footer-component>\n</ion-content>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\auctions\auctions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AuctionsPage);
    return AuctionsPage;
}());

//# sourceMappingURL=auctions.js.map

/***/ })

});
//# sourceMappingURL=6.js.map