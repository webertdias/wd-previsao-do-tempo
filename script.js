// variaveis e seleção de elementos DOM
const apiKey = "ddf85b4f6c1ce572966991a36cc517a8";

const cityInput = document.querySelector("#place");
const search = document.querySelector("#search");


const degree = document.querySelector("#degree");
const country = document.querySelector("#country");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");


//funções


const showWeatherData = (city) => {

    console.log(city);
}


//eventos
search.addEventListener('click', (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})