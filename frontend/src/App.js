import React, { useEffect, useState } from "react";
import "./assets/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home/Home";
import Footer from "./components/Footer";
import Explore from "./views/Explore/Explore";

function App() {
  return (
    <BrowserRouter>
    <div className="flex justify-center items-center min-h-full max-w-full dark:bg-darkBlue-700">
        <div className="container w-full h-full">
          <Navbar/> <ScrollToTop/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />}/>

          </Routes>
          <Footer/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
