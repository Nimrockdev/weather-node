const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=52d74726c8c4f3f652068bfe593e2684`)
    return resp.data.main.temp;

}

module.exports = {
    getClima

}