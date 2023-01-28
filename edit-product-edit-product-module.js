(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-product-edit-product-module"],{

/***/ "005S":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/product-stock/product-stock.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockComponent", function() { return ProductStockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_stock_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/stock/stock.service */ "rS5l");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");











const _c0 = function (a0) { return { "background-color": a0 }; };
function ProductStockComponent_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-user", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Available stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reserved stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "HEX : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item_r1 == null ? null : item_r1.size == null ? null : item_r1.size.size.split("").join(" "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.available_stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.reserved_stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.sold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.color["name_en"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, item_r1 == null ? null : item_r1.color["hex"]))("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1 == null ? null : item_r1.color["hex"], " ");
} }
class ProductStockComponent {
    constructor(_stockService, activeRouter, toaster) {
        this._stockService = _stockService;
        this.activeRouter = activeRouter;
        this.toaster = toaster;
        this.loading = false;
    }
    ngOnInit() {
        this.activeRouter.params.subscribe(params => {
            this.productId = params['id'];
            this.getStocks(this.productId, this.storeId);
        });
    }
    getStocks(productId, stockId) {
        this.loading = true;
        this._stockService.getStocks(productId, stockId).subscribe(res => {
            this.stockList = res['data'];
        }, error => {
            this.loading = false;
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
        }, () => {
            this.loading = false;
        });
    }
}
ProductStockComponent.ɵfac = function ProductStockComponent_Factory(t) { return new (t || ProductStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"])); };
ProductStockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductStockComponent, selectors: [["product-stock"]], inputs: { storeId: "storeId" }, decls: 3, vars: 3, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "stock-container", 3, "nbSpinner"], [3, "fxFlex"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayout.xs", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "stock-list", 3, "fxFlex"], ["fxLayout", "row", "fxLayoutAlign.xs", "center center", 1, "stock-size", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], ["size", "large", "onlyPicture", "", 3, "name"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "gappx", 1, "stock-size", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], [1, "detail-header", 3, "fxFlex"], [1, "detail-text", 3, "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center", 1, "stock-color-container", 3, "fxFlex", "fxFlex.xs"], [1, "stock-color-label", 3, "fxFlex"], [1, "stock-color", 3, "ngStyle", "fxFlex"]], template: function ProductStockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductStockComponent_nb_list_item_2_Template, 35, 40, "nb-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stockList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultStyleDirective"]], styles: ["[_nghost-%COMP%]   .stock-container[_ngcontent-%COMP%] {\n  min-height: 150px;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .stock-color-container[_ngcontent-%COMP%]   .stock-color[_ngcontent-%COMP%] {\n  height: 50px;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #edf1f7;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .detail-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .stock-size[_ngcontent-%COMP%] {\n  border-right: 1px solid #edf1f7;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .stock-size-xs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border: 0;\n  border-bottom: 1px solid #edf1f7;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   nb-user[_ngcontent-%COMP%]     .user-picture {\n  height: 80px;\n  width: 80px;\n  font-size: 20px;\n}\n[_nghost-%COMP%]     nb-list nb-list-item {\n  padding: 10px 0 !important;\n  border: 0 !important;\n}\n[_nghost-%COMP%]     nb-list nb-list-item nb-card {\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3Qtc3RvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQURSO0FBT1k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBTGhCO0FBU1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUFo7QUFVUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUlo7QUFXUTtFQUNJLCtCQUFBO0FBVFo7QUFZUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFWWjtBQWdCZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFkcEI7QUFzQlk7RUFDSSwwQkFBQTtFQUNBLG9CQUFBO0FBcEJoQjtBQXNCZ0I7RUFDSSx3QkFBQTtBQXBCcEIiLCJmaWxlIjoicHJvZHVjdC1zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAgIC5zdG9jay1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICB9XG5cbiAgICAuc3RvY2stbGlzdCB7XG5cbiAgICAgICAgLnN0b2NrLWNvbG9yLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuc3RvY2stY29sb3Ige1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZjFmNztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWwtaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbC10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RvY2stc2l6ZSB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWRmMWY3O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b2NrLXNpemUteHMge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGYxZjc7XG4gICAgICAgIH1cblxuXG4gICAgICAgIG5iLXVzZXIge1xuICAgICAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgICAudXNlci1waWN0dXJlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIG5iLWxpc3Qge1xuICAgICAgICAgICAgbmItbGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIG5iLWNhcmQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductStockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-stock',
                templateUrl: './product-stock.component.html',
                styleUrls: ['./product-stock.component.scss']
            }]
    }], function () { return [{ type: _services_stock_stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"] }]; }, { storeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['storeId']
        }] }); })();


/***/ }),

/***/ "1w8F":
/*!*****************************************************!*\
  !*** ./src/app/services/bundles/bundles.service.ts ***!
  \*****************************************************/
/*! exports provided: BundlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundlesService", function() { return BundlesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");





class BundlesService {
    constructor(http) {
        this.http = http;
    }
    getProductBundles(productId, storeId) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MAIN_SYSTEM + 'api/dashboard/products/' + productId + '/' + storeId + '/bundles';
        return this.http.get(url);
    }
}
BundlesService.ɵfac = function BundlesService_Factory(t) { return new (t || BundlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BundlesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BundlesService, factory: BundlesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BundlesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "3JXr":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/edit-products-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: EditProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductsRoutingModule", function() { return EditProductsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ "stVh");





const routes = [
    {
        path: '',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"]
    }
];
class EditProductsRoutingModule {
}
EditProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditProductsRoutingModule });
EditProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EditProductsRoutingModule_Factory(t) { return new (t || EditProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "GM0P":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/product-image/product-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImageComponent", function() { return ProductImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/products/products.services */ "NDz+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-barcode */ "6QD7");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");














function ProductImageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductImageComponent_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const product_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectProduct(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.xs", 100 / 2)("fxFlex.sm", 100 / 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3 == null ? null : product_r3.images[0] == null ? null : product_r3.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductImageComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductImageComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeImage(ctx_r6.currentImage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductImageComponent_div_22_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductImageComponent_div_22_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const photo_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeImage(photo_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductImageComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductImageComponent_div_22_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const photo_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.chnageMainImg(photo_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductImageComponent_div_22_button_2_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentImage !== "/assets/icons/picture.svg");
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class ProductImageComponent {
    constructor(activeRouter, _toasterService, _productService) {
        this.activeRouter = activeRouter;
        this._toasterService = _toasterService;
        this._productService = _productService;
        this.products = [];
        this.imageList = [];
        this.defaultImgLink = "/assets/icons/picture.svg";
        this.currentImage = this.defaultImgLink;
        this.barCodeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.activeRouter.params.subscribe(params => {
            this.productId = params['id'];
            this.getImageBardcode();
        });
        this.barCodeControl.valueChanges.subscribe(res => {
            this.bardcodeValue = res;
        });
    }
    getImageBardcode() {
        this._productService.getProductImageBardcode(this.productId).subscribe(res => {
            var _a, _b;
            this.products = res['data'];
            this.imageList = (_b = (_a = res['data'][0]) === null || _a === void 0 ? void 0 : _a.images) === null || _b === void 0 ? void 0 : _b.map((ele) => ele.image);
            if (this.imageList) {
                this.currentImage = this.imageList.length > 0 ? this.imageList[0] : this.defaultImgLink;
                this.bardcodeValue = res['data'][0].barcode;
                this.colorAttr = res['data'][0].color;
            }
        }, error => { }, () => { });
    }
    handleFileInput(event) {
        var _a;
        let files = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.addNewImg(reader.result);
        };
    }
    addNewImg(newImage) {
        var _a;
        if ((_a = this.imageList) === null || _a === void 0 ? void 0 : _a.some((img) => img === newImage)) {
            this._toasterService.show('Image Already Selected', 'Error', { status: 'danger' });
        }
        else {
            this.currentImage = newImage;
            this.imageList.push(newImage);
        }
    }
    chnageMainImg(selectedImage) {
        this.currentImage = selectedImage;
    }
    removeImage(deleteImage) {
        this.imageList = this.imageList.filter((img) => img !== deleteImage);
        if (this.currentImage === deleteImage) {
            this.currentImage = this.imageList[0] ? this.imageList[0] : this.defaultImgLink;
        }
    }
    selectProduct(selectedProduct) {
        var _a;
        this.imageList = (_a = selectedProduct.images) === null || _a === void 0 ? void 0 : _a.map((ele) => ele.image);
        this.currentImage = this.imageList.length > 0 ? this.imageList[0] : this.defaultImgLink;
        this.bardcodeValue = selectedProduct.barcode;
        this.colorAttr = selectedProduct.color;
    }
}
ProductImageComponent.ɵfac = function ProductImageComponent_Factory(t) { return new (t || ProductImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_4__["ProductsServices"])); };
ProductImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductImageComponent, selectors: [["product-image"]], decls: 43, vars: 29, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayout.sm", "column", "fxLayoutAlign", "space-between stretch", "fxLayoutGap", "20px", 3, "fxFlex", "fxFlex.xs", "fxFlex.sm"], [1, "product-colors", 3, "fxFlex", "fxFlex.xs"], ["fxLayout", "row warp", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "products-container"], ["class", "product-image-container", "fxLayout", "row warp", "fxLayoutAlign", "center center", 3, "fxFlex.xs", "fxFlex.sm", 4, "ngFor", "ngForOf"], [1, "color-images", 3, "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "gappx", 1, "image-container", 3, "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", 1, "large-image-container", 3, "fxFlex"], [1, "large-image"], ["fxLayout", "column", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], [3, "src"], ["nbButton", "", "outline", "", "fullWidth", "", "status", "info", 1, "select-btn"], ["type", "file", 3, "change"], ["nbButton", "", "ghost", "", "status", "danger", "class", "close-btn", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center start", "fxLayoutGap", "gappx", 1, "small-images", 3, "fxFlex"], ["class", "small-photo", 4, "ngFor", "ngForOf"], [1, "color-details", 3, "fxFlex"], ["fxLayout", "column", "fxLayout.xs", "row wrap", "fxLayout.sm", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "barcode-container"], ["for", "barcode"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "barcode", 3, "formControl", "value", "fxFlex.xs", "fxFlex.sm"], [3, "bc-value", "bc-display-value", "fxFlex.xs", "fxFlex.sm"], [1, "color-container", 3, "fxFlex.xs", "fxFlex.sm"], [1, "color-name"], [1, "color-hexa", 3, "ngStyle"], ["fxLayout", "row warp", "fxLayoutAlign", "center center", 1, "product-image-container", 3, "fxFlex.xs", "fxFlex.sm"], [1, "product-image", 3, "click"], ["alt", "product img", 3, "src"], ["nbButton", "", "ghost", "", "status", "danger", 1, "close-btn", 3, "click"], ["icon", "close-circle-outline"], [1, "small-photo"], [3, "src", "click"], ["nbButton", "", "ghost", "", "status", "danger", 3, "click", 4, "ngIf"], ["nbButton", "", "ghost", "", "status", "danger", 3, "click"]], template: function ProductImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductImageComponent_div_7_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Images ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductImageComponent_Template_input_change_18_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Select Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductImageComponent_button_20_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductImageComponent_div_22_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Color Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ngx-barcode", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Color : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "HEX : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentImage !== ctx.defaultImgLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.barCodeControl)("value", ctx.bardcodeValue)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bc-value", ctx.bardcodeValue)("bc-display-value", true)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.colorAttr == null ? null : ctx.colorAttr.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.colorAttr == null ? null : ctx.colorAttr.hex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.colorAttr == null ? null : ctx.colorAttr.hex));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], ngx_barcode__WEBPACK_IMPORTED_MODULE_7__["NgxBarcodeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 20px;\n}\n[_nghost-%COMP%]   nb-card.color-details[_ngcontent-%COMP%] {\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card.color-images[_ngcontent-%COMP%] {\n  min-width: 290px !important;\n}\n[_nghost-%COMP%]   nb-card.product-colors[_ngcontent-%COMP%] {\n  min-width: 200px !important;\n  overflow-y: hidden !important;\n  max-height: 461px;\n}\n[_nghost-%COMP%]   .products-container[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {\n  padding: 0 10px 10px 10px;\n}\n[_nghost-%COMP%]   .products-container[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid #c8cad0;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n[_nghost-%COMP%]   .products-container[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]:hover {\n  transform: scale(0.98);\n}\n[_nghost-%COMP%]   .products-container[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: contain;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%] {\n  max-width: 264px !important;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .large-image[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .large-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n  width: 220px;\n  height: 220px;\n  border: 1px solid #c8cad0;\n  border-radius: 4px 4px 0 0;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .large-image[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-shadow: none !important;\n  padding: 0;\n  height: 22px;\n}\n[_nghost-%COMP%]   .large-image-container[_ngcontent-%COMP%]   .large-image[_ngcontent-%COMP%]   .image-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .small-images[_ngcontent-%COMP%]   .small-photo[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n  position: relative;\n}\n[_nghost-%COMP%]   .small-images[_ngcontent-%COMP%]   .small-photo[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n[_nghost-%COMP%]   .small-images[_ngcontent-%COMP%]   .small-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px solid #c8cad0;\n  border-radius: 4px;\n  object-fit: contain;\n  width: 60px;\n  height: 60px;\n}\n[_nghost-%COMP%]   .small-images[_ngcontent-%COMP%]   .small-photo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0;\n  height: 22px;\n}\n[_nghost-%COMP%]   .barcode-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .barcode-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%]     .nb-form-control-container {\n  display: inline !important;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 0 !important;\n  position: relative;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   .color-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px 0 20px 10px;\n}\n[_nghost-%COMP%]   .color-container[_ngcontent-%COMP%]   .color-name[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 16px;\n  margin: 0 0 10px 0;\n}\n[_nghost-%COMP%]   .color-container[_ngcontent-%COMP%]   .color-hexa[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 50px;\n  margin: 10px 0;\n  border: 1px solid #edf1f7;\n  box-shadow: 0px 0px 10px 2px #00000017;\n  transition: 0.3s;\n}\n[_nghost-%COMP%]   .color-container[_ngcontent-%COMP%]   .color-hexa[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  border: 1px solid #c8cad0;\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3QtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRVE7RUFDSSwwQkFBQTtBQUFaO0FBR1E7RUFDSSwyQkFBQTtBQURaO0FBSVE7RUFDSSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQVFRO0VBQ0kseUJBQUE7QUFOWjtBQVFZO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5oQjtBQVFnQjtFQUNJLHNCQUFBO0FBTnBCO0FBU2dCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBwQjtBQWNJO0VBQ0ksMkJBQUE7QUFaUjtBQWNRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFaWjtBQWNZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFaaEI7QUFlWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBYmhCO0FBZ0JZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBZGhCO0FBb0JRO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWxCWjtBQW9CWTtFQUNJLGVBQUE7QUFsQmhCO0FBcUJZO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbkJoQjtBQXNCWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXBCaEI7QUEwQlE7RUFDSSxXQUFBO0FBeEJaO0FBMkJnQjtFQUNJLDBCQUFBO0FBekJwQjtBQWdDSTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBOUJSO0FBZ0NRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUE5Qlo7QUFpQ1E7RUFDSSxvQkFBQTtBQS9CWjtBQW9DSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQWxDUjtBQW9DUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbENaO0FBcUNRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtBQW5DWjtBQXFDWTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQW5DaEIiLCJmaWxlIjoicHJvZHVjdC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgbmItY2FyZCB7XG4gICAgICAgICYuY29sb3ItZGV0YWlscyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY29sb3ItaW1hZ2VzIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjkwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYucHJvZHVjdC1jb2xvcnMge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NjFweDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgICAgIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuXG4gICAgICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLmxhcmdlLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMjY0cHggIWltcG9ydGFudDtcblxuICAgICAgICAubGFyZ2UtaW1hZ2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjYWQwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltYWdlLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbWFsbC1pbWFnZXMge1xuICAgICAgICAuc21hbGwtcGhvdG8ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFyY29kZS1jb250YWluZXIge1xuICAgICAgICBuYi1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgIC5uYi1mb3JtLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbmItaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLmNvbG9yLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAxMHB4O1xuXG4gICAgICAgIC5jb2xvci1uYW1lIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29sb3ItaGV4YSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRmMWY3O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCAjMDAwMDAwMTc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDA7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-image',
                templateUrl: './product-image.component.html',
                styleUrls: ['./product-image.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_4__["ProductsServices"] }]; }, null); })();


/***/ }),

