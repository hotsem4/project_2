const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY = 'e067c23109efc86fc64a24740ecc1c55';

function onGeoOk(position) {
  // const lat = position.coords.latitude;
  // const lon = position.coords.longitude;
  const lat = 35.945152;
  const lon = 126.682793;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(error) {
  alert('위치를 찾을수 없습니다! 다시 확인해주세요.');
  console.log('Error code: ' + error.code);
  console.log('Error message: ' + error.message);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
