import Web3 from "web3";
import config from "../config";
import CreateNFTAbi from ""

export const mintNFT = async (EthAddress,contractAddress) => {
    const web3 = new Web3(window.ethereum);
    var myContract = new web3.eth.Contract(CreateNFTAbi, contractAddress);
    let mintHash = await myContract.methods
      .mint(EthAddress, imageLink)
      .send({ from: EthAddress })
      .then(function (receipt) {
        console.log(receipt);
        // TxHash = receipt.transactionHash;
        // TokenID = receipt.events.Transfer.returnValues[2];
      });
    
  };