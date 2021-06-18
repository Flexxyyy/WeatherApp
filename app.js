const key='4617a29012fdf810525e4554e73a3ef0';
let lat;
let lon;
let zipCode;
let countryCode;
let cityName;
// fetching lat and lon from data api 

// fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=110084,IN&appid=${key}`).then(response=>{
//     return response.json();
// }).then(data=>{
//     console.log(data);
//     lat=data.lat;
//     lon=data.lon;
//     zipCode=data.zip;
//     countryCode=data.country;
//     cityName=data.name;
//     console.log(lat,lon,zipCode,countryCode,cityName)
// })

// fetching weather details

// const api=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;


















let h3=document.getElementById('h3');
let tempcont=document.getElementById('temp');
let weatherInfo=document.getElementById('weather_info');
let realFeel=document.getElementById('real_feel');
let humidCont=document.getElementById('humidity');
let pressureCont=document.getElementById('pressure');

let temp;
let celcius;
let info;
let feel;
let humidity;
let pressure;
window.addEventListener('load',()=>{
    let weather;
    const api=`http://api.openweathermap.org/data/2.5/weather?lat=28.7486&lon=77.2096&appid=4617a29012fdf810525e4554e73a3ef0`;
    fetch(api)
    .then(res=>{return res.json();})
    .then(data=>{
    weather=data.main.temp;
    cityName=data.name;
    info=data.weather[0].description;
    feel=data.main.feels_like;
    humidity=data.main.humidity;
    pressure=data.main.pressure;
    console.log(data)
    const keltocel=()=>{
        celcius=weather-273.15;
        return celcius;
    }
    h3.innerText=cityName;
    celcius=Math.floor(keltocel());
    tempcont.innerText=`${celcius} °`;
    weatherInfo.innerText=info;
    feel=Math.floor(keltocel(feel));
    realFeel.innerText=`${feel} °`;
    humidCont.innerText=`${humidity} %`;
    pressureCont.innerText=`${pressure} mb`
})
    
});