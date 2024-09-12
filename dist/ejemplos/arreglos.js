"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corredores = void 0;
let corredores = [
    { ID: 1, Nombre: 'Carlos', Peso: 70, Altura: 1.75, Edad: 28 },
    { ID: 2, Nombre: 'Ana', Peso: 60, Altura: 1.68, Edad: 24 },
    { ID: 3, Nombre: 'Luis', Peso: 80, Altura: 1.82, Edad: 30 },
    { ID: 4, Nombre: 'María', Peso: 55, Altura: 1.65, Edad: 22 },
    { ID: 5, Nombre: 'Pedro', Peso: 72, Altura: 1.78, Edad: 27 }
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
