// News APIs
const NEWS_KEY = "YOUR_API_KEY_HERE";
fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_KEY}`)
  .then(res => res.json())
  .then(data => console.log("Top News:", data.articles[0].title))
  .catch(err => console.error(err));

const MEDIASTACK_KEY = "YOUR_API_KEY_HERE";
fetch(`http://api.mediastack.com/v1/news?access_key=${MEDIASTACK_KEY}&countries=us`)
  .then(res => res.json())
  .then(data => console.log("Mediastack:", data))
  .catch(err => console.error(err));
