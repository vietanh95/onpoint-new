import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function About() {
  return (
    <>
      <main>
        <h1>Trang About</h1>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
