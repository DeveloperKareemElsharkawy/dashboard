(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-add-product-module"],{

/***/ "+etn":
/*!******************************************************************!*\
  !*** ./src/app/pages/products/add-product/add-product.module.ts ***!
  \******************************************************************/
/*! exports provided: AddProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModule", function() { return AddProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _index_add_product_index_add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-add-product/index-add-product.component */ "jzK1");
/* harmony import */ var _add_products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-products-routing.module */ "xbUZ");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes-list/attributes-list.component */ "14rl");
/* harmony import */ var _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step-one/step-one.component */ "h8aj");
/* harmony import */ var _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./step-two/step-two.component */ "vRrP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/error-message/error-message.module */ "75Dz");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-barcode */ "6QD7");
/* harmony import */ var _upload_images_upload_images_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-images/upload-images.component */ "Qfj9");
/* harmony import */ var _product_colors_product_colors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-colors/product-colors.component */ "Py4L");















class AddProductModule {
}
AddProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddProductModule });
AddProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddProductModule_Factory(t) { return new (t || AddProductModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _add_products_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddProductsRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTagModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTimepickerModule"],
            ngx_barcode__WEBPACK_IMPORTED_MODULE_11__["NgxBarcodeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddProductModule, { declarations: [_index_add_product_index_add_product_component__WEBPACK_IMPORTED_MODULE_2__["IndexAddProductComponent"], _attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__["AttributesListComponent"], _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_7__["StepOneComponent"], _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_8__["StepTwoComponent"], _upload_images_upload_images_component__WEBPACK_IMPORTED_MODULE_12__["UploadImagesComponent"], _product_colors_product_colors_component__WEBPACK_IMPORTED_MODULE_13__["ProductColorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _add_products_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddProductsRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTagModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTimepickerModule"],
        ngx_barcode__WEBPACK_IMPORTED_MODULE_11__["NgxBarcodeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_index_add_product_index_add_product_component__WEBPACK_IMPORTED_MODULE_2__["IndexAddProductComponent"], _attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__["AttributesListComponent"], _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_7__["StepOneComponent"], _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_8__["StepTwoComponent"], _upload_images_upload_images_component__WEBPACK_IMPORTED_MODULE_12__["UploadImagesComponent"], _product_colors_product_colors_component__WEBPACK_IMPORTED_MODULE_13__["ProductColorsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _add_products_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddProductsRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTagModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTimepickerModule"],
                    ngx_barcode__WEBPACK_IMPORTED_MODULE_11__["NgxBarcodeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "14rl":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/products/add-product/attributes-list/attributes-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AttributesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesListComponent", function() { return AttributesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/util/isObject */ "GMZp");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_sizes_sizes_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/sizes/sizes.services */ "LuWe");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function AttributesListComponent_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (option_r4 == null ? null : option_r4.size) ? option_r4 == null ? null : option_r4.size : option_r4 == null ? null : option_r4.name, " ");
} }
function AttributesListComponent_nb_tag_list_16_nb_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-tag", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function AttributesListComponent_nb_tag_list_16_nb_tag_1_Template_nb_tag_remove_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onTagRemove(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const atrr_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Size " + (atrr_r6 == null ? null : atrr_r6.size == null ? null : atrr_r6.size.name) + " / Quantity " + (atrr_r6 == null ? null : atrr_r6.quantity))("removable", true);
} }
function AttributesListComponent_nb_tag_list_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-tag-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributesListComponent_nb_tag_list_16_nb_tag_1_Template, 1, 2, "nb-tag", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.attrList);
} }
function AttributesListComponent_h4_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Attributes Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AttributesListComponent {
    constructor(_SizesServices) {
        this._SizesServices = _SizesServices;
        this.attrListUpdates = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sizeList = [];
        this.attrList = [];
        this.sizeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.quantityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.autoLoad = false;
    }
    ngOnInit() {
        this.getSizes();
        this.sizeFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(800)).subscribe(res => {
            if (res && !Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_2__["isObject"])(res)) {
                this.autoLoad = true;
                const meta = 'size=' + res;
                this.getSizes(meta);
            }
        });
    }
    viewHandle(value) {
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_2__["isObject"])(value)) {
            return value.size ? value.size : value.name;
        }
        else {
            return value;
        }
    }
    getSizes(meta) {
        this._SizesServices.getSizes(meta).subscribe((res) => {
            this.sizeList = res.data;
        }, error => {
            this.autoLoad = false;
        }, () => {
            this.autoLoad = false;
        });
    }
    addNewAttr() {
        var _a;
        if (!((_a = this.attrList) === null || _a === void 0 ? void 0 : _a.some(ele => this.sizeFormControl.value.id === ele.size.id))) {
            const newAtrr = {
                size: {
                    id: this.sizeFormControl.value.id,
                    name: this.sizeFormControl.value.size,
                },
                quantity: this.quantityFormControl.value,
            };
            this.attrList.push(newAtrr);
            this.attrListUpdates.emit(this.attrList);
            this.sizeFormControl.reset('');
            this.quantityFormControl.reset();
        }
    }
    onTagRemove(index) {
        this.attrList.splice(index, 1);
        this.attrListUpdates.emit(this.attrList);
    }
}
AttributesListComponent.ɵfac = function AttributesListComponent_Factory(t) { return new (t || AttributesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sizes_sizes_services__WEBPACK_IMPORTED_MODULE_4__["SizesServices"])); };
AttributesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributesListComponent, selectors: [["attributes-list"]], outputs: { attrListUpdates: "attrListUpdates" }, decls: 18, vars: 14, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "gappx", 3, "fxFlex"], [1, "field-with-validation", 3, "nbSpinner", "fxFlex"], ["for", "size"], ["nbInput", "", "id", "size", 3, "nbAutocomplete", "formControl"], [3, "handleDisplayFn"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "field-with-validation", 3, "fxFlex"], ["for", "quantity"], ["nbInput", "", "id", "quantity", 3, "formControl"], ["nbButton", "", "status", "primary", 3, "disabled", "fxFlex", "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "gappx", 1, "tags-container", 3, "fxFlex"], [3, "fxFlex", 4, "ngIf"], [4, "ngIf"], [3, "value"], [3, "fxFlex"], [3, "text", "removable", "remove", 4, "ngFor", "ngForOf"], [3, "text", "removable", "remove"]], template: function AttributesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributesListComponent_nb_option_8_Template, 2, 2, "nb-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesListComponent_Template_button_click_13_listener() { return ctx.addNewAttr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AttributesListComponent_nb_tag_list_16_Template, 2, 2, "nb-tag-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AttributesListComponent_h4_17_Template, 2, 0, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.autoLoad)("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbAutocomplete", _r0)("formControl", ctx.sizeFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx.viewHandle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.quantityFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.sizeFormControl.valid && ctx.quantityFormControl.valid))("fxFlex", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.attrList == null ? null : ctx.attrList.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((ctx.attrList == null ? null : ctx.attrList.length) > 0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTagListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTagComponent"]], styles: ["[_nghost-%COMP%]   nb-form-field[_ngcontent-%COMP%]     #size {\n  border-radius: 4px 0 0 4px;\n  border-right: 0;\n}\n[_nghost-%COMP%]   nb-form-field[_ngcontent-%COMP%]     #quantity {\n  border-radius: 0px;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0 4px 4px 0 !important;\n}\n[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 12px;\n  border: 1px solid #EDF1F7;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #8f9bb3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF0dHJpYnV0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHWTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUZoQjtBQUtZO0VBQ0ksa0JBQUE7QUFIaEI7QUFRSTtFQUNJLHFDQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVNRO0VBQ0ksY0FBQTtBQVBaIiwiZmlsZSI6ImF0dHJpYnV0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBuYi1mb3JtLWZpZWxkIHtcbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICNzaXplIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNxdWFudGl0eSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGFncy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRURGMUY3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICAgaDQge1xuICAgICAgICAgICAgY29sb3I6ICM4ZjliYjM7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'attributes-list',
                templateUrl: './attributes-list.component.html',
                styleUrls: ['./attributes-list.component.scss']
            }]
    }], function () { return [{ type: _services_sizes_sizes_services__WEBPACK_IMPORTED_MODULE_4__["SizesServices"] }]; }, { attrListUpdates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9fn6":
/*!****************************************************************************!*\
  !*** ./src/app/pages/products/add-product/forms/step-one-supplier-form.ts ***!
  \****************************************************************************/
/*! exports provided: stepOneSupplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepOneSupplier", function() { return stepOneSupplier; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

const stepOneSupplier = [
    {
        id: "name",
        formControl: "name",
        hide: false,
        label: "Name",
        inputType: "text",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100),
        ],
    },
    {
        id: "description",
        formControl: "description",
        hide: false,
        label: "Description",
        inputType: "text",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(300),
        ],
    },
    {
        id: "material_id",
        formControl: "material_id",
        hide: false,
        label: "Material",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "policy_id",
        formControl: "policy_id",
        hide: false,
        label: "Policy",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "shipping_method_id",
        formControl: "shipping_method_id",
        hide: false,
        label: "Shipping Method",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "category_id",
        formControl: "category_id",
        hide: false,
        label: "Category",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "brand_id",
        formControl: "brand_id",
        hide: false,
        label: "Brand",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "store_id",
        formControl: "store_id",
        hide: false,
        label: "Store",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "publish_app_at",
        formControl: "publish_app_at",
        hide: false,
        label: "Publish At",
        inputType: "text",
        type: 'date',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "consumer_price",
        formControl: "consumer_price",
        hide: false,
        label: "Consumer price",
        inputType: "number",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)
        ],
    },
    {
        id: "discount",
        formControl: "discount",
        hide: false,
        label: "Discount",
        inputType: "number",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(100),
        ],
    },
    {
        id: "price",
        formControl: "price",
        hide: false,
        label: "Price",
        inputType: "number",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)
        ],
    },
    {
        id: "free_shipping",
        formControl: "free_shipping",
        hide: false,
        label: "Free Shipping",
        type: 'checkbox',
    },
    {
        id: "product_attributes",
        formControl: "product_attributes",
        hide: false,
        label: "Product Attributes",
        inputType: "text",
        type: 'custom',
        customType: 'attr-list',
    },
];


/***/ }),

