// Weather APIs
fetch("https://api.open-meteo.com/v1/forecast?latitude=30&longitude=31&hourly=temperature_2m")
  .then(res => res.json())
  .then(data => console.log("Cairo Weather:", data.hourly.temperature_2m.slice(0, 5)))
  .catch(err => console.error(err));

const OPENWEATHER_KEY = "YOUR_API_KEY_HERE";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=${OPENWEATHER_KEY}`)
  .then(res => res.json())
  .then(data => console.log("OpenWeather:", data))
  .catch(err => console.error(err));
