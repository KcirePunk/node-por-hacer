const argv = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hace');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let getListar = porHacer.getListado();
        console.log('====Lista Por Hacer===='.green);
        for (listar of getListar) {
            console.log(`${listar.desc} - Estado: ${listar.compleado}`);
        }
        console.log('======================='.green);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualicado Correctamente'.green);
        console.log(`${actualizado.desc} - ${actualizado.compleado}`);
        break;

    case 'borrar':
        let borrar = porHacer.borrarTarea(argv.descripcion);
        console.log(colors.red.underline(borrar));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}