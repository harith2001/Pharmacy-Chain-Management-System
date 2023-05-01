// import cors from "cors"
// import express from "express";
// import connectToMongo from "./config/db.js";
// import cusRoutes from "./routes/customer.js";

// const app = express();
// const PORT =process.env.PORT||8001;
// connectToMongo();


// //apply middleware
// app.use(express.json())

// //cors
// app.use(cors());

// app.get("/", (req,res) =>{
//     res.send("api is running");
// });

// //routes
// app.use("/api/v1",cusRoutes)

// app.listen(PORT,()=>{

//     console.log(`Api is on http://localhost:${PORT}`);
// })