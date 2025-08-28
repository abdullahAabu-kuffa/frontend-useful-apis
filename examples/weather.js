// Example: Fetch weather from OpenWeatherMap (replace YOUR_API_KEY)
fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));