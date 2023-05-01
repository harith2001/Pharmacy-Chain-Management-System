// import express from "express";
// import cors from "cors";
// import connectToMongo from "./config/db.js";
// import mediRoutes from "./routes/medicine.js";
// const app = express();
// const PORT = process.env.PORT || 8001;
// connectToMongo();

// //apply middlemare
// app.use(express.json());


// //cors
// app.use(cors());

// app.get("/", (req,res) => {
//     res.send("Api is running")
// });

// //routes
// app.use("/api/v1",mediRoutes);


// app.listen(PORT, () => {
//     console.log(`Api is running on http://localhost:${PORT}`)
// }); 