//Entidad 1
import{Corredor, Carrera, Seguimiento} from './arreglos'
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
//Entidad 2
function buscarCarreraPorNombre(
    arreglo: Carrera[], 
    nombre: string
): Promise<Carrera | undefined> {
    return new Promise((resolve, reject) => {
        const carreraEncontrada = arreglo.find(carrera => carrera.NombreCarrera === nombre);
        if (carreraEncontrada) {
            resolve(carreraEncontrada);
        } else {
            reject(new Error('Correra no encontrada'));
        }
    });
}
//Entidad 3
function buscarSeguimientoPorID(
    arreglo: Seguimiento[], 
    id: number
): Promise<Seguimiento | undefined> {
    return new Promise((resolve, reject) => {
        const seguimientoEncontrado = arreglo.find(seguimiento => seguimiento.ID === id);
        if (seguimientoEncontrado) {
            resolve(seguimientoEncontrado);
        } else {
            reject(new Error('Seguimiento no encontrado'));
        }
    });
}
export{
    buscarCorredorPorID,
    buscarCarreraPorNombre,
    buscarSeguimientoPorID,
}