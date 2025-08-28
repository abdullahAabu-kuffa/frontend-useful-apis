# 🌐 Useful APIs for Frontend Developers

> A curated collection of APIs that frontend developers can use for testing, learning, or real-world projects.  
> Each category includes links + example code in the `examples` folder.

---

## 📌 General APIs
- [public-apis.io](https://public-apis.io) — More than 15,000 free APIs
- [open-notify.org](http://open-notify.org) — NASA data like ISS location
- [boredapi.com](https://boredapi.com) — Random activities to beat boredom
- [httpbin.org](https://httpbin.org) — Test HTTP requests
- [reqres.in](https://reqres.in) — Fake API for login/register testing
- [dummyjson.com](https://dummyjson.com) — Fake JSON data

🔹 Example: [examples/general.js](./examples/general.js)

---
## 🌦️ Weather APIs
- [OpenWeatherMap](https://openweathermap.org)
- [WeatherAPI](https://weatherapi.com)
- [MetaWeather](https://www.metaweather.com/api/)
- [WeatherStack](https://weatherstack.com)

🔹 Example: [examples/weather.js](./examples/weather.js)

---
## 🎬 Entertainment APIs
- [The Movie DB](https://www.themoviedb.org/)
- [TV Maze](https://www.tvmaze.com/api)
- [Open Trivia DB](https://opentdb.com)
- [PokéAPI](https://pokeapi.co)

🔹 Example: [examples/entertainment.js](./examples/entertainment.js)

---
## 🗺️ Maps & Location APIs
- [Mapbox](https://mapbox.com)
- [Positionstack](https://positionstack.com)
- [OpenCage](https://opencagedata.com)
- [GeoNames](https://www.geonames.org/)
- [OpenStreetMap](https://www.openstreetmap.org/)

🔹 Example: [examples/maps.js](./examples/maps.js)

---
## 🤖 AI & Machine Learning APIs
- [OpenAI](https://openai.com)
- [Hugging Face](https://huggingface.co)
- [Clarifai](https://clarifai.com)
- [DeepAI](https://deepai.org)

🔹 Example: [examples/ai.js](./examples/ai.js)

---
## 🏥 Health APIs
- [Nutritionix](https://developer.nutritionix.com/)
- [OpenFDA](https://open.fda.gov/)
- [Fitbit](https://dev.fitbit.com)
- [Disease.sh](https://disease.sh)

🔹 Example: [examples/health.js](./examples/health.js)

---
## 📰 News APIs
- [NewsAPI](https://newsapi.org)
- [MediaStack](https://mediastack.com)
- [EventRegistry](https://eventregistry.org)

🔹 Example: [examples/news.js](./examples/news.js)

---
## 🛠️ Dev Tools APIs
- [GitHub API](https://docs.github.com/en/rest)
- [GitLab API](https://docs.gitlab.com/ee/api/)
- [Postman](https://www.postman.com/)
- [RapidAPI](https://rapidapi.com/)

🔹 Example: [examples/devtools.js](./examples/devtools.js)

---
## 🛒 E-Commerce APIs
- [Shopify](https://shopify.dev)
- [eBay API](https://developer.ebay.com)
- [Stripe](https://stripe.com)

🔹 Example: [examples/ecommerce.js](./examples/ecommerce.js)


## ▶️ How to Run
Make sure you have **Node.js v18+** installed.

Run an example with:
```bash
node examples/general.js
```

## 🔑 API Keys
Some APIs require authentication. Replace the placeholder values (`YOUR_API_KEY_HERE`) with your real API keys.

| Service           | How to Get Key |
|-------------------|----------------|
| OpenWeatherMap    | https://openweathermap.org/api |
| The Movie DB (TMDB) | https://www.themoviedb.org/documentation/api |
| Mapbox            | https://www.mapbox.com/ |
| OpenAI            | https://platform.openai.com/ |
| HuggingFace       | https://huggingface.co/ |
| Nutritionix       | https://developer.nutritionix.com/ |
| NewsAPI           | https://newsapi.org/ |
| Mediastack        | https://mediastack.com/ |
| Stripe            | https://stripe.com/docs/api |

## ⚠️ Notes
- Some APIs (like OpenWeather, Stripe, OpenAI) require signup and keys.
- Free APIs (like BoredAPI, DummyJSON, TVMaze, PokeAPI, etc.) will work directly.
- If you see CORS errors in the browser, run them in **Node.js** instead.

Happy coding! 🚀