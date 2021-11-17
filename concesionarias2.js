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
    // autosParaLaVenta: function(vendido){
    //     let autosDisponibles = autos.filter((item, km)=>{return item.vendido== false && item.km >100});
    //         return autosDisponibles;
    //  },
    //  autosNuevos: function(km){
    //     let nuevos = this.autosParaLaVenta(km);
    //     if (nuevos.km > 100 && nuevos.vendido==true){
    //        return nuevos;
    //     }
    //  }
    autosParaLaVenta: function(){
        let autosDisponibles = autos.filter((item)=>{return item.vendido== false});
        console.log(autosDisponibles);
    },
    autosNuevos: function(){
        let autoNuevo = autos.filter((item)=>{return item.km > 100});
        return autoNuevo;
    },
    auto0KM: function () {
        //let autoDisponiblesParaVenta = this.autosParaLaVenta();
        let ceroKm = autos.filter((item)=> {return item.km < 100});
        return ceroKm;
    }

}
console.log(concesionaria.autosParaLaVenta());