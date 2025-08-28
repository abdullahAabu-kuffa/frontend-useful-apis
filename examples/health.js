// Health APIs
const APP_ID = "YOUR_APP_ID";
const APP_KEY = "YOUR_APP_KEY";
fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-app-id": APP_ID,
    "x-app-key": APP_KEY
  },
  body: JSON.stringify({ query: "2 eggs" })
})
  .then(res => res.json())
  .then(data => console.log("Nutrition Info:", data))
  .catch(err => console.error(err));

fetch("https://disease.sh/v3/covid-19/all")
  .then(res => res.json())
  .then(data => console.log("COVID Data:", data))
  .catch(err => console.error(err));
