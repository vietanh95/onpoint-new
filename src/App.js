import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Store from "./pages/product/Store/Store";
import Integrated from "./pages/product/Integrated/Integrated";
import Campaign from "./pages/product/Campaign/Campaign";
import Performance from "./pages/product/Performance/Performance";
import About from "./pages/about";

import LangHeader from "pages/home/components/LangHeader";
import MenuHeader from "pages/common/MenuHeader";
import FooterPage from "pages/common/FooterPage";

function App() {
  return (
    <BrowserRouter>
      {/* lang=========== */}
      <LangHeader />
      {/* menu=========== */}
      <MenuHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product-store" element={<Store />} />
        <Route exact path="/product-integrated" element={<Integrated />} />
        <Route exact path="/product-campaign" element={<Campaign />} />
        <Route exact path="/product-performance" element={<Performance />} />
        <Route exact path="about" element={<About />} />
      </Routes>
      {/* FooterPage ========= */}
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
