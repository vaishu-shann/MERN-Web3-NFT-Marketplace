import axios from "axios";

const fetchAllNFTs = async (search, category, limit) => {
  try {
    const response = await axios.post(`http://localhost:5001/api/nft`, {
      search,
      category,
      limit,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


const createNFT = async(formNftData) =>{
  try{
    const response = await axios.post(`http://localhost:5001/api/nft/addNft`, {
      formNftData
    });
    console.log("response", response.data)
    return response.data;
  }catch(error){
    console.log(error);
  }
}
export { fetchAllNFTs,createNFT };
