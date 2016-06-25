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
var character_list_component_1 = require('../character_list/character_list.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var HouseDetailsComponent = (function () {
    function HouseDetailsComponent(houseService, params) {
        this.houseService = houseService;
        this.params = params;
    }
    HouseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.house) {
            this.house = { id: 1, siblings: [{}] };
        }
        this.houseService.get(this.params)
            .then(function (house) { return _this.house = house; }).catch(function (error) { return _this.error = error; });
    };
    HouseDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'house',
            templateUrl: 'house_details.component.html',
            providers: [house_service_1.HouseService],
            directives: [character_list_component_1.CharacterListComponent]
        }), 
        __metadata('design:paramtypes', [house_service_1.HouseService, router_deprecated_1.RouteParams])
    ], HouseDetailsComponent);
    return HouseDetailsComponent;
}());
exports.HouseDetailsComponent = HouseDetailsComponent;
//# sourceMappingURL=house_details.component.js.map