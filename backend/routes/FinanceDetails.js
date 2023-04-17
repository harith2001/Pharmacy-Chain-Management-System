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

//GET all finance details
router.get("/", getFinanceDetails);

//GET a single detail
router.get("/:id", getFinanceDetail);

//POST a new detail
router.post("/", createFinanceDetail);

//Create new multiple details
router.post("/batch", createMultipleFinanceDetails);

//DELETE a detail
router.delete("/:id", deleteFinanceDetail);

//UPDATE a detail
router.put("/:id", updateFinanceDetail);

//search a detail
router.post("/search", searchDetail);

module.exports = router;
