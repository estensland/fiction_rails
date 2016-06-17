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
var RootListComponent = (function () {
    function RootListComponent(rootService) {
        this.rootService = rootService;
    }
    RootListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.roots) {
            this.roots = [];
        }
        this.rootService.query()
            .then(function (roots) { return _this.roots = roots; }).catch(function (error) { return _this.error = error; });
    };
    RootListComponent = __decorate([
        core_1.Component({
            selector: 'root_list',
            template: "\n    <ul> Roots:\n      <li *ngFor='let root of roots'>\n        <a [routerLink]=\"['Root', {id: root.id }]\">{{root.root}}</a> : {{root.meaning}}\n      </li>\n    </ul>\n  ",
            directives: [router_deprecated_1.RouterLink],
            providers: [root_service_1.RootService]
        }), 
        __metadata('design:paramtypes', [root_service_1.RootService])
    ], RootListComponent);
    return RootListComponent;
}());
exports.RootListComponent = RootListComponent;
//# sourceMappingURL=root_list.component.js.map