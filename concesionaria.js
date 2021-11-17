const autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente){
    let autoBuscado = autos.filter((item)=>{return item.patente== patente});
        return autoBuscado;   
    },   
    venderAuto: function (patente) {
        let autoParaVender = this.buscarAuto(patente);
         if (autoParaVender.vendido==false){
              autoParaVender.vendido = true;
         }
        console.log(autoParaVender);
    },
    autosParaLaVenta: function(){
        let autosDisponibles = autos.filter((item)=>{return item.vendido== false});
       return autosDisponibles;
    },
    autosNuevos: function(){
        let autoNuevo = autos.filter((item)=>{return item.km > 100});
        return autoNuevo;
    },
    auto0KM: function () {
        let ceroKmParaVender = this.autosParaLaVenta();
        ceroKmParaVender = autos.filter((item)=> {return item.km < 100});
        return ceroKmParaVender;
    }
}
console.log(concesionaria.autosParaLaVenta());