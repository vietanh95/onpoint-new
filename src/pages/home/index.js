import * as React from "react";
// import { lang } from "utils";



import "./index.scss";
import LangHeader from "./components/LangHeader";
import MenuHeader from "./components/MenuHeader";
import SliderHome from "./components/SliderHome";
import DiscoverOnPoint from "./components/DiscoverOnPoint";
import ClientsNumber from "./components/ClientsNumber";
import WhatWeDo from "./components/WhatWeDo";
import OurProducts from "./components/OurProducts";
import OurServices from "./components/OurServices";
import Clients from "./components/Clients";
import News from "./components/News";
import TalkOur from "./components/TalkOur";
import FooterPage from "./components/FooterPage";

// const _lang = lang();
function Home() {
  return (
    <>
      {/* lang=========== */}
      <LangHeader />
      {/* menu=========== */}
      <MenuHeader />
      {/* slider ============== */}
      <SliderHome />
      {/* discover on point ========= */}
      <DiscoverOnPoint />
      {/* Clients Number ========== */}
      <ClientsNumber />
      {/* what we do ========== */}
      <WhatWeDo />
      {/* Our Products ========= */}
      <OurProducts />
      {/* Our Services ======== */}
      <OurServices />
      {/* Clients ========= */}
      <Clients />
      {/* News ======= */}
      <News />
      {/* TalkOur ======== */}
      <TalkOur />
      {/* FooterPage ========= */}
      <FooterPage />
    </>
  );
}



export default Home;
