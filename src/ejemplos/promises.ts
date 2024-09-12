import{corredores, corredor} from './arreglos'
function buscarCorredorPorID(arreglo: corredor[], id: number): Promise<corredor | undefined> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const corredorEncontrado = arreglo.find(corredor => corredor.ID === id);
            if (corredorEncontrado) {
                resolve(corredorEncontrado);
            } else {
                reject('Corredor no encontrado');
            }
        }, 1000); 
    });
} 
export{
    buscarCorredorPorID
}
