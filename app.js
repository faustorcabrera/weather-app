document.getElementById('getWeather').addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=bd5e378503939ddaee76f12ad7a97608')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById('weather').innerText = `The weather in Longview is ${data.weather[0].main}`;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});