/***/ "QTWx":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/product-store/product-store.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStoreComponent", function() { return ProductStoreComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/products/products.services */ "NDz+");
/* harmony import */ var _product_store_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-store.column */ "wprY");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");
/* harmony import */ var _product_stock_product_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-stock/product-stock.component */ "005S");
/* harmony import */ var _product_bundles_product_bundles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-bundles/product-bundles.component */ "VCYa");

















const _c0 = ["dialog"];
function ProductStoreComponent_nb_card_2_product_stock_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "product-stock", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("storeId", ctx_r3.storeId);
} }
function ProductStoreComponent_nb_card_2_product_bundles_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "product-bundles", 6);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("storeId", ctx_r4.storeId);
} }
function ProductStoreComponent_nb_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductStoreComponent_nb_card_2_product_stock_4_Template, 1, 1, "product-stock", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductStoreComponent_nb_card_2_product_bundles_5_Template, 1, 1, "product-bundles", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.typeTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.typeTitle === "Stockes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.typeTitle === "Bundles");
} }
function ProductStoreComponent_ng_template_3_nb_icon_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nb-icon", 23);
} }
function ProductStoreComponent_ng_template_3_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductStoreComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit Stores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nb-datepicker", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "EGP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nb-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nb-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nb-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "-- Select --");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nb-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nb-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nb-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProductStoreComponent_ng_template_3_nb_icon_26_Template, 1, 0, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProductStoreComponent_ng_template_3_div_27_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nb-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Free Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductStoreComponent_ng_template_3_Template_button_click_33_listener() { const ref_r6 = ctx.dialogRef; return ref_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductStoreComponent_ng_template_3_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ref_r6 = ctx.dialogRef; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.saveStore(ref_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbSpinner", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100)("formGroup", ctx_r2.editStoreFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100 / 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100)("nbDatepicker", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100 / 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100 / 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100 / 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", "PERCENTAGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100 / 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editStoreFormGroup.get("discount_type").value === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.editStoreFormGroup.get("discount_type").value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100 / 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.editStoreFormGroup.valid);
} }
class ProductStoreComponent {
    constructor(_porductService, activeRouter, _NbDialogService, toaster, cdr, _DatePipe) {
        this._porductService = _porductService;
        this.activeRouter = activeRouter;
        this._NbDialogService = _NbDialogService;
        this.toaster = toaster;
        this.cdr = cdr;
        this._DatePipe = _DatePipe;
        this.column = _product_store_column__WEBPACK_IMPORTED_MODULE_6__["productStoreColumn"];
        this.storsData = {
            data: [],
            total: 0
        };
        this.loading = false;
        this.editStoreFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "id": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            "publish_app_at": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            "price": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            "net_price": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            "discount": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            "discount_type": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            "free_shipping": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.activeRouter.params.subscribe(params => {
            this.productId = params['id'];
            this.getProductStors(this.productId);
        });
        this.editStoreFormGroup.get('discount_type').valueChanges.subscribe(res => {
            if (res) {
                this.editStoreFormGroup.get('discount').enable();
            }
            else {
                this.editStoreFormGroup.get('discount').reset();
                this.editStoreFormGroup.get('discount').disable();
            }
        });
    }
    getProductStors(id) {
        this._porductService.getProductStores(id).subscribe(res => {
            console.log(res['data']);
            this.storsData.data = res['data'];
            this.storsData.total = res['data'].length;
        }, error => { }, () => { });
    }
    saveStore(dialougRef) {
        let paramsData = this.editStoreFormGroup.value;
        paramsData['discount_type'] = paramsData['discount_type'] == 'AMOUNT' ? 1 : 2;
        paramsData['publish_app_at'] = this._DatePipe.transform(paramsData['publish_app_at'], 'yyyy-MM-dd');
        this.loading = true;
        this._porductService.saveStoreInfo(paramsData).subscribe(res => {
            this.toaster.show(res['message'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            this.loading = false;
            dialougRef.close();
        }, () => {
            this.loading = false;
            dialougRef.close();
            this.getProductStors(this.productId);
        });
    }
    commandAction(event) {
        if (event.action.action === "edit") {
            this._NbDialogService.open(this.dialog, {
                context: 'Stores',
                closeOnBackdropClick: false,
            });
            setTimeout(() => {
                let dataInDialog = {
                    "id": event.data.id,
                    "publish_app_at": new Date(event.data.publish_app_at),
                    "price": event.data.price,
                    "net_price": event.data.net_price,
                    "discount": event.data.discount,
                    "discount_type": event.data.discount_type,
                    "free_shipping": event.data.free_shipping,
                };
                this.editStoreFormGroup.setValue(dataInDialog);
            }, 100);
        }
        else {
            this.storeId = event.data.store_id;
            this.typeTitle = event.action.toolTip;
        }
    }
}
ProductStoreComponent.ɵfac = function ProductStoreComponent_Factory(t) { return new (t || ProductStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_5__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"])); };
ProductStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductStoreComponent, selectors: [["product-store"]], viewQuery: function ProductStoreComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 5, vars: 5, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], [3, "GridColumns", "gridView", "filterable", "fxFlex", "commandActionClick"], [3, "fxFlex", 4, "ngIf"], ["dialog", ""], [3, "fxFlex"], [3, "storeId", 4, "ngIf"], [3, "storeId"], [1, "stores-form-dialog", 3, "nbSpinner"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 3, "fxFlex", "formGroup"], ["type", "text", "nbInput", "", "placeholder", "Publish App At", "formControlName", "publish_app_at", 3, "fxFlex", "nbDatepicker"], ["datepicker", ""], ["nbPrefix", "", 1, "charcter-icon"], ["type", "text", "nbInput", "", "placeholder", "Price", "formControlName", "price", 3, "fxFlex"], ["type", "text", "nbInput", "", "placeholder", "Net Price", "formControlName", "net_price", 3, "fxFlex"], ["placeholder", "Discount Type", "formControlName", "discount_type"], [3, "value"], ["nbPrefix", "", "icon", "percent-outline", "pack", "eva", 4, "ngIf"], ["nbPrefix", "", "class", "charcter-icon", 4, "ngIf"], ["type", "text", "nbInput", "", "placeholder", "Discount", "formControlName", "discount", 3, "fxFlex"], ["formControlName", "free_shipping", 3, "fxFlex"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "gappx"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["nbPrefix", "", "icon", "percent-outline", "pack", "eva"]], template: function ProductStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-kendo-custome-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("commandActionClick", function ProductStoreComponent_Template_app_kendo_custome_grid_commandActionClick_1_listener($event) { return ctx.commandAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductStoreComponent_nb_card_2_Template, 6, 4, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductStoreComponent_ng_template_3_Template, 37, 20, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("GridColumns", ctx.column)("gridView", ctx.storsData)("filterable", false)("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.typeTitle);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _product_stock_product_stock_component__WEBPACK_IMPORTED_MODULE_9__["ProductStockComponent"], _product_bundles_product_bundles_component__WEBPACK_IMPORTED_MODULE_10__["ProductBundlesComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPrefixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n  .stores-form-dialog {\n  min-width: 400px;\n  max-width: 600px;\n}\n\n  .stores-form-dialog .nb-form-control-container {\n  width: 100% !important;\n  max-width: none !important;\n  padding: 5px;\n}\n\n  .stores-form-dialog .charcter-icon {\n  font-size: 15px;\n  margin-left: 15px;\n  font-weight: 100;\n}\n\n  .stores-form-dialog nb-checkbox {\n  padding: 5px;\n}\n\n  .stores-form-dialog nb-select {\n  width: 100%;\n  max-width: none !important;\n}\n\n  .stores-form-dialog nb-card-footer button {\n  width: 100px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3Qtc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSOztBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUZSOztBQUlRO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFGWjs7QUFLUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSFo7O0FBTVE7RUFDSSxZQUFBO0FBSlo7O0FBT1E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7QUFMWjs7QUFTWTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQVBoQiIsImZpbGUiOiJwcm9kdWN0LXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIG5iLWNhcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgICAuc3RvcmVzLWZvcm0tZGlhbG9nIHtcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcblxuICAgICAgICAubmItZm9ybS1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcmN0ZXItaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBuYi1jaGVja2JveCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBuYi1zZWxlY3Qge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5iLWNhcmQtZm9vdGVyIHtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'product-store',
                templateUrl: './product-store.component.html',
                styleUrls: ['./product-store.component.scss']
            }]
    }], function () { return [{ type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_5__["ProductsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dialog']
        }] }); })();


/***/ }),

