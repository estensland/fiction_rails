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
var character_service_1 = require('./character.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var CharacterComponent = (function () {
    function CharacterComponent(characterService, params) {
        this.characterService = characterService;
        this.params = params;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.character) {
            this.character = { id: 1 };
        }
        this.characterService.get(this.params)
            .then(function (character) { return _this.character = character; }).catch(function (error) { return _this.error = error; });
    };
    CharacterComponent = __decorate([
        core_1.Component({
            selector: 'character',
            template: "\n    <h2>Character: {{character.composite_name}}</h2>\n  ",
            directives: [router_deprecated_1.RouterLink],
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService, router_deprecated_1.RouteParams])
    ], CharacterComponent);
    return CharacterComponent;
}());
exports.CharacterComponent = CharacterComponent;
//# sourceMappingURL=character.component.js.map