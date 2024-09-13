//Entidad 1
import { corredores} from './arreglos'
import {buscarCorredorPorID} from './promises'
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
export{
    mostrarCorredorPorID
}