/***/ "VCYa":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/product-bundles/product-bundles.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductBundlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBundlesComponent", function() { return ProductBundlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_bundles_bundles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/bundles/bundles.service */ "1w8F");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ProductBundlesComponent_nb_list_item_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 22, item_r1.price, "EGP"));
} }
class ProductBundlesComponent {
    constructor(_bundleService, activeRouter, toaster) {
        this._bundleService = _bundleService;
        this.activeRouter = activeRouter;
        this.toaster = toaster;
        this.loading = false;
        this.bundlesList = [];
    }
    ngOnInit() {
        this.activeRouter.params.subscribe(params => {
            this.productId = params['id'];
            this.getBundles(this.productId, this.storeId);
        });
    }
    getBundles(productId, storeId) {
        this.loading = true;
        this._bundleService.getProductBundles(productId, storeId).subscribe(res => {
            this.bundlesList = res['data'];
        }, error => {
            this.loading = false;
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
        }, () => {
            this.loading = false;
        });
    }
}
ProductBundlesComponent.ɵfac = function ProductBundlesComponent_Factory(t) { return new (t || ProductBundlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bundles_bundles_service__WEBPACK_IMPORTED_MODULE_3__["BundlesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"])); };
ProductBundlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductBundlesComponent, selectors: [["product-bundles"]], inputs: { storeId: "storeId" }, decls: 18, vars: 21, consts: [["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 3, "nbSpinner"], [3, "fxFlex"], ["fxLayout", "row", "fxLayout.xs", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "stock-list", 3, "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "gappx", 1, "stock-size", 3, "ngClass.xs", "fxFlex", "fxFlex.xs"], [1, "detail-header", 3, "fxFlex"], [4, "ngFor", "ngForOf"], [1, "detail-text", 3, "fxFlex"]], template: function ProductBundlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductBundlesComponent_nb_list_item_17_Template, 16, 25, "nb-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "stock-size-xs")("fxFlex", 20)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bundlesList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["[_nghost-%COMP%]   .stock-container[_ngcontent-%COMP%] {\n  min-height: 150px;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .stock-color-container[_ngcontent-%COMP%]   .stock-color[_ngcontent-%COMP%] {\n  height: 50px;\n  display: block;\n  border-radius: 4px;\n  border: 1px solid #edf1f7;\n  margin: 10px 0;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .detail-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: center;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .stock-size[_ngcontent-%COMP%] {\n  border-right: 1px solid #edf1f7;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   .stock-size-xs[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  border: 0;\n  border-bottom: 1px solid #edf1f7;\n}\n[_nghost-%COMP%]   .stock-list[_ngcontent-%COMP%]   nb-user[_ngcontent-%COMP%]     .user-picture {\n  height: 80px;\n  width: 80px;\n  font-size: 20px;\n}\n[_nghost-%COMP%]     nb-list nb-list-item {\n  padding: 10px 0 !important;\n  border: 0 !important;\n}\n[_nghost-%COMP%]     nb-list nb-list-item nb-card {\n  padding: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3QtYnVuZGxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0FBRFI7QUFPWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFMaEI7QUFTUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFQWjtBQVVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFSWjtBQVdRO0VBQ0ksK0JBQUE7QUFUWjtBQVlRO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVZaO0FBZ0JnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWRwQjtBQXNCWTtFQUNJLDBCQUFBO0VBQ0Esb0JBQUE7QUFwQmhCO0FBc0JnQjtFQUNJLHdCQUFBO0FBcEJwQiIsImZpbGUiOiJwcm9kdWN0LWJ1bmRsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgICAuc3RvY2stY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgfVxuXG4gICAgLnN0b2NrLWxpc3Qge1xuXG4gICAgICAgIC5zdG9jay1jb2xvci1jb250YWluZXIge1xuICAgICAgICAgICAgLnN0b2NrLWNvbG9yIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGYxZjc7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGV0YWlsLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWwtdGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0b2NrLXNpemUge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZjFmNztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdG9jay1zaXplLXhzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRmMWY3O1xuICAgICAgICB9XG5cblxuICAgICAgICBuYi11c2VyIHtcbiAgICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAgICAgLnVzZXItcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgICBuYi1saXN0IHtcbiAgICAgICAgICAgIG5iLWxpc3QtaXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICBuYi1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductBundlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-bundles',
                templateUrl: './product-bundles.component.html',
                styleUrls: ['./product-bundles.component.scss']
            }]
    }], function () { return [{ type: _services_bundles_bundles_service__WEBPACK_IMPORTED_MODULE_3__["BundlesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"] }]; }, { storeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['storeId']
        }] }); })();


