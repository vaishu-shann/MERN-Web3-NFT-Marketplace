const express = require("express");
const { getProfileByEthAddress, getTopCreators,setProfileDetails,getProfileDetailsByEthAddress } = require("../controllers/profile.controller");
const router = express.Router();


router.post("/getUserNamePicByEthAddress", getProfileByEthAddress);
router.post("/getTopCreators",getTopCreators)
router.post("/addUserProfileDetails", setProfileDetails);
router.post(
    "/getUserDetailsByEthAddress",
    getProfileDetailsByEthAddress
  );

module.exports = router;