const express = require("express");
const router = express.Router();
const {NFTsController}  = require("../controllers/shop.controller");
const { addNFTFavorite } = require("../controllers/favorite.controller");

router.post("/Nfts", NFTsController);
router.post("/addNFTFavorite", addNFTFavorite);

module.exports = router;
