const mongoose = require ("mongoose");

const empSchema = mongoose.Schema({
    empid : {
        type: String,
    },
    name : {
        type: String,
    },
    email : {
        type: String,
    },
    address : {
        type: String,
    },
    salary : {
        type: String,
    },
    phone : {
        type: String,
    },
});

const empModel = mongoose.model("emp", empSchema);

module.exports = empModel;
