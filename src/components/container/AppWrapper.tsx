import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import { Footer } from "../Footer/Footer";

const AppWrapper = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default AppWrapper;
