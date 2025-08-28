// Example: Fetch location using PositionStack (replace YOUR_API_KEY)
fetch("http://api.positionstack.com/v1/forward?access_key=YOUR_API_KEY&query=Cairo")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));