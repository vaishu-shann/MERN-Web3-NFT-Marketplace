const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

const addNFTFavorite = async (req, res) => {
    const { EthUser, NFTData } = req.body;
    try {
      const result = await User.updateOne(
        { userEthAddress: EthUser },
        { $addToSet: { FavoriteNFTs: NFTData } },
        { upsert: true }
      );
  
      if (result.modifiedCount === 1) {
        return res.status(200).json({
          success: true,
          message: "NFT added in Favorite Section 🎉",
        });
      } else {
        await User.updateOne(
          { userEthAddress: EthUser },
          { $pull: { FavoriteNFTs: NFTData } },
          { upsert: true }
        );
        return res.status(200).json({
          success: true,
          message: "NFT removed from Favorite Section 👍",
        });
      }
    } catch (error) {
      console.error("Error in addNFTFavorite:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  
  const addCollectionFavorite = async (req, res) => {
    const { EthUser, CollectionData } = req.body;
    try {
      const result = await User.updateOne(
        { userEthAddress: EthUser },
        { $addToSet: { FavoriteCollections: CollectionData } },
        { upsert: true }
      );
  
      if (result.modifiedCount === 1) {
        return res.status(200).json({
          success: true,
          message: "Collection added in Favorite Section 🎉",
        });
      } else {
        await User.updateOne(
          { userEthAddress: EthUser },
          { $pull: { FavoriteCollections: CollectionData } },
          { upsert: true }
        );
        return res.status(200).json({
          success: true,
          message: "Collection removed from Favorite Section 👍",
        });
      }
    } catch (error) {
      console.error("Error in addCollectionFavorite:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

module.exports={ addNFTFavorite, addCollectionFavorite }