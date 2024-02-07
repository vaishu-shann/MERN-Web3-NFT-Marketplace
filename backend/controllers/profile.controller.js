const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")

const getProfileByEthAddress = asyncHandler(async (req, res) => {
    console.log("getProfileByEthAddress" ,  req.body)
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

  module.exports={getProfileByEthAddress}