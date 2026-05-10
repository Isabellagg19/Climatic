const api = {
    key: 'cd262200e7749c38590c5670d8d623fb',
    base: 'https://api.openweathermap.org/data/2.5/weather?',
};

const Input = document.getElementById('input');

Input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        getWeather(Input.value);

        const date = moment();
        document.getElementById('date').innerHTML=date.format(
            'DD MMM YYYY, HH:mm:ss'
        );

        document.querySelector('.main-weather').style.display = 'block';
    }
});


function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)
    .then((details) => {
        return details.json();
    })
    .then(showWeather);
}

function showWeather(details) {

    console.log(details);
    
    let city = document.getElementById('city');
    city.innerHTML = `${details.name}, ${details.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(details.main.temp)}°C`;

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.round(
        details.main.temp_min
    )}°C (Min) and ${Math.round(details.main.temp_max)}°C (Max)`;

    let weatherType = document.getElementById('weather-type');
    weatherType.innerHTML = `${details.weather[0].main}`;

 let icon = document.getElementById('icon');
    let iconCode = details.weather[0].icon;
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    let weatherTypeIcon  = details.weather[0].main.toLowerCase();
    if (weatherTypeIcon.includes("cloud")) {
        document.body.style.backgroundImage = "https://openweathermap.org/payload/api/media/file/03n.@2png";
    } else if (weatherTypeIcon.includes("rain")) {
        document.body.style.backgroundImage = "https://openweathermap.org/payload/api/media/file/09n.@2png";
    } else if (weatherTypeIcon.includes("clear")) {
        document.body.style.backgroundImage = "https://openweathermap.org/payload/api/media/file/01n.@2png";
    } else {
        document.body.style.backgroundImage = "https://openweathermap.org/payload/api/media/file/50n.@2png";
    }

    let backgroundweather = details.weather[0].main.toLowerCase();
    if (backgroundweather.includes("cloud")) {
        document.body.style.backgroundImage = "url('cloudy.gif')";
    } else if (backgroundweather.includes("rain")) {
        document.body.style.backgroundImage = "url('rain.gif')";
    } else if (backgroundweather.includes("clear")) {
        document.body.style.backgroundImage = "url('clear.gif')";
} else {
    document.body.style.backgroundImage = "url('sunny.wedp')";
}
}
