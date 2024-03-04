
const Nft = require("../models/nftModel")




const NFTsController = async (req, res) => {
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
    console.log(`${error} NFTsController`);
  }
};

module.exports = { NFTsController};
