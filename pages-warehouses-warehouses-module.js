(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-warehouses-warehouses-module"],{

/***/ "BKCX":
/*!***************************************************************!*\
  !*** ./src/app/services/shared/shared-api-service.service.ts ***!
  \***************************************************************/
/*! exports provided: SharedApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedApiServiceService", function() { return SharedApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SharedApiServiceService {
    constructor(http) {
        this.http = http;
    }
    getCities(meta) {
        const url = meta ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/cities/for-selection?' + meta : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/cities/for-selection';
        return this.http.get(url);
    }
    exportData(targetUrl) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/' + targetUrl;
        const opts = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Accept': 'text/html, application/xhtml+xml, */*',
                'Content-Type': 'text/plain; charset=utf-8'
            }),
            responseType: 'blob'
        };
        return this.http.get(url, opts);
    }
}
SharedApiServiceService.ɵfac = function SharedApiServiceService_Factory(t) { return new (t || SharedApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SharedApiServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedApiServiceService, factory: SharedApiServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedApiServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Eqny":
/*!************************************************************!*\
  !*** ./src/app/services/warehouses/warehouses.services.ts ***!
  \************************************************************/
/*! exports provided: WarehousesServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesServices", function() { return WarehousesServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class WarehousesServices {
    constructor(http) {
        this.http = http;
    }
    getWarehouses(meta) {
        const url = meta ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/warehouses?' + meta : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/warehouses';
        return this.http.get(url);
    }
    getWarehousesList($meta = "") {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/warehouses/get-all/for-selection' + $meta;
        console.log(url);
        return this.http.get(url);
    }
    getWarehouse(id) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/warehouses/' + id;
        return this.http.get(url);
    }
    CreateWarehouse(newBadge) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/warehouses';
        return this.http.post(url, newBadge);
    }
    editWarehouse(badge) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/warehouses/update';
        return this.http.post(url, badge);
    }
    deleteWarehouse(id) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({}),
            body: {
                id: id
            }
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/warehouses';
        return this.http.delete(url, options);
    }
}
WarehousesServices.ɵfac = function WarehousesServices_Factory(t) { return new (t || WarehousesServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WarehousesServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WarehousesServices, factory: WarehousesServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarehousesServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FCgW":
/*!********************************************************!*\
  !*** ./src/app/pages/warehouses/index/index.column.ts ***!
  \********************************************************/
/*! exports provided: gride */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gride", function() { return gride; });
const gride = [
    {
        dataType: 'text',
        id: 'id',
        name: 'ID',
        field: 'id',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'city',
        name: 'City',
        field: "city",
        fieldAttrName: 'name_en',
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
        placeholder: 'Search City'
    },
    {
        dataType: 'text',
        id: 'name_en',
        name: 'Name En',
        field: 'name_en',
        fieldSearch: "name_en",
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'name_en',
        name: 'Name Ar',
        field: 'name_ar',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'activation',
        name: 'Activation',
        field: 'activation',
        filterType: 'boolean',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'command',
        name: 'Action',
        field: 'command',
        filterType: 'none',
        hidden: false,
        filterOperator: 'EQUAL',
        command: [
            {
                action: 'edit',
                color: 'primary',
                id: 'edit-action',
                hidden: false,
                toolTip: 'Edit',
                icon: 'edit',
                buttonType: 'icon',
                disabled: () => false,
            },
        ]
    },
];


/***/ }),

/***/ "HF7s":
/*!****************************************************!*\
  !*** ./src/app/pages/warehouses/routing.module.ts ***!
  \****************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "OCKt");
/* harmony import */ var _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-edit/create-edit.component */ "nBFM");







