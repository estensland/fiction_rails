"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var character_list_component_1 = require('./components/character_list/character_list.component');
var character_details_component_1 = require('./components/character_details/character_details.component');
var character_service_1 = require('./providers/character.service');
var root_list_component_1 = require('./components/root_list/root_list.component');
var root_service_1 = require('./providers/root.service');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'idocheann-app',
            template: "\n    <a [routerLink]=\"['Characters']\">Characters</a>\n    <a [routerLink]=\"['Roots']\">Roots</a>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, character_list_component_1.CharacterListComponent, root_list_component_1.RootListComponent, router_deprecated_1.RouterLink],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, character_service_1.CharacterService, root_service_1.RootService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/characters',
                name: 'Characters',
                component: character_list_component_1.CharacterListComponent
            },
            {
                path: '/characters/:id',
                name: 'Character',
                component: character_details_component_1.CharacterDetailsComponent
            },
            {
                path: '/roots',
                name: 'Roots',
                component: root_list_component_1.RootListComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map