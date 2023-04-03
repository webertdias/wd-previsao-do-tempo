// variaveis e seleção de elementos DOM
const apiKey = 'ddf85b4f6c1ce572966991a36cc517a8';

const cityInput = document.querySelector("#city");
const search = document.querySelector("#search");


const degree = document.querySelector("#degree");
const country = document.querySelector("#country");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");


//funções
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);
};

const showWeatherData = (city) => {

    getWeatherData(city);
};


//eventos
search.addEventListener('click', (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})