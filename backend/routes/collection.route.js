const express = require("express");
const { getCollections,getCollectionsByUser,getFewCollections,createCollection,getCollectionDetailsById,getCollectionById,updateCollectionById} = require("../controllers/collection.controller");
const router = express.Router();
const{ Upload } =require( "../controllers/multer.controller");
const { addCollectionFavorite } = require("../controllers/favorite.controller");

router.post("/getCollections", getCollections);
router.post("/getCollectionsByUser", getCollectionsByUser);
router.post("/getFewCollections", getFewCollections);
router.post("/addCollection", Upload.any("file"), createCollection);
router.post("/getCollectionDetailsById", getCollectionDetailsById);
router.post("/getCollectionById", getCollectionById);
router.post(
    "/updateCollectionById",
    Upload.any("file"),
    updateCollectionById
  );
router.post("/addCollectionFavorite", addCollectionFavorite);

module.exports = router;