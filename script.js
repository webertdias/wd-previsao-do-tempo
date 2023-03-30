const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector("img");

const city = document.querySelector("#city");
const degree = document.querySelector("#degree");

const content = querySelector(".content");

button.addEventListener("click", () =>{
    if (input.value) return;
    getWeatherData();
});

async function getWeatherData(){
    let urlApi = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key';

    try{
        await fetch(urlApi)
        .then((res) => res.json())
        .then((data)=>{
            if(data?.cod && data.cod === "404"){
                return alert("Cidade não encontrada");
            }
            loadWhatherInfo(data);
        })
    }catch(error){
        alert(error);
    }
}
function loadWhatherInfo(data){
    city.innerHTML = '${data.name}, $(data.sys.country)';
    degree.innerHTML = 'Temperatura: ${Math.floor(data.main.temp)}ºC';
    img.src = 'http://openweathermap.org/img/wn/${data.weather[0].icon}@2.png';
    content.style.display = "flex";
}