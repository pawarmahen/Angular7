(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"topsection\">\r\n<app-header></app-header>\r\n</div>\r\n\r\n<div class=\"maindiv\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<footer>\r\n  <app-footer></app-footer>\r\n</footer>\r\n \r\n "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0; }\n\nbody {\n  font-family: 'Josefin Sans', sans-serif; }\n\n.topsection {\n  width: 100%;\n  height: auto; }\n\n.maindiv {\n  width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXE1haGVuZHJhIFdvcmtzcGFjZVxcT2xkIGJhY2t1cFxcR2l0UmVwb1xcQW5ndWxhcjcvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUVWO0VBQ0MsdUNBQXVDLEVBQUE7O0FBRXhDO0VBQ0MsV0FBVTtFQUNQLFlBQVcsRUFBQTs7QUFFZjtFQUNDLFdBQVU7RUFDUCxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcbmJvZHkge1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4udG9wc2VjdGlvbiB7XHJcblx0d2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcbi5tYWluZGl2IHtcclxuXHR3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbn1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'routing-demo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/product/product.component */ "./src/app/main/product/product.component.ts");
/* harmony import */ var _main_support_support_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/support/support.component */ "./src/app/main/support/support.component.ts");
/* harmony import */ var _main_clients_clients_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/clients/clients.component */ "./src/app/main/clients/clients.component.ts");
/* harmony import */ var _main_careers_careers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/careers/careers.component */ "./src/app/main/careers/careers.component.ts");
/* harmony import */ var _main_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/contacts/contacts.component */ "./src/app/main/contacts/contacts.component.ts");
/* harmony import */ var _design_slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./design/slider/slider.component */ "./src/app/design/slider/slider.component.ts");
/* harmony import */ var _design_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./design/header/header.component */ "./src/app/design/header/header.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _design_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./design/home-cards/home-cards.component */ "./src/app/design/home-cards/home-cards.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _design_work_with_us_work_with_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./design/work-with-us/work-with-us.component */ "./src/app/design/work-with-us/work-with-us.component.ts");
/* harmony import */ var _design_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./design/footer/footer.component */ "./src/app/design/footer/footer.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _main_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                _main_support_support_component__WEBPACK_IMPORTED_MODULE_9__["SupportComponent"],
                _main_clients_clients_component__WEBPACK_IMPORTED_MODULE_10__["ClientsComponent"],
                _main_careers_careers_component__WEBPACK_IMPORTED_MODULE_11__["CareersComponent"],
                _main_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"],
                _design_slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderComponent"],
                _design_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _design_home_cards_home_cards_component__WEBPACK_IMPORTED_MODULE_16__["HomeCardsComponent"],
                _design_work_with_us_work_with_us_component__WEBPACK_IMPORTED_MODULE_18__["WorkWithUsComponent"],
                _design_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    {
                        path: 'home',
                        component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                    },
                    {
                        path: 'products',
                        component: _main_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"]
                    },
                    {
                        path: 'support',
                        component: _main_support_support_component__WEBPACK_IMPORTED_MODULE_9__["SupportComponent"]
                    },
                    {
                        path: 'clients',
                        component: _main_clients_clients_component__WEBPACK_IMPORTED_MODULE_10__["ClientsComponent"]
                    },
                    {
                        path: 'careers',
                        component: _main_careers_careers_component__WEBPACK_IMPORTED_MODULE_11__["CareersComponent"]
                    },
                    {
                        path: 'contact',
                        component: _main_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/design/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/design/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-content>\n      <mat-grid-list cols=\"3\" rowHeight=\"300px\">\n        <mat-grid-tile>\n          <div class=\"content\">\n            <h3>Address</h3>\n            <div class=\"row\">\n              <i class=\"material-icons md-24 md-dark\">\n                  location_on\n                  </i>\n                  <p>Ganadesh Empire, Rahatni Corner, Pune(India) 411027</p>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons md-24 md-dark\">call</i>\n              <p>(91) 098-19-696687</p>\n            </div>\n            <div class=\"row\">\n              <i class=\"material-icons md-24 md-dark\">email</i>\n              <p>info@algosystech.com</p>\n            </div>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"content\">\n                <h3>WHO WE ARE</h3>\n                <p>AlgoSys Tech is a technology driven organization focused on providing complete automation of business and its operation processes. We not only cater to the business requirements of our clients but understand their business to help them achieve new amplitudes in their endeavours.</p>\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"content\">\n              <h3>WHAT WE DO</h3>\n              <p>We have put in our vast experience and expertise in collections, transaction pricing & billing and Performance Management to build a robust product that is cost-effective. Our products, services, expertise and solutions provide a comprehensive platform to our customers to gain a competitive edge in market with better controls</p>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/design/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/design/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  margin-top: 30px; }\n  .container h3 {\n    text-align: center; }\n  .container .content .row {\n    display: flex; }\n  .container .content .row i {\n    margin: auto 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL2Zvb3Rlci9EOlxcTWFoZW5kcmEgV29ya3NwYWNlXFxPbGQgYmFja3VwXFxHaXRSZXBvXFxBbmd1bGFyNy9zcmNcXGFwcFxcZGVzaWduXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtFQUZqQjtJQUlFLGtCQUFrQixFQUFBO0VBSnBCO0lBUUcsYUFBYSxFQUFBO0VBUmhCO0lBV0csY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdGgzIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0LnJvdyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR9XHJcblx0XHQucm93IGkge1xyXG5cdFx0XHRtYXJnaW46IGF1dG8gMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/design/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/design/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/design/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/design/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/design/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/design/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topheader\">\r\n<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar top-nav-collapse\">\r\n  <span class=\"navbar-toggle\" id=\"js-navbar-toggle\">\r\n    <i class=\"material-icons\"></i>\r\n  </span>\r\n  <a href=\"#\" class=\"logo\">logo</a>\r\n  <ul class=\"main-nav\" id=\"js-menu\">\r\n      <li>\r\n          <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-links\">Home</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/products\" routerLinkActive=\"active\" class=\"nav-links\">Products</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/support\" routerLinkActive=\"active\" class=\"nav-links\">Support</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/clients\" routerLinkActive= \"active\" class=\"nav-links\">Clients</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/services\" routerLinkActive=\"active\" class=\"nav-links\">Careers</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/contact\" routerLinkActive=\"active\" class=\"nav-links\">Contacts</a>\r\n      </li>\r\n  </ul>\r\n</nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/design/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/design/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topheader {\n  position: relative;\n  width: 100%;\n  height: auto;\n  z-index: 99;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.navbar {\n  font-size: 18px;\n  padding-bottom: 10px; }\n\n.main-nav {\n  list-style-type: none;\n  display: none; }\n\n.nav-links,\n.logo {\n  text-decoration: none;\n  color: rgba(12, 11, 11, 0.7); }\n\n.main-nav li {\n  text-align: center;\n  margin: 15px auto; }\n\n.logo {\n  display: inline-block;\n  font-size: 22px;\n  margin-top: 10px;\n  margin-left: 20px; }\n\n.navbar-toggle {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 24px; }\n\n.active {\n  display: block; }\n\n@media screen and (min-width: 992px) {\n  .navbar {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 0;\n    height: 70px;\n    align-items: center;\n    background: #3949ab !important; }\n  .main-nav {\n    display: flex;\n    margin-right: 30px;\n    flex-direction: row;\n    justify-content: flex-end; }\n  .main-nav li {\n    margin: 0;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 5px;\n    display: inline-block;\n    text-align: center;\n    border-bottom: solid 3px transparent; }\n  .main-nav li a {\n    color: #fff; }\n  .main-nav li:hover {\n    border-bottom: solid 3px  #fff; }\n  .logo {\n    margin-top: 0; }\n  .navbar-toggle {\n    display: none; }\n  .logo {\n    color: #fff; }\n  .logo:hover,\n  .nav-links:hover {\n    color: #fff; }\n  .active {\n    color: #fff; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL2hlYWRlci9EOlxcTWFoZW5kcmEgV29ya3NwYWNlXFxPbGQgYmFja3VwXFxHaXRSZXBvXFxBbmd1bGFyNy9zcmNcXGFwcFxcZGVzaWduXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFBVztFQUNYLFdBQVU7RUFDViw2RUFBcUUsRUFBQTs7QUFHdEU7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0MscUJBQXFCO0VBQ3JCLGFBQWEsRUFBQTs7QUFHZDs7RUFFQyxxQkFBcUI7RUFDckIsNEJBQTRCLEVBQUE7O0FBRzdCO0VBQ0Msa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUdoQjtFQUNDLGNBQWMsRUFBQTs7QUFHZjtFQUNDO0lBQ0MsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTtFQUcvQjtJQUNDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBO0VBRzFCO0lBQ0MsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0NBQW9DLEVBQUE7RUFFckM7SUFDQyxXQUFVLEVBQUE7RUFFWDtJQUNDLDhCQUE4QixFQUFBO0VBRy9CO0lBQ0MsYUFBYSxFQUFBO0VBR2Q7SUFDQyxhQUFhLEVBQUE7RUFFZDtJQUNDLFdBQVUsRUFBQTtFQUVYOztJQUVDLFdBQVcsRUFBQTtFQUVaO0lBQ0MsV0FBWSxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9kZXNpZ24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BoZWFkZXIge1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OmF1dG87XHJcblx0ei1pbmRleDo5OTtcclxuXHRib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcblx0IFxyXG59XHJcbi5uYXZiYXIge1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1haW4tbmF2IHtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1saW5rcyxcclxuLmxvZ28ge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogcmdiYSgxMiwgMTEsIDExLCAwLjcpO1xyXG59XHJcblxyXG4ubWFpbi1uYXYgbGkge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG5cclxuLmxvZ28ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDEwcHg7XHJcblx0cmlnaHQ6IDIwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuXHQubmF2YmFyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMDtcclxuXHRcdGhlaWdodDogNzBweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kOiAjMzk0OWFiICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQubWFpbi1uYXYge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdG1hcmdpbi1yaWdodDogMzBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdH1cclxuXHJcblx0Lm1haW4tbmF2IGxpIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG5cdH1cclxuXHQubWFpbi1uYXYgbGkgYSB7XHJcblx0XHRjb2xvcjojZmZmO1xyXG5cdH1cclxuXHQubWFpbi1uYXYgbGk6aG92ZXIge1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgM3B4ICAjZmZmO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0bWFyZ2luLXRvcDogMDtcclxuXHR9XHJcblxyXG5cdC5uYXZiYXItdG9nZ2xlIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5sb2dvIHtcclxuXHRcdGNvbG9yOiNmZmY7XHJcblx0fVxyXG5cdC5sb2dvOmhvdmVyLFxyXG5cdC5uYXYtbGlua3M6aG92ZXIge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cdC5hY3RpdmUge1xyXG5cdFx0Y29sb3I6ICAjZmZmO1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/design/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/design/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/design/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/design/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/design/home-cards/home-cards.component.html":
/*!*************************************************************!*\
  !*** ./src/app/design/home-cards/home-cards.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n <div class=\"home-cards\">\r\n   <div class=\"row no-gutters\">\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12 lighten-1 text-white\">\r\n  <mat-card class=\"wow zoomIn box padding48\" data-wow-duration=\"1s\" data-wow-delay=\"0.1s\">\r\n    <mat-card-header class=\"box_header\">\r\n      <mat-card-title><i class=\"material-icons md-68 md-dark\">settings</i></mat-card-title>\r\n      <mat-card-title>Products</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\r\n          We conceptualized and build our billing product that is flexible and user friendly enough to cater the pricing and billing requirements of any payout / billing policy  \r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"col-lg-3 col-md-6 col-sm-12 purple1 text-white\">\r\n  <mat-card class=\"wow zoomIn box padding48\" data-wow-duration=\"1s\" data-wow-delay=\"0.3s\">\r\n    <mat-card-header class=\"box_header\">\r\n      <mat-card-title><i class=\"material-icons md-68 md-dark\">contact_support</i></mat-card-title>\r\n      <mat-card-title>Support</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\r\n          We provide maintenance and support services to its client helping them manage the product through its lifecycle.\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"col-lg-3 col-md-6 col-sm-12 green text-white\"> \r\n  <mat-card class=\"wow zoomIn box padding48\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">\r\n    <mat-card-header class=\"box_header\">\r\n      <mat-card-title><i class=\"material-icons md-68 md-dark\">supervised_user_circle</i></mat-card-title>\r\n      <mat-card-title>Clients</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\r\n          We not only cater to the business requirements of our clients but understand their business to help them achieve new amplitudes in their endeavours\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n\r\n<div class=\"col-lg-3 col-md-6 col-sm-12 light-blue text-white\"> \r\n  <mat-card class=\"wow zoomIn box padding48\" data-wow-duration=\"1s\" data-wow-delay=\"0.7s\">\r\n    <mat-card-header class=\"box_header\">\r\n      <mat-card-title><i class=\"material-icons md-68 md-dark\">contacts</i></mat-card-title>\r\n      <mat-card-title>Careers</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\r\n          Do you have the passion to make a difference - the passion to build stronger businesses for organizations around the world?.\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n</div> \r\n</div> "

/***/ }),

