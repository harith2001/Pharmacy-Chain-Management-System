// require ("dotenv").config();
// require("./db/conn");
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Supplier = require("./models/supplierSchema");
// const cors = require("cors");
// const router = require("./routes/router");
// const port = 8003;

// app.use(cors());
// app.use(express.json());


// app.use(router);

// app.listen(port,()=>{
//     console.log('server start',{port});
// });



// //image uploading
// app.use(express.json({ limit: "500mb" }));
// app.use(
//   express.urlencoded({ limit: "500mb", extended: true, parameterLimit: 100000 })
// );
// app.post("/api/upload", async (req, res) => {
//   try {
//     const filestr = req.body.data;
//     const uploadResponse = await cloudinary.uploader.upload(filestr, {
//       upload_preset: "ml_default",
//     });
//     console.log(uploadResponse);
//     res.json({ msg: "successful" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "something went wrong" });
//   }
// });
