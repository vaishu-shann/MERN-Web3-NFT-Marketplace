const express = require("express");
const { getCollections } = require("../controllers/collection.controller");
const router = express.Router();

router.post("/getCollections", getCollections);

module.exports = router;