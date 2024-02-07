const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    userBio: { type: String },
    userName: { type: String },
    userProfile: { type: String },
    userEthAddress: { type: String },
    phoneNumber: { type: Number },
    storeName: { type: String },
    emailAddress: { type: String },
    socialLink: {
      x: { type: String },
      telegram: { type: String },
      whatsapp: { type: String },
      facebook: { type: String },
    },
    FavoriteNFTs: { type: Array },
    FavoriteCollections: { type: Array },
    createdAt: { type: Number },
  });

  module.exports = mongoose.model("User",usersSchema)