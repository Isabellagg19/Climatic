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
            'Mo MMM YYYY dddd, h:mm:ss'
        );

        document.querySelector('.main-weather').style.display = 'block';
    }
});

document.querySelector('main-weather').style.display = 'block';

function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${appi.key}&units=metric`)
    .then((details) => {
        return details.json();
    })
    .then(showWeather);
}
