const express = require("express");
const { getAllNfts, createNFT, getNftbyId } = require("../controllers/nft.controller");
const router = express.Router();


router.post("/",getAllNfts );
router.post("/addNft",createNFT)
router.post("/:id",getNftbyId)
module.exports = router; 