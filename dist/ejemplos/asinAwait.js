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
exports.mostrarCorredorPorID = mostrarCorredorPorID;
const arreglos_1 = require("./arreglos");
const promises_1 = require("./promises");
function mostrarCorredorPorID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const corredor = yield (0, promises_1.buscarCorredorPorID)(arreglos_1.corredores, id);
            console.log(`Corredor encontrado: ID: ${corredor === null || corredor === void 0 ? void 0 : corredor.ID}, 
            Nombre: ${corredor === null || corredor === void 0 ? void 0 : corredor.Nombre}, 
            Peso: ${corredor === null || corredor === void 0 ? void 0 : corredor.Peso}, 
            Altura: ${corredor === null || corredor === void 0 ? void 0 : corredor.Altura}, 
            Edad: ${corredor === null || corredor === void 0 ? void 0 : corredor.Edad}`);
        }
        catch (error) {
            console.log(error);
        }
    });
}
