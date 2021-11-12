//const { escribirJSON } = require('./tareas');
const archivoTareas = require('./tareas');

let accion = process.argv[2];
console.log(accion)

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        //Micro Desafio 1
        //Modificar la funcionalidad de listar tareas utilizando un forEach
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        tareas.forEach((tarea, index)=> console.log(index,'.', tarea.titulo, '-', tarea.estado));
        break;
    // Tarea 2.3 
    // Crear un nuevo case que verifique si el argumento pasa por consola es "crear"
    case 'crear':
        console.log('Una nueva tarea');
        let titulo = process.argv[3];
        let unaTarea = {
            titulo: titulo,
            estado:'pendiente'
        }
        archivoTareas.guardarTarea(unaTarea)
        break;
    // cree la tarea con el titulo tambien pasado por consola, y el estado pendiente.
    // Tarea 3.5
    // Crear nuestro case para contemplar el argumento "filtrar"
    case 'filtrar':
        console.log('Filtrado de Tareas');
        let valorBuscado = process.argv[3];
        let listaDeTareas = archivoTareas.leerPorEstado(valorBuscado);
        listaDeTareas.forEach((tarea, index)=> console.log(index,'.', tarea.titulo, '-', tarea.estado));
    // Deberiamos obtener el estado pasado como argumento y llamar al metodo
    // filtrarPorEstado
        break;
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
