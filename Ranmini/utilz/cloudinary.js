const cloudinary = require("cloudinary").v2;

//  cloudinary database Configuration
cloudinary.config({
  cloud_name: "ddjh5u6hk",
  api_key: "833719482881733",
  api_secret: "RGrxkbu6D4oMNVPDDPXf5R3yGTE",
});

module.exports = { cloudinary };