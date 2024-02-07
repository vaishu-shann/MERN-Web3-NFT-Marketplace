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

export { fetchAllNFTs };
