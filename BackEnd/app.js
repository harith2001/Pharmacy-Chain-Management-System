require ("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./harith/db/conn");
const Stock = require("./harith/models/stockSchema");
const cors = require("cors");
// const router = require("./harith/routes/router");
const router = require("./index.route")
const PDFDocument = require('pdfkit');
const port = 8003;

app.use(cors());
app.use(express.json());


app.use(router);

app.listen(port,()=>{
    console.log('server start',{port});
});

//genrate Report

// app.get('/generate-pdf',(req,res)=>{
    
//     const doc = new PDFDocument();
//     const filename = 'example.pdf';
//     res.setHeader('Content-disposition','attachment; filename ="'+filename+'"');
//     res.setHeader('Content-type','application/pdf');
//     doc.pipe(res);

//     doc.text('Hello World');
//     doc.end();
// });
