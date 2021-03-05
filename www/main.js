(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/LK1":
/*!*******************************************************************!*\
  !*** ./src/app/components/select-breed/select-breed.component.ts ***!
  \*******************************************************************/
/*! exports provided: SelectBreedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBreedComponent", function() { return SelectBreedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_select_breed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./select-breed.component.html */ "WF5D");
/* harmony import */ var _select_breed_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-breed.component.scss */ "CVQs");
/* harmony import */ var _services_breed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/breed.service */ "FtZL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_classes_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/classes/entity */ "ovWC");







let SelectBreedComponent = class SelectBreedComponent {
    constructor(breedService, _router) {
        this.breedService = breedService;
        this._router = _router;
        this.breedCollection = [];
    }
    ngOnInit() {
        this.loadBreeds();
    }
    loadBreeds() {
        var breedCollection1 = [];
        this.breedService.getAllBreeds().subscribe(data => {
            Object.entries(data.message).forEach(function (i, index) {
                breedCollection1.push(new src_app_classes_entity__WEBPACK_IMPORTED_MODULE_6__["Entity"](index, i[0]));
            });
        });
        this.breedCollection = breedCollection1;
    }
    submit() {
        this._router.navigate(['/slideshow'], { queryParams: { breed: this.breedSelected } });
    }
    selectChangeHandler(value) {
        this.breedSelected = value;
    }
};
SelectBreedComponent.ctorParameters = () => [
    { type: _services_breed_service__WEBPACK_IMPORTED_MODULE_3__["BreedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SelectBreedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-select-breed',
        template: _raw_loader_select_breed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_select_breed_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SelectBreedComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rick/dogs/src/main.ts */"zUnb");


/***/ }),

/***/ "2D3X":
/*!*****************************************!*\
  !*** ./src/app/services/dog.service.ts ***!
  \*****************************************/
/*! exports provided: DogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogService", function() { return DogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let DogService = class DogService {
    constructor(http) {
        this.http = http;
    }
    /**
    * @author : Ricardo Torres
    * @description : Method to get breeds from API
    * @returns : {undefined}
    */
    getAllDogs(breed) {
        var apiPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apidogs.replace("breedname", breed);
        return this.http.get(apiPath);
    }
};
DogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DogService);



/***/ }),

/***/ "2UAv":
/*!*****************************************************************!*\
  !*** ./src/app/directives/map-from-key-value-pipe.directive.ts ***!
  \*****************************************************************/
/*! exports provided: MapFromKeyValuePipeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapFromKeyValuePipeDirective", function() { return MapFromKeyValuePipeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let MapFromKeyValuePipeDirective = class MapFromKeyValuePipeDirective {
    transform(objArr) {
        console.log('obj array looks like this: ', objArr);
        let mappingObject = {};
        objArr.forEach((obj) => {
            for (let key in obj) {
                let value = obj[key];
                mappingObject[key] = value;
            }
        });
        return mappingObject;
    }
};
MapFromKeyValuePipeDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appMapFromKeyValuePipe]'
    })
], MapFromKeyValuePipeDirective);



/***/ }),

/***/ "4bA+":
/*!*********************************************************************!*\
  !*** ./src/app/components/slideshow-dog/slideshow-dog.component.ts ***!
  \*********************************************************************/
/*! exports provided: SlideshowDogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowDogComponent", function() { return SlideshowDogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_slideshow_dog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./slideshow-dog.component.html */ "R0L0");
/* harmony import */ var _slideshow_dog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow-dog.component.scss */ "kt2H");
/* harmony import */ var _services_dog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/dog.service */ "2D3X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_classes_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/classes/entity */ "ovWC");







let SlideshowDogComponent = class SlideshowDogComponent {
    constructor(_route, _dogService) {
        this._route = _route;
        this._dogService = _dogService;
        this.dogCollection = [];
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
        this.breed = this._route.snapshot.queryParamMap.get("breed");
        this.loadDogs();
    }
    loadDogs() {
        var breedCollection1 = [];
        this._dogService.getAllDogs(this.breed).subscribe(data => {
            Object.entries(data.message).forEach(function (i, index) {
                breedCollection1.push(new src_app_classes_entity__WEBPACK_IMPORTED_MODULE_6__["Entity"](index, i[0]));
            });
        });
    }
};
SlideshowDogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_dog_service__WEBPACK_IMPORTED_MODULE_3__["DogService"] }
];
SlideshowDogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-slideshow-dog',
        template: _raw_loader_slideshow_dog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slideshow_dog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SlideshowDogComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apibreeds: "https://dog.ceo/api/breeds/list/all",
    apidogs: "https://dog.ceo/api/breed/breedname/images",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CVQs":
