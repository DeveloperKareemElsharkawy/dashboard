(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tvs-tvs-module"],{

/***/ "0M1j":
/*!*****************************************************!*\
  !*** ./src/app/pages/tvs/index-tv/tvs.component.ts ***!
  \*****************************************************/
/*! exports provided: TvsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvsComponent", function() { return TvsComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_app_tv_app_tv_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app-tv/app-tv.services */ "FjLO");
/* harmony import */ var _services_apps_apps_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/apps/apps.services */ "bowI");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _tv_column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tv.column */ "Eh7o");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");
























const _c0 = ["dialog"];
function TvsComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TvsComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TvsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Delete Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Are you sure to delete app ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TvsComponent_ng_template_11_Template_button_click_10_listener() { const ref_r6 = ctx.dialogRef; return ref_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TvsComponent_ng_template_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ref_r6 = ctx.dialogRef; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.deleteAppTv(ref_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.currentDeleteApp == null ? null : ctx_r2.currentDeleteApp.id);
} }
class TvsComponent {
    constructor(appTvServices, appsServices, dialogService, toaster, router, convertFilter, categoryService, storesServices, _datePipe, sharedService) {
        this.appTvServices = appTvServices;
        this.appsServices = appsServices;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.router = router;
        this.convertFilter = convertFilter;
        this.categoryService = categoryService;
        this.storesServices = storesServices;
        this._datePipe = _datePipe;
        this.sharedService = sharedService;
        this.columnGrid = _tv_column__WEBPACK_IMPORTED_MODULE_9__["tvColumn"];
        this.autoCompleteData = [
            {
                name: 'category',
                list: []
            },
            {
                name: 'store',
                list: []
            }
        ];
        this.dataItem = {
            data: [],
            total: 0
        };
        this.loading = false;
        this.apps = [];
        this.types = [];
        this.appOptions = [];
        this.appTvTypes = [];
    }
    ngOnInit() {
        this.getAppTvs();
        this.getAppsForSelection();
        this.getAppTvTypes();
        this.getAppTvLocation();
    }
    getAppTvs(meta) {
        this.loading = true;
        this.lastMeta = meta;
        this.appTvServices.getAppTvs(meta).subscribe(res => {
            this.dataItem.data = res['data'];
            this.dataItem.total = res['total'];
        }, error => {
        }, () => {
            this.loading = false;
        });
    }
    getAppsForSelection() {
        this.appsServices.getAppsForSelection().subscribe(res => {
            this.columnGrid.filter(ele => ele.field === 'app')[0].filterMenu = res['data'].map(ele => {
                let data = {
                    textField: ele.name,
                    valueField: ele.id
                };
                return data;
            });
        }, error => {
        }, () => {
        });
    }
    getAppTvTypes() {
        this.appTvServices.getAppTvTypes().subscribe(res => {
            this.columnGrid.filter(ele => ele.field === 'type')[0].filterMenu = res['data'].map(ele => {
                let data = {
                    textField: ele.name,
                    valueField: ele.id
                };
                return data;
            });
        }, error => {
        }, () => {
        });
    }
    getAppTvLocation() {
        this.appTvServices.getAppTvLocation().subscribe(res => {
            this.columnGrid.filter(ele => ele.field === 'location')[0].filterMenu = res['data'].map(ele => {
                let data = {
                    textField: ele,
                    valueField: ele
                };
                return data;
            });
        }, error => {
        }, () => {
        });
    }
    getCategories(meta) {
        this.categoryService.getCategoriesByLevel("", meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'category')[0].list = res['data'];
        }, error => {
        });
    }
    getStores(meta) {
        this.storesServices.getAllStores(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'store')[0].list = res['data'];
        }, error => {
        });
    }
    deleteAppTv(dialogRef) {
        this.appTvServices.deleteAppTv(this.currentDeleteApp.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            this.getAppTvs();
            dialogRef.close();
        });
    }
    filterChange(event) {
        let newEvent = Object.assign({}, event);
        this.getAppTvs(this.convertFilter.convertToQuery(newEvent));
    }
    autoCompleteFilterChangeCheck(event) {
        const autotype = event.fieldName;
        if (autotype === 'category') {
            const meta = 'name=' + event.value;
            this.getCategories(meta);
        }
        if (autotype === 'store') {
            const meta = 'name=' + event.value;
            this.getStores(meta);
        }
    }
    open(dialog) {
        this.dialogService.open(dialog);
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./sliders/edit-slider/' + event.data.id]);
                break;
            case 'delete':
                this.currentDeleteApp = event.data;
                this.open(this.dialog);
                break;
        }
    }
    export() {
        this.sharedService.exportUrl = this.lastMeta ? 'app-tv/export/excel?' + this.lastMeta : 'app-tv/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"])(data, 'app-tv.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
}
TvsComponent.ɵfac = function TvsComponent_Factory(t) { return new (t || TvsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_tv_app_tv_services__WEBPACK_IMPORTED_MODULE_4__["AppTvServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_apps_apps_services__WEBPACK_IMPORTED_MODULE_5__["AppsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_7__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_6__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_8__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_11__["SharedApiServiceService"])); };
TvsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TvsComponent, selectors: [["app-tvs"]], viewQuery: function TvsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 13, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["nbButton", "", "class", "mr-2", "status", "danger", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "routerLink", "/sliders/create-slider", "status", "primary", "size", "small"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "autoCompleteFilterChange", "commandActionClick"], ["dialog", ""], ["nbButton", "", "status", "danger", "size", "small", 1, "mr-2", 3, "click"], [1, "dialog-card"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"]], template: function TvsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " App Sliders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TvsComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add New Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-kendo-custome-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("stateChange", function TvsComponent_Template_app_kendo_custome_grid_stateChange_10_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function TvsComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_10_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function TvsComponent_Template_app_kendo_custome_grid_commandActionClick_10_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TvsComponent_ng_template_11_Template, 14, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataItem.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_13__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdHZzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFLRSxZQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUZJO0VBQ0UsZUFBQTtBQUlOO0FBRUk7RUFDRSxZQUFBO0FBQU4iLCJmaWxlIjoidHZzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmItY2FyZCB7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TvsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-tvs',
                templateUrl: 'tvs.component.html',
                styleUrls: ['tvs.component.scss'],
            }]
    }], function () { return [{ type: _services_app_tv_app_tv_services__WEBPACK_IMPORTED_MODULE_4__["AppTvServices"] }, { type: _services_apps_apps_services__WEBPACK_IMPORTED_MODULE_5__["AppsServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_7__["FilterToQueryService"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_6__["CategoriseServices"] }, { type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_8__["StoresServices"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_11__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dialog']
        }] }); })();


