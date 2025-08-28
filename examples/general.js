// General APIs Examples
fetch("https://api.publicapis.org/entries")
  .then(res => res.json())
  .then(data => console.log("Public APIs:", data.count))
  .catch(err => console.error(err));

fetch("https://www.boredapi.com/api/activity")
  .then(res => res.json())
  .then(data => console.log("Activity:", data))
  .catch(err => console.error(err));

fetch("https://reqres.in/api/users/2")
  .then(res => res.json())
  .then(data => console.log("User:", data))
  .catch(err => console.error(err));

fetch("https://dummyjson.com/products/1")
  .then(res => res.json())
  .then(data => console.log("Product:", data))
  .catch(err => console.error(err));
