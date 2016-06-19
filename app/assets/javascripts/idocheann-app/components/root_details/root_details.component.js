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
var root_service_1 = require('../../providers/root.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var RootDetailsComponent = (function () {
    function RootDetailsComponent(rootService, params) {
        this.rootService = rootService;
        this.params = params;
    }
    RootDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.root) {
            this.root = { id: 1 };
        }
        this.rootService.get(this.params)
            .then(function (root) { return _this.root = root; }).catch(function (error) { return _this.error = error; });
    };
    RootDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'root',
            templateUrl: 'root_details.component.html',
            directives: [router_deprecated_1.RouterLink],
            providers: [root_service_1.RootService]
        }), 
        __metadata('design:paramtypes', [root_service_1.RootService, router_deprecated_1.RouteParams])
    ], RootDetailsComponent);
    return RootDetailsComponent;
}());
exports.RootDetailsComponent = RootDetailsComponent;
//# sourceMappingURL=root_details.component.js.map