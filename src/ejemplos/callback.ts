import {corredores, Corredor} from './arreglos'

function buscarCorredor(arreglo: Corredor[], id: number, callback: (arr: Corredor[], id: number) => Corredor | undefined): void {
    let corredorEncontrado = callback(arreglo, id);
    if (corredorEncontrado) {
        console.log(`Corredor encontrado: ID: ${corredorEncontrado.ID}, Nombre: ${corredorEncontrado.Nombre}, Peso: ${corredorEncontrado.Peso}, Altura: ${corredorEncontrado.Altura}, Edad: ${corredorEncontrado.Edad}`);
    } else {
        console.log("Corredor no encontrado");
    }
}
function buscarPorID(arreglo: Corredor[], id: number): Corredor | undefined {
    return arreglo.find(corredor => corredor.ID === id);
}

export{
    corredores,
    buscarCorredor,
    buscarPorID
}
