const axios = require('axios');

console.log('Hello world')

let apikey = "8cc2a8032b2f43e35b005a37fe9cfff1";
let city = "Bogota, col";

let requestConfig = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey,
};

let objPromise = axios(requestConfig);

objPromise
    .then(function (response) {
        console.log("la temperatura en Bogota es: " + (response.data.main.temp - 273.15).toFixed(2).toString() + " grados Celcius");
    })
    .catch(function (err) {
        console.log(err);
    });