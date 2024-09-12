console.log('Hola Mundo')
//Callback
import {corredores,buscarCorredor,buscarPorID} from './ejemplos/callback'
buscarCorredor(corredores, 3, buscarPorID);

//promises-asinAwait
import {mostrarCorredorPorID} from './ejemplos/asinAwait'
mostrarCorredorPorID(3); 
mostrarCorredorPorID(6);