"use strict";
//Entidad 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.corredores = exports.carrera = void 0;
exports.buscarCarrera = buscarCarrera;
exports.buscarCorredor = buscarCorredor;
exports.buscarPorID = buscarPorID;
exports.buscarSeguimiento = buscarSeguimiento;
exports.buscarPorNombre = buscarPorNombre;
exports.buscarSeguimientoPorID = buscarSeguimientoPorID;
const arreglos_1 = require("./arreglos");
Object.defineProperty(exports, "corredores", { enumerable: true, get: function () { return arreglos_1.corredores; } });
function buscarCorredor(arreglo, id, callback) {
    const corredorEncontrado = callback(arreglo, id);
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
//Entidad 2
const arreglos_2 = require("./arreglos");
Object.defineProperty(exports, "carrera", { enumerable: true, get: function () { return arreglos_2.carrera; } });
function buscarCarrera(arreglo, nombre, callback) {
    const carreraEncontrada = callback(arreglo, nombre);
    if (carreraEncontrada) {
        console.log(`Carrera encontrada: 
        Nombre: ${carreraEncontrada.NombreCarrera}, 
        Kilómetros: ${carreraEncontrada.CantidadKilometros}, 
        Detalles: ${carreraEncontrada.DetallesAdicionales}, 
        Fecha: ${carreraEncontrada.Fecha.toDateString()}, 
        Hora: ${carreraEncontrada.Hora}`);
    }
    else {
        console.log("Carrera no encontrada");
    }
}
function buscarPorNombre(arreglo, nombre) {
    return arreglo.find(carrera => carrera.NombreCarrera === nombre);
}
function buscarSeguimiento(arreglo, id, callback) {
    const seguimientoEncontrado = callback(arreglo, id);
    if (seguimientoEncontrado) {
        console.log(`Seguimiento encontrado: 
        ID: ${seguimientoEncontrado.ID}, 
        ID Carrera: ${seguimientoEncontrado.IDcarrera}, 
        Tiempo Llegado: ${seguimientoEncontrado.TiempoLlegado}, 
        Orden Llegado: ${seguimientoEncontrado.OrdenLlegado}, 
        Pulso Inicial: ${seguimientoEncontrado.PulsoInicial}, 
        Pulso Final: ${seguimientoEncontrado.PulsoFinal}`);
    }
    else {
        console.log("Seguimiento no encontrado");
    }
}
function buscarSeguimientoPorID(arreglo, id) {
    return arreglo.find(seguimiento => seguimiento.ID === id);
}
