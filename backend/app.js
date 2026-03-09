require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const aiRoutes = require("./routes/aiRoutes");

app.use("/api/ai", aiRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Database Connected"))
.catch(err=>console.log(err));

const PORT = 5000;

app.listen(PORT, ()=>{
 console.log(`Server running on ${PORT}`);
});