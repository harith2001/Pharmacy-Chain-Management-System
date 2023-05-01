const express = require("express");
const router = express.Router();

const{
    getAllMedicines,
    createMedicine,
    getSingleMedicine,
    updateMedicine,
    deleteMedicine,
    getsearchMedicine
}=require("../controller/medicine.js");

router.get("/medicines/test", (req, res) => {
    res.send("distributor Details route is working");
  });


router.get("/medicines", getAllMedicines);
router.post("/medicines",createMedicine);
router.get("/medicines/single/:id", getSingleMedicine);
router.put("/medicines/:id", updateMedicine);
router.delete("/medicines/:id", deleteMedicine);
router.get("/medicines/search?", getsearchMedicine);

 
module.exports = router;

