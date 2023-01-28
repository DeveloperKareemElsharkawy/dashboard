(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-child-module"],{

/***/ "0ATs":
/*!****************************************************************!*\
  !*** ./src/app/pages/categories/child/child-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ChildRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildRoutingModule", function() { return ChildRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _index_categoris_categorise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-categoris/categorise.component */ "4V/t");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "NuLa");







const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _index_categoris_categorise_component__WEBPACK_IMPORTED_MODULE_3__["CategoriseComponent"] },
            { path: 'create-category', component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__["EditCategoryComponent"] },
            { path: 'edit-category/:id', component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__["EditCategoryComponent"] },
        ],
    }];
class ChildRoutingModule {
}
ChildRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChildRoutingModule });
ChildRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ChildRoutingModule_Factory(t) { return new (t || ChildRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChildRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChildRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "4V/t":
/*!********************************************************************************!*\
  !*** ./src/app/pages/categories/child/index-categoris/categorise.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategoriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriseComponent", function() { return CategoriseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categorise_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorise.column */ "uZJw");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_packing_units_PackingUnits_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/packing-units/PackingUnits.services */ "phjX");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");



















const _c0 = ["dialog"];
function CategoriseComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriseComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoriseComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure to delete category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriseComponent_ng_template_12_Template_button_click_10_listener() { const ref_r6 = ctx.dialogRef; return ref_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriseComponent_ng_template_12_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ref_r6 = ctx.dialogRef; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteCategory(ref_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currentDeleteCategory.name_en);
} }
class CategoriseComponent {
    constructor(categoryService, packingUnitsService, router, convertFilter, dialogService, toaster, sharedService) {
        this.categoryService = categoryService;
        this.packingUnitsService = packingUnitsService;
        this.router = router;
        this.convertFilter = convertFilter;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.sharedService = sharedService;
        this.data = [];
        this.columnGrid = _categorise_column__WEBPACK_IMPORTED_MODULE_3__["gride"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = [
            {
                name: 'parent_name',
                list: []
            },
            {
                name: 'packing_unit',
                list: []
            },
        ];
        this.loading = false;
        this.showgride = false;
    }
    ngOnInit() {
        this.getCategorise();
        this.getPackingUnits();
    }
    getCategorise(meta) {
        this.lastMeta = meta;
        this.loading = true;
        this.categoryService.getCategoriesByLevel("3", meta).subscribe((res) => {
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
                    this.searchCategoriesId = event.filter.filters[i]['value'];
                }
            }
        }
        this.getCategorise(this.convertFilter.convertToQuery(event));
    }
    deleteCategory(dialogRef) {
        this.categoryService.deleteCategory(this.currentDeleteCategory.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getCategorise(this.lastMeta);
            this.currentDeleteCategory = null;
        });
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./categories/child/edit-category/' + event.data.id]);
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
        this.sharedService.exportUrl = this.searchCategoriesId ? 'categories/main/export/excel?category_id=' + this.searchCategoriesId : 'categories/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(data, 'categories-main.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
    getParentCategory(level, meta) {
        this.categoryService.getCategoriesByLevel(level, meta).subscribe(res => {
            if (level == 1) {
                this.autoCompleteData.filter(ele => ele.name === 'parent_parent_name')[0].name = "parent_parent_name";
            }
            else if (level == 2) {
                this.autoCompleteData.filter(ele => ele.name === 'parent_parent_name')[0].name = "parent_name";
            }
            this.autoCompleteData.filter(ele => ele.name === 'categories')[0].list = res['data'];
        }, error => {
        }, () => {
        });
    }
    getPackingUnits(meta) {
        let query = meta ? '?' + meta : '';
        this.packingUnitsService.getPackingUnitsList(query).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'packing_unit')[0].list = res['data'];
        }, error => {
        }, () => {
        });
    }
    autoCompleteFilterChangeCheck(event) {
        const type = event.fieldName;
        const meta = 'name=' + event.value;
        if (type === 'parent_parent_name') {
            const meta = 'name=' + event.value;
            this.getParentCategory(1, meta);
        }
        if (type === 'parent_name') {
            const meta = 'name=' + event.value;
            this.getParentCategory(2, meta);
        }
        if (type === 'packing_unit') {
            const meta = 'name=' + event.value;
            this.getPackingUnits(meta);
        }
    }
}
CategoriseComponent.ɵfac = function CategoriseComponent_Factory(t) { return new (t || CategoriseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_1__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_packing_units_PackingUnits_services__WEBPACK_IMPORTED_MODULE_8__["PackingUnitsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_4__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"])); };
CategoriseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriseComponent, selectors: [["app-category"]], viewQuery: function CategoriseComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 14, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["nbButton", "", "class", "mr-2", "status", "danger", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "routerLink", "/categories/child/create-category", "status", "primary", "size", "small"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "grid-container"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "autoCompleteFilterChange", "commandActionClick"], ["dialog", ""], ["nbButton", "", "status", "danger", "size", "small", 1, "mr-2", 3, "click"], [1, "dialog-card"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"]], template: function CategoriseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Sub Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoriseComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add New Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-kendo-custome-grid", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function CategoriseComponent_Template_app_kendo_custome_grid_stateChange_11_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function CategoriseComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_11_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function CategoriseComponent_Template_app_kendo_custome_grid_commandActionClick_11_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CategoriseComponent_ng_template_12_Template, 14, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataItem.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_11__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhdGVnb3Jpc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUtFLFlBQUE7RUFDQSxvQkFBQTtBQUhKO0FBRkk7RUFDRSxlQUFBO0FBSU47QUFFSTtFQUNFLFlBQUE7QUFBTiIsImZpbGUiOiJjYXRlZ29yaXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmItY2FyZCB7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: 'categorise.component.html',
                styleUrls: ['categorise.component.scss'],
            }]
    }], function () { return [{ type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_1__["CategoriseServices"] }, { type: _services_packing_units_PackingUnits_services__WEBPACK_IMPORTED_MODULE_8__["PackingUnitsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_4__["FilterToQueryService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbDialogService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }] }); })();


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

