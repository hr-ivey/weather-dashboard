// Targeting user input.
var city = document.getElementById("city-input").value;
var searchCity = document.getElementById("search-city")
// API key for OpenWeatherMap.
var APIKey = "35be878d31562e0b31926bafbd67983b"

function weatherTime(){
console.log("Primary city weather function started.")
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
    .then (function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
            var cityName = document.createElement("h3");
            var cityTemp = document.createElement("p");
            var cityWind = document.createElement("p");
            var cityHumid = document.createElement("p");
            var cityUV = document.createElement("p");
            var today = new Date().toISOString().slice(0,10)

            cityName.textContent=data.name + " - " + today;
            cityTemp.textContent= ("Temperature: " + data.main.temp);
            cityWind.textContent=("Wind: " + data.wind.speed);
            cityHumid.textContent=("Humidity: " + data.main.humidity);
            cityUV.textContent=("UV Index: " + data.uv);

            dashboardMain.append(cityName, cityTemp, cityWind, cityHumid, cityUV);
            return
    });
}

function fiveDay(){
    console.log("Five day forecast function started.")
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey)
    .then (function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
        for (var i = 0; i < 5; i++) {
            var fiveDayDiv = document.createElement("div");[0];
            fiveDayDiv.className= "fiveday col";
            fiveDaySection.append(fiveDayDiv);

            var fiveDate = document.createElement("p");
            var fiveTemp = document.createElement("p");
            var fiveWind = document.createElement("p");
            var fiveHumid = document.createElement("p");

            fiveDate.textContent= data.list[0].dt_txt;
            fiveTemp.textContent= ("Temperature: " + data.list[0].main.temp);
            fiveWind.textContent=("Wind: " + data.list[0].dt_txt);
            fiveHumid.textContent=("Humidity: " + data.list[0].dt_txt);

            fiveDayDiv.append(fiveDate, fiveTemp, fiveWind, fiveHumid);
        }
    });
}

searchCity.addEventListener('click', weatherTime);
searchCity.addEventListener('click', fiveDay);