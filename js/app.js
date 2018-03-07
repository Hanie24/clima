//hacer una funcion
fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4d9a81218adf15a76b4861c56b81baf/37.8267,-122.4233/`)
    .then(function(response){
        response.json().then(function(result){
            WeatherOfTheWeek(result.daily);
        });
    })

const WeatherOfTheWeek = () => {
    
    // let containerClimate = document.getElementById('weather-of-The-WeekontainerClimate');
}