/***/ }),

/***/ "X3Mw":
/*!************************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/product-info/product-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoComponent", function() { return ProductInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/util/isObject */ "GMZp");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/brands/brands.services */ "jQNl");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/products/products.services */ "NDz+");
/* harmony import */ var _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/materials/materials.services */ "+FFz");
/* harmony import */ var _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/policies/policies.services */ "02IL");
/* harmony import */ var _services_shipping_methods_shipping_methods_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/shipping-methods/shipping-methods.services */ "nZbc");
/* harmony import */ var _attributes_list_edit_attributes_list_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../attributes-list-edit/attributes-list-edit.component */ "hVSR");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");

























const _c0 = ["attributesListEdit"];
function ProductInfoComponent_div_42_nb_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6.name ? option_r6.name : option_r6.name_en, " ");
} }
function ProductInfoComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductInfoComponent_div_42_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const field_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onInputAutoCompleteChange(field_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-autocomplete", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function ProductInfoComponent_div_42_Template_nb_autocomplete_selectedChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onSelectionChange($event, _r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductInfoComponent_div_42_nb_option_7_Template, 2, 2, "nb-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", field_r2.feildId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r2.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", field_r2.placeholder)("nbAutocomplete", _r4)("formControlName", field_r2.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("handleDisplayFn", ctx_r0.viewHandle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", field_r2.filteredOptions);
} }
class ProductInfoComponent {
    constructor(route, activeRouter, productService, brandService, materialsService, policiesServices, shippingMethodsService, categoryService) {
        this.route = route;
        this.activeRouter = activeRouter;
        this.productService = productService;
        this.brandService = brandService;
        this.materialsService = materialsService;
        this.policiesServices = policiesServices;
        this.shippingMethodsService = shippingMethodsService;
        this.categoryService = categoryService;
        this.saveAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoCompeletFields = [
            {
                feildId: 'brand',
                controlName: 'brand',
                placeholder: 'Brand',
                filteredOptions: [],
            },
            {
                feildId: 'category',
                controlName: 'category',
                placeholder: 'Category',
                filteredOptions: [],
            },
            {
                feildId: 'material',
                controlName: 'material',
                placeholder: 'Material',
                filteredOptions: [],
            },
            {
                feildId: 'policy',
                controlName: 'policy',
                placeholder: 'Policy',
                filteredOptions: [],
            },
            {
                feildId: 'shipping_method',
                controlName: 'shipping_method',
                placeholder: 'Shipping Method',
                filteredOptions: [],
            },
        ];
        this.loading = false;
        this.formType = '';
        this.InfoFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            brand_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            material_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            material: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            shipping_method_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            shipping_method: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            policy_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            policy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            owner_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            consumer_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            activation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            product_attributes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            free_shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            publish_app_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        if (this.route.url.includes('/products/sellers')) {
            this.formType = 'sellers';
        }
        if (this.route.url.includes('/products/stores')) {
            this.formType = 'stores';
        }
        this.activeRouter.params.subscribe(params => {
            this.productId = params['id'];
            this.getProductInfo();
        });
        this.InfoFormGroup.get('id').disable();
        this.InfoFormGroup.get('owner').disable();
        this.InfoFormGroup.get('rate').disable();
    }
    getProductInfo() {
        this.loading = true;
        this.productService.getProductInfo(this.productId).subscribe(res => {
            this.InfoFormGroup.patchValue(res['data']);
        }, error => {
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    getBrands(name) {
        let meta = 'name=' + name;
        this.brandService.getBrands(meta).subscribe(res => {
            this.autoCompeletFields[0].filteredOptions = res.data;
        }, error => { }, () => { });
    }
    getMaterials(name) {
        let meta = 'name=' + name;
        this.materialsService.getMaterials(meta).subscribe(res => {
            this.autoCompeletFields[2].filteredOptions = res['data'];
        }, error => { }, () => { });
    }
    getPolicies(name) {
        let meta = 'name=' + name;
        this.policiesServices.getPolicies(meta).subscribe(res => {
            this.autoCompeletFields[3].filteredOptions = res['data'];
        }, error => { }, () => { });
    }
    getShippingMethods(name) {
        let meta = 'name=' + name;
        this.shippingMethodsService.getShippingMethods(meta).subscribe(res => {
            this.autoCompeletFields[4].filteredOptions = res['data'];
        }, error => { }, () => { });
    }
    getCategorise(name) {
        let meta = 'name_en=' + name;
        this.categoryService.getCategorise(meta).subscribe(res => {
            this.autoCompeletFields[1].filteredOptions = res.data;
        }, error => { }, () => { });
    }
    // getOwner(name: any) {
    //   let meta: any = 'name=' + name + '&activation=true';
    //   this.sellerService.getSellers(meta).subscribe(
    //     res => {
    //       this.autoCompeletFields[2].filteredOptions = res.data;
    //     },
    //     error => { },
    //     () => { },
    //   )
    // }
    onInputAutoCompleteChange(field) {
        console.log(field.feildId);
        if (field.feildId === "brand") {
            this.getBrands(this.InfoFormGroup.get(field.controlName).value);
        }
        if (field.feildId === "category") {
            this.getCategorise(this.InfoFormGroup.get(field.controlName).value);
        }
        if (field.feildId === "material") {
            this.getMaterials(this.InfoFormGroup.get(field.controlName).value);
        }
        if (field.feildId === "policy") {
            this.getPolicies(this.InfoFormGroup.get(field.controlName).value);
        }
        if (field.feildId === "shipping_method") {
            this.getShippingMethods(this.InfoFormGroup.get(field.controlName).value);
        }
        // if (field.feildId === "owner") {
        //   this.getOwner(this.InfoFormGroup.get(field.controlName).value);
        // }
    }
    onSelectionChange(event, field) {
    }
    viewHandle(value) {
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
            return value.name ? value.name : value.name_en;
        }
        else {
            return value;
        }
    }
    backToProducts() {
        this.route.navigate(['products/' + this.formType]);
    }
}
ProductInfoComponent.ɵfac = function ProductInfoComponent_Factory(t) { return new (t || ProductInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_6__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_brands_brands_services__WEBPACK_IMPORTED_MODULE_4__["BrandsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_materials_materials_services__WEBPACK_IMPORTED_MODULE_7__["MaterialsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_policies_policies_services__WEBPACK_IMPORTED_MODULE_8__["PoliciesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shipping_methods_shipping_methods_services__WEBPACK_IMPORTED_MODULE_9__["ShippingMethodsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_5__["CategoriseServices"])); };
ProductInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductInfoComponent, selectors: [["product-info"]], viewQuery: function ProductInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.attributesListEdit = _t.first);
    } }, outputs: { saveAction: "saveAction" }, decls: 50, vars: 42, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "info-porduct-container", 3, "formGroup", "nbSpinner"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "input-info-container", 3, "fxFlex"], [1, "input-container", 3, "ngClass.xs", "ngClass.sm", "fxFlex", "fxFlex.xs", "fxFlex.sm"], ["for", "id"], ["type", "text", "nbInput", "", "placeholder", "ID", "fullWidth", "", "id", "id", "formControlName", "id"], ["for", "rate"], ["type", "text", "nbInput", "", "placeholder", "Owner", "fullWidth", "", "id", "owner", "formControlName", "owner", 3, "value"], ["type", "text", "nbInput", "", "placeholder", "Rate", "fullWidth", "", "id", "rate", "formControlName", "rate"], ["for", "name"], ["type", "text", "nbInput", "", "placeholder", "Name", "fullWidth", "", "id", "name", "formControlName", "name"], ["for", "description"], ["type", "text", "nbInput", "", "placeholder", "Description", "fullWidth", "", "id", "description", "formControlName", "description"], ["for", "consumer_price"], ["type", "text", "nbInput", "", "placeholder", "Consumer Price", "fullWidth", "", "id", "consumer_price", "formControlName", "consumer_price"], ["for", "activation"], ["placeholder", "Activation", "id", "activation", "fullWidth", "", "formControlName", "activation"], [3, "value"], ["class", "input-container", 3, "ngClass.xs", "ngClass.sm", "fxFlex", "fxFlex.xs", "fxFlex.sm", 4, "ngFor", "ngForOf"], ["attributesListEdit", ""], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 1, "save-btn", 2, "float", "right", 3, "click"], [3, "for"], ["nbInput", "", "type", "text", "fullWidth", "", 3, "placeholder", "nbAutocomplete", "formControlName", "input"], ["autoInput", ""], [3, "handleDisplayFn", "selectedChange"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"]], template: function ProductInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Consumer Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nb-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductInfoComponent_div_42_Template, 8, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "attributes-list-edit", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductInfoComponent_Template_button_click_46_listener() { return ctx.backToProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductInfoComponent_Template_button_click_48_listener() { return ctx.saveAction.emit(ctx.InfoFormGroup.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_13_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.InfoFormGroup)("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (tmp_13_0 = ctx.InfoFormGroup.get("owner")) == null ? null : tmp_13_0.value == null ? null : tmp_13_0.value.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "input-container-xs")("ngClass.sm", "input-container-xs")("fxFlex", 100 / 4)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.autoCompeletFields);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSpinnerDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _attributes_list_edit_attributes_list_edit_component__WEBPACK_IMPORTED_MODULE_10__["AttributesListEditComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbAutocompleteComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: block;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     form {\n  height: 100%;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%]   .input-info-container[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%]   .input-info-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  padding: 0 16px 0 0;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%]   .input-info-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]:first-child {\n  padding: 0 16px 0 0;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%]   .input-info-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]:last-child {\n  padding: 0 0 0 0;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%]   .input-info-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-left: 17px;\n  color: #8f9bb3;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%]   .input-info-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   nb-form-field[_ngcontent-%COMP%] {\n  max-width: none !important;\n}\n[_nghost-%COMP%]   .info-porduct-container[_ngcontent-%COMP%]   .input-info-container[_ngcontent-%COMP%]   .input-container-xs[_ngcontent-%COMP%] {\n  padding: 10px 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3QtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUVZO0VBQ0ksWUFBQTtBQUFoQjtBQUtJO0VBQ0ksYUFBQTtBQUhSO0FBS1E7RUFFSSxlQUFBO0FBSlo7QUFNWTtFQUNJLG1CQUFBO0FBSmhCO0FBTWdCO0VBQ0ksbUJBQUE7QUFKcEI7QUFPZ0I7RUFDSSxnQkFBQTtBQUxwQjtBQVFnQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQU5wQjtBQVVnQjtFQUNJLDBCQUFBO0FBUnBCO0FBYVk7RUFDSSwwQkFBQTtBQVhoQiIsImZpbGUiOiJwcm9kdWN0LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgbmItY2FyZCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8tcG9yZHVjdC1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5pbnB1dC1pbmZvLWNvbnRhaW5lciB7XG5cbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcblxuICAgICAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgMDtcblxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOGY5YmIzO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgbmItZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5wdXQtY29udGFpbmVyLXhzIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-info',
                templateUrl: './product-info.component.html',
                styleUrls: ['./product-info.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_6__["ProductsServices"] }, { type: _services_brands_brands_services__WEBPACK_IMPORTED_MODULE_4__["BrandsServices"] }, { type: _services_materials_materials_services__WEBPACK_IMPORTED_MODULE_7__["MaterialsServices"] }, { type: _services_policies_policies_services__WEBPACK_IMPORTED_MODULE_8__["PoliciesServices"] }, { type: _services_shipping_methods_shipping_methods_services__WEBPACK_IMPORTED_MODULE_9__["ShippingMethodsServices"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_5__["CategoriseServices"] }]; }, { attributesListEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['attributesListEdit']
        }], saveAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "hVSR":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/attributes-list-edit/attributes-list-edit.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AttributesListEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributesListEditComponent", function() { return AttributesListEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/util/isObject */ "GMZp");
