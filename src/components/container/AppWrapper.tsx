import React from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact";

const AppWrapper = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Skills />
      <Projects
        title="Projects"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book."
      />
      <Contact />
    </React.Fragment>
  );
};

export default AppWrapper;
