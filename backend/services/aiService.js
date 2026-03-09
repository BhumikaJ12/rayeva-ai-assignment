const OpenAI = require("openai");

const client = new OpenAI({
 apiKey: process.env.OPENAI_API_KEY
});

async function generateAIResponse(prompt){

 const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
   {role:"system",content:"Return only valid JSON"},
   {role:"user",content:prompt}
  ],
  temperature:0.3
 });

 return response.choices[0].message.content;
}

module.exports = generateAIResponse;