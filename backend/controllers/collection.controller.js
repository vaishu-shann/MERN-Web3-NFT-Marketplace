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

    const imageLinks = req.files?.map((file) => `/images/${file.filename}`);
  
  try {
    await Collection.insertMany({
      EthUser: EthUser,
      CollectionName: name,
      CollectionTag: tag,
      CollectionImages: {
        one: `${process.env.SERVER_HOST}${imageLinks[0]}`,
        two: `${process.env.SERVER_HOST}${imageLinks[1]}`,
        Three: `${process.env.SERVER_HOST}${imageLinks[2]}`,
        four: `${process.env.SERVER_HOST}${imageLinks[3]}`,
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


const getCollectionDetailsById = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Collection.findById(id);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const getCollectionById = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Collection.findById(id);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
};

const updateCollectionById = async (req, res) => {
  const updatedCollection = req.body;
console.log("updatedCollection",req.body)
  const imageLinks = req.files.map((file) => {
    return {
      index: file.fieldname.split("[")[1].split("]")[0],
      link: `/images/${file.filename}`,
    };
  });

  try {
    const result = await Collection.findByIdAndUpdate(
      updatedCollection._id,
      {
        CollectionName: updatedCollection.CollectionName,
        CollectionTag: updatedCollection.CollectionTag,
        CollectionImages: {
          one: `${
            imageLinks.find((i) => i.index === "one")
              ? process.env.SERVER_HOST +
                imageLinks.find((i) => i.index === "one").link
              : updatedCollection.CollectionImages.one
          }`,
          two: `${
            imageLinks.find((i) => i.index === "two")
              ? process.env.SERVER_HOST +
                imageLinks.find((i) => i.index === "two").link
              : updatedCollection.CollectionImages.two
          }`,
          Three: `${
            imageLinks.find((i) => i.index === "Three")
              ? process.env.SERVER_HOST +
                imageLinks.find((i) => i.index === "Three").link
              : updatedCollection.CollectionImages.Three
          }`,
          four: `${
            imageLinks.find((i) => i.index === "four")
              ? process.env.SERVER_HOST +
                imageLinks.find((i) => i.index === "four").link
              : updatedCollection.CollectionImages.four
          }`,
        },
        NFTs: updatedCollection?.NFTs?.[0] === "0" ? [] : updatedCollection?.NFTs,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ success: true, message: "Collection updated successfully ! 🎉" });
  } catch (error) {
    console.log(error);
  }
};

  module.exports={getCollections,getCollectionsByUser,getFewCollections,createCollection,getCollectionDetailsById,getCollectionById,updateCollectionById}