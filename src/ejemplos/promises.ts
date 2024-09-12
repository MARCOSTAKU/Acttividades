import{Corredor} from './arreglos'
function buscarCorredorPorID(arreglo: Corredor[], id: number): Promise<Corredor | undefined> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const corredorEncontrado = arreglo.find(corredor => corredor.ID === id);
            if (corredorEncontrado) {
                resolve(corredorEncontrado);
            } else {
                reject(new Error('Corredor no encontrado'));
            }
        }, 1000); 
    });
} 
export{
    buscarCorredorPorID
}