const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: 'sellers', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
            { path: 'stores', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
            { path: 'sellers/create', component: _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditomponent"] },
            { path: 'stores/create', component: _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditomponent"] },
            { path: 'sellers/edit/:id', component: _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditomponent"] },
            { path: 'stores/edit/:id', component: _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["CreateEditomponent"] },
            {
                path: 'sellers/stock',
                loadChildren: () => Promise.all(/*! import() | stock-stock-module */[__webpack_require__.e("common"), __webpack_require__.e("stock-stock-module")]).then(__webpack_require__.bind(null, /*! ./stock/stock.module */ "mzIW")).then(m => m.StockModule),
            },
        ],
    }];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Iab2":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "J7z+":
/*!********************************************************************!*\
  !*** ./src/app/pages/warehouses/stock-index/stock-index.column.ts ***!
  \********************************************************************/
/*! exports provided: gride */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gride", function() { return gride; });
const gride = [
    {
        dataType: 'text',
        id: 'id',
        name: 'ID',
        field: 'id',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'city',
        name: 'City',
        field: "city",
        fieldAttrName: 'name_en',
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
        placeholder: 'Search City'
    },
    {
        dataType: 'text',
        id: 'name_en',
        name: 'Name En',
        field: 'name_en',
        fieldSearch: "name_en",
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'name_en',
        name: 'Name Ar',
        field: 'name_ar',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'activation',
        name: 'Activation',
        field: 'activation',
        filterType: 'boolean',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'command',
        name: 'Action',
        field: 'command',
        filterType: 'none',
        hidden: false,
        filterOperator: 'EQUAL',
        command: [
            {
                action: 'edit',
                color: 'primary',
                id: 'edit-action',
                hidden: false,
                toolTip: 'Edit',
                icon: 'edit',
                buttonType: 'icon',
                disabled: () => false,
            },
        ]
    },
];


/***/ }),

/***/ "OCKt":
/*!***********************************************************!*\
  !*** ./src/app/pages/warehouses/index/index.component.ts ***!
  \***********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.column */ "FCgW");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/warehouses/warehouses.services */ "Eqny");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");

















