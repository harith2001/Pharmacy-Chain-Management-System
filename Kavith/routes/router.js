const express = require("express");
const Branch = require("../models/branchSchema");
const router = express.Router();

router.get("/branch/test", (req, res) => {
    res.send("Finance Details route is working");
  });


//insert stock

router.post("/branch/Insert",async(req,res)=>{
//    console.log(req.body);

   const{Branch_ID, BranchLocation, BManager,Purchases,ReturnedGoods,BestSellingProduct} = req.body;

   if(!Branch_ID ||! BranchLocation ||!BManager ||!Purchases ||!ReturnedGoods ||!BestSellingProduct){
    res.status(422).json("Please Fill The Data");
   }

   try {

    const prestock = await Branch.findOne({Branch_ID:Branch_ID});
    console.log(prestock);

    if(prestock){
        res.status(422).json("This is Branch is already added ! ");
    }else{
        const addbranch = new Branch({
            Branch_ID, BranchLocation, BManager,Purchases,ReturnedGoods,BestSellingProduct
        });

        await addbranch.save();
        res.status(201).json(addbranch);
        console.log(addbranch);
    }
    
   } catch (error) {
    res.status(422).json(error);
   }
})

//get stock data
// In this we can send get request and get all available data in the database

router.get("/branch/getdata",async(req,res)=>{

    try {
        const branchdata = await Branch.find();
        res.status(201).json(branchdata);
        console.log(branchdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

//get individual stock details
//In this we will able to send a get request with specific ID and get the specific ID date from the database

router.get("/branch/getbranch/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const{id}=req.params;

        const branchindividual = await Branch.findById({_id:id});
        console.log(branchindividual);
        res.status(201).json(branchindividual)

    } catch (error) {
        res.status(422).json(error)
    }
})

//update stock details 

router.patch("/branch/updatebranch/:id",async(req,res)=>{
    try {
        const{id}=req.params;

        const updatebranch = await Branch.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updatebranch);
        res.status(201).json(updatebranch);

    } catch (error) {
        res.status(422).json(error);
    }
})

//detele stock
router.delete("/branch/deletebranch/:id",async(req,res)=>{
    try {
        const{id}=req.params;

        const deletebranch = await Branch.findByIdAndDelete({_id:id});
        console.log(deletebranch);
        res.status(201).json(deletebranch);

    } catch (error) {
        res.status(422).json(error);
    }
})


//Search Stock
router.get("/branch/searchdata/:Branch_ID",async(req,res)=>{
    try {
        console.log(req.params);
        const{Branch_ID}=req.params;

        const branchsearch = await Branch.findOne({Branch_ID:Branch_ID});
        console.log(branchsearch);
        res.status(201).json(branchsearch)

    } catch (error) {
        res.status(422).json(error)
    }
})


module.exports = router;