/***/ "EAGc":
/*!*************************************************************!*\
  !*** ./src/app/services/add-product/add-product.service.ts ***!
  \*************************************************************/
/*! exports provided: AddProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductService", function() { return AddProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AddProductService {
    constructor(http) {
        this.http = http;
    }
    getColors() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/colors/get-all/for-selection';
        return this.http.get(url);
    }
    addStepOneSupplier(body) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/productsV2/create-product';
        return this.http.post(url, body);
    }
    addStepTwoSupplier(body) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/productsV2/create-product-step2';
        // const url = environment.MAIN_SYSTEM + 'api/dashboard/products/create/supplier-step2';
        return this.http.post(url, body);
    }
    addStepOneRetailer(body) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/productsV2/create-retail-product';
        return this.http.post(url, body);
    }
    addStepTwoRetailer(body) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAIN_SYSTEM + 'api/dashboard/products/create/retailer-step2';
        return this.http.post(url, body);
    }
}
AddProductService.ɵfac = function AddProductService_Factory(t) { return new (t || AddProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AddProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddProductService, factory: AddProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "O1+n":
/*!****************************************************************************!*\
  !*** ./src/app/pages/products/add-product/forms/step-one-retailer-form.ts ***!
  \****************************************************************************/
/*! exports provided: stepOneRetailer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepOneRetailer", function() { return stepOneRetailer; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

const stepOneRetailer = [
    {
        id: "name",
        formControl: "name",
        hide: true,
        label: "Name",
        inputType: "text",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(100),
        ],
    },
    {
        id: "description",
        formControl: "description",
        hide: true,
        label: "Description",
        inputType: "text",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(2),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(300),
        ],
    },
    {
        id: "category_id",
        formControl: "category_id",
        hide: true,
        label: "Category",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "brand_id",
        formControl: "brand_id",
        hide: true,
        label: "Brand",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "publish_app_at",
        formControl: "publish_app_at",
        hide: true,
        label: "Publish At",
        inputType: "text",
        type: 'date',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
    },
    {
        id: "consumer_price",
        formControl: "consumer_price",
        hide: true,
        label: "Consumer Price",
        inputType: "number",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)
        ],
    },
    {
        id: "price",
        formControl: "price",
        hide: true,
        label: "Price",
        inputType: "number",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)
        ],
    },
    {
        id: "discount",
        formControl: "discount",
        hide: true,
        label: "Discount",
        inputType: "number",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0),
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(100),
        ],
    },
    {
        id: "store_id",
        formControl: "store_id",
        hide: true,
        label: "Store",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
    },
    {
        id: "material_id",
        formControl: "material_id",
        hide: false,
        label: "Material",
        inputType: "text",
        type: 'auto',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        autocompleteList: [],
    },
    {
        id: "free_shipping",
        formControl: "free_shipping",
        hide: false,
        label: "Free Shipping",
        type: 'checkbox',
    },
];


/***/ }),

/***/ "Py4L":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/products/add-product/product-colors/product-colors.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductColorsComponent", function() { return ProductColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");