/***/ "DaOf":
/*!********************************************************!*\
  !*** ./src/app/pages/categories/child/child.module.ts ***!
  \********************************************************/
/*! exports provided: ChildModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildModule", function() { return ChildModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/theme.module */ "vTDv");
/* harmony import */ var _child_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-routing.module */ "0ATs");
/* harmony import */ var _index_categoris_categorise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-categoris/categorise.component */ "4V/t");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "NuLa");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/upload-image/upload-image.module */ "v/J1");












class ChildModule {
}
ChildModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChildModule });
ChildModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ChildModule_Factory(t) { return new (t || ChildModule)(); }, imports: [[
            _child_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChildRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
            _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__["UploadImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChildModule, { declarations: [_index_categoris_categorise_component__WEBPACK_IMPORTED_MODULE_5__["CategoriseComponent"],
        _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__["EditCategoryComponent"]], imports: [_child_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChildRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
        _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__["UploadImageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChildModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _child_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChildRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
                    _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_10__["UploadImageModule"],
                ],
                declarations: [
                    _index_categoris_categorise_component__WEBPACK_IMPORTED_MODULE_5__["CategoriseComponent"],
                    _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__["EditCategoryComponent"],
                ],
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

/***/ "NuLa":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/categories/child/edit-category/edit-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/util/isObject */ "GMZp");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_packing_units_PackingUnits_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/packing-units/PackingUnits.services */ "phjX");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/upload-image/upload-image.component */ "nCPL");

















