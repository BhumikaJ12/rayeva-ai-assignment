const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema({

 client_type: String,

 budget: Number,

 goal: String,

 recommended_products: [
  {
   product_name: String,
   quantity: Number,
   unit_price: Number,
   total_cost: Number
  }
 ],

 budget_summary: {
  total_cost: Number,
  remaining_budget: Number
 },

 impact_summary: String

});

module.exports = mongoose.model("Proposal", ProposalSchema);