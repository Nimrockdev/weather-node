const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'X-RapidAPI-Key': '30e05993bemsh63158fa139412a4p1ee62ajsn03f39c49ccd9' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    console.log('Dirección: ' + direccion);
    console.log('Latitud: ' + lat);
    console.log('Longitud: ' + lng);

    return {
        direccion,
        lat,
        lng
    }

    // let encodeURL = encodeURI(direccion);
    // let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No se han encontrado resultados para ${direccion}`)
    // }

    // let location = resp.data.results[0];
    // let coordenadas = location.geometry.location;

    // return {
    //     direccion: location.formatted_address,
    //     latitud: coordenadas.lat,
    //     longitud: coordenadas.lng
    // }

}

module.exports = {
    getLugarLatLng
}