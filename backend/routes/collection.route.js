const express = require("express");
const { getCollections,getCollectionsByUser } = require("../controllers/collection.controller");
const router = express.Router();

router.post("/getCollections", getCollections);
router.post("/getCollectionsByUser", getCollectionsByUser);


module.exports = router;