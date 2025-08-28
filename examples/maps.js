// Maps APIs
fetch("https://nominatim.openstreetmap.org/search?format=json&q=Cairo")
  .then(res => res.json())
  .then(data => console.log("Coordinates of Cairo:", data[0]))
  .catch(err => console.error(err));

const MAPBOX_KEY = "YOUR_API_KEY_HERE";
fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=${MAPBOX_KEY}`)
  .then(res => res.json())
  .then(data => console.log("Mapbox London:", data.features[0]))
  .catch(err => console.error(err));
