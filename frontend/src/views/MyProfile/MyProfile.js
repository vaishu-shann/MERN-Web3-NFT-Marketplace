import React, { useState } from "react";
import MenuBar from "./components/MenuBar";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import AddNewNFT from "./components/CreateNFT/AddNewNFT";


function MyProfile() {
  var css = "#navbar{display:none;}footer{display:none;}";
  const [stateMenuBar, setStateMenuBar] = useState("closeMenuBar");

  var changeCssClass = () => {
    setStateMenuBar("activeMenuBar");
  };
  var closeMenu = () => {
    setStateMenuBar("closeMenuBar");
  };

  return (
    <div className="mt-5 relative flex flex-col gap-5 ">
      <style>{css}</style>
      <div
        id="Profile-menu"
        className="fixed flex w-full top-0 left-0 dark:bg-darkBlue-700"
      >
        <MenuBar className={stateMenuBar} close={closeMenu} />
        <div id="right" className="w-full flex flex-col h-[100dvh]">

        <NavBar ClickEvent={changeCssClass} />
        <Routes>
          <Route path="/" element={<Body />}>
          <Route path="myCollection" />
          </Route>
          <Route path="/addNFT" element={<AddNewNFT />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
