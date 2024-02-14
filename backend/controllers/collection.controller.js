const asyncHandler = require("express-async-handler");
const  Collection  = require("../models/collectionModel");



const getCollections = asyncHandler(async (req, res) => {
    // console.log("getCollections" , req.body)
    const { search, category, limit } = req.body;
    try {
      const result = await Collection.find({
        CollectionName: { $regex: new RegExp(search, "i") },
        CollectionTag: {
          $regex: new RegExp(category == "all" ? "" : category, "i"),
        },
      }).limit(limit);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  });


  
const createCollection = async (req, res) => {
  const { EthUser, name, tag } = req.body;
  console.log("createCollection",req.body)
  console.log("image files",req.files)
  // if(req.files){
  //   const imageLinks = req.files?.map((file) => `/images/${file.filename}`);
  // }else{
  //   const imageLinks = ["","","",""]
  // }
  try {
    await Collection.insertMany({
      EthUser: EthUser,
      CollectionName: name,
      CollectionTag: tag,
      CollectionImages: {
        // one: `${process.env.SERVER_HOST}${imageLinks[0]}`,
        // two: `${process.env.SERVER_HOST}${imageLinks[1]}`,
        // Three: `${process.env.SERVER_HOST}${imageLinks[2]}`,
        // four: `${process.env.SERVER_HOST}${imageLinks[3]}`,
      },
      NFTs: [],
      createdTime: new Date().getTime(),
    });
    return res
      .status(200)
      .json({ success: true, message: "Collection created successfully ! 🎉" });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ success: false, message: "Error found in (createCollection)" });
  }
};

  
const getCollectionsByUser = async (req, res) => {
  // console.log("getCollectionsByUser" , req.body)

  const { EthUser } = req.body;
  try {
    const result = await Collection.find({
      EthUser: EthUser,
    });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};


const getFewCollections = async (req, res) => {
  console.log("getFewCollections" , req.body)

  try {
    const result = await Collection.find(
      {},
      {
        CollectionImages: {
          one: 1,
        },
        CollectionTag: 1,
        CollectionName: 1,
        createdTime: 1,
        EthUser: 1,
      }
    )
      .sort({ createdTime: -1 })
      .limit(4);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
};

  module.exports={getCollections,getCollectionsByUser,getFewCollections,createCollection}