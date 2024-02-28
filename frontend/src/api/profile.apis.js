import axios from "axios";

const getUserNamePicByEthAddress = async (EthUserId) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/users/getUserNamePicByEthAddress`,
        { EthUser: EthUserId }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
      return false
    }
  };


  const getTopCreators = async (limit) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/users/getTopCreators`,
        {
          limit: limit,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return false
    }
  };


  const setProfileDetails = async (formData, ethAddress) => {
    const details = {
      ...formData,
      userEthAddress: ethAddress,
    };
  
    try {
      const response = await axios.post(
        `http://localhost:5001/api/users/addUserProfileDetails`,
        { data: details }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetailsByEthAddress = async (EthUserId) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/users/getUserDetailsByEthAddress`,
        { EthUser: EthUserId }
      );
  
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };


  const setProfilePhoto = async (file, user) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/users/addUserProfilePhoto`,
        { Image: file, EthUser: user },
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

  export {
    getUserNamePicByEthAddress,
    getTopCreators,
    setProfileDetails,
    getUserDetailsByEthAddress,
    setProfilePhoto
  };
  