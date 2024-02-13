const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

const getProfileByEthAddress = asyncHandler(async (req, res) => {
    // console.log("getProfileByEthAddress" ,  req.body)

    const { EthUser } = req.body;
    try {
      const result = await User.findOne(
        {
          userEthAddress: EthUser,
        },
        { userName: 1, userProfile: 1, _id: 0 }
      );
  
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  })

  const getTopCreators = asyncHandler(async (req, res) => {
    // console.log("getTopCreators" ,  req.body)
    const { limit } = req.body;
    try {
      const result = await User.find(
        {},
        {
          userEthAddress: 1,
          userProfile: 1,
          userName: 1,
        }
      ).limit(limit);
      return res.status(200).json(result);
    } catch (error) {
      console.error("Error in getTopCreators:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  });

  const setProfileDetails = async (req, res) => {
    const { data } = req.body;
    // console.log("setProfileDetails", data)
    try {
      const result = await User.updateOne(
        { userEthAddress: data.userEthAddress },
        data,
        { upsert: true }
      );
      if (result.upserted) {
        return res.status(200).json({
          success: true,
          message: "Profile details uploaded successfully! 🎉",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Profile details updated successfully! 🎉",
        });
      }
    } catch (error) {
      console.error("Error in setProfileDetails:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  const getProfileDetailsByEthAddress = async (req, res) => {
    const { EthUser } = req.body;
    // console.log("getProfileDetailsByEthAddress", EthUser)

    try {
      const result = await User.findOne({
        userEthAddress: EthUser,
      });
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  };
  module.exports={getProfileByEthAddress,getTopCreators,setProfileDetails,getProfileDetailsByEthAddress}