const express = require("express");
const router = express.Router();
const Stock = require("../models/stockSchema");
const insertStock = require("../controller/stockerController");



//insert stock
router.post("/Insert", insertStock)

//get all stock data
// In this we can send get request and get all available data in the database

router.get("/getdata",async(req,res)=>{

    try {
        const stockdata = await Stock.find();
        res.status(201).json(stockdata);
        console.log(stockdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

//get individual for stock details
//In this we will able to send a get request with specific ID and get the specific ID date from the database

router.get("/getstock/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const{id}=req.params;

        const stockindividual = await Stock.findById({_id:id});
        console.log(stockindividual);
        res.status(201).json(stockindividual)

    } catch (error) {
        res.status(422).json(error)
    }
})

//update stock details 

router.patch("/updatestock/:id",async(req,res)=>{
    try {
        const{id}=req.params;

        const updatestock = await Stock.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updatestock);
        res.status(201).json(updatestock);

    } catch (error) {
        res.status(422).json(error);
    }
})

//detele stock
router.delete("/deletestock/:id",async(req,res)=>{
    try {
        const{id}=req.params;

        const deletestock = await Stock.findByIdAndDelete({_id:id});
        console.log(deletestock);
        res.status(201).json(deletestock);

    } catch (error) {
        res.status(422).json(error);
    }
})


//Search Stock
router.get("/searchdata/:Medicine_ID",async(req,res)=>{
    try {
        console.log(req.params);
        const{Medicine_ID}=req.params;

        const stocksearch = await Stock.findOne({Medicine_ID:Medicine_ID});
        console.log(stocksearch);
        res.status(201).json(stocksearch)

    } catch (error) {
        res.status(422).json(error)
    }
})

// test route
router.get("/test", async(req, res) => {
    try{
        res.json("Harith server")
    }catch(error){
        console.log(error);
    }
})

module.exports = router;