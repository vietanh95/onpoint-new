import React, { useEffect } from "react";
import "./index.scss";
import SliderHome from "./components/SliderHome";
import DiscoverOnPoint from "./components/DiscoverOnPoint";
import ClientsNumber from "./components/ClientsNumber";
import WhatWeDo from "./components/WhatWeDo";
import OurProducts from "./components/OurProducts";
import OurServices from "./components/OurServices";
import Clients from "./components/Clients";
import News from "./components/News";
import TalkOur from "./components/TalkOur";

// const _lang = lang();
function Home() {
  const checkScrollTop = () => {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        console.log("reveals[i]", i);
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop, true);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const animationComponents = [
    <DiscoverOnPoint />,
    <ClientsNumber />,
    <WhatWeDo />,
    <OurProducts />,
    <OurServices />,
    <Clients />,
    <News />,
    <TalkOur />,
  ];

  return (
    <>
      {/* slider ============== */}
      <SliderHome />
      {/* discover on point ========= */}
      {animationComponents?.map((component, key) => (
        <section key={key}>
          <div className="container reveal">{component}</div>
        </section>
      ))}
      
    </>
  );
}

export default Home;
