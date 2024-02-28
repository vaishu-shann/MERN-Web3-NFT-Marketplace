const express = require("express");
const { getProfileByEthAddress, getTopCreators,setProfileDetails,getProfileDetailsByEthAddress,setProfilePhoto } = require("../controllers/profile.controller");
const router = express.Router();
const {Upload} = require ("../controllers/multer.controller");


router.post("/getUserNamePicByEthAddress", getProfileByEthAddress);
router.post("/getTopCreators",getTopCreators)
router.post("/addUserProfileDetails", setProfileDetails);
router.post(
    "/getUserDetailsByEthAddress",
    getProfileDetailsByEthAddress
  );
router.post("/addUserProfilePhoto", Upload.any("file"), setProfilePhoto);


module.exports = router;