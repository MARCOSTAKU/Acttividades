"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
exports.fetchPokemon = fetchPokemon;
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
function fetchPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
        try {
            const pokemonData = yield fetchData(url);
            console.log('Nombre:', pokemonData.name);
            console.log('Habilidades:', pokemonData.abilities.map(ability => ability.ability.name).join(', '));
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
