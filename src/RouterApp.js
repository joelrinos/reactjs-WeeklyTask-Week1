import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarCustom from "./components/AppBarCustom";
import AppFooter from "./components/AppFooter";
import PHome from "./components/PHome";
import PAbout from "./components/PAbout";
import PContact from "./components/PContact";
import PSignUp from "./components/PSignUp";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <AppBarCustom />
      <Routes>
        <Route path="/" element={<PHome />} />
        <Route path="/home" element={<PHome />} />
        <Route path="/about" element={<PAbout />} />
        <Route path="/contact" element={<PContact />} />
        <Route path="/signup" element={<PSignUp />} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  );
};

export default RouterApp;
