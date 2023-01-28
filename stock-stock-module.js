(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "SuHw":
/*!***************************************************************************!*\
  !*** ./src/app/pages/warehouses/stock/stock-list/stock-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stock_list_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-list.column */ "zhJb");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_stock_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/stock/stock.service */ "rS5l");
/* harmony import */ var _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/sellers/sellers.services */ "7Qae");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/products/products.services */ "NDz+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");






















const _c0 = ["dialog"];
const _c1 = ["dialogEdit"];
function StockListComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockListComponent_ng_template_8_Template_button_click_6_listener() { const ref_r5 = ctx.dialogRef; return ref_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockListComponent_ng_template_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ref_r5 = ctx.dialogRef; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.dialogAction(ref_r5, ctx_r7.dialogActionType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dialogTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.dialogMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function StockListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Available Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockListComponent_ng_template_10_Template_button_click_18_listener() { const ref_r10 = ctx.dialogRef; return ref_r10.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockListComponent_ng_template_10_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ref_r10 = ctx.dialogRef; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.editStock(ref_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formGroup == null ? null : ctx_r3.formGroup.invalid);
} }
class StockListComponent {
    constructor(stockService, router, sellersServices, productsServices, convertFilter, dialogService, toaster, sharedService) {
        this.stockService = stockService;
        this.router = router;
        this.sellersServices = sellersServices;
        this.productsServices = productsServices;
        this.convertFilter = convertFilter;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.sharedService = sharedService;
        this.data = [];
        this.columnGrid = _stock_list_column__WEBPACK_IMPORTED_MODULE_2__["gride"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = [
            {
                name: 'product',
                list: []
            },
            {
                name: 'store',
                list: []
            }
        ];
        this.loading = false;
        this.showgride = false;
        this.isLoading = false;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            available_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.store_type = this.router.url.split('/')[2];
        this.store_type_id = (this.store_type == 'stores') ? 1 : 2;
        this.getSellersForSelection();
        this.getProductsForSelection();
        this.getIndex();
    }
    getSellersForSelection(meta = "") {
        console.log(meta);
        meta = meta + (meta ? '&' : '') + "type_id=" + this.store_type_id;
        this.sellersServices.getForSelection(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'store')[0].list = res['data'];
        }, error => {
        });
    }
    getProductsForSelection(meta = "") {
        console.log(meta);
        this.productsServices.getProductsForSelection(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'product')[0].list = res['data'];
        }, error => {
        });
    }
    getIndex(meta) {
        meta = (meta ? meta + '&' : '') + 'type=' + this.store_type_id + "&approved=1";
        this.lastMeta = meta;
        this.loading = true;
        this.stockService.getStocksList(meta).subscribe((res) => {
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
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.currentEdit = event.data;
                this.open(this.dialogEdit, event.action.action);
                break;
            case 'reject':
                this.currentReject = event.data;
                this.open(this.dialog, event.action.action);
                break;
            case 'approve':
                this.currentApprove = event.data;
                this.open(this.dialog, event.action.action);
                break;
        }
    }
    open(dialog, action) {
        if (action === 'reject') {
            this.dialogActionType = 'reject';
            this.dialogTitle = 'Reject Confirm';
            this.dialogMessage = 'Are you sure to reject stock <strong>' + this.currentReject.id + '</strong> ?';
            this.dialogService.open(dialog);
        }
        if (action === 'approve') {
            this.dialogActionType = 'approve';
            this.dialogTitle = 'Active Confirm';
            this.dialogMessage = 'Are you sure to approve stock <strong>' + this.currentApprove.id + '</strong> ?';
            this.dialogService.open(dialog);
        }
        if (action === 'edit') {
            this.formGroup.get('stock').setValue(this.currentEdit.stock);
            this.formGroup.get('available_stock').setValue(this.currentEdit.available_stock);
            this.formGroup.get('id').setValue(this.currentEdit.id);
            console.log(this.currentEdit);
            // this.dialogActionType = 'approve';
            // this.dialogTitle = 'Active Confirm';
            // this.dialogMessage = 'Are you sure to approve stock <strong>' + this.currentApprove.id + '</strong> ?';
            this.dialogService.open(dialog);
        }
    }
    dialogAction(dialogRef, action) {
        if (action === 'reject') {
            this.rejectStock(dialogRef);
        }
        if (action === 'approve') {
            this.approveStock(dialogRef);
        }
    }
    editStock(dialogRef) {
        if (this.formGroup.valid) {
            this.isLoading = true;
            const uploadData = new FormData();
            uploadData.append('id', this.formGroup.value.id);
            uploadData.append('stock', this.formGroup.value.stock);
            uploadData.append('available_stock', this.formGroup.value.available_stock);
            this.stockService.editStock(uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.getIndex();
                dialogRef.close();
            }, err => {
                this.toaster.show(err.error.message, 'Error', { status: 'danger' });
                this.isLoading = false;
                dialogRef.close();
            }, () => {
                this.isLoading = false;
                dialogRef.close();
            });
        }
    }
    approveStock(dialogRef) {
        this.stockService.approvePendingStock(this.currentApprove.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getIndex(this.lastMeta);
            this.currentApprove = null;
        });
    }
    rejectStock(dialogRef) {
        this.stockService.rejectPendingStock(this.currentReject.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getIndex(this.lastMeta);
            this.currentReject = null;
        });
    }
    export() {
        this.sharedService.exportUrl = 'warehouses/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(data, 'warehouses.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
    autoCompleteFilterChangeCheck(event) {
        const autotype = event.fieldName;
        if (autotype === 'product') {
            const meta = 'name=' + event.value;
            this.getProductsForSelection(meta);
        }
        if (autotype === 'store') {
            const meta = 'name=' + event.value;
            this.getSellersForSelection(meta);
        }
    }
}
StockListComponent.ɵfac = function StockListComponent_Factory(t) { return new (t || StockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_8__["SellersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_9__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"])); };
StockListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockListComponent, selectors: [["app-warehouses-stock-list-index"]], viewQuery: function StockListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogEdit = _t.first);
    } }, decls: 12, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "grid-container"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "autoCompleteFilterChange", "commandActionClick"], ["dialog", ""], ["dialogEdit", ""], [1, "dialog-card"], [3, "innerHTML"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"], [1, "dialog-card", 3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "first-row", 3, "fxFlex"], [1, "form-control-container", 3, "fxFlex"], [1, "field-with-validation"], ["for", "stock"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "stock", "id", "stock"], ["for", "available_stock"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "available_stock", "id", "available_stock"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "disabled", "click"]], template: function StockListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function StockListComponent_Template_app_kendo_custome_grid_stateChange_7_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function StockListComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_7_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function StockListComponent_Template_app_kendo_custome_grid_commandActionClick_7_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StockListComponent_ng_template_8_Template, 10, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StockListComponent_ng_template_10_Template, 22, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" warehouses ", ctx.store_type, " stock List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_12__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0b2NrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUtFLFlBQUE7RUFDQSxvQkFBQTtBQUhKO0FBRkk7RUFDRSxlQUFBO0FBSU47QUFFSTtFQUNFLFlBQUE7QUFBTiIsImZpbGUiOiJzdG9jay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmItY2FyZCB7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warehouses-stock-list-index',
                templateUrl: 'stock-list.component.html',
                styleUrls: ['stock-list.component.scss'],
            }]
    }], function () { return [{ type: _services_stock_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_8__["SellersServices"] }, { type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_9__["ProductsServices"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }], dialogEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialogEdit']
        }] }); })();


