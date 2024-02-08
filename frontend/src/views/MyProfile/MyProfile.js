import React, { useState, useEffect } from "react";
import MenuBar from "./components/MenuBar";


function MyProfile() {
  var css = "#navbar{display:none;}footer{display:none;}";
  const [stateMenuBar, setStateMenuBar] = useState("closeMenuBar");


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

      </div>
    </div>
  );
}
export default MyProfile;
