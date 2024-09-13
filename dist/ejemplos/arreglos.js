"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seguimiento = exports.carrera = exports.corredores = void 0;
const seguimiento = [
    {
        ID: 1,
        IDcarrera: 1,
        TiempoLlegado: 12,
        OrdenLlegado: 2,
        PulsoInicial: 80,
        PulsoFinal: 90
    },
    {
        ID: 2,
        IDcarrera: 2,
        TiempoLlegado: 13,
        OrdenLlegado: 3,
        PulsoInicial: 70,
        PulsoFinal: 100
    },
    {
        ID: 3,
        IDcarrera: 3,
        TiempoLlegado: 15,
        OrdenLlegado: 4,
        PulsoInicial: 80,
        PulsoFinal: 100
    },
    {
        ID: 4,
        IDcarrera: 4,
        TiempoLlegado: 12,
        OrdenLlegado: 2,
        PulsoInicial: 80,
        PulsoFinal: 90
    },
    {
        ID: 5,
        IDcarrera: 5,
        TiempoLlegado: 12,
        OrdenLlegado: 2,
        PulsoInicial: 80,
        PulsoFinal: 90
    },
];
exports.seguimiento = seguimiento;
const carrera = [
    {
        NombreCarrera: 'Carrera A',
        CantidadKilometros: 10,
        DetallesAdicionales: 'Carrera de 10km',
        Fecha: new Date('2022-01-01'),
        Hora: 10
    },
    {
        NombreCarrera: 'Carrera B',
        CantidadKilometros: 15,
        DetallesAdicionales: 'Carrera de 15km',
        Fecha: new Date('2022-01-01'),
        Hora: 15
    },
    {
        NombreCarrera: 'Carrera C',
        CantidadKilometros: 20,
        DetallesAdicionales: 'Carrera de 20km',
        Fecha: new Date('2022-01-01'),
        Hora: 13
    },
    {
        NombreCarrera: 'Carrera D',
        CantidadKilometros: 15,
        DetallesAdicionales: 'Carrera de 15km',
        Fecha: new Date('2022-01-01'),
        Hora: 15
    },
    {
        NombreCarrera: 'Carrera E',
        CantidadKilometros: 15,
        DetallesAdicionales: 'Carrera de 15km',
        Fecha: new Date('2022-01-01'),
        Hora: 15
    },
];
exports.carrera = carrera;
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
    {
        ID: 5,
        Nombre: 'Justin',
        Peso: 28,
        Altura: 180,
        Edad: 20
    }
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
