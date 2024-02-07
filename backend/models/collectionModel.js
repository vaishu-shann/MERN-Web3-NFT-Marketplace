const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
    EthUser: { type: String },
    CollectionName: { type: String },
    CollectionTag: { type: String },
    NFTs: { type: Array, required: true },
    CollectionImages: {
      one: { type: String },
      two: { type: String },
      Three: { type: String },
      four: { type: String },
    },
    createdTime: { type: Number },
  });

  module.exports = mongoose.model("Collection",collectionSchema)