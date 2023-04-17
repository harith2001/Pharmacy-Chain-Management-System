require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const financeRoutes = require("./routes/FinanceDetails");

const corsOptions = {
  origin: "http://localhost:3000",
};

//express app
const app = express();

// cors
app.use(cors(corsOptions));

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/FinanceDetails", financeRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