function ProductColorsComponent_ng_container_4_nb_list_item_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "color-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.quantity);
} }
function ProductColorsComponent_ng_container_4_nb_list_item_2_div_14_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tag", 21);
} if (rf & 2) {
    const size_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", (size_r11 == null ? null : size_r11.size == null ? null : size_r11.size.name) + " / " + (size_r11 == null ? null : size_r11.quantity));
} }
function ProductColorsComponent_ng_container_4_nb_list_item_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sizes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-tag-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductColorsComponent_ng_container_4_nb_list_item_2_div_14_nb_tag_5_Template, 1, 1, "nb-tag", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "color-size-xs")("fxFlex", 30)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4 == null ? null : item_r4.sizes);
} }
function ProductColorsComponent_ng_container_4_nb_list_item_2_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r13.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function ProductColorsComponent_ng_container_4_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "HEX : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductColorsComponent_ng_container_4_nb_list_item_2_div_13_Template, 5, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductColorsComponent_ng_container_4_nb_list_item_2_div_14_Template, 6, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductColorsComponent_ng_container_4_nb_list_item_2_div_22_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductColorsComponent_ng_container_4_nb_list_item_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r5 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.removeColor(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.color_id["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, item_r4 == null ? null : item_r4.color_id["hex"]))("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4 == null ? null : item_r4.color_id["hex"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formType == "Supplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formType == "Retailer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "color-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100)("nbTooltip", item_r4.barcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.barcode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "color-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4 == null ? null : item_r4.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx_r3.formType == "Supplier" ? 20 : 10)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "trash-2-outline");
} }
function ProductColorsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductColorsComponent_ng_container_4_nb_list_item_2_Template, 26, 29, "nb-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.colorsList);
} }
function ProductColorsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Data Added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductColorsComponent {
    constructor(_Router) {
        this._Router = _Router;
        this.colorsList = [];
        this.colorRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this._Router.url.includes('/products/sellers')) {
            this.formType = 'Supplier';
        }
        if (this._Router.url.includes('/products/stores')) {
            this.formType = 'Retailer';
        }
    }
    removeColor(index) {
        this.colorRemoved.emit({ index: index });
    }
}
ProductColorsComponent.ɵfac = function ProductColorsComponent_Factory(t) { return new (t || ProductColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProductColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductColorsComponent, selectors: [["product-colors"]], inputs: { colorsList: "colorsList" }, outputs: { colorRemoved: "colorRemoved" }, decls: 7, vars: 5, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "container", 3, "fxFlex"], [3, "fxFlex"], [1, "body", 3, "fxFlex"], [4, "ngIf", "ngIfElse"], ["showEmpty", ""], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayout.xs", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "color-list", 3, "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center", 1, "color-preview", "color-size", 3, "fxFlex", "fxFlex.xs"], [1, "color-label", 3, "fxFlex"], [1, "color", 3, "ngStyle", "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "gappx", "class", "color-size", 3, "ngClass.xs", "fxFlex", "fxFlex.xs", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "gappx", 1, "color-size", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], [1, "detail-header", 3, "fxFlex"], [1, "detail-text", 3, "fxFlex", "nbTooltip"], [1, "detail-text", 3, "fxFlex"], ["class", "images", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "gappx", 3, "fxFlex", "fxFlex.xs"], ["nbButton", "", "status", "danger", 3, "click"], ["pack", "eva", 3, "icon"], ["fxLayoutAlign", "center start", 3, "fxFlex"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], [1, "images"], [3, "src"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "empty-container"]], template: function ProductColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Product Colors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductColorsComponent_ng_container_4_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductColorsComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.colorsList == null ? null : ctx.colorsList.length) > 0)("ngIfElse", _r1);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTagListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTagComponent"]], styles: ["[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  padding: 0;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  height: 220px;\n  padding: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .empty-container[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  height: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .color-preview[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  height: 30px;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #edf1f7;\n  margin: 5px 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .detail-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .detail-text[_ngcontent-%COMP%]     .nb-tag-list-tags-wrapper {\n  display: block !important;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .detail-text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 5px;\n  position: relative;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .detail-text[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  border: 1px solid #c8cad0;\n  border-radius: 4px 4px 0 0;\n  width: 50px;\n  height: 50px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .color-size[_ngcontent-%COMP%] {\n  border-right: 1px solid #edf1f7;\n  padding: 0 10px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .color-list[_ngcontent-%COMP%]   .color-size-xs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border: 0;\n  border-bottom: 1px solid #edf1f7;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]     nb-list nb-list-item {\n  padding: 0 !important;\n  border: 0 !important;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]     nb-list nb-list-item nb-card {\n  padding: 0 20px !important;\n  margin: 0;\n  height: 110px;\n  border: 0;\n  border-bottom: 1px solid #e4e9f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3QtY29sb3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsY0FBQTtFQUNGLFVBQUE7RUFDQSxZQUFBO0FBREY7QUFHSTtFQUNELGFBQUE7RUFDQSxVQUFBO0FBREg7QUFHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFEUjtBQU9RO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUxWO0FBU007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUFI7QUFVTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUlI7QUFVUTtFQUNFLHlCQUFBO0FBUlY7QUFXUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBVFY7QUFXVTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVFo7QUFjTTtFQUNFLCtCQUFBO0VBQ0osZUFBQTtBQVpKO0FBZU07RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBYlI7QUFtQlE7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0FBakJWO0FBbUJVO0VBQ0UsMEJBQUE7RUFDTixTQUFBO0VBQ0EsYUFBQTtFQUNNLFNBQUE7RUFDQSxnQ0FBQTtBQWpCWiIsImZpbGUiOiJwcm9kdWN0LWNvbG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDE1cHggMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGhlaWdodDogMTAwJTtcblxuICAgIC5ib2R5IHtcblx0XHRcdGhlaWdodDogMjIwcHg7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXG4gICAgICAuZW1wdHktY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbG9yLWxpc3Qge1xuICAgICAgLmNvbG9yLXByZXZpZXcge1xuICAgICAgICAuY29sb3Ige1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZjFmNztcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWwtaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWwtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICA6Om5nLWRlZXAgLm5iLXRhZy1saXN0LXRhZ3Mtd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29sb3Itc2l6ZSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZGYxZjc7XG5cdFx0XHRcdHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIH1cblxuICAgICAgLmNvbG9yLXNpemUteHMge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGYxZjc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIG5iLWxpc3Qge1xuICAgICAgICBuYi1saXN0LWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcblxuICAgICAgICAgIG5iLWNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU5ZjI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-colors',
                templateUrl: './product-colors.component.html',
                styleUrls: ['./product-colors.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { colorsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Qfj9":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/products/add-product/upload-images/upload-images.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UploadImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImagesComponent", function() { return UploadImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UploadImagesComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImagesComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeImage(ctx_r2.currentImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadImagesComponent_div_12_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImagesComponent_div_12_div_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const photo_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.removeImage(photo_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadImagesComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImagesComponent_div_12_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const photo_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.changeMainImg(photo_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadImagesComponent_div_12_div_1_button_2_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r5 == null ? null : photo_r5.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currentImage !== "/assets/icons/picture.svg");
} }
function UploadImagesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadImagesComponent_div_12_div_1_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.imageList);
} }
class UploadImagesComponent {
    constructor() {
        this.imageUpdates = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageList = [];
        this.defaultImgLink = "/assets/icons/picture.svg";
        this.currentImage = this.defaultImgLink;
        this.currentImagePath = this.defaultImgLink;
    }
    ngOnInit() {
    }
    handleFileInput(event) {
        var _a;
        let files = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files;
        this.addNewImg(files[0]);
    }
    reset() {
        this.imageList = [];
        this.currentImage = this.defaultImgLink;
        this.getCurrentImagePath(this.currentImage);
    }
    addNewImg(newImage) {
        var _a;
        if ((_a = this.imageList) === null || _a === void 0 ? void 0 : _a.some((img) => img === newImage)) {
            // this._toasterService.show('Image Already Selected', 'Error', { status: 'danger' });
        }
        else {
            let reader = new FileReader();
            this.currentImage = newImage;
            reader.readAsDataURL(newImage);
            reader.onload = (_event) => {
                this.imageList.push({ file: newImage, src: reader.result });
            };
            this.getCurrentImagePath(this.currentImage);
            this.imageUpdates.emit(this.imageList);
        }
    }
    getCurrentImagePath(currentImage) {
        if (currentImage === this.defaultImgLink) {
            this.currentImagePath = this.defaultImgLink;
        }
        else {
            let reader = new FileReader();
            reader.readAsDataURL(currentImage);
            reader.onload = (_event) => {
                this.currentImagePath = reader.result;
            };
        }
    }
    changeMainImg(selectedImage) {
        this.currentImage = selectedImage;
    }
    removeImage(deleteImage) {
        this.imageList = this.imageList.filter(img => (img === null || img === void 0 ? void 0 : img.src) !== (deleteImage === null || deleteImage === void 0 ? void 0 : deleteImage.src));
        if (this.currentImagePath === (deleteImage === null || deleteImage === void 0 ? void 0 : deleteImage.src)) {
            this.currentImage = this.imageList[0] ? this.imageList[0].file : this.defaultImgLink;
        }
        this.getCurrentImagePath(this.currentImage);
        this.imageUpdates.emit(this.imageList);
        // this.getAllImagePath();
    }
}
UploadImagesComponent.ɵfac = function UploadImagesComponent_Factory(t) { return new (t || UploadImagesComponent)(); };
UploadImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadImagesComponent, selectors: [["upload-images"]], outputs: { imageUpdates: "imageUpdates" }, decls: 13, vars: 9, consts: [["fxLayout", "row wrap", 1, "large-image-container", 3, "fxFlex"], [3, "fxFlex"], ["nbButton", "", "outline", "", "fullWidth", "", "status", "info", 1, "select-btn", 3, "disabled"], ["type", "file", 3, "disabled", "change"], ["fxLayout", "row wrap", 1, "images-container", 3, "fxFlex"], ["fxLayout", "row", "fxLayoutAlign", "start start", 3, "fxFlex"], [1, "photo", "photo--large"], [1, "img-large", 3, "src"], ["nbButton", "", "ghost", "", "status", "danger", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 3, "fxFlex", 4, "ngIf"], ["nbButton", "", "ghost", "", "status", "danger", 3, "click"], ["icon", "close-circle-outline"], ["fxLayout", "row", "fxLayoutAlign", "center center", 3, "fxFlex"], ["class", "photo photo--small", 4, "ngFor", "ngForOf"], [1, "photo", "photo--small"], [1, "img-small", 3, "src", "click"]], template: function UploadImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadImagesComponent_Template_input_change_5_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Select Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UploadImagesComponent_button_11_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UploadImagesComponent_div_12_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx.imageList == null ? null : ctx.imageList.length) == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", (ctx.imageList == null ? null : ctx.imageList.length) == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentImage !== ctx.defaultImgLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.imageList == null ? null : ctx.imageList.length) > 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  height: 200px;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0;\n  height: 22px;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  border-bottom: 1px solid #c8cad0;\n  border-radius: 4px 4px 0 0;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   .img-large[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   .img-small[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .photo--large[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 140px;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .photo--small[_ngcontent-%COMP%] {\n  padding: 9px 10px 0 10px;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n  position: relative;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  opacity: 0;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVwbG9hZC1pbWFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFGTjtBQUlNO0VBQ0Usa0JBQUE7QUFGUjtBQUlRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRlY7QUFLUTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtBQUhWO0FBTVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpWO0FBT1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxWO0FBU007RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQVBSO0FBVU07RUFDRSx3QkFBQTtBQVJSO0FBYUk7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBWE47QUFhTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFYUiIsImZpbGUiOiJ1cGxvYWQtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubGFyZ2UtaW1hZ2UtY29udGFpbmVyIHtcblxuICAgIC5pbWFnZXMtY29udGFpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgIC5waG90byB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGNhZDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nLWxhcmdlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nLXNtYWxsIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnBob3RvLS1sYXJnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgfVxuXG4gICAgICAucGhvdG8tLXNtYWxsIHtcbiAgICAgICAgcGFkZGluZzogOXB4IDEwcHggMCAxMHB4O1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnNlbGVjdC1idG4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadImagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'upload-images',
                templateUrl: './upload-images.component.html',
                styleUrls: ['./upload-images.component.scss']
            }]
    }], function () { return []; }, { imageUpdates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "T6Wi":
/*!****************************************************************************!*\
  !*** ./src/app/pages/products/add-product/forms/step-two-retailer-form.ts ***!
  \****************************************************************************/
/*! exports provided: stepTwoRetailer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepTwoRetailer", function() { return stepTwoRetailer; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

const stepTwoRetailer = [
    {
        id: "color_id",
        formControl: "color_id",
        hide: false,
        label: "Color",
        inputType: "text",
        type: 'select',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        selectList: [],
    },
    {
        id: "sizes",
        formControl: "sizes",
        hide: false,
        label: "Sizes",
        inputType: "text",
        type: 'custom',
        customType: 'attr-list',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
    },
    {
        id: "barcode",
        formControl: "barcode",
        hide: false,
        label: "Barcode",
        inputType: "text",
        type: 'custom',
        customType: 'barcode',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
    },
    {
        id: "image",
        formControl: "images",
        hide: false,
        label: "Images",
        inputType: "text",
        type: 'custom',
        customType: 'image',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
    },
];


/***/ }),

