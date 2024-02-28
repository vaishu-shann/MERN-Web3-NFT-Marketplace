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


  const setProfilePhoto = async (req, res) => {
    const { EthUser } = req.body;
    console.log("EthUser" , req.body)
    
    const ImageLink = req.files.map((file) => `/images/${file.filename}`);
    try {
      const filter = { userEthAddress: EthUser };
      const update = {
        $set: {
          userProfile: `${process.env.SERVER_HOST}${ImageLink[0]}`,
          userEthAddress: EthUser,
          createdAt: Date.now(),
        },
      };  
      const options = { upsert: true };  
      const result = await User.updateOne(filter, update, options);  
      if (result.upserted) {
        return res.status(200).json({
          success: true,
          message: "Profile avatar uploaded successfully! 🎉",
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Profile avatar updated successfully! 🎉",
        });
      }
    } catch (error) {
      console.error("Error in setProfilePhoto:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
  module.exports={getProfileByEthAddress,getTopCreators,setProfileDetails,getProfileDetailsByEthAddress,setProfilePhoto}