webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */])]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, appState) {
        this.navCtrl = navCtrl;
        this.appState = appState;
        // if (this.appState.account) {
        //   io.socket.get("/api/user/" + this.appState.account, res => {
        //     if (typeof res == "string") {
        //       console.log(res)
        //       this.isRegistered = false
        //     } else {
        //     }
        //   })
        // }
        console.log("home loaded");
    }
    SettingsPage.prototype.ionViewDidLoad = function () { };
    SettingsPage.prototype.register = function () {
        var _this = this;
        console.log("clicked register", this.appState.account);
        if (this.appState.account) {
            console.log("posting");
            io.socket.post("/api/user", {
                username: this.requestedName,
                email: this.requestedEmail,
                address: this.appState.account
            }, function (res) {
                console.log(res);
                if (!res.status) {
                    _this.appState.username = res.username;
                    _this.success = true;
                }
                else if (res.status == 400) {
                    _this.status = res.details;
                }
                else {
                    _this.status = res.details;
                }
            });
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-settings",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\settings\settings.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content>\n  <div class="contentRoom">\n    <p *ngIf="appState.username && !success">Username is: {{appState.username}}</p>\n    <p *ngIf="appState.username && success">\n      Registration success for: {{appState.username}}</p>\n    <div *ngIf="!appState.username">\n      <div *ngIf="!appState.account">{{appState.accountStatus}}</div>\n      <form *ngIf="appState.account" (ngSubmit)="register()">\n        <p>Register your ethereum address</p>\n\n        <ion-list>\n\n          <ion-item>\n            <ion-label fixed>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="requestedName" name="requestedName"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="requestedEmail" name="requestedEmail"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <div padding>\n          <button ion-button color="primary" block type="submit">Register</button>\n          <p block text-center>{{status}}</p>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <footer-component></footer-component>\n</ion-content>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=3.js.map