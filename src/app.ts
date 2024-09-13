//Callback
// import {buscarCarrera,buscarPorNombre, carrera} from './ejemplos/callback'
// buscarCarrera(carrera, 'Carrera A', buscarPorNombre);

//promises-asinAwait

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
