const cityName = document.querySelector(".city-name");
const searchbtn = document.querySelector(".btn");
const temp = document.querySelector(".temp");
const city_name = document.querySelector(".city");
const weatherIcon = document.querySelector(".weathericon");
const windValue = document.querySelector(".windvalue");
const humidityValue = document.querySelector(".humidityvalue");
const weather = document.querySelector(".weather");
const weatherDetail = document.querySelector(".weather-details");
const windText = document.querySelector(".windtext");
const humidityText = document.querySelector(".humiditytext");
const images = document.querySelector(".img1");
const images1 = document.querySelector(".img2");
const apiKey = "d00bdfd84868a9c5436fd997a0795ea0";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=d00bdfd84868a9c5436fd997a0795ea0&units=metric&q=`;

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  let data = await response.json();
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    weatherDetail.style.display = "none";
    document.querySelector(".weather-icon").style.display = "none";
  } else {
    city_name.innerHTML = data.name;
    weather.innerHTML = data.weather[0].main;
    temp.innerHTML = Math.round(data.main.temp) + " &#176C";
    windValue.innerHTML = data.wind.speed + " Km/h";
    humidityValue.innerHTML = data.main.humidity + "%";
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "humidity") {
      weatherIcon.src = "./images/humidity.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "./images/snow.png";
    } else if (data.weather[0].main === "Wind") {
      weatherIcon.src = "./images/wind.png";
    } else if (data.weather[0].main === "Haze") {
      weatherIcon.src = "./images/haze.png";
    }
    weatherDetail.style.display = "flex";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather-icon").style.display = "block";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(cityName.value);
});
