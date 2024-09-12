"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corredores = void 0;
const corredores = [
    {
        ID: 1,
        Nombre: 'Marcos',
        Peso: 28,
        Altura: 180,
        Edad: 20
    },
    {
        ID: 2,
        Nombre: 'Jeremy',
        Peso: 28,
        Altura: 180,
        Edad: 20
    },
    {
        ID: 3,
        Nombre: 'Cristopher',
        Peso: 28,
        Altura: 180,
        Edad: 20
    },
    {
        ID: 4,
        Nombre: 'Jordi',
        Peso: 28,
        Altura: 180,
        Edad: 20
    },
];
exports.corredores = corredores;
corredores.forEach(corredor => {
    console.log(`ID: ${corredor.ID}, 
        Nombre: ${corredor.Nombre},
        Peso: ${corredor.Peso},
        Altura: ${corredor.Altura}, 
        Edad: ${corredor.Edad}`);
});
for (let i in corredores) {
    console.log(`ID: ${corredores[i].ID}, 
        Nombre: ${corredores[i].Nombre}, 
        Peso: ${corredores[i].Peso}, 
        Altura: ${corredores[i].Altura}, 
        Edad: ${corredores[i].Edad}`);
}
for (let corredor of corredores) {
    console.log(`ID: ${corredor.ID}, 
        Nombre: ${corredor.Nombre}, 
        Peso: ${corredor.Peso}, 
        Altura: ${corredor.Altura}, 
        Edad: ${corredor.Edad}`);
}