const _c0 = ["dialog"];
function IndexComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure to delete Warehouse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_ng_template_12_Template_button_click_10_listener() { const ref_r6 = ctx.dialogRef; return ref_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_ng_template_12_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ref_r6 = ctx.dialogRef; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteCategory(ref_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currentDeleteCategory.name_en);
} }
class IndexComponent {
    constructor(warehousesService, router, convertFilter, dialogService, toaster, sharedService) {
        this.warehousesService = warehousesService;
        this.router = router;
        this.convertFilter = convertFilter;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.sharedService = sharedService;
        this.data = [];
        this.columnGrid = _index_column__WEBPACK_IMPORTED_MODULE_2__["gride"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = {
            name: 'city',
            list: []
        };
        this.loading = false;
        this.showgride = false;
    }
    ngOnInit() {
        this.store_type = this.router.url.split('/')[2];
        this.store_type_id = (this.store_type == 'stores') ? 1 : 2;
        this.getIndex();
    }
    getIndex(meta) {
        meta = (meta ? meta : '') + '&type=' + this.store_type_id;
        this.lastMeta = meta;
        this.loading = true;
        this.warehousesService.getWarehouses(meta).subscribe((res) => {
            this.dataItem.data = res['data'];
            this.dataItem.total = res.total;
        }, error => {
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    filterChange(event) {
        if (event.filter) {
            for (let i = 0; i < event.filter.filters.length; i++) {
                if (event.filter.filters[i]['field'] === 'id') {
                    this.searchId = event.filter.filters[i]['value'];
                }
            }
        }
        this.getIndex(this.convertFilter.convertToQuery(event));
    }
    deleteCategory(dialogRef) {
        this.warehousesService.deleteWarehouse(this.currentDeleteCategory.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getIndex(this.lastMeta);
            this.currentDeleteCategory = null;
        });
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./warehouses/' + this.store_type + '/edit/' + event.data.id]);
                break;
            case 'delete':
                this.currentDeleteCategory = event.data;
                this.open(this.dialog);
                break;
        }
    }
    open(dialog) {
        this.dialogService.open(dialog);
    }
    export() {
        this.sharedService.exportUrl = 'warehouses/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(data, 'warehouses.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
    getAllCities(meta) {
        this.sharedService.getCities(meta).subscribe(res => {
            // this.autoCompleteData.filter(ele => ele.name === 'city')[0].list = res['data'];
            this.autoCompleteData.list = res['data'];
        }, error => {
        }, () => {
        });
    }
    autoCompleteFilterChangeCheck(event) {
        const meta = '?name=' + event.value;
        this.getAllCities(meta);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__["WarehousesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-warehouses-index"]], viewQuery: function IndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 14, vars: 8, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["nbButton", "", "class", "mr-2", "status", "danger", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "primary", "size", "small", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "grid-container"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "autoCompleteFilterChange", "commandActionClick"], ["dialog", ""], ["nbButton", "", "status", "danger", "size", "small", 1, "mr-2", 3, "click"], [1, "dialog-card"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndexComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add New Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-kendo-custome-grid", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function IndexComponent_Template_app_kendo_custome_grid_stateChange_11_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function IndexComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_11_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function IndexComponent_Template_app_kendo_custome_grid_commandActionClick_11_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, IndexComponent_ng_template_12_Template, 14, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" warehouses ", ctx.store_type, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataItem.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/warehouses/", ctx.store_type, "/create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_10__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUtFLFlBQUE7RUFDQSxvQkFBQTtBQUhKO0FBRkk7RUFDRSxlQUFBO0FBSU47QUFFSTtFQUNFLFlBQUE7QUFBTiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG5iLWNhcmQge1xuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warehouses-index',
                templateUrl: 'index.component.html',
                styleUrls: ['index.component.scss'],
            }]
    }], function () { return [{ type: _services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__["WarehousesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }] }); })();


/***/ }),

/***/ "PCJc":
/*!*********************************************************************!*\
  !*** ./src/app/services/filter-to-query/filter-to-query.service.ts ***!
  \*********************************************************************/
/*! exports provided: FilterToQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterToQueryService", function() { return FilterToQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterToQueryService {
    constructor() {
        this.queryString = '';
    }
    convertToQuery(state) {
        var _a;
        let fieldName = '';
        let filter = ((_a = state.filter) === null || _a === void 0 ? void 0 : _a.filters) ? state.filter.filters : [];
        this.queryString = '';
        filter.forEach((item, i) => {
            // if (item.field === 'name_en' || item.field === 'name_ar') {
            //     fieldName = 'name';
            // } else {
            fieldName = item.field.toString();
            // }
            this.queryString = this.queryString + ((item.value || item.value === false) ? (fieldName + '=' + item.value + '&') : '');
        });
        this.queryString = this.queryString + 'limit=' + state.take + '&offset=' + state.skip;
        return this.queryString;
    }
}
FilterToQueryService.ɵfac = function FilterToQueryService_Factory(t) { return new (t || FilterToQueryService)(); };
FilterToQueryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterToQueryService, factory: FilterToQueryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterToQueryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "U4iQ":
/*!***********************************************************************!*\
  !*** ./src/app/pages/warehouses/stock-index/stock-index.component.ts ***!
  \***********************************************************************/
/*! exports provided: StockIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockIndexComponent", function() { return StockIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stock_index_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-index.column */ "J7z+");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/warehouses/warehouses.services */ "Eqny");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");
















const _c0 = ["dialog"];
class StockIndexComponent {
    constructor(warehousesService, router, convertFilter, dialogService, toaster, sharedService) {
        this.warehousesService = warehousesService;
        this.router = router;
        this.convertFilter = convertFilter;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.sharedService = sharedService;
        this.data = [];
        this.columnGrid = _stock_index_column__WEBPACK_IMPORTED_MODULE_2__["gride"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = {
            name: 'city',
            list: []
        };
        this.loading = false;
        this.showgride = false;
    }
    ngOnInit() {
        this.store_type = this.router.url.split('/')[2];
        this.store_type_id = (this.store_type == 'stores') ? 1 : 2;
        console.log(this.store_type);
        console.log(this.store_type_id);
        this.getIndex();
    }
    getIndex(meta) {
        meta = (meta ? meta : '') + '&type=' + this.store_type_id;
        this.lastMeta = meta;
        this.loading = true;
        this.warehousesService.getWarehouses(meta).subscribe((res) => {
            this.dataItem.data = res['data'];
            this.dataItem.total = res.total;
        }, error => {
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    filterChange(event) {
        if (event.filter) {
            for (let i = 0; i < event.filter.filters.length; i++) {
                if (event.filter.filters[i]['field'] === 'id') {
                    this.searchId = event.filter.filters[i]['value'];
                }
            }
        }
        this.getIndex(this.convertFilter.convertToQuery(event));
    }
    deleteCategory(dialogRef) {
        this.warehousesService.deleteWarehouse(this.currentDeleteCategory.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getIndex(this.lastMeta);
            this.currentDeleteCategory = null;
        });
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./warehouses/' + this.store_type + '/edit/' + event.data.id]);
                break;
            case 'delete':
                this.currentDeleteCategory = event.data;
                this.open(this.dialog);
                break;
        }
    }
    open(dialog) {
        this.dialogService.open(dialog);
    }
    export() {
        this.sharedService.exportUrl = 'warehouses/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(data, 'warehouses.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
    getAllCities(meta) {
        this.sharedService.getCities(meta).subscribe(res => {
            // this.autoCompleteData.filter(ele => ele.name === 'city')[0].list = res['data'];
            this.autoCompleteData.list = res['data'];
        }, error => {
        }, () => {
        });
    }
    autoCompleteFilterChangeCheck(event) {
        const meta = '?name=' + event.value;
        this.getAllCities(meta);
    }
}
StockIndexComponent.ɵfac = function StockIndexComponent_Factory(t) { return new (t || StockIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__["WarehousesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"])); };
StockIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockIndexComponent, selectors: [["app-warehouses-stock-index"]], viewQuery: function StockIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 8, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "grid-container"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "autoCompleteFilterChange", "commandActionClick"]], template: function StockIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-kendo-custome-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function StockIndexComponent_Template_app_kendo_custome_grid_stateChange_7_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function StockIndexComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_7_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function StockIndexComponent_Template_app_kendo_custome_grid_commandActionClick_7_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" warehouses ", ctx.store_type, " stock list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_9__["KendoCustomeGridComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvY2staW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUtFLFlBQUE7RUFDQSxvQkFBQTtBQUhKO0FBRkk7RUFDRSxlQUFBO0FBSU47QUFFSTtFQUNFLFlBQUE7QUFBTiIsImZpbGUiOiJzdG9jay1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG5iLWNhcmQge1xuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warehouses-stock-index',
                templateUrl: 'stock-index.component.html',
                styleUrls: ['stock-index.component.scss'],
            }]
    }], function () { return [{ type: _services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__["WarehousesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }] }); })();


/***/ }),

/***/ "cvEj":
/*!*******************************************************!*\
  !*** ./src/app/pages/warehouses/warehouses.module.ts ***!
  \*******************************************************/
/*! exports provided: WarehousesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehousesModule", function() { return WarehousesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing.module */ "HF7s");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "OCKt");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-edit/create-edit.component */ "nBFM");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/upload-image/upload-image.module */ "v/J1");
/* harmony import */ var _stock_index_stock_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-index/stock-index.component */ "U4iQ");













