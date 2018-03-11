webpackJsonp([6],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinePageModule", function() { return CombinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combine__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CombinePageModule = (function () {
    function CombinePageModule() {
    }
    CombinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__combine__["a" /* CombinePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__combine__["a" /* CombinePage */])]
        })
    ], CombinePageModule);
    return CombinePageModule;
}());

//# sourceMappingURL=combine.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombinePage; });
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


/**
 * Generated class for the CombinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CombinePage = (function () {
    function CombinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = false;
        this.searchTerm = "";
        this.data = [
            {
                id: "55",
                name: "Name",
                text: "Text",
                img: "/assets/imgs/weapons/Black Hole Missile.png"
            },
            {
                id: "657237",
                name: "Name2",
                text: "Text2",
                img: "/assets/imgs/weapons/Black Hole Missile.png"
            },
            {
                id: "11",
                name: "Name3",
                text: "Text3",
                img: "/assets/imgs/weapons/Black Hole Missile.png"
            },
            {
                id: "123",
                name: "Name",
                text: "Text",
                img: "/assets/imgs/weapons/Black Hole Missile.png"
            },
            {
                id: "532324",
                name: "Name2",
                text: "Text2",
                img: "/assets/imgs/weapons/Black Hole Missile.png"
            },
            {
                id: "523442",
                name: "Name",
                text: "Text",
                img: "/assets/imgs/weapons/Black Hole Missile.png"
            },
            {
                id: "11",
                name: "Name2",
                text: "Text2",
                img: "/assets/imgs/weapons/Black Hole Missile.png"
            }
        ];
        this.setFilteredItems();
    }
    CombinePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CombinePage");
    };
    CombinePage.prototype.filterItems = function (searchTerm) {
        var result = this.data.filter(function (item) {
            return item.id.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
        var result2 = this.data.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
        result = result.concat(result2);
        function removeDuplicatesBy(keyFn, array) {
            var mySet = new Set();
            return array.filter(function (x) {
                var key = keyFn(x), isNew = !mySet.has(key);
                if (isNew)
                    mySet.add(key);
                return isNew;
            });
        }
        return removeDuplicatesBy(function (x) { return x.id; }, result);
    };
    CombinePage.prototype.setFilteredItems = function () {
        this.items = this.filterItems(this.searchTerm);
    };
    CombinePage.prototype.reorderItems = function (e) {
        console.log(e);
    };
    CombinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-combine",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\combine\combine.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n\n<ion-content no-padding>\n  <ion-grid class="contentRoom">\n    <ion-spinner *ngIf="loading" class="abs-center">\n    </ion-spinner>\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()">\n    </ion-searchbar>\n    <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n      <ion-item *ngFor="let ship of items" class="selectionList">\n        <ion-thumbnail item-start>\n          <img [src]="ship.img">\n        </ion-thumbnail>\n        <h2>{{ship.id}}</h2>\n        <p>{{ship.name}}</p>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n\n\n  <footer-component></footer-component>\n</ion-content>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\combine\combine.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], CombinePage);
    return CombinePage;
    var _a, _b;
}());

//# sourceMappingURL=combine.js.map

/***/ })

});
//# sourceMappingURL=6.js.map