/* harmony import */ var rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/products/products.services */ "NDz+");
/* harmony import */ var _services_sizes_sizes_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/sizes/sizes.services */ "LuWe");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");















function AttributesListEditComponent_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (option_r4 == null ? null : option_r4.size) ? option_r4 == null ? null : option_r4.size : option_r4 == null ? null : option_r4.name, " ");
} }
function AttributesListEditComponent_nb_tag_list_16_nb_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-tag", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function AttributesListEditComponent_nb_tag_list_16_nb_tag_1_Template_nb_tag_remove_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onTagRemove(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const atrr_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", "Size " + (atrr_r6 == null ? null : atrr_r6.size == null ? null : atrr_r6.size.name) + " / Quantity " + (atrr_r6 == null ? null : atrr_r6.quantity))("removable", true);
} }
function AttributesListEditComponent_nb_tag_list_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-tag-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributesListEditComponent_nb_tag_list_16_nb_tag_1_Template, 1, 2, "nb-tag", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.attrList);
} }
function AttributesListEditComponent_h4_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Attributes Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AttributesListEditComponent {
    constructor(_SizesServices, activeRouter, productService) {
        this._SizesServices = _SizesServices;
        this.activeRouter = activeRouter;
        this.productService = productService;
        this.attrListUpdates = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sizeList = [];
        this.attrList = [];
        this.sizeFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.quantityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.autoLoad = false;
        this.loading = false;
    }
    ngOnInit() {
        this.activeRouter.params.subscribe(params => {
            this.productId = params['id'];
            this.getProductInfo();
        });
        console.log("monem");
        this.getSizes();
        this.sizeFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(800)).subscribe(res => {
            if (res && !Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(res)) {
                this.autoLoad = true;
                const meta = 'size=' + res;
                this.getSizes(meta);
            }
        });
    }
    getProductInfo() {
        this.loading = true;
        this.productService.getProductInfo(this.productId).subscribe(res => {
            if (res['data'].product_attributes) {
                res['data'].product_attributes.forEach(element => {
                    const newAtrr = {
                        size: {
                            id: element.size.id,
                            name: element.size.size,
                        },
                        quantity: element.quantity,
                    };
                    this.attrList.push(newAtrr);
                });
            }
            // this.InfoFormGroup.patchValue(res['data']);
        }, error => {
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    viewHandle(value) {
        if (Object(rxjs_internal_util_isObject__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value)) {
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
AttributesListEditComponent.ɵfac = function AttributesListEditComponent_Factory(t) { return new (t || AttributesListEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sizes_sizes_services__WEBPACK_IMPORTED_MODULE_6__["SizesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_5__["ProductsServices"])); };
AttributesListEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributesListEditComponent, selectors: [["attributes-list-edit"]], outputs: { attrListUpdates: "attrListUpdates" }, decls: 18, vars: 14, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "gappx", 3, "fxFlex"], [3, "nbSpinner", "fxFlex"], ["for", "size"], ["nbInput", "", "id", "size", 3, "nbAutocomplete", "formControl"], [3, "handleDisplayFn"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "field-with-validation", 3, "fxFlex"], ["for", "quantity"], ["nbInput", "", "id", "quantity", 3, "formControl"], ["nbButton", "", "status", "primary", 3, "disabled", "fxFlex", "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "gappx", 1, "tags-container", 3, "fxFlex"], [3, "fxFlex", 4, "ngIf"], [4, "ngIf"], [3, "value"], [3, "fxFlex"], [3, "text", "removable", "remove", 4, "ngFor", "ngForOf"], [3, "text", "removable", "remove"]], template: function AttributesListEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-autocomplete", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributesListEditComponent_nb_option_8_Template, 2, 2, "nb-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributesListEditComponent_Template_button_click_13_listener() { return ctx.addNewAttr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AttributesListEditComponent_nb_tag_list_16_Template, 2, 2, "nb-tag-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AttributesListEditComponent_h4_17_Template, 2, 0, "h4", 14);
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTagListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbTagComponent"]], styles: ["[_nghost-%COMP%]   nb-form-field[_ngcontent-%COMP%]     #size {\n  border-radius: 4px 0 0 4px;\n  border-right: 0;\n}\n[_nghost-%COMP%]   nb-form-field[_ngcontent-%COMP%]     #quantity {\n  border-radius: 0px;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0 4px 4px 0 !important;\n}\n[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 12px;\n  border: 1px solid #EDF1F7;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .tags-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #8f9bb3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF0dHJpYnV0ZXMtbGlzdC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FBRmhCO0FBS1k7RUFDSSxrQkFBQTtBQUhoQjtBQVFJO0VBQ0kscUNBQUE7QUFOUjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVBSO0FBU1E7RUFDSSxjQUFBO0FBUFoiLCJmaWxlIjoiYXR0cmlidXRlcy1saXN0LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbmItZm9ybS1maWVsZCB7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAjc2l6ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjcXVhbnRpdHkge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnRhZ3MtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VERjFGNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjOGY5YmIzO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesListEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'attributes-list-edit',
                templateUrl: './attributes-list-edit.component.html',
                styleUrls: ['./attributes-list-edit.component.scss']
            }]
    }], function () { return [{ type: _services_sizes_sizes_services__WEBPACK_IMPORTED_MODULE_6__["SizesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_5__["ProductsServices"] }]; }, { attrListUpdates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "stVh":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/product-details/product-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/products/products.services */ "NDz+");
/* harmony import */ var _product_info_product_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-info/product-info.component */ "X3Mw");
/* harmony import */ var _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-image/product-image.component */ "GM0P");
/* harmony import */ var _product_store_product_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-store/product-store.component */ "QTWx");














const _c0 = ["productInfo"];
class ProductDetailsComponent {
    constructor(_ProductsServices, _ActivatedRoute, toaster, _DatePipe) {
        this._ProductsServices = _ProductsServices;
        this._ActivatedRoute = _ActivatedRoute;
        this.toaster = toaster;
        this._DatePipe = _DatePipe;
        this.loading = false;
    }
    ngOnInit() {
        this.productId = this._ActivatedRoute.snapshot.params.id;
    }
    saveProductInfo(value) {
        var _a, _b, _c, _d;
        // this.productInfo;
        console.log(this.productInfo.attributesListEdit.attrList);
        console.log(value);
        this.loading = true;
        let params = {
            "id": this.productId,
            "name": value.name,
            "description": value.description,
            "brand_id": (_a = value.brand) === null || _a === void 0 ? void 0 : _a.id,
            "category_id": value.category.id,
            "consumer_price": value.consumer_price,
            "material_id": (_b = value.material) === null || _b === void 0 ? void 0 : _b.id,
            "policy_id": (_c = value.policy) === null || _c === void 0 ? void 0 : _c.id,
            "shipping_method_id": (_d = value.shipping_method) === null || _d === void 0 ? void 0 : _d.id,
            "activation": value.activation,
            "free_shipping": value.free_shipping,
            "price": value.price,
            "discount": value.discount,
            "publish_app_at": this._DatePipe.transform(value.publish_app_at, 'yyyy-MM-dd'),
            "product_attributes": this.productInfo.attributesListEdit.attrList.map(ele => { return { size_id: ele.size.id, quantity: ele.quantity }; })
        };
        this._ProductsServices.saveProductInfo(params).subscribe(res => {
            this.toaster.show(res['message'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            this.loading = false;
        }, () => {
            this.loading = false;
            this.productInfo.backToProducts();
        });
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_4__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], viewQuery: function ProductDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.productInfo = _t.first);
    } }, decls: 10, vars: 2, consts: [[3, "nbSpinner"], ["tabSet", ""], ["tabTitle", "Info"], [3, "saveAction"], ["productInfo", ""], ["tabTitle", "Images"], ["tabTitle", "Stores"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-tabset", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "product-info", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("saveAction", function ProductDetailsComponent_Template_product_info_saveAction_4_listener($event) { return ctx.saveProductInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "product-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nb-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "product-store");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbSpinner", false)("nbSpinner", ctx.loading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTabComponent"], _product_info_product_info_component__WEBPACK_IMPORTED_MODULE_5__["ProductInfoComponent"], _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_6__["ProductImageComponent"], _product_store_product_store_component__WEBPACK_IMPORTED_MODULE_7__["ProductStoreComponent"]], styles: ["[_nghost-%COMP%] {\n  padding: 10px;\n  height: 100%;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  height: calc(100% - 48px);\n}\n[_nghost-%COMP%]     nb-card {\n  margin-bottom: 0 !important;\n}\n[_nghost-%COMP%]     .tabset {\n  overflow-x: auto !important;\n  overflow-y: hidden !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]:first-child {\n  height: calc(100% - 10px);\n  overflow-y: auto;\n  margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtBQUNKO0FBRUU7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFJSTtFQUNFLDJCQUFBO0FBRk47QUFLSTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7QUFITjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBTEoiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgbmItdGFic2V0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBuYi10YWIge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICBuYi1jYXJkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGFic2V0IHtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIG5iLWNhcmQ6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: 'product-details.component.html',
                styleUrls: ['product-details.component.scss'],
            }]
    }], function () { return [{ type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_4__["ProductsServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }]; }, { productInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['productInfo']
        }] }); })();


