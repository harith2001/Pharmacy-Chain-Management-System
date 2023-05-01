const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({

    Branch_ID :{
        type:String,
        required:true,
        unique:true
    },
    
    BranchLocation:{
        type:String,
        required:true,
        unique:true

    },
    
    BManager:{
        type:String,
        required:true,
        
    },

    Purchases:{
        type:String,
        required:true
    },

    ReturnedGoods:{
        type:String,
        required:true
    },

    BestSellingProduct:{
        type:String,
        required:true
    }

});

const Branch = new mongoose.model("Branch",branchSchema);

module.exports = Branch;