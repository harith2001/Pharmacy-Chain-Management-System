const insertStock = async(req, res) => {
    // console.log(req.body);

   const{Medicine_ID, Name, Medicine_NO,Expire_Date,Purchased_Date} = req.body;

   if(!Medicine_ID ||! Name ||!Medicine_NO ||!Expire_Date ||!Purchased_Date){
    res.status(422).json("Please Fill The Data");
   }

   try {

    const prestock = await Stock.findOne({Medicine_ID:Medicine_ID});
    console.log(prestock);

    if(prestock){
        res.status(422).json("This is stock is already added ! ");
    }else{
        const addstock = new Stock({
            Medicine_ID, Name, Medicine_NO,Expire_Date,Purchased_Date
        });

        await addstock.save();
        res.status(201).json(addstock);
        console.log(addstock);
    }
    
   } catch (error) {
    res.status(422).json(error);
   }
}

module.exports = insertStock
