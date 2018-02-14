webpackJsonp([3],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_module__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GamePageModule = (function () {
    function GamePageModule() {
    }
    GamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_header_header_module__["a" /* HeaderComponentModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */])]
        })
    ], GamePageModule);
    return GamePageModule;
}());

//# sourceMappingURL=game.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(50);
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
    function GamePage(navCtrl, navParams, appState, menuCtrl, events) {
        // io.socket.on("chatmessage", msg => {
        //   this.msgs.push(msg.data)
        // })
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appState = appState;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.msgs = [];
        this.noAccount = false;
        this.showChat = false;
        this.chatConnected = false;
        this.isFullscreen = false;
        window.addEventListener("room", function (e) {
            _this.joinRoom(e.detail);
        });
    }
    GamePage.prototype.joinRoom = function (room) {
        var _this = this;
        io.socket.post("/api/v1/chat/join", { room: room }, function () {
            console.log("joined room " + room);
            _this.room = room;
            _this.chatConnected = true;
            io.socket.on("message", function (message) {
                console.log("gotmsg", message);
                _this.msgs.push(message);
                console.log(_this.msgs);
            });
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
    GamePage.prototype.loadGame = function () {
        // console.log(document.getElementById("gameContainer"))
        if (this.appState.account && !window["gameInstance"]) {
            window["gameInstance"] = window["UnityLoader"].instantiate("gameContainer", "/assets/game/Build/unitywebDemo.json", { onProgress: window["UnityProgress"] });
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
                    username: this.appState.account.substring(0, 5),
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
        var _this = this;
        this.showChat = !this.showChat;
        if (this.msgs.length > 0) {
            setTimeout(function () {
                var m = _this.msgs.pop(); //hack to fix chat width
                setTimeout(function () {
                    _this.msgs.push(m);
                }, 0);
            }, 20);
        }
        else {
            // setTimeout(() => {
            //   this.msgs.push({ username: "", text: "" }) //hack to fix chat width
            //   setTimeout(() => {
            //     this.msgs.pop()
            //   }, 0)
            // }, 20)
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("chatcontent"),
        __metadata("design:type", Object)
    ], GamePage.prototype, "chatcontent", void 0);
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-game",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\game\game.html"*/'<ion-split-pane [when]="showChat">\n  <ion-header #head>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n  <header-component></header-component>\n  <ion-content padding #content>\n\n    <div *ngIf="!appState.account">Ethereum account required to play. {{appState.accountStatus}}</div>\n    <div *ngIf="appState.account">\n\n      <div class="chatbutton" (click)="toggleChat()">\n      </div>\n      <div id="canvaswindow">\n        <div class="webgl-content" id="canvaswrapper">\n          <div id="gameContainer" style="width: 960px; height: 540px;"></div>\n          <div class="footer">\n            <div class="fullscreen" (click)="goFull()"></div>\n          </div>\n        </div>\n      </div>\n      <!-- <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n        </ion-col>\n        <ion-col col-4>\n        </ion-col>\n        <ion-col col-4>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    </div>\n  </ion-content>\n\n  <ion-menu side="right" type="push" [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-footer>\n      <ion-input placeholder="Send a message" [(ngModel)]="msg" (keypress)="send($event.keyCode)"></ion-input>\n    </ion-footer>\n\n    <ion-content #chatcontent ion-scroll>\n\n\n      <ion-row *ngIf="!chatConnected">\n        <ion-col col-12>\n          <p>Waiting to join a game lobby</p>\n        </ion-col>\n        <ion-spinner ion-col col-12>\n        </ion-spinner>\n      </ion-row>\n      <ion-list no-lines class="chatbox" *ngIf="chatConnected">\n        <ion-item *ngFor="let msg of msgs">\n          <span class="username">{{ msg.username }}:</span>\n          <span class="message">{{ msg.text }}</span>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n</ion-split-pane>'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\game\game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ })

});
//# sourceMappingURL=3.js.map