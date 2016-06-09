"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var character_service_1 = require('./character.service');
var CharactersComponent = (function () {
    function CharactersComponent(characterService) {
        this.characterService = characterService;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characterService.getCharacters()
            .subscribe(function (characters) { return _this.characters = characters; });
    };
    CharactersComponent = __decorate([
        core_1.Component({
            selector: 'characters',
            template: "<h2> ARGH THE UNDESERVING </h2>",
            styleUrls: ['characters.component.css'],
            providers: [character_service_1.CharacterService]
        })
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;