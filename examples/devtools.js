// Dev Tools APIs
fetch("https://httpbin.org/get")
  .then(res => res.json())
  .then(data => console.log("HTTPBin GET:", data))
  .catch(err => console.error(err));
