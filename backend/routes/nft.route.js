const express = require("express");
const { getAllNfts, createNFT } = require("../controllers/nft.controller");
const router = express.Router();


router.post("/",getAllNfts );
router.post("/addNft",createNFT)

module.exports = router; 