/***/ "h8aj":
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/add-product/step-one/step-one.component.ts ***!
  \***************************************************************************/
/*! exports provided: StepOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepOneComponent", function() { return StepOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/util/isObject */ "GMZp");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _forms_step_one_supplier_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/step-one-supplier-form */ "9fn6");
/* harmony import */ var _forms_step_one_retailer_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/step-one-retailer-form */ "O1+n");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/brands/brands.services */ "jQNl");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/materials/materials.services */ "+FFz");
/* harmony import */ var _attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../attributes-list/attributes-list.component */ "14rl");
/* harmony import */ var _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/policies/policies.services */ "02IL");
/* harmony import */ var _services_shipping_methods_shipping_methods_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/shipping-methods/shipping-methods.services */ "nZbc");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _shared_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/error-message/error-message.component */ "mrGz");




























const _c0 = ["attributesList"];
function StepOneComponent_ng_container_1_nb_form_field_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 16);
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", control_r1.id)("type", control_r1.inputType)("formControlName", control_r1.formControl);
} }
function StepOneComponent_ng_container_1_nb_form_field_2_input_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", control_r1.id)("formControlName", control_r1.formControl)("nbAutocomplete", _r8);
} }
function StepOneComponent_ng_container_1_nb_form_field_2_input_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", control_r1.id)("formControlName", control_r1.formControl)("nbDatepicker", _r10);
} }
function StepOneComponent_ng_container_1_nb_form_field_2_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (option_r14 == null ? null : option_r14.name) ? option_r14 == null ? null : option_r14.name : option_r14 == null ? null : option_r14.name_en, " ");
} }
function StepOneComponent_ng_container_1_nb_form_field_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StepOneComponent_ng_container_1_nb_form_field_2_input_3_Template, 1, 3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepOneComponent_ng_container_1_nb_form_field_2_input_4_Template, 1, 3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StepOneComponent_ng_container_1_nb_form_field_2_input_5_Template, 1, 3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-autocomplete", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StepOneComponent_ng_container_1_nb_form_field_2_nb_option_8_Template, 2, 2, "nb-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-datepicker", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "error-message", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", control_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx_r2.viewHandle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", control_r1.autocompleteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controlName", ctx_r2.stepOneForm.controls[control_r1.formControl])("name", control_r1.label);
} }
function StepOneComponent_ng_container_1_attributes_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "attributes-list", null, 20);
} }
function StepOneComponent_ng_container_1_nb_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function StepOneComponent_ng_container_1_nb_checkbox_4_Template_nb_checkbox_checkedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.checboxToggle($event, control_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", (ctx_r4.stepOneForm == null ? null : (tmp_0_0 = ctx_r4.stepOneForm.get(control_r1.formControl)) == null ? null : tmp_0_0.value) ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", control_r1.label, " ");
} }
const _c1 = function () { return ["custom", "checkbox"]; };
function StepOneComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepOneComponent_ng_container_1_nb_form_field_2_Template, 12, 9, "nb-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StepOneComponent_ng_container_1_attributes_list_3_Template, 2, 0, "attributes-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepOneComponent_ng_container_1_nb_checkbox_4_Template, 2, 2, "nb-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", control_r1.type !== "custom" ? 100 / 4 : 100 / 2)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1).includes(control_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "custom" && control_r1.customType === "attr-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "checkbox");
} }
class StepOneComponent {
    constructor(_Router, _CategoriseServices, _BrandsServices, _StoresServices, _MaterialsServices, _PoliciesServices, _ShippingMethodsServices) {
        this._Router = _Router;
        this._CategoriseServices = _CategoriseServices;
        this._BrandsServices = _BrandsServices;
        this._StoresServices = _StoresServices;
        this._MaterialsServices = _MaterialsServices;
        this._PoliciesServices = _PoliciesServices;
        this._ShippingMethodsServices = _ShippingMethodsServices;
        this.formsList = [];
        this.stepOneForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    ngOnInit() {
        var _a;
        if (this._Router.url.includes('/products/sellers')) {
            this.type = 2;
            this.formsList = _forms_step_one_supplier_form__WEBPACK_IMPORTED_MODULE_4__["stepOneSupplier"];
        }
        if (this._Router.url.includes('/products/stores')) {
            this.type = 1;
            this.formsList = _forms_step_one_retailer_form__WEBPACK_IMPORTED_MODULE_5__["stepOneRetailer"];
        }
        (_a = this.formsList) === null || _a === void 0 ? void 0 : _a.forEach(form => {
            this.stepOneForm.addControl(form.formControl, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', form.validators));
            if (form.type === 'auto') {
                this.stepOneForm.get(form.formControl).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(800)).subscribe({
                    next: (value) => {
                        if (!Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
                            this.getAutoData(form, value);
                        }
                    }
                });
            }
            if (form.formControl === 'category_id')
                this.fireAutocompleteApi(this._CategoriseServices.getCategoriesByLevel("3"), form);
            if (form.formControl === 'brand_id')
                this.fireAutocompleteApi(this._BrandsServices.getBrands(), form);
            if (form.formControl === 'store_id')
                this.fireAutocompleteApi(this._StoresServices.getAllStores('type=' + this.type), form);
            if (form.formControl === 'material_id')
                this.fireAutocompleteApi(this._MaterialsServices.getMaterials(), form);
            if (form.formControl === 'policy_id')
                this.fireAutocompleteApi(this._PoliciesServices.getPolicies(), form);
            if (form.formControl === 'shipping_method_id')
                this.fireAutocompleteApi(this._ShippingMethodsServices.getShippingMethods(), form);
        });
    }
    getAutoData(formControl, value) {
        let apiSubscriper;
        switch (formControl.formControl) {
            case 'category_id':
                apiSubscriper = this._CategoriseServices.getCategoriesByLevel("3", 'name=' + value);
                break;
            case 'brand_id':
                apiSubscriper = this._BrandsServices.getBrands('name=' + value);
                break;
            case 'store_id':
                apiSubscriper = this._StoresServices.getAllStores('name=' + value + '&type=' + this.type);
                break;
            case 'material_id':
                apiSubscriper = this._MaterialsServices.getMaterials('name=' + value);
                break;
            case 'policy_id':
                apiSubscriper = this._PoliciesServices.getPolicies('name=' + value);
                break;
            case 'shipping_method_id':
                apiSubscriper = this._ShippingMethodsServices.getShippingMethods('name=' + value);
                break;
        }
        this.fireAutocompleteApi(apiSubscriper, formControl);
    }
    fireAutocompleteApi(apiSubscriper, formControl) {
        apiSubscriper === null || apiSubscriper === void 0 ? void 0 : apiSubscriper.subscribe({
            next: (res) => {
                this.formsList.find(form => form.id === formControl.id).autocompleteList = res.data;
            },
            error: (error) => { },
            complete: () => { },
        });
    }
    checboxToggle(check, control) {
        this.stepOneForm.get(control.formControl).setValue(check);
    }
    getFormData() {
        return this.stepOneForm.value;
    }
    viewHandle(value) {
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
            return value.name ? value.name : value.name_en;
        }
        else {
            return value;
        }
    }
}
StepOneComponent.ɵfac = function StepOneComponent_Factory(t) { return new (t || StepOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_7__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_brands_brands_services__WEBPACK_IMPORTED_MODULE_8__["BrandsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_9__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_materials_materials_services__WEBPACK_IMPORTED_MODULE_10__["MaterialsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_policies_policies_services__WEBPACK_IMPORTED_MODULE_12__["PoliciesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shipping_methods_shipping_methods_services__WEBPACK_IMPORTED_MODULE_13__["ShippingMethodsServices"])); };
StepOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepOneComponent, selectors: [["step-one"]], viewQuery: function StepOneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.attributesList = _t.first);
    } }, decls: 2, vars: 2, consts: [["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "start stretch", "fxLayoutGap", "gappx", 1, "step-one-container", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["fxLayoutAlign", "start center", 1, "form-control-container", 3, "fxFlex", "fxFlex.xs"], ["class", "field-with-validation", 4, "ngIf"], [4, "ngIf"], [3, "checked", "checkedChange", 4, "ngIf"], [1, "field-with-validation"], [3, "for"], ["nbInput", "", 3, "id", "type", "formControlName", 4, "ngIf"], ["nbInput", "", 3, "id", "formControlName", "nbAutocomplete", 4, "ngIf"], ["nbInput", "", 3, "id", "formControlName", "nbDatepicker", 4, "ngIf"], [3, "handleDisplayFn"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], ["dateTimePicker", ""], [3, "controlName", "name"], ["nbInput", "", 3, "id", "type", "formControlName"], ["nbInput", "", 3, "id", "formControlName", "nbAutocomplete"], ["nbInput", "", 3, "id", "formControlName", "nbDatepicker"], [3, "value"], ["attributesList", ""], [3, "checked", "checkedChange"]], template: function StepOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepOneComponent_ng_container_1_Template, 5, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.stepOneForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formsList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbAutocompleteComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbDatepickerComponent"], _shared_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_17__["ErrorMessageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbDatepickerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbOptionComponent"], _attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_11__["AttributesListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_16__["NbCheckboxComponent"]], styles: ["[_nghost-%COMP%]   .step-one-container[_ngcontent-%COMP%] {\n  min-height: 640px;\n}\n[_nghost-%COMP%]   .step-one-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%] {\n  min-height: 60px;\n}\n[_nghost-%COMP%]   .step-one-container[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n}\n[_nghost-%COMP%]   .step-one-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  max-width: none !important;\n  width: 100%;\n}\n[_nghost-%COMP%]   .step-one-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%]     input {\n  max-width: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0ZXAtb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSjtBQUVJO0VBQ0UsZ0JBQUE7QUFBTjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBQVI7QUFJSTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtBQUZOO0FBS1E7RUFDRSwwQkFBQTtBQUhWIiwiZmlsZSI6InN0ZXAtb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuc3RlcC1vbmUtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA2NDBweDtcblxuICAgIC5mb3JtLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG5cbiAgICAgIG5iLWNoZWNrYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmItZm9ybS1maWVsZCB7XG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'step-one',
                templateUrl: './step-one.component.html',
                styleUrls: ['./step-one.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_7__["CategoriseServices"] }, { type: _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_8__["BrandsServices"] }, { type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_9__["StoresServices"] }, { type: _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_10__["MaterialsServices"] }, { type: _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_12__["PoliciesServices"] }, { type: _services_shipping_methods_shipping_methods_services__WEBPACK_IMPORTED_MODULE_13__["ShippingMethodsServices"] }]; }, { attributesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['attributesList']
        }] }); })();