/***/ "./src/app/design/home-cards/home-cards.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/design/home-cards/home-cards.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-cards {\n  justify-content: space-around;\n  text-align: center; }\n  .home-cards .box {\n    flex-basis: 21%; }\n  .home-cards .box_header {\n    text-align: center;\n    display: block; }\n  .home-cards .row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -0;\n    margin-left: -0; }\n  .home-cards .row .lighten-1 {\n      background-color: #7e57c2; }\n  .home-cards .row .text-white {\n      color: #fff; }\n  .home-cards .row .col-lg-3 {\n      flex: 0 0 100%;\n      max-width: 100%; }\n  .home-cards .row .col-lg-3 .padding48 {\n        padding: 48px !important; }\n  @media (min-width: 768px) {\n      .home-cards .row .col-lg-3 {\n        flex: 0 0 50%;\n        max-width: 50%; } }\n  @media (min-width: 992px) {\n      .home-cards .row .col-lg-3 {\n        flex: 0 0 25%;\n        max-width: 25%; }\n        .home-cards .row .col-lg-3 .padding48 {\n          padding: 48px !important; }\n        .home-cards .row .col-lg-3 .material-icons.md-dark {\n          color: #fff !important; } }\n  @media (min-width: 1366px) {\n      .home-cards .row .col-lg-3 {\n        flex: 0 0 25%;\n        max-width: 25%; } }\n  .home-cards .row .purple1 {\n      background-color: #ab47bc !important; }\n  .home-cards .row .green {\n      background-color: #26a69a !important; }\n  .home-cards .row .light-blue {\n      background-color: #29b6f6 !important; }\n  .mat-card {\n  background: none !important;\n  padding: 0 !important;\n  box-shadow: none;\n  color: #fff !important;\n  border-radius: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL2hvbWUtY2FyZHMvRDpcXE1haGVuZHJhIFdvcmtzcGFjZVxcT2xkIGJhY2t1cFxcR2l0UmVwb1xcQW5ndWxhcjcvc3JjXFxhcHBcXGRlc2lnblxcaG9tZS1jYXJkc1xcaG9tZS1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTtFQUZuQjtJQUlFLGVBQWUsRUFBQTtFQUpqQjtJQU9FLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFSaEI7SUFlRSxhQUFhO0lBRWIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFuQmpCO01BcUJHLHlCQUF5QixFQUFBO0VBckI1QjtNQXlCRyxXQUFXLEVBQUE7RUF6QmQ7TUE4QkcsY0FBYztNQUNkLGVBQWUsRUFBQTtFQS9CbEI7UUFpQ0ksd0JBQXVCLEVBQUE7RUFHekI7TUFwQ0Y7UUF3Q0ksYUFBYTtRQUNiLGNBQWMsRUFBQSxFQUNkO0VBRUY7TUE1Q0Y7UUFnREksYUFBYTtRQUNiLGNBQWMsRUFBQTtRQWpEbEI7VUFvREksd0JBQXVCLEVBQUE7UUFwRDNCO1VBdURRLHNCQUFxQixFQUFBLEVBQ3hCO0VBR0g7TUEzREY7UUErREksYUFBYTtRQUNiLGNBQWMsRUFBQSxFQUNkO0VBakVKO01Bb0VHLG9DQUFvQyxFQUFBO0VBcEV2QztNQXVFRyxvQ0FBb0MsRUFBQTtFQXZFdkM7TUEwRUcsb0NBQW9DLEVBQUE7RUFLdkM7RUFDRSwyQkFBMEI7RUFDMUIscUJBQW9CO0VBQ3BCLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLDJCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduL2hvbWUtY2FyZHMvaG9tZS1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNhcmRzIHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0LmJveCB7XHJcblx0XHRmbGV4LWJhc2lzOiAyMSU7XHJcblx0fVxyXG5cdC5ib3hfaGVhZGVyIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHQuYm94X2NvbnRlbnQge1xyXG5cdH1cclxuXHQucm93IHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdG1hcmdpbi1yaWdodDogLTA7XHJcblx0XHRtYXJnaW4tbGVmdDogLTA7XHJcblx0XHQubGlnaHRlbi0xIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzdlNTdjMjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LnRleHQtd2hpdGUge1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdH1cclxuXHRcdC5jb2wtbGctMyB7XHJcblx0XHRcdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0XHRcdC1tcy1mbGV4OiAwIDAgMTAwJTtcclxuXHRcdFx0ZmxleDogMCAwIDEwMCU7XHJcblx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdFx0LnBhZGRpbmc0OCB7XHJcblx0XHRcdFx0cGFkZGluZzo0OHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cdFx0XHQuY29sLWxnLTMge1xyXG5cdFx0XHRcdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0XHRcdFx0LW1zLWZsZXg6IDAgMCA1MCU7XHJcblx0XHRcdFx0ZmxleDogMCAwIDUwJTtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDUwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblx0XHRcdC5jb2wtbGctMyB7XHJcblx0XHRcdFx0LXdlYmtpdC1ib3gtZmxleDogMDtcclxuXHRcdFx0XHQtbXMtZmxleDogMCAwIDI1JTtcclxuXHRcdFx0XHRmbGV4OiAwIDAgMjUlO1xyXG5cdFx0XHRcdG1heC13aWR0aDogMjUlO1xyXG5cdFxyXG5cdFx0XHQucGFkZGluZzQ4IHtcclxuXHRcdFx0XHRwYWRkaW5nOjQ4cHggIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cdFx0XHQubWF0ZXJpYWwtaWNvbnMubWQtZGFyayB7XHJcblx0XHRcdCAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEzNjZweCkge1xyXG5cdFx0XHQuY29sLWxnLTMge1xyXG5cdFx0XHRcdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0XHRcdFx0LW1zLWZsZXg6IDAgMCAyNSU7XHJcblx0XHRcdFx0ZmxleDogMCAwIDI1JTtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDI1JTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LnB1cnBsZTEge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWI0N2JjICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0XHQuZ3JlZW4ge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhNjlhICFpbXBvcnRhbnQ7XHJcblx0XHR9XHJcblx0XHQubGlnaHQtYmx1ZSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMyOWI2ZjYgIWltcG9ydGFudDtcclxuXHRcdH1cdFxyXG5cdH1cclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuXHQgYmFja2dyb3VuZDpub25lICFpbXBvcnRhbnQ7XHJcblx0IHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG5cdCBib3gtc2hhZG93Om5vbmU7XHJcblx0IGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuXHQgYm9yZGVyLXJhZGl1czowICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/design/home-cards/home-cards.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/design/home-cards/home-cards.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCardsComponent", function() { return HomeCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeCardsComponent = /** @class */ (function () {
    function HomeCardsComponent() {
    }
    HomeCardsComponent.prototype.ngOnInit = function () {
    };
    HomeCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-cards',
            template: __webpack_require__(/*! ./home-cards.component.html */ "./src/app/design/home-cards/home-cards.component.html"),
            styles: [__webpack_require__(/*! ./home-cards.component.scss */ "./src/app/design/home-cards/home-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeCardsComponent);
    return HomeCardsComponent;
}());



/***/ }),

/***/ "./src/app/design/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/design/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slider\">\n\n</section>\n<div class=\"content wow fadeInLeft\">\n        <h2>WHY WE'RE WORTH IT...</h2>\n        <p>We only supply the very best products</p>\n        <p>Our employees are all highly trained</p>\n        <p>We always strive for perfection</p>\n        <p>We use innovative methods</p>\n    </div>"

/***/ }),

