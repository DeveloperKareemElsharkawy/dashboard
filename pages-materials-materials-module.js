(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-materials-materials-module"],{

/***/ "1KS3":
/*!*****************************************************!*\
  !*** ./src/app/pages/materials/materials.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _materials_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materials-routing.module */ "Hknx");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _index_material_materials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-material/materials.component */ "7bgB");
/* harmony import */ var _edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-material/edit-material.component */ "wq8M");











class MaterialsModule {
}
MaterialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialsModule });
MaterialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MaterialsModule_Factory(t) { return new (t || MaterialsModule)(); }, imports: [[
            _materials_routing_module__WEBPACK_IMPORTED_MODULE_4__["MaterialsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialsModule, { declarations: [_index_material_materials_component__WEBPACK_IMPORTED_MODULE_8__["MaterialsComponent"], _edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_9__["EditMaterialComponent"]], imports: [_materials_routing_module__WEBPACK_IMPORTED_MODULE_4__["MaterialsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _materials_routing_module__WEBPACK_IMPORTED_MODULE_4__["MaterialsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
                ],
                declarations: [
                    _materials_routing_module__WEBPACK_IMPORTED_MODULE_4__["MaterialsRoutingModule"].components
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "7bgB":
/*!***********************************************************************!*\
  !*** ./src/app/pages/materials/index-material/materials.component.ts ***!
  \***********************************************************************/
/*! exports provided: MaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsComponent", function() { return MaterialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/materials/materials.services */ "+FFz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _materials_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materials.column */ "CQT1");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");
















const _c0 = ["dialog"];
function MaterialsComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure to delete materials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialsComponent_ng_template_12_Template_button_click_10_listener() { const ref_r3 = ctx.dialogRef; return ref_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialsComponent_ng_template_12_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ref_r3 = ctx.dialogRef; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteMaterial(ref_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentDeleteMaterial.name);
} }
class MaterialsComponent {
    constructor(materialsService, toaster, 
    // private activeRouter: ActivatedRoute,
    convertFilter, router, dialogService, sharedService) {
        this.materialsService = materialsService;
        this.toaster = toaster;
        this.convertFilter = convertFilter;
        this.router = router;
        this.dialogService = dialogService;
        this.sharedService = sharedService;
        this.columnGrid = _materials_column__WEBPACK_IMPORTED_MODULE_3__["MaterialColumn"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = {
            name: 'category_brand',
            list: []
        };
        this.isLoading = false;
    }
    ngOnInit() {
        this.getMaterials();
    }
    getMaterials(meta) {
        this.isLoading = true;
        this.lastMeta = meta;
        this.materialsService.getMaterials(meta).subscribe(res => {
            this.dataItem.data = res['data'];
            this.dataItem.total = 4;
            // this.dataItem.total = res['total'];
        }, error => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    deleteMaterial(dialogRef) {
        this.materialsService.deleteMaterial(this.currentDeleteMaterial.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getMaterials(this.lastMeta);
            this.currentDeleteMaterial = null;
        });
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./materials/edit-material/' + event.data.id]);
                break;
            case 'delete':
                this.currentDeleteMaterial = event.data;
                this.open(this.dialog);
                break;
        }
    }
    open(dialog) {
        this.dialogService.open(dialog);
    }
    filterChange(event) {
        this.getMaterials(this.convertFilter.convertToQuery(event));
    }
    export() {
        this.sharedService.exportUrl = this.lastMeta ? 'materials/export/excel?' + this.lastMeta : 'materials/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(data, 'materials.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
}
MaterialsComponent.ɵfac = function MaterialsComponent_Factory(t) { return new (t || MaterialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_materials_materials_services__WEBPACK_IMPORTED_MODULE_1__["MaterialsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_5__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"])); };
MaterialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaterialsComponent, selectors: [["app-materials"]], viewQuery: function MaterialsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 14, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["nbButton", "", "status", "danger", "size", "small", 1, "mr-2", 3, "click"], ["nbButton", "", "routerLink", "/materials/create-material", "status", "primary", "size", "small"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "commandActionClick"], ["dialog", ""], [1, "dialog-card"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"]], template: function MaterialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Materials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialsComponent_Template_button_click_6_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add New Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-kendo-custome-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function MaterialsComponent_Template_app_kendo_custome_grid_stateChange_11_listener($event) { return ctx.filterChange($event); })("commandActionClick", function MaterialsComponent_Template_app_kendo_custome_grid_commandActionClick_11_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MaterialsComponent_ng_template_12_Template, 14, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false)("loading", ctx.isLoading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_9__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWF0ZXJpYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFLRSxZQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUZJO0VBQ0UsZUFBQTtBQUlOO0FBRUk7RUFDRSxZQUFBO0FBQU4iLCJmaWxlIjoibWF0ZXJpYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmItY2FyZCB7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-materials',
                templateUrl: 'materials.component.html',
                styleUrls: ['materials.component.scss'],
            }]
    }], function () { return [{ type: _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_1__["MaterialsServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_5__["FilterToQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiServiceService"] }]; }, { dialog: [{
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

/***/ "CQT1":
/*!********************************************************************!*\
  !*** ./src/app/pages/materials/index-material/materials.column.ts ***!
  \********************************************************************/
/*! exports provided: MaterialColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialColumn", function() { return MaterialColumn; });
const MaterialColumn = [
    {
        dataType: 'text',
        id: 'material_id',
        name: 'ID',
        field: 'id',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'material_en_name',
        name: 'Name En',
        field: 'name_en',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'material_ar_name',
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

/***/ "Hknx":
/*!*************************************************************!*\
  !*** ./src/app/pages/materials/materials-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MaterialsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsRoutingModule", function() { return MaterialsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _index_material_materials_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-material/materials.component */ "7bgB");
/* harmony import */ var _edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-material/edit-material.component */ "wq8M");







const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _index_material_materials_component__WEBPACK_IMPORTED_MODULE_3__["MaterialsComponent"] },
            { path: 'create-material', component: _edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_4__["EditMaterialComponent"] },
            { path: 'edit-material/:id', component: _edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_4__["EditMaterialComponent"] },
        ],
    }];
