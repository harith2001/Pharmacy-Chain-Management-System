const customerModel = require ("../models/customer.js");


    const getAllCustomers = async (req,res) => {

        try {

          const getAllCustomers = await customerModel.find({})
          if(getAllCustomers){
            return res.status(200).json(getAllCustomers); 
          }
        } catch (error) {
            return res.status(400).json(error);
 
            
        }
    };
    const createCustomer = async(req,res) =>{
        const{customerID,customerName,customerAge,customerNumber,customerEmail,customerAddress,customerOrder}=req.body;
        try {
            if(customerID && customerName && customerAge && customerNumber && customerEmail && customerAddress && customerOrder) {
                const newCus=customerModel({
                    customerID,
                    customerName,
                    customerAge,
                    customerNumber,
                    customerEmail,
                    customerAddress,
                    customerOrder,

                })

                const saved_customer = await newCus.save();
                if(saved_customer)
                {
                    return res.status(201).json(saved_customer);  

                }else
                {
                    return res.status(400).json({message:"Something Wrong"});
                }


            }else{

                return res.status(400).json({message:"All Fields are Required"});

            }
            
        } catch (error) {
            return res.status(400).json(error);
        }


    };
    const getSingleCustomer = async(req,res)=>{
        const {id} = req.params;
        try {
            if(id)
            {
             const getSingleData = await customerModel.findById(id);
             return res.status(200).json(getSingleData);
            }
            else
            {
            return res.status(400).json({message:"id not found"}); 
            }
            
        } catch (error) {
            return res.status(400).json(error);
            
        }


    };

    const updateCustomer= async (req,res) =>{

        const {id} = req.params;
        try {
            if(id)
            {
             const getUpdatedData = await customerModel.findByIdAndUpdate(id,req.body);
             return res.status(200).json(getUpdatedData);
            }
            else
            {
            return res.status(400).json({message:"id not found"}); 
            }
            
        } catch (error) {
            return res.status(400).json(error);
            
        }



    };
    const deleteCustomer= async (req,res) =>{

        const {id} = req.params;
        try {
            if(id)
            {
             const getDeletedData = await customerModel.findByIdAndDelete (id);
             return res.status(200).json(getDeletedData);
            }
            else
            {
            return res.status(400).json({message:"id not found"}); 
            }
            
        } catch (error) {
            return res.status(400).json(error);
            
        }



    };
    const getsearchcustomer=async(req,res)=>{
        const {customerName}=req.query;
        
            try{
                const searchResults=await customerModel.find({
                    customerName: { $regex: new RegExp(customerName, 'i') } 
                });

            return res.status(200).json(searchResults);

            
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    module.exports = {
        getAllCustomers,
        createCustomer,
        getSingleCustomer,  
        updateCustomer,
        deleteCustomer,
        getsearchcustomer,

    };