const FinanceDetail = require("../models/FinanceDetailsModel");
const mongoose = require("mongoose");

//get all details
const getFinanceDetails = async (req, res) => {
  const financeDetails = await FinanceDetail.find({}).sort({ createdAt: -1 });

  res.status(200).json(financeDetails);
};

//get single detail
const getFinanceDetail = async (req, res) => {
  const { id } = req.params;

  const decodedId = decodeURI(id);
  console.log("Backend id", id);
  console.log("Bckend decoded id", decodedId);

  if (!mongoose.Types.ObjectId.isValid(decodedId)) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  const financeDetail = await FinanceDetail.findById(decodedId);

  if (!financeDetail) {
    return res.status(404).json({ error: "No such finance detail" });
  }
  res.status(200).json(financeDetail);
};

//create new detail
const createFinanceDetail = async (req, res) => {
  const { salesId, invoiceId, dateAndTime, amount, branchId } = req.body;

  //add doc to db
  try {
    const finance = await FinanceDetail.create({
      salesId,
      invoiceId,
      dateAndTime,
      amount,
      branchId,
    });
    res.status(200).json(finance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create multiple details
const createMultipleFinanceDetails = async (req, res) => {
  const { data } = req.body;

  try {
    const finance = await FinanceDetail.insertMany(data);
    res.status(200).json(finance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete detail
const deleteFinanceDetail = async (req, res) => {
  const { id } = req.params;

  const decodedId = decodeURI(id);
  console.log("Backend id", id);
  console.log("Bckend decoded id", decodedId);

  if (!mongoose.Types.ObjectId.isValid(decodedId)) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  const financeDetail = await FinanceDetail.findOneAndDelete({
    _id: decodedId,
  });

  if (!financeDetail) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  res.status(200).json(financeDetail);
};

//update detail
const updateFinanceDetail = async (req, res) => {
  const { id } = req.params;

  console.log("Request", req);

  const decodedId = decodeURI(id);
  console.log("Backend id", id);
  console.log("Bckend decoded id", decodedId);

  if (!mongoose.Types.ObjectId.isValid(decodedId)) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  console.log("Update finance body", req.body);

  const financeDetail = await FinanceDetail.findOneAndUpdate(
    { _id: decodedId },
    {
      ...req.body,
    }
  );

  if (!financeDetail) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  res.status(200).json(financeDetail);
};

//search detail
const searchDetail = async (req, res) => {
  const { query } = req.body;

  console.log("Search", req.body);

  const financeDetail = await FinanceDetail.find(query);

  if (!financeDetail) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  res.status(200).json(financeDetail);
};

module.exports = {
  getFinanceDetails,
  getFinanceDetail,
  createFinanceDetail,
  createMultipleFinanceDetails,
  deleteFinanceDetail,
  updateFinanceDetail,
  searchDetail,
};
