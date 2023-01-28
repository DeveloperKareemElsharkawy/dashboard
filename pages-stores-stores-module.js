(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stores-stores-module"],{

/***/ "/Twm":
/*!***************************************************!*\
  !*** ./src/app/pages/stores/map/map.component.ts ***!
  \***************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MapComponent_map_marker_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "map-marker", 3, 4);
} if (rf & 2) {
    const marker_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", marker_r2)("options", marker_r2.option);
} }
class MapComponent {
    constructor() {
        this.zoom = 5;
        this.center = { lat: 30.033333, lng: 31.233334 };
        this.markerPins = [];
        this.options = {
            styles: [],
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            gestureHandling: 'cooperative'
        };
    }
    ngOnInit() {
    }
    getLatLng() {
        return this.markerPins[0];
    }
    setLatLng(data) {
        this.markerPins = [];
        const latLang = {
            lat: data.latLng ? data.latLng.lat() : parseFloat(data.latitude),
            lng: data.latLng ? data.latLng.lng() : parseFloat(data.longitude),
            option: {
                draggable: false,
            }
        };
        this.markerPins.push(latLang);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["address-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.googleMap = _t.first);
    } }, inputs: { zoom: "zoom", center: "center" }, decls: 3, vars: 4, consts: [[3, "center", "zoom", "options", "mapClick"], ["googleMap", ""], [3, "position", "options", 4, "ngFor", "ngForOf"], [3, "position", "options"], ["marker", "mapMarker"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "google-map", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function MapComponent_Template_google_map_mapClick_0_listener($event) { return ctx.setLatLng($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapComponent_map_marker_2_Template, 2, 2, "map-marker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("center", ctx.center)("zoom", ctx.zoom)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markerPins);
    } }, directives: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["MapMarker"]], styles: ["[_nghost-%COMP%] {\n  width: 100% !important;\n}\n[_nghost-%COMP%]     .map-container {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjtBQUVRO0VBQ0ksc0JBQUE7QUFBWiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIC5tYXAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'address-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return []; }, { googleMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"]]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "05ij":
/*!*********************************************************************!*\
  !*** ./src/app/pages/stores/index-stores/index-stores.component.ts ***!
  \*********************************************************************/
/*! exports provided: IndexStoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexStoresComponent", function() { return IndexStoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/categories/categories.services */ "LHs9");
/* harmony import */ var _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/filter-to-query/filter-to-query.service */ "PCJc");
/* harmony import */ var _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/sellers/sellers.services */ "7Qae");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _store_column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.column */ "lOx6");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendo-custome-grid/kendo-custome-grid.component */ "gwyd");





















const _c0 = ["dialog"];
function IndexStoresComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexStoresComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexStoresComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexStoresComponent_ng_template_9_Template_button_click_6_listener() { const ref_r6 = ctx.dialogRef; return ref_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexStoresComponent_ng_template_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ref_r6 = ctx.dialogRef; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.dialogAction(ref_r6, ctx_r8.dialogActionType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.dialogTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.dialogMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class IndexStoresComponent {
    constructor(toaster, categoryService, sellersService, convertFilter, router, dialogService, storeServices, sharedService, activatedroute) {
        this.toaster = toaster;
        this.categoryService = categoryService;
        this.sellersService = sellersService;
        this.convertFilter = convertFilter;
        this.router = router;
        this.dialogService = dialogService;
        this.storeServices = storeServices;
        this.sharedService = sharedService;
        this.activatedroute = activatedroute;
        this.columnGrid = _store_column__WEBPACK_IMPORTED_MODULE_7__["StoreColumn"];
        this.dataItem = {
            data: [],
            total: 0,
        };
        this.isLoading = false;
        this.autoCompleteData = [
            {
                name: 'categories',
                list: []
            },
            {
                name: 'owner',
                list: []
            },
            {
                name: 'city',
                list: []
            }
        ];
    }
    ngOnInit() {
        this.store_type = this.router.url.split('/')[1];
        this.store_type_id = (this.store_type == 'stores') ? 1 : 2;
        this.activatedroute.data.subscribe(data => {
            this.is_verified = data.is_verified;
            if (this.is_verified == 1) {
                this.columnGrid.filter(ele => ele.field === 'command')[0].command.filter(ele => ele.action === 'verify')[0].hidden = true;
            }
            else {
                this.columnGrid.filter(ele => ele.field === 'command')[0].command.filter(ele => ele.action === 'verify')[0].hidden = false;
            }
        });
        // this.getStoresTypes();
        if (this.sellerID) {
            this.getStores('owner=' + this.sellerID);
            this.columnGrid = this.columnGrid.filter(ele => ele.field !== 'owner');
        }
        else {
            this.getStores();
        }
    }
    getStores(meta) {
        this.isLoading = true;
        this.lastMeta = meta;
        if (meta)
            meta = meta + '&';
        else
            meta = '';
        meta = meta + 'is_verified=' + this.is_verified;
        meta = meta + '&type=' + this.store_type_id;
        this.storeServices.getAllStores(meta).subscribe(res => {
            this.dataItem.data = res['data'];
            this.dataItem.total = res.total;
        }, error => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    deleteStore(dialogRef) {
        this.storeServices.deleteStore(this.currentDeleteStore.id).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getStores(this.lastMeta);
            this.currentDeleteStore = null;
        });
    }
    getCategories(meta) {
        this.categoryService.getParentCategorise(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'categories')[0].list = res['data'];
        }, error => {
        });
    }
    getSellers(meta) {
        this.sellersService.getSellers(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'owner')[0].list = res['data'];
        }, error => {
        });
    }
    // getStoresTypes() {
    //     this.storeServices.getStoreTypes().subscribe(
    //         res => {
    //             this.columnGrid.filter(col => col.field === 'type')[0].filterMenu = res.store_types.map(ele => {
    //                 let filter = { textField: ele.name, valueField: ele.id };
    //                 return filter;
    //             });
    //         },
    //         error => {
    //         },
    //         () => {
    //         },
    //     );
    // }
    getAllCities(meta) {
        this.sharedService.getCities(meta).subscribe(res => {
            this.autoCompleteData.filter(ele => ele.name === 'city')[0].list = res['data'];
        }, error => {
        }, () => {
        });
    }
    commandActionClick(event) {
        switch (event.action.action) {
            case 'edit':
                this.router.navigate(['./' + this.store_type + '/edit/' + event.data.id]);
                break;
            case 'view-attachments':
                this.router.navigate(['./' + this.store_type + '/attachments/' + event.data.id]);
                break;
            case 'delete':
                this.currentDeleteStore = event.data;
                this.open(this.dialog, event.action.action);
                break;
            case 'verify':
                this.currentVerify = event.data;
                this.open(this.dialog, event.action.action);
                break;
        }
    }
    open(dialog, action) {
        if (action === 'delete') {
            this.dialogActionType = 'delete';
            this.dialogTitle = 'Delete Confirm';
            this.dialogMessage = 'Are you sure to delete store <strong>' + this.currentDeleteStore.name + '</strong> ?';
            this.dialogService.open(dialog);
        }
        if (action === 'verify') {
            this.dialogActionType = 'verify';
            this.dialogTitle = 'Verify Confirm';
            this.dialogMessage = 'Are you sure to Verify store <strong>' + this.currentVerify.name + '</strong> ?';
            this.dialogService.open(dialog);
        }
    }
    filterChange(event) {
        let queryString;
        if (this.sellerID) {
            queryString = this.convertFilter.convertToQuery(event) ? (this.convertFilter.convertToQuery(event) + '&owner=' + this.sellerID) : ('?owner=' + this.sellerID);
        }
        else {
            queryString = this.convertFilter.convertToQuery(event);
        }
        this.getStores(queryString);
    }
    autoCompleteFilterChangeCheck(event) {
        const type = event.fieldName;
        if (type === 'categories') {
            const meta = 'name=' + event.value;
            this.getCategories(meta);
        }
        if (type === 'owner') {
            const meta = 'name=' + event.value + '&activation=true';
            this.getSellers(meta);
        }
        if (type === 'city') {
            const meta = 'name=' + event.value;
            this.getAllCities(meta);
        }
    }
    dialogAction(dialogRef, action) {
        if (action === 'verify') {
            this.verifyStore(dialogRef);
        }
    }
    verifyStore(dialogRef) {
        let meta = {
            'store_id': this.currentVerify.owner_id
        };
        this.storeServices.verifyPending(meta).subscribe(res => {
            this.toaster.show(res['msg'], 'Success', { status: 'success' });
        }, error => {
            this.toaster.show(error.error.message, 'Error', { status: 'danger' });
            dialogRef.close();
        }, () => {
            dialogRef.close();
            this.getStores(this.lastMeta);
            this.currentVerify = null;
        });
    }
    export() {
        this.sharedService.exportUrl = this.lastMeta ? 'stores/export/excel?' + this.lastMeta : 'stores/export/excel';
        this.sharedService.exportData(this.sharedService.exportUrl).subscribe(data => {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(data, 'stores.xlsx');
        }),
            error => this.toaster.show('Error downloading the file.', 'Error', { status: 'danger' });
    }
}
IndexStoresComponent.ɵfac = function IndexStoresComponent_Factory(t) { return new (t || IndexStoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_categories_services__WEBPACK_IMPORTED_MODULE_3__["CategoriseServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_5__["SellersServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_4__["FilterToQueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_6__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_9__["SharedApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
IndexStoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexStoresComponent, selectors: [["index-stores"]], viewQuery: function IndexStoresComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, inputs: { sellerID: "sellerID" }, decls: 11, vars: 8, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header-title"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["nbButton", "", "nbSpinnerStatus", "danger", "class", "mr-2", "status", "danger", "size", "small", 3, "click", 4, "ngIf"], [3, "GridColumns", "gridView", "autoCompleteData", "sortable", "loading", "stateChange", "autoCompleteFilterChange", "commandActionClick"], ["dialog", ""], ["nbButton", "", "nbSpinnerStatus", "danger", "status", "danger", "size", "small", 1, "mr-2", 3, "click"], [1, "dialog-card"], [3, "innerHTML"], ["nbButton", "", 3, "click"], ["nbButton", "", "status", "danger", 2, "float", "right", 3, "click"]], template: function IndexStoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IndexStoresComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-kendo-custome-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("stateChange", function IndexStoresComponent_Template_app_kendo_custome_grid_stateChange_8_listener($event) { return ctx.filterChange($event); })("autoCompleteFilterChange", function IndexStoresComponent_Template_app_kendo_custome_grid_autoCompleteFilterChange_8_listener($event) { return ctx.autoCompleteFilterChangeCheck($event); })("commandActionClick", function IndexStoresComponent_Template_app_kendo_custome_grid_commandActionClick_8_listener($event) { return ctx.commandActionClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IndexStoresComponent_ng_template_9_Template, 10, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.store_type, " ", ctx.is_verified ? "verified" : "pending", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataItem.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("GridColumns", ctx.columnGrid)("gridView", ctx.dataItem)("autoCompleteData", ctx.autoCompleteData)("sortable", false)("loading", ctx.isLoading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _shared_kendo_custome_grid_kendo_custome_grid_kendo_custome_grid_component__WEBPACK_IMPORTED_MODULE_12__["KendoCustomeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5kZXgtc3RvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQ0k7RUFLSSxZQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQUZRO0VBQ0ksZUFBQTtBQUlaO0FBRVE7RUFDSSxZQUFBO0FBQVoiLCJmaWxlIjoiaW5kZXgtc3RvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG5iLWNhcmQge1xuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexStoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'index-stores',
                templateUrl: './index-stores.component.html',
                styleUrls: ['./index-stores.component.scss']
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbToastrService"] }, { type: _services_categories_categories_services__WEBPACK_IMPORTED_MODULE_3__["CategoriseServices"] }, { type: _services_sellers_sellers_services__WEBPACK_IMPORTED_MODULE_5__["SellersServices"] }, { type: _services_filter_to_query_filter_to_query_service__WEBPACK_IMPORTED_MODULE_4__["FilterToQueryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"] }, { type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_6__["StoresServices"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_9__["SharedApiServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { dialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog']
        }], sellerID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['sellerID']
        }] }); })();


