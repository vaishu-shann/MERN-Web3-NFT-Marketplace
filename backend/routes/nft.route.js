const express = require("express");
const { getAllNfts } = require("../controllers/nft.controller");
const router = express.Router();


router.post("/",getAllNfts );


module.exports = router;