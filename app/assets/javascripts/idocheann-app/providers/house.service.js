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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var HouseService = (function () {
    function HouseService(http) {
        this.http = http;
        this.apiUrl = '/api/houses';
    }
    HouseService.prototype.query = function (params) {
        var hitUrl = this.apiUrl;
        if (params.get('search')) {
            hitUrl = hitUrl + '?search=' + params.get('search');
        }
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    HouseService.prototype.get = function (params) {
        var hitUrl = this.apiUrl + '/' + params.get('id');
        return this.http.get(hitUrl)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    HouseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HouseService);
    return HouseService;
}());
exports.HouseService = HouseService;
//# sourceMappingURL=house.service.js.map