/***/ }),

/***/ "3sZV":
/*!********************************************************************************!*\
  !*** ./node_modules/@angular/google-maps/__ivy_ngcc__/fesm2015/google-maps.js ***!
  \********************************************************************************/
/*! exports provided: GoogleMap, GoogleMapsModule, MapBaseLayer, MapBicyclingLayer, MapCircle, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsModule", function() { return GoogleMapsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBaseLayer", function() { return MapBaseLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBicyclingLayer", function() { return MapBicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCircle", function() { return MapCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGroundOverlay", function() { return MapGroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapInfoWindow", function() { return MapInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapKmlLayer", function() { return MapKmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMarker", function() { return MapMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPolygon", function() { return MapPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPolyline", function() { return MapPolyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRectangle", function() { return MapRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTrafficLayer", function() { return MapTrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTransitLayer", function() { return MapTransitLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */


const _c0 = ["*"];
class MapEventManager {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /** Pending listeners that were added before the target was set. */
        this._pending = [];
        this._listeners = [];
    }
    /** Clears all currently-registered event listeners. */
    _clearListeners() {
        for (let listener of this._listeners) {
            listener.remove();
        }
        this._listeners = [];
    }
    /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */
    getLazyEmitter(name) {
        const observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            // If the target hasn't been initialized yet, cache the observer so it can be added later.
            if (!this._target) {
                this._pending.push({ observable, observer });
                return undefined;
            }
            const listener = this._target.addListener(name, (event) => {
                this._ngZone.run(() => observer.next(event));
            });
            this._listeners.push(listener);
            return () => listener.remove();
        });
        return observable;
    }
    /** Sets the current target that the manager should bind events to. */
    setTarget(target) {
        if (target === this._target) {
            return;
        }
        // Clear the listeners from the pre-existing target.
        if (this._target) {
            this._clearListeners();
            this._pending = [];
        }
        this._target = target;
        // Add the listeners that were bound before the map was initialized.
        this._pending.forEach(subscriber => subscriber.observable.subscribe(subscriber.observer));
        this._pending = [];
    }
    /** Destroys the manager and clears the event listeners. */
    destroy() {
        this._clearListeners();
        this._pending = [];
        this._target = undefined;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** default options set to the Googleplex */
const DEFAULT_OPTIONS = {
    center: { lat: 37.421995, lng: -122.084092 },
    zoom: 17
};
/** Arbitrary default height for the map element */
const DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */
const DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */
class GoogleMap {
    constructor(_elementRef, _ngZone, 
    /**
     * @deprecated `platformId` parameter to become required.
     * @breaking-change 10.0.0
     */
    platformId) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_OPTIONS);
        this._center = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._zoom = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */
        this.height = DEFAULT_HEIGHT;
        /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */
        this.width = DEFAULT_WIDTH;
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
         */
        this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
         */
        this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
         */
        this.mapClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
         */
        this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
         */
        this.mapDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
         */
        this.mapDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
         */
        this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
         */
        this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
         */
        this.idle = this._eventManager.getLazyEmitter('idle');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
         */
        this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
         */
        this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
         */
        this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
         */
        this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
         */
        this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
         */
        this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
         */
        this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
         */
        this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
        /**
         * See
         * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
         */
        this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
        // @breaking-change 10.0.0 Remove null check for `platformId`.
        this._isBrowser =
            platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId) : typeof window === 'object' && !!window;
        if (this._isBrowser) {
            const googleMapsWindow = window;
            if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Namespace google not found, cannot construct embedded google ' +
                    'map. Please install the Google Maps JavaScript API: ' +
                    'https://developers.google.com/maps/documentation/javascript/' +
                    'tutorial#Loading_the_Maps_API');
            }
        }
    }
    set center(center) {
        this._center.next(center);
    }
    set zoom(zoom) {
        this._zoom.next(zoom);
    }
    set options(options) {
        this._options.next(options || DEFAULT_OPTIONS);
    }
    ngOnChanges() {
        this._setSize();
        if (this.googleMap && this.mapTypeId) {
            this.googleMap.setMapTypeId(this.mapTypeId);
        }
    }
    ngOnInit() {
        // It should be a noop during server-side rendering.
        if (this._isBrowser) {
            this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');
            this._setSize();
            this._googleMapChanges = this._initializeMap(this._combineOptions());
            this._googleMapChanges.subscribe((googleMap) => {
                this.googleMap = googleMap;
                this._eventManager.setTarget(this.googleMap);
            });
            this._watchForOptionsChanges();
            this._watchForCenterChanges();
            this._watchForZoomChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroy.next();
        this._destroy.complete();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
     */
    fitBounds(bounds, padding) {
        this._assertInitialized();
        this.googleMap.fitBounds(bounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
     */
    panBy(x, y) {
        this._assertInitialized();
        this.googleMap.panBy(x, y);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
     */
    panTo(latLng) {
        this._assertInitialized();
        this.googleMap.panTo(latLng);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
     */
    panToBounds(latLngBounds, padding) {
        this._assertInitialized();
        this.googleMap.panToBounds(latLngBounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.googleMap.getBounds() || null;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
     */
    getCenter() {
        this._assertInitialized();
        return this.googleMap.getCenter();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
     */
    getClickableIcons() {
        this._assertInitialized();
        return this.googleMap.getClickableIcons();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
     */
    getHeading() {
        this._assertInitialized();
        return this.googleMap.getHeading();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
     */
    getMapTypeId() {
        this._assertInitialized();
        return this.googleMap.getMapTypeId();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
     */
    getProjection() {
        this._assertInitialized();
        return this.googleMap.getProjection();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
     */
    getStreetView() {
        this._assertInitialized();
        return this.googleMap.getStreetView();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
     */
    getTilt() {
        this._assertInitialized();
        return this.googleMap.getTilt();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
     */
    getZoom() {
        this._assertInitialized();
        return this.googleMap.getZoom();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
     */
    get controls() {
        this._assertInitialized();
        return this.googleMap.controls;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
     */
    get data() {
        this._assertInitialized();
        return this.googleMap.data;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
     */
    get mapTypes() {
        this._assertInitialized();
        return this.googleMap.mapTypes;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
     */
    get overlayMapTypes() {
        this._assertInitialized();
        return this.googleMap.overlayMapTypes;
    }
    _setSize() {
        if (this._mapEl) {
            const styles = this._mapEl.style;
            styles.height =
                this.height === null ? '' : (coerceCssPixelValue(this.height) || DEFAULT_HEIGHT);
            styles.width = this.width === null ? '' : (coerceCssPixelValue(this.width) || DEFAULT_WIDTH);
        }
    }
    /** Combines the center and zoom and the other map options into a single object */
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._center, this._zoom])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, center, zoom]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { 
                // It's important that we set **some** kind of `center`, otherwise
                // Google Maps will render a blank rectangle which looks broken.
                center: center || options.center || DEFAULT_OPTIONS.center, zoom: zoom !== undefined ? zoom : options.zoom, mapTypeId: this.mapTypeId });
            return combinedOptions;
        }));
    }
    _initializeMap(optionsChanges) {
        return optionsChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(options => {
            // Create the object outside the zone so its events don't trigger change detection.
            // We'll bring it back in inside the `MapEventManager` only for the events that the
            // user has subscribed to.
            return this._ngZone.runOutsideAngular(() => new google.maps.Map(this._mapEl, options));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    _watchForOptionsChanges() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._googleMapChanges, this._options])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy))
            .subscribe(([googleMap, options]) => {
            googleMap.setOptions(options);
        });
    }
    _watchForCenterChanges() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._googleMapChanges, this._center])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy))
            .subscribe(([googleMap, center]) => {
            if (center) {
                googleMap.setCenter(center);
            }
        });
    }
    _watchForZoomChanges() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._googleMapChanges, this._zoom])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy))
            .subscribe(([googleMap, zoom]) => {
            if (zoom !== undefined) {
                googleMap.setZoom(zoom);
            }
        });
    }
    /** Asserts that the map has been initialized. */
    _assertInitialized() {
        if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Cannot access Google Map information before the API has been initialized. ' +
                'Please wait for the API to load before trying to interact with it.');
        }
    }
}
GoogleMap.ɵfac = function GoogleMap_Factory(t) { return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); };
GoogleMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleMap, selectors: [["google-map"]], inputs: { height: "height", width: "width", center: "center", zoom: "zoom", options: "options", mapTypeId: "mapTypeId" }, outputs: { boundsChanged: "boundsChanged", centerChanged: "centerChanged", mapClick: "mapClick", mapDblclick: "mapDblclick", mapDrag: "mapDrag", mapDragend: "mapDragend", mapDragstart: "mapDragstart", headingChanged: "headingChanged", idle: "idle", maptypeidChanged: "maptypeidChanged", mapMousemove: "mapMousemove", mapMouseout: "mapMouseout", mapMouseover: "mapMouseover", projectionChanged: "projectionChanged", mapRightclick: "mapRightclick", tilesloaded: "tilesloaded", tiltChanged: "tiltChanged", zoomChanged: "zoomChanged" }, exportAs: ["googleMap"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "map-container"]], template: function GoogleMap_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    } }, encapsulation: 2, changeDetection: 0 });
GoogleMap.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
GoogleMap.propDecorators = {
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mapTypeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundsChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    centerChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    headingChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    idle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    maptypeidChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    projectionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tilesloaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tiltChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    zoomChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'google-map',
                exportAs: 'googleMap',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: '<div class="map-container"></div><ng-content></ng-content>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], centerChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], headingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], idle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], maptypeidChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], projectionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tilesloaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tiltChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], zoomChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapTypeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return cssUnitsPattern.test(value) ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MapBaseLayer {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._ngZone.runOutsideAngular(() => {
                this._initializeObject();
            });
            this._assertInitialized();
            this._setMap();
        }
    }
    ngOnDestroy() {
        this._unsetMap();
    }
    _assertInitialized() {
        if (!this._map.googleMap) {
            throw Error('Cannot access Google Map information before the API has been initialized. ' +
                'Please wait for the API to load before trying to interact with it.');
        }
    }
    _initializeObject() { }
    _setMap() { }
    _unsetMap() { }
}
MapBaseLayer.ɵfac = function MapBaseLayer_Factory(t) { return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapBaseLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapBaseLayer, selectors: [["map-base-layer"]], exportAs: ["mapBaseLayer"] });
MapBaseLayer.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBaseLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-base-layer',
                exportAs: 'mapBaseLayer'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */
