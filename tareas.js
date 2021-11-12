const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function(unArray){
        let arrayAjson = JSON.stringify(unArray,null,' ');
        fs.writeFileSync('./'+this.archivo,arrayAjson);
    },
    //Tarea 2.1
    //Crear nuestro metodo escribirJSON, el cual va a escribir nuestro archivo tareas.json
    //Tarea 2.2
    //Crear nuestro metodo guardarTarea, el cual va a leer nuestro JSON, agregar una nueva tarea
    // Y guardarlo.
    guardarTarea: function(objTarea){
        let nvatarea= this.leerJSON();
        nvatarea.push(objTarea);
        this.escribirJSON(nvatarea);
    },

    //Tarea 3
    //Crear nuestro metodo filtrarPorEstado, el cual va a leer nuestro archivo json y filtrar
    //por el estado recibido como parametro de la funcion.
    leerPorEstado: function (estado) {
        let arrayTareas = this.leerJSON();
        let resultado = arrayTareas.filter((item)=>{return item.estado == estado});
        return resultado;
    }
}


module.exports = archivoTareas;