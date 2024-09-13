"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarCorredorPorID = buscarCorredorPorID;
exports.buscarCarreraPorNombre = buscarCarreraPorNombre;
exports.buscarSeguimientoPorID = buscarSeguimientoPorID;
function buscarCorredorPorID(arreglo, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const corredorEncontrado = arreglo.find(corredor => corredor.ID === id);
            if (corredorEncontrado) {
                resolve(corredorEncontrado);
            }
            else {
                reject(new Error('Corredor no encontrado'));
            }
        }, 1000);
    });
}
//Entidad 2
function buscarCarreraPorNombre(arreglo, nombre) {
    return new Promise((resolve, reject) => {
        const carreraEncontrada = arreglo.find(carrera => carrera.NombreCarrera === nombre);
        if (carreraEncontrada) {
            resolve(carreraEncontrada);
        }
        else {
            reject(new Error('Correra no encontrada'));
        }
    });
}
//Entidad 3
function buscarSeguimientoPorID(arreglo, id) {
    return new Promise((resolve, reject) => {
        const seguimientoEncontrado = arreglo.find(seguimiento => seguimiento.ID === id);
        if (seguimientoEncontrado) {
            resolve(seguimientoEncontrado);
        }
        else {
            reject(new Error('Seguimiento no encontrado'));
        }
    });
}
