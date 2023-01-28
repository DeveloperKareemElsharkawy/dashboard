(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "/0+N":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/only-logged-in-users.guard */ "UzH7");





const routes = [
    {
        path: 'main',
        loadChildren: () => Promise.all(/*! import() | main-main-module */[__webpack_require__.e("common"), __webpack_require__.e("main-main-module")]).then(__webpack_require__.bind(null, /*! ./main/main.module */ "kNMS")).then(m => m.MainModule), canActivate: [_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedInUsers"]]
    },
    {
        path: 'sub',
        loadChildren: () => Promise.all(/*! import() | sub-sub-module */[__webpack_require__.e("common"), __webpack_require__.e("sub-sub-module")]).then(__webpack_require__.bind(null, /*! ./sub/sub.module */ "LymS")).then(m => m.SubModule), canActivate: [_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedInUsers"]]
    },
    {
        path: 'child',
        loadChildren: () => Promise.all(/*! import() | child-child-module */[__webpack_require__.e("common"), __webpack_require__.e("child-child-module")]).then(__webpack_require__.bind(null, /*! ./child/child.module */ "DaOf")).then(m => m.ChildModule), canActivate: [_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_2__["OnlyLoggedInUsers"]]
    }
];
class CategoriesRoutingModule {
}
CategoriesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoriesRoutingModule });
CategoriesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CategoriesRoutingModule_Factory(t) { return new (t || CategoriesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoriesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "U5Jw":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories-routing.module */ "/0+N");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/upload-image/upload-image.module */ "v/J1");










class CategoriesModule {
}
CategoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CategoriesModule });
CategoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CategoriesModule_Factory(t) { return new (t || CategoriesModule)(); }, imports: [[
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoriesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
            _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__["UploadImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoriesModule, { imports: [_categories_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoriesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
        _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__["UploadImageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _categories_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoriesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
                    _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__["UploadImageModule"],
                ],
                declarations: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module.js.map