//Entidad 1

import { corredores, Corredor } from './arreglos'
function buscarCorredor(arreglo: Corredor[], id: number, callback: (arr: Corredor[], id: number) => Corredor | undefined): void {
    const corredorEncontrado = callback(arreglo, id);
    if (corredorEncontrado) {
        console.log(`Corredor encontrado: ID: ${corredorEncontrado.ID}, Nombre: ${corredorEncontrado.Nombre}, Peso: ${corredorEncontrado.Peso}, Altura: ${corredorEncontrado.Altura}, Edad: ${corredorEncontrado.Edad}`);
    } else {
        console.log("Corredor no encontrado");
    }
}
function buscarPorID(arreglo: Corredor[], id: number): Corredor | undefined {
    return arreglo.find(corredor => corredor.ID === id);
}

//Entidad 2
import { Carrera, carrera } from './arreglos'
function buscarCarrera(
    arreglo: Carrera[],
    nombre: string,
    callback: (arr: Carrera[], nombre: string) => Carrera | undefined): void {
    const carreraEncontrada = callback(arreglo, nombre);
    if (carreraEncontrada) {
        console.log(`Carrera encontrada: 
        Nombre: ${carreraEncontrada.NombreCarrera}, 
        Kilómetros: ${carreraEncontrada.CantidadKilometros}, 
        Detalles: ${carreraEncontrada.DetallesAdicionales}, 
        Fecha: ${carreraEncontrada.Fecha.toDateString()}, 
        Hora: ${carreraEncontrada.Hora}`);
    } else {
        console.log("Carrera no encontrada");
    }
}
function buscarPorNombre(arreglo: Carrera[], nombre: string): Carrera | undefined {
    return arreglo.find(carrera => carrera.NombreCarrera === nombre);
}

//Entidad 3
import { Seguimiento } from './arreglos'
function buscarSeguimiento(
    arreglo: Seguimiento[],
    id: number,
    callback: (arr: Seguimiento[], id: number) => Seguimiento | undefined): void {
    const seguimientoEncontrado = callback(arreglo, id);
    if (seguimientoEncontrado) {
        console.log(`Seguimiento encontrado: 
        ID: ${seguimientoEncontrado.ID}, 
        ID Carrera: ${seguimientoEncontrado.IDcarrera}, 
        Tiempo Llegado: ${seguimientoEncontrado.TiempoLlegado}, 
        Orden Llegado: ${seguimientoEncontrado.OrdenLlegado}, 
        Pulso Inicial: ${seguimientoEncontrado.PulsoInicial}, 
        Pulso Final: ${seguimientoEncontrado.PulsoFinal}`);
    } else {
        console.log("Seguimiento no encontrado");
    }
}
function buscarSeguimientoPorID(arreglo: Seguimiento[], id: number): Seguimiento | undefined {
    return arreglo.find(seguimiento => seguimiento.ID === id);
}
export {
    buscarCarrera,
    carrera,
    corredores,
    buscarCorredor,
    buscarPorID,
    buscarSeguimiento,
    buscarPorNombre,
    buscarSeguimientoPorID
}