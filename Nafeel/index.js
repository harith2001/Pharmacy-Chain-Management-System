// import express from "express";
// import cors from "cors";
// import connectToMongo from "./config/db.js";
// import empRoutes from "./routes/emp.js"
// const app = express();
// const PORT = process.env.PORT || 7000;
// connectToMongo();

// //middleware
// app.use(express.json());

// //cors
// app.use(cors());

// app.get("/", (req,res) => {
//     res.send("Api is running")
// });

// //routrs
// app.use("/api/v1", empRoutes)

// app.listen(PORT , () => {
//     console.log(`Api is running on http://localhost:${PORT}`);
// });