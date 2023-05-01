const empModel = require ( "../models/emp.js")


    const getAllEmp = async (req, res) => {
        try {
            
            const allEmp = await empModel.find({});
            if(allEmp){
                return res.status(200).json(allEmp);
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    const createEmp = async (req, res) => {
        const {empid, name, email, address, salary, phone} = req.body;
        try {
            if(empid && name && email && address && salary && phone){
                const newEmp = empModel({
                    empid,
                    name,
                    email,
                    address,
                    salary,
                    phone,
                });

                const saved_emp = await newEmp.save();
                if(saved_emp){
                    return res.status(201).json(saved_emp);
                }
                else{
                    return res.status(400).json({message: "wrong"});
                }
            }
            else{
                return res.status(400).json({message: "all feilds are required"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    const getSingleEmp = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                const getSingleData = await empModel.findById(id);
                return res.status(200).json(getSingleData);
            }
            else{
                return res.status(400).json({message: "id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    const updateEmp = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                const getUpdatedData = await empModel.findByIdAndUpdate(id, req.body);
                return res.status(200).json(getUpdatedData);
            }
            else{
                return res.status(400).json({message: "id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    };

    const deleteEmp = async (req, res) => {
        const {id} = req.params;
        try {
            if(id){
                const getDeleteData = await empModel.findByIdAndDelete(id);
                return res.status(200).json(getDeleteData);
            }
            else{
                return res.status(400).json({message: "id not found"});
            }
        } catch (error) {
            return res.status(400).json(error);
        }
    }; 

    const getsearchemployee=async(req,res)=>{
        const {name}=req.query;
        
            try{
                const searchResults=await empModel.find({
                    name: { $regex: new RegExp(name, 'i') } 
                });

            return res.status(200).json(searchResults);

            
        } catch (error) {
            return res.status(400).json(error);
        }
    };


module.exports = {
    getAllEmp,
    createEmp,
    getSingleEmp,
    updateEmp,
    deleteEmp,
    getsearchemployee
};