const express = require("express");
const {
  getFinanceDetails,
  getFinanceDetail,
  createFinanceDetail,
  createMultipleFinanceDetails,
  deleteFinanceDetail,
  updateFinanceDetail,
  searchDetail,
} = require("../controllers/FinanceDetailsController");

const router = express.Router();

router.get("/finance/test", (req, res) => {
  res.send("Finance Details route is working");
});

//GET all finance details
router.get("/finance", getFinanceDetails);

//GET a single detail
router.get("/finance/:id", getFinanceDetail);

//POST a new detail
router.post("/finance", createFinanceDetail);

//Create new multiple details
router.post("/finance/batch", createMultipleFinanceDetails);

//DELETE a detail
router.delete("/finance/:id", deleteFinanceDetail);

//UPDATE a detail
router.put("/finance/:id", updateFinanceDetail);

//search a detail
router.post("/finance/search", searchDetail);

module.exports = router;
