// E-Commerce APIs
const STRIPE_KEY = "YOUR_API_KEY_HERE";
fetch("https://api.stripe.com/v1/products", {
  headers: { "Authorization": `Bearer ${STRIPE_KEY}` }
})
  .then(res => res.json())
  .then(data => console.log("Stripe Products:", data))
  .catch(err => console.error(err));
