(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-brands-brands-module"],{

/***/ "JiFr":
/*!*******************************************************!*\
  !*** ./src/app/pages/brands/brands-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BrandsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsRoutingModule", function() { return BrandsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _index_brands_brands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-brands/brands.component */ "uI6x");
/* harmony import */ var _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-brand/edit-brand.component */ "rZ2B");







const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _index_brands_brands_component__WEBPACK_IMPORTED_MODULE_3__["BrandsComponent"] },
            { path: 'create-brand', component: _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__["EditBrandComponent"] },
            { path: 'edit-brand/:id', component: _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_4__["EditBrandComponent"] },
        ],
    }];
class BrandsRoutingModule {
}
BrandsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrandsRoutingModule });
BrandsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BrandsRoutingModule_Factory(t) { return new (t || BrandsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrandsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrandsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bLbe":
/*!***********************************************!*\
  !*** ./src/app/pages/brands/brands.module.ts ***!
  \***********************************************/
/*! exports provided: BrandsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsModule", function() { return BrandsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _brands_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brands-routing.module */ "JiFr");
/* harmony import */ var _index_brands_brands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-brands/brands.component */ "uI6x");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _create_brand_create_brand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-brand/create-brand.component */ "t8p9");
/* harmony import */ var _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-brand/edit-brand.component */ "rZ2B");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/upload-image/upload-image.module */ "v/J1");















