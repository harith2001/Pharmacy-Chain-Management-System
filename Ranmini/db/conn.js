const mongoose = require("mongoose");

// database connect

const DB = "mongodb+srv://ranmini:Rs2001822@suppliers.3fif2in.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));