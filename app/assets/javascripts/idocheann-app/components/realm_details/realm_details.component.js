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
var realm_service_1 = require('../../providers/realm.service');
var character_list_component_1 = require('../character_list/character_list.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var RealmDetailsComponent = (function () {
    function RealmDetailsComponent(realmService, params) {
        this.realmService = realmService;
        this.params = params;
    }
    RealmDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.realm) {
            this.realm = { id: 1, siblings: [{}] };
        }
        this.realmService.get(this.params)
            .then(function (realm) { return _this.realm = realm; }).catch(function (error) { return _this.error = error; });
    };
    RealmDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'realm',
            templateUrl: 'realm_details.component.html',
            providers: [realm_service_1.RealmService],
            directives: [character_list_component_1.CharacterListComponent]
        }), 
        __metadata('design:paramtypes', [realm_service_1.RealmService, router_deprecated_1.RouteParams])
    ], RealmDetailsComponent);
    return RealmDetailsComponent;
}());
exports.RealmDetailsComponent = RealmDetailsComponent;
//# sourceMappingURL=realm_details.component.js.map