/***/ }),

/***/ "0eH0":
/*!*************************************************!*\
  !*** ./src/app/pages/tvs/tvs-routing.module.ts ***!
  \*************************************************/
/*! exports provided: TvsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvsRoutingModule", function() { return TvsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _edit_tv_edit_tv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-tv/edit-tv.component */ "mpap");
/* harmony import */ var _index_tv_tvs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-tv/tvs.component */ "0M1j");







const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _index_tv_tvs_component__WEBPACK_IMPORTED_MODULE_4__["TvsComponent"] },
            { path: 'create-slider', component: _edit_tv_edit_tv_component__WEBPACK_IMPORTED_MODULE_3__["EditTvComponent"] },
            { path: 'edit-slider/:id', component: _edit_tv_edit_tv_component__WEBPACK_IMPORTED_MODULE_3__["EditTvComponent"] },
        ],
    }];
class TvsRoutingModule {
}
TvsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TvsRoutingModule });
TvsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TvsRoutingModule_Factory(t) { return new (t || TvsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TvsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TvsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
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

/***/ "Eh7o":
/*!*************************************************!*\
  !*** ./src/app/pages/tvs/index-tv/tv.column.ts ***!
  \*************************************************/
/*! exports provided: tvColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tvColumn", function() { return tvColumn; });
const tvColumn = [
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
        id: 'location',
        name: 'Location',
        field: 'location',
        filterType: 'menu',
        filterMenu: [],
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'category',
        name: 'Category',
        field: 'category',
        fieldAttrName: 'name_en',
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'app',
        name: 'App',
        field: 'app',
        fieldAttrName: 'app_en',
        filterType: 'menu',
        filterMenu: [],
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'type',
        name: 'Type',
        field: 'type',
        fieldAttrName: 'type_en',
        filterType: 'menu',
        filterMenu: [],
        fieldSearch: 'type_id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'date',
        id: 'expiry_date',
        name: 'Expiry date',
        field: 'expiry_date',
        filterType: 'menu',
        filterMenu: [
            { textField: 'Valid', valueField: 'valid' },
            { textField: 'Expired', valueField: 'expired' },
        ],
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
            {
                action: 'delete',
                color: 'warn',
                id: 'delete-action',
                hidden: false,
                toolTip: 'Delete',
                icon: 'delete',
                buttonType: 'icon',
                disabled: () => false,
            }
        ]
    },
];


/***/ }),

