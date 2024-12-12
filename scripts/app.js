import { APIKEY } from './environment.js';   

let cityName = document.getElementById("cityName");
let currTempD1 = document.getElementById("currTempD1");
let hiTempD1 = document.getElementById("hiTempD1");
let loTempD1 = document.getElementById("loTempD1");
let windD1 = document.getElementById("windD1");
let percRainD1 = document.getElementById("percRainD1");


navigator.geolocation.getCurrentPosition(success, errorFunc);

{
    coords: {
        latitude: 32.1234;
        longitude: 13.1234;
    }
}

function success(position){
    console.log(position);
    console.log("Our latitude: " + position.coords.latitude);
    console.log("Our longitude: " + position.coords.longitude);
    console.log("We know where you are!");

}

function errorFunc(error){
    console.log(error.message);
}

function apiCall () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
}

apiCall();