import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { lang } from "utils";

const _lang = lang();

function Home() {
  return (
    <>
      <main>
        <h1>Trang {_lang.title}</h1>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Home;
