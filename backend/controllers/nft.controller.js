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


const createNFT = asyncHandler(async (req, res) => {
    console.log("createblog", req.body.formNftData)
    const {  price, name,image, description,properties,royalties,approve ,category } = req.body.formNftData;
    try{
        if (!price || !name ) {
            res.status(400);
            throw new Error("Price and Title fileds are mandatory");
        }
        const NftDoc = await Nft.create({
            price, name,image, description,properties,royalties,approve ,category
        });
        console.log("NftDoc" ,NftDoc)
        res.status(201).json(NftDoc);
    }catch(e){
        console.log("error in create Blog", e)
        res.status(500).json({ message: e })
    }

}
)

module.exports = { getAllNfts,createNFT };