/***/ "FjLO":
/*!****************************************************!*\
  !*** ./src/app/services/app-tv/app-tv.services.ts ***!
  \****************************************************/
/*! exports provided: AppTvServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTvServices", function() { return AppTvServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AppTvServices {
    constructor(http) {
        this.http = http;
    }
    getAppTvs(meta) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/app-tv' + (meta ? ('?' + meta) : '');
        return this.http.get(url);
    }
    getAppTv(id) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/app-tv/' + id;
        return this.http.get(url);
    }
    getAppTvTypes() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/app-tv/select/types';
        return this.http.get(url);
    }
    getAppTvLocation() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/app-tv/select/locations';
        return this.http.get(url);
    }
    createAppTv(newAppTv) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/app-tv';
        return this.http.post(url, newAppTv);
    }
    updateAppTv(appTv) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/app-tv/update';
        return this.http.post(url, appTv);
    }
    deleteAppTv(id) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/app-tv/' + id;
        return this.http.delete(url);
    }
}
AppTvServices.ɵfac = function AppTvServices_Factory(t) { return new (t || AppTvServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppTvServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppTvServices, factory: AppTvServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppTvServices, [{
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

/***/ "LHs9":
/*!************************************************************!*\
  !*** ./src/app/services/categories/categories.services.ts ***!
  \************************************************************/
/*! exports provided: CategoriseServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriseServices", function() { return CategoriseServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CategoriseServices {
    constructor(http) {
        this.http = http;
    }
    getCategoriseForAdmin(meta) {
        const url = meta ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/get-categories-for-admin?' + meta : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/get-categories-for-admin';
        return this.http.get(url);
    }
    getCategorise(meta) {
        const url = meta ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories?' + meta : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories';
        return this.http.get(url);
    }
    getCategoriesByLevel(level, meta) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories?level=' + level;
        url = meta ? url + '&' + meta : url;
        return this.http.get(url);
    }
    getCategoriesAllWithTree() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/get-all-main-sub-child';
        return this.http.get(url);
    }
    getParentCategorise(meta) {
        const url = meta ? _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/parent-and-sub?' + meta : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/parent-and-sub';
        return this.http.get(url);
    }
    CreateCategory(newCategory) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories';
        return this.http.post(url, newCategory);
    }
    getCategory(categoryId) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/' + categoryId;
        return this.http.get(url);
    }
    editCategory(category) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/update';
        return this.http.post(url, category);
    }
    deleteCategory(categoryId) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({}),
            body: {
                id: categoryId
            }
        };
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories';
        return this.http.delete(url, options);
    }
    selectedCategories(filter) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/list/' + filter;
        return this.http.get(url);
    }
    getCategoriesForSelection() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/categories/for-selection';
        return this.http.get(url);
    }
}
CategoriseServices.ɵfac = function CategoriseServices_Factory(t) { return new (t || CategoriseServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriseServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriseServices, factory: CategoriseServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriseServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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

/***/ "TpDe":
/*!*****************************************!*\
  !*** ./src/app/pages/tvs/tvs.module.ts ***!
  \*****************************************/
/*! exports provided: TvsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvsModule", function() { return TvsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _tvs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tvs-routing.module */ "0eH0");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _edit_tv_edit_tv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-tv/edit-tv.component */ "mpap");
/* harmony import */ var _index_tv_tvs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-tv/tvs.component */ "0M1j");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












