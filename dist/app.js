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
//Callback
// import {buscarCarrera,buscarPorNombre, carrera} from './ejemplos/callback'
// buscarCarrera(carrera, 'Carrera A', buscarPorNombre);
//promises
// import { carrera} from './ejemplos/arreglos';
// import {buscarCarreraPorNombre, buscarSeguimientoPorID } from './ejemplos/promises'
// buscarCarreraPorNombre(carrera, 'Carrera A')
//     .then(carrera => {
//         console.log(`Carrera encontrada: 
//         Nombre: ${carrera?.NombreCarrera}, 
//         Kilómetros: ${carrera?.CantidadKilometros}, 
//         Detalles: ${carrera?.DetallesAdicionales}, 
//         Fecha: ${carrera?.Fecha.toDateString()}, 
//         Hora: ${carrera?.Hora}`);
//     })
//     .catch(error => console.log(error));
// buscarSeguimientoPorID(seguimiento, 2)
//     .then(seguimiento => {
//         console.log(`Seguimiento encontrado: 
//         ID: ${seguimiento?.ID}, 
//         ID Carrera: ${seguimiento?.IDcarrera}, 
//         Tiempo Llegado: ${seguimiento?.TiempoLlegado}, 
//         Orden Llegado: ${seguimiento?.OrdenLlegado}, 
//         Pulso Inicial: ${seguimiento?.PulsoInicial}, 
//         Pulso Final: ${seguimiento?.PulsoFinal}`);
//     })
//     .catch(error => console.log(error));
// buscarCarreraPorNombre(carrera, 'Carrera B')
//     .then((carrera) => {
//         if (carrera) {
//             console.log(`Carrera encontrada: 
//             Nombre: ${carrera.NombreCarrera}, 
//             Kilómetros: ${carrera.CantidadKilometros}, 
//             Detalles: ${carrera.DetallesAdicionales}, 
//             Fecha: ${carrera.Fecha.toDateString()}, 
//             Hora: ${carrera.Hora}`);
//         }
//     })
//     .catch((error: Error) => console.log(error));
// async
// import{encontrarCarrera, encontrarSeguimiento} from  './ejemplos/asinAwait'
// encontrarSeguimiento(2);
// encontrarCarrera('Carrera C');
//AppiRest
const AppiRest_1 = require("./ejemplos/AppiRest");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, AppiRest_1.fetchData)('https://pokeapi.co/api/v2/pokemon/ditto');
    yield (0, AppiRest_1.fetchPokemon)();
    console.log(response);
}))();
