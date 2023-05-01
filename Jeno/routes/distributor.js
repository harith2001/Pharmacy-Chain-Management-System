const express = require ("express");
const router=express.Router();

const{
    getAllDistributors,
    createDistributor,
    getSingleDistributor,
    updateDistributor,
    deleteDistributor,
    getsearchSDistributor

}=require("../controllers/distributor.js");

//All routes are here

router.get("/distributor/test", (req, res) => {
    res.send("distributor Details route is working");
  });

router.get("/distributors",getAllDistributors);
router.post("/distributors",createDistributor);
router.get("/distributors/single/:id",getSingleDistributor);
router.put("/distributors/:id",updateDistributor);
router.delete("/distributors/:id",deleteDistributor);
router.get("/distributors/search?",getsearchSDistributor);

module.exports = router;