/***/ }),

/***/ "jzK1":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/products/add-product/index-add-product/index-add-product.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: IndexAddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexAddProductComponent", function() { return IndexAddProductComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_add_product_add_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/add-product/add-product.service */ "EAGc");
/* harmony import */ var _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../step-one/step-one.component */ "h8aj");
/* harmony import */ var _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../step-two/step-two.component */ "vRrP");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");















const _c0 = ["NbStepper"];
const _c1 = ["stepOne"];
const _c2 = ["stepTwo"];
class IndexAddProductComponent {
    constructor(_AddProductService, _Router, _NbToastrService, _DatePipe, toaster) {
        this._AddProductService = _AddProductService;
        this._Router = _Router;
        this._NbToastrService = _NbToastrService;
        this._DatePipe = _DatePipe;
        this.toaster = toaster;
        this.loading = false;
    }
    ngOnInit() {
        if (this._Router.url.includes('/products/sellers')) {
            this.formType = 'Supplier';
        }
        if (this._Router.url.includes('/products/stores')) {
            this.formType = 'Retailer';
        }
    }
    saveStepOne() {
        var _a, _b, _c, _d, _e;
        this.loading = true;
        let data = this.stepOne.getFormData();
        data.seller_id = data.store_id.user_id;
        this.seller_id = data.seller_id;
        data.brand_id = data.brand_id.id;
        data.category_id = data.category_id.id;
        data.store_id = data.store_id.id;
        data.material_id = (_a = data === null || data === void 0 ? void 0 : data.material_id) === null || _a === void 0 ? void 0 : _a.id;
        data.policy_id = (_b = data === null || data === void 0 ? void 0 : data.policy_id) === null || _b === void 0 ? void 0 : _b.id;
        data.shipping_method_id = (_c = data === null || data === void 0 ? void 0 : data.shipping_method_id) === null || _c === void 0 ? void 0 : _c.id;
        data.publish_app_at = this._DatePipe.transform(data.publish_app_at, 'yyyy-MM-dd');
        data.product_attributes = (_e = (_d = this.stepOne) === null || _d === void 0 ? void 0 : _d.attributesList) === null || _e === void 0 ? void 0 : _e.attrList.map(ele => { return { size_id: ele.size.id, quantity: ele.quantity }; });
        this._AddProductService['addStepOne' + this.formType](data).subscribe((res) => {
            var _a;
            this.productId = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.id;
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
            // this._Router.navigateByUrl('/brands');
        }, (error) => {
            var _a;
            this.loading = false;
            this._NbToastrService.show((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message, 'Error', { status: 'danger' });
        }, () => {
            this.loading = false;
            this.NbStepper.next();
        });
    }
    saveStepTwo() {
        this.loading = true;
        this.stepTwo.getFormData().forEach((data, index) => {
            this.saveProductColor(data, (index == this.stepTwo.getFormData().length - 1) ? true : false);
        });
    }
    saveProductColor(data, last) {
        // data.seller_id = this.seller_id;
        console.log(this.seller_id);
        if (last)
            data.append("reviewed", last ? "1" : "0");
        // console.log(data.);
        this._AddProductService['addStepTwo' + this.formType](data).subscribe((res) => {
        }, (error) => {
            var _a;
            this.loading = false;
            this._NbToastrService.show((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message, 'Error', { status: 'danger' });
        }, () => {
            if (last) {
                this.loading = false;
                this._NbToastrService.show('Product Colors are saved successfully', 'Success', { status: 'success' });
                this._Router.navigate(['/products/' + (this.formType == 'Supplier' ? 'sellers' : 'stores')]);
            }
        });
    }
}
IndexAddProductComponent.ɵfac = function IndexAddProductComponent_Factory(t) { return new (t || IndexAddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_add_product_add_product_service__WEBPACK_IMPORTED_MODULE_4__["AddProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"])); };
IndexAddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexAddProductComponent, selectors: [["app-index-add-product"]], viewQuery: function IndexAddProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.NbStepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepOne = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepTwo = _t.first);
    } }, decls: 19, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "page-container"], [3, "fxFlex", "nbSpinner"], ["orientation", "horizontal"], ["NbStepper", ""], ["label", "Step one"], ["stepOne", ""], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "gappx", 1, "steper-footer"], ["nbButton", "", "status", "primary", 1, "next-button", 3, "disabled", "click"], ["label", "Step two"], [3, "seller_id", "productId"], ["stepTwo", ""], [1, "steper-footer"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "disabled", "click"]], template: function IndexAddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-stepper", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "step-one", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexAddProductComponent_Template_button_click_11_listener() { return ctx.saveStepOne(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "step-two", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexAddProductComponent_Template_button_click_17_listener() { return ctx.saveStepTwo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100)("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Add Product ", ctx.formType, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(_r1 == null ? null : _r1.stepOneForm == null ? null : _r1.stepOneForm.valid) || !((_r1 == null ? null : _r1.attributesList == null ? null : _r1.attributesList.attrList == null ? null : _r1.attributesList.attrList.length) > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("seller_id", ctx.seller_id)("productId", ctx.productId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r2 == null ? null : _r2.validate());
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepComponent"], _step_one_step_one_component__WEBPACK_IMPORTED_MODULE_5__["StepOneComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _step_two_step_two_component__WEBPACK_IMPORTED_MODULE_6__["StepTwoComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  min-height: 100%;\n}\n[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-stepper[_ngcontent-%COMP%]     .step-content {\n  padding: 0;\n}\n[_nghost-%COMP%]   .page-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   .steper-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluZGV4LWFkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBR1U7RUFDRSxVQUFBO0FBRFo7QUFPUTtFQUNFLGlCQUFBO0FBTFYiLCJmaWxlIjoiaW5kZXgtYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcblxuICAucGFnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG5iLWNhcmQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICBuYi1zdGVwcGVyIHtcbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAuc3RlcC1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zdGVwZXItZm9vdGVyIHtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndexAddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-index-add-product',
                templateUrl: './index-add-product.component.html',
                styleUrls: ['./index-add-product.component.scss']
            }]
    }], function () { return [{ type: _services_add_product_add_product_service__WEBPACK_IMPORTED_MODULE_4__["AddProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }]; }, { NbStepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['NbStepper']
        }], stepOne: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['stepOne', { static: true }]
        }], stepTwo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['stepTwo', { static: true }]
        }] }); })();


