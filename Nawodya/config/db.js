import mongoose from "mongoose";

const connectToMongo=async()=>{
    try{
        const res = await mongoose.connect("mongodb+srv://it21293726:200168604663@cluster0.b798l2z.mongodb.net/?retryWrites=true&w=majority")
     if(res){
      console.log("connected sucessfully");
     }
      }catch(error){
          console.log(error);
      }
};

export default connectToMongo;
