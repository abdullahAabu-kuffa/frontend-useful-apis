// Example: Stripe API (replace YOUR_API_KEY)
fetch("https://api.stripe.com/v1/products", {
  headers: {
    "Authorization": "Bearer YOUR_API_KEY"
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));