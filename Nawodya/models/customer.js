
const mongoose = require ("mongoose");

const cusSchema = mongoose.Schema({
    customerID: {
        type:Number,
        required:true,
        unique: true,
    },
    customerName: {
        type:String,
        required: true, 
        minlength: 2,
        maxlenth:50,
    },
    customerAge: {
        type: Number,
    },
    customerNumber: {
        type: String,
    },
    customerEmail: {
        type: String,
    },
    customerAddress: {
        type: String,
    },
    customerOrder: {
        type: String,
    }
});

const customerModel = mongoose.model("customer",cusSchema);

module.exports = customerModel;