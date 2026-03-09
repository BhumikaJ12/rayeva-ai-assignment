const generateAIResponse = require("../services/aiService");
const createProposalPrompt = require("../prompts/proposalPrompt");

const Proposal = require("../models/Proposal");
const PromptLog = require("../models/PromptLog");

exports.generateProposal = async (req, res) => {

 try{

  const { client_type, budget, goal } = req.body;

  const prompt = createProposalPrompt(client_type, budget, goal);

  const aiResponse = await generateAIResponse(prompt);

  await PromptLog.create({
   module: "b2b-proposal-generator",
   prompt: prompt,
   response: aiResponse
  });

  const parsed = JSON.parse(aiResponse);

  const proposal = new Proposal({
   client_type,
   budget,
   goal,
   recommended_products: parsed.recommended_products,
   budget_summary: parsed.budget_summary,
   impact_summary: parsed.impact_summary
  });

  await proposal.save();

  res.json({
   success: true,
   data: proposal
  });

 }catch(error){

  console.log(error);

  res.status(500).json({
   error: "Proposal generation failed"
  });

 }

};