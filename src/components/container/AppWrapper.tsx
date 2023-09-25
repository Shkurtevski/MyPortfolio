import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";
import Skills from "../Skills";
import Projects from "../Projects";

const AppWrapper = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
    </React.Fragment>
  );
};

export default AppWrapper;
