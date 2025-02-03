const apiKey = '06fd616ea407417e12ba60125bdf19b4';
const input = document.getElementById("enter");
const search = document.getElementById("search");
const cityNational = document.getElementById("city");
const time = document.getElementById("time");
const degree = document.getElementById("degree");
const weather = document.getElementById("weather");
const visi = document.getElementById("visi");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");

async function fetchData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

        const data = await response.json();
        console.log(data);

        cityNational.textContent = data.name + ',' + data.sys.country;
        time.textContent = new Date().toLocaleString('vi');
        degree.textContent = Math.round(data.main.temp - 273.15) + '*C';
        weather.textContent = data.weather[0].main;
        visi.textContent = data.visibility;
        wind.textContent = data.wind.speed;
        humidity.textContent = data.main.humidity;
    }
    catch(error){
        console.log(error)
    }
}

search.addEventListener("click", () => {
    let city = input.value.trim();
    fetchData(city);
})
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let city = input.value.trim();
        fetchData(city);
    }
})