/***/ "./src/app/design/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/design/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\n  width: 100%;\n  height: 100vh;\n  background: url('StockSnap_7OPWOSQFXS.jpg') no-repeat center center;\n  background-size: cover;\n  position: relative; }\n\n.content {\n  position: absolute;\n  top: 100px;\n  margin: 80px;\n  color: white;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL3NsaWRlci9EOlxcTWFoZW5kcmEgV29ya3NwYWNlXFxPbGQgYmFja3VwXFxHaXRSZXBvXFxBbmd1bGFyNy9zcmNcXGFwcFxcZGVzaWduXFxzbGlkZXJcXHNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUVBQTBGO0VBQzFGLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9TdG9ja1NuYXBfN09QV09TUUZYUy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGVudCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTAwcHg7XHJcblx0bWFyZ2luOiA4MHB4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/design/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/design/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/design/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/design/slider/slider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/design/work-with-us/work-with-us.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/design/work-with-us/work-with-us.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center py-5 grey lighten-4\">\r\n    <div class=\"row no-gutters\">\r\n  <div class=\"container\">\r\n<div class=\"work-with-container\">\r\n  <div class=\"wow fadeIn\" data-wow-duration=\"1s\">\r\n    <h2 class=\"h1 pt-5 pb-3\">Why work with us?</h2>\r\n    <p class=\"px-5 mb-5 pb-3 lead blue-grey-text\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n      aliqua. Ut enim ad minim veniam.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"row no-gutters\">\r\n      <div class=\"work-with-cards\">\r\n          <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n    <mat-card class=\"box wow fadeInUp\" data-wow-duration=\"1s\">\r\n      <mat-card-header class=\"blog-title\">\r\n        <mat-card-title>Design</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n    <mat-card class=\"box wow fadeInUp\" data-wow-duration=\"1s\">\r\n        <mat-card-header class=\"blog-title\">\r\n          <mat-card-title>Feedback</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>\r\n        </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n      <mat-card class=\"box wow fadeInUp\" data-wow-duration=\"1s\">\r\n          <mat-card-header class=\"blog-title\">\r\n            <mat-card-title>Execution</mat-card-title>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>\r\n          </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/design/work-with-us/work-with-us.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/design/work-with-us/work-with-us.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n  text-align: center;\n  display: flex;\n  justify-content: space-around; }\n  .grey.lighten-4 .container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n    box-sizing: border-box; }\n  @media (min-width: 576px) {\n    .grey.lighten-4 .container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .grey.lighten-4 .container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .grey.lighten-4 .container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .grey.lighten-4 .container {\n      max-width: 1140px; } }\n  .grey.lighten-4 .work-with-container .box {\n    padding: 20px; }\n  .grey.lighten-4 .work-with-container .box .text-center {\n      text-align: center;\n      display: block; }\n  .grey.lighten-4 .text-center {\n    text-align: center !important; }\n  .grey.lighten-4 .row {\n    margin-right: -0;\n    margin-left: -0; }\n  .grey.lighten-4 .row .work-with-cards {\n      display: flex;\n      flex-wrap: wrap;\n      margin-right: -0;\n      margin-left: -0; }\n  .grey.lighten-4 .row .work-with-cards .py-5 {\n        padding-top: 3rem !important; }\n  .grey.lighten-4 .row .work-with-cards .col-lg-3 {\n        flex: 0 0 100%;\n        max-width: 100%; }\n  .grey.lighten-4 .row .work-with-cards .col-lg-3 .blog-title {\n          width: 100% !important;\n          text-align: center !important;\n          display: block !important; }\n  .grey.lighten-4 .row .work-with-cards .padding48 {\n        padding: 48px !important; }\n  @media (min-width: 992px) {\n        .grey.lighten-4 .row .work-with-cards .col-lg-3 {\n          flex: 0 0 33.333333%;\n          max-width: 33.333333%; }\n          .grey.lighten-4 .row .work-with-cards .col-lg-3 .blog-title {\n            width: 100% !important;\n            text-align: center !important;\n            display: block !important; } }\n  .grey.lighten-4 .row .work-with-container h2 {\n      color: #212529;\n      font-size: 28px; }\n  .mat-card {\n  background: none !important;\n  border-radius: 0 !important;\n  box-shadow: none !important; }\n  .mat-card-header .mat-card-title {\n  font-size: 24px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL3dvcmstd2l0aC11cy9EOlxcTWFoZW5kcmEgV29ya3NwYWNlXFxPbGQgYmFja3VwXFxHaXRSZXBvXFxBbmd1bGFyNy9zcmNcXGFwcFxcZGVzaWduXFx3b3JrLXdpdGgtdXNcXHdvcmstd2l0aC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZCQUE2QixFQUFBO0VBSjlCO0lBT0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0IsRUFBQTtFQUV4QjtJQWRBO01BZ0JFLGdCQUFnQixFQUFBLEVBQ2Y7RUFHSDtJQXBCQTtNQXNCSSxnQkFBZ0IsRUFBQSxFQUNqQjtFQUdIO0lBMUJBO01BNEJFLGdCQUFnQixFQUFBLEVBQ2Y7RUFHSDtJQWhDQTtNQWtDRSxpQkFBaUIsRUFBQSxFQUNqQjtFQW5DRjtJQXdDRyxhQUFhLEVBQUE7RUF4Q2hCO01BMENJLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7RUEzQ2xCO0lBZ0RHLDZCQUE0QixFQUFBO0VBaEQvQjtJQW1ERSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBcERqQjtNQXdERyxhQUFhO01BRWIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUE1RGxCO1FBK0RHLDRCQUEyQixFQUFBO0VBL0Q5QjtRQW9FQyxjQUFjO1FBQ2QsZUFBZSxFQUFBO0VBckVoQjtVQXVFRSxzQkFBcUI7VUFDckIsNkJBQTRCO1VBQzVCLHlCQUF5QixFQUFBO0VBekUzQjtRQTZFRSx3QkFBdUIsRUFBQTtFQUV6QjtRQS9FQTtVQW1GRSxvQkFBb0I7VUFDcEIscUJBQXFCLEVBQUE7VUFwRnZCO1lBc0ZFLHNCQUFxQjtZQUNyQiw2QkFBNEI7WUFDNUIseUJBQXlCLEVBQUEsRUFDekI7RUF6RkY7TUErRkMsY0FBYTtNQUNiLGVBQWMsRUFBQTtFQU9mO0VBQ0MsMkJBQTJCO0VBQzNCLDJCQUEwQjtFQUMxQiwyQkFBMEIsRUFBQTtFQUUzQjtFQUNDLDBCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduL3dvcmstd2l0aC11cy93b3JrLXdpdGgtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JleS5saWdodGVuLTQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUhaW1wb3J0YW50O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1x0XHRcclxuXHR9XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG5cdC5jb250YWluZXIge1xyXG5cdCBtYXgtd2lkdGg6IDU0MHB4O1xyXG5cdCB9XHJcbiB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblx0LmNvbnRhaW5lciB7XHJcblx0XHRtYXgtd2lkdGg6IDk2MHB4O1xyXG5cdFx0fVxyXG4gfVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cdC5jb250YWluZXIge1xyXG5cdFx0bWF4LXdpZHRoOiAxMTQwcHg7XHJcblx0fVxyXG59XHJcblxyXG4ud29yay13aXRoLWNvbnRhaW5lciB7XHQgXHJcblx0XHQuYm94IHtcclxuXHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0LnRleHQtY2VudGVyIHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHQudGV4dC1jZW50ZXIge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cdC5yb3cge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAtMDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtMDtcclxuXHRcdC53b3JrLXdpdGgtY2FyZHMge1xyXG5cdFx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtMDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0wO1xyXG5cclxuXHQgLnB5LTUge1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogM3JlbSFpbXBvcnRhbnQ7XHJcblx0XHR9IFxyXG4uY29sLWxnLTMge1xyXG5cdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0LW1zLWZsZXg6IDAgMCAxMDAlO1xyXG5cdGZsZXg6IDAgMCAxMDAlO1xyXG5cdG1heC13aWR0aDogMTAwJTtcdFx0XHRcclxuXHQuYmxvZy10aXRsZSB7XHJcblx0XHR3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHR0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuXHR9XHJcbn1cclxuXHQucGFkZGluZzQ4IHtcclxuXHRcdHBhZGRpbmc6NDhweCAhaW1wb3J0YW50O1xyXG5cdH1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblx0LmNvbC1sZy0zIHtcclxuXHRcdC13ZWJraXQtYm94LWZsZXg6IDA7XHJcblx0XHQtbXMtZmxleDogMCAwIDMzLjMzMzMzMyU7XHJcblx0XHRmbGV4OiAwIDAgMzMuMzMzMzMzJTtcclxuXHRcdG1heC13aWR0aDogMzMuMzMzMzMzJTtcdFxyXG5cdC5ibG9nLXRpdGxlIHtcclxuXHRcdHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuXHRcdHRleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7XHJcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cdH1cdCBcclxuIH1cclxufVxyXG5cdFx0fVxyXG4gXHJcbi53b3JrLXdpdGgtY29udGFpbmVyIGgyICB7XHJcblx0Y29sb3I6IzIxMjUyOTtcclxuXHRmb250LXNpemU6MjhweDtcclxufVxyXG5cdH1cclxuIH1cclxuXHJcbiBcclxuXHJcbi5tYXQtY2FyZCB7XHJcblx0YmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6MCAhaW1wb3J0YW50O1xyXG5cdGJveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6MjRweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/design/work-with-us/work-with-us.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/design/work-with-us/work-with-us.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkWithUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkWithUsComponent", function() { return WorkWithUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkWithUsComponent = /** @class */ (function () {
    function WorkWithUsComponent() {
    }
    WorkWithUsComponent.prototype.ngOnInit = function () {
    };
    WorkWithUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-with-us',
            template: __webpack_require__(/*! ./work-with-us.component.html */ "./src/app/design/work-with-us/work-with-us.component.html"),
            styles: [__webpack_require__(/*! ./work-with-us.component.scss */ "./src/app/design/work-with-us/work-with-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkWithUsComponent);
    return WorkWithUsComponent;
}());



/***/ }),

/***/ "./src/app/main/careers/careers.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/careers/careers.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  careers works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/careers/careers.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/careers/careers.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/careers/careers.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/careers/careers.component.ts ***!
  \***************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CareersComponent = /** @class */ (function () {
    function CareersComponent() {
    }
    CareersComponent.prototype.ngOnInit = function () {
    };
    CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/main/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.scss */ "./src/app/main/careers/careers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/main/clients/clients.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/clients/clients.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clients works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/clients/clients.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/clients/clients.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/clients/clients.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/clients/clients.component.ts ***!
  \***************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/main/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/main/clients/clients.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/main/contacts/contacts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/contacts/contacts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"wow fadeIn\" data-wow-duration=\"2s\" data-wow-delay=\"0.1s\">\r\n        <h2 class=\"h1 pt-5 pb-3\">Contact us</h2>\r\n        <p class=\"px-5 mb-5 pb-3 lead blue-grey-text\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua. Ut enim ad minim veniam.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"contact-form wow fadeIn\" data-wow-duration=\"2s\" data-wow-delay=\"2s\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-grid-list cols=\"3\" rowHeight=\"100px\">\r\n                    <mat-grid-tile>\r\n                            <mat-form-field class=\"full-width\">\r\n                               <input matInput placeholder=\"Your name\">\r\n                            </mat-form-field>\r\n                                \r\n                    </mat-grid-tile>\r\n                    <mat-grid-tile>\r\n                            <mat-form-field class=\"full-width\">\r\n                                    <input matInput placeholder=\"Your email\">\r\n                                 </mat-form-field>\r\n                    </mat-grid-tile>\r\n                    <mat-grid-tile>\r\n                            <i class=\"material-icons md-48 md-dark\">\r\n                                    location_on\r\n                                    </i>\r\n                                    <p>140, City Center, New York, U.S.A</p>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n                <mat-grid-list cols=\"3\" rowHeight=\"100px\">\r\n                        <mat-grid-tile [colspan] = \"2\">\r\n                                <mat-form-field class=\"full-width\">\r\n                                   <input matInput placeholder=\"Subject\">\r\n                                </mat-form-field>\r\n                        </mat-grid-tile>\r\n                        <mat-grid-tile> \r\n                                <i class=\"material-icons md-48 md-dark\">\r\n                                        call\r\n                                        </i>\r\n                                        <p>+ 01 234 567 89</p>\r\n                        </mat-grid-tile>\r\n                    </mat-grid-list>\r\n                    <mat-grid-list cols=\"3\" rowHeight=\"100px\">\r\n                            <mat-grid-tile [colspan] = \"2\">\r\n                                    <mat-form-field class=\"full-width\">\r\n                                       <textarea matInput cols=\"3\" placeholder=\"Your message\"></textarea>\r\n                                    </mat-form-field>\r\n                            </mat-grid-tile>\r\n                            <mat-grid-tile>\r\n                                    <i class=\"material-icons md-48 md-dark\">\r\n                                            email\r\n                                            </i>\r\n                                            <p>contact@company.com</p>\r\n                            </mat-grid-tile>\r\n                        </mat-grid-list>    \r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/contacts/contacts.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/main/contacts/contacts.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  text-align: center;\n  display: block;\n  padding: 20px;\n  box-sizing: border-box;\n  height: 100vh;\n  overflow-y: hidden;\n  background: #333; }\n  .container .full-width {\n    width: 95%;\n    text-align: left;\n    margin-right: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWN0cy9EOlxcTWFoZW5kcmEgV29ya3NwYWNlXFxPbGQgYmFja3VwXFxHaXRSZXBvXFxBbmd1bGFyNy9zcmNcXGFwcFxcbWFpblxcY29udGFjdHNcXGNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBUmpCO0lBV0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6ICMzMzM7XHJcblxyXG5cdC5mdWxsLXdpZHRoIHtcclxuXHRcdHdpZHRoOiA5NSU7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA1JTtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/contacts/contacts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/contacts/contacts.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/main/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/main/contacts/contacts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slider\">\r\n    <div class=\"full-bg-img\">\r\n    <app-slider></app-slider>\r\n    </div>\r\n</div>\r\n<app-home-cards></app-home-cards>\r\n<app-work-with-us></app-work-with-us>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slider {\n  position: relative; }\n\n.full-bg-img {\n  position: relative;\n  width: 100%; }\n\n.full-bg-img:before {\n  background: rgba(42, 27, 161, 0.7);\n  background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  content: ''; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL0Q6XFxNYWhlbmRyYSBXb3Jrc3BhY2VcXE9sZCBiYWNrdXBcXEdpdFJlcG9cXEFuZ3VsYXI3L3NyY1xcYXBwXFxtYWluXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWlCO0VBQ2pCLFdBQVUsRUFBQTs7QUFFZDtFQUNJLGtDQUErQjtFQUMvQix3RkFBa0Y7RUFDbEYsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFTO0VBQ1QsV0FBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLmZ1bGwtYmctaW1nIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uZnVsbC1iZy1pbWc6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDIsMjcsMTYxLDAuNyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsMjcsMTYxLDAuNyksIHJnYmEoMjksMjEwLDE3NywwLjcpIDEwMCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgY29udGVudDonJztcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/main/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/product/product.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/product/product.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/product/product.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/product/product.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/product/product.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/product/product.component.ts ***!
  \***************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/main/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/main/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/main/support/support.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/support/support.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  support works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/support/support.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/support/support.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/support/support.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/support/support.component.ts ***!
  \***************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/main/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.scss */ "./src/app/main/support/support.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Mahendra Workspace\Old backup\GitRepo\Angular7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map