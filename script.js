
const form = document.getElementById("weatherForm");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temperature");
const feelsLike = document.getElementById("feelslike");
const condition = document.getElementById("condition");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const weatherInfo = document.getElementById("weatherInfo");

form.addEventListener("submit",async function(event){
    event.preventDefault();
    var city = document.getElementById("weatherInput").value;
    var weatherResponse = await fetch(`https://wttr.in/${city}?format=j1`);
    var weatherResponseJson = await weatherResponse.json();
    var currentConditionArray = weatherResponseJson.current_condition[0];
    console.log(weatherResponseJson);
    cityName.textContent = weatherResponseJson.nearest_area[0].areaName[0].value;
    temp.textContent = currentConditionArray.temp_C;
    feelsLike.textContent = currentConditionArray.FeelsLikeC;
    condition.textContent = currentConditionArray.weatherDesc[0].value;
    wind.textContent = currentConditionArray.windspeedKmph;
    humidity.textContent = currentConditionArray.humidity
    showWeatherCard();
})

function showWeatherCard(){
    weatherInfo.classList.remove("hidden");
}

function hideWeatherCard(){
    weatherInfo.classList.add("hidden");
}

hideWeatherCard();


