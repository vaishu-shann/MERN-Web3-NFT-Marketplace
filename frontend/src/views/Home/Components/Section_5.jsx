import React, { useEffect, useState } from "react";
import { getTopCreators } from "../../../api/profile.apis";
import demoUserAvatar from "../../../assets/images/user-demo-avatar.svg";
import { Link } from "react-router-dom";
import Product404 from "../../../components/UiComponents/Product404";

function Section_5() {
  const [Creator, setCreator] = useState([
    {id:"1",userEthAddress:"0x1A897fE190E81F46f113596688CE31FD6A81cd6e",userName:"Vaishnavi",userProfile:"https://e0.pxfuel.com/wallpapers/863/453/desktop-wallpaper-floating-in-space-an-nft-on-foundation.jpg"},
    {id:"1",userEthAddress:"0xC4f4Bc698c3090A5aBC23dfCBc50227C25895E9a",userName:"Swetla",userProfile:"data:image/jpeg;base64,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"},
    {id:"1",userEthAddress:"0x440641eABcA7F5D9274791F8CBF5D337e42e1091",userName:"Miguel",userProfile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcBA7_lQW02ENHv76ovgsxa1-Bno7PQsKUg&usqp=CAU"},
    {id:"2",userEthAddress:"0xfAb8A3e791D48D4a395c6552cB9dbc772F88F842",userName:"Umang",userProfile:"https://moon.ly/uploads/nft/0ac15667-14ed-4549-908b-4012c12c7018.jpg"},
    {id:"2",userEthAddress:"0x72bCE2654500B89FC7876b1973636Ab116Da7C8A",userName:"Ujjwal Bajaj",userProfile:"https://preview.redd.it/9kap0xhz5j171.jpg?width=640&crop=smart&auto=webp&s=bd28fe410ce6863383c029c341130298ad1432b4"},
  ]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await getTopCreators(1);
        setCreator(response);
      } catch (error) {
        console.log(error);
      }
    };
    // fetching();
  }, []);

  return (
    <div
      id="section-5"
      className="flex mt-10 gap-6 lg:gap-20 flex-col  lg:h-[20pc] w-full"
    >
      <h1 className="dark:text-white/90 text-2xl font-semibold sm:text-4xl">
        Top Seller in{" "}
        <b className="border-2 sm:text-2xl font-semibold text-lg lg:shadow-none lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
          All Time
        </b>
      </h1>
      <div className="flex flex-col gap-10 flex-wrap mt-5">
        {Creator ? (
          Creator.length > 0 ? (
            <div className="flex w-full justify-center sm:justify-between gap-4 flex-wrap">
              {Creator.map((item, index) => (
                <Link
                  to={`/author/${item.userEthAddress}`}
                  key={index}
                  className="flex flex-autoe w-[11pc] h-[11pc] cursor-pointer items-center relative justify-start flex-col gap-2"
                >
                  <img
                    src={item.userProfile}
                    className="h-[6pc] border-[1px] border-gray-700/50 rounded-lg w-[6pc]"
                    alt=""
                  />
                  <div className="right-5 -top-2 h-[1.5pc] absolute w-[1.5pc] text-xs rounded-full text-pink-500 font-semibold bg-white/90  flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <span className="text-white font-semibold hover:text-pink-500 transition-all">
                      {item.userName ? item.userName : "Not found"}
                    </span>
                    <p className="text-white/50 text-sm">
                      {item
                        ? `${item.userEthAddress.slice(
                            0,
                            4
                          )}...${item.userEthAddress.slice(39)}`
                        : null}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <Product404
              message="Creator not found"
              subMessage="Create our account"
            />
          )
        ) : (
          <Product404
            message="Creator not found"
            subMessage="Create our account"
          />
        )}
      </div>
    </div>
  );
}

export default Section_5;