class MaterialsRoutingModule {
}
MaterialsRoutingModule.components = [
    _index_material_materials_component__WEBPACK_IMPORTED_MODULE_3__["MaterialsComponent"],
    _edit_material_edit_material_component__WEBPACK_IMPORTED_MODULE_4__["EditMaterialComponent"]
];
MaterialsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialsRoutingModule });
MaterialsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MaterialsRoutingModule_Factory(t) { return new (t || MaterialsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialsRoutingModule, [{
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

/***/ "wq8M":
/*!**************************************************************************!*\
  !*** ./src/app/pages/materials/edit-material/edit-material.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMaterialComponent", function() { return EditMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/materials/materials.services */ "+FFz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/roles/roles.services */ "Rt6e");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");















function EditMaterialComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name En field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMaterialComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name En supports only Letters, Spaces, Single Quote and Dashes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMaterialComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name En length must be at least 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMaterialComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMaterialComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name Ar supports only Letters, Spaces, Single Quote and Dashes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMaterialComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name Ar length must be at least 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditMaterialComponent {
    constructor(materialsService, activeRouter, roleService, toaster, route) {
        this.materialsService = materialsService;
        this.activeRouter = activeRouter;
        this.roleService = roleService;
        this.toaster = toaster;
        this.route = route;
        this.title = "";
        this.roles = [];
        this.isLoading = false;
        this.errorColors = '';
        this.materialsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            name_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z-\'.+-, \s]*$')]),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[\u0621-\u064A\u0660-\u0669 ]+$')]),
        });
    }
    ngOnInit() {
        // this.getRoles();
        this.activeRouter.params.subscribe(v => this.materialsId = v.id);
        if (this.materialsId) {
            this.title = "Edit";
            this.getMaterial();
        }
        else {
            this.title = "Add";
        }
    }
    getRoles() {
        this.roleService.getRoles().subscribe(res => {
            this.roles = res['roles'];
        }, error => { }, () => {
        });
    }
    getMaterial() {
        this.isLoading = true;
        this.materialsService.getMaterial(this.materialsId).subscribe(res => {
            const { name_ar, name_en, id } = res['data'];
            this.materialsFormGroup.setValue({ name_ar, name_en, id });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
        }, () => {
            this.isLoading = false;
        });
    }
    editMaterial() {
        if (this.materialsFormGroup.valid) {
            this.isLoading = true;
            this.errorColors = '';
            let response = {};
            this.materialsService[this.materialsId ? 'editMaterial' : 'CreateMaterial'](this.materialsFormGroup.value).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                response = res['data'];
                this.route.navigateByUrl('/materials');
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
        if (loggedInAdmin['user_id'] === Number(this.materialsId)) {
            if (loggedInAdmin['name'] !== this.materialsFormGroup.value['name']) {
                loggedInAdmin.name = this.materialsFormGroup.value['name'];
                localStorage.setItem('materials', JSON.stringify(loggedInAdmin));
            }
        }
    }
    backToMaterial() {
        this.route.navigate(['materials']);
    }
}
EditMaterialComponent.ɵfac = function EditMaterialComponent_Factory(t) { return new (t || EditMaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_materials_materials_services__WEBPACK_IMPORTED_MODULE_1__["MaterialsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__["RolesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditMaterialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditMaterialComponent, selectors: [["app-edit-material"]], decls: 28, vars: 16, consts: [[3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row", "fxLayout.xs", "column-reverse", "fxLayoutAlign", "space-between start", "fxLayoutAlign.xs", "start center", "fxLayoutGap", "gappx", 1, "form-container"], [3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "first-row"], [1, "form-control-container", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], [1, "field-with-validation"], ["for", "name"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_en", "maxlength", "16", "minlength", "2", "id", "name"], [4, "ngIf"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "name_ar", "maxlength", "16", "minlength", "2", "id", "name"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "disabled", "click"]], template: function EditMaterialComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditMaterialComponent_small_12_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditMaterialComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditMaterialComponent_small_14_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name Ar *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditMaterialComponent_small_20_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditMaterialComponent_small_21_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditMaterialComponent_small_22_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMaterialComponent_Template_button_click_24_listener() { return ctx.backToMaterial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMaterialComponent_Template_button_click_26_listener() { return ctx.editMaterial(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_6_0 = null;
        var tmp_12_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.materialsFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.materialsFormGroup.get("name_en")) == null ? null : tmp_6_0.touched) && ctx.materialsFormGroup.get("name_en").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialsFormGroup.get("name_en").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.materialsFormGroup.get("name_en").hasError("pattern") && ctx.materialsFormGroup.get("name_en").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "form-control-container-xs")("fxFlex", 100 / 2)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.materialsFormGroup.get("name_ar")) == null ? null : tmp_12_0.touched) && ctx.materialsFormGroup.get("name_ar").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialsFormGroup.get("name_ar").hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.materialsFormGroup.get("name_ar").hasError("pattern") && ctx.materialsFormGroup.get("name_ar").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.materialsFormGroup.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .image-uploader-xs[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container-xs[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .image-uploader[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1tYXRlcmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFJUTtFQUNFLG1CQUFBO0FBRlY7QUFNTTs7RUFFRSxtQkFBQTtBQUpSO0FBTVE7O0VBQ0UscUJBQUE7QUFIVjtBQUtVOztFQUNFLG1CQUFBO0FBRlo7QUFLVTs7RUFDRSxtQkFBQTtBQUZaO0FBTVE7O0VBQ0UsZ0JBQUE7QUFIVjtBQU9NO0VBQ0Usa0JBQUE7QUFMUjtBQVdNO0VBQ0UsWUFBQTtBQVRSIiwiZmlsZSI6ImVkaXQtbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcblxuICBuYi1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIG5iLWNhcmQtYm9keSB7XG5cbiAgICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgIC5pbWFnZS11cGxvYWRlci14cyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZmlyc3Qtcm93LFxuICAgICAgLnNlY29uZC1yb3cge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtY29udGFpbmVyLXhzIHtcbiAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICBuYi1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmItc2VsZWN0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICAuY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pbWFnZS11cGxvYWRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIG5iLWNhcmQtZm9vdGVyIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditMaterialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-material',
                templateUrl: 'edit-material.component.html',
                styleUrls: ['edit-material.component.scss'],
            }]
    }], function () { return [{ type: _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_1__["MaterialsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__["RolesServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-materials-materials-module.js.map