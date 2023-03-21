const place = document.querySelector("place");
const button = document.querySelector("button");
const city = document.querySelector("city");
const degree = document.querySelector("degree");

addEventListener(click, function buscarCidade(){
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'(
    place.value
    )})