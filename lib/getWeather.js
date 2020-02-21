const fetch = require('node-fetch');
// const {promisify} = require ('util');

require('dotenv').config();

// const url =`http://api.openweathermap.org/data/2.5/find?q=London&units=metric&APPID=${process.env.APPID}`

// const promisifiedRequest = promisify(request);

async function getWeather(location, countryCode){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location},${countryCode}&units=metric&APPID=${process.env.APPID}`;

    let data = await fetch(url, {method: 'GET'})
        return await data.json();
}


// async function getabout(cityName, state, countryCode){
// const url = `pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName},${state},${countryCode}&APPID=${process.env.APPID}`;
//     let data2 = await fetch(url, {method: 'GET'})
//         return await data2.json();    
// }
// const getWeather = async () => {
//     let data = await fetch({
//         url: `http://api.openweathermap.org/data/2.5/find?q=London&units=metric&APPID=${process.env.APPID}`,
//         json: true
//     });
    
//     return data.body;
// }

module.exports = getWeather;