// Entertainment APIs
const MOVIE_DB_KEY = "YOUR_API_KEY_HERE";
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_KEY}`)
  .then(res => res.json())
  .then(data => console.log("Popular Movies:", data.results.slice(0, 5)))
  .catch(err => console.error(err));

fetch("https://api.tvmaze.com/shows/1")
  .then(res => res.json())
  .then(data => console.log("TV Show:", data.name))
  .catch(err => console.error(err));

fetch("https://opentdb.com/api.php?amount=1&type=multiple")
  .then(res => res.json())
  .then(data => console.log("Trivia:", data.results[0].question))
  .catch(err => console.error(err));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(res => res.json())
  .then(data => console.log("Pokemon:", data.name))
  .catch(err => console.error(err));
