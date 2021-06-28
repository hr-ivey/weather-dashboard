// Targeting user input.
var city = document.getElementById("city-input").value;
var searchCity = document.getElementById("search-city")
// API key for OpenWeatherMap.
var APIKey = "35be878d31562e0b31926bafbd67983b"

function weatherTime(){
console.log("Button clicked. Function started.")
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
    .then (function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
        for (var i = 0; i < 5; i++) {
            var cityName = document.createElement("h3");
            var cityTemp = document.createElement("p");
            var cityWind = document.createElement("p");
            var cityHumid = document.createElement("p");
            var cityUV = document.createElement("p");

            cityName.textContent=data.name;
            cityTemp.textContent= ("Temperature: " + data.main.temp);
            cityWind.textContent=("Wind: " + data.wind.speed);
            cityHumid.textContent=("Humidity: " + data.main.humidity);
            cityUV.textContent=("UV: " + data.uv);

            dashboardMain.append(cityName);
            dashboardMain.append(cityTemp);
            dashboardMain.append(cityWind);
            dashboardMain.append(cityHumid);
            dashboardMain.append(cityUV);
            return
        }
    });
}

searchCity.addEventListener('click', weatherTime);