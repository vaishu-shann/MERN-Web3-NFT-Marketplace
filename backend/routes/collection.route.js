const express = require("express");
const { getCollections,getCollectionsByUser,getFewCollections } = require("../controllers/collection.controller");
const router = express.Router();

router.post("/getCollections", getCollections);
router.post("/getCollectionsByUser", getCollectionsByUser);
router.post("/getFewCollections", getFewCollections);

module.exports = router;