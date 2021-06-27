// 위치,온도 표시
const weather = document.querySelector('.weather');

const API_KEY = '241051bf13976dd3ddf8b8d9f247255e';

function getWeather(lat,lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response) {
        return response.json()}).then(function(json) {
            console.log(json);
            const temp = json.main.temp;
            const city = json.name;
            weather.innerText = `${temp}°C ${city}`;
        })
    }


function getFail() {
    console.log('retrying for success');
    getcurrentPosition();
}

function getSuccess(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const weadobj = {
        lat:lat,
        lng:lng
    };
    saveWeather(weadobj);
    getWeather(weadobj.lat,weadobj.lng);
}

function getcurrentPosition() {
    navigator.geolocation.getCurrentPosition(getSuccess,getFail);
}

function saveWeather(weadobj) {
    localStorage.setItem('weather',JSON.stringify(weadobj));
}
function loadweather() {
    const wead = localStorage.getItem('weather');
    if (wead === null) {
        getcurrentPosition();
    } else {
        const parsedwead = JSON.parse(wead);
        getWeather(parsedwead.lat,parsedwead.lng);
    }
}


function init() {
    loadweather();
}

init();
