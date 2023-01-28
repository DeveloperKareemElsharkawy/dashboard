(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "/2RN":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "ea/W");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "U5Cf");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_statistics_product_statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-statistics/product-statistics.component */ "nuiB");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ "DKVz");












class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"].forRoot({
                echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "MT78", 7))
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _product_statistics_product_statistics_component__WEBPACK_IMPORTED_MODULE_8__["ProductStatisticsComponent"]], imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"].forRoot({
                        echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "MT78", 7))
                    })
                ],
                declarations: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                    _product_statistics_product_statistics_component__WEBPACK_IMPORTED_MODULE_8__["ProductStatisticsComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dashboard/dashboard.service */ "bkm/");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_statistics_product_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-statistics/product-statistics.component */ "nuiB");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "aceb");








function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / (ctx_r0.dashboardStatisticsList == null ? null : ctx_r0.dashboardStatisticsList.length))("fxFlex.xs", 100)("fxFlex.sm", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r1.icon)("status", item_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.statistics ? ctx_r0.IsObject(ctx_r0.statistics[item_r1.name]) ? ctx_r0.statistics[item_r1.name].all : ctx_r0.statistics[item_r1.name] : "");
} }
const _c0 = function () { return ["Product"]; };
const _c1 = function () { return ["Store"]; };
class DashboardComponent {
    constructor(_DashboardService) {
        this._DashboardService = _DashboardService;
        this.dashboardStatisticsList = [
            {
                name: 'admins',
                color: 'primary',
                icon: 'people-outline'
            },
            {
                name: 'orders',
                color: 'info',
                icon: 'shopping-cart-outline'
            },
            {
                name: "products",
                color: 'success',
                icon: 'shopping-bag-outline'
            },
            {
                name: "sellers",
                color: 'warning',
                icon: 'person-done-outline'
            },
        ];
    }
    ngOnInit() {
        this.getStatistics();
        this.getCategoryProduct();
        this.getStoreType();
        this.getPopularProduct();
        this.getPopularStore();
    }
    getStatistics() {
        this._DashboardService.getStatistics().subscribe(res => {
            this.statistics = res.data;
        }, error => { }, () => { });
    }
    getCategoryProduct() {
        this.categoryloading = true;
        this._DashboardService.getCategoryPerProduct().subscribe(res => {
            this.productCategoryXData = res.data.map(ele => ele.category.name_en);
            this.productCategoryYData = res.data.map(ele => ele.products);
            this.productCategoryPieData = res.data.map(ele => { return { name: ele.category.name_en, value: ele.products }; });
        }, error => {
            this.categoryloading = false;
        }, () => {
            this.categoryloading = false;
        });
    }
    getStoreType() {
        this.typeloading = true;
        this._DashboardService.getStoreType().subscribe(res => {
            this.typeXData = res.data.map(ele => ele.name_en);
            this.typeYData = res.data.map(ele => ele.count);
            this.typePieData = res.data.map(ele => { return { name: ele.name_en, value: ele.count }; });
        }, error => {
            this.typeloading = false;
        }, () => {
            this.typeloading = false;
        });
    }
    getPopularProduct() {
        this._DashboardService.getPopularProducts().subscribe(res => {
            this.productPopularXData = res.data.map(ele => ele.name);
            this.productPopularYData = res.data.map(ele => ele.count);
        }, error => { }, () => { });
    }
    getPopularStore() {
        this._DashboardService.getPopularStores().subscribe(res => {
            this.storePopularXData = res.data.map(ele => ele.name);
            this.storePopularYData = res.data.map(ele => ele.count);
        }, error => { }, () => { });
    }
    IsObject(value) {
        return typeof value === 'object' ? true : false;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 16, vars: 65, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", "fxLayoutGap", "gappx", 3, "fxFlex"], ["class", "card-container", 3, "fxFlex", "fxFlex.xs", "fxFlex.sm", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "statistics", 3, "fxFlex"], [1, "statistics-container", 3, "fxFlex", "fxFlex.xs", "fxFlex.sm"], [3, "xAxisData", "data", "header", "loading", "type", "dataName", "legend"], [3, "header", "xAxisData", "data", "loading", "type", "dataName", "legend"], [1, "card-container", 3, "fxFlex", "fxFlex.xs", "fxFlex.sm"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "statistics-container"], [1, "statistics-text"], [3, "icon", "status"], [1, "statistics-number"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 8, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "product-statistics", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "product-statistics", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "product-statistics", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "product-statistics", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "product-statistics", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "product-statistics", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dashboardStatisticsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 50)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xAxisData", ctx.productCategoryXData)("data", ctx.productCategoryYData)("header", "Category/Product")("loading", ctx.categoryloading)("type", "bar")("dataName", "Product")("legend", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](63, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 50)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Store")("xAxisData", ctx.typeXData)("data", ctx.typeYData)("loading", ctx.typeloading)("type", "bar")("dataName", "Stroe")("legend", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 50)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Popular Product")("xAxisData", ctx.productPopularXData)("data", ctx.productPopularYData)("loading", ctx.typeloading)("type", "bar")("dataName", "Popular Product")("legend", ctx.productPopularXData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 50)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Popular Store")("xAxisData", ctx.storePopularXData)("data", ctx.storePopularYData)("loading", ctx.typeloading)("type", "bar")("dataName", "Popular Store")("legend", ctx.storePopularXData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 50)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xAxisData", ctx.productCategoryXData)("data", ctx.productCategoryPieData)("header", "Category/Product")("loading", ctx.categoryloading)("type", "pie")("dataName", "Product")("legend", ctx.productCategoryXData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 50)("fxFlex.xs", 100)("fxFlex.sm", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Store")("xAxisData", ctx.typeXData)("data", ctx.typePieData)("loading", ctx.typeloading)("type", "pie")("dataName", "Stroe")("legend", ctx.typeXData);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _product_statistics_product_statistics_component__WEBPACK_IMPORTED_MODULE_4__["ProductStatisticsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconComponent"]], styles: ["[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  border: 0;\n  transition: 0.25s;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.068);\n  transform: scale(1.02);\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 30px 0;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%]   .statistics-text[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%]   .statistics-number[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 600;\n  height: 22px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 200px;\n  margin: 0;\n}\n[_nghost-%COMP%]   .statistics[_ngcontent-%COMP%]   .statistics-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFFSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRU07RUFDRSw0Q0FBQTtFQUNBLHNCQUFBO0FBQVI7QUFJSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRk47QUFLTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSFI7QUFNTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBSlI7QUFPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFMUjtBQVNJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFQTjtBQVlJO0VBQ0UsYUFBQTtBQVZOIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgbmItY2FyZCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjI1cztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNjgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdGF0aXN0aWNzLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAzMHB4IDA7XG5cblxuICAgICAgbmItaWNvbiB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0aXN0aWNzLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuXG4gICAgICAuc3RhdGlzdGljcy1udW1iZXIge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuYi1jYXJkIHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLnN0YXRpc3RpY3Mge1xuICAgIC5zdGF0aXN0aWNzLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: 'dashboard.component.html',
                styleUrls: ['dashboard.component.scss'],
            }]
    }], function () { return [{ type: _services_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"] }]; }, null); })();


/***/ }),

/***/ "bkm/":
/*!*********************************************************!*\
  !*** ./src/app/services/dashboard/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");





class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getStatistics() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MAIN_SYSTEM + 'api/dashboard/statistics/numbers';
        return this.http.get(url);
    }
    getCategoryPerProduct() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MAIN_SYSTEM + 'api/dashboard/statistics/category-products';
        return this.http.get(url);
    }
    getStoreType() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MAIN_SYSTEM + 'api/dashboard/statistics/store-types';
        return this.http.get(url);
    }
    getPopularProducts() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MAIN_SYSTEM + 'api/dashboard/statistics/popular-products';
        return this.http.get(url);
    }
    getPopularStores() {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MAIN_SYSTEM + 'api/dashboard/statistics/popular-stores';
        return this.http.get(url);
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ea/W":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "U5Cf");






const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
        ],
    }];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "nuiB":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/product-statistics/product-statistics.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStatisticsComponent", function() { return ProductStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "DKVz");




class ProductStatisticsComponent {
    constructor() {
        this.legend = [];
    }
    ngOnInit() {
        // const xAxisData = [];
        // const data1 = [];
    }
    ngOnChanges(changes) {
        if (changes.xAxisData && changes.xAxisData.currentValue) {
            this.options = {
                legend: {
                    data: this.legend,
                    x: 'center',
                    y: 'bottom',
                },
                tooltip: {},
                xAxis: {
                    data: this.type === 'bar' ? this.xAxisData : [],
                    silent: false,
                    splitLine: this.type === 'bar' ? {
                        show: false,
                    } : {},
                },
                yAxis: {},
                series: [
                    {
                        name: this.dataName,
                        type: this.type,
                        data: this.data,
                        color: ['#0095ff', '#f9a600'],
                        animationDelay: (idx) => idx * 10,
                    }
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: (idx) => idx * 5,
            };
            if (this.type !== 'bar') {
                delete this.options.xAxis;
                delete this.options.yAxis;
            }
        }
    }
}
ProductStatisticsComponent.ɵfac = function ProductStatisticsComponent_Factory(t) { return new (t || ProductStatisticsComponent)(); };
ProductStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductStatisticsComponent, selectors: [["product-statistics"]], inputs: { xAxisData: "xAxisData", data: "data", header: "header", loading: "loading", type: "type", dataName: "dataName", legend: "legend" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[3, "nbSpinner"], ["echarts", "", 1, "demo-chart", 3, "options"]], template: function ProductStatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.header, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["NgxEchartsDirective"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC1zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksU0FBQTtBQUFSIiwiZmlsZSI6InByb2R1Y3Qtc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBuYi1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductStatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product-statistics',
                templateUrl: './product-statistics.component.html',
                styleUrls: ['./product-statistics.component.scss']
            }]
    }], function () { return []; }, { xAxisData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dataName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map