/***/ }),

/***/ "h4+g":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/warehouses/stock/stock-request/stock-request.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StockRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockRequestComponent", function() { return StockRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stock_request_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-request.column */ "zVGX");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_stock_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/stock/stock.service */ "rS5l");
/* harmony import */ var _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/sellers/sellers.services */ "7Qae");
/* harmony import */ var _services_products_products_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/products/products.services */ "NDz+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");






















const _c0 = ["dialog"];
const _c1 = ["dialogEdit"];
function StockRequestComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockRequestComponent_ng_template_8_Template_button_click_6_listener() { const ref_r5 = ctx.dialogRef; return ref_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockRequestComponent_ng_template_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ref_r5 = ctx.dialogRef; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.dialogAction(ref_r5, ctx_r7.dialogActionType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dialogTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.dialogMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function StockRequestComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-form-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Stock *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockRequestComponent_ng_template_10_Template_button_click_13_listener() { const ref_r10 = ctx.dialogRef; return ref_r10.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StockRequestComponent_ng_template_10_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ref_r10 = ctx.dialogRef; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.editStock(ref_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.formGroup == null ? null : ctx_r3.formGroup.invalid);
} }
class StockRequestComponent {
    constructor(stockService, router, sellersServices, productsServices, convertFilter, dialogService, toaster, sharedService) {
        this.stockService = stockService;
        this.router = router;
        this.sellersServices = sellersServices;
        this.productsServices = productsServices;
        this.convertFilter = convertFilter;
        this.dialogService = dialogService;
        this.toaster = toaster;
        this.sharedService = sharedService;
        this.data = [];
        this.columnGrid = _stock_request_column__WEBPACK_IMPORTED_MODULE_2__["gride"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.autoCompleteData = [
            {
                name: 'product',
                list: []
            },
            {
                name: 'store',
                list: []
            }
        ];
        this.loading = false;
        this.showgride = false;
        this.isLoading = false;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
            stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.store_type = this.router.url.split('/')[2];
        this.store_type_id = (this.store_type == 'stores') ? 1 : 2;
        this.getSellersForSelection();
        this.getProductsForSelection();
        this.getIndex();
    }
    getSellersForSelection(meta = "") {
        console.log(meta);
        meta = meta + (meta ? '&' : '') + "type_id=" + this.store_type_id;
        this.sellersServices.getForSelection(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'store')[0].list = res['data'];
        }, error => {
        });
    }
    getProductsForSelection(meta = "") {
        console.log(meta);
        this.productsServices.getProductsForSelection(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'product')[0].list = res['data'];
        }, error => {
        });
    }
    getIndex(meta) {
        meta = (meta ? meta + '&' : '') + 'type=' + this.store_type_id + "&approved=0";
        this.lastMeta = meta;
        this.loading = true;
        this.stockService.getStocksList(meta).subscribe((res) => {
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
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.currentEdit = event.data;
                this.open(this.dialogEdit, event.action.action);
                break;
            case 'reject':
                this.currentReject = event.data;
                this.open(this.dialog, event.action.action);
                break;
            case 'approve':
                this.currentApprove = event.data;
                this.open(this.dialog, event.action.action);
                break;
        }
    }
    open(dialog, action) {
        if (action === 'reject') {
            this.dialogActionType = 'reject';
            this.dialogTitle = 'Reject Confirm';
            this.dialogMessage = 'Are you sure to reject stock <strong>' + this.currentReject.id + '</strong> ?';
            this.dialogService.open(dialog);
        }
        if (action === 'approve') {
            this.dialogActionType = 'approve';
            this.dialogTitle = 'Active Confirm';
            this.dialogMessage = 'Are you sure to approve stock <strong>' + this.currentApprove.id + '</strong> ?';
            this.dialogService.open(dialog);
        }
        if (action === 'edit') {
            this.formGroup.get('stock').setValue(this.currentEdit.stock);
            this.formGroup.get('id').setValue(this.currentEdit.id);
            console.log(this.currentEdit);
            // this.dialogActionType = 'approve';
            // this.dialogTitle = 'Active Confirm';
            // this.dialogMessage = 'Are you sure to approve stock <strong>' + this.currentApprove.id + '</strong> ?';
            this.dialogService.open(dialog);
        }
    }
    dialogAction(dialogRef, action) {
        if (action === 'reject') {
            this.rejectStock(dialogRef);
        }
        if (action === 'approve') {
            this.approveStock(dialogRef);
        }
    }
    editStock(dialogRef) {
        if (this.formGroup.valid) {
            this.isLoading = true;
            const uploadData = new FormData();
            uploadData.append('id', this.formGroup.value.id);
            uploadData.append('stock', this.formGroup.value.stock);
            this.stockService.editStock(uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.getIndex();
                dialogRef.close();
            }, err => {
                this.toaster.show(err.error.message, 'Error', { status: 'danger' });
                this.isLoading = false;
                dialogRef.close();
            }, () => {
                this.isLoading = false;
                dialogRef.close();
            });
        }
    }
    approveStock(dialogRef) {
        this.stockService.approvePendingStock(this.currentApprove.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getIndex(this.lastMeta);
            this.currentApprove = null;
        });
    }
    rejectStock(dialogRef) {
        this.stockService.rejectPendingStock(this.currentReject.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getIndex(this.lastMeta);
            this.currentReject = null;
        });
    }
    export() {
        this.sharedService.exportUrl = 'warehouses/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(data, 'warehouses.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
    autoCompleteFilterChangeCheck(event) {
        const autotype = event.fieldName;
        if (autotype === 'product') {
            const meta = 'name=' + event.value;
            this.getProductsForSelection(meta);
        }
        if (autotype === 'store') {
            const meta = 'name=' + event.value;
            this.getSellersForSelection(meta);
        }
    }
}
StockRequestComponent.ɵfac = function StockRequestComponent_Factory(t) { return new (t || StockRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_8__["SellersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_products_services__WEBPACK_IMPORTED_MODULE_9__["ProductsServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"])); };
StockRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StockRequestComponent, selectors: [["app-warehouses-stock-request-index"]], viewQuery: function StockRequestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogEdit = _t.first);
    } }, decls: 12, vars: 6, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 1, "grid-container"], [3, "GridColumns", "gridView", "autoCompleteData", "loading", "sortable", "stateChange", "autoCompleteFilterChange", "commandActionClick"], ["dialog", ""], ["dialogEdit", ""], [1, "dialog-card"], [3, "innerHTML"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"], [1, "dialog-card", 3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 3, "formGroup"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "first-row", 3, "fxFlex"], [1, "form-control-container", 3, "fxFlex"], [1, "field-with-validation"], ["for", "stock"], ["nbInput", "", "type", "text", "fullWidth", "", "formControlName", "stock", "id", "stock"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "disabled", "click"]], template: function StockRequestComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function StockRequestComponent_Template_app_kendo_custome_grid_stateChange_7_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function StockRequestComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_7_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function StockRequestComponent_Template_app_kendo_custome_grid_commandActionClick_7_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StockRequestComponent_ng_template_8_Template, 10, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StockRequestComponent_ng_template_10_Template, 17, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" warehouses ", ctx.store_type, " stock Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("loading", ctx.loading)("sortable", false);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_12__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0b2NrLXJlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUtFLFlBQUE7RUFDQSxvQkFBQTtBQUhKO0FBRkk7RUFDRSxlQUFBO0FBSU47QUFFSTtFQUNFLFlBQUE7QUFBTiIsImZpbGUiOiJzdG9jay1yZXF1ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbmItY2FyZCB7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StockRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warehouses-stock-request-index',
                templateUrl: 'stock-request.component.html',
                styleUrls: ['stock-request.component.scss'],
            }]
    }], function () { return [{ type: _services_stock_stock_service__WEBPACK_IMPORTED_MODULE_7__["StockService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_8__["SellersServices"] }, { type: _services_products_products_services__WEBPACK_IMPORTED_MODULE_9__["ProductsServices"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_3__["FilterToQueryService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiServiceService"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }], dialogEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialogEdit']
        }] }); })();


