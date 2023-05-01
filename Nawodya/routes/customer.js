const express = require ("express");
const custController = require ('../controllers/customer.js');
const router = express.Router();

const{
    getAllCustomers,
    createCustomer,
    getSingleCustomer,
    updateCustomer,
    deleteCustomer,
    getsearchcustomer

}  = require("../controllers/customer.js");

router.get("/customer/test", (req, res) => {
    res.send("Finance Details route is working");
  });


//all the routers are here
router.get("/customer",getAllCustomers);
router.post("/customer",createCustomer);
router.get("/customer/single/:id",getSingleCustomer);
router.put("/customer/:id",updateCustomer);
router.delete("/customer/:id",deleteCustomer);
router.get("/customer/search?",getsearchcustomer);

module.exports = router;