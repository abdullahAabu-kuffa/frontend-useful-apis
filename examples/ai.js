// AI APIs
const OPENAI_KEY = "YOUR_API_KEY_HERE";
fetch("https://api.openai.com/v1/models", {
  headers: { "Authorization": `Bearer ${OPENAI_KEY}` }
})
  .then(res => res.json())
  .then(data => console.log("OpenAI Models:", data))
  .catch(err => console.error(err));

const HF_KEY = "YOUR_API_KEY_HERE";
fetch("https://api-inference.huggingface.co/models/distilbert-base-uncased", {
  headers: { "Authorization": `Bearer ${HF_KEY}` }
})
  .then(res => res.json())
  .then(data => console.log("HuggingFace Model Info:", data))
  .catch(err => console.error(err));
