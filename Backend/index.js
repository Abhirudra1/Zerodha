require('dotenv').config();

const express = require("express")
const mongoose = require("mongoose")
const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
.then(()=> console.log("Connected"))

app.listen(PORT, ()=>{
    console.log("Listing at port 3002");
})