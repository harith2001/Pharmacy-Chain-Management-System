const mongoose = require( "mongoose");

const { Schema } = mongoose;
const medicineSchema = new Schema({
    medicine: { type: String},
    quantity: { type: Number },
  });
  

const disSchema=mongoose.Schema({
    dis_ID:{
        type:Number,
      
    },
    name:{
        type:String,
      
        minlength: 2,
        maxlenth:50,
    },
    email:{
        type:String,
       
        unique: true,
       
    },
    contact_no:{
        type:Number,
       
       
    },
    address:{
        type:String,
    },

    payments:{
        type: String,
        enum: ['paied', 'unpaid'],
    },
   ammount:{
        type:Number,
    },
    remark:{
        type: String,
    },
     medicines: {
        type: [medicineSchema], 
      
   }

});

const dismodel= new mongoose.model("distributor",disSchema);

module.exports = dismodel;