const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

 name: String,
 description: String,

 primary_category: String,
 sub_category: String,

 seo_tags: [String],
 sustainability_filters: [String]

});

module.exports = mongoose.model("Product", ProductSchema);