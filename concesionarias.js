const autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente){
        let autosBuscados = this.autos.filter(itme => {
            return autosBuscados.patente == patente;
        })
//    for (let i = 0;i<autos.length;i++){
//        if (autos[i].patente== patente){
//            return autos[i];
//        }else{
//            return null;
//        }
},
    venderAuto: function (patente) {
        let autoVendido = this.buscarAuto(patente);
        if (autoVendido){
            autoVendido.vendido = true;
        }
    },
    autosParaLaVenta: function(vendido){
        let autosDisponibles = autos.filter((item, km)=>{return item.vendido== false && item.km >100});
            return autosDisponibles;
     },
     autosNuevos: function(km){
        let nuevos = this.autosParaLaVenta(km);
        if (nuevos.km > 100 && nuevos.vendido==true){
           return nuevos;
        }
     }
}
console.log(concesionaria.autosParaLaVenta('APL123'));