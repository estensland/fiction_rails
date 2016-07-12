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
var router_deprecated_1 = require('@angular/router-deprecated');
var RealmListComponent = (function () {
    function RealmListComponent(realmService, params) {
        this.realmService = realmService;
        this.params = params;
    }
    RealmListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.realms) {
            this.realms = [];
        }
        this.realmService.query(this.params)
            .then(function (realm) { return _this.realms = realm; }).catch(function (error) { return _this.error = error; });
    };
    RealmListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'realm',
            templateUrl: 'realm_list.component.html',
            directives: [router_deprecated_1.RouterLink],
            providers: [realm_service_1.RealmService]
        }), 
        __metadata('design:paramtypes', [realm_service_1.RealmService, router_deprecated_1.RouteParams])
    ], RealmListComponent);
    return RealmListComponent;
}());
exports.RealmListComponent = RealmListComponent;
//# sourceMappingURL=realm_list.component.js.map