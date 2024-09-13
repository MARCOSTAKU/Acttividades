//Entidad 1
import { corredores, carrera, seguimiento} from './arreglos'
import {buscarCorredorPorID, buscarCarreraPorNombre, buscarSeguimientoPorID} from './promises'
async function mostrarCorredorPorID(id: number) {
    try {
        const corredor = await buscarCorredorPorID(corredores, id);
        console.log(`Corredor encontrado: ID: ${corredor?.ID}, 
            Nombre: ${corredor?.Nombre}, 
            Peso: ${corredor?.Peso}, 
            Altura: ${corredor?.Altura}, 
            Edad: ${corredor?.Edad}`);
    } catch (error) {
        console.log(error);
    }
}
//Entidad 2
async function encontrarCarrera(nombre: string) {
    try {
      const carreraResultado = await buscarCarreraPorNombre(carrera, nombre);
      if (carreraResultado) {
        const carrera = carreraResultado; 
        console.log(`Carrera encontrada: 
          Nombre: ${carrera.NombreCarrera}, 
          Kilómetros: ${carrera.CantidadKilometros}, 
          Detalles: ${carrera.DetallesAdicionales}, 
          Fecha: ${carrera.Fecha.toDateString()}, 
          Hora: ${carrera.Hora}`);
      } else {
        console.log(`No se encontró la carrera con nombre ${nombre}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
//Entidad 3
async function encontrarSeguimiento(id: number) {
    try {
        const ObtenerSeguimiento = await buscarSeguimientoPorID(seguimiento, id);
        if (ObtenerSeguimiento) {
            console.log(`Seguimiento encontrado: 
            ID: ${ObtenerSeguimiento.ID}, 
            ID Carrera: ${ObtenerSeguimiento.IDcarrera}, 
            Tiempo Llegado: ${ObtenerSeguimiento.TiempoLlegado}, 
            Orden Llegado: ${ObtenerSeguimiento.OrdenLlegado}, 
            Pulso Inicial: ${ObtenerSeguimiento.PulsoInicial}, 
            Pulso Final: ${ObtenerSeguimiento.PulsoFinal}`);
        }
    } catch (error) {
        console.log(error);
    }
}
export{
    mostrarCorredorPorID,
    encontrarCarrera,
    encontrarSeguimiento
}