webpackJsonp([6],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- import the module

var GamePageModule = (function () {
    function GamePageModule() {
    }
    GamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */])
            ]
        })
    ], GamePageModule);
    return GamePageModule;
}());

//# sourceMappingURL=game.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamePage = (function () {
    function GamePage(navCtrl, navParams, appState, menuCtrl, events, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appState = appState;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.sanitizer = sanitizer;
        this.gameLoaded = false;
        this.msgs = [];
        this.noAccount = false;
        this.showChat = false;
        this.chatConnected = false;
        this.loadingStyle = this.sanitizer.bypassSecurityTrustStyle("inset(0 100% 0 0)");
        this.selectLoad = false;
        this.showSelect = false;
        this.userName = "TestUser" + Math.random() * 10;
        this.isFullscreen = false;
        // io.socket.on("chatmessage", msg => {
        //   this.msgs.push(msg.data)
        // })
        this.getShips();
    }
    GamePage.prototype.getShips = function () {
        var _this = this;
        this.selectLoad = true;
        console.log("getting io");
        io.socket.get("/api/v1/ships?address=" + encodeURI(this.appState.account), {}, function (data) {
            console.log(data);
            _this.selectLoad = false;
            if (data.length > 0) {
                // data.forEach(ship => {
                //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
                // })
                _this.ships = data;
            }
        });
    };
    GamePage.prototype.shipSelect = function () {
        // return window["ShowSelect"]
    };
    GamePage.prototype.mouseVisible = function () {
        return !document.pointerLockElement;
    };
    GamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad GamePage");
        this.loadGame();
        this.events.subscribe("account:changed", function (account) {
            setTimeout(function () {
                _this.loadGame();
            }, 0);
        });
    };
    // public loadingStyle() {
    //   return this.sanitizer.bypassSecurityTrustStyle("inset(0 74% 0 0)")
    // }
    GamePage.prototype.leaveRoom = function () {
        var _this = this;
        io.socket.post("/api/v1/chat/leave", { room: this.room }, function () {
            _this.room = null;
            _this.chatConnected = false;
        });
    };
    GamePage.prototype.joinRoom = function (room) {
        var _this = this;
        console.log("join room000");
        io.socket.post("/api/v1/chat/join", { room: room }, function () {
            console.log("joined room " + room);
            _this.room = room;
            _this.chatConnected = true;
            _this.msgs.push({
                text: 
                // (this.appState.username || this.appState.account.substring(0, 5)) +
                _this.userName + " connected to chat"
            });
            if (!_this.listening) {
                _this.listening = true;
                io.socket.on("message", function (message) {
                    if (message) {
                        console.log("gotmsg", message);
                        _this.msgs.push(message);
                    }
                    else {
                        console.log("why");
                    }
                });
            }
        });
    };
    GamePage.prototype.ionViewDidEnter = function () {
        console.log(this.appState.account);
        this.chatcontent.scrollToBottom(1000); //300ms animation speed
        // io.socket.get("/api/chatMessage", body => {
        //   this.msgs = body
        // })
    };
    GamePage.prototype.ionViewWillLeave = function () {
        console.log("view leaving");
        // this.goFull(false)
    };
    GamePage.prototype.ionViewWillUnload = function () {
        console.log("view unloaded");
    };
    GamePage.prototype.loadGameServices = function () {
        var _this = this;
        window["UnityProgress"] = function (gameInstance, progress) {
            var calc = 100 - progress * 100;
            if (calc == 0) {
                _this.gameLoaded = true;
                // console.log("NAME: " + this.appState.username || this.appState.account);
                // console.log(this.appState.username);
                window["gameInstance"].SendMessage("Web3(Clone)", "SetDisplayName", _this.appState.username || _this.userName
                //  || (this.appState.account && this.appState.account.substring(0, 5))
                );
            }
            console.log("in ionc=", progress, calc);
            _this.loadingStyle = _this.sanitizer.bypassSecurityTrustStyle("inset(0 " + calc + "% 0 0)");
        };
        window.addEventListener("room", function (e) {
            if (e.detail.join) {
                _this.joinRoom(e.detail.room);
            }
            else {
                if (_this.room) {
                    _this.leaveRoom();
                }
            }
        });
        window.addEventListener("show-select", function (e) {
            _this.showSelect = e.detail;
        });
    };
    GamePage.prototype.loadGame = function () {
        // console.log(document.getElementById("gameContainer"))
        if (!window["gameInstance"]) {
            this.loadGameServices();
            window["gameInstance"] = window["UnityLoader"].instantiate("gameContainer", "/game/Build/unitywebDemo.json", { onProgress: window["UnityProgress"] });
            var canvas = document.getElementById("#canvas");
            canvas.tabIndex = 1;
        }
        else {
            console.log("already loaded");
        }
    };
    GamePage.prototype.send = function (key) {
        var _this = this;
        if (key == 13) {
            if (this.chatConnected && this.room) {
                // console.log("msg: ", this.msg)
                var msg = {
                    username: this.appState.username || this.userName,
                    // || this.appState.account.substring(0, 5),
                    account: this.appState.account,
                    text: this.msg
                };
                // this.msgs.push(msg)
                // io.socket.post("/api/chatMessage", msg, res => {})
                io.socket.post("/api/v1/chat/send", { data: msg, room: this.room });
                this.msg = "";
                setTimeout(function () {
                    _this.chatcontent.scrollToBottom(300); //300ms animation speed
                }, 50);
            }
            else {
                this.msg = "";
            }
        }
    };
    GamePage.prototype.goFull = function (shouldRevert) {
        if (shouldRevert === void 0) { shouldRevert = true; }
        var canvaswindow = document.getElementById("canvaswindow");
        var canvasfull = document.getElementById("canvasfull");
        while (canvaswindow.childNodes.length > 0) {
            canvasfull.appendChild(canvaswindow.childNodes[0]);
        }
        // document.getElementsByName("canvas")[0].webkitRequestFullScreen()
        window["gameInstance"].SetFullscreen(1);
        if (shouldRevert) {
            this.isFullscreen = true;
            var inter_1 = setInterval(function () {
                console.log(1 >= outerHeight - innerHeight);
                if (1 < outerHeight - innerHeight) {
                    while (canvasfull.childNodes.length > 0) {
                        canvaswindow.appendChild(canvasfull.childNodes[0]);
                    }
                    clearInterval(inter_1);
                }
            }, 100);
        }
    };
    GamePage.prototype.toggleChat = function () {
        this.showChat = !this.showChat;
        this.content.resize();
        // if (this.msgs.length > 0) {
        //   setTimeout(() => {
        //     let m = this.msgs.pop() //hack to fix chat width
        //     setTimeout(() => {
        //       this.msgs.push(m)
        //     }, 0)
        //   }, 20)
        // } else {
        //   // setTimeout(() => {
        //   //   this.msgs.push({ username: "", text: "" }) //hack to fix chat width
        //   //   setTimeout(() => {
        //   //     this.msgs.pop()
        //   //   }, 0)
        //   // }, 20)
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("chatcontent"),
        __metadata("design:type", Object)
    ], GamePage.prototype, "chatcontent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]) === "function" && _a || Object)
    ], GamePage.prototype, "content", void 0);
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-game",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\game\game.html"*/'<ion-split-pane [when]="showChat">\n  <ion-header #head> <ion-navbar> </ion-navbar> </ion-header>\n  <header-component></header-component>\n  <ion-content no-padding #content>\n    <!--\n      <div *ngIf="!appState.account">Ethereum account required to play. {{appState.accountStatus}}</div>\n    -->\n    <div *ngIf="appState">\n      <div\n        class="chatbutton"\n        (click)="toggleChat()"\n        *ngIf="mouseVisible() && gameLoaded"\n        tappable\n      ></div>\n\n      <div *ngIf="!gameLoaded">\n        <img src="/assets/imgs/loading-grey.png" class="load-img load-grey" />\n        <img\n          src="/assets/imgs/loading-pink.png"\n          class="load-img load-pink"\n          [style.clip-path]="loadingStyle"\n        />\n      </div>\n\n      <div id="canvaswindow">\n        <div class="webgl-content" id="canvaswrapper">\n          <div id="gameContainer"></div>\n          <div class="footer">\n            <div class="fullscreen" (click)="goFull()"></div>\n          </div>\n        </div>\n      </div>\n      <!--\n        <ion-grid>\n          <ion-row>\n            <ion-col col-4>\n            </ion-col>\n            <ion-col col-4>\n            </ion-col>\n            <ion-col col-4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      -->\n    </div>\n\n    <div class="shipSelect abs-center" *ngIf="showSelect">\n      <ion-spinner *ngIf="!ships" class="abs-center"> </ion-spinner>\n      <div class="contentRoom">\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ship-select\n              *ngFor="\n                let ship of (ships\n                  | paginate: { itemsPerPage: 8, currentPage: p })\n              "\n              ion-col\n              col-12\n              col-xl-3\n              col-lg-3\n              col-md-4\n              col-sm-6\n              [ship]="ship"\n            ></ship-select>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <ion-row ion-col col-12 class="select-footer">\n        <pagination-controls\n          *ngIf="ships"\n          previousLabel=""\n          nextLabel=""\n          class="ship-pagination"\n          (pageChange)="p = $event"\n        ></pagination-controls>\n      </ion-row>\n    </div>\n  </ion-content>\n\n  <ion-menu\n    side="right"\n    type="push"\n    [content]="content"\n    [ngClass]="{ moveMenu: \'showChat\' }"\n  >\n    <ion-header>\n      <ion-toolbar> <ion-title>Menu</ion-title> </ion-toolbar>\n    </ion-header>\n\n    <ion-footer>\n      <ion-input\n        placeholder="Send a message"\n        [(ngModel)]="msg"\n        (keypress)="send($event.keyCode)"\n      ></ion-input>\n    </ion-footer>\n\n    <ion-content #chatcontent ion-scroll>\n      <ion-row *ngIf="!chatConnected">\n        <ion-col col-12> <p>Waiting to join a game lobby</p> </ion-col>\n        <ion-spinner ion-col col-12> </ion-spinner>\n        <div class="swapping-squares-spinner" :style="spinnerStyle">\n          <div class="square"></div>\n          <div class="square"></div>\n          <div class="square"></div>\n          <div class="square"></div>\n        </div>\n      </ion-row>\n      <ion-list no-lines class="chatbox" *ngIf="chatConnected">\n        <ion-item *ngFor="let msg of msgs">\n          <a\n            [href]="\'/profile/\' + msg.account"\n            target="_blank"\n            class="username"\n            *ngIf="msg.username"\n            >{{ msg.username }}:</a\n          >\n          <span class="message" [ngClass]="{ boldChat: !msg.username }">{{\n            msg.text\n          }}</span>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n</ion-split-pane>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\game\game.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppState */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _g || Object])
    ], GamePage);
    return GamePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=game.js.map

/***/ })

});
//# sourceMappingURL=6.js.map