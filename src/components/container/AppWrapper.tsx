import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";
import Skills from "../Skills";

const AppWrapper = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Skills/>
    </React.Fragment>
  );
};

export default AppWrapper;
