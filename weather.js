const API_KEY = "1292bed18e9b85d8ee2f56db9203d268";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeater(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const tem = json.main.temp;
        const place = json.name;
        weather.innerText = `${tem} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeater(latitude, longitude);
}

function askForCoords(){
    console.log("ask")
    navigator.geolocation.getCurrentPosition(handleGeoSucces, () => console.log("Can't access geo location"));
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeater(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadCoords();
}

init();