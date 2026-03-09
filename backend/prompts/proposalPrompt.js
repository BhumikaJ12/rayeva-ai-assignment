function createProposalPrompt(client_type, budget, goal){

return `
You are an AI sustainability procurement advisor.

Client Type: ${client_type}
Budget: ${budget}
Goal: ${goal}

Suggest sustainable products that help achieve the goal.

Rules:
- Total cost must not exceed the budget
- Recommend 3-5 products
- Include quantity, unit price, and total cost

Return STRICT JSON in this format:

{
 "recommended_products":[
  {
   "product_name":"",
   "quantity":0,
   "unit_price":0,
   "total_cost":0
  }
 ],
 "budget_summary":{
  "total_cost":0,
  "remaining_budget":0
 },
 "impact_summary":""
}

The impact summary should explain environmental benefits in simple business language.
`
}

module.exports = createProposalPrompt;