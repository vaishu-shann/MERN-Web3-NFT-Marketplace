const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
    createdBy: { type: String },
    title: { type: String },
    image: { type: String },
    category: { type: String },
    price: { type: Number },
    NFTid: { type: Number },
  });

  module.exports = mongoose.model("Nft",nftSchema)