class BrandsModule {
}
BrandsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrandsModule });
BrandsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BrandsModule_Factory(t) { return new (t || BrandsModule)(); }, imports: [[
            _brands_routing_module__WEBPACK_IMPORTED_MODULE_4__["BrandsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_9__["KendoCustomeGridModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__["DropDownsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
            _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_12__["UploadImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrandsModule, { declarations: [_index_brands_brands_component__WEBPACK_IMPORTED_MODULE_5__["BrandsComponent"],
        _create_brand_create_brand_component__WEBPACK_IMPORTED_MODULE_7__["CreateBrandComponent"],
        _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_8__["EditBrandComponent"]], imports: [_brands_routing_module__WEBPACK_IMPORTED_MODULE_4__["BrandsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_9__["KendoCustomeGridModule"],
        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__["DropDownsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_12__["UploadImageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrandsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _brands_routing_module__WEBPACK_IMPORTED_MODULE_4__["BrandsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_9__["KendoCustomeGridModule"],
                    _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__["DropDownsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                    _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_12__["UploadImageModule"],
                ],
                declarations: [
                    _index_brands_brands_component__WEBPACK_IMPORTED_MODULE_5__["BrandsComponent"],
                    _create_brand_create_brand_component__WEBPACK_IMPORTED_MODULE_7__["CreateBrandComponent"],
                    _edit_brand_edit_brand_component__WEBPACK_IMPORTED_MODULE_8__["EditBrandComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "rZ2B":
/*!*****************************************************************!*\
  !*** ./src/app/pages/brands/edit-brand/edit-brand.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBrandComponent", function() { return EditBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/brands/brands.services */ "jQNl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");
/* harmony import */ var _shared_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/upload-image/upload-image.component */ "nCPL");
















function EditBrandComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brand name field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditBrandComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brand name length must be at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditBrandComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brand name length must be max 255 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditBrandComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brand name field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditBrandComponent_small_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brand name length must be at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditBrandComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "brand name length must be max 255 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditBrandComponent {
    constructor(brandsService, activeRouter, toaster, categoryService, route) {
        this.brandsService = brandsService;
        this.activeRouter = activeRouter;
        this.toaster = toaster;
        this.categoryService = categoryService;
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
        this.autoLoad = false;
        this.isLoading = false;
        this.brandFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            name_en: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(255)]),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(255)]),
            category_brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            activation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            created_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            // reviewed: new FormControl(''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
    }
    ngOnInit() {
        this.brandId = this.activeRouter.snapshot.params.id;
        if (this.brandId) {
            this.label = 'Edit';
            this.getBrand();
        }
        else {
            this.label = 'Add';
        }
    }
    get bf() { return this.brandFormGroup.controls; }
    getBrand() {
        this.isLoading = true;
        this.brandsService.getBrand(this.brandId).subscribe(res => {
            this.brandFormGroup.setValue(res['data']);
        }, error => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    updateBrand() {
        if (this.brandFormGroup.valid) {
            this.isLoading = true;
            const uploadData = new FormData();
            const formsVlaue = this.brandFormGroup.value;
            uploadData.append('id', formsVlaue.id);
            formsVlaue.name_en ? uploadData.append('name_en', formsVlaue.name_en) : false;
            formsVlaue.name_ar ? uploadData.append('name_ar', formsVlaue.name_ar) : false;
            uploadData.append('activation', formsVlaue.activation ? formsVlaue.activation : false);
            // uploadData.append('reviewed', formsVlaue.reviewed ? formsVlaue.reviewed : false);
            formsVlaue.category_brand ? uploadData.append('category_brand', JSON.stringify(formsVlaue.category_brand.map((ele) => ele.id))) : false;
            if (this.selectedImage) {
                uploadData.append('image', this.selectedImage, this.selectedImage.name);
            }
            this.brandsService[this.brandId ? 'editBrand' : 'CreateBrand'](uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.route.navigateByUrl('/brands');
            }, err => {
                this.isLoading = false;
                this.toaster.show(err.error.message, 'Error', { status: 'danger' });
            }, () => {
                this.isLoading = false;
            });
        }
        else {
            this.toaster.show(status['message'], 'Error', { status: 'danger' });
        }
    }
    getCategories(meta) {
        this.categoryService.getCategorise(meta).subscribe(res => {
            this.categoriseList = res['data'];
        }, error => {
            this.autoLoad = false;
        }, () => {
            this.removeSelected();
            this.autoLoad = false;
        });
    }
    removeSelected() {
        var _a;
        if (((_a = this.bf['category_brand'].value) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.categoriseList = this.categoriseList.filter(({ id: id1 }) => { var _a; return !((_a = this.bf['category_brand'].value) === null || _a === void 0 ? void 0 : _a.some(({ id: id2 }) => id2 == id1)); });
        }
    }
    onBrandImageChange(event) {
        this.selectedImage = event;
    }
    filterChange(value) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.autoLoad = true;
            const meta = value ? "name_en=" + value : '';
            this.getCategories(meta);
        }, 500);
    }
    backToBrands() {
        this.route.navigate(['brands']);
    }
    clearImage() {
    }
}
EditBrandComponent.ɵfac = function EditBrandComponent_Factory(t) { return new (t || EditBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__["BrandsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_4__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditBrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditBrandComponent, selectors: [["app-edit-brand"]], decls: 37, vars: 19, consts: [[3, "nbSpinner"], [1, "form-group"], [3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "first-row"], [1, "form-control-container", 3, "fxFlex"], [1, "field-with-validation"], ["for", "brand_name"], ["nbInput", "", "type", "text", "id", "brand_name", "fullWidth", "", "formControlName", "name_en", "required", ""], [4, "ngIf"], ["nbInput", "", "type", "text", "id", "brand_name_ar", "fullWidth", "", "formControlName", "name_ar", "required", ""], ["formControlName", "category_brand", "textField", "name_en", "valueField", "id", "placeholder", "Select Category", 3, "data", "filterable", "loading", "filterChange", "open"], [1, "form-control-container", "checkbox-container", 3, "fxFlex"], ["formControlName", "activation"], ["fxLayout", "row", "fxLayoutAlign", "end start", "fxLayoutGap", "gappx", 1, "second-row", 3, "fxFlex"], [1, "form-control-container", "full-width"], [3, "image", "imageDeleted", "fileSelected"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "disabled", "click"]], template: function EditBrandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Brand Name En*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditBrandComponent_small_11_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditBrandComponent_small_12_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditBrandComponent_small_13_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Brand Name Ar*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditBrandComponent_small_19_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EditBrandComponent_small_20_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditBrandComponent_small_21_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Category *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "kendo-multiselect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function EditBrandComponent_Template_kendo_multiselect_filterChange_25_listener($event) { return ctx.filterChange($event); })("open", function EditBrandComponent_Template_kendo_multiselect_open_25_listener() { return ctx.removeSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nb-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "upload-image", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageDeleted", function EditBrandComponent_Template_upload_image_imageDeleted_31_listener() { return ctx.clearImage(); })("fileSelected", function EditBrandComponent_Template_upload_image_fileSelected_31_listener($event) { return ctx.onBrandImageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBrandComponent_Template_button_click_33_listener() { return ctx.backToBrands(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBrandComponent_Template_button_click_35_listener() { return ctx.updateBrand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.brandFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_en.touched && (ctx.bf.name_en.errors == null ? null : ctx.bf.name_en.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_en.errors == null ? null : ctx.bf.name_en.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_en.errors == null ? null : ctx.bf.name_en.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_ar.touched && (ctx.bf.name_ar.errors == null ? null : ctx.bf.name_ar.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_ar.errors == null ? null : ctx.bf.name_ar.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bf.name_ar.errors == null ? null : ctx.bf.name_ar.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.categoriseList)("filterable", true)("loading", ctx.autoLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.brandFormGroup.value.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.brandFormGroup.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_8__["MultiSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"], _shared_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_9__["UploadImageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .dz-message {\n  margin: 0 !important;\n  width: 100% !important;\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .k-multiselect-wrap.k-floatwrap {\n  background-color: #f7f9fc;\n  border: 1px solid #e4e9f2;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 0 15px;\n  padding-top: 3px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1icmFuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBQ007O0VBRUUsbUJBQUE7QUFDUjtBQUNROztFQUNFLGtCQUFBO0FBRVY7QUFFTTtFQUNFLGdCQUFBO0FBQVI7QUFJUTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUZWO0FBS1E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhWO0FBU007RUFDRSxZQUFBO0FBUFIiLCJmaWxlIjoiZWRpdC1icmFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBuYi1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbmItY2FyZC1ib2R5IHtcblxuICAgICAgLmZpcnN0LXJvdyxcbiAgICAgIC5zZWNvbmQtcm93IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcblxuICAgICAgICAuZm9ybS1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jaGVja2JveC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICAuZHotbWVzc2FnZSB7XG4gICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5rLW11bHRpc2VsZWN0LXdyYXAuay1mbG9hdHdyYXAge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmM7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTlmMjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5iLWNhcmQtZm9vdGVyIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditBrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-brand',
                templateUrl: 'edit-brand.component.html',
                styleUrls: ['edit-brand.component.scss'],
            }]
    }], function () { return [{ type: _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__["BrandsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_4__["CategoriseServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "t8p9":
/*!*********************************************************************!*\
  !*** ./src/app/pages/brands/create-brand/create-brand.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBrandComponent", function() { return CreateBrandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/brands/brands.services */ "jQNl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/roles/roles.services */ "Rt6e");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













class CreateBrandComponent {
    constructor(brandsService, activeRouter, roleService, toaster, categoryService, route) {
        this.brandsService = brandsService;
        this.activeRouter = activeRouter;
        this.roleService = roleService;
        this.toaster = toaster;
        this.categoryService = categoryService;
        this.route = route;
        this.dropzoneConfig = {
            paramName: 'file',
            maxFilesize: 2,
            autoQueue: false,
            url: '/',
            addRemoveLinks: true,
            autoProcessQueue: false,
            multi: false
        };
        this.isLoading = false;
        this.selectedCategories = [];
    }
    ngOnInit() {
        this.newBrand = {
            name: '',
            activation: false,
            categories: []
        };
        this.getCategories();
    }
    createBrand() {
        this.toggleButton();
        const status = this.validateCreateAdmin();
        if (status['status']) {
            const uploadData = new FormData();
            uploadData.append('image', this.selectedImage, this.selectedImage.name);
            for (const key in this.newBrand) {
                if (this.newBrand.hasOwnProperty(key)) {
                    uploadData.append(key, this.newBrand[key]);
                }
            }
            this.brandsService.CreateBrand(uploadData).subscribe(res => {
                this.toggleButton();
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.route.navigateByUrl('/brands');
            }, err => {
                this.toggleButton();
                this.toaster.show(err.error.message, 'Error', { status: 'danger' });
            });
        }
        else {
            this.toggleButton();
            this.toaster.show(status['message'], 'Error', { status: 'danger' });
        }
    }
    validateCreateAdmin() {
        const state = {
            status: true,
            message: ''
        };
        if (this.newBrand.name === '') {
            state['status'] = false;
            state['message'] = 'Please, Enter Name';
        }
        return state;
    }
    toggleButton() {
        this.isLoading = !this.isLoading;
    }
    getCategories() {
        this.categoryService.selectedCategories('parents').subscribe(res => {
            this.categories = res['data'];
        }, error => {
        });
    }
    categoryChange(event) {
        this.selectedCategories = [];
        event.value.forEach(element => {
            this.selectedCategories.push(element.id);
        });
        this.newBrand.categories = this.selectedCategories;
    }
    onBrandImageChange(event) {
        this.selectedImage = event;
    }
}
CreateBrandComponent.ɵfac = function CreateBrandComponent_Factory(t) { return new (t || CreateBrandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__["BrandsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__["RolesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_5__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreateBrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateBrandComponent, selectors: [["app-create-admin"]], decls: 19, vars: 3, consts: [[1, "row"], [1, "col-md-12"], [1, "form-group"], [1, "col"], ["type", "text", "placeholder", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function CreateBrandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Brand Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateBrandComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newBrand.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateBrandComponent_Template_nb_checkbox_ngModelChange_14_listener($event) { return ctx.newBrand.activation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBrandComponent_Template_button_click_17_listener() { return ctx.createBrand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newBrand.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newBrand.activation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isLoading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxComponent"]], styles: ["nb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]     ngx-tab1, [_nghost-%COMP%]     ngx-tab2 {\n  display: block;\n  padding: 1rem 2rem;\n}\n\na[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: white;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow: visible;\n  padding-top: 0;\n}\n\nnb-card-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 -0.5rem;\n}\n\n.full-name-inputs[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n}\n\n.checkbox-radio[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.demo-items[_ngcontent-%COMP%] {\n  flex: 1 0 33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3JlYXRlLWJyYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxnQkFBQTtBQUFKOztBQUlBOztFQUVFLGFBQUE7RUFDQSxpQkFBQTtBQURGOztBQUdFOztFQUNFLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREYiLCJmaWxlIjoiY3JlYXRlLWJyYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItdGFic2V0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgbmd4LXRhYjEsIDpob3N0IDo6bmctZGVlcCBuZ3gtdGFiMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG59XG5cbmEge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5uYi1jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcGFkZGluZy10b3A6IDA7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG5cbi5mdWxsLW5hbWUtaW5wdXRzLFxuLnZhbGlkYXRpb24tY2hlY2tib3hlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgfVxufVxuXG4uY2hlY2tib3gtcmFkaW8ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGVtby1pdGVtcyB7XG4gIGZsZXg6IDEgMCAzMyU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateBrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-admin',
                templateUrl: 'create-brand.component.html',
                styleUrls: ['create-brand.component.scss'],
            }]
    }], function () { return [{ type: _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__["BrandsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_3__["RolesServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_5__["CategoriseServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "tLM4":
/*!************************************************************!*\
  !*** ./src/app/pages/brands/index-brands/brands.column.ts ***!
  \************************************************************/
/*! exports provided: brandsColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brandsColumn", function() { return brandsColumn; });
const brandsColumn = [
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
        id: 'name',
        name: 'Name',
        field: 'name_en',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'chips',
        chipTypeName: 'name_en',
        id: 'name',
        name: 'Category',
        field: 'category_brand',
        fieldSearch: 'category',
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
        width: 300,
        placeholder: 'Search Category'
    },
    {
        dataType: 'text',
        id: 'name',
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


/***/ }),

/***/ "uI6x":
/*!***************************************************************!*\
  !*** ./src/app/pages/brands/index-brands/brands.component.ts ***!
  \***************************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/brands/brands.services */ "jQNl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _brands_column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brands.column */ "tLM4");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");



















const _c0 = ["dialog"];
function BrandsComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BrandsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Are you sure to delete brand ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_ng_template_11_Template_button_click_10_listener() { const ref_r6 = ctx.dialogRef; return ref_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_ng_template_11_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ref_r6 = ctx.dialogRef; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteBrand(ref_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currentDeleteBrand.name);
} }
class BrandsComponent {
    constructor(brandService, toaster, categoryService, convertFilter, router, dialogService, sharedService) {
        this.brandService = brandService;
        this.toaster = toaster;
        this.categoryService = categoryService;
        this.convertFilter = convertFilter;
        this.router = router;
        this.dialogService = dialogService;
        this.sharedService = sharedService;
        this.columnGrid = _brands_column__WEBPACK_IMPORTED_MODULE_5__["brandsColumn"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = {
            name: 'category_brand',
            list: []
        };
    }
    ngOnInit() {
        this.getBrands();
    }
    getBrands(meta) {
        this.loading = true;
        this.lastMeta = meta;
        this.brandService.getBrands(meta).subscribe(res => {
            this.dataItem.data = res['data'];
            this.dataItem.total = res.total;
        }, error => {
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    getCategories(meta) {
        this.categoryService.getParentCategorise(meta).subscribe(res => {
            this.autoCompleteData.list = res['data'];
        }, error => {
        });
    }
    deleteBrand(dialogRef) {
        this.brandService.deleteBrand(this.currentDeleteBrand.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getBrands(this.lastMeta);
            this.currentDeleteBrand = null;
        });
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./brands/edit-brand/' + event.data.id]);
                break;
            case 'delete':
                this.currentDeleteBrand = event.data;
                this.open(this.dialog);
                break;
        }
    }
    open(dialog) {
        this.dialogService.open(dialog);
    }
    filterChange(event) {
        this.getBrands(this.convertFilter.convertToQuery(event));
    }
    autoCompleteFilterChangeCheck(event) {
        const meta = 'name=' + event.value;
        this.getCategories(meta);
    }
    export() {
        this.sharedService.exportUrl = this.lastMeta ? 'brands/export/excel?' + this.lastMeta : 'brands/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(data, 'brands.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
}
BrandsComponent.ɵfac = function BrandsComponent_Factory(t) { return new (t || BrandsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__["BrandsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_3__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_6__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_8__["SharedApiServiceService"])); };
BrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandsComponent, selectors: [["app-admin"]], viewQuery: function BrandsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 13, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["nbButton", "", "class", "mr-2", "status", "danger", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "routerLink", "/brands/create-brand", "status", "primary", "size", "small"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "filterable", "stateChange", "autoCompleteFilterChange", "commandActionClick"], ["dialog", ""], ["nbButton", "", "status", "danger", "size", "small", 1, "mr-2", 3, "click"], [1, "dialog-card"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"]], template: function BrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Brands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BrandsComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add New Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-kendo-custome-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function BrandsComponent_Template_app_kendo_custome_grid_stateChange_10_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function BrandsComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_10_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function BrandsComponent_Template_app_kendo_custome_grid_commandActionClick_10_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BrandsComponent_ng_template_11_Template, 14, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataItem.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false)("filterable", true);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_11__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnJhbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFLRSxZQUFBO0VBQ0Esb0JBQUE7QUFISjtBQUZJO0VBQ0UsZUFBQTtBQUlOO0FBRUk7RUFDRSxZQUFBO0FBQU4iLCJmaWxlIjoiYnJhbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmItY2FyZCB7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrandsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: 'brands.component.html',
                styleUrls: ['brands.component.scss'],
            }]
    }], function () { return [{ type: _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_1__["BrandsServices"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_3__["CategoriseServices"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_6__["FilterToQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_8__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-brands-brands-module.js.map