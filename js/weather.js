const API_KEY = "7dbcd2d78b2e279245a789d78463b8db";
function onGeoTrue(position) {
    const lat = 37.5807011
    const lon = 127.214913
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather-api span:nth-child(1)");
        city.innerText  =  `${data.weather[0].main} ${data.name}❤️‍🔥`;
    })    
}

function onGeoFalse() {
    alert("위치 정보를 찾을 수 없습니다.")
}




navigator.geolocation.getCurrentPosition(onGeoTrue,onGeoFalse);