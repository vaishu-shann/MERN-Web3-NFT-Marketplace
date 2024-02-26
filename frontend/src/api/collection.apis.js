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
    } catch (error) {
      console.log("error in getCollections" , error);
      return
    }
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
    } catch (error) {
      console.log("error in getCollectionsByUser" , error);
      return
    }
  };
  

  const getFewCollections = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/collection/getFewCollections`
      );
      return response.data;
    } catch (error) {
      console.log("error in getFewCollections" , error);
      return
    }
  };

  const createCollection = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/collection/addCollection`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("createCollection" , response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCollectionById = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/collection/getCollectionById`,
        {
          id,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCollectionsDetailsById = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/collection/getCollectionDetailsById`,
        { id }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateCollectionById = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/collection/updateCollectionById`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export {getCollections ,getCollectionsByUser,getFewCollections,createCollection,getCollectionById,updateCollectionById,getCollectionsDetailsById}