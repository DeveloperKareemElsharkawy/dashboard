(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-policies-policies-module"],{

/***/ "3M+I":
/*!*********************************************************************!*\
  !*** ./src/app/pages/policies/index-policies/policies.component.ts ***!
  \*********************************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/policies/policies.services */ "02IL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _policies_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policies.column */ "U8ky");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");
















const _c0 = ["dialog"];
class PoliciesComponent {
    constructor(policiesService, toaster, convertFilter, router, dialogService, sharedService) {
        this.policiesService = policiesService;
        this.toaster = toaster;
        this.convertFilter = convertFilter;
        this.router = router;
        this.dialogService = dialogService;
        this.sharedService = sharedService;
        this.columnGrid = _policies_column__WEBPACK_IMPORTED_MODULE_3__["PolicyColumn"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = {
            name: 'policies',
            list: []
        };
        this.isLoading = false;
    }
    ngOnInit() {
        this.getPolicies();
    }
    getPolicies(meta) {
        this.isLoading = true;
        this.lastMeta = meta;
        this.policiesService.getPolicies(meta).subscribe(res => {
            this.dataItem.data = res['data'];
            this.dataItem.total = 4;
            // this.dataItem.total = res['total'];
        }, error => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./policies/edit-policy/' + event.data.id]);
                break;
        }
    }
    open(dialog) {
        this.dialogService.open(dialog);
    }
    filterChange(event) {
        this.getPolicies(this.convertFilter.convertToQuery(event));
    }
    export() {
        this.sharedService.exportUrl = this.lastMeta ? 'policies/export/excel?' + this.lastMeta : 'policies/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(data, 'policies.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
}
PoliciesComponent.ɵfac = function PoliciesComponent_Factory(t) { return new (t || PoliciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_policies_policies_services__WEBPACK_IMPORTED_MODULE_1__["PoliciesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_5__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"])); };
PoliciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoliciesComponent, selectors: [["app-policies"]], viewQuery: function PoliciesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 10, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["nbButton", "", "status", "danger", "size", "small", 1, "mr-2", 3, "click"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "commandActionClick"]], template: function PoliciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Policies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PoliciesComponent_Template_button_click_6_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-kendo-custome-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function PoliciesComponent_Template_app_kendo_custome_grid_stateChange_9_listener($event) { return ctx.filterChange($event); })("commandActionClick", function PoliciesComponent_Template_app_kendo_custome_grid_commandActionClick_9_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false)("loading", ctx.isLoading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_9__["KendoCustomeGridComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccG9saWNpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUtFLFlBQUE7RUFDQSxvQkFBQTtBQUhKO0FBRkk7RUFDRSxlQUFBO0FBSU47QUFFSTtFQUNFLFlBQUE7QUFBTiIsImZpbGUiOiJwb2xpY2llcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG5iLWNhcmQge1xuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoliciesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-policies',
                templateUrl: 'policies.component.html',
                styleUrls: ['policies.component.scss'],
            }]
    }], function () { return [{ type: _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_1__["PoliciesServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_5__["FilterToQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }] }); })();


/***/ }),

/***/ "3MPu":
/*!***************************************************!*\
  !*** ./src/app/pages/policies/policies.module.ts ***!
  \***************************************************/
/*! exports provided: PoliciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesModule", function() { return PoliciesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _policies_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policies-routing.module */ "pveK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _index_policies_policies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-policies/policies.component */ "3M+I");
/* harmony import */ var _edit_policies_edit_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-policies/edit-policy.component */ "qscZ");











class PoliciesModule {
}
PoliciesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PoliciesModule });
PoliciesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PoliciesModule_Factory(t) { return new (t || PoliciesModule)(); }, imports: [[
            _policies_routing_module__WEBPACK_IMPORTED_MODULE_4__["PoliciesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PoliciesModule, { declarations: [_index_policies_policies_component__WEBPACK_IMPORTED_MODULE_8__["PoliciesComponent"], _edit_policies_edit_policy_component__WEBPACK_IMPORTED_MODULE_9__["EditPolicyComponent"]], imports: [_policies_routing_module__WEBPACK_IMPORTED_MODULE_4__["PoliciesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PoliciesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _policies_routing_module__WEBPACK_IMPORTED_MODULE_4__["PoliciesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
                ],
                declarations: [
                    _policies_routing_module__WEBPACK_IMPORTED_MODULE_4__["PoliciesRoutingModule"].components
                ],
            }]
    }], null, null); })();


/***/ }),

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

/***/ "U8ky":
/*!******************************************************************!*\
  !*** ./src/app/pages/policies/index-policies/policies.column.ts ***!
  \******************************************************************/
