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
var characters_component_1 = require('./characters/characters.component');
var character_component_1 = require('./characters/character.component');
var character_service_1 = require('./characters/character.service');
var roots_component_1 = require('./roots/roots.component');
var root_service_1 = require('./roots/root.service');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'idocheann-app',
            template: "\n    <a [routerLink]=\"['Characters']\">Characters</a>\n    <a [routerLink]=\"['Roots']\">Roots</a>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, characters_component_1.CharactersComponent, roots_component_1.RootsComponent, router_deprecated_1.RouterLink],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, character_service_1.CharacterService, root_service_1.RootService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/characters',
                name: 'Characters',
                component: characters_component_1.CharactersComponent
            },
            {
                path: '/characters/:id',
                name: 'Character',
                component: character_component_1.CharacterComponent
            },
            {
                path: '/roots',
                name: 'Roots',
                component: roots_component_1.RootsComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map