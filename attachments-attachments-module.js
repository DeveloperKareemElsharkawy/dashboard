(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attachments-attachments-module"],{

/***/ "EtwW":
/*!************************************************************************!*\
  !*** ./src/app/pages/stores/attachments/attachments-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AttachmentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsRoutingModule", function() { return AttachmentsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo/logo.component */ "tJ9E");





const routes = [{
        path: '',
        // component: SidebarComponent,
        children: [
            { path: ':id', component: _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"] },
        ],
    }];
class AttachmentsRoutingModule {
}
AttachmentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AttachmentsRoutingModule });
AttachmentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AttachmentsRoutingModule_Factory(t) { return new (t || AttachmentsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AttachmentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttachmentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "NNzQ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/stores/attachments/index/index.component.ts ***!
  \*******************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.component */ "tJ9E");





class IndexComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-store-attachment-index"]], decls: 8, vars: 5, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx", 3, "fxFlex"], [3, "fxFlex"], ["tabTitle", "Attachment Logo"], ["tabTitle", "Attachment Cover"], ["tabTitle", "Attachment Linence"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "store-attachment-logo", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "store-attachment-logo", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "store-attachment-logo", 1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  height: calc(100% - 47px);\n}\n[_nghost-%COMP%]     nb-card {\n  margin-bottom: 0 !important;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0FBQ1I7QUFFSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUFBUjtBQUlRO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0FBRloiLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgbmItdGFic2V0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIG5iLXRhYiB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0N3B4KTtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAge1xuICAgICAgICBuYi1jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-store-attachment-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m4j/":
/*!****************************************************************!*\
  !*** ./src/app/pages/stores/attachments/attachments.module.ts ***!
  \****************************************************************/
/*! exports provided: AttachmentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsModule", function() { return AttachmentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _attachments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attachments-routing.module */ "EtwW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/theme.module */ "vTDv");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/kendo-custome-grid/kendoCustomeGrid.module */ "thjA");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logo/logo.component */ "tJ9E");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "NNzQ");












class AttachmentsModule {
}
AttachmentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AttachmentsModule });
AttachmentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AttachmentsModule_Factory(t) { return new (t || AttachmentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _attachments_routing_module__WEBPACK_IMPORTED_MODULE_2__["AttachmentsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_7__["KendoCustomeGridModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AttachmentsModule, { declarations: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _attachments_routing_module__WEBPACK_IMPORTED_MODULE_2__["AttachmentsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_7__["KendoCustomeGridModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttachmentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _attachments_routing_module__WEBPACK_IMPORTED_MODULE_2__["AttachmentsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _shared_kendo_custome_grid_kendoCustomeGrid_module__WEBPACK_IMPORTED_MODULE_7__["KendoCustomeGridModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tJ9E":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stores/attachments/logo/logo.component.ts ***!
  \*****************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/badges/badges.services */ "3ZTE");
/* harmony import */ var _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/stores/stores.services */ "gpQZ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");














function LogoComponent_nb_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
function LogoComponent_nb_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
} }
function LogoComponent_nb_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
class LogoComponent {
    constructor(storeServices, badgesServices, activeRouter, router, toaster, activatedroute) {
        this.storeServices = storeServices;
        this.badgesServices = badgesServices;
        this.activeRouter = activeRouter;
        this.router = router;
        this.toaster = toaster;
        this.activatedroute = activatedroute;
        this.dropzoneConfig = {
            paramName: 'file',
            maxFilesize: 2,
            autoQueue: false,
            url: '/',
            autoProcessQueue: false,
            multi: false
        };
        this.isLoading = false;
        this.types = [
            { value: -1, name: 'Pending' },
            { value: false, name: 'Rejected' },
            { value: true, name: 'Accepted' },
        ];
        this.badgesList = [];
        this.storeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            is_verified_logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            cover: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            is_verified_cover: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            licence: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            is_verified_licence: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
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
        this.storeServices.getStore(this.storeId).subscribe(res => {
            this.storeFormGroup.get('id').setValue(res.data['id']);
            this.storeFormGroup.get('logo').setValue(res.data['logo']);
            this.storeFormGroup.get('cover').setValue(res.data['cover']);
            this.storeFormGroup.get('licence').setValue(res.data['licence']);
            this.storeFormGroup.get('is_verified_logo').setValue((res.data['is_verified_logo'] === null) ? -1 : res.data['is_verified_logo']);
            this.storeFormGroup.get('is_verified_cover').setValue((res.data['is_verified_cover'] === null) ? -1 : res.data['is_verified_cover']);
            this.storeFormGroup.get('is_verified_licence').setValue((res.data['is_verified_licence'] === null) ? -1 : res.data['is_verified_licence']);
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
            uploadData.append('is_verified_logo', (groupFormData.is_verified_logo == -1) ? null : groupFormData.is_verified_logo);
            uploadData.append('is_verified_cover', (groupFormData.is_verified_cover == -1) ? null : groupFormData.is_verified_cover);
            uploadData.append('is_verified_licence', (groupFormData.is_verified_licence == -1) ? null : groupFormData.is_verified_licence);
            // console.log(groupFormData.is_verified_logo);
            // console.log(groupFormData.is_verified_cover);
            // console.log(groupFormData.is_verified_licence);
            // uploadData.append('is_store_has_delivery', groupFormData.is_store_has_delivery ? groupFormData.is_store_has_delivery : false);
            // uploadData.append('activation', groupFormData.activation ? groupFormData.activation : false);
            this.storeServices.updateStoreDocuments(uploadData).subscribe(res => {
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
    backToStores() {
        this.router.navigate([this.store_type]);
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__["BadgesServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["store-attachment-logo"]], decls: 35, vars: 16, consts: [[3, "nbSpinner"], [1, "form-group"], ["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], [3, "formGroup", "fxFlex"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", "fxLayoutGap", "gappx", 1, "first-row"], [1, "form-control-container", "img-container", "show-images", 3, "fxFlex"], ["alt", "logo", 2, "width", "100%", 3, "src"], ["alt", "cover", 2, "width", "100%", 3, "src"], ["alt", "licence", 2, "width", "100%", 3, "src"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", "fxLayoutGap", "gappx", 1, "second-row"], [1, "form-control-container", "mb-0", 3, "fxFlex"], ["placeholder", "Store Logo Verified Status", "formControlName", "is_verified_logo"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Store Cover Verified Status", "formControlName", "is_verified_cover"], ["placeholder", "Store Licence Verified Status", "formControlName", "is_verified_licence"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 2, "float", "right", 3, "click"], [3, "value"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Licence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LogoComponent_nb_option_23_Template, 2, 2, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nb-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LogoComponent_nb_option_26_Template, 2, 2, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LogoComponent_nb_option_29_Template, 2, 2, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoComponent_Template_button_click_31_listener() { return ctx.backToStores(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoComponent_Template_button_click_33_listener() { return ctx.updateStore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.store_type, " Attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.storeFormGroup)("fxFlex", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.storeFormGroup.get("logo").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.storeFormGroup.get("cover").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.storeFormGroup.get("licence").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"]], styles: ["[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:first-child {\n  padding: 0 10px 0 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]:last-child {\n  padding: 0 0 0 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%], [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .second-row[_ngcontent-%COMP%]   .form-control-container[_ngcontent-%COMP%]   nb-checkbox[_ngcontent-%COMP%] {\n  padding-left: 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  margin: 10px 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-logo[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .img-container.upload-licence[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%] {\n  width: 150px !important;\n  padding-right: 20px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .show-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border: 1px solid #eee;\n  object-fit: contain;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .dz-message {\n  margin: 0 !important;\n  width: 100% !important;\n  max-width: none !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .k-multiselect-wrap.k-floatwrap {\n  background-color: #f7f9fc;\n  border: 1px solid #e4e9f2;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 0 15px;\n  padding-top: 3px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS1k7O0VBRUksbUJBQUE7QUFKaEI7QUFNZ0I7O0VBQ0ksZUFBQTtBQUhwQjtBQUtvQjs7RUFDSSxtQkFBQTtBQUZ4QjtBQUtvQjs7RUFDSSxtQkFBQTtBQUZ4QjtBQUtvQjs7RUFDSSxrQkFBQTtBQUZ4QjtBQU9ZO0VBQ0kseUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxtQkFBQTtBQUxwQjtBQVFnQjtFQUNJLGtCQUFBO0FBTnBCO0FBVVk7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FBUmhCO0FBVWdCO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBUnBCO0FBV2dCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVHBCO0FBZVk7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFiaEI7QUFnQlk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWRoQjtBQWlCWTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFmaEIiLCJmaWxlIjoibG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBuYi1jYXJkIHtcblxuICAgICAgICBuYi1jYXJkLWJvZHkge1xuXG4gICAgICAgICAgICAuZmlyc3Qtcm93LFxuICAgICAgICAgICAgLnNlY29uZC1yb3cge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgICAgICAuZm9ybS1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5iLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAmLnVwbG9hZC1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLnVwbG9hZC1saWNlbmNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNob3ctaW1hZ2VzIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgLmR6LW1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rLW11bHRpc2VsZWN0LXdyYXAuay1mbG9hdHdyYXAge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmM7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTlmMjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmItc2VsZWN0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'store-attachment-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return [{ type: _services_stores_stores_services__WEBPACK_IMPORTED_MODULE_5__["StoresServices"] }, { type: _services_badges_badges_services__WEBPACK_IMPORTED_MODULE_4__["BadgesServices"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=attachments-attachments-module.js.map