/***/ }),

/***/ "lC7W":
/*!****************************************************************************!*\
  !*** ./src/app/pages/products/add-product/forms/step-two-supplier-form.ts ***!
  \****************************************************************************/
/*! exports provided: stepTwoSupplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepTwoSupplier", function() { return stepTwoSupplier; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

const stepTwoSupplier = [
    {
        id: "color_id",
        formControl: "color_id",
        hide: false,
        label: "Color",
        inputType: "text",
        type: 'select',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
        selectList: [],
    },
    {
        id: "quantity",
        formControl: "quantity",
        hide: false,
        label: "Quantity",
        inputType: "number",
        type: 'string',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1)
        ],
    },
    {
        id: "barcode",
        formControl: "barcode",
        hide: false,
        label: "Barcode",
        inputType: "text",
        type: 'custom',
        customType: 'barcode',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
    },
    {
        id: "image",
        formControl: "images",
        hide: false,
        label: "Images",
        inputType: "text",
        type: 'custom',
        customType: 'image',
        validators: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
        ],
    },
];


/***/ }),

/***/ "vRrP":
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/add-product/step-two/step-two.component.ts ***!
  \***************************************************************************/
/*! exports provided: StepTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepTwoComponent", function() { return StepTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/util/isObject */ "GMZp");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _forms_step_two_supplier_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/step-two-supplier-form */ "lC7W");
/* harmony import */ var _forms_step_two_retailer_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/step-two-retailer-form */ "T6Wi");
/* harmony import */ var _services_add_product_add_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/add-product/add-product.service */ "EAGc");
/* harmony import */ var _upload_images_upload_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../upload-images/upload-images.component */ "Qfj9");
/* harmony import */ var _attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attributes-list/attributes-list.component */ "14rl");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _product_colors_product_colors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product-colors/product-colors.component */ "Py4L");
/* harmony import */ var _shared_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/error-message/error-message.component */ "mrGz");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-barcode */ "6QD7");





