/*! exports provided: PolicyColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyColumn", function() { return PolicyColumn; });
const PolicyColumn = [
    {
        dataType: 'text',
        id: 'policy_id',
        name: 'ID',
        field: 'id',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'policy_en_name',
        name: 'Name En',
        field: 'name_en',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'policy_ar_name',
        name: 'Name Ar',
        field: 'name_ar',
        filterType: 'string',
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
            }
        ]
    },
];


/***/ }),

/***/ "pveK":
/*!***********************************************************!*\
  !*** ./src/app/pages/policies/policies-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PoliciesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesRoutingModule", function() { return PoliciesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _index_policies_policies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-policies/policies.component */ "3M+I");
/* harmony import */ var _edit_policies_edit_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-policies/edit-policy.component */ "qscZ");







const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _index_policies_policies_component__WEBPACK_IMPORTED_MODULE_3__["PoliciesComponent"] },
            { path: 'edit-policy/:id', component: _edit_policies_edit_policy_component__WEBPACK_IMPORTED_MODULE_4__["EditPolicyComponent"] },
        ],
    }];
class PoliciesRoutingModule {
}
PoliciesRoutingModule.components = [
    _index_policies_policies_component__WEBPACK_IMPORTED_MODULE_3__["PoliciesComponent"],
    _edit_policies_edit_policy_component__WEBPACK_IMPORTED_MODULE_4__["EditPolicyComponent"]
];
PoliciesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PoliciesRoutingModule });
PoliciesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PoliciesRoutingModule_Factory(t) { return new (t || PoliciesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PoliciesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PoliciesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "qscZ":
/*!***********************************************************************!*\
  !*** ./src/app/pages/policies/edit-policies/edit-policy.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPolicyComponent", function() { return EditPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/policies/policies.services */ "02IL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/roles/roles.services */ "Rt6e");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");















function EditPolicyComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name En field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name En supports only Letters, Spaces, Single Quote and Dashes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name En length must be at least 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name Ar supports only Letters, Spaces, Single Quote and Dashes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name Ar length must be at least 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description En field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description En length must be at least 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description Ar field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPolicyComponent_small_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description Ar length must be at least 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditPolicyComponent {
    constructor(policiesService, activeRouter, roleService, toaster, route) {
        this.policiesService = policiesService;
        this.activeRouter = activeRouter;
        this.roleService = roleService;
        this.toaster = toaster;
        this.route = route;
        this.title = "";
        this.roles = [];
        this.isLoading = false;
        this.errorColors = '';
        this.policiesFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            name_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(32), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z-\'.+-, \s]*$')]),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(32), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]),
            description_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]),
            description_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]),
            activation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
    }
    ngOnInit() {
        this.activeRouter.params.subscribe(v => this.policiesId = v.id);
        if (this.policiesId) {
            this.title = "Edit";
            this.getPolicy();
        }
        else {
            this.title = "Add";
        }
    }
    getPolicy() {
        this.isLoading = true;
        this.policiesService.getPolicy(this.policiesId).subscribe(res => {
            const { name_ar, name_en, id, activation, description_en, description_ar } = res['data'];
            this.policiesFormGroup.setValue({ name_ar, name_en, id, activation, description_en, description_ar });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
        }, () => {
            this.isLoading = false;
        });
    }
    editPolicy() {
        if (this.policiesFormGroup.valid) {
            this.isLoading = true;
            this.errorColors = '';
            let response = {};
            this.policiesService[this.policiesId ? 'editPolicy' : 'CreatePolicy'](this.policiesFormGroup.value).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                response = res['data'];
                this.route.navigateByUrl('/policies');
            }, error => {
                this.isLoading = false;
                if (error.error.errors) {
                    if (error.error.errors['name_en'] && error.error.errors['name_en'].length > 0) {
                        for (let i = 0; i < error.error.errors['name_en'].length; i++) {
                            this.errorColors ? this.errorColors += ', ' + error.error.errors['name_en'][i] : this.errorColors += error.error.errors['name_en'][i];
                        }
                    }
                    if (error.error.errors['name_ar'] && error.error.errors['name_ar'].length > 0) {
                        for (let i = 0; i < error.error.errors['name_ar'].length; i++) {
                            this.errorColors ? this.errorColors += ', ' + error.error.errors['name_ar'][i] : this.errorColors += error.error.errors['name_ar'][i];
                        }
                    }
                }
                this.toaster.show(this.errorColors, 'Error', { status: 'danger' });
            }, () => {
                this.isLoading = false;
                this.updateLoggedInData(response);
            });
        }
        else {
            this.toaster.show('Form Not Valid', 'Error', { status: 'danger' });
        }
    }
    updateLoggedInData(res) {
        let loggedInAdmin = JSON.parse(localStorage.getItem('admin'));
        if (loggedInAdmin['user_id'] === Number(this.policiesId)) {
            if (loggedInAdmin['name'] !== this.policiesFormGroup.value['name']) {
                loggedInAdmin.name = this.policiesFormGroup.value['name'];
                localStorage.setItem('policies', JSON.stringify(loggedInAdmin));
            }
        }
    }
    backToPolicy() {
        this.route.navigate(['policies']);
    }
}
EditPolicyComponent.ɵfac = function EditPolicyComponent_Factory(t) { return new (t || EditPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_policies_policies_services__WEBPACK_IMPORTED_MODULE_1__["PoliciesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__["RolesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPolicyComponent, selectors: [["app-edit-policy"]], decls: 45, vars: 27, consts: [[3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row", "fxLayout.xs", "column-reverse", "fxLayoutAlign", "space-between start", "fxLayoutAlign.xs", "start center", "fxLayoutGap", "gappx", 1, "form-container"], [3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "first-row"], [1, "form-control-container", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], [1, "field-with-validation"], ["for", "name"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_en", "maxlength", "32", "minlength", "2", "id", "name"], [4, "ngIf"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_ar", "maxlength", "32", "minlength", "2", "id", "name"], ["nbInput", "", "id", "description_en", "fullWidth", "", "formControlName", "description_en"], ["nbInput", "", "id", "description_ar", "fullWidth", "", "formControlName", "description_ar"], [1, "form-control-container", "checkbox-container", 3, "fxFlex"], ["formControlName", "activation"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "disabled", "click"]], template: function EditPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name En *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditPolicyComponent_small_12_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditPolicyComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditPolicyComponent_small_14_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name Ar *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditPolicyComponent_small_20_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditPolicyComponent_small_21_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditPolicyComponent_small_22_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description En ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditPolicyComponent_small_28_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EditPolicyComponent_small_29_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Description Ar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EditPolicyComponent_small_35_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EditPolicyComponent_small_36_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nb-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPolicyComponent_Template_button_click_41_listener() { return ctx.backToPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPolicyComponent_Template_button_click_43_listener() { return ctx.editPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_6_0 = null;
        var tmp_12_0 = null;
        var tmp_18_0 = null;
        var tmp_23_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.policiesFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.policiesFormGroup.get("name_en")) == null ? null : tmp_6_0.touched) && ctx.policiesFormGroup.get("name_en").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.policiesFormGroup.get("name_en").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.policiesFormGroup.get("name_en").hasError("pattern") && ctx.policiesFormGroup.get("name_en").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.policiesFormGroup.get("name_ar")) == null ? null : tmp_12_0.touched) && ctx.policiesFormGroup.get("name_ar").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.policiesFormGroup.get("name_ar").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.policiesFormGroup.get("name_ar").hasError("pattern") && ctx.policiesFormGroup.get("name_ar").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.policiesFormGroup.get("description_en")) == null ? null : tmp_18_0.touched) && ctx.policiesFormGroup.get("description_en").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.policiesFormGroup.get("description_en").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.policiesFormGroup.get("description_ar")) == null ? null : tmp_23_0.touched) && ctx.policiesFormGroup.get("description_ar").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.policiesFormGroup.get("description_ar").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.policiesFormGroup == null ? null : ctx.policiesFormGroup.invalid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .image-uploader-xs[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .image-uploader[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNKO0FBSVE7RUFDRSxtQkFBQTtBQUZWO0FBTU07O0VBRUUsbUJBQUE7QUFKUjtBQU1ROztFQUNFLHFCQUFBO0FBSFY7QUFLVTs7RUFDRSxtQkFBQTtBQUZaO0FBS1U7O0VBQ0UsbUJBQUE7QUFGWjtBQU1ROztFQUNFLGdCQUFBO0FBSFY7QUFPTTtFQUNFLGtCQUFBO0FBTFI7QUFXTTtFQUNFLFlBQUE7QUFUUiIsImZpbGUiOiJlZGl0LXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG5iLWNhcmQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgbmItY2FyZC1ib2R5IHtcblxuICAgICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgLmltYWdlLXVwbG9hZGVyLXhzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5maXJzdC1yb3csXG4gICAgICAuc2Vjb25kLXJvdyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG5cbiAgICAgICAgLmZvcm0tY29udHJvbC1jb250YWluZXIteHMge1xuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuICAgICAgICAgIG5iLWZvcm0tZmllbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuYi1zZWxlY3Qge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5jaGVja2JveC1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmltYWdlLXVwbG9hZGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmItY2FyZC1mb290ZXIge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-policy',
                templateUrl: 'edit-policy.component.html',
                styleUrls: ['edit-policy.component.scss'],
            }]
    }], function () { return [{ type: _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_1__["PoliciesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__["RolesServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-policies-policies-module.js.map