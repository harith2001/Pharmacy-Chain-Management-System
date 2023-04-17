const mongoose = require("mongoose");

const DB = "mongodb+srv://harith:harith2001@stock.nvrd981.mongodb.net/Stock?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));