/*!*********************************************************************!*\
  !*** ./src/app/components/select-breed/select-breed.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n   * Set the font of the first letter of the placeholder\n   * Shadow parts work with pseudo-elements, too!\n   * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n   */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGVjdC1icmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBQTtBQUNBO0VBQ0ksV0FBQTtFQUVBLHVCQUFBO0FBQUo7QUFHQSxnRUFBQTtBQUNBOztFQUVJLGNBQUE7QUFBSjtBQUdBLDBDQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0E7Ozs7SUFBQTtBQUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQSx1QkFBQTtBQUNBO0VBQ0ksY0FBQTtBQUFKO0FBR0EsbUNBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoic2VsZWN0LWJyZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xuaW9uLXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gICAgZmxleDogMCAwIGF1dG87XG59XG5cbi8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgICBjb2xvcjogIzIwYTA4YTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKlxuICAgKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcbiAgICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuICAgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICAgIGNvbG9yOiAjNTQ1Y2E3O1xufVxuXG4vKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICAgIGNvbG9yOiAjOTcxZTQ5O1xuICAgIG9wYWNpdHk6IDE7XG59Il19 */");

/***/ }),

/***/ "FtZL":
/*!*******************************************!*\
  !*** ./src/app/services/breed.service.ts ***!
  \*******************************************/
/*! exports provided: BreedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedService", function() { return BreedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let BreedService = class BreedService {
    constructor(http) {
        this.http = http;
    }
    /**
   * @author : Ricardo Torres
   * @description : Method to get breeds from API
   * @returns : {undefined}
   */
    getAllBreeds() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apibreeds);
    }
};
BreedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BreedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BreedService);



/***/ }),

/***/ "R0L0":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slideshow-dog/slideshow-dog.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides #slider pager=\"true\" [options]=\"slideOpts\" >\n  <ion-slide>\n    <h1>Slide 1</h1>\n  </ion-slide>\n  <ion-slide>\n    <h1>Slide 2</h1>\n  </ion-slide>\n  <ion-slide>\n    <h1>Slide 3</h1>\n  </ion-slide>\n</ion-slides>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Dogs Gallery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <ion-router-outlet></ion-router-outlet>\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-title>Demo consuming Dog API</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n</ion-app>\n\n");

/***/ }),

/***/ "WF5D":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-breed/select-breed.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item>\n  <ion-label>Select Breed</ion-label>\n  <ion-select placeholder=\"Select Breed\" #breeds (ionChange)=\"selectChangeHandler(breeds.value)\">\n    <ion-select-option *ngFor=\"let item of breedCollection\" [value]=\"item.value\">\n      {{ item.value }}\n    </ion-select-option>\n  </ion-select>\n</ion-item>\n<ion-button color=\"primary\" (click)=\"submit()\">Submit</ion-button>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_slideshow_dog_slideshow_dog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slideshow-dog/slideshow-dog.component */ "4bA+");
/* harmony import */ var _components_select_breed_select_breed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select-breed/select-breed.component */ "/LK1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _directives_map_from_key_value_pipe_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/map-from-key-value-pipe.directive */ "2UAv");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_select_breed_select_breed_component__WEBPACK_IMPORTED_MODULE_2__["SelectBreedComponent"],
            _components_slideshow_dog_slideshow_dog_component__WEBPACK_IMPORTED_MODULE_1__["SlideshowDogComponent"],
            _directives_map_from_key_value_pipe_directive__WEBPACK_IMPORTED_MODULE_10__["MapFromKeyValuePipeDirective"]
        ],
        entryComponents: [
            _components_select_breed_select_breed_component__WEBPACK_IMPORTED_MODULE_2__["SelectBreedComponent"],
            _components_slideshow_dog_slideshow_dog_component__WEBPACK_IMPORTED_MODULE_1__["SlideshowDogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kt2H":
/*!***********************************************************************!*\
  !*** ./src/app/components/slideshow-dog/slideshow-dog.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXNob3ctZG9nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ovWC":
/*!***********************************!*\
  !*** ./src/app/classes/entity.ts ***!
  \***********************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
class Entity {
    constructor(id, value) {
        this.id = id;
        this.value = value;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_slideshow_dog_slideshow_dog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slideshow-dog/slideshow-dog.component */ "4bA+");
/* harmony import */ var _components_select_breed_select_breed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select-breed/select-breed.component */ "/LK1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: 'selectbreed', component: _components_select_breed_select_breed_component__WEBPACK_IMPORTED_MODULE_2__["SelectBreedComponent"] },
    { path: 'slideshow', component: _components_slideshow_dog_slideshow_dog_component__WEBPACK_IMPORTED_MODULE_1__["SlideshowDogComponent"] },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map