// Example: Nutritionix API (replace YOUR_APP_ID and YOUR_API_KEY)
fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-app-id": "YOUR_APP_ID",
    "x-app-key": "YOUR_API_KEY"
  },
  body: JSON.stringify({ query: "1 apple" })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));