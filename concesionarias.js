const autos = require('./autos');

const concesionaria = {
    autos: autos
}
let buscarAuto = autos.find((patente, item) => {
    return item.patente == patente;
})
console.log(buscarAuto('APL123'));