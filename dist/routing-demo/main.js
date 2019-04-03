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

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0; }\n\nbody {\n  font-family: 'Josefin Sans', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGdpdCByZXBvXFxBbmd1bGFyNy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBR1Y7RUFDQyx1Q0FBdUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

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
                _design_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
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

/***/ "./src/app/design/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/design/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n  <span class=\"navbar-toggle\" id=\"js-navbar-toggle\">\r\n    <i class=\"material-icons\"></i>\r\n  </span>\r\n  <a href=\"#\" class=\"logo\">logo</a>\r\n  <ul class=\"main-nav\" id=\"js-menu\">\r\n      <li>\r\n          <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-links\">Home</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/products\" routerLinkActive=\"active\" class=\"nav-links\">Products</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/support\" routerLinkActive=\"active\" class=\"nav-links\">Support</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/clients\" routerLinkActive= \"active\" class=\"nav-links\">Clients</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/services\" routerLinkActive=\"active\" class=\"nav-links\">Careers</a>\r\n      </li>\r\n      <li>\r\n          <a routerLink=\"/contact\" routerLinkActive=\"active\" class=\"nav-links\">Contacts</a>\r\n      </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/design/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/design/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  font-size: 18px;\n  padding-bottom: 10px; }\n\n.main-nav {\n  list-style-type: none;\n  display: none; }\n\n.nav-links,\n.logo {\n  text-decoration: none;\n  color: rgba(12, 11, 11, 0.7); }\n\n.main-nav li {\n  text-align: center;\n  margin: 15px auto; }\n\n.logo {\n  display: inline-block;\n  font-size: 22px;\n  margin-top: 10px;\n  margin-left: 20px; }\n\n.navbar-toggle {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 24px; }\n\n.active {\n  display: block; }\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 0;\n    height: 70px;\n    align-items: center; }\n  .main-nav {\n    display: flex;\n    margin-right: 30px;\n    flex-direction: row;\n    justify-content: flex-end; }\n  .main-nav li {\n    margin: 0;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 5px;\n    display: inline-block;\n    text-align: center;\n    border-bottom: solid 3px transparent; }\n  .main-nav li:hover {\n    border-bottom: solid 3px #558bf0; }\n  .logo {\n    margin-top: 0; }\n  .navbar-toggle {\n    display: none; }\n  .logo:hover,\n  .nav-links:hover {\n    color: #558bf0; }\n  .active {\n    color: rgba(223, 39, 39, 0.8); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL2hlYWRlci9EOlxcZ2l0IHJlcG9cXEFuZ3VsYXI3L3NyY1xcYXBwXFxkZXNpZ25cXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUdyQjtFQUNDLHFCQUFxQjtFQUNyQixhQUFhLEVBQUE7O0FBR2Q7O0VBRUMscUJBQXFCO0VBQ3JCLDRCQUE0QixFQUFBOztBQUc3QjtFQUNDLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQztJQUNDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtFQUdwQjtJQUNDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QixFQUFBO0VBRzFCO0lBQ0MsU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0NBQW9DLEVBQUE7RUFFckM7SUFDQyxnQ0FBMEMsRUFBQTtFQUczQztJQUNDLGFBQWEsRUFBQTtFQUdkO0lBQ0MsYUFBYSxFQUFBO0VBR2Q7O0lBRUMsY0FBd0IsRUFBQTtFQUV6QjtJQUNDLDZCQUE2QixFQUFBLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLW5hdiB7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtbGlua3MsXHJcbi5sb2dvIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IHJnYmEoMTIsIDExLCAxMSwgMC43KTtcclxufVxyXG5cclxuLm1haW4tbmF2IGxpIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAxNXB4IGF1dG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMHB4O1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0Lm5hdmJhciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDA7XHJcblx0XHRoZWlnaHQ6IDcwcHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0Lm1haW4tbmF2IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC5tYWluLW5hdiBsaSB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuXHR9XHJcblx0Lm1haW4tbmF2IGxpOmhvdmVyIHtcclxuXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDNweCByZ2IoODUsIDEzOSwgMjQwKTtcclxuXHR9XHJcblxyXG5cdC5sb2dvIHtcclxuXHRcdG1hcmdpbi10b3A6IDA7XHJcblx0fVxyXG5cclxuXHQubmF2YmFyLXRvZ2dsZSB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHJcblx0LmxvZ286aG92ZXIsXHJcblx0Lm5hdi1saW5rczpob3ZlciB7XHJcblx0XHRjb2xvcjogcmdiKDg1LCAxMzksIDI0MCk7XHJcblx0fVxyXG5cdC5hY3RpdmUge1xyXG5cdFx0Y29sb3I6IHJnYmEoMjIzLCAzOSwgMzksIDAuOCk7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/design/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/design/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slider\">\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/design/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/design/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider {\n  width: 100vw;\n  height: 600px;\n  background: url('StockSnap_7OPWOSQFXS.jpg') no-repeat center center;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduL3NsaWRlci9EOlxcZ2l0IHJlcG9cXEFuZ3VsYXI3L3NyY1xcYXBwXFxkZXNpZ25cXHNsaWRlclxcc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYixtRUFBMEY7RUFDMUYsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXNpZ24vc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IDYwMHB4O1xyXG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9TdG9ja1NuYXBfN09QV09TUUZYUy5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/main/careers/careers.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/careers/careers.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  careers works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  clients works!\r\n</p>\r\n"

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

module.exports = "<app-slider></app-slider>"

/***/ }),

/***/ "./src/app/main/contacts/contacts.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/main/contacts/contacts.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */"

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

module.exports = "<div id=\"slider\">\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/main/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

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

module.exports = "<p>\r\n  product works!\r\n</p>\r\n"

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

module.exports = "<p>\r\n  support works!\r\n</p>\r\n"

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

module.exports = __webpack_require__(/*! D:\git repo\Angular7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map