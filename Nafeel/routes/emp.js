const express = require("express");
const empController =require( "../controllers/emp.js");
const router = express.Router();

const{

    getAllEmp,
    createEmp,
    getSingleEmp,
    updateEmp,
    deleteEmp, 
    getsearchemployee

}= require("../controllers/emp.js");


router.get("/emp/test", (req, res) => {
    res.send("distributor Details route is working");
  });

//All routers are here
router.get("/emp", getAllEmp);
router.post("/emp", createEmp);
router.get("/emp/single/:id", getSingleEmp);
router.put("/emp/:id", updateEmp);
router.delete("/emp/:id", deleteEmp);
router.get("/emp/search?",getsearchemployee);

module.exports = router;