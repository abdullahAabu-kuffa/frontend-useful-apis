// Example: Fetch popular movies from The Movie DB (replace YOUR_API_KEY)
fetch("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY")
  .then(res => res.json())
  .then(data => console.log(data.results))
  .catch(err => console.error(err));