import mongoose from "mongoose";

const connectToMongo=async()=>{
    try{
        const res= await mongoose.connect("mongodb+srv://harith:harith2001@stock.nvrd981.mongodb.net/Stock?retryWrites=true&w=majority"); 
     if(res){
      console.log("connected sucessfully");
     }
      }catch(error){
          console.log(error);
      }
};

export default connectToMongo;