const express = require("express");
const { getCollections,getCollectionsByUser,getFewCollections,createCollection,getCollectionDetailsById} = require("../controllers/collection.controller");
const router = express.Router();
const{ Upload } =require( "../controllers/multer.controller");

router.post("/getCollections", getCollections);
router.post("/getCollectionsByUser", getCollectionsByUser);
router.post("/getFewCollections", getFewCollections);
router.post("/addCollection", Upload.any("file"), createCollection);
router.post("/getCollectionDetailsById", getCollectionDetailsById);

module.exports = router;