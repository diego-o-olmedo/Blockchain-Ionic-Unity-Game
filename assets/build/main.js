webpackJsonp([6],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auctions/auctions.module": [
		263,
		5
	],
	"../pages/game/game.module": [
		264,
		4
	],
	"../pages/my-ships/my-ships.module": [
		265,
		1
	],
	"../pages/profile/profile.module": [
		266,
		0
	],
	"../pages/settings/settings.module": [
		267,
		3
	],
	"../pages/ship/ship.module": [
		268,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = (function () {
    function HomePage(navCtrl, appState) {
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
    HomePage.prototype.ionViewDidLoad = function () { };
    HomePage.prototype.register = function () {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\home\home.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content>\n  <div class="contentRoom">\n    <p *ngIf="appState.username && !success">Username is: {{appState.username}}</p>\n    <p *ngIf="appState.username && success">\n      Registration success for: {{appState.username}}</p>\n    <div *ngIf="!appState.username">\n      <div *ngIf="!appState.account">{{appState.accountStatus}}</div>\n      <form *ngIf="appState.account" (ngSubmit)="register()">\n        <p>Register your ethereum address</p>\n\n        <ion-list>\n\n          <ion-item>\n            <ion-label fixed>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="requestedName" name="requestedName"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="requestedEmail" name="requestedEmail"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <div padding>\n          <button ion-button color="primary" block type="submit">Register</button>\n          <p block text-center>{{status}}</p>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <footer-component></footer-component>\n</ion-content>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer__ = __webpack_require__(244);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_2__header_header__["a" /* HeaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_2__header_header__["a" /* HeaderComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    locationStrategy: "path"
                }, {
                    links: [
                        { loadChildren: '../pages/auctions/auctions.module#AuctionsPageModule', name: 'AuctionsPage', segment: 'auctions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-ships/my-ships.module#MyShipsPageModule', name: 'MyShipsPage', segment: 'my-ships', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile/:address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ship/ship.module#ShipPageModule', name: 'ShipPage', segment: 'ship/:id', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppState */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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



var HeaderComponent = (function () {
    function HeaderComponent(navCtrl, appState, zone) {
        this.navCtrl = navCtrl;
        this.appState = appState;
        this.zone = zone;
        this.pages = [
            { title: "Auctions", component: "AuctionsPage", href: "auctions" },
            { title: "Battle", component: "GamePage", href: "battle" },
            { title: "MyShips", component: "MyShipsPage", href: "my-ships" }
        ];
    }
    HeaderComponent.prototype.openPage = function (page) {
        var _this = this;
        // this.nav.setRoot(page.component)
        this.zone.run(function () {
            if (window.location.pathname.split("/")[1] != page.href) {
                if (window["gameInstance"]) {
                    // window["gameInstance"] = null
                    // let element = document.getElementById("canvaswindow")
                    window.location.href = page.href;
                    // element.outerHTML = ""
                    // window["gameInstance"].SendMessage("Web3", "Exit")
                }
                else {
                    _this.navCtrl.setRoot(page.component);
                }
            }
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "header-component",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n\n<ion-header #header>\n  <ion-navbar>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6 text-center>\n          <!-- <span (click)="page(\'AuctionsPage\')" tappable [ngClass]="{\'selected\': page == \'Auctions\'}">Auctions</span>\n          <span (click)="page(\'AuctionsPage\')" tappable [ngClass]="{\'selected\': page == \'My Ships\'}">My Ships</span>\n          <span (click)="page(\'AuctionsPage\')" tappable [ngClass]="{\'selected\': page == \'Battle\'}">Battle</span> -->\n          <span class="headerLinks" *ngFor="let p of pages" (click)="openPage(p)" tappable [ngClass]="{\'selected\': page == \'My Ships\'}">{{p.title}}</span>\n        </ion-col>\n\n        <ion-col col-3>{{appState.accountStatus}}</ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- <ion-tabs color="dark">\n      <ion-tab tabTitle="Auctions" [root]="rootPage"></ion-tab>\n      <ion-tab tabTitle="My Ships" [root]="rootPage"></ion-tab>\n      <ion-tab tabTitle="Nattle" [root]="rootPage"></ion-tab>\n    </ion-tabs> -->\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "footer-component",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\footer\footer.html"*/'<ion-toolbar no-padding>\n  <ion-title>Copyright Eth.bid - Domain name for sale. Contact hajaekyung@protonmail.com</ion-title>\n</ion-toolbar>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, appState) {
        this.platform = platform;
        this.appState = appState;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Auctions", component: "AuctionsPage" },
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */] },
            { title: "Battle", component: "GamePage" },
            { title: "MyShips", component: "MyShipsPage" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () { });
    };
    MyApp.prototype.page = function (selected) {
        console.log("select", selected);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n</ion-nav>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppState = (function () {
    function AppState(events, toastCtrl) {
        this.events = events;
        this.toastCtrl = toastCtrl;
        this._state = {};
        this.web3 = window["web3"];
        this.accountStatus = "Loading...";
        this.username = false;
        if (!this.web3) {
            this.accountStatus = "No MetaMask extension installed";
        }
        else if (this.web3.eth.accounts.length == 0) {
            this.accountStatus = "MetaMask account is locked!";
            this.startCheck();
        }
        else {
            this.account = this.web3.eth.accounts[0];
            this.accountStatus = this.account;
            this.getUser();
            this.startCheck();
        }
        // this.web3.eth.getAccounts(console.log)
    }
    AppState.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "bottom",
            cssClass: "customToast"
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    AppState.prototype.getUser = function () {
        var _this = this;
        if (io) {
            io.socket.get("/api/user/" + this.account, function (res) {
                if (typeof res == "string") {
                }
                else {
                    _this.username = res.username;
                }
            });
        }
    };
    AppState.prototype.startCheck = function () {
        var _this = this;
        if (!this.checkAccount) {
            this.checkAccount = setInterval(function () {
                if (_this.account != _this.web3.eth.accounts[0]) {
                    _this.account = _this.web3.eth.accounts[0];
                    _this.username = false;
                    if (typeof _this.account == "string") {
                        _this.accountStatus = _this.account;
                        _this.showToast("Logged into " + _this.account); // .substring(0, 4))
                        _this.getUser();
                    }
                    else {
                        _this.accountStatus = "MetaMask account is locked!";
                    }
                    _this.events.publish("account:changed", _this.account);
                }
            }, 100);
        }
    };
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return (this._state = this._clone(this._state));
        },
        // never allow mutation
        set: function (value) {
            throw new Error("do not mutate the `.state` directly");
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return (this._state[prop] = value);
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.service.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map