class WarehousesModule {
}
WarehousesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WarehousesModule });
WarehousesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WarehousesModule_Factory(t) { return new (t || WarehousesModule)(); }, imports: [[
            _routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
            _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__["UploadImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WarehousesModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
        _stock_index_stock_index_component__WEBPACK_IMPORTED_MODULE_11__["StockIndexComponent"],
        _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditomponent"]], imports: [_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
        _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__["UploadImageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WarehousesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
                    _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__["UploadImageModule"],
                ],
                declarations: [
                    _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                    _stock_index_stock_index_component__WEBPACK_IMPORTED_MODULE_11__["StockIndexComponent"],
                    _create_edit_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["CreateEditomponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "nBFM":
/*!***********************************************************************!*\
  !*** ./src/app/pages/warehouses/create-edit/create-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateEditomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditomponent", function() { return CreateEditomponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/util/isObject */ "GMZp");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var _services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/warehouses/warehouses.services */ "Eqny");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["autoComplete"];
function CreateEditomponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid english name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEditomponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid arabic name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEditomponent_nb_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5.name_en, " ");
} }
class CreateEditomponent {
    constructor(activeRouter, toaster, warehousesService, sharedService, route) {
        this.activeRouter = activeRouter;
        this.toaster = toaster;
        this.warehousesService = warehousesService;
        this.sharedService = sharedService;
        this.route = route;
        this.dropzoneConfig = {
            paramName: 'file',
            maxFilesize: 2,
            autoQueue: false,
            url: '/',
            autoProcessQueue: false,
            multi: false
        };
        this.cityList = [];
        this.isLoading = false;
        this.autoLoad = false;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            name_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            city_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            address_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            address_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            activation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    }
    ngOnInit() {
        this.store_type = this.route.url.split('/')[2];
        this.store_type_id = (this.store_type == 'stores') ? 1 : 2;
        this.activeRouter.params.subscribe(v => this.id = v.id);
        if (this.id) {
            this.title = 'Edit';
            this.getObject();
        }
        else {
            this.title = 'Add';
        }
        this.formGroup.get('city_id').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(800)).subscribe(res => {
            if (!Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(res)) {
                this.autoLoad = true;
                this.getAllCities(res);
            }
        });
    }
    getAllCities(value) {
        let query = value ? '?name=' + value : '';
        this.sharedService.getCities(query).subscribe(res => {
            this.cityList = res['data'];
        }, error => {
            this.autoLoad = false;
        }, () => {
            this.autoLoad = false;
        });
    }
    getObject() {
        this.warehousesService.getWarehouse(this.id).subscribe(res => {
            this.formGroup.patchValue(res['data']);
            this.formGroup.get('city_id').setValue(res['data'].city);
        }, err => {
            this.toaster.show(err.error.message, 'Error', { status: 'danger' });
        }, () => {
            // this.autoComplete.nativeElement.blur();
        });
    }
    editForm() {
        if (this.formGroup.valid) {
            this.isLoading = true;
            const uploadData = new FormData();
            this.formGroup.value.id ? uploadData.append('id', this.formGroup.value.id) : false;
            this.formGroup.value.name_en ? uploadData.append('name_en', this.formGroup.value.name_en) : false;
            this.formGroup.value.name_ar ? uploadData.append('name_ar', this.formGroup.value.name_ar) : false;
            this.formGroup.value.latitude ? uploadData.append('latitude', this.formGroup.value.latitude) : false;
            this.formGroup.value.longitude ? uploadData.append('longitude', this.formGroup.value.longitude) : false;
            this.formGroup.value.address_en ? uploadData.append('address_en', this.formGroup.value.address_en) : false;
            this.formGroup.value.address_ar ? uploadData.append('address_ar', this.formGroup.value.address_ar) : false;
            this.formGroup.value.city_id ? uploadData.append('city_id', this.formGroup.value.city_id.id) : false;
            uploadData.append('store_type_id', this.store_type_id);
            uploadData.append('activation', this.formGroup.value.activation === null ? false : this.formGroup.value.activation);
            this.warehousesService[(this.id ? 'edit' : 'Create') + 'Warehouse'](uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.route.navigateByUrl('/warehouses/' + this.store_type);
            }, err => {
                this.toaster.show(err.error.message, 'Error', { status: 'danger' });
                this.isLoading = false;
            }, () => {
                this.isLoading = false;
            });
        }
        else {
            const controls = this.formGroup.controls;
            let result = Object.keys(controls).map(key => ({ id: key, option: controls[key] }));
            result = result.filter(ele => ele.option.hasError('required'));
            this.toaster.show(result[0].id + ' is required', 'Error', { status: 'danger' });
        }
    }
    viewHandle(value) {
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
            return value.name_en;
        }
        else {
            return value;
        }
    }
    backToIndex() {
        this.route.navigate(['warehouses']);
    }
    get bf() {
        return this.formGroup.controls;
    }
}
CreateEditomponent.ɵfac = function CreateEditomponent_Factory(t) { return new (t || CreateEditomponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__["WarehousesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CreateEditomponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateEditomponent, selectors: [["create-edit-warehouses"]], viewQuery: function CreateEditomponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoComplete = _t.first);
    } }, decls: 59, vars: 23, consts: [[3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "first-row", 3, "fxFlex"], [1, "form-control-container", 3, "fxFlex"], [1, "field-with-validation"], ["for", "name_en"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_en", "id", "name_en"], [4, "ngIf"], ["for", "name_ar"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_ar", "id", "name_ar"], ["for", "latitude"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "latitude", "id", "latitude"], ["for", "longitude"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "longitude", "id", "longitude"], ["for", "address_en"], ["nbInput", "", "id", "address_en", "fullWidth", "", "formControlName", "address_en"], ["for", "address_ar"], ["nbInput", "", "id", "address_ar", "fullWidth", "", "formControlName", "address_ar"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "second-row", 3, "fxFlex"], ["for", "city"], ["autocomplete", "off", "type", "text", "nbInput", "", "placeholder", "Search for city", "fullWidth", "", "formControlName", "city_id", "id", "city", 3, "nbAutocomplete"], ["autoComplete", ""], [3, "handleDisplayFn"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control-container", "checkbox-container", 3, "fxFlex"], ["formControlName", "activation"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "disabled", "click"], [3, "value"]], template: function CreateEditomponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name En *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateEditomponent_small_12_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name Ar *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateEditomponent_small_18_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Map Latitude ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Map Longitude ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Address En");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Address Ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-autocomplete", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CreateEditomponent_nb_option_50_Template, 2, 2, "nb-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nb-checkbox", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEditomponent_Template_button_click_55_listener() { return ctx.backToIndex(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEditomponent_Template_button_click_57_listener() { return ctx.editForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.title, " ", ctx.store_type, " warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_en.errors == null ? null : ctx.bf.name_en.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_ar.errors == null ? null : ctx.bf.name_ar.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.autoLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx.viewHandle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formGroup == null ? null : ctx.formGroup.invalid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbOptionComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .dz-message {\n  margin: 0 !important;\n  width: 100% !important;\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNKO0FBR007RUFDRSxtQkFBQTtBQURSO0FBR1E7RUFDRSxnQkFBQTtBQURWO0FBS007RUFDRSxtQkFBQTtBQUhSO0FBT1E7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFMVjtBQVlNO0VBQ0UsWUFBQTtBQVZSIiwiZmlsZSI6ImNyZWF0ZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmItY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICBuYi1jYXJkLWJvZHkge1xuXG4gICAgICAuZmlyc3Qtcm93IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcblxuICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmQtcm93IHsgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgICB9XG5cbiAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5kei1tZXNzYWdlIHtcbiAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBuYi1jYXJkLWZvb3RlciB7XG4gICAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEditomponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'create-edit-warehouses',
                templateUrl: 'create-edit.component.html',
                styleUrls: ['create-edit.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"] }, { type: _services_warehouses_warehouses_services__WEBPACK_IMPORTED_MODULE_7__["WarehousesServices"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { autoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoComplete']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-warehouses-warehouses-module.js.map