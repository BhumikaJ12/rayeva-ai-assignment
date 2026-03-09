const express = require("express");

const router = express.Router();

const {generateCategory} = require("../controllers/categoryController");
const { generateProposal } = require("../controllers/proposalController");

router.post("/category",generateCategory);
router.post("/proposal", generateProposal);

module.exports = router;