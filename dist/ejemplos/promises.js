"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarCorredorPorID = buscarCorredorPorID;
function buscarCorredorPorID(arreglo, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const corredorEncontrado = arreglo.find(corredor => corredor.ID === id);
            if (corredorEncontrado) {
                resolve(corredorEncontrado);
            }
            else {
                reject('Corredor no encontrado');
            }
        }, 1000);
    });
}
