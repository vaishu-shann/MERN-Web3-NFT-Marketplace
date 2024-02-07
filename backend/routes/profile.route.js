const express = require("express");
const { getProfileByEthAddress } = require("../controllers/profile.controller");
const router = express.Router();


router.post("/getUserNamePicByEthAddress", getProfileByEthAddress);


module.exports = router;