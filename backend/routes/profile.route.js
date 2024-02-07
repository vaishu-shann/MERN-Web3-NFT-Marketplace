const express = require("express");
const { getProfileByEthAddress, getTopCreators } = require("../controllers/profile.controller");
const router = express.Router();


router.post("/getUserNamePicByEthAddress", getProfileByEthAddress);
router.post("/getTopCreators",getTopCreators)

module.exports = router;