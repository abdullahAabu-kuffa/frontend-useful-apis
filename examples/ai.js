// Example: Using OpenAI API (replace YOUR_API_KEY)
fetch("https://api.openai.com/v1/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    model: "text-davinci-003",
    prompt: "Hello AI!",
    max_tokens: 50
  })
})
  .then(res => res.json())
  .then(data => console.log(data.choices[0].text))
  .catch(err => console.error(err));