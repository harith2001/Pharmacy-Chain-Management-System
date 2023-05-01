const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const financeSchema = new Schema(
  {
    salesId: {
      type: String,
      required: true,
    },
    invoiceId: {
      type: Number,
      required: true,
    },
    dateAndTime: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    branchId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("FinanceDetail", financeSchema);
