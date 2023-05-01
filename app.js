require ("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// require("./harith/db/conn");
const Stock = require("./harith/models/stockSchema");
//const financeSchema = require("./Shehani/models/FinanceDetailsModel");
const cors = require("cors");
// const router = require("./harith/routes/router");
const router = require("./index.route")
const port = 8003;

const DB = "mongodb+srv://harith:harith2001@stock.nvrd981.mongodb.net/Stock?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));

app.use(cors());
app.use(express.json());


app.use(router);

app.listen(port,()=>{
    console.log('server start',{port});
});



