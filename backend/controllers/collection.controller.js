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

  module.exports={getCollections,getCollectionsByUser,getFewCollections}