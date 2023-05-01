const mongoose = require ( "mongoose");

const medSchema = mongoose.Schema({
    
    medID: {
        type: String,
    },

    brandName: {
        type: String,
    },

    genericName: {
        type: String,
    },

    catgType: {
        type: String,
    },

    manufacturer: {
        type: String,
    },

    stock: {
        type: Number,
    },

    expNotation: {
        type: Number,
    },

    price: {
        type: Number,
    },

    discount: {
        type: String,
    }
    
});

const medModel = new mongoose.model("medicines", medSchema);
module.exports = medModel;