/***/ }),

/***/ "mBhk":
/*!**********************************************************!*\
  !*** ./src/app/pages/warehouses/stock/routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stock_request_stock_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-request/stock-request.component */ "h4+g");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "SuHw");






const routes = [{
        path: '',
        // component: SidebarComponent,
        children: [
            { path: '', component: _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_3__["StockListComponent"] },
            { path: 'pending', component: _stock_request_stock_request_component__WEBPACK_IMPORTED_MODULE_2__["StockRequestComponent"] },
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

/***/ "mzIW":
/*!********************************************************!*\
  !*** ./src/app/pages/warehouses/stock/stock.module.ts ***!
  \********************************************************/
/*! exports provided: StockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModule", function() { return StockModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/theme.module */ "vTDv");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing.module */ "mBhk");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/upload-image/upload-image.module */ "v/J1");
/* harmony import */ var _stock_request_stock_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock-request/stock-request.component */ "h4+g");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stock-list/stock-list.component */ "SuHw");












class StockModule {
}
StockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StockModule });
StockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StockModule_Factory(t) { return new (t || StockModule)(); }, imports: [[
            _routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
            _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__["UploadImageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StockModule, { declarations: [_stock_request_stock_request_component__WEBPACK_IMPORTED_MODULE_9__["StockRequestComponent"],
        _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_10__["StockListComponent"]], imports: [_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
        _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__["UploadImageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
                    _shared_upload_image_upload_image_module__WEBPACK_IMPORTED_MODULE_8__["UploadImageModule"],
                ],
                declarations: [
                    _stock_request_stock_request_component__WEBPACK_IMPORTED_MODULE_9__["StockRequestComponent"],
                    _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_10__["StockListComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "zVGX":
/*!******************************************************************************!*\
  !*** ./src/app/pages/warehouses/stock/stock-request/stock-request.column.ts ***!
  \******************************************************************************/
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
        id: 'store_id',
        name: 'Store',
        field: 'store',
        fieldAttrName: 'name',
        filterType: 'autoComplete',
        autoTextField: 'name',
        autoValueField: 'store_id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'product_id',
        name: 'Product',
        field: 'product',
        fieldAttrName: 'name',
        filterType: 'autoComplete',
        autoTextField: 'name',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'stock',
        name: 'Stock',
        field: 'stock',
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
                action: 'approve',
                color: 'primary',
                id: 'approve-action',
                hidden: false,
                toolTip: 'Approve',
                icon: 'done',
                buttonType: 'icon',
                disabled: () => false,
            }, {
                action: 'reject',
                color: 'primary',
                id: 'reject-action',
                hidden: false,
                toolTip: 'Reject',
                icon: 'close',
                buttonType: 'icon',
                disabled: () => false,
            },
            {
                action: 'edit',
                color: 'primary',
                id: 'edit-action',
                hidden: false,
                toolTip: 'Edit Quantity',
                icon: 'edit',
                buttonType: 'icon',
                disabled: () => false,
            },
        ]
    },
];


/***/ }),

