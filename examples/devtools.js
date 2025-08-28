// Example: GitHub API request
fetch("https://api.github.com/users/octocat")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));