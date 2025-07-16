

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

searchCity("Tokyo");

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
 
  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "ad7bf4ee5e6081078f1co03ce5e7fta5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
 
 
  let windSpeedElement = document.querySelector("#wind-speed");
   windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

  let timeElement = document.querySelector("#time");
    timeElement.innerHTML = formatDate(date);



}


 function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}${hours}:${minutes}`;
}