const express = require("express");
const router = express.Router();
const Supplier = require("../models/supplierSchema");



router.get("/supplier/test", (req, res) => {
    res.send("Finance Details route is working");
  });

//insert supplier

router.post("/supplier/Insert",async(req,res)=>{
   // console.log(req.body);

   const{Medicine_ID, Name, Address, Email, Contact_number, Amount, Price, Date} = req.body;

   if(!Medicine_ID ||!Name  ){
    res.status(422).json("Please Fill The Data");
   }

   try {

    const presupplier = await Supplier.findOne({Name:Name});
    console.log(presupplier);

    if(presupplier){
        res.status(422).json("This is Supplier is already added ! ");
    }else{
        const addsupplier = new Supplier({
            Medicine_ID, Name, Address, Email, Contact_number, Amount, Price, Date
        });

        await addsupplier.save();
        res.status(201).json(addsupplier);
        console.log(addsupplier);
    }
    
   } catch (error) {
    res.status(422).json(error);
   }
})

//get all supplier details


router.get("/supplier/getdata",async(req,res)=>{

    try {
        const supplierdata = await Supplier.find();
        res.status(201).json(supplierdata);
        console.log(supplierdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

//get individual supplier details 


router.get("/supplier/getsupplier/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const{id}=req.params;

        const supplierindividual = await Supplier.findById({_id:id});
        console.log(supplierindividual);
        res.status(201).json(supplierindividual)

    } catch (error) {
        res.status(422).json(error)
    }
})

//update supplier details

router.patch("/supplier/updatesupplier/:id",async(req,res)=>{
    try {
        const{id}=req.params;

        const updatesupplier = await Supplier.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updatesupplier);
        res.status(201).json(updatesupplier);

    } catch (error) {
        res.status(422).json(error);
    }
})

//detele supplier
router.delete("/supplier/deletesupplier/:id",async(req,res)=>{
    try {
        const{id}=req.params;

        const deletesupplier = await Supplier.findByIdAndDelete({_id:id});
        console.log(deletesupplier);
        res.status(201).json(deletesupplier);

    } catch (error) {
        res.status(422).json(error);
    }
})


//Search supplier
router.get("/supplier/searchdata/:Medicine_ID",async(req,res)=>{
    try {
        console.log(req.params);
        const{Medicine_ID}=req.params;

        const suppliersearch = await Supplier.findOne({Medicine_ID:Medicine_ID});
        console.log(suppliersearch);
        res.status(201).json(suppliersearch)

    } catch (error) {
        res.status(422).json(error)
    }
})





module.exports = router;