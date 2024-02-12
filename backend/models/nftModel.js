const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
    createdBy: { type: String },
    price: { type: Number },
    name: { type: String },
    description: { type: String },
    image: { type: String },
    properties: { type: Array },
    royalties: { type: Number },
    approve:{type:Boolean},
    category: { type: String },
    NFTid: { type: Number },
  });

  module.exports = mongoose.model("Nft",nftSchema)
