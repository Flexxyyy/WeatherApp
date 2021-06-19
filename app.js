const key='4617a29012fdf810525e4554e73a3ef0';
window.addEventListener("load",()=>{
    navigator.geolocation.getCurrentPosition((position)=> {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let weather;
    let cityName;
    let celcius;
    let info;
    let feel;
    let humidity;
    let pressure;
    let h3=document.getElementById('h3');
    let tempcont=document.getElementById('temp');
    let weatherInfo=document.getElementById('weather_info');
    let realFeel=document.getElementById('real_feel');
    let humidCont=document.getElementById('humidity');
    let pressureCont=document.getElementById('pressure');
        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
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
    })
});
