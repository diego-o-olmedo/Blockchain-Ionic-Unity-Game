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
		267,
		3
	],
	"../pages/game/game.module": [
		266,
		5
	],
	"../pages/my-ships/my-ships.module": [
		268,
		1
	],
	"../pages/profile/profile.module": [
		269,
		0
	],
	"../pages/settings/settings.module": [
		270,
		4
	],
	"../pages/ship/ship.module": [
		271,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(32);
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
            selector: "page-home",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\home\home.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content>\n  <div class="contentRoom">\n    <p *ngIf="appState.username && !success" class="abs-center">Username is: {{appState.username}}</p>\n    <p *ngIf="appState.username && success" class="abs-center">\n      Registration success for: {{appState.username}}</p>\n    <div *ngIf="!appState.username" class="metamask">\n      <div *ngIf="!appState.account">\n        <div *ngIf="appState.accountStatus == \'No MetaMask extension installed\'">\n          <a href="https://metamask.io">\n            <img src="https://github.com/MetaMask/faq/raw/master/images/download-metamask-dark.png">\n          </a>\n        </div>\n\n        <div *ngIf="appState.accountStatus != \'No MetaMask extension installed\'">\n          {{appState.accountStatus}}\n        </div>\n\n      </div>\n      <form *ngIf="appState.account" (ngSubmit)="register()" class="registration">\n        <p>Register your ethereum address</p>\n\n        <ion-list>\n\n          <ion-item>\n            <ion-label fixed>Username</ion-label>\n            <ion-input type="text" [(ngModel)]="requestedName" name="requestedName"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label fixed>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="requestedEmail" name="requestedEmail"></ion-input>\n          </ion-item>\n        </ion-list>\n\n        <div padding>\n          <button ion-button color="primary" block type="submit">Register</button>\n          <p block text-center>{{status}}</p>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <footer-component></footer-component>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\home\home.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ship_select_ship_select__ = __webpack_require__(247);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_2__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ship_select_ship_select__["a" /* ShipSelectComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_footer__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_2__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ship_select_ship_select__["a" /* ShipSelectComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Web3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuctionAbi = [
    {
        constant: false,
        inputs: [
            { name: "_tokenId", type: "uint256" },
            { name: "_startingPrice", type: "uint256" },
            { name: "_endingPrice", type: "uint256" },
            { name: "_duration", type: "uint256" },
            { name: "_seller", type: "address" }
        ],
        name: "createAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "_tokenId", type: "uint256" }],
        name: "bid",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "", type: "uint256" }],
        name: "lastGen0SalePrices",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "withdrawBalance",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "_tokenId", type: "uint256" }],
        name: "getAuction",
        outputs: [
            { name: "seller", type: "address" },
            { name: "startingPrice", type: "uint256" },
            { name: "endingPrice", type: "uint256" },
            { name: "duration", type: "uint256" },
            { name: "startedAt", type: "uint256" }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "ownerCut",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "isSaleClockAuction",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "_tokenId", type: "uint256" }],
        name: "cancelAuctionWhenPaused",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "gen0SaleCount",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "_tokenId", type: "uint256" }],
        name: "cancelAuction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{ name: "_tokenId", type: "uint256" }],
        name: "getCurrentPrice",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "nonFungibleContract",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "averageGen0SalePrice",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{ name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            { name: "_nftAddr", type: "address" },
            { name: "_cut", type: "uint256" }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: "tokenId", type: "uint256" },
            { indexed: false, name: "startingPrice", type: "uint256" },
            { indexed: false, name: "endingPrice", type: "uint256" },
            { indexed: false, name: "duration", type: "uint256" }
        ],
        name: "AuctionCreated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: "tokenId", type: "uint256" },
            { indexed: false, name: "totalPrice", type: "uint256" },
            { indexed: false, name: "winner", type: "address" }
        ],
        name: "AuctionSuccessful",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: "tokenId", type: "uint256" }],
        name: "AuctionCancelled",
        type: "event"
    },
    { anonymous: false, inputs: [], name: "Pause", type: "event" },
    { anonymous: false, inputs: [], name: "Unpause", type: "event" }
];
var AuctionAddress = "0xb1690C08E213a35Ed9bAb7B318DE14420FB57d8C";
var Web3Service = (function () {
    function Web3Service(events, toastCtrl) {
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.web3 = window["web3"];
        this._state = {};
        var KittContract = this.web3.eth.contract(AuctionAbi);
        this.AuctionContract = KittContract.at(AuctionAddress);
    }
    Web3Service.prototype.purchase = function (id) {
        this.AuctionContract.bid(id, {
            value: this.web3.toWei(0.05, "ether"),
            gasPrice: this.web3.toWei("5", "gwei")
        }, function (err, res) {
            console.log("called back", err, res);
        });
    };
    Web3Service.prototype.sell = function (id, start, end, duration) {
        start = this.web3.toWei(start, "ether");
        end = this.web3.toWei(end, "ether");
        duration *= 86400;
        console.log(this.web3.eth.accounts[0]);
        console.log(start, end, duration);
        this.AuctionContract.createAuction(id, start, end, duration, null, {
            gasPrice: this.web3.toWei("5", "gwei")
        }, function (err, res) {
            console.log("called back", err, res);
        });
    };
    Object.defineProperty(Web3Service.prototype, "state", {
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
    Web3Service.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    Web3Service.prototype.set = function (prop, value) {
        // internally mutate our state
        return (this._state[prop] = value);
    };
    Web3Service.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    Web3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], Web3Service);
    return Web3Service;
}());

//# sourceMappingURL=web3.service.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web3_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









 // <-- import the module
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    locationStrategy: "path"
                }, {
                    links: [
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auctions/auctions.module#AuctionsPageModule', name: 'AuctionsPage', segment: 'auctions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-ships/my-ships.module#MyShipsPageModule', name: 'MyShipsPage', segment: 'my-ships', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile/:address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ship/ship.module#ShipPageModule', name: 'ShipPage', segment: 'ship/:id', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppState */],
                __WEBPACK_IMPORTED_MODULE_5__web3_service__["a" /* Web3Service */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(32);
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
            { title: "Game", component: "GamePage", href: "game" },
            { title: "My Ships", component: "MyShipsPage", href: "my-ships" }
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.openPage = function (e, page) {
        var _this = this;
        e.preventDefault();
        // this.nav.setRoot(page.component)
        this.zone.run(function () {
            console.log(_this.appState.activePage);
            _this.appState.activePage = page.href;
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
            selector: "header-component",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\header\header.html"*/'<!-- Generated template for the HeaderComponent component -->\n\n<ion-header #header>\n  <ion-navbar>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3></ion-col>\n        <ion-col col-6 text-center>\n          <!-- <span (click)="page(\'AuctionsPage\')" tappable [ngClass]="{\'selected\': page == \'Auctions\'}">Auctions</span>\n          <span (click)="page(\'AuctionsPage\')" tappable [ngClass]="{\'selected\': page == \'My Ships\'}">My Ships</span>\n          <span (click)="page(\'AuctionsPage\')" tappable [ngClass]="{\'selected\': page == \'Battle\'}">Battle</span> -->\n          <a [href]="\'/\'+p.href" class="headerLinks" *ngFor="let p of pages" (click)="openPage($event, p)" tappable [ngClass]="{\'activePage\': p.href == appState.activePage}">{{p.title}}</a>\n        </ion-col>\n\n        <ion-col col-3>\n          <span>{{appState.accountStatus}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- <ion-tabs color="dark">\n      <ion-tab tabTitle="Auctions" [root]="rootPage"></ion-tab>\n      <ion-tab tabTitle="My Ships" [root]="rootPage"></ion-tab>\n      <ion-tab tabTitle="Nattle" [root]="rootPage"></ion-tab>\n    </ion-tabs> -->\n  </ion-navbar>\n</ion-header>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 246:
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

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipSelectComponent; });
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




var ShipSelectComponent = (function () {
    function ShipSelectComponent(sanitizer, appState, navCtrl) {
        this.sanitizer = sanitizer;
        this.appState = appState;
        this.navCtrl = navCtrl;
    }
    ShipSelectComponent.prototype.ngOnInit = function () {
        var shipModel = this.ship.model <= 2 ? 1 : 2;
        this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl("/assets/imgs/ships/ship" + shipModel + ".svg");
        // console.log(this.ship)
        // let shipModel = this.ship.model == 1 ? 1 : 2
        // this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        //   "/assets/imgs/ships/ship" + shipModel + ".svg"
        // )
        // console.log(this.wrapper)
        var shipLoad = this.ship.model == 1 ? this.appState.ship2 : this.appState.ship1;
        var data = shipLoad.replace(/ChangeName/g, "id" + this.ship.id);
        data = data.replace(/cls-/g, "id" + this.ship.id + "-");
        this.appState.changedOne = true;
        data = this.getColors(data);
        this.wrapper.nativeElement.innerHTML = data;
        var svgNative = this.wrapper.nativeElement.children[0];
        if (this.ship.weapon1[0] == "B") {
            svgNative.children["CENTER_CANNON"].innerHTML = "";
            if (this.ship.weapon1[5] != "F") {
                var cannon2 = svgNative.children["WING_CANNON_2"];
                if (cannon2) {
                    cannon2.innerHTML = "";
                }
            }
        }
        else {
            svgNative.children["WING_CANNON_1"].innerHTML = "";
            var cannon2 = svgNative.children["WING_CANNON_2"];
            if (cannon2) {
                cannon2.innerHTML = "";
            }
        }
        // this.doneLoading()
    };
    ShipSelectComponent.prototype.selectShip = function () {
        // this.navCtrl.setRoot("ShipPage", { id: id })
        console.log("clickd", this.ship.model);
        // window["ShowSelect"] = false
        window.dispatchEvent(new CustomEvent("show-select", { detail: false }));
        window["gameInstance"].SendMessage("GameManager", "Spawn", this.ship.model);
        var canvas = document.getElementById("#canvas");
        canvas.focus();
        canvas.requestPointerLock();
    };
    ShipSelectComponent.prototype.ionViewDidLoad = function () { };
    ShipSelectComponent.prototype.getColors = function (data) {
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
    ShipSelectComponent.prototype.doneLoading = function () {
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
    ], ShipSelectComponent.prototype, "ship", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("svg"),
        __metadata("design:type", Object)
    ], ShipSelectComponent.prototype, "svg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("wrapper"),
        __metadata("design:type", Object)
    ], ShipSelectComponent.prototype, "wrapper", void 0);
    ShipSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ship-select",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-select\ship-select.html"*/'<ion-card (click)="selectShip()" tappable>\n  <div class="shipWrap" #wrapper></div>\n\n  <ion-card-content>\n    <ion-card-title style="text-overflow: ellipsis">\n      {{ship.name ? ship.name : \'Ship \'+ship.id}}\n    </ion-card-title>\n    <ion-row no-padding>\n      <ion-col col-12>\n        <span>Primary Weapon: {{ship.weapon1}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row no-padding>\n      <ion-col col-12>\n        <span>Secondary Weapon: {{ship.weapon2}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-select\ship-select.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]) === "function" && _c || Object])
    ], ShipSelectComponent);
    return ShipSelectComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=ship-select.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(32);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n</ion-nav>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        this.activePage = location.pathname.split("/")[1];
        this._state = {};
        this.changedOne = false;
        this.web3 = window["web3"];
        this.accountStatus = "Loading...";
        this.username = false;
        this.ship1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" class=\"shipSVG\" data-name=\"Layer 1\" viewBox=\"0 0 634.85 301.27\"><defs><style>.cls-0{fill:#9fa8da}.cls-1{fill:#000001}.cls-1,.cls-13,.cls-15,.cls-17,.cls-2,.cls-8{fill-rule:evenodd}.cls-2{fill:#e4e5e5}.cls-8{fill:url(#ChangeName-3)}.cls-13,.cls-14{fill:#424242}.cls-15{fill:#1a1a1b}.cls-17{fill:#e41e29}</style><linearGradient id=\"ChangeName\" x1=\"427.19\" x2=\"423.39\" y1=\"237.52\" y2=\"283.47\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"PrimaryColor\"/><stop offset=\"1\" stop-color=\"SecondaryColor\"/></linearGradient><linearGradient id=\"ChangeName-2\" x1=\"502.73\" x2=\"500.21\" y1=\"239.93\" y2=\"260.05\" xlink:href=\"#ChangeName\"/><linearGradient id=\"ChangeName-3\" x1=\"622.14\" x2=\"608.36\" y1=\"244.11\" y2=\"301.83\" xlink:href=\"#ChangeName\"/><linearGradient id=\"ChangeName-4\" x1=\"315.6\" x2=\"317.51\" y1=\"204.53\" y2=\"229.27\" xlink:href=\"#ChangeName\"/><linearGradient id=\"ChangeName-5\" x1=\"156.3\" x2=\"127.47\" y1=\"332.35\" y2=\"328.67\" xlink:href=\"#ChangeName\"/><linearGradient id=\"ChangeName-6\" x1=\"170.03\" x2=\"140.04\" y1=\"293.22\" y2=\"324.41\" xlink:href=\"#ChangeName\"/><linearGradient id=\"ChangeName-7\" x1=\"232.71\" x2=\"101.67\" y1=\"311.03\" y2=\"469.43\" xlink:href=\"#ChangeName\"/><linearGradient id=\"GradientFill_2\" x1=\"617.08\" x2=\"594.08\" y1=\"265.21\" y2=\"321.64\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#803d96\"/><stop offset=\".15\" stop-color=\"#8b478b\"/><stop offset=\".42\" stop-color=\"#a8626c\"/><stop offset=\".76\" stop-color=\"#d78d3c\"/><stop offset=\"1\" stop-color=\"#fbae17\"/></linearGradient><linearGradient id=\"ChangeName-8\" x1=\"426.03\" x2=\"433.08\" y1=\"272.98\" y2=\"291.51\" xlink:href=\"#ChangeName\"/><linearGradient id=\"ChangeName-9\" x1=\"397.87\" x2=\"391.41\" y1=\"272.17\" y2=\"288.63\" xlink:href=\"#ChangeName\"/><linearGradient id=\"ChangeName-10\" x1=\"406.44\" x2=\"395.16\" y1=\"271.65\" y2=\"290.34\" xlink:href=\"#ChangeName\"/></defs><path id=\"BLACK_GROUND\" d=\"M374.23 253.19c12.66 11.61 33 16.44 53.65 17.59 19.24 1.08 39.63-3.75 44.68-5.26a1.38 1.38 0 0 1 1.31.26c5.31 3.64 12.59 10.17 18.05 14.55 2.75 2.21 7.09 1.94 10.36 1.35a3.05 3.05 0 0 0 1.58-.67l3.55 4.25c2.27 2.72 5.59 2.88 8.73 1.72 44.4-15.34 78.2-7.61 118.84 11.34.11 3.6.44 8.83 3.75 10.59l8.91 4.75-1.64 3.28a6.67 6.67 0 0 0-.53 5.59c.82 1.88 2.93 2.54 4.63 3.36l18 8.74c2 .95 4 2.07 6.27 1.43s3.74-2.9 5.13-4.59c2.62-3.21 5.3-6.37 8-9.53 3.52-4.13 7.08-8.24 10.6-12.38 2.68-3.17 5.44-6.4 7.91-9.73 3.22-4.34 3.46-8.43.1-12.73l-10.63-15c-1-1.44.51-2.82.35-5.84a13.74 13.74 0 0 0-1.88-6c1.09-.67.53-3.24.85-4.75.25-1.21.79-1.94.48-3.28a11 11 0 0 0-.55-1.55c-.29-.76-.6-1.5-.91-2.25-.44-1-.89-2.11-1.34-3.16a1.4 1.4 0 0 0 .2-1.37l-1.89-4.9a3.28 3.28 0 0 0-.72-1.37L643 199.29a1.32 1.32 0 0 0-1-.32c-3.92.22-7.46 1.92-11.26 0a1.37 1.37 0 0 0-1.2-.11l-6.11 2.24a1.71 1.71 0 0 0-.4.22l-1.7-1.43a1.41 1.41 0 0 0-1-.33 4.75 4.75 0 0 1-.75 0 2.59 2.59 0 0 1-.5-.54c-.44-.55-.79-1.19-1.46-1.45a3.88 3.88 0 0 0 .11-.49 10.83 10.83 0 0 0-1.11-5.64 20.11 20.11 0 0 0-6-7.89L600 175.36a12.48 12.48 0 0 0-1.91-1.28 1.55 1.55 0 0 0 .52-.44 1.36 1.36 0 0 0 .24-1.12c-1.62-7.85-3.08-16.15-4.95-23.89-.56-2.32-2.2-4.31-4.76-4.28l-11.66.11a4.3 4.3 0 0 0-.62 0 3.9 3.9 0 0 0-1.5.94 1.62 1.62 0 0 0-.18.2 6 6 0 0 0-2.7-1.27 40.22 40.22 0 0 0-5.27-.71c-4.41-.39-6.46.41-10.66 1.51-5.93 1.55-11.85 3.2-17.71 5-3.71 1.14-7.42 2.34-11.06 3.7a143.25 143.25 0 0 0-13.43 5.92l-1.3.64-3.42-18.94a4.87 4.87 0 0 0-2-3.18 8.59 8.59 0 0 0-5.78-1.2c-1.12.11-11.11 1.24-11.46 1.49a5.29 5.29 0 0 0-2.06-1 22.21 22.21 0 0 0-5.83-.85c-2.41.06-4.67.91-7 1.45a220.1 220.1 0 0 0-40.52 14c-10.67 4.83-19.09 9.23-29.29 15-5.58 3.13-4.18 1.87-9.6 2.19-14.1.85-29.24 3.33-43.31 5.15q-14.5 1.89-29 3.81c-5.29.7-10.62 1.37-15.89 2.2a33.53 33.53 0 0 0-5.61 1.19 19.26 19.26 0 0 0-6.57 4.07c-2.5 2.16-4.85 4.51-7.38 6.64a12.64 12.64 0 0 1-4.46 2.74 19.29 19.29 0 0 1-4.72.75c-3.29.16-4.79 1.05-7.23 3.2a75.45 75.45 0 0 0-5.75 5.84c-1.84 2-3.64 4.1-5.44 6.18-.9 1.05-1.84 2.11-2.71 3.2a6.17 6.17 0 0 0-1 1.53 27.75 27.75 0 0 0-.78 4.9 3.39 3.39 0 0 0 1.61 2.76 12.91 12.91 0 0 0 4.28 1.31 80.78 80.78 0 0 0 9 1.36 11.91 11.91 0 0 0 5.4-.55c1.07-.44 2.24-1.2 2.38-2.41a36.42 36.42 0 0 0 4.21 1.76 5.62 5.62 0 0 0 3.66.25 18.57 18.57 0 0 1 1.85-.66c2.31-.37 4.87.44 7.12 1.13l.62.19c-7.15 2.37-14.68 4.19-21.75 6.77-10.94 4-22.13 8.2-32.71 13.08-21.59 9.94-39.79 24.39-58 39.19a1.53 1.53 0 0 0-.28-.59 1.43 1.43 0 0 0-2-.24l-23.9 18.06c-2.57 1.94-5.15 3.88-7.67 5.86a51.3 51.3 0 0 0-4.49 3.81 8.88 8.88 0 0 0-2.52 3.92c-.07.21-.14.43-.22.64a26 26 0 0 1-2 3.91 1.41 1.41 0 0 0 .32 1.79c-29 28.29-51.79 60.45-66.81 99.43a6.79 6.79 0 0 0 0 5.67c1.62 3.41 8 7.09 10.55 8.64.28.17 1.79 1.22 1.87 1.26 2.16 1.05 4 1 6.36.9l11.4-.54a8.41 8.41 0 0 0 6.14-3.53c16.19-22.17 35.61-47.21 61.13-59 2.82-1.3 5.73-2.45 8.66-3.49a74.22 74.22 0 0 1 15.18-4c1.47-.17 3-.31 4.44-.52a11.6 11.6 0 0 0 2.54-.6 12.9 12.9 0 0 0 2-1.05c3.43-2.05 5.57-5.74 7.88-8.9 21.51-29.48 48.1-47.65 81.51-61.29 2.33-1 4.67-1.82 6.1-4a13.89 13.89 0 0 0 1.74-3.94 16.12 16.12 0 0 1 .66-2.31c.86-1.81 65.69-29.32 71.53-31.89a1.42 1.42 0 0 0 .25.3zm-19.49-59a.17.17 0 0 1 0-.07h.14z\" class=\"cls-1\" data-name=\"BLACK GROUND\" transform=\"translate(-73.67 -136.7)\"/><g id=\"SILVER_BODY\" data-name=\"SILVER BODY\"><path d=\"M435.27 264.19a125.66 125.66 0 0 0 30.19-4.19c.6-.15 1.46.46 1.89 1.18l2.35 4a116.5 116.5 0 0 1-21.46 3.77c-4.44.38-9.19.6-14.11.6l-.06-3.1c-.07-1.74-.45-2.24 1.2-2.26z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M93 436.5l11.4-.54a7 7 0 0 0 5.1-3c17.93-24.54 36.88-48 61.69-59.42 7.6-3.51 18.27-6.94 24.26-7.64s6.09-.57 8.44-2c3.1-1.86 5-5.17 7.46-8.53C233.67 324.9 261 307 293.41 293.75c2.23-.91 4.27-1.66 5.44-3.49 3.15-4.89.37-6.66 6.53-8.95l3.14-1.16 73.39-32.29c1.41-.69 4.37-1.79 5-3.36.83-2.11.86-8.83 1.06-11.35.61-7.68.67-8.46 6.95-11 6.89-2.75 21.15-8.09 21.19-8.11a.43.43 0 1 1 .3.8s-14.41 5.41-21.2 8.16c-5.79 2.31-5.85 3.05-6.42 10.25-.19 2.42-.16 6.6-.56 8.51s-.14 2.17.27 2.4c.63.34 1.54-.24 4.3-1.56 2-1 1.41-.66 3.4-1.69a5.1 5.1 0 0 1 2.66-.72 5.94 5.94 0 0 1 2.82 1l2.57 1.13v-1.72c3.79-3.84 7.14-7.19 10.94-11 1.64-1.64 1.94-2.21 3.58-.67a39.76 39.76 0 0 0 6.32 5l4.31 2.24c.45.2.91.38 1.37.56a32.51 32.51 0 0 0 12.23 2.36c1.54 0 2.24 0 2.3 1.73l.23 7.09a114.63 114.63 0 0 0 17-4.31l1 1.18c1.23-.67 2.91-1.33 3.71-.53.56.56 1.67 2 2.79 3.46.63.82 1.27 1.64 1.81 2.32l.27.33c.85 1.08.89 1.13 2.61.61 1.07-.33 2.44-.86 3.83-1.45s2.81-1.21 4-1.75c3.66-1.68 4.12-1.25 7 1.54l.73.69 3.45 3.27c2.09 2 5.08 2.72 8.33 2.63a27.92 27.92 0 0 0 11.65-3.29l2.5-1.65a3.86 3.86 0 0 1 3-.85 4 4 0 0 1 2.17 1.37l3.9 4.49q1.63-1.36 3.3-2.8c17.86-15.41 41-37.74 44-40.66 3.35-3.18 5.69-4.2 10.35-2.27a86.17 86.17 0 0 1 8 3.78 2.71 2.71 0 0 0 .95-1.28 4.14 4.14 0 0 0 .34-1.34 1.57 1.57 0 0 0-.18-.94 4.12 4.12 0 0 1-1.21-.16 38.87 38.87 0 0 1-4.6-2.11c-3.15-1.6-6.94-3.51-9.62-3.78l-1.46-.17c-3.84-.46-8-1-15.46 2.43-8.28 3.76-31 12-32.79 12.62l.15.16c.94 1 1.88 2 2.78 3 .36.41.71.82 1 1.25a1.57 1.57 0 0 1 .19.33 1.5 1.5 0 0 1 .27.29 5.4 5.4 0 0 1 .74 1.43c.39 1.31-.39 2.12-1.45 2.75a1.37 1.37 0 0 1-.38.15 1.47 1.47 0 0 1-.31.23c-.49.25-1 .49-1.49.72l-.24.11a1.5 1.5 0 0 1-.34.11 1.65 1.65 0 0 1-.31.2q-3.62 1.65-7.26 3.21a1.54 1.54 0 0 1-.35.1 1.82 1.82 0 0 1-.31.19l-1.74.73a1.5 1.5 0 0 1-.35.09 1.65 1.65 0 0 1-.32.18c-1.22.5-2.78 1.24-4.1.79a10.45 10.45 0 0 1-3-2.1 60.12 60.12 0 0 1-4.51-4.38 8.21 8.21 0 0 1-.48-.55l-30 12.47a22.56 22.56 0 0 1-2.65.94c-2.15.58-4.54.63-5.2-1.82a.71.71 0 0 1 1.37-.36c.36 1.33 2 1.21 3.46.82a20.92 20.92 0 0 0 2.48-.89c9.59-4 19.63-8.43 29.62-12.65a3.93 3.93 0 0 1-.3-1.37v-.76a1.59 1.59 0 0 1 .11-.49 1.33 1.33 0 0 1-.08-.45 2.65 2.65 0 0 0-.07-.69c-.22-.78-.88-1.24-.93-2.21a1.09 1.09 0 0 1 0-.31 2.25 2.25 0 0 1 1.41-1.67 27.76 27.76 0 0 1 2.93-1.21l1-.36.24-.06.23-.11 1.45-.52.24-.07.23-.1 1.84-.65a1.05 1.05 0 0 1 .24-.06l.23-.11 1.47-.5a1.05 1.05 0 0 1 .24-.06 1.33 1.33 0 0 1 .24-.11l1.85-.62a1.14 1.14 0 0 1 .25-.06l.23-.1 1.3-.42.2-.06a1.32 1.32 0 0 1 .26-.05 1.09 1.09 0 0 1 .25-.1c1.48-.45 3.13-1 4.42.14a7.62 7.62 0 0 1 1.79 2.6 5.12 5.12 0 0 1 .27 1.37.37.37 0 0 0 0 .15 2.25 2.25 0 0 0 .2.34l.4-.15c.07 0 24.23-8.73 32.8-12.62 7.82-3.55 12.18-3 16.21-2.55l1.44.17c2.94.3 6.85 2.28 10.11 3.92a37.75 37.75 0 0 0 4.39 2c1 .31 2.57-.05 4.49-.77 1.48-.56 1.55-1.82 1.48-3.45 0-.31 0-.68-.09-1.12a14.47 14.47 0 0 1-.14-2.28c0-.14 0-.55.05-.68v-.1a3 3 0 0 1 1.37-2c.41-.29 1-.6 1.4-.84 2.35-1.25 9.1-4.54 10-4.54a3.24 3.24 0 0 1 2.45 2.48 2 2 0 0 1-.11.64c-.3.86-.28.68.54 1.48 1 1 .9 1.42 2.12.78.73-.38 1.48-.85 1.57-1.59a9.34 9.34 0 0 0-1-4.89 18.71 18.71 0 0 0-5.57-7.35l-10.65-8.19c-1.72-1.32-2.81-1.94-5-1.58-35.17 6.67-68.85 15.57-102.29 24.92a5.46 5.46 0 0 1-3.06.17 4.31 4.31 0 0 1-2.6-2.13 6.79 6.79 0 0 0-3.14-3.14c-1.7-.81-3.95-2.22-12.07.32-3.5 1.1-11.23 3.75-12.81-.18.47.29 2.08 1.8 2.78 1.14.55-.53 0-.82-.18-1.29a2.21 2.21 0 0 1-.19-.7c-.65-5.43 13-5.47 19.44-11.06a76.17 76.17 0 0 0-8.72 2.34 54.65 54.65 0 0 0-9.56 4 9.13 9.13 0 0 0-2.44 1.65 5.5 5.5 0 0 0-1.21 2.18.36.36 0 0 1-.68-.21 6.38 6.38 0 0 1 1.34-2.42 9.57 9.57 0 0 1 2.64-1.81 56 56 0 0 1 9.69-4c3.21-1 6.39-2.08 8.66-2.59a3.42 3.42 0 0 0 2.29-1.18 135.6 135.6 0 0 1 20.87-15l5.67-2.89c-6.47-.26-10.9 1.07-16.9 2.49-3.57.85-1.94 2.28-2.95 4.17-.21.4-.8.66-.76.13l.05-.53v-.49l-69.94 14.51c-.73.15-4.54.94-5.84-.49s-3.2-3.26-5.33-3.61a8.14 8.14 0 0 0-3.93.61l-8.72 3a7.46 7.46 0 0 1-2.73.47c-.54.28-2.07.93-2.94 0s-1-1.22-1-1.23a.28.28 0 0 1 .28-.28 8.74 8.74 0 0 1 1.15 1.12 1.52 1.52 0 0 0 1.62.16l-.17-.11c-3.67-2.66 5.84-6.08 7.32-6.76v-1.87c-25 10.55-43.65 17.07-60.94 39.22 13.92-4.42 26.51-8.09 37.18-11.22 5.26-1.55 9.8-2.8 13.61-3.78 4.09-1.05 7.28-1.76 9.56-2.16a12.27 12.27 0 0 1 5-.2 6.3 6.3 0 0 1 1.43.52 1.48 1.48 0 0 1 .25-.46 1.45 1.45 0 0 1 2-.18l13.5 11.3a1.63 1.63 0 0 1 .2 2.16c-.79.95-1.07.35-.59 1.59a3.21 3.21 0 0 1-.41 1.79 6.87 6.87 0 0 1-.55.79.72.72 0 0 1-1 .12.7.7 0 0 1-.12-1 5.36 5.36 0 0 0 .43-.62 1.38 1.38 0 0 0 .2-.58 1.35 1.35 0 0 0-.25-.87 5.57 5.57 0 0 0-.84-1.15c-.44-.49-.69-.53-1.12-.37l-4.17 1.54c-1.78.66-2.49.7-3.94-.65l-7.82-7.28a1.76 1.76 0 0 1-.75-1.77c.27-.84 1.4-1 2.17-1.23l2.36-.52c1-.23 1.57-.24.62-.87a6.22 6.22 0 0 0-1.94-.9 11.49 11.49 0 0 0-4.47.22c-2.28.41-5.44 1.11-9.46 2.14q-5.6 1.44-13.55 3.77c-40.79 12-93.48 26.59-131.26 44-31 14.29-56.65 36.57-81.12 57.25-37.26 31.5-67.72 68.45-86.45 117a5.35 5.35 0 0 0 .65 5.68v.05a6.29 6.29 0 0 1-.07-2.23 24.69 24.69 0 0 1 1.14-4.95 91.19 91.19 0 0 1 3.44-8.6c1.66-3.71 3.4-7.38 5.15-11a17.31 17.31 0 0 1 2-3.71c.46-.4.73-.35 1.21-.53.14-.05.48-.63.55-.74 1.93-3.14 3.44-7.06 5.15-9.78a.81.81 0 0 1 1.08-.27l7.48 4.28a.76.76 0 0 1 .27 1.08l-.94 1.5-4 7.46a6.91 6.91 0 0 0-.76 2.24 2.86 2.86 0 0 0 .24 1.15 6.14 6.14 0 0 1 .47 1.62c.08 1-.89 2.82-1.29 3.68-1.66 3.62-3.38 7.21-5.06 10.83-1.45 3.12-2.91 6.27-4.25 9.45a8.58 8.58 0 0 0-1 4.13 20.86 20.86 0 0 0 .23 2.09.61.61 0 0 1-.07.4c1.66.81 2.93.9 5.68.77zm309.06-200.74l8.62-8.12a1.14 1.14 0 0 1 1.56 1.65l-8.63 8.12a1.13 1.13 0 0 1-1.55-1.65zm81.13 27.14l10.88 9.49a1.39 1.39 0 0 1-1.82 2.09L481.37 265a1.39 1.39 0 0 1 1.82-2.09zm108.43-48.3a4.5 4.5 0 0 0 .93-1.41 5.16 5.16 0 0 0 .42-1.72 3.37 3.37 0 0 0-.13-1.16 22.15 22.15 0 0 0 4.36-1.31 10.31 10.31 0 0 0 2.18 2.43c3.18 2.74 6.41 5.44 9.64 8.12.93.76 2.74 2.42 3.92 2.74a4.24 4.24 0 0 0 2.59-.11 13.59 13.59 0 0 0 3.33-2.21 46.29 46.29 0 0 0 5.07-4.5c1.07-1.17 1.58-2.1 1.18-3.67a8.7 8.7 0 0 0-.4-1.22 1.16 1.16 0 0 0-.59-.62 3.75 3.75 0 0 0-.72-1.6 54 54 0 0 0-5-5.05c-1.06-1-1.62-1.42-2.68-2.45-.76-.74-1.09-.76-.28-1.23l.65-.38c1.15-.68.92-.58 1.85.61a2.12 2.12 0 0 0 2.45 1l37.21 31.2c10.87 9.1 22.83 17.22 33.06 26.27a12.56 12.56 0 0 1 3.75 7.94c.33 6.46-4.25 7.65-9.73 9.61a33.94 33.94 0 0 0 9.63-3l10.65 15c2.88 3.67 2.86 7.06-.1 11-5 6.82-17.26 20.34-26.46 31.6-1.68 2.05-2.81 3.66-4.42 4.12s-3.16-.33-5.26-1.35l-18-8.73c-1.86-.91-3.39-1.37-4-2.65a5.24 5.24 0 0 1 .5-4.4l17-34.63c3.75-7.66 0-14.39-5.95-19.11-7.92-6.25-25.76-20.07-38.79-30.07-9-6.92-18.34-13.88-27.92-19.16zm-186.8 27.89v-1.66l10.44-10.38c1.27-1.28 1.51-1.89 2.89-.62a46.66 46.66 0 0 0 4 3.29.92.92 0 0 0-.24.31 1.08 1.08 0 0 0 .46 1.46l10.07 5.24a1.09 1.09 0 0 0 1.46-.47 1 1 0 0 0 .07-.82 37.73 37.73 0 0 0 8.92 1.18c1.66 0 1.43.08 1.48 1.68l.28 6.3a77.17 77.17 0 0 1-12.6 1 58.8 58.8 0 0 1-24.39-5.29l-2.82-1.24zm13.11-16.74a.36.36 0 0 1-.37-.61 10.57 10.57 0 0 0 3.33-3.84 32.51 32.51 0 0 0 1.59-3.49 29.25 29.25 0 0 1 3.79-7.13c3-3.94 5.37-4.26 5.38-4.26a.35.35 0 0 1 .39.31.34.34 0 0 1-.3.39s-2.07.28-4.9 4a28.46 28.46 0 0 0-3.71 7 30.82 30.82 0 0 1-1.63 3.56 11.51 11.51 0 0 1-3.57 4.11zm46 19.56c1-.56 2.25-1.07 2.76-.56s1.63 2 2.73 3.39c.64.83 1.28 1.66 1.82 2.33l.26.33c1.14 1.43 1.2 1.51 3.37.84 1.11-.34 2.5-.88 3.9-1.46s2.83-1.23 4-1.76c3.22-1.49 3.63-1.1 6.23 1.4l.74.7 3.44 3.26c2.25 2.13 5.42 2.93 8.84 2.82a28.55 28.55 0 0 0 12-3.37c.86-.53 1.71-1.13 2.56-1.69a3.24 3.24 0 0 1 2.43-.74 3.41 3.41 0 0 1 1.78 1.16l3.88 4.46c-7.2 5.94-13.59 10.54-17.26 13.29-3.23 2.42-4.87 3.52-4.81 8 0 1.88 1.14 2.26-.55 2.56-3.94.72-7.26.52-9.23-1.06l-16.42-13.16c-.89-.73-.91-.61 0-1.17a3.26 3.26 0 0 0 1.48-1.58c.45-1.47-.78-2.62-1.65-3.64z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M592.23 278.3c-1.14 1.48-1.37 2.56 1.61 3.54s9.16 1.88 16.08 4.15a136.49 136.49 0 0 1 18.75 8.09c4.16 2.18 4.84 2.89 5.35 3s.86-.43 1.13-2a45.86 45.86 0 0 0 .49-5.66c0-1.51-.08-1.95-.84-2.54s-2.15-1.35-6.06-3.23-10.34-4.92-15.56-6.93a66.93 66.93 0 0 0-11.64-3.48c-2.42-.44-3.24-.32-4.68.69a24.45 24.45 0 0 0-4.63 4.37zM398.62 172.72l-.12 6.9 5.27-2.23c3.42-1.44 7.25.75 9 3.86h4.17V180.32c0-3.68 2.4-7.7 6.43-7.7a6.28 6.28 0 0 1 5.56 3.84c.37-3.39 2.7-6.74 6.38-6.74 3.5 0 5.87 3.13 6.33 6.37l.07.44 8.23-1.6 38-8.39c1-2.67 3.55-3 5.58-3.33s1.95 0 1.7-1.18l-4.24-19.62a4.17 4.17 0 0 0-3-3.48 21.44 21.44 0 0 0-5.42-.8c-2.3 0-4.45.88-6.66 1.4-29.5 6.86-53.67 19.72-77.28 33.19zm76.94 18.88a5.72 5.72 0 0 1 .73-3.44c1.35-2.22 10.5-10.73 16-14.44s23-13.73 35.89-18.53c9-3.37 21.82-6.87 28.63-8.65a44.94 44.94 0 0 1 6.48-1.53 21.5 21.5 0 0 1 3.7.06 40.65 40.65 0 0 1 5.08.69c1.71.39 2.82 1.06 3.3 3.56.9 4.65 3.84 26.88 3.84 26.88q-9.9 2.13-19.68 4.42c-.57-5-1.1-10.26-2.73-15a2.22 2.22 0 0 0-2.47-1.58l-16.47 3c-1.92.35-4 2.85-3.16 4.24 2.61 4.24 3.47 9.39 3.65 14.3v.19q-10.54 2.65-21 5.47c-.72-3.13-3.12-6.1-6.58-5.92s-5.34 3-5.92 6.07a6 6 0 0 0-5.33-3c-4.14.2-6.25 4.59-6.09 8.31 0 .34.05.68.1 1l-2.49.7c-2.26.64-3 .45-3.73-1.39a6.47 6.47 0 0 0-3.12-3.71c-5.37-2.91-8.4 1.12-8.63-1.7z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M538.07 167.93l16.47-3a1.33 1.33 0 0 1 1.46 1c1.55 4.53 2.1 9.74 2.69 14.92q-8.79 2.07-17.52 4.25c-.19-5.68-1.21-11.22-4.06-15.72-.36-.6.29-1.33.96-1.45zm-153.66 3.95c-14.74 1.73-44.3 5.61-60.49 7.76s-19 2.57-21.23 3.32a17.43 17.43 0 0 0-6.1 3.8c-2.29 2-5.26 4.85-7.39 6.65a13.44 13.44 0 0 1-5 3 21.47 21.47 0 0 1-5.07.81c-1.65.08-3.11 0-6.36 2.84s-8.29 8.69-11.05 11.89-3.23 3.77-3.46 4.33a9.06 9.06 0 0 0-.32 1.86 13 13 0 0 0-.37 2.44 2 2 0 0 0 1 1.65c.59.39 1.41.64 3.77 1.1s6.27 1.14 8.84 1.34a9.87 9.87 0 0 0 4.76-.46c.93-.38 1.54-.86 1.5-1.41s-.75-1.17-.2-2.34 2.37-2.89 6.22-6.72 9.72-9.75 13.19-13a25 25 0 0 1 2.43-2.1c.79-.57.76-.65-.36-.65a5 5 0 0 1-2.13-.53c-1.64-.74-1.54-2.25-1.72-3.77a.35.35 0 1 1 .7-.08c.16 1.31.31 2.34 1.6 2.92 2.17 1 5.86.25 8.13-.05 4.13-.54 11.36-1.15 20.21-1.81s19.32-1.39 24.66-1.73 5.54-.29 7.24-1.46a74.05 74.05 0 0 1 10.9-6.48c6-3 14.77-6.53 19.9-8.63s6.64-2.75 7.84-3.4a10.51 10.51 0 0 0 2.56-1.85c.47-.54.54-1-14.2.77zm-123.23 48.43l9.32 1.15a1.11 1.11 0 1 1-.27 2.21l-9.32-1.15a1.11 1.11 0 1 1 .27-2.21zm30.03 2.87a32.64 32.64 0 0 1 4.92 1.09c2.09.64 1.72.67 3.76 0 2.67-.89 5.92-1.6 8.58-2.46l-4.69-1.3c-2.37-.65-4.45-1.22-6-1.6a16.29 16.29 0 0 0-2.95-.58 1.79 1.79 0 0 0-1.22.39 10.34 10.34 0 0 0-1.38 1.28c-.84 1-3.01 2.94-1.02 3.18zM95.89 386.43l7.14 3.95a.36.36 0 0 1 .13.51l-.9 1.45a.42.42 0 0 1-.54.14l-7.13-4a.35.35 0 0 1-.13-.5l.9-1.46a.41.41 0 0 1 .53-.09z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M446.39 237.11c7.44 0 13.5-5 13.5-11.06S453.83 215 446.39 215s-13.5 5-13.5 11.07 6.11 11.04 13.5 11.04z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><ellipse cx=\"428.59\" cy=\"106.79\" rx=\"9.81\" ry=\"7.94\" fill=\"#000001\"/><path d=\"M145.58 325.17l3.8 1.13a1.49 1.49 0 0 1 .42 2.48l-7.71 7a2.57 2.57 0 0 1-2.58.19l-3.06-1.84a1.54 1.54 0 0 1-.2-2.41l7.54-6.4c.59-.51 1.14-.32 1.79-.15z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/></g><path d=\"M322.83 196.26l-14.3 24.85-4.53-1.28-2.44-.67 13.06-22.23q4.08-.36 8.21-.67zm-14.65 25.46l-.13.22c-2.13.67-4.59 1.25-6.81 1.9v-4l2.5.68zm305.65 51.88l20.88-26.6 10.73 8.43-18.23 23.3-.19.36a109.39 109.39 0 0 0-13.26-5.56zm-440.52 51.92l7.75-.25c11-8.36 22-16.71 34-24.67s25.09-15.52 36.73-21.9 21.84-11.56 32.05-16.75c2.92-.41 5.83-.83 9-1.08s6.71-.33 8.9-.59 3.06-.7 20.54-7.92 51.62-21.22 85.72-35.21a6.29 6.29 0 0 0-1.28-3.74 31.93 31.93 0 0 0-4.66-4.88c-1.35-1.14-1.85-1.26-12.41 2.67s-31.19 11.94-49.85 19.45-35.38 14.53-51.83 22.15-32.63 15.82-44.9 22.45a272.1 272.1 0 0 0-30.15 18.39c-9.52 6.73-20.21 15.15-27 20.74s-9.72 8.37-12.61 11.14zm302.53-186q-5.19 1.22-10.16 2.66c2.84.86 5.35 1.68 6.93 2.36 2.37 1 2.62 1.69 3.61 5.69s2.71 11.32 3.59 15.1c.31 1.33.51 2.23.65 2.84l7.43-1.64a4.37 4.37 0 0 1 1-1.57c-.13-.59-.35-1.58-.75-3.31-.87-3.78-2.6-11.1-3.59-15.1s-1.24-4.68-3.61-5.69c-1.06-.46-2.56-1-4.29-1.54zm83.68 6.28l-2.66.74c-2.7.71-6.34 1.69-10.32 2.82 3.36.72 6.62 1.43 8.54 2.08s2.59 1.33 3.15 3a61.68 61.68 0 0 1 1.92 8.73c.75 4.42 1.65 10.58 2.07 13.67.32 2.38.36 2.94.37 3.11 2.86-.66 5.73-1.32 8.61-2-.05-.49-.15-1.39-.36-3.08-.46-3.61-1.43-10.83-2.22-15.78a61.05 61.05 0 0 0-2-9.25c-.56-1.65-1.09-2.27-3.15-3-.97-.31-2.36-.67-3.95-1.04zm53.7 130.93l-1.88 9.74a128 128 0 0 1 12 5l2.13-9.36c-3.68-1.75-8.3-3.85-12.25-5.38z\" transform=\"translate(-73.67 -136.7)\" fill-rule=\"evenodd\" class=\"cls-0\" id=\"YELLOW_STRIPE\" data-name=\"YELLOW STRIPE\"/><g id=\"PURPLE\"><path d=\"M375.19 252.15c14.19 13 37.37 17.19 58 17.33l-.06-3.07c0-.78-.25-1.8.23-2.47a2.22 2.22 0 0 1 1.93-.71 125.29 125.29 0 0 0 30-4.2 3 3 0 0 1 3 1.62l2.47 4.19a38.93 38.93 0 0 0 4.05-1.45c.6-.27 1.12-.54 1.23-1.2a2.94 2.94 0 0 0-1.08-2.22l-9.75-12.4c-1.7-2.16-1.48-2.16-3.36-1.69-23.27 5.85-43.16 6.83-59.89-3.15-2.18-1.29-3.6-1.56-5.74-.48-6.22 3.08-14.71 7.07-21.03 9.9z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName)\" fill-rule=\"evenodd\"/><path d=\"M446.42 236.1c6.92 0 12.57-4.55 12.57-10.12s-5.65-10.13-12.57-10.13-12.56 4.55-12.56 10.15 5.64 10.1 12.56 10.1zm55.87 14.4c4.94 0 9-3.18 9-7.09s-4-7.08-9-7.08-9 3.18-9 7.08 4.07 7.09 9 7.09zm146.08 61.95l-9-4.79c-2.87-1.53-2.94-7.16-3-10.3a87.31 87.31 0 0 1 .71-10.8c.36-1.73-.14-2.09-.81-2.48-11.63-6.66-23-11.83-36.41-13.95a1.87 1.87 0 0 0-1.81.69c-2.16 2.18-5.11 4.92-6.61 6.87a4 4 0 0 0-1 2.22c0 .89-.33.73-1.34.52-25.73-4.19-48.82-3.33-72.55 4.88-2.71 1-5.36.85-7.15-1.3-1-1.24-5.05-4.9-5.07-6.18-.06-4.11 1.4-5 4.47-7.31 5.81-4.36 11.58-8.61 17.2-13.24l.37-.31.39-.33c1.07-.89 2.13-1.79 3.19-2.7q6.63-5.73 13.1-11.64 10.13-9.21 20-18.63c3.65-3.46 6.7-6.11 10.35-9.57 3.2-3 5.23-3.83 9.44-2.09 13.26 5.45 24.55 13.94 35.85 22.61 13 10 25.9 20.18 38.78 30.35 6 4.72 8.44 11.1 5 18.15zM623.91 202.4l69.3 56.7a15.07 15.07 0 0 1 .2-3.83c.23-1.08.7-1.77.49-2.67s-2.93-7.19-2.93-7.19l-52.63-44.26s-4.1.67-6.09-.08a18.93 18.93 0 0 1-2.23-.91zm18.16-2.02l1.84 1.51-2 1.2-3-2.53 3.17-.18zm2.43 2l-2 1.21 4.1 3.41 2.07-1.24-4.17-3.4zm4.75 3.87l4.7 3.83-2.15 1.3-4.63-3.88 2.08-1.25zm5.29 4.31l-2.16 1.3 5.29 4.43 1.82-1.7-5-4zm5.51 4.49l5.79 4.71-2 1.69-5.63-4.71 1.83-1.69zm6.34 5.16l-2 1.71 6.42 5.37 2.08-1.78-6.51-5.3zm7.07 5.76l5 4.05-1.81 2.13-5.25-4.4 2.09-1.78zm5.52 4.49l-1.81 2.14 5.63 4.71 1.88-2.21-5.7-4.64zm6.25 5.09l3.94 3.21-1.92 2.24-3.91-3.27 1.89-2.22zm4.24 4l-1.67 2 3.56 3zm-295.78-57.64l4.19-1.4c-.09-.82-.17-2.93-.16-3.71-.76.41-3.94 1.75-4.75 2.18-1 .52-4 2-2.3 3.17.63.46 2.39-.04 3.02-.24zm7.08 18.33l3.6-.79c.64-.14.79-.24 1.3.18 1.36 1.07 3 2.45 4.57 3.84s2.56 2.12 3.67 3.2c.93.91 1.45 1.2.44 1.57l-3.69 1.37c-1.51.56-1.92.64-3.1-.48l-7.82-7.28c-1.12-1.06-.4-1.26 1.03-1.61z\" class=\"cls-8\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M278.39 221.31a42.41 42.41 0 0 0 5.14 2.25 4.19 4.19 0 0 0 2.84.22 11.93 11.93 0 0 1 2-.69c1.19-.19 1 0 1.58-1.1.12-.21.26-.43.4-.65a15.09 15.09 0 0 1 1.4-1.81 10.71 10.71 0 0 1 1.49-1.38 2.39 2.39 0 0 1 1.65-.52 16.3 16.3 0 0 1 3.1.59c1.47.38 3.57.95 6 1.61l5.06 1.41 1.28-.4q11.85-3.75 23.77-7.28c1.66-.49 1-.67 1.84-2.12 2.34-3.89 11.66-12.12 16.19-15.83 2.83-2.31.27-1.42-3.38-1.19-8.21.52-14.89 1-23.1 1.63q-5.94.44-11.86.95c-2.76.24-4.39.35-7.13.71-3.94.52-4 0-6.77 2.06a25.74 25.74 0 0 0-2.3 2c-4.49 4.16-8.81 8.61-13.16 12.93-1.44 1.43-2.91 2.86-4.32 4.33a10.24 10.24 0 0 0-1.63 2 .51.51 0 0 0-.09.28z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName-4)\" fill-rule=\"evenodd\"/><path d=\"M145.35 326l3.8 1.13c.42.13.39.83.1 1.09l-7.7 7a1.87 1.87 0 0 1-1.62.09l-3.06-1.84a.72.72 0 0 1-.1-1.09l7.55-6.39c.29-.31.61-.16 1.03.01z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName-5)\" fill-rule=\"evenodd\"/><path d=\"M142 320.93a29.42 29.42 0 0 0 2.14-4.13 8 8 0 0 1 2.4-4c1.92-1.91 5.72-4.78 12-9.54l23.9-18.07c-11.26 9.76-22.52 19.53-29.27 25.49s-8.94 8.09-11.17 10.25z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName-6)\" fill-rule=\"evenodd\"/><path d=\"M90.81 436.54a43.31 43.31 0 0 1 2.48-5.73c3.19-6.33 9.11-16.13 14.78-24.95A262.27 262.27 0 0 1 125.82 381a253.47 253.47 0 0 1 21.6-23.3 173.83 173.83 0 0 1 20-16.26c6.69-4.71 13.77-9.26 21.73-14.15s16.79-10.15 26.6-15.79 20.61-11.69 29.69-16.43 16.44-8.17 23.15-11.21 12.76-5.69 16.15-7.09 4.14-1.55 6.33-1.21a56.36 56.36 0 0 1 7.82 1.82c2 .68 2.39 1.22 2.95 2.6a8.65 8.65 0 0 1 .78 2.66c-2.57 1.78-1.28 3.69-3.81 7.62-1.17 1.83-3.21 2.58-5.44 3.49C261 307 233.67 324.9 211.36 355.4c-2.45 3.36-4.36 6.67-7.46 8.53-2.35 1.4-2.45 1.28-8.44 2s-16.66 4.07-24.26 7.61C146.39 385 127.44 408.42 109.51 433a7 7 0 0 1-5.1 3l-11.41.5c-.85.04-1.56.06-2.19.04z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName-7)\" fill-rule=\"evenodd\"/><path d=\"M472.94 187.16c-2.57 1-5.24 1.68-7.78 2.68-1.23.49-3.49 1.44-4 2.8a1.93 1.93 0 0 0-.09.89c.47 4 6.58 1.18 9.3.32a39.73 39.73 0 0 1 4.49-1.15 2.7 2.7 0 0 1-.26-1 6.52 6.52 0 0 1 .87-4 17.06 17.06 0 0 1 2.3-2.72 31.6 31.6 0 0 1-4.83 2.18z\" class=\"cls-8\" transform=\"translate(-73.67 -136.7)\"/></g><g id=\"SHADOW\"><path d=\"M466.65 214.61a14.63 14.63 0 0 0 9.28 3.15c5.25-.07 17.23-3.79 30.13-7.81l7.81-2.41c2.59-.79 15.72-4.87 19.3-6 0 0-2.92 1.64-19 6.78-2.4.73-5.13 1.58-7.81 2.41-13 4-25 7.78-30.37 7.84a15.49 15.49 0 0 1-9.76-3.23c-1.09-.8-.35-1.34.42-.73z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M423.39 173.32a4.85 4.85 0 0 1 3.75 2 4.74 4.74 0 0 0-3-1.07c-3 0-5.51 3-5.51 6.77a5.83 5.83 0 0 0 0 .59l-.74.15a10 10 0 0 1-.06-1.11c.06-4.07 2.52-7.33 5.56-7.33z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M424.17 175c2.18 0 4 1.9 4.53 4.46l-9.2 1.91v-.42c-.01-3.27 2.08-5.95 4.67-5.95zm11.94-2.88c2.3 0 4.21 2.1 4.6 4.87l-9.23 1.91a7.58 7.58 0 0 1-.05-.84c0-3.28 2.1-5.94 4.68-5.94z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M435.34 170.41a4.85 4.85 0 0 1 3.75 2 4.78 4.78 0 0 0-3-1.08c-3 0-5.5 3-5.5 6.77a8.43 8.43 0 0 0 .06 1l-.72.15a10.75 10.75 0 0 1-.12-1.52c.02-4.06 2.49-7.32 5.53-7.32z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M572.69 186.74c5.49 0 10.15 3.26 13.62 6.86a27.5 27.5 0 0 0-15.77-5.43 25.74 25.74 0 0 0-5.09.48 13.31 13.31 0 0 1 7.24-1.91zm25.97 7.37a8.08 8.08 0 0 1-5.72 2.2 8.34 8.34 0 0 1-5.08-1.63 13.93 13.93 0 0 0 4.76.8 13.1 13.1 0 0 0 6.04-1.37z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M599.71 271.05a83.24 83.24 0 0 1 11.57 2.69c-.16.37-.31.75-.46 1.13a75.73 75.73 0 0 0-11.5-2.66.61.61 0 0 1-.39-.81.63.63 0 0 1 .78-.35zm12.77 3.07a97.88 97.88 0 0 1 11 4.31c-.17.39-.34.79-.5 1.19a101.36 101.36 0 0 0-10.98-4.37l.48-1.13zm12.09 4.88c3.87 1.83 7.6 3.84 11.24 5.93a.68.68 0 0 1 .39.8.56.56 0 0 1-.78.35c-3.73-2-7.48-4-11.36-5.89z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M657.6 322.63l12.73 6.82a1.38 1.38 0 0 1-1.31 2.44l-12.72-6.83a1.38 1.38 0 1 1 1.3-2.43z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M657.36 323.07l12.73 6.83a.87.87 0 0 1 .35 1.18.88.88 0 0 1-1.18.36l-12.72-6.83a.87.87 0 0 1-.36-1.18.89.89 0 0 1 1.18-.36z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M680.37 276c-1.46 1.49-2.88 2.35-6.68 2.35s-8.23-5.22-8.23-8.42v-.09c.83 3.27 5.67 7.31 9.17 7.31s4.17-.38 5.74-1.15z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M402.34 236.06L411 228a.71.71 0 0 1 1 0 .71.71 0 0 1 0 1l-8.62 8.12a.73.73 0 0 1-1 0 .73.73 0 0 1-.04-1.06zm20.83-2.74l10.06 5.23a.7.7 0 0 1 .3.93.69.69 0 0 1-.93.29l-10.07-5.23a.7.7 0 0 1-.29-.93.7.7 0 0 1 .93-.29z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M436.82 201.44l5.25-.74 1.64-.24 1.52-.21a1.32 1.32 0 0 1 .56 0c.56-.09 1.13-.21 1.7-.36 4.66-1.22 8.09-4 8.36-6.51.3 2.7-3.3 5.83-8.36 7.14l-.9.22a1.55 1.55 0 0 1 .34.76 1.46 1.46 0 0 1-.06.66c4.52.39 7.88 2.14 8.21 4.45a13.2 13.2 0 0 0-7.68-3 27.8 27.8 0 0 0-4.09-.06l-5.44.77a18.38 18.38 0 0 0-4.64 1.67 8.84 8.84 0 0 1 2.74-2 1.54 1.54 0 0 1-.43-.86 1.52 1.52 0 0 1 1.28-1.69z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M437 202.42l8.41-1.19a.51.51 0 0 1 .57.44.51.51 0 0 1-.43.58l-8.4 1.19a.52.52 0 0 1-.58-.44.51.51 0 0 1 .43-.58zm71.14-41.21h.17l3.4.07-.94-5.25-3.4.88.77 4.3zm2.5-5.87l-3.4.88-1.13-6.22 3.4-.88 1.13 6.25zm-1.25-6.94l-.91-5-3.4.88.91 5 3.4-.88zm-1-5.74l-3.41.89a3.81 3.81 0 0 0-.46-1.11 4.15 4.15 0 0 0-1-1.09c-.55-.39-5.32-1.21-10.19-2l8.69-.86a7.07 7.07 0 0 1 4.82.95 3.46 3.46 0 0 1 1.43 2.28z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M491.15 139.77l5.1 22.69h.27a44.56 44.56 0 0 1 10.9-1.25l-3.1-17.21a3.42 3.42 0 0 0-.44-1.16 3.14 3.14 0 0 0-.85-.89c-.53-.4-6.47-1.36-11.88-2.18zm19.69 46.43a4.51 4.51 0 0 1 3.61 1.7 4.43 4.43 0 0 0-2.84-.89c-2.86.13-5 3.15-4.87 6.74a7.43 7.43 0 0 0 .1 1l-.66.18a8.7 8.7 0 0 1-.18-1.46c-.18-3.9 2-7.14 4.84-7.27z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M511.64 187.8c2.16-.11 4 1.82 4.54 4.46l-8.58 2.26a7.43 7.43 0 0 1-.09-.81c-.14-3.15 1.71-5.8 4.13-5.91zm-11.25 2.99c2.16-.11 4 1.82 4.54 4.46l-8.58 2.25a7 7 0 0 1-.09-.8c-.14-3.15 1.74-5.8 4.13-5.91z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M499.61 189.27a4.55 4.55 0 0 1 3.61 1.71 4.5 4.5 0 0 0-2.84-.9c-2.86.14-5 3.16-4.87 6.74a7.58 7.58 0 0 0 .1 1l-.67.18a11.42 11.42 0 0 1-.18-1.46c-.17-3.89 2-7.13 4.85-7.27zm39.69-3.73c-.19-5.33-1.17-10.49-3.78-14.73-.27-.44.07-1 .54-1.26.22-.12.37 0 .5.19 3 4.48 3.71 10.22 3.91 15.51zm53.7-12.18c-3 .45-5.93 1-9.06 1.65l-.53-8.26a3.08 3.08 0 0 0-.36-1.35 2.36 2.36 0 0 0-.88-.85 8.53 8.53 0 0 0-2.71 0l-.35-2.53q-.54-3.9-1.12-7.79c-.26-1.76-.6-2.86-.85-4.16s-.77-2.88-.87-3.53v-.09c5.26.82 10.76 1.74 11.26 2.1a3.24 3.24 0 0 1 .85.88 3.47 3.47 0 0 1 .44 1.17l4.18 22.76zm-9.76 1.8l-.52-8.08a2.51 2.51 0 0 0-.3-1.11 1.88 1.88 0 0 0-.72-.69 6.74 6.74 0 0 0-2.14 0c.48 3.44.94 6.87 1.39 10.31z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M577.44 145.88l11.67-.12c1.8 0 2.94 1.46 3.36 3.21l-3.24.65a3.06 3.06 0 0 0-.26-.51 3.87 3.87 0 0 0-1-1.09c-.57-.41-5.79-1.31-10.94-2.12a3.46 3.46 0 0 1 .45 0zm15.18 3.78l.94 4.54-3.26.66-.8-4.33a1.89 1.89 0 0 0 0-.23l3.17-.64zm1.08 5.24l1.36 6.54-3.39.88-1.24-6.76 3.27-.66zm1.5 7.23l-3.4.88 1.27 6.88 3.55-.92-1.42-6.84zm1.56 7.54l.65 3.13c-1.28.13-2.52.29-3.72.46l-.49-2.67zm-91.99 53.69a3.71 3.71 0 0 0-.12-1c-.23-.83-.86-1.46-.89-1.94s.56-.82 3.53-1.92l1-.36 1.73 2.24a1.21 1.21 0 1 0 1.91-1.47l-1.26-1.63 1.83-.65 1.63 2.11a1.21 1.21 0 0 0 1.91-1.47l-1.13-1.47 1.84-.62 1.49 1.92a1.21 1.21 0 0 0 1.91-1.47l-1-1.23c2.28-.68 2.7-.59 3.2-.14a6.42 6.42 0 0 1 1.45 2.11c.25.66.1 1 .32 1.56a8.54 8.54 0 0 0 1.58 2c.8.86 1.83 2 2.76 3 .35.4.69.81 1 1.19a18.84 18.84 0 0 1-2.38 1.24c-1.31.61-3.2 1.47-5.14 2.32s-4 1.74-5.37 2.31a25.59 25.59 0 0 1-2.69 1 1.43 1.43 0 0 1-.9 0 3.67 3.67 0 0 1-.92-.51c-.4-.29-.89-.69-1.54-1.27s-1.35-1.28-2.2-2.16c-1-1-2.69-2.78-3.56-3.71zm11.78 5.64h.21v-.69a2.27 2.27 0 0 1 .1-.53.68.68 0 0 1 .35-.35c.25-.14.68-.32 1.42-.63l2.84-1.14 2.92-1.13a13.08 13.08 0 0 1 1.32-.47h.16a4.63 4.63 0 0 1 .06.67v.06h.22v-.06a3.11 3.11 0 0 0-.08-.76c0-.16-.1-.23-.41-.17s-.6.22-1.33.5l-2.93 1.14-2.84 1.14a13.52 13.52 0 0 0-1.45.65.83.83 0 0 0-.44.46 2.3 2.3 0 0 0-.11.58v.7zm-10.68-8l2.57 2.61c.81.83 1.56 1.61 2.19 2.3s1.1 1.25 1.48 1.73a10.45 10.45 0 0 1 .79 1.18 2 2 0 0 1 .26 1.27.29.29 0 0 0 .29.28.28.28 0 0 0 .28-.28 2.48 2.48 0 0 0-.33-1.55 9.59 9.59 0 0 0-.85-1.27c-.38-.49-.88-1.08-1.51-1.76s-1.37-1.47-2.19-2.31-1.7-1.73-2.58-2.61a.28.28 0 0 0-.4 0 .28.28 0 0 0 0 .4zm8.51 3.18a1.19 1.19 0 0 0-.55 1.6 1.22 1.22 0 0 0 1.61.58l8.42-3.81a1.2 1.2 0 0 0 .56-1.61 1.25 1.25 0 0 0-1.62-.58z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M504.73 225v-.64c.91 1 2.21 2.31 3.08 3.21s1.69 1.7 2.24 2.19a20.28 20.28 0 0 0 1.6 1.31 4.16 4.16 0 0 0 1.1.61 2 2 0 0 0 1.3 0 11.36 11.36 0 0 0 1.41-.47l.88 1.77c-2.22.9-2.67 1-3.21.77a8.91 8.91 0 0 1-2.58-1.85c-1.32-1.18-3.3-3.05-4.42-4.28s-1.37-1.81-1.41-2.62zm11.4 5.95l.88 1.76 1.72-.73-.87-1.75-1 .42-.72.3zm2.39-1l3.72-1.61 3.52-1.58.86 1.74c-2 .94-4.88 2.19-7.23 3.2l-.87-1.75zm7.89-3.48l.86 1.73.23-.11c.59-.27 1.06-.5 1.45-.7l-.85-1.72-.71.34-1 .46zm2.33-1.11a10.72 10.72 0 0 0 1.15-.66 4.31 4.31 0 0 1 .57 1.06c.13.46 0 .76-.88 1.28zm-14.14-.75l8.4-3.8a.75.75 0 0 1 1 .34.73.73 0 0 1-.35 1l-8.4 3.81a.74.74 0 0 1-1-.35.73.73 0 0 1 .35-1zm-4.43-7.18l1.35 1.75a.72.72 0 0 1-.13 1 .73.73 0 0 1-1-.14l-1.67-2.04zm4.23-1.49l1.23 1.6a.72.72 0 0 1-.13 1 .72.72 0 0 1-1-.13l-1.54-2zm4.28-1.41l1.06 1.37a.72.72 0 0 1-.13 1 .72.72 0 0 1-1-.13L517.2 215l1.28-.41zm103.52-5.78a58.56 58.56 0 0 0-4.89-4.93c-2.48-2.38-6-5.81-7.71-7.52-1.43-1.41-1.69-1.66-2.58-1.31l6.43 6.07.14.15a1.47 1.47 0 0 1 .28.92 1.39 1.39 0 0 1-.37.9 1 1 0 0 1-.15.13l-4.8 3.7a1.62 1.62 0 0 1-1 .34 1.5 1.5 0 0 1-1-.44c-2.54-2.5-5.31-5.06-7.75-7.63a1.84 1.84 0 0 0-.9 1.27v.09a2.5 2.5 0 0 1 1.64 2.53 2.59 2.59 0 0 1-1.35 2.42v.29a3.8 3.8 0 0 1 2.47.95c1.19 1 2.9 2.48 4.62 3.92s3.63 3 5 4.18 2 1.64 2.49 2a2.48 2.48 0 0 0 .86.47 2.75 2.75 0 0 0 .83.09 2.67 2.67 0 0 0 .84-.17 4.87 4.87 0 0 0 1.11-.61c.46-.3 1-.74 1.78-1.35l.64-.51a32.52 32.52 0 0 0 3.56-3.13 2.23 2.23 0 0 0-.11-2.75zm-7.93 4.32l6.17-4.51a.14.14 0 0 1 .2 0 .16.16 0 0 1 0 .21l-6.17 4.5a.14.14 0 0 1-.2 0 .14.14 0 0 1 0-.2zm.74.45l5.24-3.82c.32-.24.89-.22 1 .16l.27.81c.13.38.16.77-.16 1l-5.16 3.93a.68.68 0 0 1-1-.16l-.35-.91a.81.81 0 0 1 .16-1zm-3.24-4l5.24-3.82a.73.73 0 0 1 1 .15l.58.8a.74.74 0 0 1-.16 1l-5.25 3.82a.71.71 0 0 1-1-.16l-.58-.79a.72.72 0 0 1 .16-1zM600.52 203a.28.28 0 1 1 .38-.42L612.11 213a.28.28 0 0 1 0 .4.28.28 0 0 1-.4 0L600.52 203zm5.93-7.79l6.61 6.24.08.09a.88.88 0 0 1 .17.55.85.85 0 0 1-.22.53.27.27 0 0 1-.08.07l-.28.22-7.65-7.06 1.24-.57.13-.06zm-1.93.89l7.76 7.16-2.67 2.05-8.29-7.65c1-.5 2.19-1.06 3.22-1.54zm-3.76 1.81l8.39 7.75-.95.73a1 1 0 0 1-.66.22 1 1 0 0 1-.62-.27l-7.71-7.59.79-.45z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M599.86 210.21c2.36 2 7.07 6 9.63 8.1s3 2.38 3.48 2.52a3.07 3.07 0 0 0 1.88-.09 11.56 11.56 0 0 0 3-2 53 53 0 0 0 4.94-4.37c1.13-1.24 1.11-1.8.91-2.6a8.14 8.14 0 0 0-.35-1.06 2.33 2.33 0 0 1-.52 1.29 31.7 31.7 0 0 1-3.64 3.2l-.64.51c-.76.61-1.34 1.06-1.82 1.39a5.74 5.74 0 0 1-1.27.68 3.46 3.46 0 0 1-1.05.22 3.42 3.42 0 0 1-1-.12 3.18 3.18 0 0 1-1.1-.57c-.49-.35-1.23-.95-2.52-2s-3.11-2.58-5-4.18-3.51-3-4.63-3.92c-1.32-1.14-4.67-.76-.3 3zm-2.08-9.21a2 2 0 0 1 1.16 2 2.21 2.21 0 0 1-.86 1.85c0-.56-.11-1.15-.17-1.73a16.45 16.45 0 0 1-.13-2.12z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><rect width=\"7.03\" height=\"1.53\" x=\"611.59\" y=\"207.86\" class=\"cls-14\" rx=\".27\" ry=\".27\" transform=\"rotate(-36.11 368.57 253.28)\"/><path d=\"M615.27 213.89l5.25-3.82c.12-.09.33-.09.38.05l.27.82c.05.14.06.28-.06.37l-5.11 3.93c-.12.09-.33.08-.38-.06l-.35-.91a.3.3 0 0 1 0-.38zm-5.56-20.14a1.19 1.19 0 0 1 .93 1.93l-.22-.22a10.64 10.64 0 0 0-1.54-1.38 1.24 1.24 0 0 1 .83-.33z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M405.17 196.25l13.5 11.29a.67.67 0 0 1 .09 1 .68.68 0 0 1-.95.08l-13.5-11.29a.68.68 0 0 1-.09-.95.68.68 0 0 1 .95-.13z\" class=\"cls-15\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M261.12 220.84l9.32 1.15a.58.58 0 0 1 .5.65.58.58 0 0 1-.65.5L261 222a.58.58 0 0 1-.51-.65.58.58 0 0 1 .63-.51zm-174.4 214.4c-.11-.74-.21-1.51-.24-2.15-.08-1.44.17-2.29 1.07-4.43s2.43-5.54 4.25-9.47 3.94-8.38 5.07-10.83 1.26-2.88 1.22-3.35a6.09 6.09 0 0 0-.42-1.43 3.18 3.18 0 0 1-.28-1.43 8 8 0 0 1 .8-2.46c.58-1.34 1.53-3.43 2-4.64s.55-1.55.28-1.94a6.65 6.65 0 0 0-1.8-1.42 35.91 35.91 0 0 0-3.38-2c-.85-.36-1.17-.28-1.63.26-.72.84-2.54 4.67-3.39 6-.45.73-.61.92-.88 1a2.46 2.46 0 0 0-1 .4c-.34.3-.63.87-1.88 3.5s-3.49 7.32-5.14 11-2.75 6.45-3.43 8.53a23.31 23.31 0 0 0-1.1 4.83 5.16 5.16 0 0 0 .76 3.79 49.9 49.9 0 0 0 8.25 5.75z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M687.11 269.74a.35.35 0 0 1 .24-.44.35.35 0 0 1 .44.24l.23.79a1.87 1.87 0 0 1-.15 1.4 1.84 1.84 0 0 1-1.1.88l-10 2.92a1.88 1.88 0 0 1-1.4-.15 1.82 1.82 0 0 1-.89-1.1l-.24-.79a.37.37 0 0 1 .24-.44.36.36 0 0 1 .44.24l.24.79a1.09 1.09 0 0 0 .55.67 1.14 1.14 0 0 0 .87.1l1.6-.47h-.07a1.23 1.23 0 0 1-.57-.71l-.13-.44a1.22 1.22 0 0 1 0-.46 1.08 1.08 0 0 1 .14-.44 1.12 1.12 0 0 1 .29-.36 1.25 1.25 0 0 1 .41-.22l5.55-1.63a1.15 1.15 0 0 1 .52 0 1.22 1.22 0 0 1 .48.18 1.33 1.33 0 0 1 .29.29 1.24 1.24 0 0 1 .19.36l.13.45a1.22 1.22 0 0 1-.1.9v.08l1.33-.39a1.16 1.16 0 0 0 .68-.54 1.11 1.11 0 0 0 .09-.86z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M483 263.29l10.88 9.49A.87.87 0 0 1 494 274a.88.88 0 0 1-1.23.09l-10.88-9.49a.88.88 0 0 1-.08-1.24.87.87 0 0 1 1.19-.07z\" class=\"cls-15\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M316 241.43c1.29 1.8 3.76 4.84 5.27 6.6.42.49.74.74 2 .49a76.29 76.29 0 0 0 9.21-3.19c10.09-3.86 29.77-11.64 49.48-19.43l.13-.05a.57.57 0 0 1 .73.32.57.57 0 0 1-.32.74l-.13.05c-19.68 7.78-39.35 15.55-49.49 19.43a76.22 76.22 0 0 1-9.38 3.24c-1.85.37-2.37 0-3.07-.87a39.31 39.31 0 0 1-4.43-7.33zM116.33 394.14a.35.35 0 0 1-.5.06.36.36 0 0 1-.08-.48 166.4 166.4 0 0 1 13.78-18.06c3-3.41 6.6-7.12 10.06-10.58s6.78-6.66 9.31-9.07 4.26-4 5.5-5.11a19.79 19.79 0 0 1 2.66-2.07 4 4 0 0 1 1.08-.49 1.44 1.44 0 0 1 .7 0 .77.77 0 0 1 .51.35 1.08 1.08 0 0 1 .08.19c.08.28 0 .6-.38 1.11a19.24 19.24 0 0 1-1.83 2c-1.85 1.8-5.24 4.91-8.64 8l-.05.05a.34.34 0 0 1-.49 0 .35.35 0 0 1 0-.5c3.37-3.09 6.73-6.18 8.62-8a20.55 20.55 0 0 0 1.77-1.88c.23-.3.28-.43.26-.5h-.05a.85.85 0 0 0-.37 0 3.77 3.77 0 0 0-.9.42 19.14 19.14 0 0 0-2.56 2c-1.24 1.09-3 2.7-5.48 5.09s-5.85 5.6-9.29 9.05-7 7.15-10 10.55a166.27 166.27 0 0 0-13.72 18z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><rect width=\"6.29\" height=\".97\" x=\"678.26\" y=\"271.78\" class=\"cls-14\" rx=\".25\" ry=\".25\" transform=\"rotate(-16.4 170.469 459.606)\"/><path d=\"M107.05 418.08a1.52 1.52 0 0 1 .86 1.91l-3.68 10.13a1.46 1.46 0 0 1-2 .82 1.52 1.52 0 0 1-.86-1.91l3.68-10.13a1.46 1.46 0 0 1 2-.82z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M106.71 418.9a.64.64 0 0 1 .36.79l-3.68 10.13a.56.56 0 0 1-.76.31.65.65 0 0 1-.37-.8l3.68-10.12a.57.57 0 0 1 .77-.31z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M110 411.37a7.31 7.31 0 0 0-.64 1.91 1.92 1.92 0 0 0 .17 1.1 10.68 10.68 0 0 0 .58 1.08A10 10 0 0 1 111 417a3.34 3.34 0 0 1 .16 1.65 13.94 13.94 0 0 1-.78 2.72c-.45 1.2-1.11 2.81-1.88 4.63s-1.63 3.81-2.5 5.81a43.55 43.55 0 0 1 2-6c.76-1.79 1.42-3.39 1.87-4.61a12.78 12.78 0 0 0 .75-2.6 2.7 2.7 0 0 0-.14-1.37 8.51 8.51 0 0 0-.75-1.47 10.66 10.66 0 0 1-.61-1.14 2.47 2.47 0 0 1-.21-1.39 7.25 7.25 0 0 1 .69-2.08c.59-1.33 3.85-7 4.24-7.86-.73 2.25-3.25 6.85-3.84 8.08zm-4.16-5.49c-.54 0-1.09 0-2.75 3.08-.87 1.62-2 4.06-3.33 6.91s-2.94 6.39-4.37 9.66c.51-3.73 3-8.47 3.73-9.95 1.3-2.86 2.46-5.32 3.35-7 1.86-3.45 2.62-3.45 3.37-3.45z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/></g><g id=\"WING_CANNON_1\" data-name=\"WING_CANNON_1\"><path d=\"M574.11 328.5c-1.27.76-2.89 2.07-4.44 1.94a3.72 3.72 0 0 1-3.22-3l-2.05-10.75a6.57 6.57 0 0 1 1.15-5.1 10.4 10.4 0 0 1 3.83-2.77c12.27-6.47 24.52-13.23 36.29-20.37a1.23 1.23 0 0 1 .26-.12 11.38 11.38 0 0 1-1.36-1.72 1 1 0 0 1 1.13-1.61c1 .28 1.94.6 2.89.94 7.54 2.73 17 6.46 24.06 10.86a1 1 0 0 1-.39 1.87c-1.1.16-3.91.59-4.7-.26a2.66 2.66 0 0 1-.63-1.51z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M577.92 305.41l12.85-6.83a.85.85 0 0 0 .5.5l.42.15a.24.24 0 0 1 .09.06l1.39 2.28a.93.93 0 0 0 1.27.32l1.4-.85c6.2-3.76 12.51-7.48 18.59-11.16a.61.61 0 0 0 .28-.49 134.52 134.52 0 0 1 12.86 6l-25.64 15.33a25.23 25.23 0 0 0-.49-2.5c-.32-1.19-.72-1.74-1.16-2s-.93-.11-3.14 1c-1.88 1-5 2.73-7.46 4.06l-1.22.67c-2.56 1.36-3.73 1.89-4.5 1.92s-1.11-.45-1.49-1.84c-.22-.79-.45-1.86-.68-2.88-.18-.79-.37-1.54-.55-2.11-.42-1.3-.83-1.59-1.92-1.66a12.75 12.75 0 0 0-1.4.03z\" class=\"cls-8\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M569.85 309.69l4.66-2.47 1.23-.66a5.75 5.75 0 0 1 3.11-.34c.84.06 1.41 1 1.82 2.35s.85 3.59 1.23 5 .73 1.87 1.5 1.84 1.94-.55 4.49-1.92 6.48-3.57 8.68-4.72 2.7-1.27 3.14-1.05.84.78 1.12 2c.1.43.19.94.27 1.51l-1.74 1-2 1.19-23.78 14.21c-1.62 1-2.74 1.9-3.84 1.8a2.67 2.67 0 0 1-2.29-2.2l-2.05-10.75a5.52 5.52 0 0 1 1-4.32 9.63 9.63 0 0 1 3.47-2.46zm-2.2 3.08h.05a3.75 3.75 0 0 1 2.37.09 1.9 1.9 0 0 1 .64 1 20.58 20.58 0 0 1 .66 2.49c.51 2.26 1.24 5.75 2 9.25a.35.35 0 0 0 .42.27.35.35 0 0 0 .27-.42c-.73-3.51-1.46-7-2-9.26a22.74 22.74 0 0 0-.68-2.59 2.64 2.64 0 0 0-.91-1.34 4.06 4.06 0 0 0-2.85-.2.34.34 0 0 0-.32.35.35.35 0 0 0 .35.36zm64.46-15.09c-1.08.16-3.48.4-3.8.05a2.25 2.25 0 0 1-.13-2.28c1.36.72 2.66 1.45 3.93 2.23z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M575.21 312.86a1.56 1.56 0 0 1 2 1.28l1.12 7.05a2 2 0 0 1-1.32 2.12 1.58 1.58 0 0 1-2-1.28l-1.11-7a1.93 1.93 0 0 1 1.31-2.17z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M575.38 313.44a1 1 0 0 1 1.25.79l1.12 7a1.33 1.33 0 0 1-.9 1.44 1 1 0 0 1-1.25-.79l-1.11-7.05a1.33 1.33 0 0 1 .89-1.39z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M567 313.9h1.08c.89 0 1.45.75 1.61 1.62l2 10.71c.17.87-.73 1.33-1.62 1.32h-.67c-.93 0-.89-.6-1.13-1.6-.77-3.27-2.18-9-2-11 .03-.85.13-1.03.73-1.05z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M566.46 314.49h1.09a1.64 1.64 0 0 1 1.6 1.48l1.7 9.79c.14.8-.74 1.21-1.62 1.2h-.4a2 2 0 0 1-.38 0c-.08-.25-.13-.56-.21-.93.59-.16 1.39-.37 1.27-.95l-1.57-7.24a1.67 1.67 0 0 0-1.61-1.48h-.06a8.45 8.45 0 0 1 0-1.38 4 4 0 0 1 0-.4z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M594.88 297.29a.89.89 0 0 0-.31-.21c-.13-.06-.26-.1-.4-.15s-.17-.11-.17-.18a.22.22 0 0 1 .13-.2l1.4-.85a.49.49 0 0 1 .3-.06.89.89 0 0 1 .35.08c.13 0 .27.09.39.15a1.16 1.16 0 0 1 .32.2l1.45 2.38a.35.35 0 0 1-.12.48l-1.4.85a.36.36 0 0 1-.49-.12zm2.65-1.61a1.1 1.1 0 0 0-.31-.2c-.12-.06-.26-.1-.38-.15a.27.27 0 0 1-.18-.19.22.22 0 0 1 .13-.2l1.4-.85a.49.49 0 0 1 .3-.06 1 1 0 0 1 .35.08l.38.15a1.84 1.84 0 0 1 .31.2l1.45 2.39a.36.36 0 0 1-.12.49l-1.4.84a.36.36 0 0 1-.49-.11zm2.66-1.61a2.2 2.2 0 0 0-.3-.19l-.37-.15a.28.28 0 0 1-.18-.18.21.21 0 0 1 .12-.2l1.41-.85a.58.58 0 0 1 .3-.07 1.11 1.11 0 0 1 .36.08l.36.16a1.61 1.61 0 0 1 .31.19l1.46 2.4a.36.36 0 0 1-.12.49l-1.4.85a.36.36 0 0 1-.48-.12zm2.65-1.61a2.16 2.16 0 0 0-.3-.18l-.35-.16q-.16-.08-.18-.18a.19.19 0 0 1 .12-.19c.46-.29.93-.57 1.4-.85a.51.51 0 0 1 .31-.07.82.82 0 0 1 .35.08l.35.15a2.2 2.2 0 0 1 .3.19l1.46 2.42a.36.36 0 0 1-.12.49l-1.4.85a.36.36 0 0 1-.48-.12zm2.66-1.61l-.3-.18-.33-.15a.3.3 0 0 1-.18-.19.19.19 0 0 1 .12-.19l1.4-.85a.62.62 0 0 1 .31-.07.82.82 0 0 1 .35.08 3.36 3.36 0 0 1 .33.16 1.92 1.92 0 0 1 .31.18l1.47 2.43a.35.35 0 0 1-.11.49c-.47.28-.94.56-1.4.85a.36.36 0 0 1-.49-.12zm2.65-1.61a2.91 2.91 0 0 0-.3-.17l-.32-.16a.29.29 0 0 1-.17-.18.18.18 0 0 1 .11-.19l1.4-.85a.63.63 0 0 1 .32-.08h.07l.28.09h.09l.22.12.3.16 1.48 2.44a.37.37 0 0 1-.12.49l-1.4.85a.36.36 0 0 1-.49-.12zm5.98.14l-1.35.82a.36.36 0 0 1-.49-.12l-1.08-1.79c.97.35 1.94.71 2.92 1.09zm-19.9 8.31l1.43 2.37a.35.35 0 0 1-.12.48l-1.39.85a.36.36 0 0 1-.49-.12l-1.44-2.37a.81.81 0 0 0-.32-.21c-.13-.06-.28-.1-.41-.15s-.18-.12-.18-.19a.27.27 0 0 1 .15-.21l1.39-.84a.49.49 0 0 1 .29-.06 1.37 1.37 0 0 1 .35.08l.42.15a1 1 0 0 1 .31.21z\" class=\"cls-17\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M605.42 286c.4.59 1.36 1.88 1.67 1.88a1.51 1.51 0 0 0 1.18-1c-.96-.29-1.9-.6-2.85-.88z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/></g><g id=\"CENTER_CANNON\" data-name=\"CENTER_CANNON\"><path d=\"M326.49 340.51c-4.28 0-6.4-4.82-6.4-8.51 0-6.59 3.11-7.24 7.55-9.16l9.08-3.91c1.82-.78 4.88-1.79 6.62-.47a1.32 1.32 0 0 1 .49-.38l29.23-13.87a1.55 1.55 0 0 1 0-.43c.37-2.88 2.65-3.59 4.87-4.63l23-10.64c-6.94-6.22-15.12-16.93-15.15-26.6a1.42 1.42 0 0 1 2-1.28c13 6.2 27.13 8.85 41.46 9.14 15 .29 29.54-1 43.94-5.31a1.4 1.4 0 0 1 1.32.26l10.07 8.37c.7.58 2.19 1.46.22 1.87a68.57 68.57 0 0 0-23.14 10.28c-2.77 2-6.92 5.19-12.5 6.17-2.75.48-7.83.76-9.39-.55-.56.29-1.13.57-1.73.86-4.92 2.33-12 5.08-17.92 3.37-1.47.84-33.81 17.12-37 18.71-1.6.8-3 2-4.93 2a5.54 5.54 0 0 1-1.93-.35 1.39 1.39 0 0 1-.9-1.13l-28.13 13.9a2 2 0 0 1-.65.31c0 .08 0 .16-.05.24a6.1 6.1 0 0 1-3.91 4.47L332.42 338c-1.78.82-4.31 2.51-5.93 2.51z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M326.5 339.09c2.74 0 5-3.19 5-7.1s-2.24-7.09-5-7.09-5 3.19-5 7.09 2.25 7.1 5 7.1z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M326.5 337.86c2.22 0 4-2.64 4-5.87s-1.81-5.86-4-5.86-4 2.63-4 5.86 1.77 5.87 4 5.87z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M326.5 337c1.9 0 3.46-2.26 3.46-5s-1.56-5-3.46-5-3.47 2.26-3.47 5 1.56 5 3.47 5z\" class=\"cls-15\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M328.2 324.14l9.08-3.91c1.5-.64 4.09-1.48 5.2-.64s1.67 2.52 2.07 3.57a8.62 8.62 0 0 1 .61 5.35 4.76 4.76 0 0 1-3.11 3.49l-10.23 4.71a15.46 15.46 0 0 0 .38-7.3 8.63 8.63 0 0 0-4-5.27z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M344.47 319.39l31.65-15a3.68 3.68 0 0 1 1.9-.46 4 4 0 0 1 2 2.06 5.3 5.3 0 0 1 .77 3.49 1.53 1.53 0 0 1-.76 1l-33.45 16.68a12.94 12.94 0 0 0-2.11-7.77zm66.39-39.17c1.85 7.16 3 9.91 6 12 4.8 3.44 14.26 1.22 20.62-1.79a36.22 36.22 0 0 0 10.81-7.43c-12.98.89-25.55.33-37.43-2.78z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName-8)\" fill-rule=\"evenodd\"/><path d=\"M378.21 301.05c2.21 0 5.14 3 5.14 6.69s-2.3 6.69-5.14 6.69a4.11 4.11 0 0 1-1.43-.26l1.61-1.11c2.41-.14 3.65-3.11 3.65-5.32 0-3.1-1.64-4.92-3.24-5.4a2.11 2.11 0 0 0-2.62.89l-1.68.76c.23-1.83 1.5-2.94 3.71-2.94z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M411.32 285.22l-32.76 15.25c3.49.24 5.38 4.09 5.38 7.27a8.92 8.92 0 0 1-1.43 4.82l35.14-17.47-.69-.45a11.88 11.88 0 0 1-1.7-1.47c-1.94-2.02-3.09-5.04-3.94-7.95z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M389.65 271.92a50.74 50.74 0 0 0 11 14.44c-3.26-5.64-3.92-5.87-3.87-12.52l-1.29 2.31a18.82 18.82 0 0 1-5.84-4.23z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName-9)\" fill-rule=\"evenodd\"/><path d=\"M387.2 261.94c12.59 6 26.69 9 42 9.28 13.43.26 28.54-.63 44.38-5.37l10.07 8.36a63.24 63.24 0 0 0-22.85 9.91c-3.94 2.88-10.06 6.44-15.58 6.23 2.4-1.84 5.39-4.61 6.5-6.4s.14-2.86-1.79-2.6c-13.4 1.85-26 1.18-37.73-2.28-1.8-6.51-5.45-9.79-8.82-10.15a7.82 7.82 0 0 0-8.41 5.79c-4.97-2.55-7.75-6.41-7.77-12.77z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M403.36 287.38a14.6 14.6 0 0 1-6-11.53 12.18 12.18 0 0 1 .29-2.66l2.63-2.43a12.85 12.85 0 0 0-.25 2.61 18.89 18.89 0 0 0 5.55 12.73z\" transform=\"translate(-73.67 -136.7)\" fill=\"url(#ChangeName-10)\" fill-rule=\"evenodd\"/><path d=\"M449.63 273.25A113.16 113.16 0 0 0 464 272a1.91 1.91 0 0 1 2.25 2 2.86 2.86 0 0 1-2.25 2.61 45.1 45.1 0 0 1-14.36 1.26c-1.25-.06-2.25-.71-2.25-2a2.61 2.61 0 0 1 2.24-2.62z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M449.66 273.94a1.93 1.93 0 0 0-1.58 1.92c0 .92.78 1.24 1.59 1.28.6 0 1.2.06 1.79.07a14 14 0 0 0 .27-1.5 18.22 18.22 0 0 0 .14-1.88l-2.21.11zm2.52 3.28h2.79c.12-.51.2-1 .27-1.48.08-.66.12-1.33.15-2.07l-2.81.16c0 .71-.07 1.36-.15 2-.06.47-.14.94-.25 1.42zm3.53-.07c.92 0 1.84-.13 2.76-.23.08-.41.15-.81.2-1.21.09-.74.13-1.49.15-2.33l-2.73.22a21.73 21.73 0 0 1-.15 2.2c-.06.45-.14.89-.23 1.35zm3.49-.33q1.4-.19 2.79-.48.06-.31.09-.63a25 25 0 0 0 .17-2.74c-.9.13-1.81.24-2.72.34a23.88 23.88 0 0 1-.16 2.49c-.05.34-.1.68-.17 1zm3.53-.65c.36-.08.73-.17 1.09-.27a2.2 2.2 0 0 0 1.73-1.94 1.22 1.22 0 0 0-1.43-1.29l-1.16.19a26.07 26.07 0 0 1-.18 2.94c-.01.12-.03.25-.05.37z\" class=\"cls-17\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M450.68 282.18c.53 1.9-1.35 4.61-4.48 6.31a9.75 9.75 0 0 1-5.5 1.31 16 16 0 0 0 6.65-3.5 12.89 12.89 0 0 0 3.33-4.12z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M335.17 324.29c2 0 2.29 4.52 2.32 5.95a1.49 1.49 0 0 1-1.5 1.51h-.15c-.91 0-1.23-.76-1.19-1.55a8.79 8.79 0 0 0-1-4.13c-.55-1.07.6-1.78 1.52-1.78z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M335.17 325c1.29 0 1.61 4.38 1.63 5.26a.81.81 0 0 1-.81.81h-.15c-.44 0-.52-.39-.5-.83a9.36 9.36 0 0 0-1.11-4.46c-.23-.53.52-.78.94-.78z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/></g><g id=\"WING_CANNON_2\" data-name=\"WING_CANNON_2\"><path d=\"M445.93 310.93c-1.33.69-3.05 1.9-4.59 1.68a3.64 3.64 0 0 1-3-3.21l-1.2-10.85a6.63 6.63 0 0 1 1.54-5 10.73 10.73 0 0 1 4-2.53c12.74-5.75 25.47-11.79 37.77-18.23a1.17 1.17 0 0 1 .26-.1 10.3 10.3 0 0 1-1.21-1.8 1 1 0 0 1 .11-1.17 1 1 0 0 1 1.13-.31c.95.33 1.88.7 2.81 1.1 7.3 3.17 16.4 7.44 23.14 12.24a1 1 0 0 1 .38 1.1 1 1 0 0 1-.91.75c-1.12.1-4 .37-4.67-.54a2.5 2.5 0 0 1-.51-1.54z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M451.51 288.1l13.35-6.1a.81.81 0 0 0 .46.53l.4.17.09.06 1.21 2.37a.92.92 0 0 0 1.25.39l1.46-.77c6.47-3.39 13-6.73 19.39-10.06a.58.58 0 0 0 .32-.47A132.9 132.9 0 0 1 501.8 281l-26.75 13.81c-.08-1-.17-1.84-.3-2.52-.23-1.21-.58-1.78-1-2s-.91-.16-3.2.86c-2 .87-5.2 2.43-7.76 3.62l-1.27.59c-2.65 1.22-3.87 1.68-4.63 1.66s-1.07-.52-1.35-1.93c-.15-.79-.3-1.88-.45-2.91-.12-.8-.24-1.56-.38-2.14-.32-1.32-.7-1.63-1.79-1.77a13.17 13.17 0 0 0-1.41-.17z\" class=\"cls-8\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M443.14 291.91l4.84-2.2 1.28-.58a5.73 5.73 0 0 1 3.12-.17c.83.11 1.32 1.13 1.64 2.45s.56 3.64.83 5 .59 1.91 1.35 1.93 2-.44 4.63-1.66 6.74-3.18 9-4.21 2.78-1.11 3.21-.86.77.82 1 2c.07.43.11.95.15 1.52l-1.82.94-2.07 1.07L445.47 310c-1.68.87-2.88 1.73-4 1.57a2.63 2.63 0 0 1-2.12-2.33l-1.21-10.85a5.6 5.6 0 0 1 1.31-4.26 9.78 9.78 0 0 1 3.65-2.25zm-2.43 2.94h.05a3.72 3.72 0 0 1 2.36.23 1.93 1.93 0 0 1 .56 1 24.29 24.29 0 0 1 .46 2.53c.33 2.29.79 5.82 1.24 9.35a.35.35 0 0 0 .4.29.36.36 0 0 0 .3-.4c-.45-3.54-.91-7.08-1.24-9.36a24.73 24.73 0 0 0-.48-2.62 2.56 2.56 0 0 0-.8-1.39 4.1 4.1 0 0 0-2.83-.38.37.37 0 0 0-.35.34.35.35 0 0 0 .33.41zm65.44-11.3c-1.09.09-3.51.19-3.8-.17a2.27 2.27 0 0 1 0-2.29q1.98 1.18 3.8 2.46z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M448.23 295.38a1.53 1.53 0 0 1 1.92 1.4l.57 7.1a2 2 0 0 1-1.48 2 1.53 1.53 0 0 1-1.92-1.4l-.57-7.1a2 2 0 0 1 1.48-2z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M448.36 296a1 1 0 0 1 1.19.88l.56 7.08a1.38 1.38 0 0 1-1 1.4 1 1 0 0 1-1.19-.88l-.56-7.08a1.37 1.37 0 0 1 1-1.4z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M440 295.94h1.08c.89 0 1.38.83 1.48 1.71l1.13 10.82c.1.87-.83 1.28-1.71 1.22h-.68c-.92-.06-.84-.65-1-1.66-.51-3.32-1.47-9.09-1.13-11.12.09-.81.2-.98.83-.97z\" class=\"cls-1\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M439.39 296.5h1.08a1.59 1.59 0 0 1 1.53 1.6l.94 9.87c.07.8-.83 1.16-1.71 1.1h-.39a1.29 1.29 0 0 1-.38-.07c-.06-.25-.08-.56-.14-.94.6-.12 1.42-.28 1.34-.87l-1-7.32a1.62 1.62 0 0 0-1.49-1.57h-.06a8 8 0 0 1 .07-1.39c0-.15.05-.28.07-.39z\" class=\"cls-13\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M469.06 281a1 1 0 0 0-.29-.23l-.39-.17c-.11 0-.16-.12-.16-.19a.25.25 0 0 1 .15-.2l1.46-.76a.45.45 0 0 1 .3 0 1 1 0 0 1 .34.09l.39.18a1.3 1.3 0 0 1 .29.22l1.25 2.46a.36.36 0 0 1-.15.48l-1.46.76a.35.35 0 0 1-.48-.14zm2.77-1.47a1.08 1.08 0 0 0-.29-.21l-.37-.17c-.1-.06-.16-.13-.16-.2a.23.23 0 0 1 .14-.19l1.46-.77a.63.63 0 0 1 .31 0 .88.88 0 0 1 .35.1l.36.17a1.3 1.3 0 0 1 .29.22l1.26 2.48a.36.36 0 0 1-.15.48l-1.47.76a.35.35 0 0 1-.47-.14zm2.77-1.45a1.54 1.54 0 0 0-.29-.21l-.36-.17c-.1-.06-.16-.13-.16-.2a.21.21 0 0 1 .14-.18l1.46-.77a.52.52 0 0 1 .31-.05.83.83 0 0 1 .35.1l.35.18a2.11 2.11 0 0 1 .29.2l1.27 2.49a.36.36 0 0 1-.16.48l-1.46.76a.34.34 0 0 1-.47-.15zm2.77-1.46a1.54 1.54 0 0 0-.29-.21l-.34-.17a.29.29 0 0 1-.16-.2.21.21 0 0 1 .13-.18l1.47-.77a.62.62 0 0 1 .31-.05.83.83 0 0 1 .35.1l.33.18a2.11 2.11 0 0 1 .29.2l1.28 2.5a.34.34 0 0 1-.16.47l-1.46.77a.34.34 0 0 1-.47-.15zm2.77-1.45l-.28-.19-.33-.18a.31.31 0 0 1-.16-.19.22.22 0 0 1 .13-.19l1.47-.76a.54.54 0 0 1 .32-.06 1 1 0 0 1 .34.1l.32.18a2.83 2.83 0 0 1 .28.2l1.28 2.52a.35.35 0 0 1-.16.47l-1.46.77a.35.35 0 0 1-.47-.15zm2.78-1.45l-.28-.19-.31-.17a.29.29 0 0 1-.16-.2.2.2 0 0 1 .13-.18l1.46-.77a.59.59 0 0 1 .33 0h.07l.27.12h.09l.21.13.29.18 1.29 2.52a.37.37 0 0 1-.16.48l-1.46.77a.36.36 0 0 1-.48-.15zm5.94.49l-1.4.74a.36.36 0 0 1-.48-.15L486 273q1.45.55 2.86 1.21zm-20.48 7.13l1.25 2.45a.37.37 0 0 1-.16.48L468 285a.36.36 0 0 1-.48-.15l-1.25-2.45a.89.89 0 0 0-.3-.23l-.4-.17c-.11-.05-.16-.12-.16-.2a.27.27 0 0 1 .16-.19l1.46-.77a.47.47 0 0 1 .29 0 1.33 1.33 0 0 1 .34.1c.13.06.28.11.4.18a1.17 1.17 0 0 1 .3.22z\" class=\"cls-17\" transform=\"translate(-73.67 -136.7)\"/><path d=\"M480.44 270.33c.36.62 1.21 2 1.52 2a1.53 1.53 0 0 0 1.25-.89c-.93-.44-1.84-.78-2.77-1.11z\" class=\"cls-2\" transform=\"translate(-73.67 -136.7)\"/></g></svg>";
        this.ship2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"shipSVG\" viewBox=\"0 0 9312.17 4327.59\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><defs><style>.ChangeName-5{fill:#264364}.ChangeName-9{fill:none}.ChangeName-1{fill:#e6e7e8}.ChangeName-7{fill:#d2d3d5}.ChangeName-30,.ChangeName-8{fill:#4b4b4d}.ChangeName-0{fill:#000}.ChangeName-28{fill:#000;fill-rule:nonzero}.ChangeName-19{fill:url(#ChangeName-2)}</style><linearGradient id=\"ChangeName-1\" gradientUnits=\"userSpaceOnUse\" x1=\"6633.23\" y1=\"1238.52\" x2=\"7085.95\" y2=\"972.99\"><stop offset=\"0\" stop-color=\"PrimaryColor\"/><stop offset=\"1\" stop-color=\"SecondaryColor\"/></linearGradient><linearGradient id=\"ChangeName-0\" gradientUnits=\"userSpaceOnUse\" x1=\"3869.75\" y1=\"3253.87\" x2=\"3963.74\" y2=\"3124.27\"><stop offset=\"0\" stop-color=\"#f41000\"/><stop offset=\".651\" stop-color=\"#a38400\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-2\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#ChangeName-1\" x1=\"836.06\" y1=\"4164.34\" x2=\"6586.21\" y2=\"394.37\"/><linearGradient id=\"ChangeName-3\" gradientUnits=\"userSpaceOnUse\" x1=\"1534.02\" y1=\"2820.1\" x2=\"3534.31\" y2=\"1175.93\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".8\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-4\" gradientUnits=\"userSpaceOnUse\" x1=\"6131.01\" y1=\"2949.29\" x2=\"7433.11\" y2=\"1305.74\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".4\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-5\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#ChangeName-0\" x1=\"1798.2\" y1=\"1572.31\" x2=\"4833.45\" y2=\"542.8\"/><linearGradient id=\"ChangeName-6\" gradientUnits=\"userSpaceOnUse\" x1=\"3388.22\" y1=\"895.51\" x2=\"3821.43\" y2=\"582.68\"><stop offset=\"0\" stop-color=\"#f41000\"/><stop offset=\".478\" stop-color=\"#a38400\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-7\" gradientUnits=\"userSpaceOnUse\" x1=\"6634.73\" y1=\"3003.92\" x2=\"7107.95\" y2=\"1373.18\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".412\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-8\" gradientUnits=\"userSpaceOnUse\" x1=\"6508.57\" y1=\"2056.82\" x2=\"6916.31\" y2=\"1956.83\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".231\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-9\" gradientUnits=\"userSpaceOnUse\" x1=\"2530.41\" y1=\"2775.54\" x2=\"4617.69\" y2=\"881.66\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".671\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-10\" gradientUnits=\"userSpaceOnUse\" x1=\"4056.37\" y1=\"667.9\" x2=\"4283.55\" y2=\"180.1\"><stop offset=\"0\" stop-color=\"#f41000\"/><stop offset=\".451\" stop-color=\"#a38400\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-11\" gradientUnits=\"userSpaceOnUse\" x1=\"1872.47\" y1=\"1328.64\" x2=\"4326.46\" y2=\"34.23\"><stop offset=\"0\" stop-color=\"#f41000\"/><stop offset=\".659\" stop-color=\"#a38400\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-12\" gradientUnits=\"userSpaceOnUse\" x1=\"4543.11\" y1=\"3594.73\" x2=\"6849.19\" y2=\"440.36\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".451\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-13\" gradientUnits=\"userSpaceOnUse\" x1=\"5369.58\" y1=\"2285.04\" x2=\"6556.4\" y2=\"1600.81\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".149\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-14\" gradientUnits=\"userSpaceOnUse\" x1=\"4003.34\" y1=\"3821.28\" x2=\"5694.38\" y2=\"546.44\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".659\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-15\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#ChangeName-13\" x1=\"6500.85\" y1=\"2553.84\" x2=\"7470.34\" y2=\"937.61\"/><linearGradient id=\"ChangeName-16\" gradientUnits=\"userSpaceOnUse\" x1=\"2100.9\" y1=\"3538.65\" x2=\"5726.6\" y2=\"1535.61\"><stop offset=\"0\" stop-color=\"#f41000\"/><stop offset=\".6\" stop-color=\"#a38400\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-17\" gradientUnits=\"userSpaceOnUse\" x1=\"4698.96\" y1=\"2296.77\" x2=\"6151.13\" y2=\"712.8\"><stop offset=\"0\" stop-color=\"#fe3b00\"/><stop offset=\".278\" stop-color=\"#a89900\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient><linearGradient id=\"ChangeName-18\" gradientUnits=\"userSpaceOnUse\" xlink:href=\"#ChangeName-0\" x1=\"3478.57\" y1=\"3559.57\" x2=\"4013.25\" y2=\"2789.13\"/><linearGradient id=\"ChangeName-19\" gradientUnits=\"userSpaceOnUse\" x1=\"5021.35\" y1=\"3012.22\" x2=\"5010.62\" y2=\"1935.66\"><stop offset=\"0\" stop-color=\"#f41000\"/><stop offset=\".38\" stop-color=\"#a38400\"/><stop offset=\"1\" stop-color=\"#51f800\"/></linearGradient></defs><g id=\"CENTER_CANNON\"><path d=\"M5240.8 2285.8l-209.2-86.4H4736l-458.7 193.4v37.9L3361.7 2932v183.5c0 14.7-.8 18 7.3 30.4l52.9 81.5c11.7 18.1 31.7 18.1 44.9 2.4l23.5-28.2c9.1 39.3 9.5 78.2 64 47.3l1274.4-722.7 134.4 3.9c34.2 1 42.6-5.2 74.2-18.3l169.8-70.3 33.6-34.9v-120.8z\"/><path class=\"ChangeName-1\" d=\"M3375.2 2944.4v171.2c0 11.7-1.3 13.3 5.1 23l52.9 81.5c6.6 10.2 15.7 10.1 23.3 1l40.9-48.9 6.1 26.4c2.1 9 7.2 41.8 14.6 46.9 6.3 4.3 24.5-5.4 29.7-8.4l7.8-4.4c-8.1-5.8-15.3-11.8-20.8-18.4-5.5-6.5-9-13.3-11.7-20.3-2.6-6.9-4.2-13.6-5.8-20.4-.7-3 1.2-6 4.2-6.7 3-.7 6 1.2 6.7 4.2 1.5 6.5 3.1 13 5.4 19 2.2 5.9 5.2 11.7 9.7 17.1 5.6 6.7 13.8 13.1 23 19.4l1249.2-706.7c-26-1.9-53-3.9-79.4-5-28.7-1.2-228.6-6.7-243.2-11.2-16.4-5.1-20.8-10.8-24.5-16.7l-2.3-3.9c-1-1.8-2-4.3-3.3-7.2L3528 3008.8v111.3l-11.2-.1v-110.6l-141.6-65zm58.1 54.2l36.9 11.4c14.4 4.4 25.2 19.8 25 34.8l-1.7 119.6-43.4 41.6-48.8-76v-107c0-17.5 14.9-29.6 32-24.4z\"/><path class=\"ChangeName-1\" d=\"M4290.8 2438.8l-907.7 496.9 138.7 63.7 935.9-533.5 2.8 4.8c-3.5-7.5-8.9-16.1-18.9-21.7-11.1-6.2-27.3-13.3-44.4-19.2-15.2-5.2-31-9.5-44-11.3-13.3-1.8-23.9-1.1-33 .9-9.3 2-17.6 5.5-25.8 9l-3.6 10.4z\"/><path d=\"M3593.6 3052.9l230.1-127.5c17.3-9.6 45.3-7.4 59.2 7.5 17 18.1 8.7 46.5-11.9 58.1l-238 134.2c-17.6 9.9-49.3 1.1-56.7-18.4-7.6-20.2-2.2-43.1 17.3-53.9z\"/><path class=\"ChangeName-19\" d=\"M5032 2213.9h-295.7l-170.4 71.9c-.8 22.8-1.5 45.3-1.6 65.6-.2 23.9.3 45 2.1 60.7 1.8 15.1 4.8 24.9 8.5 31.9 3.6 6.9 8 11.5 12.3 16 2.1 2.2 2.1 5.8-.1 7.9-2.2 2.1-5.8 2-7.9-.2-4.9-5.2-9.9-10.3-14.2-18.6-4.2-8.2-7.7-19.2-9.7-35.8-1.9-16.1-2.4-37.7-2.2-62.1.2-19.1.8-39.7 1.5-60.7l-263.9 111.3v8.8c7.9-3.3 15.9-6.4 25.4-8.5 39.4-8.7 98.8 11.6 134.1 31.4 21.1 11.9 26.1 31.9 31.2 40.8l2 3.4c1.8 3 4.2 5.9 14.5 9.1 18.1 5.6 337.7 20.3 426.7 23 89 2.7 64.2 7.1 100.5-7.9l174-71.6 28.1-29.1V2295l-46.5-20.7\"/><path d=\"M3429.8 3010l36.9 11.4c9.1 2.8 16.7 13.3 16.6 23.2l-1.6 113.8-28.6 30.3-39.9-62.2V3023c.1-9.9 7.5-15.8 16.6-13z\" fill=\"#4b4b4d\"/><path class=\"ChangeName-19\" d=\"M3717.1 2999.5l27.3-15.1c9 15.6 15.6 33.2 18.9 52.1l-26.4 14.9c-3.6-18.9-10.4-36.4-19.8-51.9z\"/><path class=\"ChangeName-5\" d=\"M3754.8 2978.7l75.4-41.8c12.9-7.1 34-4.8 43.1 4.9 9.8 10.5 6.2 29.2-8.8 37.6l-90 50.7c-3.6-18.7-10.4-36.1-19.7-51.4zM3600 3064.4l106.8-59.2c9.1 15.7 15.6 33.4 19 52.4l-99.4 56c-12.1 6.8-33.9-1.3-37.8-11.5-5.3-14.3-2-30.2 11.4-37.7z\"/><path class=\"ChangeName-19\" d=\"M3648.6 2940l-120.7 68.8v111.3l-11.2-.1v-110.6l-141.5-65v171.2c0 11.7-1.3 13.3 5.1 23l52.9 81.5c6.6 10.2 15.7 10.1 23.3 1l40.9-48.9 6.1 26.4c2.1 9 7.2 41.8 14.6 46.9 6.3 4.3 24.5-5.4 29.7-8.4l7.8-4.4c-8.1-5.8-15.3-11.8-20.8-18.4-5.5-6.5-9-13.3-11.7-20.3-2.6-6.9-4.2-13.6-5.8-20.4-.7-3 1.2-6 4.2-6.7 3-.7 6 1.2 6.7 4.2 1.5 6.5 3.1 13 5.4 19 2.2 5.9 5.2 11.7 9.7 17.1 5.6 6.7 13.8 13.1 23 19.4l87.6-49.6-1.4-63.1-19.5 11c-17.6 9.9-49.3 1.1-56.7-18.4-7.6-20.1-2.2-43.1 17.3-53.9l56.9-31.5-1.9-81.1zm-126.8 59.4l126.5-72.1-127.1-67.1-138.1 75.6 138.7 63.6zm-51.6 10.6c14.4 4.4 25.2 19.8 25 34.8l-1.7 119.6-43.4 41.6-48.8-76v-107c0-17.5 14.8-29.6 32-24.3l36.9 11.3z\"/></g><g id=\"HullBody\"><path class=\"ChangeName-0\" d=\"M4118.62 273.72l141.57-50.47c17.59-6.27 35.77-.59 56.41 5.9l497.17 156.66 125.76-45.24 323.32 57.19-412.73-312.59c-35.83-27.14-28.2-39.86 20.76-57.64 24.31-5.66 96.93-27.54 117.94-27.54 12.02 0 31.45 10.38 40.19 14.17l702.27 304.46 116.44-38.52c18.73-6.19 37.14-4.42 57.63.75l64.58 16.3L6103.4 134.3c12.21-14.89 34.08-14.68 57.91-12.14l287.11 30.63c31.06 3.31 45.27 16.86 46.65 45.4l8.46 171.26 150.05 13.54c34.98 3.15 71.99 9.88 77.52 40.15l6 32.85 972.83-95.87c66.92-6.59 91.85-3.53 96.25 12.95 1.5 5.63-4.88 12.96-15.65 21.23l-128.71 77.76c-29.24 18.21-68.87 31.55-102.66 36.64l-773.41 116.66 1156.01 201.91c22.57 3.94 39.2 9.5 39.35 23.61l.37 35.12 1292.35 115.28c34.8 4.19 44.05 19.79 35.22 48.25l-13.74 44.26c-5.62 14.12-10.33 19.12-23.4 26.88-65.27 38.78-144.54 75.3-230.15 75.84L7949 1203.47l-2.74 66.52c-.56 13.61-10.09 25.91-18.98 36.24l-255.22 296.61-28.05 105.12c-13.76 51.57-26.84 72.16-67.92 85.41l-693.45 223.69-4.96 17.25c-4.46 15.53-3.13 14.74-17.21 22.52l-109.38 60.4c-22.09 12.19-22.84 10.09-45.28-2.3l-62.87-34.72-404.66-33.87c2.27 16.45-1.91 20.85-12.96 29.79l-122.49 99.07c-12.32 9.97-23.48 20.18-38.97 24.04l-129.39 32.33-140.88 123.98c-36.7 32.62-33.11 28.97-82.89 29.53l-302.49 5.21c-41.65.71-95.35 2.38-133.31-12.32l-238.93-92.5c-165.84 70.09-340.81 142.65-510.44 214.92-50.14 21.36-99.09 44.85-148.11 65.57l-1712.44 896.42c-443.74 255.28-882.55 459.39-1315.15 490.36-29.38 2.1-53.11 2.87-82.38 1.13l-160.54-9.55c-28.67-1.71-23.07 3.45-41.98-17.21l-60.1-65.64-28.26 7.51 181.54 314.89c11.96 20.74 1.75 30.82-11.93 36.51l-240.99 100.3c-15.41 6.41-31.12 8.62-49.19 5.55l-238.5-40.43c-23.41-3.97-27.84-4.21-49-15.02l-321.94-164.65c-13.49-6.95-20.08-7.74-34.18-2.8l-135.04 47.32c-12.06 4.22-22.17.42-28.48-8.02l-40.85-54.61c-8.97-12.01-14.64-23.98 6.94-47.01l886.15-945.4c91.38-104.61 189.36-203.18 329.11-286.36l157.46-93.73c101.82-92.28 267.54-205.26 383.8-278.94 150.74-95.54 321.82-184.4 491.2-241.9l1253.67-746.24-1.56-43.07c-.43-12.18 8.26-20.24 14.53-25.93l257.15-233.04-9.06-263.47 59.04-58.59 83.79.25c43.54-36.61 271.75-247.26 308.49-259.01l152.85-48.91-254.72-192.94c-17.89-13.56-29.83-35.26-8.24-50.02z\"/><path class=\"ChangeName-7\" d=\"M7032.27 762.8l10.2 25.44 97.85 17.41 28.15-14.8zM6663.58 1025.58l102.39 29.25-.13.47 16.55-11.56-122.84-35.1zM7033.68 792.07l-10.29-25.64-306.72 207.84 30.85 10.43zM6218.39 1308.55l435.14-281.21-4.23-17.8-452.34 292.32zM1441.42 2683.52c132.23-87.93 213.69-158.29 336.77-236.3 122.22-77.46 286.02-162.67 432.57-221.64l-769.34 457.94zM5020.09 34.72c-6.43-2.79-24.76-12.17-31.27-12.32-10.73 0-93.29 18.03-107.3 22.43-27.45 8.62-30.81 26.21-4.39 45.72l459.83 339.67 363.89-100.36L5020.1 34.71zM9041.61 1174.11c78.3-.5 152.67-33.37 218.85-72.7 8.43-5.01 10.2-6.46 13.71-15.13l13.47-43.4c.71-2.3 3.12-11.4 1.77-13.76-1.7-3.02-15.35-5.25-17.59-5.54l-1310.1-115.59-23.67.94-205.8 206.69c-5.94 5.96-5.93 7.15-5.9 14.47.01 5.3-.09 37.11.5 38.85 0 9.05 1.91 9.06 10.65 9.09 434.33 3.89 868.57-1.14 1304.11-3.92z\"/><path class=\"ChangeName-7\" d=\"M7626.65 1686.07l25.07-93.95 258.56-300.5c4.4-5.11 13.29-15.55 13.58-22.55l2.87-69.61-279 277.3-21.09 209.31zm289.28-493.77l-178.46-1.6c-19.17-.05-23.36-.09-23.36-21.76-.16-12.93-.42-25.87-.44-38.8-.04-11.88-.05-13.8 9.58-23.47l209.51-210.41 26.41-.01-.43-41.56c-1.29-.61-2.94-1.19-4.75-1.74l4.35 4.63-245.91 229.68c-12.19 11.5-12.69 13.63-15.64 26.05l-26.86 143.04-20.2 200.53 266.2-264.57z\"/><path class=\"ChangeName-7\" d=\"M6234.8 2024.81l411.63 34.46 24.76-504.02-438.44-29.94.67-13.49 439.98 33.07 85.82 46.81 127.44-44.59-58.34-38.61-126.99 37.02-2.82-9.74 959.81-279.77c7.73-46.71 17.25-94.44 29.27-144.08 3.68-15.56 4.31-18.22 19.32-32.39l242.99-226.93c-3.64-.82-7.01-1.44-8.82-1.75L6744.06 641.78l-1146.13 638.07c-19.59 10.91-38.89 21.81-56.85 33.6-6.54 4.3-12.93 8.73-19.12 13.33l634.53 159.94c11.21 2.82 20.67 5.29 28.42 9.15 8.51 4.23 14.77 10 18.54 19.2 3.57 8.68 4.43 19.01 3.22 31.14-1.16 11.6-4.2 24.89-8.55 40.03-10.04 34.92-14.91 80.09-16.21 122.07-1.64 52.83 2.24 100.27 8.46 115.75l46.14 114.69.45 2.51-2.18 83.57zm244.49-724.87c-66.45 42.47-88.37 95.09-32.81 122.41 55.56 27.32 136.52 6.66 204.25-42.93l699.28-511.96c31.74-23.24 46.58-38.82 46.01-50.77-.91-19.35-28.81-27.13-52.85-37.09-56.87-23.57-89.43-17.53-143.34 16.92l-720.54 503.41zm174.93-304.61l151.73 43.36c-152.62 106.54-306.45 214.85-459.07 321.38-58.21-18.23-116.48-36.34-174.73-54.48 159.5-103.1 320.29-207.88 479.86-310.88l2.21.63zm375.15-239.52l153.8 31.67c-112.15 77.71-224.42 155.27-336.45 233.14-50.28-14.33-100.63-28.48-150.95-42.71 110.52-74.17 220.98-148.4 331.53-222.53l2.08.42z\"/><path class=\"ChangeName-7\" d=\"M5940.86 2208.06l117.54-30.55c11-2.74 21.74-12.79 30.32-19.72 34.79-28.15 101.63-75.5 129.44-105.26l2.91-111.77-45.65-113.49c-.68-1.69-1.33-3.71-1.96-6.02l-155.54-37.71-138.05 220.9v201.97l60.99 1.66z\"/><path class=\"ChangeName-7\" d=\"M5039.53 2262.82l243.44 94.25c34.83 13.49 87.56 11.46 124.83 10.82l302.49-5.21c43.4-.75 36.08 4.56 68.47-23.94l135.91-119.6h-47.53v-216.51l.97-3.36 143.88-230.22 158.64 38.46c-3.82-23.69-5.81-61.06-4.57-101.06 1.34-42.99 6.34-89.29 16.66-125.2 4.19-14.57 7.09-27.15 8.15-37.79 1.01-10.11.39-18.45-2.32-25.08l-.25-.6-450.81 550.4-.95 268.28a6.349 6.349 0 0 1-6.39 6.29c-3.49-.02-6.31-2.89-6.29-6.39l.92-258.76-346.54 112.53-.72.17c-13.51 2.72-27.03 3.58-40.3 2.9-14.3-.73-28.34-3.22-41.81-7.05l-223.78-61.31c-26.95-7.64-28.13-17.19-31.44-43.97l-.6-4.76c-.42-3.48 2.06-6.66 5.54-7.08 3.48-.42 6.66 2.06 7.08 5.54l.6 4.76c2.55 20.61 3.46 27.96 22.24 33.28l223.78 61.31c12.63 3.59 25.74 5.93 39.02 6.6 12.12.62 24.43-.13 36.67-2.56l349.57-113.51 455.81-556.5a35.37 35.37 0 0 0-3.84-2.21c-6.6-3.29-15.4-5.58-25.84-8.2l-644.08-162.34c-6.06 5.04-11.89 10.29-17.42 15.83l-268.43 268.78c-52.39 52.45-92.35 117.5-123.71 191.02-31.47 73.8-54.29 156.18-72.3 242.99a202.141 202.141 0 0 0-4.16 35.8c-.28 11.08.39 21.45 1.56 30.85l17.84 142.37zm590.76-849l357.58 83.53c20.2 4.72 37.53 12.93 19.63 36.04l-341.48 396.59c-13.5 15.68-32.99 37.96-57.95 30.81l-348.43-99.85c-19.9-5.7-31.45-23.98-12.98-44.27 117.99-129.51 236.55-258.58 353.33-389.14 8.49-9.5 17.66-16.65 30.3-13.7zM7555.81 486.53c31.2-4.7 67.33-16.8 94.42-33.66l103.08-62.27c43.47-26.26-15.91-13.91-43.21-11.22L6662.14 485.44c-86.96 35.22-173.79 71.11-261.07 105.5-7.37 2.9-10.28 9.88-11.04 17.49-.89 8.87.95 18.64 2.49 25.1 7.36 30.78 23.3 28.16 46.31 24.37l8.81-1.41c359.97-53.77 724.71-112.11 1108.18-169.95zM6485.5 374.5l-12.81-175.2c-.92-18.62-8.63-22.3-26.65-24.22l-287.11-30.63c-8.46-.9-31.87-3.67-38.2 4.07-69.27 84.52-135.07 156.58-202.8 235.93 5.22 5.58 5.84 12.49-.48 18.52l231.73 17.61c18.03-3.65 36.27-4.87 54.97-3.56 11.56.81 20.72 4.62 25.74 9.69l16.29 1.24c21.98 1.66 23.94 1.56 45.3-3.9l194.02-49.55zM253.2 4087.94l325.47 162.89c17.44 8.91 23.41 9.63 42.54 12.88l238.49 40.43c13.12 2.22 24.62.94 36.84-4.15l229.59-95.55c17.48-7.28 7.9-17.38-1.28-33.32l-174.08-301.98-697.59 218.8zM5909.48 373.83l47.14-55.78-58.13-14.68c-14.93-3.77-30.17-6.14-45.11-1.2l-124.55 41.2-620.02 163.88c81.65-5.75 156.15-9.61 178.11-5.31 10 1.96 20.34 4.65 36.42 10.95l490.26-133.67c25-6.81 52.56-11.23 78.54-9.42 6.54.46 12.4 1.9 17.34 4.02z\"/><path class=\"ChangeName-7\" d=\"M3542.99 1396.84c-1.38 1.25-7.27 6.45-7.19 8.52l1.3 36 459.96-360.73c2.76-2.15 6.75-1.66 8.9 1.09 2.15 2.75 1.66 6.75-1.09 8.9l-467.26 364.91L1240.3 2829.3c-128.27 76.35-226.2 170.23-323.7 281.85l-.53.58-886.14 945.4c-1.99 2.12-8.59 9.56-8.89 12.7.31 1.34 2.73 4.48 3.54 5.57l40.85 54.61c.15.19.49.64.72.75.54.13 1.92-.29 2.4-.46l135.04-47.32c251.14-88.06 507.58-160.21 764.9-238.64 393.83-120.03 711.58-241.01 1084.13-416.25L4199.03 2329.1l604.09-990.88c7.07-9.96 22.27-31.41 16.44-37.21-.98-.97-6.09 1.37-15.72 7.51-11.05 7.04-26.16 19.03-45.55 36.63l-430.19 390.26c-41.99 38.07-63.55 49.3-112.89 74.99l-1.45.76c-153.89 80.13-307.11 159.75-459.74 239.06-750.36 389.91-1486.84 772.62-2221.78 1174.43-299.8 163.91-596.95 334.38-894.77 505.22-147.9 84.83-295.95 169.78-447.64 255.76-15.74 8.93-21.8-.49-5.69-9.61 147.83-83.8 297.91-169.9 447.78-255.86 297.25-170.52 593.82-340.66 894.99-505.31 736.13-402.46 1472.1-784.9 2221.95-1174.55 152.63-79.31 305.85-158.94 459.73-239.06l1.46-.76c48.53-25.27 69.74-36.32 110.54-73.32l430.18-390.26c19.92-18.05 35.54-30.43 47.08-37.78 14.74-9.4 24.56-11.01 29.58-6.02 6.47 6.44 4.55 16.66-.02 26.76-4.28 9.46-10.9 18.81-15.15 24.8l-602.99 993.83-1.84 1.66c-735.15 419.9-1376.86 744.38-2147.45 1106.83-160.57 75.53-312.06 146.79-468.11 208.09-124.38 48.85-252.41 90.2-386.53 133.16 25.97 47.15 119.62 80.18 191.32 105.46l19.62 6.94c2.64.94 4.02 3.86 3.08 6.5-.94 2.64-3.86 4.02-6.5 3.08l-19.58-6.94c-74.06-26.11-170.96-60.29-197.74-111.91l-6.03 1.93c-55.32 17.71-111.7 35.77-169.36 54.81l59.93 64.66c2.26 2.46 5.88 6.84 8.76 9.51 5.47.46 12.72.15 18.03.46l160.54 9.55c26.93 1.6 52.57.81 79.45-1.12 456.95-32.72 914.38-262.39 1305.57-487.43l.78-.43 1713.27-896.84.85-.36c206.94-87.46 413.2-176.55 620.06-264.2l-30.06-901.46c-.11-3.68 2.64-6.78 6.14-6.92 3.5-.14 6.43 2.72 6.54 6.4l29.9 896.68 25.7-10.87-17.91-142.94c-1.22-9.8-1.92-20.74-1.61-32.68.3-11.89 1.62-24.67 4.4-38.08 18.17-87.54 41.22-170.7 73.06-245.37 23.88-56 52.71-107.23 88.12-151.93l-.02-.02-187.27-282.92c-1.93-2.92-1.13-6.87 1.79-8.8 2.92-1.93 6.87-1.13 8.8 1.79l185.09 279.63c9.49-11.38 19.44-22.3 29.87-32.75l268.44-268.77c15.3-15.32 32.67-28.55 51.21-40.73 18.43-12.1 37.9-23.11 57.65-34.1l1141.05-635.42-18.67-1.81-261.49 39.05-8.62 1.37c-29.87 4.91-50.57 8.32-60.68-33.97-1.76-7.39-3.85-18.63-2.78-29.27 1.2-11.92 6.17-23.01 19.05-28.08l20.33-8.01 241.29-97.72 60.7-6.98-4.76-33.87c-3.45-24.58-19.3-26.39-44.21-29.15-54.37-6.02-108.69-13.08-164.32-20.51l-211.5 53.95c-20.69 5.28-20.69 5.94-41.74 4.34l-13.36-1.02c-2.57 6.97-10.64 13.74-25.68 18.39l-595.78 183.86-73.68-31.02-10.49 3.11c7.19 3.98 13.85 7.78 19.78 11.31 44.13 26.27 48.17 37.95 46.15 46.93-2.02 8.98-10.11 15.27-55.13 34.92-45.02 19.64-126.98 52.65-183 75.34-56.02 22.67-86.11 35.03-110.03 47.94-23.91 12.91-41.65 26.38-70.95 50.63-29.31 24.25-70.17 59.28-131.7 112.16-61.53 52.88-143.71 123.61-199.51 172.11-55.8 48.5-85.21 74.78-114.29 96.22-29.08 21.44-57.82 38.06-87.91 55.24-30.09 17.17-61.52 34.91-92.96 52.65-139.22 75.89-278.44 151.79-351.3 191.54-72.87 39.74-79.37 43.33-94.19 47.26-14.82 3.93-37.95 8.2-58.05 8.65-20.1.45-37.17-2.92-60.85-11.68-23.69-8.76-54-22.91-84.32-37.05-28.07-11.67-56.14-23.35-75.56-33.12-19.43-9.76-30.2-17.63-37.61-28.4-7.41-10.78-11.45-24.48-10.44-38.51 1.01-14.03 7.07-28.41 62.48-103.17 78.74-106.25 181.59-255.4 264.32-352.79l-17.45-6.06c-11.89-7.32-4.3-10.57 4.16-21.8l25.53-33.91c5.91-7.21 6.4-5.82 15.86-6.25l35.69-1.66c20.78-.96 25.86-14.28 40.61-29.39 24.27-24.83 71.21-72.21 120.61-123.18 47.33-48.85 96.93-100.98 126.08-132.12-10.62 4.78-24.19 10.98-43.86 21.99-20.65 11.55-47.88 28.34-85.16 54.14-37.95 26.25-86.45 61.95-137.22 100.86-49.39 37.86-100.74 78.6-146.35 116.47-46.45 38.55-87.19 74.3-125.08 108.64-125.23 113.48-248.43 218.95-377.26 335.7zM532.48 3570.5c29.38-30.03 60.6-58.21 91.14-87.04 97.35-91.91 194.86-183.66 292.45-275.33 54.68-51.37 109.68-102.42 163.73-154.47 35.61-34.29 70.65-69.17 106.18-103.54 27.67-26.78 54.91-47.14 86.99-68.25 71.1-46.78 143.61-91.33 215.99-136.09 82.15-50.79 164.56-101.15 246.95-151.55 57.63-35.26 115.35-70.39 172.41-106.59 43.14-27.37 85.85-55.48 130.67-80.09 48.09-26.39 97.88-49.51 147.31-73.25 45.2-21.71 90.15-43.95 135.5-65.38 51.84-24.5 104.05-48.2 155.87-72.75 46.3-21.94 92.19-44.73 138.48-66.69 41.92-19.88 84.32-37.74 128.38-52.4 56.05-18.64 113.08-34.28 170.07-49.76 30.63-8.32 62.3-18.37 93.75-22.73 13.92-1.93 31.06-2.55 40.18 10.38 9.03 12.83 2.56 26.89-6.28 37.57-14.55 17.58-34.87 33.2-52.29 48-37.68 31.99-76.16 63.02-116.65 91.4-56.63 39.71-116.42 74.75-176 109.79-81.29 47.8-162.97 94.92-244.96 141.52-103.14 58.62-206.73 116.43-310.09 174.67-154.3 86.93-308.33 174.33-463.02 260.56-87.05 48.54-174.88 95.67-261.71 144.63-78.44 44.24-151.32 96.96-224.3 149.49-164.44 118.37-327.65 238.42-490.28 359.26-37.6 27.94-75.17 55.93-112.4 84.37-9.15 6.99-17.98 14.56-27.65 20.86-10.52 6.86-22.06 9.53-33.28 2.38-7.53-4.81-13.81-13.67-16.65-22.09-3.08-9.14-2.06-17.84 2.55-26.26 4.22-7.69 10.86-14.4 16.96-20.63zm1424.63-512.55c96.55-2.17 174.81 76 174.81 174.59s-78.26 180.26-174.81 182.43c-96.55 2.16-174.81-76-174.81-174.59 0-98.58 78.26-180.26 174.81-182.43zm1129.26-1202.89c60.32-33.56 121.18-66.11 181.41-99.86 63.56-35.61 126.65-72.14 189.41-109.15 28.97-17.07 58.42-35.65 87.99-51.53 13.97-7.51 24.04-11.75 39.8-13.09 18.84-1.59 39.55-.65 58.5-.42 29.29.36 58.76.42 88.02 1.52 27.25 1.03 37.78 5.51 62.77 17.54 39.41 18.97 78.93 39.64 117.33 60.6 17.77 9.7 44.07 23.33 58.09 38.17 8.28 8.76 15.39 20.91 13.72 33.42-1.22 9.07-7.87 14.7-14.76 19.93-17.29 13.15-38.51 25.32-57.11 36.56-88.9 53.7-178.94 105.8-268.35 158.69-65.17 38.55-130.08 77.48-194.96 116.51-15.31 9.21-45.63 30.69-64.31 28.3-16.46-2.1-41.37-21.24-54.9-30.56-33.27-22.92-66.87-46.25-101.2-67.53-27.53-17.07-46.06-25.91-77.68-33.03-34.83-7.83-71.2-12.64-106.56-17.79-9.98-1.45-36.08-3.55-43.1-11.64-9.42-10.87 2.01-23.22 10.34-30.15 20.4-16.96 52.39-33.61 75.56-46.5z\"/><path class=\"ChangeName-7\" d=\"M4428.13 525.66l-193.83 62.03c-11.77 4.35-44.54 31.59-54.94 40.05-32.96 26.82-65.17 54.82-97.1 82.85-30.3 26.6-60.39 53.44-90.47 80.3-37.6 33.57-74.37 63-110.26 97.37l6.91 184.75c7.64-7.02 15.4-14.1 23.31-21.27 38.02-34.45 78.9-70.32 125.48-108.99 46.05-38.23 97.51-79.08 146.74-116.81 50.78-38.91 99.46-74.73 137.72-101.21 37.82-26.18 65.18-44.24 85.99-55.89 20.88-11.68 35.19-18.13 46.35-23.13 22.32-9.96 35.99-13.96 45.76-39.35 4.49-11.67 5.97-21.56 10.56-34.23 10.74-29.62 9.7-35.54 61.85-40.77 52.15-5.23 174.91-13.1 226.11-15.1 18.28-.71 36.06-3.43 45.73-2.03 20.72 3.01 4.15 12.59 62.61 8.42 35.87-2.56 79.61-4.07 128.26-16.89L5318.66 431l-378.54-66.54c-170.42 61.31-336.59 108.63-511.84 161.19l-.05-.04-.12.04zM4145.6 308.89l272.86 207.62 371.76-114.62-480.35-151.36c-11.45-3.61-30.18-10.44-42.16-6.17l-124.58 44.41c-11.92 4.25-13.09 8.34 2.47 20.13zM7620.15 1626.69l19.68-214.2-119.24 36.19-2.56 106.68zM6888.59 1782.28l-2.48 83.02 725.75-228.93-101.2-70.69-619.93 222.57z\"/><path class=\"ChangeName-5\" d=\"M6892.88 1639.22l-4.08 136.26 616.57-221.37 2.44-101.55zM7038.85 797.92l-282.38 188.55 88.64 22.72 285.17-197.72zM6660.13 1035.17l-429.1 277.31 115.22 35.93 409.35-285.96zM7095.96 1041.88l248.72-182.1c55.21-40.42 51.25-48.48-4.9-71.74-55.41-22.97-84.99-15.65-134.52 16.01l-222.5 155.44c33.13.32 63.12 14.28 84.88 36.67 12.44 12.8 22.19 28.36 28.32 45.72zM6484.48 1307.62c-34.33 21.94-95.54 75.8-33.72 106.21 61.33 30.16 144.18-5.14 194.64-42.09l400.02-292.87c-5.65-13.63-13.77-25.91-23.79-36.23-20.15-20.74-48.01-33.57-78.76-33.57-6.9 0-13.74.65-20.41 1.93-6.75 1.3-13.37 3.23-19.74 5.76l-418.24 290.84zM2371.22 2307.76c-110.33 52.14-204.61 101.57-297.06 153.72-92.22 52.03-183.26 107.15-286.9 170.55l-24.82 15.18c-67.76 41.44-147.47 90.2-222.05 136.31-45.49 28.12-90.29 56.01-129.61 80.79-34.38 21.66-64.15 40.67-85.89 54.98-67.48 44.39-124.08 99.09-181.82 154.9l-17.18 16.59c-87.85 84.6-181.36 164.75-274.16 244.28-110.19 94.44-219.39 188.05-316.73 287.08 1.32 1.47 2.74 2.74 4.21 3.67 4.49 2.87 9.32 2.53 16.73-2.3 7.41-4.82 17.4-14.14 139.28-104.69 121.87-90.55 355.62-262.33 490.47-359.39 134.84-97.06 170.77-119.41 225.73-150.39 54.95-30.98 128.95-70.62 261.77-144.67 132.81-74.04 324.47-182.5 462.96-260.53 138.49-78.03 223.82-125.64 310.04-174.64 86.23-49 173.35-99.41 244.76-141.41 71.4-41.98 127.09-75.56 174.98-109.13 47.89-33.57 87.96-67.14 115.53-90.54 27.56-23.41 42.6-36.66 50.41-46.09 2.84-3.43 4.72-6.36 5.83-8.89-54.6 10.84-108.7 31.88-161.83 52.54-28.25 10.98-56.24 21.87-84.18 31.16-25.62 8.53-47.09 16.63-67.22 25-20.1 8.35-38.73 16.94-58.85 26.49l-147.16 69.77-147.22 69.67zM3901.22 1331.28c-48.39 72.16-60.07 94.39-65.68 110.11-5.61 15.72-5.16 24.93 2.59 32.67 7.74 7.75 22.79 14.03 51.98 26.49 29.19 12.46 77.91 35.81 107.66 46.93 29.75 11.11 45.92 14.7 64.44 14.03 18.52-.67 39.41-5.61 78.81-24.92 39.41-19.31 97.34-53 158.65-88.13 61.29-35.14 125.97-71.75 184.2-105.09 58.23-33.34 110.03-63.43 139.22-80.37 11.21-6.51 16.06-9.34 21.88-12.71 23.04-13.37 16.63-18.06.62-43.73-7.07-11.34-12.21-19.59-21.88-34.3-9.67-14.7-18.66-27.5-62.07-54.78-43.42-27.28-121.27-69.04-171.46-90.82-50.19-21.78-72.71-23.59-112.26-21.42-39.55 2.16-96.12 8.28-152.7 14.41-85.11 122.09-175.61 239.47-224 311.63z\"/><path class=\"ChangeName-5\" d=\"M4207.72 944.41c39.69-3.44 79.39-6.87 107.9-9.34 78.69-6.81 55.85-9.52 126.81 29.62 46.81 25.82 132.05 72.83 177.59 99.82 45.53 26.99 51.37 33.95 62.04 53.37 10.67 19.42 26.16 51.3 34.47 67.47 8.31 16.17 9.43 16.62 44.91-14.59 35.48-31.22 105.32-94.09 170.32-151.35 65-57.26 125.18-108.9 185.36-160.55 13.47-13.92 26.95-27.84 32.78-38.17 5.84-10.33 4.04-17.07-4.15-33.13-8.2-16.05-22.79-41.43-34.8-58.27-12.01-16.84-21.44-25.15-69.83-50.41-48.39-25.26-135.74-67.47-184.02-88.81-48.27-21.33-57.48-21.78-99.13-18.64-41.65 3.14-115.76 9.88-158.42 16.95-42.66 7.07-53.89 14.49-80.95 40.3-27.06 25.82-69.94 70.06-124.39 125.75-54.45 55.68-120.47 122.83-186.48 189.96zM4892.06 540.92c79.38 35.7 158.76 71.4 204.34 93.69 45.58 22.29 57.38 31.16 69.56 48.79s24.75 44.01 33 61.47c8.26 17.46 12.18 25.99 15.55 30.77 3.37 4.77 6.18 5.78 25.27-1.63s54.45-23.24 103.68-43.08c49.23-19.84 112.32-43.7 146.11-58.94 33.79-15.24 38.28-21.86 34.29-29.94-3.98-8.08-16.45-17.63-51.17-37.36-34.71-19.73-91.69-49.66-128.94-66.97-37.25-17.32-54.75-22.03-96.32-21.98-41.56.05-107.18 4.87-170.42 9.87-63.23 4.99-124.09 10.16-184.94 15.32zM2069.19 2452.66c92.86-52.38 187.37-101.94 297.69-154.08l147.22-69.67 147.16-69.77c20.34-9.65 39.14-18.31 59.29-26.69 20.11-8.37 41.76-16.53 67.93-25.23 27.41-9.12 55.43-20.02 83.7-31 54.07-21.03 109.14-42.44 165.12-53.35-2.86-3.9-9.07-6.18-25.5-3.9-16.62 2.3-43.68 9.26-91.84 22.34-48.17 13.08-117.44 32.28-169.25 49.51-51.82 17.23-86.17 32.5-126.65 51.71-40.48 19.2-87.07 42.32-138.49 66.69-51.42 24.36-107.67 49.96-155.89 72.75-48.23 22.79-88.42 42.77-135.4 65.34-46.99 22.57-100.76 47.72-146.57 72.87-45.81 25.15-83.64 50.3-129.84 79.6-46.2 29.3-100.77 62.76-172.62 106.71-71.86 43.96-161.01 98.41-246.89 151.51-85.89 53.11-168.53 104.87-215.62 135.85-47.1 30.99-58.67 41.21-84.77 66.47-26.1 25.26-66.74 65.56-106.21 103.57-39.47 38.01-77.75 73.71-163.87 154.6-86.11 80.9-220.06 206.98-292.42 275.3-72.36 68.32-83.13 78.87-90.71 86.61-7.58 7.75-11.96 12.69-14.49 17.3-2.53 4.6-3.2 8.86-1.46 14.03.18.53.39 1.06.61 1.61 97.24-98.73 205.99-191.94 315.71-285.99 92.68-79.43 186.08-159.48 273.72-243.88l17.18-16.59c58.05-56.1 114.95-111.09 183.28-156.05 22.24-14.63 52.01-33.66 86.06-55.1 38.74-24.41 83.64-52.36 129.69-80.83 77.89-48.16 155.83-95.83 222.08-136.35l24.83-15.18c103.27-63.17 194.13-118.19 287.22-170.7z\"/><path class=\"ChangeName-8\" d=\"M1958.48 3070.55c89.31-2 161.7 70.3 161.7 161.5 0 128.38-143.5 225.87-242.11 127.48-27.56-27.51-44.93-65.71-45.88-108.4l-.02-3.75c0-39.21 13.89-75.85 37.24-104.47 23.33-28.61 56.14-49.26 93.96-56.49-52.71 3.17-90.5 36.18-101.84 50.08-24.79 30.41-39.54 69.3-39.52 110.92l.04 3.91c1.02 45.44 19.51 86.11 48.86 115.4a162.806 162.806 0 0 0 33.94 25.96c-62.95-21.18-108.09-81.39-108.09-153.4 0-91.19 72.4-166.75 161.71-168.75zM5566.32 1581.44l49.18-25.93 238.46 63.95c-13.08 16.02-26.07 32.1-39.09 48.15l-2.84 3.5-245.71-64.41v-25.26zm-207.4 238.91l43.87-25.43 245.07 68.15c-8.56 8.87-17.38 17.47-25.91 26.35-8.42 8.78-8.82 10.43-20.95 6.66l-242.08-75.74zm51.15-57.81l54.2-29.19 247.02 59.81c-17.62 20.43-35.56 40.52-53.96 59.98l-247.26-65.34v-25.26zm58.44-63.33l44.99-26.53 246.08 62.95c-14.02 17.06-28.18 34.07-42.56 50.87l-248.51-62.03v-25.26zm49.14-58.65l44.99-26.53 244.64 62.95c-13.72 16.94-27.52 34-41.45 51.02l-248.19-62.17v-25.26zm100.71-117.39l50.36-26.27 236 61.62-1.33 1.56c-15.26 17.84-30.25 35.92-45.13 54.1l-239.9-65.75v-25.26zM3174.43 1890.21l47.48-20.24 120.59 2.7 112.91 74.76a8162.28 8162.28 0 0 0-64.83 37.22c-4.11-2.92-8.18-5.89-12.34-8.75-32.82-22.61-65.65-44.86-99.61-65.75-20.16-12.4-71.07-16.36-104.19-19.95zm291.46 51.27c31.19-17.7 62.46-35.25 93.74-52.79l-114.74-75.97-120.59-2.7-80.67 34.38 1.11 17.66 100.62-.14 120.52 79.56zm102.48-57.69l14.42-8.08 77.16-46.13-118.05-78.17-120.59-2.7-80.67 34.38 1.11 17.66 100.62-.14 126 83.17zm220.16-125.16c18.01-10.55 35.97-21.2 53.87-31.96l-125.54-68.19-127.12-1.03-51.2 10.59-.56 14.3 116.58 3.08 133.97 73.2zm-242.43-17.29l-102.44.63.71-18.15 83.87-34.02 118.9 8.59 128.76 64.86-104.9 60.56-124.9-82.47zM5401.3 548.83l502.26-137.72 41.46 3.14-521.4 145.48c-7.67-3.76-15.15-7.41-22.32-10.9zM5434.43 565.06l519.93-145.64 40.44 3.08-538.39 153.48c-7.36-3.68-14.73-7.34-21.98-10.92zM5465.92 580.74l548.49-156.77 39.65 3.01-566.6 164.71c-7.07-3.63-14.28-7.3-21.54-10.96zM5497.48 596.88l574.6-169.23 38.78 2.95-592.49 177.3c-6.68-3.58-13.68-7.27-20.89-11.02z\"/><path class=\"ChangeName-9\" d=\"M6731.89 2102.04c42.96-19.39 94.98-46.7 135.61-70.42l15.22-472.32-122.29 42.79-28.53 499.95zM6655.64 2061.8l63.82 35.15 28.35-496.81-67.72-36.94zM6885.71 1878.75l-3.34 111.87 686.83-218.57c21.99-7.09 33.15-17.46 40.56-32.1l8.48-92.27-732.52 231.07z\"/><path class=\"ChangeName-9\" d=\"M6840.66 1502.46l55.15 38.81-2.53 84.55 747.81-226.99 12.24-133.26z\"/><path class=\"ChangeName-19\" d=\"M5627.65 1425.23c-7.99-1.85-14.12 4.71-18.94 10.1-116.82 130.62-235.38 259.67-353.39 389.22-10.5 11.52-7.14 20.92 7.54 25.13l348.43 99.85c18.56 5.31 35.29-14.83 45.91-27.16l331.9-385.44c20.52-23.84 8.16-25.97-20.62-32.65l-340.83-79.04zm-2.27 60.36l-80.05 89.28c-66.92 74.71-132.72 148.17-199.87 221.95-7.92 8.7-9.08 14.5-5.83 18.73l58.38-34.88.59-27.58 58.44-31.47v-31.66l49.14-28.98v-29.67l48.68-28.7v-30.64l52.04-27.45v-30.85l56.74-29.6 250.25 67c5.59-6.67 9.51-11.82 10.34-15.44.75-3.23-3.24-5.77-15.1-8.51l-245.74-55.34c-21.26-4.92-22.36-3.7-35.5 11l-2.52 2.82zm-87.6 82.52l82.56-92.1c16.84-18.85 18.24-20.41 45.3-14.15l243.19 53.87c19.16 4.43 25.06 10.76 22.76 20.7-1.62 7.04-8.41 14.98-17.53 25.65-92.85 108.73-174.62 227.7-276.28 328.67l-6.45 6.6c-13.22 13.78-17.67 18.41-40.05 11.61l-205.67-63.7-6.78-2.03c-19.33-5.82-36.04-10.85-44.68-18.71-9.49-8.64-10.09-19.27 3.81-34.54 69.2-76.03 133.96-148.33 199.83-221.87z\"/><path d=\"M7053.85 1072.71l33.51-24.53c-5.54-17.13-14.88-32.47-27-44.94-20.15-20.74-48.01-33.57-78.76-33.57-5 0-9.96.35-14.85 1.02l-42.51 29.7c6.17-.98 12.41-1.49 18.63-1.49 33.6 0 64.03 14.02 86.04 36.67a125.314 125.314 0 0 1 24.95 37.14z\" fill=\"url(#ChangeName-1)\"/><path class=\"ChangeName-19\" d=\"M5565.43 610.05l563.33-177.38c31.36-9.87 56.9-10.32 74.91-9.06 18.7 1.31 40.01 14.48 4.94 25.3L5616.62 631.6l-51.19-21.55zM5343.74 518.62l472.72-128.88c31.72-8.64 56.91-10.32 74.91-9.06 18.7 1.31 40.38 15.81 4.94 25.29l-501.39 134.2-51.19-21.55zM5070.07 156.12c30.14-12.87 73.41-29.39 121.22-47.18l-171.21-74.22c-6.43-2.79-24.76-12.17-31.27-12.32-10.73 0-93.29 18.03-107.3 22.43-27.45 8.62-30.81 26.21-4.39 45.72l132.34 97.76c6.3-4.71 13.27-9.18 21.85-13.87l-127.85-85.36c-2.91-1.94-3.69-5.89-1.74-8.8a6.343 6.343 0 0 1 8.8-1.74l133.7 89.27c7.43-3.61 15.93-7.45 25.85-11.69zM6086.78 189.3c111.06 15.12 215.81 29.41 271.91 37.33 32.35 4.57 48.52 7.01 56.63 8.4l31.85-36.39c2.3-2.64 6.31-2.9 8.95-.6 2.64 2.3 2.9 6.31.6 8.95l-32.7 37.35c2.89 47.87 5.8 95.75 8.7 143.62l52.78-13.48-12.81-175.2c-.92-18.62-8.63-22.3-26.65-24.22l-287.11-30.63c-8.46-.9-31.87-3.67-38.2 4.07-11.4 13.91-22.7 27.47-33.94 40.8zM7617.18 438.15l-244.73 33.78c-11.87 15.98-23.74 31.96-35.6 47.94 72.36-11.11 145.32-22.24 218.96-33.35 31.2-4.7 67.33-16.8 94.42-33.66l103.08-62.27c43.47-26.26-15.91-13.91-43.21-11.22l-245.82 24.88-76.16 52.7 227.32-31.38a6.355 6.355 0 0 1 7.16 5.42 6.355 6.355 0 0 1-5.42 7.16zM9023.64 1001.7c-50.82 39.07-101.64 78.14-152.45 117.22 93.3.09 188.74.19 284.24.26 2.81 0 5.09 2.28 5.09 5.09s-2.28 5.09-5.15 5.09c-99.94-.1-199.88-.21-297.36-.31-7.45 15.5-14.9 30.99-22.35 46.5 68.62-.5 137.27-1 205.95-1.44 78.3-.5 152.67-33.37 218.85-72.7 8.43-5.01 10.2-6.46 13.71-15.13l13.47-43.4c.71-2.3 3.12-11.4 1.77-13.76-1.7-3.02-15.35-5.25-17.59-5.54l-248.19-21.9zM6646.44 2059.27l24.76-504.02-438.44-29.94.67-13.49 439.98 33.07 85.82 46.81 127.44-44.59-58.34-38.61-126.99 37.02-2.82-9.74 959.81-279.77c7.73-46.71 17.25-94.44 29.27-144.08 3.68-15.56 4.31-18.22 19.32-32.39l242.99-226.93c-3.64-.82-7.01-1.44-8.82-1.75l-43.04-7.52c-72.31 59.85-139.22 115.4-180.35 150.51-52.09 44.46-62.88 56.14-75.23 88.69-12.35 32.56-26.27 86-37.72 117.21-11.45 31.21-20.43 40.19-168.63 85.33-148.2 45.13-435.62 126.42-589.65 169.3-154.04 42.89-174.69 47.38-224.99 47.15-50.3-.23-130.23-5.17-193.78-9.88-63.55-4.72-110.7-9.21-154.94-16.17-44.23-6.96-85.55-16.39-210.62-47.37-117.11-29.02-307.67-76.94-502.91-126.06-6.17 3.72-12.23 7.51-18.14 11.4-6.54 4.3-12.93 8.73-19.12 13.33l634.53 159.94c11.21 2.82 20.67 5.29 28.42 9.15 8.51 4.23 14.77 10 18.54 19.2 3.57 8.68 4.43 19.01 3.22 31.14-1.16 11.6-4.2 24.89-8.55 40.03-10.04 34.92-14.91 80.09-16.21 122.07-1.64 52.83 2.24 100.27 8.46 115.75l46.14 114.69.45 2.51-2.18 83.57 411.63 34.46z\"/><path class=\"ChangeName-19\" d=\"M6680.09 1563.2l-24.45 498.6 63.82 35.15 28.35-496.81zM6760.42 1602.09l-28.53 499.95c42.96-19.39 94.98-46.7 135.61-70.42l15.22-472.32-122.29 42.79z\"/><path class=\"ChangeName-19\" d=\"M6895.81 1541.27l-2.53 84.55 747.81-226.99 12.24-133.26-812.67 236.89zM7618.23 1647.69l-732.52 231.07-3.34 111.87 686.83-218.57c21.99-7.09 33.15-17.46 40.56-32.1l8.48-92.27zM7647.73 1476.77l-21.09 209.31 25.07-93.95 258.56-300.5c4.4-5.11 13.29-15.55 13.58-22.55l2.87-69.61-279 277.3zM7715.88 1184.12c-1.3-3.22-1.76-8.02-1.76-15.18-.16-12.93-.42-25.87-.44-38.8-.04-11.88-.05-13.8 9.58-23.47l209.51-210.41 26.41-.01-.41-39.07-.43.39-245.91 229.68c-12.19 11.5-12.69 13.63-15.64 26.05l-26.86 143.04-11.78 116.92c15.06-57.14 28.62-107.88 37.55-139.01 6.74-23.47 10.86-35.81 20.17-50.12zM5925.94 1996.74c43.76-62.28 87.53-124.57 131.3-186.85a5.084 5.084 0 0 1 8.64-1.5l.73.85c36.57 6.74 73.13 13.47 109.7 20.21l-.89-2.2c-.68-1.69-1.33-3.71-1.96-6.02l-155.54-37.71-138.05 220.9v201.97l45.19 1.23c.27-66.78.56-133.55.83-200.33l-2.7-.76a5.088 5.088 0 0 1-3.52-6.27c.76-2.7 3.57-4.28 6.27-3.52zM6707.39 418.2c-7.18-10.48-20.61-12-38.96-14.03-7.66-.85-15.32-1.72-22.98-2.61L5294.11 839.6c-17.61 5.7-25.45 10.19-38.17 23.64l-426.2 450.68c-3.75 11.34-12.35 23.48-17.5 30.73l-606.59 989.8-2145.7 1112.52c-160.57 75.53-312.06 146.79-468.11 208.09-124.38 48.85-252.41 90.2-386.53 133.16 25.97 47.15 119.62 80.18 191.32 105.46l19.62 6.94c2.64.94 4.02 3.86 3.08 6.5-.94 2.64-3.86 4.02-6.5 3.08l-19.58-6.94c-74.06-26.11-170.96-60.29-197.74-111.91l-6.03 1.93c-55.32 17.71-111.7 35.77-169.36 54.81l59.93 64.66c2.26 2.46 5.88 6.84 8.76 9.51 5.47.46 12.72.15 18.03.46l160.54 9.55c26.93 1.6 52.57.81 79.45-1.12 456.95-32.72 914.38-262.39 1305.57-487.43l.78-.43 1810.33-937.99c160.18-376.78 306.47-751.52 466.33-1128.25 4.59-10.8 4.93-12.18 12.73-20.95l388.86-437.24c9.47-10.99 16.07-15.51 29.74-20.39l1303.11-465.28c14.36-5 28.73-10 43.09-15zM2136.13 2603.84c138.49-78.03 223.82-125.64 310.04-174.64 86.23-49 173.35-99.41 244.76-141.41 71.4-41.98 127.09-75.56 174.98-109.13 47.89-33.57 87.96-67.14 115.53-90.54 27.56-23.41 42.6-36.66 50.41-46.09 2.84-3.43 4.72-6.36 5.83-8.89-25.08 4.98-50.07 12.12-74.89 20.37-37.33 26.41-73.08 51.73-100.64 71.33-34.13 24.27-55.68 39.75-258.33 154.38-202.65 114.63-586.4 328.4-830.92 464.47-244.53 136.07-349.84 194.45-413.73 230.83-63.88 36.38-86.33 50.75-178.06 123.61-91.72 72.87-252.72 204.23-413.72 335.58-59.36 44.93-118.71 89.87-178.07 134.8-18.45 17.72-36.58 35.58-54.31 53.62 1.32 1.47 2.74 2.74 4.21 3.67 4.49 2.87 9.32 2.53 16.73-2.3 7.41-4.82 17.4-14.14 139.28-104.69 121.87-90.55 355.62-262.33 490.47-359.39 134.84-97.06 170.77-119.41 225.73-150.39 54.95-30.98 128.95-70.62 261.77-144.67 132.81-74.04 324.47-182.5 462.96-260.53zM1065.13 4067.49L607 4261.2c4.01.8 8.53 1.54 14.22 2.51l238.49 40.43c13.12 2.22 24.62.94 36.84-4.15l229.59-95.55c17.48-7.28 7.9-17.38-1.28-33.32l-59.74-103.63zM3905.46 847.77l-61.18-.18-45.52 45.17 8.8 255.63c22.52-21.17 45.11-42.39 68.68-64.14h-.08l-7.52-201.21 36.83-35.27zM3090.65 1862.76c-43.79 24.37-63.55 36.71-74.21 45.58-10.67 8.87-12.24 14.26-9.32 17.63 2.92 3.37 10.33 4.72 37.72 8.7 27.39 3.98 74.77 10.61 107.22 17.91 32.45 7.29 49.96 15.26 80.39 34.13 30.43 18.86 73.76 48.61 101.55 67.76 27.79 19.14 40.02 27.67 51.03 29.07 11 1.41 20.77-4.32 58.67-27.12 37.89-22.79 103.91-62.64 195.02-116.54 91.11-53.89 207.31-121.82 268.28-158.64 60.97-36.83 66.69-42.55 67.7-50.13 1.01-7.58-2.69-17.01-11.39-26.22-8.7-9.21-22.4-18.19-55.91-36.49-33.52-18.3-86.84-45.92-116.93-60.4-30.1-14.49-36.94-15.83-59.29-16.67-22.34-.85-60.18-1.18-87.8-1.52-27.62-.34-45.02-.68-57.65.39-12.63 1.06-20.49 3.54-36.38 12.07-15.89 8.53-39.8 23.13-87.68 51.36-47.89 28.24-119.74 70.12-189.58 109.24-69.84 39.13-137.64 75.5-181.43 99.87zm49.67 35.77l80.11-36.23 16.69.37-1.46-23.18 87.16-37.14 11.38.25-1.53-24.41 87.16-37.14 16.21.36.89-22.81 93.48-38.4.71-18.42 57.84-11.96 129.84 1.05 143.49 78.01c16.04-10.48 15.21-15.95.3-25.65-40.8-26.57-113.66-82.33-140.93-83.36-1.12-.04-134.32 6.35-139.33 6.77-.77.06-1.66.11-2.41.27-2.64.8-6.68 3.12-9.1 4.42-123.03 66.06-290.87 169.7-434.08 249.16-27.09 15.03-16.08 16.17 3.56 18.04zm15.65 8.43c-9.36-1.37-38.61-.94-41.65-11.31-2.8-9.58 12.68-17.32 19.22-20.94 145.8-80.9 287.42-170.41 434.15-249.2 3.24-1.75 6.81-3.87 10.32-4.93l.25-.08.26-.06c1.09-.23 2.15-.31 3.26-.4 22.78-1.93 46.91-2.4 69.83-3.5 15.88-.77 31.75-1.53 47.63-2.28 6.89-.32 15.91-1.26 22.67-1.01 30.52 1.15 115.09 65.42 144.29 84.43 6.07 3.95 10.09 7.66 12.34 11.21l54.99-2.62c3.5-.17 6.48 2.54 6.64 6.04.16 3.5-2.54 6.48-6.04 6.64l-54.83 2.61c-2.7 5.23-8.97 10.29-17.63 15.51-153.19 92.57-311.35 176.53-466.07 266.48l-1.57 69.96c-.07 3.04-2.97 5.46-6.47 5.39-3.5-.06-6.29-2.58-6.22-5.61l1.59-70.92c-5.18-3.59-10.24-7.34-15.43-10.91-32.55-22.43-65.11-44.51-98.8-65.22-18.85-11.6-87.92-15.63-112.75-19.27z\"/><path class=\"ChangeName-19\" d=\"M4131.67 962.61l-22.05 25.07c-10.17 12.39-10.22 13.83 2.26 13.29l19.64-.85c51.2-2.14 156.66-13.87 202.54-8.65 13.55 1.53 49.46 16.1 62.05 21.56 57.3 24.87 120.52 58.61 173.45 91.87 27.65 17.38 48.56 31.8 66.58 59.2 7.53 11.45 14.83 22.98 22.08 34.6 16.98 27.22 29.41 44.03-5.77 64.45-7.29 4.24-14.59 8.47-21.88 12.71-46.36 26.93-92.76 53.77-139.3 80.41-61.34 35.13-122.87 69.93-184.19 105.08-52.15 29.9-105.6 62.18-159.5 88.59-26.4 12.94-55.01 25.35-84.82 26.43-25.08.91-46.94-6.29-70.19-14.97-36.64-13.69-72.26-31.8-108.29-47.17-15.97-6.82-44.43-17.42-56.66-29.66-24.89-24.89.35-64.96 14.47-88.95-18.24 24.54-45 62.28-46.15 78.23-.78 10.83 2.2 21.91 8.36 30.86 7.72 11.22 21.24 18.52 33.11 24.49 24.04 12.09 49.91 22.42 75.24 32.96 27.22 12.7 55.26 26.27 83.4 36.68 19.14 7.07 36 11.39 56.43 10.94 17.87-.4 38.03-3.68 55.24-8.25 1.27-.34 2.54-.69 3.8-1.07 7.94-2.41 15.69-6.41 23.04-10.2 21.72-11.21 43.23-23.22 64.7-34.93 117.08-63.86 234.34-127.37 351.27-191.53 31.16-17.1 61.91-34.93 92.78-52.55 29.79-17.01 59.09-34.09 86.74-54.48 39.12-28.84 76.82-63.7 113.54-95.62 66.3-57.63 132.94-114.89 199.56-172.15 43.74-37.6 87.43-75.53 131.87-112.31 23.48-19.43 46.01-37.43 72.9-51.94 34.63-18.7 74.72-33.73 111.22-48.51 60.92-24.66 122.49-48.93 182.7-75.2 5.68-2.48 46.81-21.17 48.36-28.09 2.36-11.2-26.39-30.29-63.34-51.86 5 4.53 9.05 9.2 11.35 13.88 13.63 27.66-22.82 42.9-42.06 51.58-47.64 21.48-98.12 39.61-146.7 59.18-34.69 13.99-69.12 29.67-103.87 43.16-15.53 6.04-32.48 12.42-44.1-4.05-6.38-9.03-12.17-23.07-16.94-33.15-9.19-19.45-19.49-41.53-31.71-59.21-14.74-21.33-40.78-32.45-63.43-43.52-75.87-37.09-153.21-75.38-229.31-110.47-19.91-9.18-16.37-8.74-38.95-7.87-59.15 2.3-214.07 13.31-243.78 16.28-9.07.91-35.32 2.91-41.98 10.32-4.05 4.5-7.71 16.85-9.8 22.61-4.02 11.11-6.21 22.65-10.38 33.74 26.99-24.88 42.22-31.73 82.17-38.35 51.76-8.58 107.19-13.13 159.59-17.09 47.99-3.62 60.64-.1 105.53 19.74 61.87 27.34 124.84 57.88 184.8 89.18 28.71 14.99 55.39 27.67 74.52 54.5 13.01 18.24 25.64 39.99 35.83 59.95 8.24 16.15 13.46 28.83 3.89 45.77-7.89 13.96-23.57 29.27-34.81 40.88l-.43.44-.47.41c-119.87 102.89-237.02 207.52-355.55 311.79-21.37 18.8-46.44 47.96-65.61 10.67-11.48-22.33-22.21-45.15-34.3-67.14-14.05-25.58-36.41-35.94-61.31-50.61-62.65-36.91-126.95-72.14-190.91-107.24-42.65-23.41-34.09-23.75-82.48-20.47l-193.05 13.09c-3.35.16-8.83 1.01-10.94 3.54zM4422.4 285.99l-112.54-35.46c-11.45-3.61-30.18-10.44-42.16-6.17l-124.58 44.41c-11.92 4.25-13.09 8.34 2.47 20.13l84.87 64.58c.99-1 1.97-1.97 2.94-2.92 20.18-19.82 36.05-30.13 84.27-48.31 26.78-10.1 63.53-22.63 104.72-36.25z\"/><path class=\"ChangeName-19\" d=\"M4017.02 1024.62c100.48-87.57 189.62-154.26 251.37-198.72 38.75-27.9 66.72-47.05 90.66-62.93 38.32-39.82 75.28-78.74 98.86-103.93-10.62 4.78-24.19 10.98-43.86 21.99-20.65 11.55-47.88 28.34-85.16 54.14-37.95 26.25-86.45 61.95-137.22 100.86-49.39 37.86-100.74 78.6-146.35 116.47-46.45 38.55-87.19 74.3-125.08 108.64-125.23 113.48-248.43 218.95-377.26 335.7-1.38 1.25-7.27 6.45-7.19 8.52l1.3 36 209.54-164.34c93.65-90.62 186.02-178.87 270.39-252.4z\"/><path class=\"ChangeName-19\" d=\"M3918.29 893.25c102.84-88.02 205.68-176.04 263.73-224.43 58.04-48.39 71.29-57.14 107.78-71.06 36.49-13.93 96.22-33.01 157.18-52.09 60.96-19.09 123.16-38.18 217.58-68.72 87.2-28.21 201.9-66.18 318.69-104.9l-43.12-7.58c-170.42 61.31-336.59 108.63-511.89 161.16l-.12.04-193.83 62.03c-11.77 4.35-44.54 31.59-54.94 40.05-32.96 26.82-65.17 54.82-97.1 82.85-30.3 26.6-60.39 53.44-90.47 80.3-37.6 33.57-74.37 63-110.26 97.37l6.91 184.75c7.64-7.02 15.4-14.1 23.31-21.27l5.97-5.4c.19-51.03.39-102.06.58-153.09zM5232.16 500.45c228.58-64.05 457.17-128.11 685.75-192.16l-19.43-4.91c-14.93-3.77-30.17-6.14-45.11-1.2l-124.55 41.2-620.02 163.88c46.13-3.25 89.97-5.89 123.35-6.81z\"/><g><path class=\"ChangeName-28\" d=\"M6058.12 1814.96a5.085 5.085 0 0 1 .6-7.16 5.085 5.085 0 0 1 7.16.6l98.94 116.94-89.7 119.12-1.33 103.42a5.07 5.07 0 0 1-10.14-.12l1.35-105.09 1.01-2.98 85.82-113.97-93.71-110.75z\"/><path class=\"ChangeName-28\" d=\"M6071.44 2037.83c2.7.76 4.28 3.57 3.52 6.27a5.088 5.088 0 0 1-6.27 3.52l-145.51-41.09a5.088 5.088 0 0 1-3.52-6.27c.76-2.7 3.57-4.28 6.27-3.52l145.51 41.09zM6156.7 1930.33c-2.66-.89-4.08-3.79-3.18-6.44.9-2.65 3.79-4.08 6.44-3.18l45.79 15.66c2.65.9 4.08 3.79 3.18 6.44-.89 2.65-3.79 4.08-6.44 3.18l-45.79-15.66z\"/></g><g><path class=\"ChangeName-28\" d=\"M4903.46 89.09c-2.91-1.94-3.69-5.89-1.74-8.8a6.343 6.343 0 0 1 8.8-1.74l466.15 311.21c2.91 1.95 3.68 5.89 1.74 8.8-1.95 2.91-5.89 3.68-8.8 1.74L4903.46 89.08zM6494.93 593.09a6.355 6.355 0 0 1-7.16-5.42 6.355 6.355 0 0 1 5.42-7.16l1122.26-154.94a6.355 6.355 0 0 1 7.16 5.42 6.355 6.355 0 0 1-5.42 7.16L6494.93 593.09zM6447.17 198.65c2.3-2.64 6.31-2.9 8.95-.6 2.64 2.3 2.9 6.31.6 8.95l-175.14 200.06c-2.3 2.64-6.31 2.9-8.95.6-2.64-2.3-2.9-6.31-.6-8.95l175.14-200.06zM7780.64 1112.99a5.075 5.075 0 0 1 .68-7.11c2.15-1.79 5.36-1.5 7.14.66l.08.09c3.39 4.21 6.78 8.42 9.82 10.11 2.42 1.35 6.15 1.36 174.33 1.42l57.92.02c226.61.11 675.68.57 1124.75 1.01l.06-.02c2.81 0 5.09 2.28 5.09 5.09s-2.28 5.09-5.09 5.09h-.06c-449.07-.46-898.14-.92-1124.75-1.03l-57.92-.03c-170.77-.06-174.56-.07-179.26-2.69-4.79-2.67-8.8-7.65-12.8-12.62z\"/><path class=\"ChangeName-9\" d=\"M6671.33 430.92L5372.39 850.94c-34.75 11.23-42.91 11.38-65.92 39.44l-324.4 396.63c-21.57 26.39-29.48 41.09-44.11 71.88l-544.85 1146.83\"/><path class=\"ChangeName-28\" d=\"M6705.72 413.53c2.58-.92 5.42.42 6.34 3.01.92 2.58-.42 5.42-3.01 6.34l-1346.2 480.28c-6.44 2.29-11.17 4.48-15.32 7.32-4.16 2.85-7.9 6.47-12.35 11.63l-388.9 437.3c-6.85 7.7-7.52 9.28-11.14 17.83l-.74 1.76c-78.57 185.15-154.46 371.32-230.34 557.49-77.38 189.83-154.76 379.68-235.99 570.76a4.963 4.963 0 0 1-6.49 2.62 4.963 4.963 0 0 1-2.62-6.49c80.8-190.06 158.36-380.34 235.91-570.61 75.49-185.2 150.99-370.42 230.42-557.62l.74-1.76c4.2-9.9 4.98-11.73 12.84-20.57l388.86-437.24c5.01-5.79 9.3-9.92 14.21-13.28 4.92-3.38 10.34-5.9 17.57-8.48l1346.2-480.29z\"/></g></g><g id=\"WING_CANNON_1\"><path class=\"ChangeName-0\" d=\"M2584.4 3721.27c13.65 7.38 28.97 12.79 44.67 12.18 16.2-.63 30.54-10.16 43.62-18.83L4460.8 2528.98l34.32-349.11-156.28-74.61L2445.6 3181.54c-30.43 17.29-45.83 21.14-41.99 59.32l32.6 324.07c2.1 20.9 1.46 60.37 20.68 72.94l127.52 83.4z\"/><path class=\"ChangeName-19\" d=\"M2775.96 3632.17L4449.82 2522.3l32.99-335.55-143.35-68.43-1783.22 1013.73 110.56 69.03 2.84 3.9 106.34 427.19zm1358.29-1138.75l28.09-19.46c12.25-8.48 24.77-5.41 25.14 11.41l3.47 161.02c.19 9.11-.86 16.29-7.78 22.85-9.06 8.59-19.69 14.31-29.47 21.68-10.13 7.64-19.32-4.26-19.94-13.81l-10.8-166.26c-.5-7.77 5.45-13.38 11.29-17.42zm-125.46 71.45l28.09-19.46c12.25-8.48 24.77-5.41 25.14 11.4l3.47 161.02c.19 9.11-.86 16.29-7.78 22.86-9.06 8.59-19.69 14.3-29.47 21.68-10.13 7.64-19.32-4.26-19.94-13.81l-10.8-166.26c-.5-7.76 5.45-13.38 11.29-17.42zm-134.73 87.38l28.1-19.46c12.25-8.48 24.77-5.41 25.14 11.41l3.47 161.02c.19 9.11-.86 16.29-7.78 22.85-9.07 8.59-19.69 14.31-29.47 21.68-10.13 7.64-19.32-4.26-19.94-13.81l-10.8-166.26c-.5-7.77 5.45-13.38 11.28-17.42z\"/><path class=\"ChangeName-30\" d=\"M2590.21 3711.34c11.65 6.24 24.91 11.07 38.24 10.55 5.05-.19 10.08-1.61 14.97-3.67l-111.82-420.18a6.304 6.304 0 0 1 4.53-7.72c3.39-.87 6.86 1.19 7.76 4.59l111.05 417.32c3.97-2.39 7.76-4.94 11.26-7.27l98.55-65.35-106.84-429.17-114.18-71.29-92.31 52.48c-6.33 3.6-19.71 10.47-27.93 16.98l103.1 60.88c3.03 1.78 4.07 5.68 2.31 8.69-1.76 3.02-5.65 4.03-8.68 2.25l-104.44-61.67c-1.94 6.58-1.25 15.39-.68 21.12l32.6 324.07c1.53 15.23 1.74 55.34 15.4 64.27l127.1 83.12zm-128.47-448.18c6.68 3.1 14.72 7.15 22.14 11.62 5.9 3.55 11.51 7.43 15.92 11.37 5.33 4.79 8.93 9.63 12.66 18.1 3.47 7.86 7.09 19.05 12.59 36.89 8.2 26.56 19.93 65.62 32.51 107.52l29.63 98.45c11.82 39.2 22.28 73.87 29.24 97.65 4.64 15.9 7.25 25.39 8.44 31.25 1.55 7.69.85 10.96-1.25 13.39-2.45 2.83-5.85 3.9-12.96 1.41-4.78-1.67-12.29-5.29-24.44-11.89-11.61-6.3-27.78-15.51-43.96-24.94-16.92-9.87-33.61-19.82-45-26.89-11.76-7.3-18.64-12-23.07-16.4-4.94-4.89-6.8-9.17-8.33-15.42-2.33-9.53-3.8-23.92-7.78-62.88l-12.41-119.16-11.19-104.53c-4.5-41.17-5.17-47.28.29-50.88 2.91-1.9 6.88-1.99 11.99-.6 4.01 1.1 8.98 3.13 14.97 5.91zm6.87 14.66l43.49 305.35 92.45 57.1c-6.36-21.53-16.18-54.08-27.11-90.29l-29.63-98.49c-12.87-42.87-24.87-82.84-32.47-107.44-5.36-17.38-8.88-28.26-12.19-35.78-3.05-6.91-5.92-10.8-10.12-14.58-3.9-3.49-8.95-6.98-14.33-10.21-3.33-2.01-6.75-3.91-10.1-5.67zm139.97 376.21l-101.25-61.9-23.68 13.49c3.9 3.27 9.84 7.2 18.92 12.83 11.87 7.38 28.43 17.27 44.75 26.78 15.95 9.3 31.99 18.42 43.68 24.77 3.46 1.89 25.99 18.06 23.93 7.96-1.15-5.62-1.82-8.39-6.36-23.93zm-131.38-56.46l24.7-14.07-44.32-311.11-.04-.02c-5.54-2.55-8.14-3.82-11.49-4.74-5.17-1.43-5.93-1.66-5.34 4.33.53 5.44 1.7 15.94 3.9 35.77l11.19 104.55 12.41 119.16c3.93 38.47 5.38 52.68 7.54 61.53.42 1.72.87 3.22 1.46 4.6zM4138.37 2499.34l28.1-19.46c6.03-4.18 13.57-6.58 13.83 5.58l3.47 161.02c.15 7.12-.29 12.53-5.56 17.53-8.06 7.63-25.38 18.54-28.86 21.16-4.41 3.32-8.12-3.86-8.42-8.48l-10.09-155.22-.71-11.04c-.29-4.63 4.44-8.47 8.24-11.09zM4012.91 2570.79l28.1-19.46c6.03-4.18 13.57-6.58 13.83 5.59l3.47 161.02c.15 7.12-.29 12.53-5.56 17.52-8.06 7.63-25.38 18.54-28.86 21.16-4.41 3.32-8.12-3.86-8.42-8.48l-10.09-155.22-.71-11.04c-.29-4.63 4.44-8.46 8.24-11.09zM3878.18 2658.17l28.1-19.46c6.04-4.18 13.57-6.58 13.83 5.58l3.47 161.02c.15 7.12-.3 12.53-5.56 17.53-8.06 7.63-25.39 18.54-28.86 21.16-4.41 3.32-8.12-3.86-8.41-8.48l-10.09-155.22-.71-11.04c-.29-4.63 4.44-8.47 8.23-11.09z\"/><path class=\"ChangeName-28\" d=\"M2549.12 3278.93c-3.05 1.73-6.93.66-8.65-2.39-1.73-3.05-.66-6.93 2.39-8.65l1877.23-1070.06c3.05-1.73 6.93-.66 8.65 2.39 1.72 3.04.66 6.93-2.39 8.65L2549.13 3278.93z\"/></g></svg>";
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
        // toast.onDidDismiss(() => {
        //   console.log("Dismissed toast")
        // })
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
            console.log("requesting my ships");
            this.getMyShips();
        }
    };
    AppState.prototype.getMyShips = function () {
        var _this = this;
        var address = "/api/v1/ships?address=" + encodeURI(this.account);
        io.socket.get(address, function (data) {
            if (typeof data == "string") {
            }
            else {
                _this.ships = data;
                console.log("got my ships", data);
            }
        });
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
                    _this.ships = null;
                    _this.getMyShips();
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

},[195]);
//# sourceMappingURL=main.js.map