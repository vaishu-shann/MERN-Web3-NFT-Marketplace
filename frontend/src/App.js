import React, { useEffect, useState } from "react";
import "./assets/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <div className="flex justify-center items-center min-h-full max-w-full dark:bg-darkBlue-700">
        <div className="container w-full h-full">
          <Navbar/> <ScrollToTop/>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
