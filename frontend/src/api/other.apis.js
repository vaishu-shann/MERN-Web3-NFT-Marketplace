import axios from "axios";

const addNFTFavorite = async (EthUser, NFTData) => {
  try {
    const response = await axios.post(
      `http://localhost:5001/api/nft/addNFTFavorite`,
      {
        EthUser,
        NFTData,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return false
  }
};

const addCollectionFavorite = async (EthUser, CollectionData) => {
  try {
    const response = await axios.post(
      `http://localhost:5001/api/collection/addCollectionFavorite`,
      {
        EthUser,
        CollectionData,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return false
    
  }
};

export { addNFTFavorite, addCollectionFavorite };