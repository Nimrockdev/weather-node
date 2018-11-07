const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se han encontrado resultados para ${direccion}`)
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coordenadas.lat,
        longitud: coordenadas.lng
    }

}

module.exports = {
    getLugarLatLng
}