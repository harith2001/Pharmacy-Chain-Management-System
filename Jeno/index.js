// import express from "express";
// import cors from "cors";
// import connectToMongo from "./config/db.js";//import database
// import distributorRoutes from "./routes/distributor.js"
// const app=express();
// const PORT=process.env.PORT || 9000;
// connectToMongo(); //call mongodb from config folder


// //apply middleware
// app.use(express.json());


// //cors
// app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("api is running");
// });


// //routes

// app.use("/api/v1",distributorRoutes);


// app.listen(PORT,()=>{
//     console.log(`api is running on http://localhost:${PORT}`);
// })