/***/ "zhJb":
/*!************************************************************************!*\
  !*** ./src/app/pages/warehouses/stock/stock-list/stock-list.column.ts ***!
  \************************************************************************/
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
        id: 'store_id',
        name: 'Store',
        field: 'store',
        fieldAttrName: 'name',
        filterType: 'autoComplete',
        autoTextField: 'name',
        autoValueField: 'store_id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'product_id',
        name: 'Product',
        field: 'product',
        fieldAttrName: 'name',
        filterType: 'autoComplete',
        autoTextField: 'name',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'stock',
        name: 'Stock',
        field: 'stock',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'available_stock',
        name: 'available Stock',
        field: 'available_stock',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'sold',
        name: 'Sold',
        field: 'sold',
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
                action: 'reject',
                color: 'primary',
                id: 'reject-action',
                hidden: false,
                toolTip: 'Reject',
                icon: 'close',
                buttonType: 'icon',
                disabled: () => false,
            },
            {
                action: 'edit',
                color: 'primary',
                id: 'edit-action',
                hidden: false,
                toolTip: 'Edit Quantity',
                icon: 'edit',
                buttonType: 'icon',
                disabled: () => false,
            },
        ]
    },
];


/***/ })

}]);
//# sourceMappingURL=stock-stock-module.js.map