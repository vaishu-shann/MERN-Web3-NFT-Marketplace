const asyncHandler = require("express-async-handler");
const Nft = require("../models/nftModel")


const getAllNfts = asyncHandler(async (req, res) => {
    console.log("NFTsController", req.body)
    const { search, category, limit } = req.body;
    try {
        const AllNFTs = await Nft.find({
            title: { $regex: new RegExp(search, "i") },
            category: {
                $regex: new RegExp(category == "all" ? "" : category, "i"),
            },
        }).limit(limit);
        res.send(AllNFTs);
    } catch (error) {
        console.log(`${error} NFTsController(shop.controller.js)`);
    }
});

module.exports = { getAllNfts };