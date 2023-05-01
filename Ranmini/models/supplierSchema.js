const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({

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
    Address:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Amount:{
        type:Number,
        required:true,
        unique:true
    },
    Price:{
        type:Number,
        required:true,
        unique:true
    },
    Contact_number:{
        type:Number,
        required:true,
        unique:true
    },
    Date:{
        type:Date,
        required:true,
        unique:true
    }

});

const Supplier = new mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;