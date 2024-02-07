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
    }
  };

  export {
    getUserNamePicByEthAddress
  };
  