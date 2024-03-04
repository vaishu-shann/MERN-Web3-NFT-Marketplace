const express = require("express");
const router = express.Router();
const {NFTsController}  = require("../controllers/shop.controller");

router.post("/Nfts", NFTsController);

module.exports = router;
