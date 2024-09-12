import {corredores, corredor} from './arreglos'

function buscarCorredor(arreglo: corredor[], id: number, callback: (arr: corredor[], id: number) => corredor | undefined): void {
    let corredorEncontrado = callback(arreglo, id);
    if (corredorEncontrado) {
        console.log(`Corredor encontrado: ID: ${corredorEncontrado.ID}, Nombre: ${corredorEncontrado.Nombre}, Peso: ${corredorEncontrado.Peso}, Altura: ${corredorEncontrado.Altura}, Edad: ${corredorEncontrado.Edad}`);
    } else {
        console.log("Corredor no encontrado");
    }
}
function buscarPorID(arreglo: corredor[], id: number): corredor | undefined {
    return arreglo.find(corredor => corredor.ID === id);
}

export{
    corredores,
    buscarCorredor,
    buscarPorID
}
