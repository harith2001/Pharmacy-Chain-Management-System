const medModel = require ( "../models/medicine.js");


    const getAllMedicines = async(req,res) => {

        try{
            const getAllMedicines = await medModel.find({});
            if(getAllMedicines){
                return res.status(200).json(getAllMedicines);
            }
        }catch(error){
            return res.status(400).json(error);
        }
        //res.send("getAllMedicines");
    };
 
    const createMedicine =  async(req,res) => {
        
        const { medID, brandName, genericName, catgType, manufacturer, stock, expNotation, price, discount} = req.body;
            try{
                if( medID && brandName &&  genericName && catgType && manufacturer && stock && expNotation && price && discount){
                    const newMedicine = medModel({
                        medID,
                        brandName,
                        genericName,
                        catgType,
                        manufacturer,
                        stock, 
                        expNotation,
                        price,
                        discount

                    });

                    const saved_medicine = await newMedicine.save();
                    if(saved_medicine){
                        return res.status(201).json(saved_medicine);
                    }
                
                else{
                    return res.status(400).json({message: "something wrong"});
                   }  

              }
                else{
                    return res.status(400).json({message: "all fields are required" });
                }
            }
        catch(error){
            return res.status(400).json(error);
        }
    };

    const getSingleMedicine = async(req,res) => {
            const { id } = req.params;
            try {
                if(id){
                    const getSingleMedicine = await medModel.findById(id);
                    return res.status(200).json(getSingleMedicine);
                }
                else{
                    return res.status(400).json({"message" : "Id not found"});
                }
                
            } catch (error) {
                return res.status(400).json(error);
            }
    };

    const updateMedicine = async (req,res) => {
        const { id } = req.params;

        console.log("Request", req)
            try {
                if(id){
                    const getSingleMedicine = await medModel.findByIdAndUpdate(id,req.body);
                    return res.status(200).json(getSingleMedicine);
                }
                else{
                    return res.status(400).json({message: "Id not found"});
                }
                
            } catch (error) {
                return res.status(400).json(error);
            }
    };

    const deleteMedicine = async(req, res) => {
        const {id} = req.params;

        try {
            if(id){
                const getDeleteMedicine = await medModel.findByIdAndDelete(id);
                return res.status(200).json(getDeleteMedicine);
            }
            else{
                return res.status(400).json({"message" : "Id not found"});
            }
            
        } catch (error) {
            return res.status(400).json(error);
        }
};

const getsearchMedicine=async(req,res)=>{
    const {brandName}=req.query;
    
        try{
            const searchResults=await medModel.find({
                brandName: { $regex: new RegExp(brandName, 'i') } 
            });

        return res.status(200).json(searchResults);

        
    } catch (error) {
        return res.status(400).json(error);
    }
};
    

module.exports = {
    getAllMedicines,
    createMedicine,
    getSingleMedicine,
    updateMedicine,
    deleteMedicine,
    getsearchMedicine
};