const _c0 = ["attributesList"];
const _c1 = ["uploadImages"];
function StepTwoComponent_ng_container_1_nb_form_field_2_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 14);
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", control_r1.id)("type", control_r1.inputType)("formControlName", control_r1.formControl);
} }
function StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_4_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (option_r12 == null ? null : option_r12.name) ? option_r12 == null ? null : option_r12.name : option_r12 == null ? null : option_r12.name_en, " ");
} }
function StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-autocomplete", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_4_nb_option_4_Template, 2, 2, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", control_r1.id)("formControlName", control_r1.formControl)("nbAutocomplete", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx_r7.viewHandle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", control_r1.autocompleteList);
} }
function StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_5_nb_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r15 == null ? null : option_r15.name_en, " ");
} }
function StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_5_nb_option_2_Template, 2, 2, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Select " + control_r1.label)("formControlName", control_r1.formControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", control_r1.selectList);
} }
function StepTwoComponent_ng_container_1_nb_form_field_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StepTwoComponent_ng_container_1_nb_form_field_2_input_3_Template, 1, 3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_4_Template, 5, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StepTwoComponent_ng_container_1_nb_form_field_2_ng_container_5_Template, 3, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "error-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", control_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type === "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("controlName", ctx_r2.stepTwoForm.controls[control_r1.formControl])("name", control_r1.label);
} }
function StepTwoComponent_ng_container_1_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-barcode", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bc-value", ctx_r18.stepTwoForm.controls[control_r1.formControl] == null ? null : ctx_r18.stepTwoForm.controls[control_r1.formControl].value)("bc-display-value", true);
} }
function StepTwoComponent_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StepTwoComponent_ng_container_1_div_3_ng_container_5_Template, 2, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.xs", 100)("fxFlex.sm", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", control_r1.formControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.stepTwoForm.controls[control_r1.formControl] == null ? null : ctx_r3.stepTwoForm.controls[control_r1.formControl].value);
} }
function StepTwoComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "upload-images", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageUpdates", function StepTwoComponent_ng_container_1_ng_container_4_Template_upload_images_imageUpdates_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.getImageUpdates($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function StepTwoComponent_ng_container_1_attributes_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "attributes-list", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("attrListUpdates", function StepTwoComponent_ng_container_1_attributes_list_5_Template_attributes_list_attrListUpdates_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.getSizesUpdates($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StepTwoComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StepTwoComponent_ng_container_1_nb_form_field_2_Template, 7, 7, "nb-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StepTwoComponent_ng_container_1_div_3_Template, 6, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepTwoComponent_ng_container_1_ng_container_4_Template, 3, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StepTwoComponent_ng_container_1_attributes_list_5_Template, 2, 0, "attributes-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 4)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type !== "custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type == "custom" && control_r1.customType == "barcode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type == "custom" && control_r1.customType == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r1.type == "custom" && control_r1.customType == "attr-list");
} }
class StepTwoComponent {
    constructor(_Router, _AddProductService) {
        this._Router = _Router;
        this._AddProductService = _AddProductService;
        this.formsList = [];
        this.colorsList = [];
        this.stepTwoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    ngOnInit() {
        var _a;
        if (this._Router.url.includes('/products/sellers')) {
            this.formsList = _forms_step_two_supplier_form__WEBPACK_IMPORTED_MODULE_4__["stepTwoSupplier"];
        }
        if (this._Router.url.includes('/products/stores')) {
            this.formsList = _forms_step_two_retailer_form__WEBPACK_IMPORTED_MODULE_5__["stepTwoRetailer"];
        }
        (_a = this.formsList) === null || _a === void 0 ? void 0 : _a.forEach(form => {
            this.stepTwoForm.addControl(form.formControl, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', form.validators));
            if (form.autocompleteList)
                this['get' + form.label]();
            if (form.selectList)
                this['get' + form.label]();
        });
    }
    getFormData() {
        let formData = [];
        this.colorsList.forEach(colorItem => {
            var _a, _b;
            let newFormData = new FormData();
            newFormData.append('product_id', this.productId);
            newFormData.append('seller_id', this.seller_id);
            newFormData.append('color_id', (_a = colorItem === null || colorItem === void 0 ? void 0 : colorItem.color_id) === null || _a === void 0 ? void 0 : _a.id);
            newFormData.append('barcode', colorItem === null || colorItem === void 0 ? void 0 : colorItem.barcode);
            newFormData.append('quantity', colorItem === null || colorItem === void 0 ? void 0 : colorItem.quantity);
            (_b = colorItem === null || colorItem === void 0 ? void 0 : colorItem.images) === null || _b === void 0 ? void 0 : _b.forEach((image, index) => {
                newFormData.append('images[' + index + ']', image === null || image === void 0 ? void 0 : image.file);
            });
            formData.push(newFormData);
        });
        return formData;
    }
    validate() {
        var _a;
        if (((_a = this.colorsList) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return true;
        return false;
    }
    getColor() {
        this._AddProductService.getColors().subscribe((res) => {
            this.colorsForSelectionLength = res['data'].length;
            this.formsList.filter(elem => {
                if (elem.label == 'Color') {
                    elem['selectList'] = res.data;
                }
                return elem;
            });
        }, error => {
        }, () => {
        });
    }
    addToList() {
        let color = this.stepTwoForm.value;
        this.colorsList.push(color);
        this.resetForm();
    }
    updateColorsList(event) {
        this.colorsList.splice(event.index, 1);
    }
    validateAddToList() {
        if (!this.stepTwoForm.valid)
            return true;
        if (this.colorsList.some(color => (color === null || color === void 0 ? void 0 : color.color_id.id) === this.stepTwoForm.value['color_id'].id))
            return true;
        return false;
    }
    getSizesUpdates(sizes) {
        this.stepTwoForm.controls['sizes'].setValue(sizes);
    }
    getImageUpdates(newImagesList) {
        if ((newImagesList === null || newImagesList === void 0 ? void 0 : newImagesList.length) > 0)
            this.stepTwoForm.controls['images'].setValue(newImagesList);
    }
    resetForm() {
        this.stepTwoForm.reset();
        this.uploadImages['_results'][0].reset();
        if (this.attributesList)
            this.attributesList.attrList = [];
    }
    viewHandle(value) {
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
            return value.name ? value.name : value.name_en;
        }
        else {
            return value;
        }
    }
}
StepTwoComponent.ɵfac = function StepTwoComponent_Factory(t) { return new (t || StepTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_add_product_add_product_service__WEBPACK_IMPORTED_MODULE_6__["AddProductService"])); };
StepTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepTwoComponent, selectors: [["step-two"]], viewQuery: function StepTwoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.attributesList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadImages = _t);
    } }, inputs: { productId: "productId", seller_id: "seller_id" }, decls: 6, vars: 5, consts: [["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "start start", "fxLayoutAlign.xs", "start stretch", "fxLayoutGap", "gappx", 1, "step-two-container", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "status", "primary", 3, "disabled", "click"], ["pack", "eva", 3, "icon"], [3, "colorsList", "colorRemoved"], [1, "form-control-container", 3, "fxFlex", "fxFlex.xs"], ["class", "field-with-validation", 4, "ngIf"], ["class", "barcode-container", 3, "fxFlex.xs", "fxFlex.sm", 4, "ngIf"], [4, "ngIf"], [3, "attrListUpdates", 4, "ngIf"], [1, "field-with-validation"], [3, "for"], ["nbInput", "", "fullWidth", "", 3, "id", "type", "formControlName", 4, "ngIf"], [3, "controlName", "name"], ["nbInput", "", "fullWidth", "", 3, "id", "type", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "id", "formControlName", "nbAutocomplete"], [3, "handleDisplayFn"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fullWidth", "", 3, "placeholder", "formControlName"], [1, "barcode-container", 3, "fxFlex.xs", "fxFlex.sm"], ["for", "barcode"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "barcode", 3, "formControlName"], [3, "bc-value", "bc-display-value"], [3, "imageUpdates"], ["uploadImages", ""], [3, "attrListUpdates"], ["attributesList", ""]], template: function StepTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepTwoComponent_ng_container_1_Template, 6, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepTwoComponent_Template_button_click_2_listener() { return ctx.addToList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add to List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "product-colors", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorRemoved", function StepTwoComponent_Template_product_colors_colorRemoved_5_listener($event) { return ctx.updateColorsList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.stepTwoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.validateAddToList());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "plus-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorsList", ctx.colorsList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbIconComponent"], _product_colors_product_colors_component__WEBPACK_IMPORTED_MODULE_12__["ProductColorsComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbFormFieldComponent"], _shared_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_13__["ErrorMessageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbAutocompleteComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSelectComponent"], ngx_barcode__WEBPACK_IMPORTED_MODULE_14__["NgxBarcodeComponent"], _upload_images_upload_images_component__WEBPACK_IMPORTED_MODULE_7__["UploadImagesComponent"], _attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_8__["AttributesListComponent"]], styles: ["[_nghost-%COMP%]   .step-two-container[_ngcontent-%COMP%]   .barcode-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .step-two-container[_ngcontent-%COMP%]   .barcode-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%]     .nb-form-control-container {\n  display: inline !important;\n}\n[_nghost-%COMP%]   .step-two-container[_ngcontent-%COMP%]   .barcode-container[_ngcontent-%COMP%]   .barcode[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0ZXAtdHdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlNO0VBQ0UsV0FBQTtBQUhSO0FBTVU7RUFDRSwwQkFBQTtBQUpaO0FBVVE7RUFDRSxXQUFBO0FBUlYiLCJmaWxlIjoic3RlcC10d28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5zdGVwLXR3by1jb250YWluZXIge1xuXG4gICAgLmJhcmNvZGUtY29udGFpbmVyIHtcbiAgICAgIG5iLWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgIC5uYi1mb3JtLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYmFyY29kZSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'step-two',
                templateUrl: './step-two.component.html',
                styleUrls: ['./step-two.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_add_product_add_product_service__WEBPACK_IMPORTED_MODULE_6__["AddProductService"] }]; }, { uploadImages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['uploadImages']
        }], attributesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['attributesList']
        }], productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], seller_id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "xbUZ":
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/add-product/add-products-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AddProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductsRoutingModule", function() { return AddProductsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_add_product_index_add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-add-product/index-add-product.component */ "jzK1");





const routes = [{
        path: '',
        component: _index_add_product_index_add_product_component__WEBPACK_IMPORTED_MODULE_2__["IndexAddProductComponent"]
    }];
class AddProductsRoutingModule {
}
AddProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddProductsRoutingModule });
AddProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddProductsRoutingModule_Factory(t) { return new (t || AddProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=add-product-add-product-module.js.map