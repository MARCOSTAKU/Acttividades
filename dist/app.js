"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hola Mundo');
//Callback
const callback_1 = require("./ejemplos/callback");
(0, callback_1.buscarCorredor)(callback_1.corredores, 3, callback_1.buscarPorID);
//promises-asinAwait
const asinAwait_1 = require("./ejemplos/asinAwait");
(0, asinAwait_1.mostrarCorredorPorID)(3);
(0, asinAwait_1.mostrarCorredorPorID)(6);