class MapBicyclingLayer extends MapBaseLayer {
    _initializeObject() {
        this.bicyclingLayer = new google.maps.BicyclingLayer();
    }
    _setMap() {
        this._assertLayerInitialized();
        this.bicyclingLayer.setMap(this._map.googleMap);
    }
    _unsetMap() {
        if (this.bicyclingLayer) {
            this.bicyclingLayer.setMap(null);
        }
    }
    _assertLayerInitialized() {
        if (!this.bicyclingLayer) {
            throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' +
                'Please wait for the Transit Layer to load before trying to interact with it.');
        }
    }
}
MapBicyclingLayer.ɵfac = function MapBicyclingLayer_Factory(t) { return ɵMapBicyclingLayer_BaseFactory(t || MapBicyclingLayer); };
MapBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapBicyclingLayer, selectors: [["map-bicycling-layer"]], exportAs: ["mapBicyclingLayer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMapBicyclingLayer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MapBicyclingLayer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-bicycling-layer',
                exportAs: 'mapBicyclingLayer'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */
class MapCircle {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._center = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
         */
        this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
         */
        this.circleClick = this._eventManager.getLazyEmitter('click');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
         */
        this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
         */
        this.circleDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
         */
        this.circleDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
         */
        this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
         */
        this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
         */
        this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
         */
        this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
         */
        this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
         */
        this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
         */
        this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
        /**
         * @see
         * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
         */
        this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set center(center) {
        this._center.next(center);
    }
    set radius(radius) {
        this._radius.next(radius);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.circle = new google.maps.Circle(options);
                });
                this._assertInitialized();
                this.circle.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.circle);
            });
            this._watchForOptionsChanges();
            this._watchForCenterChanges();
            this._watchForRadiusChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.circle) {
            this.circle.setMap(null);
        }
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.circle.getBounds();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
     */
    getCenter() {
        this._assertInitialized();
        return this.circle.getCenter();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.circle.getDraggable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.circle.getEditable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
     */
    getRadius() {
        this._assertInitialized();
        return this.circle.getRadius();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.circle.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._center, this._radius])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, center, radius]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { center: center || options.center, radius: radius !== undefined ? radius : options.radius });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.circle.setOptions(options);
        });
    }
    _watchForCenterChanges() {
        this._center.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(center => {
            if (center) {
                this._assertInitialized();
                this.circle.setCenter(center);
            }
        });
    }
    _watchForRadiusChanges() {
        this._radius.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(radius => {
            if (radius !== undefined) {
                this._assertInitialized();
                this.circle.setRadius(radius);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.circle) {
                throw Error('Cannot interact with a Google Map Circle before it has been ' +
                    'initialized. Please wait for the Circle to load before trying to interact with it.');
            }
        }
    }
}
MapCircle.ɵfac = function MapCircle_Factory(t) { return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapCircle, selectors: [["map-circle"]], inputs: { options: "options", center: "center", radius: "radius" }, outputs: { centerChanged: "centerChanged", circleClick: "circleClick", circleDblclick: "circleDblclick", circleDrag: "circleDrag", circleDragend: "circleDragend", circleDragstart: "circleDragstart", circleMousedown: "circleMousedown", circleMousemove: "circleMousemove", circleMouseout: "circleMouseout", circleMouseover: "circleMouseover", circleMouseup: "circleMouseup", radiusChanged: "radiusChanged", circleRightclick: "circleRightclick" }, exportAs: ["mapCircle"] });
MapCircle.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapCircle.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    centerChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    radiusChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    circleRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-circle',
                exportAs: 'mapCircle'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { centerChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], radiusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], circleRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */
class MapGroundOverlay {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this._url = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Whether the overlay is clickable */
        this.clickable = false;
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
         */
        this.mapClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/image-overlay
         * #GroundOverlay.dblclick
         */
        this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    }
    /** URL of the image that will be shown in the overlay. */
    set url(url) {
        this._url.next(url);
    }
    /** Opacity of the overlay. */
    set opacity(opacity) {
        this._opacity.next(opacity);
    }
    ngOnInit() {
        if (!this.bounds && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Image bounds are required');
        }
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.groundOverlay =
                        new google.maps.GroundOverlay(this._url.getValue(), this.bounds, options);
                });
                this._assertInitialized();
                this.groundOverlay.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.groundOverlay);
            });
            this._watchForOpacityChanges();
            this._watchForUrlChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.groundOverlay) {
            this.groundOverlay.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.groundOverlay.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getOpacity
     */
    getOpacity() {
        this._assertInitialized();
        return this.groundOverlay.getOpacity();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getUrl
     */
    getUrl() {
        this._assertInitialized();
        return this.groundOverlay.getUrl();
    }
    _combineOptions() {
        return this._opacity.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(opacity => {
            const combinedOptions = {
                clickable: this.clickable,
                opacity,
            };
            return combinedOptions;
        }));
    }
    _watchForOpacityChanges() {
        this._opacity.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(opacity => {
            if (opacity) {
                this._assertInitialized();
                this.groundOverlay.setOpacity(opacity);
            }
        });
    }
    _watchForUrlChanges() {
        this._url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(url => {
            this._assertInitialized();
            const overlay = this.groundOverlay;
            overlay.set('url', url);
            // Google Maps only redraws the overlay if we re-set the map.
            overlay.setMap(null);
            overlay.setMap(this._map.googleMap);
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.groundOverlay) {
                throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' +
                    'Please wait for the GroundOverlay to load before trying to interact with it.');
            }
        }
    }
}
MapGroundOverlay.ɵfac = function MapGroundOverlay_Factory(t) { return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapGroundOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapGroundOverlay, selectors: [["map-ground-overlay"]], inputs: { clickable: "clickable", url: "url", opacity: "opacity", bounds: "bounds" }, outputs: { mapClick: "mapClick", mapDblclick: "mapDblclick" }, exportAs: ["mapGroundOverlay"] });
MapGroundOverlay.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapGroundOverlay.propDecorators = {
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapGroundOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-ground-overlay',
                exportAs: 'mapGroundOverlay'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */
class MapInfoWindow {
    constructor(_googleMap, _elementRef, _ngZone) {
        this._googleMap = _googleMap;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._position = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
         */
        this.closeclick = this._eventManager.getLazyEmitter('closeclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window
         * #InfoWindow.content_changed
         */
        this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
         */
        this.domready = this._eventManager.getLazyEmitter('domready');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window
         * #InfoWindow.position_changed
         */
        this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/info-window
         * #InfoWindow.zindex_changed
         */
        this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set position(position) {
        this._position.next(position);
    }
    ngOnInit() {
        if (this._googleMap._isBrowser) {
            const combinedOptionsChanges = this._combineOptions();
            combinedOptionsChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.infoWindow = new google.maps.InfoWindow(options);
                });
                this._eventManager.setTarget(this.infoWindow);
            });
            this._watchForOptionsChanges();
            this._watchForPositionChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroy.next();
        this._destroy.complete();
        // If no info window has been created on the server, we do not try closing it.
        // On the server, an info window cannot be created and this would cause errors.
        if (this.infoWindow) {
            this.close();
        }
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
     */
    close() {
        this._assertInitialized();
        this.infoWindow.close();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
     */
    getContent() {
        this._assertInitialized();
        return this.infoWindow.getContent();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.getPosition
     */
    getPosition() {
        this._assertInitialized();
        return this.infoWindow.getPosition();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
     */
    getZIndex() {
        this._assertInitialized();
        return this.infoWindow.getZIndex();
    }
    /**
     * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
     * then the position property of the options input is used instead.
     */
    open(anchor) {
        this._assertInitialized();
        const anchorObject = anchor ? anchor.getAnchor() : undefined;
        // Prevent the info window from initializing if trying to reopen on the same anchor.
        if (this.infoWindow.get('anchor') !== anchorObject) {
            this._elementRef.nativeElement.style.display = '';
            this.infoWindow.open(this._googleMap.googleMap, anchorObject);
        }
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._position]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, position]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { position: position || options.position, content: this._elementRef.nativeElement });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(options => {
            this._assertInitialized();
            this.infoWindow.setOptions(options);
        });
    }
    _watchForPositionChanges() {
        this._position.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(position => {
            if (position) {
                this._assertInitialized();
                this.infoWindow.setPosition(position);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.infoWindow) {
                throw Error('Cannot interact with a Google Map Info Window before it has been ' +
                    'initialized. Please wait for the Info Window to load before trying to interact with ' +
                    'it.');
            }
        }
    }
}
MapInfoWindow.ɵfac = function MapInfoWindow_Factory(t) { return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapInfoWindow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapInfoWindow, selectors: [["map-info-window"]], hostAttrs: [2, "display", "none"], inputs: { options: "options", position: "position" }, outputs: { closeclick: "closeclick", contentChanged: "contentChanged", domready: "domready", positionChanged: "positionChanged", zindexChanged: "zindexChanged" }, exportAs: ["mapInfoWindow"] });
MapInfoWindow.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapInfoWindow.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    contentChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    domready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    positionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    zindexChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-info-window',
                exportAs: 'mapInfoWindow',
                host: { 'style': 'display: none' }
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { closeclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], contentChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], domready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], zindexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */
class MapKmlLayer {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._url = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
         */
        this.kmlClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/kml
         * #KmlLayer.defaultviewport_changed
         */
        this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
         */
        this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set url(url) {
        this._url.next(url);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => this.kmlLayer = new google.maps.KmlLayer(options));
                this._assertInitialized();
                this.kmlLayer.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.kmlLayer);
            });
            this._watchForOptionsChanges();
            this._watchForUrlChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.kmlLayer) {
            this.kmlLayer.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
     */
    getDefaultViewport() {
        this._assertInitialized();
        return this.kmlLayer.getDefaultViewport();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
     */
    getMetadata() {
        this._assertInitialized();
        return this.kmlLayer.getMetadata();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
     */
    getStatus() {
        this._assertInitialized();
        return this.kmlLayer.getStatus();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
     */
    getUrl() {
        this._assertInitialized();
        return this.kmlLayer.getUrl();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
     */
    getZIndex() {
        this._assertInitialized();
        return this.kmlLayer.getZIndex();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._url]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, url]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { url: url || options.url });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            if (this.kmlLayer) {
                this._assertInitialized();
                this.kmlLayer.setOptions(options);
            }
        });
    }
    _watchForUrlChanges() {
        this._url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(url => {
            if (url && this.kmlLayer) {
                this._assertInitialized();
                this.kmlLayer.setUrl(url);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.kmlLayer) {
                throw Error('Cannot interact with a Google Map KmlLayer before it has been ' +
                    'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
            }
        }
    }
}
MapKmlLayer.ɵfac = function MapKmlLayer_Factory(t) { return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapKmlLayer, selectors: [["map-kml-layer"]], inputs: { options: "options", url: "url" }, outputs: { kmlClick: "kmlClick", defaultviewportChanged: "defaultviewportChanged", statusChanged: "statusChanged" }, exportAs: ["mapKmlLayer"] });
MapKmlLayer.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapKmlLayer.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    kmlClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    defaultviewportChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    statusChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-kml-layer',
                exportAs: 'mapKmlLayer'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { kmlClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], defaultviewportChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], statusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */
const DEFAULT_MARKER_OPTIONS = {
    position: { lat: 37.421995, lng: -122.084092 },
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */
class MapMarker {
    constructor(_googleMap, _ngZone) {
        this._googleMap = _googleMap;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_MARKER_OPTIONS);
        this._title = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._position = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._label = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._clickable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
         */
        this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
         */
        this.mapClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
         */
        this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
         */
        this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
         */
        this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
         */
        this.mapDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
         */
        this.mapDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
         */
        this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
         */
        this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
         */
        this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
         */
        this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
         */
        this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
         */
        this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
         */
        this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
         */
        this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
         */
        this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
         */
        this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
         */
        this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
         */
        this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
         */
        this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
         */
        this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
    }
    set options(options) {
        this._options.next(options || DEFAULT_MARKER_OPTIONS);
    }
    set title(title) {
        this._title.next(title);
    }
    set position(position) {
        this._position.next(position);
    }
    set label(label) {
        this._label.next(label);
    }
    set clickable(clickable) {
        this._clickable.next(clickable);
    }
    ngOnInit() {
        if (this._googleMap._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => this.marker = new google.maps.Marker(options));
                this._assertInitialized();
                this.marker.setMap(this._googleMap.googleMap);
                this._eventManager.setTarget(this.marker);
            });
            this._watchForOptionsChanges();
            this._watchForTitleChanges();
            this._watchForPositionChanges();
            this._watchForLabelChanges();
            this._watchForClickableChanges();
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this._eventManager.destroy();
        if (this.marker) {
            this.marker.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
     */
    getAnimation() {
        this._assertInitialized();
        return this.marker.getAnimation() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
     */
    getClickable() {
        this._assertInitialized();
        return this.marker.getClickable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
     */
    getCursor() {
        this._assertInitialized();
        return this.marker.getCursor() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return !!this.marker.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
     */
    getIcon() {
        this._assertInitialized();
        return this.marker.getIcon() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
     */
    getLabel() {
        this._assertInitialized();
        return this.marker.getLabel() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
     */
    getOpacity() {
        this._assertInitialized();
        return this.marker.getOpacity() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
     */
    getPosition() {
        this._assertInitialized();
        return this.marker.getPosition() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
     */
    getShape() {
        this._assertInitialized();
        return this.marker.getShape() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
     */
    getTitle() {
        this._assertInitialized();
        return this.marker.getTitle() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.marker.getVisible();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
     */
    getZIndex() {
        this._assertInitialized();
        return this.marker.getZIndex() || null;
    }
    /** Gets the anchor point that can be used to attach other Google Maps objects. */
    getAnchor() {
        this._assertInitialized();
        return this.marker;
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._title, this._position, this._label, this._clickable])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, title, position, label, clickable]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { title: title || options.title, position: position || options.position, label: label || options.label, clickable: clickable !== undefined ? clickable : options.clickable, map: this._googleMap.googleMap });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(options => {
            if (this.marker) {
                this._assertInitialized();
                this.marker.setOptions(options);
            }
        });
    }
    _watchForTitleChanges() {
        this._title.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(title => {
            if (this.marker && title !== undefined) {
                this._assertInitialized();
                this.marker.setTitle(title);
            }
        });
    }
    _watchForPositionChanges() {
        this._position.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(position => {
            if (this.marker && position) {
                this._assertInitialized();
                this.marker.setPosition(position);
            }
        });
    }
    _watchForLabelChanges() {
        this._label.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(label => {
            if (this.marker && label !== undefined) {
                this._assertInitialized();
                this.marker.setLabel(label);
            }
        });
    }
    _watchForClickableChanges() {
        this._clickable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy)).subscribe(clickable => {
            if (this.marker && clickable !== undefined) {
                this._assertInitialized();
                this.marker.setClickable(clickable);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._googleMap.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.marker) {
                throw Error('Cannot interact with a Google Map Marker before it has been ' +
                    'initialized. Please wait for the Marker to load before trying to interact with it.');
            }
        }
    }
}
MapMarker.ɵfac = function MapMarker_Factory(t) { return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapMarker, selectors: [["map-marker"]], inputs: { options: "options", title: "title", position: "position", label: "label", clickable: "clickable" }, outputs: { animationChanged: "animationChanged", mapClick: "mapClick", clickableChanged: "clickableChanged", cursorChanged: "cursorChanged", mapDblclick: "mapDblclick", mapDrag: "mapDrag", mapDragend: "mapDragend", draggableChanged: "draggableChanged", mapDragstart: "mapDragstart", flatChanged: "flatChanged", iconChanged: "iconChanged", mapMousedown: "mapMousedown", mapMouseout: "mapMouseout", mapMouseover: "mapMouseover", mapMouseup: "mapMouseup", positionChanged: "positionChanged", mapRightclick: "mapRightclick", shapeChanged: "shapeChanged", titleChanged: "titleChanged", visibleChanged: "visibleChanged", zindexChanged: "zindexChanged" }, exportAs: ["mapMarker"] });
MapMarker.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapMarker.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animationChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    clickableChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cursorChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    draggableChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    flatChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    iconChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    positionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    mapRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    shapeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    titleChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    visibleChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    zindexChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-marker',
                exportAs: 'mapMarker'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { animationChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clickableChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cursorChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], draggableChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], flatChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], iconChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mapRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], shapeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], titleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], visibleChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], zindexChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */
class MapPolygon {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
         */
        this.polygonClick = this._eventManager.getLazyEmitter('click');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
         */
        this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
         */
        this.polygonDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
         */
        this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
         */
        this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
         */
        this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
         */
        this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
         */
        this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
         */
        this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
         */
        this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
         */
        this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set paths(paths) {
        this._paths.next(paths);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.polygon = new google.maps.Polygon(options);
                });
                this._assertInitialized();
                this.polygon.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.polygon);
            });
            this._watchForOptionsChanges();
            this._watchForPathChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.polygon) {
            this.polygon.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.polygon.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.polygon.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
     */
    getPath() {
        this._assertInitialized();
        return this.polygon.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
     */
    getPaths() {
        this._assertInitialized();
        return this.polygon.getPaths();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.polygon.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._paths]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, paths]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { paths: paths || options.paths });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.polygon.setOptions(options);
        });
    }
    _watchForPathChanges() {
        this._paths.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(paths => {
            if (paths) {
                this._assertInitialized();
                this.polygon.setPaths(paths);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.polygon) {
                throw Error('Cannot interact with a Google Map Polygon before it has been ' +
                    'initialized. Please wait for the Polygon to load before trying to interact with it.');
            }
        }
    }
}
MapPolygon.ɵfac = function MapPolygon_Factory(t) { return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapPolygon, selectors: [["map-polygon"]], inputs: { options: "options", paths: "paths" }, outputs: { polygonClick: "polygonClick", polygonDblclick: "polygonDblclick", polygonDrag: "polygonDrag", polygonDragend: "polygonDragend", polygonDragstart: "polygonDragstart", polygonMousedown: "polygonMousedown", polygonMousemove: "polygonMousemove", polygonMouseout: "polygonMouseout", polygonMouseover: "polygonMouseover", polygonMouseup: "polygonMouseup", polygonRightclick: "polygonRightclick" }, exportAs: ["mapPolygon"] });
MapPolygon.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapPolygon.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    paths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    polygonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polygonRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-polygon',
                exportAs: 'mapPolygon'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { polygonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polygonRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */
class MapPolyline {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._path = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
         */
        this.polylineClick = this._eventManager.getLazyEmitter('click');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
         */
        this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
         */
        this.polylineDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
         */
        this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
         */
        this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
         */
        this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
         */
        this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
         */
        this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
         */
        this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
         */
        this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
         */
        this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set path(path) {
        this._path.next(path);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => this.polyline = new google.maps.Polyline(options));
                this._assertInitialized();
                this.polyline.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.polyline);
            });
            this._watchForOptionsChanges();
            this._watchForPathChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.polyline) {
            this.polyline.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.polyline.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.polyline.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
     */
    getPath() {
        this._assertInitialized();
        // @breaking-change 11.0.0 Make the return value nullable.
        return this.polyline.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.polyline.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._path]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, path]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { path: path || options.path });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.polyline.setOptions(options);
        });
    }
    _watchForPathChanges() {
        this._path.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(path => {
            if (path) {
                this._assertInitialized();
                this.polyline.setPath(path);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.polyline) {
                throw Error('Cannot interact with a Google Map Polyline before it has been ' +
                    'initialized. Please wait for the Polyline to load before trying to interact with it.');
            }
        }
    }
}
MapPolyline.ɵfac = function MapPolyline_Factory(t) { return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapPolyline, selectors: [["map-polyline"]], inputs: { options: "options", path: "path" }, outputs: { polylineClick: "polylineClick", polylineDblclick: "polylineDblclick", polylineDrag: "polylineDrag", polylineDragend: "polylineDragend", polylineDragstart: "polylineDragstart", polylineMousedown: "polylineMousedown", polylineMousemove: "polylineMousemove", polylineMouseout: "polylineMouseout", polylineMouseover: "polylineMouseover", polylineMouseup: "polylineMouseup", polylineRightclick: "polylineRightclick" }, exportAs: ["mapPolyline"] });
MapPolyline.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapPolyline.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    polylineClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    polylineRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-polyline',
                exportAs: 'mapPolyline'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { polylineClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], polylineRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */
class MapRectangle {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._eventManager = new MapEventManager(this._ngZone);
        this._options = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
         */
        this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
         */
        this.rectangleClick = this._eventManager.getLazyEmitter('click');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
         */
        this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
         */
        this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
         */
        this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
         */
        this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
         */
        this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
         */
        this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
         */
        this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
         */
        this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
         */
        this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
        /**
         * See
         * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
         */
        this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
    }
    set options(options) {
        this._options.next(options || {});
    }
    set bounds(bounds) {
        this._bounds.next(bounds);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                // We'll bring it back in inside the `MapEventManager` only for the events that the
                // user has subscribed to.
                this._ngZone.runOutsideAngular(() => {
                    this.rectangle = new google.maps.Rectangle(options);
                });
                this._assertInitialized();
                this.rectangle.setMap(this._map.googleMap);
                this._eventManager.setTarget(this.rectangle);
            });
            this._watchForOptionsChanges();
            this._watchForBoundsChanges();
        }
    }
    ngOnDestroy() {
        this._eventManager.destroy();
        this._destroyed.next();
        this._destroyed.complete();
        if (this.rectangle) {
            this.rectangle.setMap(null);
        }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
     */
    getBounds() {
        this._assertInitialized();
        return this.rectangle.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
     */
    getDraggable() {
        this._assertInitialized();
        return this.rectangle.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
     */
    getEditable() {
        this._assertInitialized();
        return this.rectangle.getEditable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
     */
    getVisible() {
        this._assertInitialized();
        return this.rectangle.getVisible();
    }
    _combineOptions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this._options, this._bounds]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([options, bounds]) => {
            const combinedOptions = Object.assign(Object.assign({}, options), { bounds: bounds || options.bounds });
            return combinedOptions;
        }));
    }
    _watchForOptionsChanges() {
        this._options.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.rectangle.setOptions(options);
        });
    }
    _watchForBoundsChanges() {
        this._bounds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(bounds => {
            if (bounds) {
                this._assertInitialized();
                this.rectangle.setBounds(bounds);
            }
        });
    }
    _assertInitialized() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._map.googleMap) {
                throw Error('Cannot access Google Map information before the API has been initialized. ' +
                    'Please wait for the API to load before trying to interact with it.');
            }
            if (!this.rectangle) {
                throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' +
                    'Please wait for the Rectangle to load before trying to interact with it.');
            }
        }
    }
}
MapRectangle.ɵfac = function MapRectangle_Factory(t) { return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapRectangle, selectors: [["map-rectangle"]], inputs: { options: "options", bounds: "bounds" }, outputs: { boundsChanged: "boundsChanged", rectangleClick: "rectangleClick", rectangleDblclick: "rectangleDblclick", rectangleDrag: "rectangleDrag", rectangleDragend: "rectangleDragend", rectangleDragstart: "rectangleDragstart", rectangleMousedown: "rectangleMousedown", rectangleMousemove: "rectangleMousemove", rectangleMouseout: "rectangleMouseout", rectangleMouseover: "rectangleMouseover", rectangleMouseup: "rectangleMouseup", rectangleRightclick: "rectangleRightclick" }, exportAs: ["mapRectangle"] });
MapRectangle.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapRectangle.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundsChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDblclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDragend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleDragstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMousemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMouseout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMouseover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rectangleRightclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-rectangle',
                exportAs: 'mapRectangle'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { boundsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDblclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDragend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleDragstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMousemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMouseout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMouseover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rectangleRightclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */
class MapTrafficLayer {
    constructor(_map, _ngZone) {
        this._map = _map;
        this._ngZone = _ngZone;
        this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Whether the traffic layer refreshes with updated information automatically.
     */
    set autoRefresh(autoRefresh) {
        this._autoRefresh.next(autoRefresh);
    }
    ngOnInit() {
        if (this._map._isBrowser) {
            this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(options => {
                // Create the object outside the zone so its events don't trigger change detection.
                this._ngZone.runOutsideAngular(() => {
                    this.trafficLayer = new google.maps.TrafficLayer(options);
                });
                this._assertInitialized();
                this.trafficLayer.setMap(this._map.googleMap);
            });
            this._watchForAutoRefreshChanges();
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        if (this.trafficLayer) {
            this.trafficLayer.setMap(null);
        }
    }
    _combineOptions() {
        return this._autoRefresh.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(autoRefresh => {
            const combinedOptions = { autoRefresh };
            return combinedOptions;
        }));
    }
    _watchForAutoRefreshChanges() {
        this._combineOptions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(options => {
            this._assertInitialized();
            this.trafficLayer.setOptions(options);
        });
    }
    _assertInitialized() {
        if (!this._map.googleMap) {
            throw Error('Cannot access Google Map information before the API has been initialized. ' +
                'Please wait for the API to load before trying to interact with it.');
        }
        if (!this.trafficLayer) {
            throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' +
                'Please wait for the Traffic Layer to load before trying to interact with it.');
        }
    }
}
MapTrafficLayer.ɵfac = function MapTrafficLayer_Factory(t) { return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MapTrafficLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapTrafficLayer, selectors: [["map-traffic-layer"]], inputs: { autoRefresh: "autoRefresh" }, exportAs: ["mapTrafficLayer"] });
MapTrafficLayer.ctorParameters = () => [
    { type: GoogleMap },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
MapTrafficLayer.propDecorators = {
    autoRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapTrafficLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-traffic-layer',
                exportAs: 'mapTrafficLayer'
            }]
    }], function () { return [{ type: GoogleMap }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { autoRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */
class MapTransitLayer extends MapBaseLayer {
    _initializeObject() {
        this.transitLayer = new google.maps.TransitLayer();
    }
    _setMap() {
        this._assertLayerInitialized();
        this.transitLayer.setMap(this._map.googleMap);
    }
    _unsetMap() {
        if (this.transitLayer) {
            this.transitLayer.setMap(null);
        }
    }
    _assertLayerInitialized() {
        if (!this.transitLayer) {
            throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' +
                'Please wait for the Transit Layer to load before trying to interact with it.');
        }
    }
}
MapTransitLayer.ɵfac = function MapTransitLayer_Factory(t) { return ɵMapTransitLayer_BaseFactory(t || MapTransitLayer); };
MapTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MapTransitLayer, selectors: [["map-transit-layer"]], exportAs: ["mapTransitLayer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMapTransitLayer_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MapTransitLayer);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'map-transit-layer',
                exportAs: 'mapTransitLayer'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const COMPONENTS = [
    GoogleMap,
    MapBaseLayer,
    MapBicyclingLayer,
    MapCircle,
    MapGroundOverlay,
    MapInfoWindow,
    MapKmlLayer,
    MapMarker,
    MapPolygon,
    MapPolyline,
    MapRectangle,
    MapTrafficLayer,
    MapTransitLayer,
];
class GoogleMapsModule {
}
GoogleMapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleMapsModule });
GoogleMapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleMapsModule_Factory(t) { return new (t || GoogleMapsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleMapsModule, { declarations: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer], exports: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ "8fbE":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/stores/store-credentials/store-credentials.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StoreCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreCredentialsComponent", function() { return StoreCredentialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/badges/badges.services */ "3ZTE");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");













class StoreCredentialsComponent {
    constructor(storeServices, badgesServices, activeRouter, router, toaster) {
        this.storeServices = storeServices;
        this.badgesServices = badgesServices;
        this.activeRouter = activeRouter;
        this.router = router;
        this.toaster = toaster;
        this.dropzoneConfig = {
            paramName: 'file',
            maxFilesize: 2,
            autoQueue: false,
            url: '/',
            autoProcessQueue: false,
            multi: false
        };
        this.isLoading = false;
        this.types = [];
        this.badgesList = [];
        this.storeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    ngOnInit() {
        this.store_type = this.router.url.split('/')[1];
        this.activeRouter.params.subscribe(v => this.storeId = v.id);
        if (this.storeId) {
            this.title = 'Edit';
            this.getStore();
        }
        else {
            this.title = 'Add';
        }
    }
    getStore() {
        this.isLoading = true;
        this.storeServices.getStoreCredentials(this.storeId).subscribe(res => {
            this.storeFormGroup.get('email').setValue(res.data['email']);
            this.storeFormGroup.get('mobile').setValue(res.data['mobile']);
            this.storeFormGroup.get('id').setValue(res.data['id']);
        }, error => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    onStorLogoChange(event) {
        this.selectedLogo = event;
    }
    onStorLicenceChange(event) {
        this.selectedLicence = event;
    }
    updateStore() {
        if (this.storeFormGroup.valid) {
            this.isLoading = true;
            const uploadData = new FormData();
            const groupFormData = this.storeFormGroup.value;
            uploadData.append('owner_id', groupFormData.id);
            uploadData.append('email', groupFormData.email);
            uploadData.append('mobile', groupFormData.mobile);
            if (groupFormData.password)
                uploadData.append('password', groupFormData.password);
            this.storeServices.updateStoreAuth(uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.getStore();
                this.router.navigateByUrl('/' + this.store_type);
            }, error => {
                this.toaster.show(error.error.message, 'Error', { status: 'danger' });
                this.isLoading = false;
            }, () => {
                this.isLoading = false;
            });
        }
    }
    getBadgesList() {
        this.badgesServices.getBadgesList("?is_store=true").subscribe(res => {
            this.badgesList = res.data;
        }, error => { }, () => { });
    }
    getTypes() {
        this.storeServices.getStoreTypes().subscribe(res => {
            this.types = res.store_types;
        }, error => { }, () => { });
    }
    backToStores() {
        this.router.navigate([this.store_type]);
    }
}
StoreCredentialsComponent.ɵfac = function StoreCredentialsComponent_Factory(t) { return new (t || StoreCredentialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__["BadgesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"])); };
StoreCredentialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreCredentialsComponent, selectors: [["store-credentials"]], decls: 25, vars: 6, consts: [[3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], [3, "formGroup", "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", "fxLayoutGap", "gappx", 1, "first-row"], [1, "form-control-container", "mb-0", 3, "fxFlex"], ["nbInput", "", "type", "email", "placeholder", "Store Email", "fullWidth", "", "formControlName", "email"], ["nbInput", "", "type", "text", "placeholder", "Store Mobile", "fullWidth", "", "formControlName", "mobile"], ["nbInput", "", "type", "tel", "placeholder", "Store Password", "fullWidth", "", "formControlName", "password"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "click"]], template: function StoreCredentialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mobile *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreCredentialsComponent_Template_button_click_21_listener() { return ctx.backToStores(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreCredentialsComponent_Template_button_click_23_listener() { return ctx.updateStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.storeFormGroup)("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child {\n  padding: 0 10px 0 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child {\n  padding: 0 0 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%] {\n  padding-left: 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  margin: 10px 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-logo[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-licence[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%] {\n  width: 150px !important;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border: 1px solid #eee;\n  object-fit: contain;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .dz-message {\n  margin: 0 !important;\n  width: 100% !important;\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .k-multiselect-wrap.k-floatwrap {\n  background-color: #f7f9fc;\n  border: 1px solid #e4e9f2;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 0 15px;\n  padding-top: 3px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmUtY3JlZGVudGlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS1k7O0VBRUksbUJBQUE7QUFKaEI7QUFNZ0I7O0VBQ0ksZUFBQTtBQUhwQjtBQUtvQjs7RUFDSSxtQkFBQTtBQUZ4QjtBQUtvQjs7RUFDSSxtQkFBQTtBQUZ4QjtBQUtvQjs7RUFDSSxrQkFBQTtBQUZ4QjtBQU9ZO0VBQ0kseUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxtQkFBQTtBQUxwQjtBQVFnQjtFQUNJLGtCQUFBO0FBTnBCO0FBVVk7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBUmhCO0FBVWdCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBUnBCO0FBV2dCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVHBCO0FBZVk7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFiaEI7QUFnQlk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWRoQjtBQWlCWTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFmaEIiLCJmaWxlIjoic3RvcmUtY3JlZGVudGlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbmItY2FyZCB7XG5cbiAgICAgICAgbmItY2FyZC1ib2R5IHtcblxuICAgICAgICAgICAgLmZpcnN0LXJvdyxcbiAgICAgICAgICAgIC5zZWNvbmQtcm93IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuYi1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgJi51cGxvYWQtbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi51cGxvYWQtbGljZW5jZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaG93LWltYWdlcyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIC5kei1tZXNzYWdlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuay1tdWx0aXNlbGVjdC13cmFwLmstZmxvYXR3cmFwIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZjO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU5ZjI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5iLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreCredentialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'store-credentials',
                templateUrl: './store-credentials.component.html',
                styleUrls: ['./store-credentials.component.scss']
            }]
    }], function () { return [{ type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"] }, { type: _services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__["BadgesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }]; }, null); })();


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

/***/ "G0j2":
/*!***********************************************************************!*\
  !*** ./src/app/pages/stores/store-address/store-address.component.ts ***!
  \***********************************************************************/
/*! exports provided: StoreAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreAddressComponent", function() { return StoreAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared/shared-api-service.service */ "BKCX");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/map.component */ "/Twm");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
















const _c0 = ["addressMap"];
function StoreAddressComponent_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r2.name_en);
} }
class StoreAddressComponent {
    constructor(storeServices, activeRouter, route, toaster, sharedApi) {
        this.storeServices = storeServices;
        this.activeRouter = activeRouter;
        this.route = route;
        this.toaster = toaster;
        this.sharedApi = sharedApi;
        this.isLoading = false;
        this.storeAddressFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "seller_id": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            "address": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "city_id": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "latitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            "longitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            "building_no": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "landmark": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            "main_street": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "side_street": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        this.activeRouter.params.subscribe(v => this.storeId = v.id);
        if (this.storeId) {
            this.getAllCities();
            this.getAddress();
        }
    }
    getAddress() {
        this.isLoading = true;
        this.storeServices.getStorAddress(this.storeId).subscribe(res => {
            this.storeAddressFormGroup.setValue(res.data);
            this.addressMap.setLatLng(res.data);
        }, error => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    updateAddress() {
        debugger;
        if (this.storeAddressFormGroup.valid) {
            this.isLoading = true;
            let formValue = this.storeAddressFormGroup.value;
            formValue.latitude = this.addressMap.getLatLng().lat;
            formValue.longitude = this.addressMap.getLatLng().lng;
            this.storeServices.updateStoreAddress(formValue).subscribe(res => {
                this.toaster.show(res['message'], 'Success', { status: 'success' });
                this.route.navigateByUrl('/stores');
            }, error => {
                this.toaster.show(error.error.message, 'Error', { status: 'danger' });
                this.isLoading = false;
            }, () => {
                this.isLoading = false;
            });
        }
    }
    getAllCities() {
        this.sharedApi.getCities().subscribe(res => {
            this.cities = res.data;
        }, error => { }, () => { });
    }
    backToStores() {
        this.route.navigate(['stores']);
    }
}
StoreAddressComponent.ɵfac = function StoreAddressComponent_Factory(t) { return new (t || StoreAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiServiceService"])); };
StoreAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreAddressComponent, selectors: [["store-address"]], viewQuery: function StoreAddressComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addressMap = _t.first);
    } }, decls: 34, vars: 12, consts: [[3, "nbSpinner"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], [3, "formGroup", "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap", "gappx", 1, "first-row"], [1, "form-control-container", 3, "fxFlex"], ["nbInput", "", "type", "text", "placeholder", "Address Name", "fullWidth", "", "formControlName", "address"], ["placeholder", "City", "formControlName", "city_id"], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "type", "text", "placeholder", "Main Street", "fullWidth", "", "formControlName", "main_street"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "second-row"], ["nbInput", "", "type", "text", "placeholder", "Building No", "fullWidth", "", "formControlName", "building_no"], ["nbInput", "", "type", "text", "placeholder", "Landmark", "fullWidth", "", "formControlName", "landmark"], ["nbInput", "", "type", "text", "placeholder", "Side Street", "fullWidth", "", "formControlName", "side_street"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "map-container", 3, "fxFlex"], [3, "fxFlex"], ["addressMap", ""], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "click"], [3, "value"]], template: function StoreAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StoreAddressComponent_nb_option_10_Template, 2, 2, "nb-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Selecy your store location on the map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "address-map", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreAddressComponent_Template_button_click_30_listener() { return ctx.backToStores(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreAddressComponent_Template_button_click_32_listener() { return ctx.updateAddress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.storeAddressFormGroup)("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child {\n  padding: 0 10px 0 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child {\n  padding: 0 0 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%] {\n  padding-left: 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  margin: 10px 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-logo[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-licence[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .dz-message {\n  margin: 0 !important;\n  width: 100% !important;\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .k-multiselect-wrap.k-floatwrap {\n  background-color: #f7f9fc;\n  border: 1px solid #e4e9f2;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 0 15px;\n  padding-top: 3px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmUtYWRkcmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLWTs7RUFFSSxtQkFBQTtBQUpoQjtBQU1nQjs7RUFDSSxlQUFBO0FBSHBCO0FBS29COztFQUNJLG1CQUFBO0FBRnhCO0FBS29COztFQUNJLG1CQUFBO0FBRnhCO0FBS29COztFQUNJLGtCQUFBO0FBRnhCO0FBT1k7RUFDSSx5QkFBQTtBQUxoQjtBQU9nQjtFQUNJLG1CQUFBO0FBTHBCO0FBUWdCO0VBQ0ksa0JBQUE7QUFOcEI7QUFZWTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQVZoQjtBQWFZO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFYaEI7QUFjWTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFaaEIiLCJmaWxlIjoic3RvcmUtYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBuYi1jYXJkIHtcblxuICAgICAgICBuYi1jYXJkLWJvZHkge1xuXG4gICAgICAgICAgICAuZmlyc3Qtcm93LFxuICAgICAgICAgICAgLnNlY29uZC1yb3cge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5iLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAmLnVwbG9hZC1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnVwbG9hZC1saWNlbmNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAuZHotbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmstbXVsdGlzZWxlY3Qtd3JhcC5rLWZsb2F0d3JhcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlOWYyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'store-address',
                templateUrl: './store-address.component.html',
                styleUrls: ['./store-address.component.scss']
            }]
    }], function () { return [{ type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _services_shared_shared_api_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiServiceService"] }]; }, { addressMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addressMap']
        }] }); })();


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

