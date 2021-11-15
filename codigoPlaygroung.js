/*Errores:
Al llamar a la función autosNuevos debe devolver los el auto que originalmente no cumple con los requisitos
Al vender al auto con patente 'JJK116' y luego llamar a la función autos0KM no debe contener ese auto
*/

const autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente){
   for (let i = 0;i<autos.length;i++){
       if (autos[i].patente== patente){
           return autos[i];
       }else{
           return null;
       }
   }
},
venderAuto: function (patente) {
        let autoVendido = this.buscarAuto(patente);
        if (autoVendido){
            autoVendido.vendido = true;
        }
    },
    autosParaLaVenta: function(patente){
       let autosDisponibles = autos.filter((item)=>{return item.vendido== true});
       return autosDisponibles;
    },
    autosNuevos: function(patente){
       let ceroKm = this.autosParaLaVenta(patente);
       if (ceroKm.km > 100){
          return autos;
       }else{
          return this.ceroKm < 100;
       }
    }
}
console.log(concesionaria.autosNuevos('JJK116'));