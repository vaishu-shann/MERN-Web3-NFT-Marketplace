import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { getUserNamePicByEthAddress } from "../../api/profile.apis";
import demoUserAvatar from "../../assets/images/user-demo-avatar.svg";

export function ProductNFT({ data, link, button }) {
  console.log("data" , data)
  const [NFTsCreatorDetails, setNFTsCreatorDetails] = useState({_id:"65c9dc65c22558fbf5b235b7",createdBy:"Username",userName:"Selena",title:"Space NFT", name:"Astro Space",price:"1.924"});
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await getUserNamePicByEthAddress(data.createdBy);
        setNFTsCreatorDetails(response);
        // console.log("nft ID",response[0])
      } catch (error) {
        console.log(error);
      }
    };
    // fetching();
  }, [data.createdBy]);

  return (
    <Link
      to={`${link}${data._id}`}
      key={data._id}
      className="border-[1px] m-2 border-gray-700/20 group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 flex-2 w-[15pc] bg-darkBlue-600 p-3"
    >
      <div className="flex gap-3 items-center">
        <img
          className="w-11 rounded-full bg-darkBlue-300 h-11"
          src={
            "https://i.redd.it/9kap0xhz5j171.jpg"
          }
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
            Created by :
          </span>{" "}
          <Link
            to={`/author/${data.createdBy}`}
            className="text-white/90 rounded-md w-[9pc] h-[1.5pc] hover:text-pink-500 hover:scale-[99%] transition-all line-clamp-1 text-sm font-normal"
          >
            {NFTsCreatorDetails?.userName
              ? NFTsCreatorDetails?.userName
              : data.createdBy
              ? `${data.createdBy.slice(0, 5)}...${data.createdBy.slice(38)}`
              : null}
          </Link>
        </div>
      </div>
      <div className="border-[1px] relative z-30 hover:shadow-xl shadow-darkBlue-700 hover:-translate-y-1  border-gray-700/70 h-[17pc] bg-darkBlue-600/40 transition-all w-full overflow-hidden rounded-xl flex items-center justify-center">
        <img
          className="h-full absolute z-10 cw-max !min-w-fit group-hover:scale-125 transition-all"
          src={"data:image/jpeg;base64,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"}
          
          alt=""
        />
        <img
          className="w-full blur-sm h-full absolute cw-max !min-w-fit group-hover:scale-125 transition-all"
          src={"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8fe0e90b-8142-4a5b-96e6-97d552e0bc00_1080x1080.jpeg"}

          alt=""
        />
      </div>
      <h2 className="text-white/90 text-base transition-all font-semibold hover:text-pink-500">
        {data.title ? data.title : data.name}
      </h2>
      <div className="flex w-full xs:h-[2.4pc] justify-between items-center">
        <div className="flex justify-between flex-col w-full">
          <span className="text-white/50 text-xs">Current Price</span>
          <b className="flex text-sm text-white/90 items-center gap-1">
            <FaEthereum />
            {Number(data.price).toFixed(4)}
          </b>
        </div>
        <div
          className="p-1 hover:bg-pink-600 font-semibold
          text-darkBlue-400 text-xs hover:text-white text-white/80 bg-white/840 bg-darkBlue-300 backdrop-blur-lg flex items-center justify-center  rounded-lg hover:scale-90 transition-all px-6 h-full "
        >
          {button}
        </div>
      </div>
    </Link>
  );
}
export function SkeletonProductNFT({ key }) {
  return (
    <div
      key={key}
      className="animate-pulse border-[1px] m-2 border-gray-700/20 group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 flex-2 w-[15pc] bg-darkBlue-600 p-3"
    >
      <div className="flex gap-3 items-center">
        <img
          className="w-11 rounded-full bg-darkBlue-300 h-11"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt="error in image"
        />
        <div className="flex gap-1 flex-col">
          <span className="text-white/50 text-xs line-clamp-1 rounded-md bg-darkBlue-300 w-[4.6pc] h-[1pc]   " />
          <h2 className="text-white/90 w-[8pc] h-[1.5pc] rounded-md bg-darkBlue-300 line-clamp-1 text-sm font-normal" />
        </div>
      </div>
      <div className="h-[17pc] bg-darkBlue-300 w-full rounded-xl">
        <img className="h-full absolute z-10 cw-max !min-w-fit" alt="" />
      </div>
      <h2 className="text-white/90 transition-all rounded-md bg-darkBlue-300 w-[9pc] h-[1.5pc] line-clamp-1 font-semibold hover:text-pink-500" />
      <div className="flex w-full xs:h-[2.4pc] justify-between items-center">
        <div className="flex justify-between gap-1 flex-col w-full">
          <span className="text-white/50 text-xs rounded-md bg-darkBlue-300 w-[5pc] h-[1.2pc]" />
          <b className="flex text-sm text-white/90 items-center gap-1 rounded-md bg-darkBlue-300 w-[4pc] h-[1.2pc]" />
        </div>
        <div className="p-1 bg-darkBlue-300 backdrop-blur-lg rounded-lg px-9 h-full" />
      </div>
    </div>
  );
}
