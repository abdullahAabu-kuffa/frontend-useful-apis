// Example: Fetch random user
fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(data => console.log(data.results[0]))
  .catch(err => console.error(err));