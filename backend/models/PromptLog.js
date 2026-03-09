const mongoose = require("mongoose");

const PromptLogSchema = new mongoose.Schema({

 module: String,

 prompt: String,

 response: String,

 createdAt: {
  type: Date,
  default: Date.now
 }

});

module.exports = mongoose.model("PromptLog", PromptLogSchema);