const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({

    Medicine_ID :{
        type:String,
        required:true,
        unique:true
    },
    
    Name:{
        type:String,
        required:true,
        unique:true

    },
    Medicine_NO:{
        type:Number,
        required:true,
        unique:true
    },
    Expire_Date:{
        type:Date,
        required:true
    },
    Purchased_Date:{
        type:Date,
        required:true
    }

});

const Stock = new mongoose.model("Stock",stockSchema);

module.exports = Stock;