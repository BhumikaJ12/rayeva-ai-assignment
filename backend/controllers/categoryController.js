
const generateAIResponse = require("../services/aiService");
const createPrompt = require("../prompts/categoryPrompt");
const Product = require("../models/Product");
const PromptLog = require("../models/PromptLog");

exports.generateCategory = async (req,res)=>{

 try{

  const {name,description} = req.body;

  const prompt = createPrompt(name,description);

  const aiResponse = await generateAIResponse(prompt);
  await PromptLog.create({
  module: "category-generator",
  prompt: prompt,
  response: aiResponse
});

  const parsed = JSON.parse(aiResponse);

  const newProduct = new Product({
   name,
   description,
   primary_category: parsed.primary_category,
   sub_category: parsed.sub_category,
   seo_tags: parsed.seo_tags,
   sustainability_filters: parsed.sustainability_filters
});

await newProduct.save();

res.json({
 success: true,
 data: newProduct
});

 }catch (error) {

 console.log("ERROR:", error);

 res.status(500).json({
  error: error.message
 });

}

}