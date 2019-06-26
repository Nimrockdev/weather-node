const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// Cargar modulos y crear nueva aplicacion
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        console.log('Dato introducido: ' + direccion);
        var coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return (`El clima en ${coors.direccion} es de ${temp}`);
    } catch (e) {
        return (`No se puede determinar el clima para ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// function Funcion1() {
//     console.log('TEST: Pulsamos Botón Función 1');;
// }

// Funcion1();


//Ejemplo: GET http://localhost:8080/items
// app.get('/Weather', function(req, res, next) {
//     var respuesta = 'aaa';
//     if (req.query.Descripcion) {
//         next();

//         getInfo(argv.direccion)
//             //     .then(mensaje => console.log(mensaje))
//             //     .catch(e => console.log(e));

//     }
//     res.send(req.query.Descripcion);
//     //console.log(req);

// });

// var server = app.listen(8080, function() {
//     console.log('Server is running ...');
// });