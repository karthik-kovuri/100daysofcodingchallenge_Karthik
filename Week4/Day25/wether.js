async function getWeather() {
    const apiKey = '4eb3703790b356562054106543b748b2'; 
    const city = document.getElementById('cityInput').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');

    if (!city) {
        weatherInfo.innerText = 'Please enter a city name.';
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found. Please enter a valid city name.');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherInfo.innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `<p>City: ${cityName}</p>
                       <p>Temperature: ${temperature}°C</p>
                       <p>Weather: ${description}</p>`; 
    
}