/***/ }),

/***/ "w/Dn":
/*!********************************************************************!*\
  !*** ./src/app/pages/products/edit-product/edit-product.module.ts ***!
  \********************************************************************/
/*! exports provided: EditProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductModule", function() { return EditProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/error-message/error-message.module */ "75Dz");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-barcode */ "6QD7");
/* harmony import */ var _product_info_product_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-info/product-info.component */ "X3Mw");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-details/product-details.component */ "stVh");
/* harmony import */ var _product_bundles_product_bundles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-bundles/product-bundles.component */ "VCYa");
/* harmony import */ var _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-image/product-image.component */ "GM0P");
/* harmony import */ var _product_stock_product_stock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-stock/product-stock.component */ "005S");
/* harmony import */ var _product_store_product_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-store/product-store.component */ "QTWx");
/* harmony import */ var _attributes_list_edit_attributes_list_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./attributes-list-edit/attributes-list-edit.component */ "hVSR");
/* harmony import */ var _edit_products_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-products-routing.module */ "3JXr");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../@theme/theme.module */ "vTDv");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");


















class EditProductModule {
}
EditProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditProductModule });
EditProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditProductModule_Factory(t) { return new (t || EditProductModule)(); }, imports: [[
            _edit_products_routing_module__WEBPACK_IMPORTED_MODULE_14__["EditProductsRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTagModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTooltipModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTimepickerModule"],
            ngx_barcode__WEBPACK_IMPORTED_MODULE_6__["NgxBarcodeModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_16__["KendoCustomeGridModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditProductModule, { declarations: [_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_7__["ProductInfoComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"], _product_bundles_product_bundles_component__WEBPACK_IMPORTED_MODULE_9__["ProductBundlesComponent"], _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_10__["ProductImageComponent"], _product_stock_product_stock_component__WEBPACK_IMPORTED_MODULE_11__["ProductStockComponent"], _product_store_product_store_component__WEBPACK_IMPORTED_MODULE_12__["ProductStoreComponent"], _attributes_list_edit_attributes_list_edit_component__WEBPACK_IMPORTED_MODULE_13__["AttributesListEditComponent"]], imports: [_edit_products_routing_module__WEBPACK_IMPORTED_MODULE_14__["EditProductsRoutingModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbStepperModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTagModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTooltipModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTimepickerModule"],
        ngx_barcode__WEBPACK_IMPORTED_MODULE_6__["NgxBarcodeModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_16__["KendoCustomeGridModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_7__["ProductInfoComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"], _product_bundles_product_bundles_component__WEBPACK_IMPORTED_MODULE_9__["ProductBundlesComponent"], _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_10__["ProductImageComponent"], _product_stock_product_stock_component__WEBPACK_IMPORTED_MODULE_11__["ProductStockComponent"], _product_store_product_store_component__WEBPACK_IMPORTED_MODULE_12__["ProductStoreComponent"], _attributes_list_edit_attributes_list_edit_component__WEBPACK_IMPORTED_MODULE_13__["AttributesListEditComponent"]],
                imports: [
                    _edit_products_routing_module__WEBPACK_IMPORTED_MODULE_14__["EditProductsRoutingModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_15__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbStepperModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTagModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTooltipModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _shared_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTimepickerModule"],
                    ngx_barcode__WEBPACK_IMPORTED_MODULE_6__["NgxBarcodeModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_16__["KendoCustomeGridModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wprY":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/product-store/product-store.column.ts ***!
  \***********************************************************************************/
/*! exports provided: productStoreColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productStoreColumn", function() { return productStoreColumn; });
const productStoreColumn = [
    {
        id: '',
        dataType: 'text',
        field: 'id',
        name: 'ID',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        id: '',
        dataType: 'date',
        field: 'publish_app_at',
        name: 'Publish at',
        filterType: 'date',
        hideTime: true,
        hidden: false
    },
    {
        id: '',
        dataType: 'number',
        field: 'views',
        name: 'Views',
        filterType: 'numeric',
        hidden: false
    },
    {
        id: '',
        dataType: 'money',
        field: 'price',
        name: 'Price',
        filterType: 'string',
        hidden: false
    },
    {
        id: '',
        dataType: 'money',
        field: 'net_price',
        name: 'Net Price',
        filterType: 'string',
        hidden: false
    },
    {
        id: '',
        dataType: 'text',
        field: 'discount',
        name: 'Discount',
        filterType: 'string',
        hidden: false
    },
    {
        id: '',
        dataType: 'text',
        field: 'discount_type',
        name: 'Discount type',
        filterType: 'string',
        hidden: false
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
            // {
            //     action: 'bundle',
            //     color: 'primary',
            //     id: 'bundle-action',
            //     hidden: false,
            //     toolTip: 'Bundles',
            //     icon: 'view_quilt',
            //     buttonType: 'icon',
            //     disabled: () => false,
            // },
            {
                action: 'store',
                color: 'primary',
                id: 'store-action',
                hidden: false,
                toolTip: 'Stockes',
                icon: 'store',
                buttonType: 'icon',
                disabled: () => false,
            }
        ]
    },
];


/***/ })

}]);
//# sourceMappingURL=edit-product-edit-product-module.js.map