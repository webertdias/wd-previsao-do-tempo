// variaveis e seleção de elementos DOM
const apiKey = 'ddf85b4f6c1ce572966991a36cc517a8';

const cityInput = document.querySelector("#city");
const search = document.querySelector("#search");

const names = document.querySelector("#name");
const degree = document.querySelector("#degree");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const container = document.querySelector("#container")


//funções
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) => {

  const data = await getWeatherData(city);

    names.innerHTML = data.name;
    degree.innerHTML = parseInt(data.main.temp);
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}KM/h`;
    container.classList.remove("container");

};


//eventos
search.addEventListener('click', (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})