/***/ "OSBj":
/*!***********************************************!*\
  !*** ./src/app/pages/stores/stores.module.ts ***!
  \***********************************************/
/*! exports provided: StoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresModule", function() { return StoresModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit-store/add-edit-store.component */ "SgUk");
/* harmony import */ var _stores_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores-routing.module */ "XO6T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@theme/theme.module */ "vTDv");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _index_stores_index_stores_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-stores/index-stores.module */ "ejkT");
/* harmony import */ var _store_info_store_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store-info/store-info.component */ "xcOz");
/* harmony import */ var _store_address_store_address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store-address/store-address.component */ "G0j2");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map/map.component */ "/Twm");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _store_credentials_store_credentials_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store-credentials/store-credentials.component */ "8fbE");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");

















class StoresModule {
}
StoresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StoresModule });
StoresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StoresModule_Factory(t) { return new (t || StoresModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _stores_routing_module__WEBPACK_IMPORTED_MODULE_3__["StoresRoutingModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__["DropDownsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
            _index_stores_index_stores_module__WEBPACK_IMPORTED_MODULE_9__["IndexStoreModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoresModule, { declarations: [_add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_2__["AddEditStoreComponent"], _store_info_store_info_component__WEBPACK_IMPORTED_MODULE_10__["StoreInfoComponent"], _store_address_store_address_component__WEBPACK_IMPORTED_MODULE_11__["StoreAddressComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"], _store_credentials_store_credentials_component__WEBPACK_IMPORTED_MODULE_14__["StoreCredentialsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _stores_routing_module__WEBPACK_IMPORTED_MODULE_3__["StoresRoutingModule"],
        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__["DropDownsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
        _index_stores_index_stores_module__WEBPACK_IMPORTED_MODULE_9__["IndexStoreModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_2__["AddEditStoreComponent"], _store_info_store_info_component__WEBPACK_IMPORTED_MODULE_10__["StoreInfoComponent"], _store_address_store_address_component__WEBPACK_IMPORTED_MODULE_11__["StoreAddressComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"], _store_credentials_store_credentials_component__WEBPACK_IMPORTED_MODULE_14__["StoreCredentialsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _stores_routing_module__WEBPACK_IMPORTED_MODULE_3__["StoresRoutingModule"],
                    _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__["DropDownsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_8__["KendoCustomeGridModule"],
                    _index_stores_index_stores_module__WEBPACK_IMPORTED_MODULE_9__["IndexStoreModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsModule"],
                ]
            }]
    }], null, null); })();


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

/***/ "SgUk":
/*!*************************************************************************!*\
  !*** ./src/app/pages/stores/add-edit-store/add-edit-store.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddEditStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditStoreComponent", function() { return AddEditStoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _store_info_store_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store-info/store-info.component */ "xcOz");
/* harmony import */ var _store_credentials_store_credentials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store-credentials/store-credentials.component */ "8fbE");






class AddEditStoreComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AddEditStoreComponent.ɵfac = function AddEditStoreComponent_Factory(t) { return new (t || AddEditStoreComponent)(); };
AddEditStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddEditStoreComponent, selectors: [["app-add-edit-store"]], decls: 6, vars: 4, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 3, "fxFlex"], [3, "fxFlex"], ["tabTitle", "Info"], ["tabTitle", "Credentials"]], template: function AddEditStoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "store-info", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "store-credentials", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabComponent"], _store_info_store_info_component__WEBPACK_IMPORTED_MODULE_3__["StoreInfoComponent"], _store_credentials_store_credentials_component__WEBPACK_IMPORTED_MODULE_4__["StoreCredentialsComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  height: calc(100% - 47px);\n}\n[_nghost-%COMP%]     nb-card {\n  margin-bottom: 0 !important;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWVkaXQtc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUjtBQUVJO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQUFSO0FBSVE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7QUFGWiIsImZpbGUiOiJhZGQtZWRpdC1zdG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBuYi10YWJzZXQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgbmItdGFiIHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ3cHgpO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAgIG5iLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-store',
                templateUrl: './add-edit-store.component.html',
                styleUrls: ['./add-edit-store.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XO6T":
/*!*******************************************************!*\
  !*** ./src/app/pages/stores/stores-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresRoutingModule", function() { return StoresRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _index_stores_index_stores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-stores/index-stores.component */ "05ij");
/* harmony import */ var _add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-store/add-edit-store.component */ "SgUk");
/* harmony import */ var _guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guards/only-logged-in-users.guard */ "UzH7");








const routes = [{
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _index_stores_index_stores_component__WEBPACK_IMPORTED_MODULE_3__["IndexStoresComponent"], data: { is_verified: 1 } },
            { path: 'pending', component: _index_stores_index_stores_component__WEBPACK_IMPORTED_MODULE_3__["IndexStoresComponent"], data: { is_verified: 0 } },
            { path: 'create-store', component: _add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_4__["AddEditStoreComponent"] },
            { path: 'edit/:id', component: _add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_4__["AddEditStoreComponent"] },
            {
                path: 'attachments',
                loadChildren: () => __webpack_require__.e(/*! import() | attachments-attachments-module */ "attachments-attachments-module").then(__webpack_require__.bind(null, /*! ./attachments/attachments.module */ "m4j/")).then(m => m.AttachmentsModule), canActivate: [_guards_only_logged_in_users_guard__WEBPACK_IMPORTED_MODULE_5__["OnlyLoggedInUsers"]]
            },
        ],
    }];
class StoresRoutingModule {
}
StoresRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StoresRoutingModule });
StoresRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function StoresRoutingModule_Factory(t) { return new (t || StoresRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StoresRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StoresRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ejkT":
/*!******************************************************************!*\
  !*** ./src/app/pages/stores/index-stores/index-stores.module.ts ***!
  \******************************************************************/
/*! exports provided: IndexStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexStoreModule", function() { return IndexStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/theme.module */ "vTDv");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _index_stores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-stores.component */ "05ij");










