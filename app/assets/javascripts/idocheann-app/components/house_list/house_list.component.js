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
var house_service_1 = require('../../providers/house.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var HouseListComponent = (function () {
    function HouseListComponent(houseService, params) {
        this.houseService = houseService;
        this.params = params;
    }
    HouseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.houses) {
            this.houses = [];
        }
        var houseIdQuery = "";
        if (this.houseIds) {
            houseIdQuery = "house_ids=" + this.houseIds;
        }
        this.houseService.query(houseIdQuery)
            .then(function (houses) { return _this.houses = houses; }).catch(function (error) { return _this.error = error; });
    };
    HouseListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'houses',
            templateUrl: 'house_list.component.html',
            directives: [router_deprecated_1.RouterLink],
            providers: [house_service_1.HouseService],
            inputs: ['houseIds']
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService, router_deprecated_1.RouteParams])
    ], HouseListComponent);
    return HouseListComponent;
}());
exports.HouseListComponent = HouseListComponent;
//# sourceMappingURL=house_list.component.js.map