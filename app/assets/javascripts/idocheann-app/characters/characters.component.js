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
var CharactersComponent = (function () {
    function CharactersComponent(characterService) {
        this.characterService = characterService;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.characters) {
            this.characters = [];
        }
        this.characterService.query()
            .then(function (characters) { return _this.characters = characters; }).catch(function (error) { return _this.error = error; });
    };
    CharactersComponent = __decorate([
        core_1.Component({
            selector: 'characters',
            template: "\
    <ul> Characters: \
      <li *ngFor='let character of characters'>{{character.composite_name}}</li>\
    </ul>\
  ",
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;
//# sourceMappingURL=characters.component.js.map