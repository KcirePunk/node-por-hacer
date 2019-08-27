const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar ', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const crear = (desc) => {

    cargarDB();

    let porHacer = {
        desc,
        compleado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (desc, compleado) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.desc === desc);

    if (index >= 0) {
        listadoPorHacer[index].compleado = compleado;
        guardarDB();
        cargarDB();
        return listadoPorHacer[index];
    } else {
        return 'No se encontro tarea por hacer';
    }

}

borrarTarea = (desc) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.desc === desc);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return 'Borrado exitosamente';
    } else {
        return 'Error al borrar tarea';
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea
}