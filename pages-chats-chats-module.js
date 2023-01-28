(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chats-chats-module"],{

/***/ "EJ+t":
/*!*****************************************************!*\
  !*** ./src/app/pages/chats/chats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsRoutingModule", function() { return ChatsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sidebar/sidebar.component */ "sRhs");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats/chats.component */ "k62o");






const routes = [
    {
        path: '',
        component: _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
        children: [
            { path: '', component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_3__["ChatsComponent"], }
        ]
    }
];
class ChatsRoutingModule {
}
ChatsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatsRoutingModule });
ChatsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatsRoutingModule_Factory(t) { return new (t || ChatsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UTXh":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsModule", function() { return ChatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats/chats.component */ "k62o");
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats-routing.module */ "EJ+t");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");







class ChatsModule {
}
ChatsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatsModule });
ChatsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatsModule_Factory(t) { return new (t || ChatsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatsRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbChatModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatsModule, { declarations: [_chats_chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _chats_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatsRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbChatModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chats_chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _chats_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatsRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbChatModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "k62o":
/*!******************************************************!*\
  !*** ./src/app/pages/chats/chats/chats.component.ts ***!
  \******************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");






function ChatsComponent_nb_list_item_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-user", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", user_r2.active ? "active-list" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", user_r2.name)("title", user_r2.title);
} }
function ChatsComponent_nb_chat_message_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-chat-message", 8);
} if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", msg_r3.text)("sender", msg_r3.user.name)("reply", msg_r3.reply);
} }
class ChatsComponent {
    constructor() {
        this.messages = [
            {
                text: 'AAAAAAAAAAAA',
                date: new Date(),
                reply: false,
                user: {
                    name: 'test02',
                }
            },
            {
                text: 'BBBBBBB',
                date: new Date(),
                reply: false,
                user: {
                    name: 'test02',
                }
            },
            {
                text: 'CCCCCCCC',
                date: new Date(),
                reply: false,
                user: {
                    name: 'test02',
                }
            },
            {
                text: 'EEEEEEE',
                date: new Date(),
                reply: false,
                user: {
                    name: 'test02',
                }
            },
            {
                text: 'RRRRRRRRRR',
                date: new Date(),
                reply: false,
                user: {
                    name: 'test02',
                }
            },
            {
                text: 'HHHHHHHH',
                date: new Date(),
                reply: false,
                user: {
                    name: 'test02',
                }
            },
        ];
        this.users = [
            { name: 'Carla Espinosa', title: 'Nurse', active: true },
            { name: 'Bob Kelso', title: 'Doctor of Medicine' },
            { name: 'Janitor', title: 'Janitor' },
            { name: 'Perry Cox', title: 'Doctor of Medicine' },
            { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
        ];
    }
    ngOnInit() {
    }
    sendMessage(event) {
        const obj = {
            text: event.message,
            date: new Date(),
            reply: true,
            user: {
                name: 'test01',
            }
        };
        this.messages.push(obj);
    }
}
ChatsComponent.ɵfac = function ChatsComponent_Factory(t) { return new (t || ChatsComponent)(); };
ChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsComponent, selectors: [["app-chats"]], decls: 13, vars: 5, consts: [["fxLayout", "row", "fxLayoutAlign", "start stretch", 1, "chat-container"], [3, "fxFlex"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["title", "Chat Demo"], [3, "message", "sender", "reply", 4, "ngFor", "ngForOf"], [3, "showButton", "dropFiles", "send"], [3, "ngClass"], [3, "name", "title"], [3, "message", "sender", "reply"]], template: function ChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatsComponent_nb_list_item_9_Template, 2, 3, "nb-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-chat", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChatsComponent_nb_chat_message_11_Template, 1, 3, "nb-chat-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-chat-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("send", function ChatsComponent_Template_nb_chat_form_send_12_listener($event) { return ctx.sendMessage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", "230px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showButton", true)("dropFiles", true);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbChatComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbChatFormComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbUserComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbChatMessageComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-chat[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .chat-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-list-item.active-list[_ngcontent-%COMP%] {\n  background-color: #3366FF;\n  color: #ffffff !important;\n}\n[_nghost-%COMP%]   nb-list-item.active-list[_ngcontent-%COMP%]     * {\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxTQUFBO0FBQ1I7QUFDUTtFQUNJLFlBQUE7QUFDWjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0FBRlI7QUFLSTtFQUNJLGVBQUE7QUFIUjtBQUtRO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUhaO0FBTWdCO0VBQ0kseUJBQUE7QUFKcEIiLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgbmItY2FyZCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIG5iLWNhcmQtYm9keSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuYi1jaGF0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNoYXQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIG5iLWxpc3QtaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLmFjdGl2ZS1saXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzY2RkY7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chats',
                templateUrl: './chats.component.html',
                styleUrls: ['./chats.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-chats-chats-module.js.map