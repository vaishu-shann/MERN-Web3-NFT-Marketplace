import axios from "axios";

const getCollections = async (search, category, limit) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/collection/getCollections`,
        {
          search,
          category,
          limit,
        }
      );
      return response.data;
    } catch (error) {}
  };


  const getCollectionsByUser = async (EthUser) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/collection/getCollectionsByUser`,
        {
          EthUser,
        }
      );
      return response.data;
    } catch (error) {}
  };
  
  
  export {getCollections ,getCollectionsByUser}