class TvsModule {
}
TvsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TvsModule });
TvsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TvsModule_Factory(t) { return new (t || TvsModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _tvs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TvsRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAutocompleteModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TvsModule, { declarations: [_index_tv_tvs_component__WEBPACK_IMPORTED_MODULE_7__["TvsComponent"],
        _edit_tv_edit_tv_component__WEBPACK_IMPORTED_MODULE_6__["EditTvComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _tvs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TvsRoutingModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAutocompleteModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TvsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _tvs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TvsRoutingModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAutocompleteModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbFormFieldModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
                ],
                declarations: [
                    _index_tv_tvs_component__WEBPACK_IMPORTED_MODULE_7__["TvsComponent"],
                    _edit_tv_edit_tv_component__WEBPACK_IMPORTED_MODULE_6__["EditTvComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "mpap":
/*!********************************************************!*\
  !*** ./src/app/pages/tvs/edit-tv/edit-tv.component.ts ***!
  \********************************************************/
/*! exports provided: EditTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTvComponent", function() { return EditTvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_app_tv_app_tv_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app-tv/app-tv.services */ "FjLO");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/products/products.services */ "NDz+");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _services_apps_apps_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/apps/apps.services */ "bowI");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/sellers/sellers.services */ "7Qae");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _shared_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/upload-image/upload-image.component */ "nCPL");


























const _c0 = ["autoComplete"];
function EditTvComponent_div_14_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r15.name_en, " ");
} }
function EditTvComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EditTvComponent_div_14_nb_option_4_Template, 2, 2, "nb-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 1)("fxFlex.xs", 100)("ngClass", ctx_r0.tvTypeControl.value == 1 ? "" : "display-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categoriesOptions);
} }
function EditTvComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title Name field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTvComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title Name field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTvComponent_nb_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", app_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r16.name);
} }
function EditTvComponent_nb_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r17.name);
} }
function EditTvComponent_small_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditTvComponent_nb_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r18.name_en, " ");
} }
function EditTvComponent_nb_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19.name ? item_r19.name : item_r19.name_en ? item_r19.name_en : "", " ");
} }
function EditTvComponent_small_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.itemTypePlaceholder, " Id field is required");
} }
function EditTvComponent_nb_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r20.name, " ");
} }
function EditTvComponent_small_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r13.itemTypePlaceholder, " Id field is required");
} }
const _c1 = function () { return [1, 2, 4, 5]; };
const _c2 = function () { return [1, 3, 4, 5]; };
const _c3 = function () { return [2]; };
class EditTvComponent {
    constructor(activeRouter, appTvService, toaster, productsServices, storesServices, sellersServices, appsServices, categoriseServices, route, _datePipe) {
        this.activeRouter = activeRouter;
        this.appTvService = appTvService;
        this.toaster = toaster;
        this.productsServices = productsServices;
        this.storesServices = storesServices;
        this.sellersServices = sellersServices;
        this.appsServices = appsServices;
        this.categoriseServices = categoriseServices;
        this.route = route;
        this._datePipe = _datePipe;
        this.tvFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({});
        this.tvTypeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,]);
        this.storList = [];
        this.itemTypeList = [];
        this.minDate = new Date();
        this.appTvTypes = [];
        this.selectOptions = [];
        this.locationOptions = [];
        this.appOptions = [];
        this.categoriesOptions = [];
        this.isLoading = false;
        this.formsubmit = false;
        this.selectText = '';
        this.selectedItems = [];
        this.getAppTvTypes();
        this.getAppsForSelection();
        this.getCategoriesForSelection();
        this.tvFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            title_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,]),
            title_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,]),
            description_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,]),
            description_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,]),
            mobile_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            web_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            app_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,]),
            item_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            expiry_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            item_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null),
            items_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            app: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            // cat_id: new FormControl(),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
            category_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, []),
            item: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](),
        });
    }
    ngOnInit() {
        this.tvFormGroup.get('category_ids').valueChanges.subscribe(res => {
            if (this.tvFormGroup.get('item_type').value) {
                this.changeitemTypePlaceholder(this.tvFormGroup.get('item_type').value);
            }
        });
        this.tvFormGroup.get('item_type').valueChanges.subscribe(res => {
            // if(res !=this.tvFormGroup.get('item_type').value){
            this.changeitemTypePlaceholder(res);
            // }
            //         // this.tvFormGroup.get('items_ids').reset([]);
            this.tvFormGroup.get('item_id').reset('');
            //         // this.itemTypeList = [];
            //         // this.changeitemTypePlaceholder(res);
            this.tvFormGroup.get('items_ids').setValue([]);
        });
        this.tvFormGroup.get('item_id').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(800)).subscribe(res => {
            this.changeitemTypePlaceholder(this.tvFormGroup.get('item_type').value, res);
        });
        this.activeRouter.params.subscribe(res => {
            this.appTvId = res.id;
            if (this.appTvId) {
                this.pageTitle = 'Edit';
                this.getAppId();
            }
            else {
                this.pageTitle = 'Create';
            }
        });
    }
    changeitemTypePlaceholder(res, search_name = "") {
        switch (res) {
            case 1:
                this.itemTypePlaceholder = 'Product';
                this.getProductsForSelection(search_name);
                break;
            case 2:
                this.itemTypePlaceholder = 'Products';
                this.getProductsForSelection();
                break;
            case 3:
                this.itemTypePlaceholder = 'Category';
                this.getCategoriesForSelectionItems();
                break;
            case 4:
                this.itemTypePlaceholder = 'Store';
                this.getStoresForSelection(search_name);
                break;
            case 5:
                this.itemTypePlaceholder = 'Seller';
                this.getSellersForSelection(search_name);
                break;
            default:
                break;
        }
    }
    getAppId() {
        this.appTvService.getAppTv(this.appTvId).subscribe(res => {
            res['data'].expiry_date = new Date(res['data'].expiry_date);
            // this.changeitemTypePlaceholder(res['data'].item_type);
            this.tvFormGroup.get('title_en').setValue(res['data'].title_en);
            this.tvFormGroup.get('title_ar').setValue(res['data'].title_ar);
            this.tvFormGroup.get('description_en').setValue(res['data'].description_en);
            this.tvFormGroup.get('description_ar').setValue(res['data'].description_ar);
            this.tvFormGroup.get('category_id').setValue(res['data'].category_id);
            this.tvFormGroup.get('expiry_date').setValue(res['data'].expiry_date);
            this.tvFormGroup.get('id').setValue(res['data'].id);
            this.tvFormGroup.get('app_id').setValue(res['data'].app_id);
            // this.tvFormGroup.patchValue(res['data']);
            this.tvFormGroup.get('item_type').setValue(res['data'].item_type);
            if (res['data'].items_ids != "null") {
                this.tvFormGroup.get('items_ids').setValue(res['data'].items_ids);
            }
            if (res['data'].item) {
                this.tvFormGroup.get('item_id').setValue(res['data'].item);
            }
            this.TvImage = res['data'].mobile_image;
            this.web_image = res['data'].web_image;
            // if(res['data'].item_id)
            // this.tvFormGroup.get('item_id').setValue({ name: "Prof. Dennis Lynch PhD" });
            // this.tvFormGroup.get('item_id').setValue(res['data'].item_id);
            // if (res['data'].item_type == 2 && res['data'].items_ids) {
            // this.tvFormGroup.get('item_id').setValue(JSON.parse(res['data'].items_ids).join(","));
            // this.tvFormGroup.get('item_id').setValue(JSON.parse(res['data'].items_ids).join(","));
            // }
            switch (res['data'].location) {
                case 'home':
                    this.tvTypeControl.setValue('0');
                    break;
                case 'category':
                    this.tvTypeControl.setValue('1');
                    break;
            }
            // this.tvFormGroup.get('items_ids').setValue((res['data'].items_ids));
        }, err => {
            this.toaster.show(err.error.message, 'Error', { status: 'danger' });
        }, () => {
            // this.tvFormGroup.get('item_id').setValue(this.tvFormGroup.get('item').value);
            // this.autoComplete.nativeElement.blur();
        });
    }
    getAppTvLocation() {
        this.appTvService.getAppTvLocation().subscribe(res => {
            this.locationOptions = res['data'];
        }, error => {
        }, () => {
        });
    }
    getAppTvTypes() {
        this.appTvService.getAppTvTypes().subscribe(res => {
            this.appTvTypes = res['data'];
        });
    }
    getCategoriesForSelection(res = "") {
        let query = 'name=' + res;
        this.categoriseServices.getCategoriesByLevel("", query).subscribe(res => {
            // this.itemTypeList = res['data'];
            this.categoriesOptions = res['data'];
        });
    }
    getCategoriesForSelectionItems(res = "") {
        let query = 'name=' + res;
        this.categoriseServices.getCategoriesByLevel("", query).subscribe(res => {
            // this.itemTypeList = res['data'];
            this.itemTypeList = res['data'];
        });
    }
    createAppTv() {
        this.formsubmit = true;
        if (this.tvFormGroup.valid) {
            const uploadData = new FormData();
            const formGroupValue = this.tvFormGroup.value;
            formGroupValue.id ? uploadData.append('id', formGroupValue.id) : false;
            uploadData.append('item_type', formGroupValue.item_type);
            uploadData.append('expiry_date', this._datePipe.transform(formGroupValue.expiry_date, 'yyyy-MM-dd'));
            uploadData.append('app_id', formGroupValue.app_id);
            uploadData.append('description_ar', formGroupValue.description_ar);
            uploadData.append('description_en', formGroupValue.description_en);
            uploadData.append('title_en', formGroupValue.title_en);
            uploadData.append('title_ar', formGroupValue.title_ar);
            if (formGroupValue.item_id)
                uploadData.append('item_id', formGroupValue.item_id.id);
            if (formGroupValue.item_type == 2) {
                formGroupValue.items_ids.forEach(element => {
                    uploadData.append('items_ids[]', element);
                });
            }
            // else {
            // uploadData.append('item_id', formGroupValue.item_id);
            // }
            // uploadData.append('web_image', formGroupValue.web_image);
            // uploadData.append('mobile_image', formGroupValue.mobile_image);
            // if (this.tvTypeControl.value !== 0) {
            //     uploadData.append('item_id', formGroupValue.item_id.id);
            // }
            if (formGroupValue.category_id) {
                uploadData.append('category_id', formGroupValue.category_id);
            }
            // if (formGroupValue.cat_id) {
            //     uploadData.append('cat_id', formGroupValue.cat_id?.id);
            // }
            if (this.selectedImage != undefined) {
                uploadData.append('mobile_image', this.selectedImage, this.selectedImage.name);
            }
            if (this.selectedImageWeb != undefined) {
                uploadData.append('web_image', this.selectedImageWeb, this.selectedImageWeb.name);
            }
            this.appTvService[this.appTvId ? 'updateAppTv' : 'createAppTv'](uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.route.navigateByUrl('/sliders');
            }, err => {
                this.toaster.show(err.error.message, 'Error', { status: 'danger' });
            }, () => {
            });
        }
    }
    getProductsForSelection(search_name = "") {
        var meta = "";
        if (this.tvFormGroup.get('category_ids').value) {
            meta = "category=" + this.tvFormGroup.get('category_ids').value.join(",");
        }
        if (search_name) {
            if (meta)
                meta += "&";
            meta += "name=" + search_name;
        }
        this.productsServices.getProductsForSelection(meta).subscribe(res => {
            this.itemTypeList = res['data'];
            // this.selectedItems = [1,2];
            // this.tvFormGroup.get('items_ids').setValue(this.selectedItems);
            // this.tvFormGroup.get('items_ids').setValue([1,2,3,5]);
        }, error => {
        }, () => {
        });
    }
    getStoresForSelection(search_name = "") {
        var meta = "";
        if (this.tvFormGroup.get('category_ids').value) {
            meta = "category=" + this.tvFormGroup.get('category_ids').value.join(",");
        }
        if (search_name) {
            if (meta)
                meta += "&";
            meta += "name=" + search_name;
        }
        this.storesServices.getStoresForSelection(meta).subscribe(res => {
            this.itemTypeList = res['data'];
        });
    }
    getSellersForSelection(search_name = "") {
        var meta = "";
        if (this.tvFormGroup.get('category_ids').value) {
            meta = "category=" + this.tvFormGroup.get('category_ids').value.join(",");
        }
        if (search_name) {
            if (meta)
                meta += "&";
            meta += "name=" + search_name;
        }
        this.sellersServices.getForSelection(meta).subscribe(res => {
            this.itemTypeList = res['data'];
        });
    }
    getAppsForSelection() {
        this.appsServices.getAppsForSelection().subscribe(res => {
            this.appOptions = res['data'];
        });
    }
    onAppTvImageChange(event) {
        this.selectedImage = event;
    }
    onAppTvImageWebChange(event) {
        this.selectedImageWeb = event;
    }
    viewHandle(value) {
        return (value.name_en ? value.name_en : (value.name ? value.name : value));
    }
    viewHandleCategory(value) {
        return (value.name_en ? value.name_en : value);
    }
    backToTv() {
        this.route.navigate(['sliders']);
    }
    get bf() {
        return this.tvFormGroup.controls;
    }
}
EditTvComponent.ɵfac = function EditTvComponent_Factory(t) { return new (t || EditTvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_tv_app_tv_services__WEBPACK_IMPORTED_MODULE_2__["AppTvServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_4__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_11__["SellersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_apps_apps_services__WEBPACK_IMPORTED_MODULE_5__["AppsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_6__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"])); };
EditTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTvComponent, selectors: [["app-edit-tv"]], viewQuery: function EditTvComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoComplete = _t.first);
    } }, decls: 90, vars: 67, consts: [["fxLayout", "row wrap", "fxLayout.xs", "column-reverse", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "start center", "fxLayoutGap", "gappx", 1, "form-container"], [1, "location-type", 3, "fxFlex"], ["placeholder", "Select Location", 3, "formControl", "fxFlex"], ["value", "0"], ["value", "1"], [3, "formGroup", "fxFlex", "fxFlex.xs"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "first-row"], ["class", "form-control-container", 3, "ngClass.xs", "fxFlex", "fxFlex.xs", "ngClass", 4, "ngIf"], [1, "form-control-container", 3, "fxFlex"], [1, "field-with-validation"], ["for", "title_en"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "title_en", "id", "title_en"], [4, "ngIf"], ["for", "title_ar"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "title_ar", "id", "title_ar"], ["for", "description_en"], ["nbInput", "", "id", "description_en", "fullWidth", "", "formControlName", "description_en"], ["for", "description_ar"], ["nbInput", "", "id", "description_ar", "fullWidth", "", "formControlName", "description_ar"], [1, "form-control-container", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], ["for", "select-app"], ["id", "select-app", "placeholder", "Select App", "formControlName", "app_id", "fullWidth", "", 3, "fxFlex.xs"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "expiry_date"], ["id", "expiry_date", "nbInput", "", "placeholder", "Select Expiration Date", "formControlName", "expiry_date", 3, "nbDatepicker"], [3, "min"], ["datepicker", ""], [1, "form-control-container", 3, "ngClass.xs", "fxFlex"], ["for", "select-type"], ["id", "select-type", "placeholder", "Select Type", "formControlName", "item_type", "fullWidth", ""], [1, "form-control-container", 3, "ngClass", "ngClass.xs", "fxFlex", "fxFlex.xs"], ["for", "category_ids"], ["multiple", "", "id", "category_ids", "placeholder", "Select Categories", "formControlName", "category_ids", "fullWidth", "", 3, "fxFlex.xs"], [1, "form-control-container", 3, "ngClass", "ngClass.xs", "fxFlex"], ["for", "item_id"], ["autocomplete", "off", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "item_id", "id", "item_id", 3, "placeholder", "nbAutocomplete"], ["autoComplete", ""], [3, "handleDisplayFn"], ["auto", ""], ["for", "items_ids"], ["multiple", "", "id", "items_ids", "formControlName", "items_ids", "fullWidth", "", 3, "placeholder", "fxFlex.xs"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "image-uploader", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], [3, "fxFlex", "image", "fileSelected"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "disabled", "click"], [1, "form-control-container", 3, "ngClass.xs", "fxFlex", "fxFlex.xs", "ngClass"], ["for", "category_id"], ["id", "category_id", "placeholder", "Category", "formControlName", "category_id", "fullWidth", "", 3, "fxFlex.xs"], [3, "value"]], template: function EditTvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Category Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditTvComponent_div_14_Template, 5, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title En *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditTvComponent_small_20_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Title Ar *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditTvComponent_small_26_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Description En");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Description Ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditTvComponent_nb_option_41_Template, 2, 2, "nb-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Expiration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nb-datepicker", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nb-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, EditTvComponent_nb_option_53_Template, 2, 2, "nb-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EditTvComponent_small_54_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Filter By Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nb-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EditTvComponent_nb_option_59_Template, 2, 2, "nb-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nb-autocomplete", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, EditTvComponent_nb_option_68_Template, 2, 2, "nb-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, EditTvComponent_small_69_Template, 2, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nb-select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, EditTvComponent_nb_option_75_Template, 2, 2, "nb-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, EditTvComponent_small_76_Template, 2, 1, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Image Mobile *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "upload-image", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileSelected", function EditTvComponent_Template_upload_image_fileSelected_80_listener($event) { return ctx.onAppTvImageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Image Web *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "upload-image", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileSelected", function EditTvComponent_Template_upload_image_fileSelected_84_listener($event) { return ctx.onAppTvImageWebChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTvComponent_Template_button_click_86_listener() { return ctx.backToTv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTvComponent_Template_button_click_88_listener() { return ctx.createAppTv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.pageTitle, " Tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.tvTypeControl)("fxFlex", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tvFormGroup)("fxFlex", 100)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.tvTypeControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tvTypeControl.value == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.title_en.touched && (ctx.bf.title_en.errors == null ? null : ctx.bf.title_en.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.title_ar.touched && (ctx.bf.title_en.errors == null ? null : ctx.bf.title_en.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appTvTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.item_type.touched && (ctx.bf.item_type.errors == null ? null : ctx.bf.item_type.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c1).includes(ctx.tvFormGroup.get("item_type").value) ? "" : "hidden")("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](65, _c2).includes(ctx.tvFormGroup.get("item_type").value) ? "" : "hidden")("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemTypePlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Search for ", ctx.itemTypePlaceholder, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx.viewHandle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.item_id.touched && (ctx.bf.item_id.errors == null ? null : ctx.bf.item_id.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](66, _c3).includes(ctx.tvFormGroup.get("item_type").value) ? "" : "hidden")("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itemTypePlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Select ", ctx.itemTypePlaceholder, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.items_ids.touched && (ctx.bf.items_ids.errors == null ? null : ctx.bf.items_ids.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "image-uploader-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100)("image", ctx.TvImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "image-uploader-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100)("image", ctx.web_image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tvFormGroup.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAutocompleteComponent"], _shared_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_14__["UploadImageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .image-uploader-xs[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .location-type[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .display-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .image-uploader[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC10di5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBRVI7QUFDZ0I7RUFDSSxtQkFBQTtBQUNwQjtBQUNnQjtFQUNJLG1CQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksd0JBQUE7QUFDcEI7QUFFWTtFQUNJLHdCQUFBO0FBQWhCO0FBRVk7O0VBRUksbUJBQUE7QUFBaEI7QUFDZ0I7O0VBQ0ksYUFBQTtBQUVwQjtBQURvQjs7OztFQUVJLFdBQUE7RUFDQSxlQUFBO0FBS3hCO0FBRmdCOztFQUNJLHFCQUFBO0FBS3BCO0FBSm9COztFQUNJLG1CQUFBO0FBT3hCO0FBTG9COztFQUNJLG1CQUFBO0FBUXhCO0FBSlk7RUFDSSxrQkFBQTtBQU1oQiIsImZpbGUiOiJlZGl0LXR2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBuYi1jYXJkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBuYi1jYXJkLWJvZHkge1xuICAgICAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAuaW1hZ2UtdXBsb2FkZXIteHMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9jYXRpb24tdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kaXNwbGF5LW5vbmUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhpZGRlbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlyc3Qtcm93LFxuICAgICAgICAgICAgLnNlY29uZC1yb3cge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgbmItZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sLWNvbnRhaW5lci14cyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbmItZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5iLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmltYWdlLXVwbG9hZGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-tv',
                templateUrl: 'edit-tv.component.html',
                styleUrls: ['edit-tv.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_app_tv_app_tv_services__WEBPACK_IMPORTED_MODULE_2__["AppTvServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrService"] }, { type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_3__["ProductsServices"] }, { type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_4__["StoresServices"] }, { type: _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_11__["SellersServices"] }, { type: _services_apps_apps_services__WEBPACK_IMPORTED_MODULE_5__["AppsServices"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_6__["CategoriseServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }]; }, { autoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoComplete']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-tvs-tvs-module.js.map