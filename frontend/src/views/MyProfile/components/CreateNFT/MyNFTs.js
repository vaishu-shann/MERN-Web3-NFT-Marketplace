import React, { useState ,useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProductNFT } from "../../../../components/UiComponents/ProductNFT";
import Product404 from "../../../../components/UiComponents/Product404";
import { fetchAllNFTs } from "../../../../api/nft.apis";

function MyNFTs() {
  const [rowNFTsData, setRowNFTsData] = useState([]);
  const [CreatedNFTData, setCreatedNFTData] = useState([]);
  const [OwnedNFTData, setOwnedNFTData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetchAllNFTs("", "", 7);
      setCreatedNFTData(response);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-full gap-4 xs:gap-0 xs:h-[10pc] flex-col mt-5 rounded-3xl flex xs:flex-row justify-between items-center w-full dark:bg-darkBlue-500/80  outline-dashed outline-offset-2 outline-pink-500/40 p-3 xs:p-5">
        <div className="flex flex-col gap-2 sm:items-start items-center">
          <h2 className="flex gap-2 sm:text-start text-center items-center text-pink-500 text-sm sm:text-xl">
            <FiPlusCircle /> Add new NFT
          </h2>
          <p className="dark:text-white/50 text-sm sm:text-xl sm:text-start text-center">
            create NFTs and store into collections
          </p>
        </div>
        <Link className="w-full xs:w-auto" to="/myProfile/addNFT">
          <button className="py-3 px-10 justify-center xs:justify-start text-sm sm:text-base flex flex-row items-center gap-2 text-white/90 font-semibold text-md bg-gradient-to-tr w-full from-pink-500 to-purple-500 rounded-xl ">
            Create <FaArrowLeftLong className="-rotate-[-140deg]" />
          </button>
        </Link>
      </div>
      <div className="text-white/90 mt-10 gap-5 flex flex-col font-semibold">
        <div>
          <h2 className="text-xl sm:text-2xl">My Created NFTs</h2>
          <div className="flex mt-2 sm:mt-5 flex-row flex-wrap justify-start gap-5">
            {CreatedNFTData.length != 0 ? (
              CreatedNFTData.map((item, index) => (
                <ProductNFT
                  link="/myProfile/EditNFT/"
                  button="Edit"
                  kay={index}
                  data={item}
                />
              ))
            ) : (
              <Product404
                message="NFTs Are not Created"
                subMessage=" Create a nft"
              />
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl">My Owned NFTs</h2>
          <div className="flex mt-2 sm:mt-5 flex-row flex-wrap justify-start gap-5">
            {OwnedNFTData.length != 0 ? (
              OwnedNFTData.map((item, index) => (
                <ProductNFT
                  link="/myProfile/EditNFT/"
                  button="Edit"
                  kay={index}
                  data={item}
                />
              ))
            ) : (
              <Product404
              message="NFTs Are not Owned"
              subMessage="explore shop to buy nft"
            />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNFTs;
