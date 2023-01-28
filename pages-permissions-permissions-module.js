(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-permissions-permissions-module"],{

/***/ "FXUP":
/*!************************************************************!*\
  !*** ./src/app/pages/permissions/permissions.component.ts ***!
  \************************************************************/
/*! exports provided: PermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsComponent", function() { return PermissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_permissions_permissions_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/permissions/permissions.services */ "U5iD");
/* harmony import */ var _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/roles/roles.services */ "Rt6e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _permissions_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions.pipe */ "ZysB");








function PermissionsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.name);
} }
function PermissionsComponent_tr_9_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PermissionsComponent_tr_9_td_4_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const role_r5 = ctx.$implicit; const permission_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.togglePermission(permission_r3.id, role_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r5 = ctx.$implicit;
    const permission_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.check(role_r5.id, permission_r3.id));
} }
function PermissionsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "customPipePermissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PermissionsComponent_tr_9_td_4_Template, 3, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, permission_r3.permission_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rolesData);
} }
class PermissionsComponent {
    constructor(permissionService, roleServices) {
        this.permissionService = permissionService;
        this.roleServices = roleServices;
        this.permissionsData = [];
        this.rolesData = [];
        this.rolesPermission = [];
    }
    ngOnInit() {
        this.getPermissions();
        this.getRoles();
        this.rolePermissions();
    }
    getPermissions() {
        this.permissionService.getPermissions().subscribe(res => {
            this.permissionsData = res['data'];
        }, error => {
        });
    }
    getRoles() {
        this.roleServices.getRoles().subscribe(res => {
            this.rolesData = res['roles'];
        }, error => {
        });
    }
    togglePermission(permissionId, roleId) {
        const data = {
            role_id: roleId,
            permission_id: permissionId
        };
        this.permissionService.togglePermission(data).subscribe(res => {
        });
    }
    rolePermissions() {
        this.permissionService.getRolesPermissions().subscribe(res => {
            this.rolesPermission = res['data'];
        });
    }
    check(roleId, permissionId) {
        let obj = this.rolesPermission.find(obj => (obj.role_id === roleId
            &&
                obj.permission_id === permissionId));
        if (obj) {
            return true;
        }
        return false;
    }
}
PermissionsComponent.ɵfac = function PermissionsComponent_Factory(t) { return new (t || PermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_permissions_permissions_services__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roles_roles_services__WEBPACK_IMPORTED_MODULE_2__["RolesServices"])); };
PermissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermissionsComponent, selectors: [["app-permissions"]], decls: 10, vars: 2, consts: [[1, "bg-light"], [1, "table-container"], [1, "table", "table-hover", "table-bordered", "table-responsive-sm", "table-sm"], [1, "header-titles", "c-b"], ["scope", " col", 1, "text-center", "py-2"], ["scope", "col", "class", "text-center  py-2", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col", 1, "text-center", "py-2"], ["scope", "row"], [1, "form-check", "text-center"], ["type", "checkbox", "id", "blankCheckbox", "value", "option1", "aria-label", "...", 1, "form-check-input", "position-static", 3, "checked", "click"]], template: function PermissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Permissions / Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PermissionsComponent_td_7_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PermissionsComponent_tr_9_Template, 5, 4, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rolesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.permissionsData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_permissions_pipe__WEBPACK_IMPORTED_MODULE_4__["PermissionsPipe"]], styles: [".header-titles[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #9ea0a5;\n}\n\n.table[_ngcontent-%COMP%] {\n  box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.04);\n  border-style: hidden;\n  margin-bottom: 5px !important;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJwZXJtaXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10aXRsZXMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOWVhMGE1O1xufVxuXG4udGFibGUge1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permissions',
                templateUrl: './permissions.component.html',
                styleUrls: ['./permissions.component.css']
            }]
    }], function () { return [{ type: _services_permissions_permissions_services__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"] }, { type: _services_roles_roles_services__WEBPACK_IMPORTED_MODULE_2__["RolesServices"] }]; }, null); })();


/***/ }),

/***/ "G7dR":
/*!*****************************************************************!*\
  !*** ./src/app/pages/permissions/permissions-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PermissionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsRoutingModule", function() { return PermissionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _permissions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions.component */ "FXUP");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");







const routes = [
    {
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        children: [
            {
                path: '',
                component: _permissions_component__WEBPACK_IMPORTED_MODULE_2__["PermissionsComponent"],
                canActivate: [
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]
                ],
                data: {
                    permissions: {
                        // only: appPermissions.PERMISSIONS.SHOW,
                        redirectTo: '/'
                    }
                }
            }
        ],
    }
];
class PermissionsRoutingModule {
}
PermissionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PermissionsRoutingModule });
PermissionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PermissionsRoutingModule_Factory(t) { return new (t || PermissionsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PermissionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZysB":
/*!*******************************************************!*\
  !*** ./src/app/pages/permissions/permissions.pipe.ts ***!
  \*******************************************************/
/*! exports provided: PermissionsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPipe", function() { return PermissionsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PermissionsPipe {
    transform(value, ...args) {
        let test = value.replace(/([a-z])([A-Z])/g, "$1 $2");
        test = test.toLowerCase().replace(/\b[a-z]/g, function (letter) {
            return letter.toUpperCase();
        });
        return test;
    }
}
PermissionsPipe.ɵfac = function PermissionsPipe_Factory(t) { return new (t || PermissionsPipe)(); };
PermissionsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "customPipePermissions", type: PermissionsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'customPipePermissions'
            }]
    }], null, null); })();


/***/ }),

/***/ "lS+i":
/*!*********************************************************!*\
  !*** ./src/app/pages/permissions/permissions.module.ts ***!
  \*********************************************************/
/*! exports provided: PermissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModule", function() { return PermissionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions-routing.module */ "G7dR");
/* harmony import */ var _permissions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions.component */ "FXUP");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _permissions_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions.pipe */ "ZysB");







class PermissionsModule {
}
PermissionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PermissionsModule });
PermissionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PermissionsModule_Factory(t) { return new (t || PermissionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__["PermissionsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PermissionsModule, { declarations: [_permissions_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsComponent"], _permissions_pipe__WEBPACK_IMPORTED_MODULE_5__["PermissionsPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__["PermissionsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_permissions_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsComponent"], _permissions_pipe__WEBPACK_IMPORTED_MODULE_5__["PermissionsPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__["PermissionsRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-permissions-permissions-module.js.map