"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corredores = void 0;
exports.buscarCorredor = buscarCorredor;
exports.buscarPorID = buscarPorID;
const arreglos_1 = require("./arreglos");
Object.defineProperty(exports, "corredores", { enumerable: true, get: function () { return arreglos_1.corredores; } });
function buscarCorredor(arreglo, id, callback) {
    let corredorEncontrado = callback(arreglo, id);
    if (corredorEncontrado) {
        console.log(`Corredor encontrado: ID: ${corredorEncontrado.ID}, Nombre: ${corredorEncontrado.Nombre}, Peso: ${corredorEncontrado.Peso}, Altura: ${corredorEncontrado.Altura}, Edad: ${corredorEncontrado.Edad}`);
    }
    else {
        console.log("Corredor no encontrado");
    }
}
function buscarPorID(arreglo, id) {
    return arreglo.find(corredor => corredor.ID === id);
}
