// Targeting user input.
var city = document.getElementById("city-input").value;
var searchCity = document.getElementById("search-city")
// API key for OpenWeatherMap.
var APIKey = "35be878d31562e0b31926bafbd67983b"

function weatherTime(){
console.log("Button clicked. Function started.")
console.log(city)
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey)
    .then (function (response) {
        return response.json();
    })
    .then (function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var cityName = document.createElement('h3');
            var cityTemp = document.createElement('p');
            var cityWind = document.createElement('p');
            var cityHumid = document.createElement('p');
            var cityUV = document.createElement('p');

            cityName.textContent=data[i].name;
            cityTemp.textContent=data[i].temp;
            cityWind.textContent=data[i].wind;
            cityHumid.textContent=data[i].humidity;
            cityUV.textContent=data[i].name;

            console.log(cityName);


            dashboard-mainContainer.append(cityName);
            dashboard-mainContainer.append(cityTemp);
        }
    });
}

searchCity.addEventListener('click', weatherTime);