const _c0 = ["autoComplete"];
const _c1 = ["autoCompleteMain"];
function EditCategoryComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid english name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCategoryComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid arabic name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCategoryComponent_nb_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r11.name_en, " ");
} }
function EditCategoryComponent_nb_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r12.name_en, " ");
} }
function EditCategoryComponent_nb_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r13.name_en, " ");
} }
class EditCategoryComponent {
    constructor(categoryService, activeRouter, toaster, packingUnitsService, route) {
        this.categoryService = categoryService;
        this.activeRouter = activeRouter;
        this.toaster = toaster;
        this.packingUnitsService = packingUnitsService;
        this.route = route;
        this.dropzoneConfig = {
            paramName: 'file',
            maxFilesize: 2,
            autoQueue: false,
            url: '/',
            autoProcessQueue: false,
            multi: false
        };
        this.categoriseList = [];
        this.mainCategoriseList = [];
        this.isLoading = false;
        this.autoLoad = false;
        this.autoLoadMainCategory = false;
        this.autoLoadPackingUnit = false;
        this.packingUnitsList = [];
        this.categoryFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            name_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z-\'.+-, \s]*$')]),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            main_category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            parent: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            activation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            is_seller: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            is_consumer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            packing_unit_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            packing_unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
    }
    ngOnInit() {
        this.getPackingUnits();
        this.activeRouter.params.subscribe(v => this.categoryId = v.id);
        if (this.categoryId) {
            this.title = 'Edit';
            this.getCategory();
        }
        else {
            this.title = 'Add';
        }
        this.categoryFormGroup.get('category_id').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(800)).subscribe(res => {
            if (!Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4__["isObject"])(res)) {
                this.autoLoad = true;
                this.getCategorise(res, false);
            }
        });
        this.categoryFormGroup.get('main_category_id').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(800)).subscribe(res => {
            if (!Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4__["isObject"])(res)) {
                this.autoLoadMainCategory = true;
                this.getMainCategorise(res, false);
                if (res == "") {
                    this.resetCategoryParent();
                }
            }
        });
        this.categoryFormGroup.get('packing_unit_id').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(800)).subscribe(res => {
            if (!Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4__["isObject"])(res)) {
                this.autoLoadPackingUnit = true;
                this.getPackingUnits(res);
            }
        });
    }
    getPackingUnits(value = "") {
        let query = value ? '?name=' + value : '';
        this.packingUnitsService.getPackingUnitsList(query).subscribe(res => {
            this.packingUnitsList = res['data'];
        }, error => {
            this.autoLoadPackingUnit = false;
        }, () => {
            this.autoLoadPackingUnit = false;
        });
    }
    resetCategoryParent() {
        this.categoryFormGroup.get('category_id').setValue("");
        this.getCategorise("", false);
    }
    getCategorise(value, idData) {
        let query = idData ? 'id=' + value : 'name_en=' + value;
        if (this.categoryFormGroup.get('main_category_id').value)
            query = query + (query ? "&" : "") + "parent_name=" + this.categoryFormGroup.get('main_category_id').value.id;
        this.categoryService.getCategoriesByLevel("2", query).subscribe(res => {
            this.categoriseList = res['data'];
        }, error => {
            this.autoLoad = false;
        }, () => {
            this.autoLoad = false;
        });
    }
    getMainCategorise(value, idData) {
        let query = idData ? 'id=' + value : 'name_en=' + value;
        this.categoryService.getCategoriesByLevel("1", query).subscribe(res => {
            this.mainCategoriseList = res['data'];
        }, error => {
            this.autoLoadMainCategory = false;
        }, () => {
            this.autoLoadMainCategory = false;
        });
    }
    getCategory() {
        this.categoryService.getCategory(this.categoryId).subscribe(res => {
            this.categoryFormGroup.patchValue(res['data']);
            if (res['data'].parent && res['data'].parent.parent) {
                this.categoryFormGroup.get('main_category_id').setValue(res['data'].parent.parent);
            }
        }, err => {
            this.toaster.show(err.error.message, 'Error', { status: 'danger' });
        }, () => {
            this.categoryFormGroup.get('category_id').setValue(this.categoryFormGroup.get('parent').value);
            this.categoryFormGroup.get('packing_unit_id').setValue(this.categoryFormGroup.get('packing_unit').value);
            // if(){
            // }
            // this.categoryFormGroup.get('category_id').setValue(this.categoryFormGroup.get('parent').value);
            this.autoComplete.nativeElement.blur();
        });
    }
    editCategory() {
        if (this.categoryFormGroup.valid) {
            this.isLoading = true;
            const uploadData = new FormData();
            this.categoryFormGroup.value.id ? uploadData.append('id', this.categoryFormGroup.value.id) : false;
            this.categoryFormGroup.value.name_en ? uploadData.append('name_en', this.categoryFormGroup.value.name_en) : false;
            this.categoryFormGroup.value.name_ar ? uploadData.append('name_ar', this.categoryFormGroup.value.name_ar) : false;
            this.categoryFormGroup.value.description ? uploadData.append('description', this.categoryFormGroup.value.description) : false;
            this.categoryFormGroup.value.category_id ? uploadData.append('category_id', this.categoryFormGroup.value.category_id.id) : false;
            this.categoryFormGroup.value.packing_unit_id ? uploadData.append('packing_unit_id', this.categoryFormGroup.value.packing_unit_id.id) : false;
            uploadData.append('activation', this.categoryFormGroup.value.activation === null ? false : this.categoryFormGroup.value.activation);
            uploadData.append('is_seller', this.categoryFormGroup.value.is_seller === null ? false : this.categoryFormGroup.value.is_seller);
            uploadData.append('is_consumer', this.categoryFormGroup.value.is_consumer === null ? false : this.categoryFormGroup.value.is_consumer);
            if (this.selectedImage) {
                uploadData.append('image', this.selectedImage, this.selectedImage.name);
            }
            this.categoryService[(this.categoryId ? 'edit' : 'Create') + 'Category'](uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.route.navigateByUrl('/categories/child');
            }, err => {
                this.toaster.show(err.error.message, 'Error', { status: 'danger' });
                this.isLoading = false;
            }, () => {
                this.isLoading = false;
            });
        }
        else {
            const controls = this.categoryFormGroup.controls;
            let result = Object.keys(controls).map(key => ({ id: key, option: controls[key] }));
            result = result.filter(ele => ele.option.hasError('required'));
            this.toaster.show(result[0].id + ' is required', 'Error', { status: 'danger' });
        }
    }
    viewHandle(value) {
        // console.log(value);
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4__["isObject"])(value)) {
            return value.name_en;
        }
        else {
            return value;
        }
    }
    onMainCategoryChange(value) {
        this.resetCategoryParent();
    }
    viewHandleMain(value) {
        // console.log(value);
        // this.resetParentCategory();
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_4__["isObject"])(value)) {
            return value.name_en;
        }
        else {
            if (value == "") {
                // this.bf.category_id.setValue(null);
                // this.categoryFormGroup.get('category_id').setValue(null);
            }
            return value;
        }
    }
    onCategoryImageChange(event) {
        this.selectedImage = event;
    }
    backToCategories() {
        this.route.navigate(['categories/child']);
    }
    get bf() {
        return this.categoryFormGroup.controls;
    }
}
EditCategoryComponent.ɵfac = function EditCategoryComponent_Factory(t) { return new (t || EditCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_1__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_packing_units_PackingUnits_services__WEBPACK_IMPORTED_MODULE_7__["PackingUnitsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditCategoryComponent, selectors: [["app-edit-category"]], viewQuery: function EditCategoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoComplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autoCompleteMain = _t.first);
    } }, decls: 67, vars: 31, consts: [[3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "first-row", 3, "fxFlex"], [1, "form-control-container", 3, "fxFlex"], [1, "field-with-validation"], ["for", "name_en"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_en", "id", "name_en"], [4, "ngIf"], ["for", "name_ar"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_ar", "id", "name_ar"], ["for", "description"], ["nbInput", "", "id", "description", "fullWidth", "", "formControlName", "description"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "second-row", 3, "fxFlex"], ["for", "packing_unit"], ["autocomplete", "off", "type", "text", "nbInput", "", "placeholder", "Search for color", "fullWidth", "", "formControlName", "packing_unit_id", "id", "packing_unit", 3, "nbAutocomplete"], ["autoComplete", ""], [3, "handleDisplayFn"], ["autoPackingUnit", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "main-category"], ["autocomplete", "off", "type", "text", "nbInput", "", "placeholder", "Search for Main Category", "fullWidth", "", "formControlName", "main_category_id", "id", "main-category", 3, "nbAutocomplete"], ["autoCompleteMain", ""], [3, "handleDisplayFn", "selectedChange"], ["automain", ""], ["for", "category"], ["autocomplete", "off", "type", "text", "nbInput", "", "placeholder", "Search for Parent Category", "fullWidth", "", "formControlName", "category_id", "id", "category", 3, "nbAutocomplete"], ["auto", ""], [1, "form-control-container", "checkbox-container", 3, "fxFlex"], ["formControlName", "is_seller"], ["formControlName", "is_consumer"], ["formControlName", "activation"], [3, "fxFlex", "image", "fileSelected"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "disabled", "click"], [3, "value"]], template: function EditCategoryComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditCategoryComponent_small_12_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name Ar *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditCategoryComponent_small_18_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Packing Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-autocomplete", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EditCategoryComponent_nb_option_33_Template, 2, 2, "nb-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nb-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Main Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-autocomplete", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function EditCategoryComponent_Template_nb_autocomplete_selectedChange_40_listener($event) { return ctx.onMainCategoryChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, EditCategoryComponent_nb_option_42_Template, 2, 2, "nb-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nb-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sub Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nb-autocomplete", 18, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, EditCategoryComponent_nb_option_51_Template, 2, 2, "nb-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nb-checkbox", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Is Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nb-checkbox", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Is Consumer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nb-checkbox", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "upload-image", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileSelected", function EditCategoryComponent_Template_upload_image_fileSelected_61_listener($event) { return ctx.onCategoryImageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCategoryComponent_Template_button_click_63_listener() { return ctx.backToCategories(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCategoryComponent_Template_button_click_65_listener() { return ctx.editCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " Main Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_en.errors == null ? null : ctx.bf.name_en.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_ar.errors == null ? null : ctx.bf.name_ar.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.autoLoadPackingUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx.viewHandle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.packingUnitsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.autoLoadMainCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx.viewHandleMain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainCategoriseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.autoLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx.viewHandle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", "250px")("image", ctx.categoryFormGroup.get("image").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.categoryFormGroup == null ? null : ctx.categoryFormGroup.invalid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"], _shared_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_10__["UploadImageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .dz-message {\n  margin: 0 !important;\n  width: 100% !important;\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNKO0FBR007RUFDRSxtQkFBQTtBQURSO0FBR1E7RUFDRSxnQkFBQTtBQURWO0FBS007RUFDRSxtQkFBQTtBQUhSO0FBT1E7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFMVjtBQVlNO0VBQ0UsWUFBQTtBQVZSIiwiZmlsZSI6ImVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcblxuICBuYi1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIG5iLWNhcmQtYm9keSB7XG5cbiAgICAgIC5maXJzdC1yb3cge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuXG4gICAgICAgIC5jaGVja2JveC1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlY29uZC1yb3cgeyBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgIH1cblxuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLmR6LW1lc3NhZ2Uge1xuICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIG5iLWNhcmQtZm9vdGVyIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-category',
                templateUrl: 'edit-category.component.html',
                styleUrls: ['edit-category.component.scss'],
            }]
    }], function () { return [{ type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_1__["CategoriseServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _services_packing_units_PackingUnits_services__WEBPACK_IMPORTED_MODULE_7__["PackingUnitsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { autoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoComplete']
        }], autoCompleteMain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoCompleteMain']
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

/***/ "uZJw":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/categories/child/index-categoris/categorise.column.ts ***!
  \*****************************************************************************/
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
        id: 'packing_unit',
        name: 'packing_unit',
        field: 'packing_unit',
        fieldAttrName: 'name_en',
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'Category',
        name: 'Category',
        field: 'parent_parent_name',
        fieldSearch: "parent_parent_name",
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
        placeholder: 'Search Main'
    },
    {
        dataType: 'text',
        id: 'Sub',
        name: 'Sub',
        field: 'parent_name',
        fieldSearch: "parent_name",
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
        placeholder: 'Search Sub'
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
        id: 'is_seller',
        name: 'Is Seller',
        field: 'is_seller',
        filterType: 'boolean',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'is_consumer',
        name: 'Is Consumer',
        field: 'is_consumer',
        filterType: 'boolean',
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


/***/ })

}]);
//# sourceMappingURL=child-child-module.js.map