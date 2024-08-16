const apiKey = "42be49389e571ab4e0db96f8058399d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".srch");
const searchBtn = document.querySelector(".srch-btn");
const weatherIcon = document.querySelector(".wthr-icn");



async function checkWeather(city) {
  const response = await fetch(apiUrl +city + `&appid=${apiKey}`);
  let value = await response.json();
  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else{
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
  }
  
  console.log(value);
  
  document.querySelector(".humidity").innerHTML=value.main.humidity + " %";
  document.querySelector(".temp").innerHTML=value.main.temp + " °C";
  document.querySelector(".city").innerHTML=value.name;
  document.querySelector(".wind").innerHTML=value.wind.speed + " km/h";
  
  if (value.weather[0].main == "Clouds"){
    weatherIcon.src="images/clouds.png";
  }
  else if(value.weather[0].main== "Clear"){
    weatherIcon.src="images/clear.png";
  }
  else if(value.weather[0].main== "Drizzle"){
    weatherIcon.src="images/drizzle.png";
  }
  else if(value.weather[0].main== "Mist"){
    weatherIcon.src="images/mist.png";
  }
  else if(value.weather[0].main== "Rain"){
    weatherIcon.src="images/rain.png";
  }
  else if(value.weather[0].main== "Snow"){
    weatherIcon.src="images/snow.png";
  }
  }


searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
})

