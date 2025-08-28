// Example: Fetch news using NewsAPI (replace YOUR_API_KEY)
fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY")
  .then(res => res.json())
  .then(data => console.log(data.articles))
  .catch(err => console.error(err));