class IndexStoreModule {
}
IndexStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IndexStoreModule });
IndexStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function IndexStoreModule_Factory(t) { return new (t || IndexStoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IndexStoreModule, { declarations: [_index_stores_component__WEBPACK_IMPORTED_MODULE_8__["IndexStoresComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_index_stores_component__WEBPACK_IMPORTED_MODULE_8__["IndexStoresComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndexStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_5__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_6__["KendoCustomeGridModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ],
                declarations: [_index_stores_component__WEBPACK_IMPORTED_MODULE_8__["IndexStoresComponent"]],
                exports: [_index_stores_component__WEBPACK_IMPORTED_MODULE_8__["IndexStoresComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lOx6":
/*!***********************************************************!*\
  !*** ./src/app/pages/stores/index-stores/store.column.ts ***!
  \***********************************************************/
/*! exports provided: StoreColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreColumn", function() { return StoreColumn; });
const StoreColumn = [
    {
        dataType: 'text',
        id: 'id',
        name: 'ID',
        field: 'id',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
        width: 100,
    },
    {
        dataType: 'text',
        id: 'name',
        name: 'Name',
        field: 'name',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'mobile',
        name: 'Mobile',
        field: 'mobile',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'owner_email',
        name: 'Owner Email',
        field: 'owner_email',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'created_at',
        name: 'Registration date',
        field: 'created_at',
        filterType: 'string',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'chips',
        chipTypeName: 'name_en',
        id: 'categories',
        name: 'Categories',
        field: 'categories',
        fieldSearch: 'category',
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
        width: 300
    },
    // {
    //     dataType: 'text',
    //     id: 'type',
    //     name: 'Type',
    //     field: 'type',
    //     filterType: 'menu',
    //     filterMenu: [],
    //     hidden: false,
    //     filterOperator: 'EQUAL',
    // },
    {
        dataType: 'text',
        id: 'city',
        name: 'City',
        field: 'city',
        filterType: 'autoComplete',
        autoTextField: 'name_en',
        autoValueField: 'id',
        hidden: false,
        filterOperator: 'EQUAL',
    },
    {
        dataType: 'text',
        id: 'activation',
        name: 'Status',
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
                action: 'verify',
                color: 'primary',
                id: 'verify-action',
                hidden: false,
                toolTip: 'Verify',
                icon: 'done',
                buttonType: 'icon',
                disabled: () => false,
            },
            {
                action: 'view-attachments',
                color: 'primary',
                id: 'view-attachments-action',
                hidden: false,
                toolTip: 'View Attachments',
                icon: 'attachment',
                buttonType: 'icon',
                disabled: () => false,
            },
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

/***/ "xcOz":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stores/store-info/store-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: StoreInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreInfoComponent", function() { return StoreInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/badges/badges.services */ "3ZTE");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "4lYH");














class StoreInfoComponent {
    constructor(storeServices, badgesServices, activeRouter, router, toaster) {
        this.storeServices = storeServices;
        this.badgesServices = badgesServices;
        this.activeRouter = activeRouter;
        this.router = router;
        this.toaster = toaster;
        this.dropzoneConfig = {
            paramName: 'file',
            maxFilesize: 2,
            autoQueue: false,
            url: '/',
            autoProcessQueue: false,
            multi: false
        };
        this.isLoading = false;
        this.types = [];
        this.badgesList = [];
        this.autoLoad = false;
        this.storeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            // mobile: new FormControl(null, Validators.required),
            // store_type_id: new FormControl(null, Validators.required),
            // logo: new FormControl(),
            // licence: new FormControl(),
            // cover: new FormControl(),
            // is_brand: new FormControl(),
            activation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            // is_main_branch: new FormControl(),
            badges_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            // password:new FormControl(''),
            is_store_has_delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        this.store_type = this.router.url.split('/')[1];
        console.log(this.store_type);
        this.getTypes();
        this.getBadgesList();
        this.activeRouter.params.subscribe(v => this.storeId = v.id);
        if (this.storeId) {
            this.title = 'Edit';
            this.getStore();
        }
        else {
            this.title = 'Add';
        }
    }
    getStore() {
        this.isLoading = true;
        this.storeServices.getStore(this.storeId).subscribe(res => {
            // if (!res.data['is_brand']){
            //   res.data['is_brand'] = false;
            // }
            // if (!res.data['is_main_branch']){
            //   res.data['is_main_branch'] = false;
            // }
            this.storeFormGroup.get('name').setValue(res.data['name']);
            this.storeFormGroup.get('id').setValue(res.data['id']);
            // this.storeFormGroup.get('store_type_id').setValue(res.data['store_type_id']);
            // this.storeFormGroup.get('mobile').setValue(res.data['mobile']);
            this.storeFormGroup.get('is_store_has_delivery').setValue(res.data['is_store_has_delivery']);
            this.storeFormGroup.get('description').setValue(res.data['description']);
            this.storeFormGroup.get('activation').setValue(res.data['activation']);
            this.storeFormGroup.get('badges_id').setValue(res.data['badges']);
            // console.log(res.data['badges']);
        }, error => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    onStorLogoChange(event) {
        this.selectedLogo = event;
    }
    onStorLicenceChange(event) {
        this.selectedLicence = event;
    }
    updateStore() {
        if (this.storeFormGroup.valid) {
            this.isLoading = true;
            const uploadData = new FormData();
            const groupFormData = this.storeFormGroup.value;
            uploadData.append('id', groupFormData.id);
            uploadData.append('name', groupFormData.name);
            // uploadData.append('password', groupFormData.password);
            uploadData.append('description', groupFormData.description);
            // uploadData.append('mobile', groupFormData.mobile);
            // uploadData.append('store_type_id', groupFormData.store_type_id);
            groupFormData.badges_id ? uploadData.append('badges_id', JSON.stringify(groupFormData.badges_id.map((ele) => ele.id))) : false;
            // uploadData.append('badges_id', groupFormData.badges_id);
            // uploadData.append('is_brand', groupFormData.is_brand ? groupFormData.is_brand : false);
            // uploadData.append('is_main_branch', groupFormData.is_main_branch ? groupFormData.is_main_branch : false);
            uploadData.append('is_store_has_delivery', groupFormData.is_store_has_delivery ? groupFormData.is_store_has_delivery : false);
            uploadData.append('activation', groupFormData.activation ? groupFormData.activation : false);
            if (this.selectedLogo) {
                uploadData.append('logo', this.selectedLogo, this.selectedLogo.name);
            }
            if (this.selectedLicence) {
                uploadData.append('licence', this.selectedLicence, this.selectedLicence.name);
            }
            this.storeServices.updateStoreInfo(uploadData).subscribe(res => {
                this.toaster.show(res['msg'], 'Success', { status: 'success' });
                this.getStore();
                this.router.navigateByUrl('/' + this.store_type);
            }, error => {
                this.toaster.show(error.error.message, 'Error', { status: 'danger' });
                this.isLoading = false;
            }, () => {
                this.isLoading = false;
            });
        }
    }
    getBadgesList(meta = '') {
        this.badgesServices.getBadgesList("?is_store=true").subscribe(res => {
            this.badgesList = res.data;
        }, error => {
            this.autoLoad = false;
        }, () => {
            this.autoLoad = false;
        });
    }
    getTypes() {
        this.storeServices.getStoreTypes().subscribe(res => {
            this.types = res.store_types;
        }, error => { }, () => { });
    }
    backToStores() {
        this.router.navigate([this.store_type]);
    }
    filterChange(value) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.autoLoad = true;
            const meta = value ? "name_en=" + value : '';
            this.getBadgesList(meta);
        }, 500);
    }
    removeSelected() {
    }
}
StoreInfoComponent.ɵfac = function StoreInfoComponent_Factory(t) { return new (t || StoreInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__["BadgesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"])); };
StoreInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreInfoComponent, selectors: [["store-info"]], decls: 31, vars: 10, consts: [[3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], ["autocomplete", "new-password", 3, "formGroup", "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", "fxLayoutGap", "gappx", 1, "first-row"], [1, "form-control-container", "mb-0", 3, "fxFlex"], ["nbInput", "", "type", "text", "placeholder", "Store Name", "fullWidth", "", "formControlName", "name"], [1, "form-control-container"], ["nbInput", "", "type", "text", "placeholder", "Description", "fullWidth", "", "formControlName", "description"], ["formControlName", "badges_id", "textField", "name_en", "valueField", "id", "placeholder", "Select Badges", 3, "data", "filterable", "loading", "open"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "second-row"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "form-control-container", "mb-0", 3, "fxFlex"], ["formControlName", "is_store_has_delivery"], ["formControlName", "activation"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "click"]], template: function StoreInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Badges *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "kendo-multiselect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("open", function StoreInfoComponent_Template_kendo_multiselect_open_19_listener() { return ctx.removeSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Has delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreInfoComponent_Template_button_click_27_listener() { return ctx.backToStores(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreInfoComponent_Template_button_click_29_listener() { return ctx.updateStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.storeFormGroup)("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.badgesList)("filterable", true)("loading", ctx.autoLoad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_7__["MultiSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child {\n  padding: 0 10px 0 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child {\n  padding: 0 0 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%] {\n  padding-left: 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  margin: 10px 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-logo[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-licence[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%] {\n  width: 150px !important;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border: 1px solid #eee;\n  object-fit: contain;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .dz-message {\n  margin: 0 !important;\n  width: 100% !important;\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .k-multiselect-wrap.k-floatwrap {\n  background-color: #f7f9fc;\n  border: 1px solid #e4e9f2;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 0 15px;\n  padding-top: 3px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RvcmUtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLWTs7RUFFSSxtQkFBQTtBQUpoQjtBQU1nQjs7RUFDSSxlQUFBO0FBSHBCO0FBS29COztFQUNJLG1CQUFBO0FBRnhCO0FBS29COztFQUNJLG1CQUFBO0FBRnhCO0FBS29COztFQUNJLGtCQUFBO0FBRnhCO0FBT1k7RUFDSSx5QkFBQTtBQUxoQjtBQU9nQjtFQUNJLG1CQUFBO0FBTHBCO0FBUWdCO0VBQ0ksa0JBQUE7QUFOcEI7QUFVWTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUFSaEI7QUFVZ0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFScEI7QUFXZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFUcEI7QUFlWTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQWJoQjtBQWdCWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZGhCO0FBaUJZO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtBQWZoQiIsImZpbGUiOiJzdG9yZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIG5iLWNhcmQge1xuXG4gICAgICAgIG5iLWNhcmQtYm9keSB7XG5cbiAgICAgICAgICAgIC5maXJzdC1yb3csXG4gICAgICAgICAgICAuc2Vjb25kLXJvdyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbmItY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICYudXBsb2FkLWxvZ28ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYudXBsb2FkLWxpY2VuY2Uge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2hvdy1pbWFnZXMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAuZHotbWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmstbXVsdGlzZWxlY3Qtd3JhcC5rLWZsb2F0d3JhcCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlOWYyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'store-info',
                templateUrl: './store-info.component.html',
                styleUrls: ['./store-info.component.scss']
            }]
    }], function () { return [{ type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"] }, { type: _services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__["BadgesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-stores-stores-module.js.map