import { Project } from "./dataTypes";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import linkedinIcon from "../assets/img/linkedin.svg";
import githubIcon from "../assets/img/github.svg";
import instagramIcon from "../assets/img/instagram.svg";

export const projects: Project[] = [
  {
    title: "Brainster Labs",
    description: "Javascript, HTML and SCSS",
    imgUrl: projImg1,
  },
  {
    title: "Street Artists",
    description: "Javascript, SCSS",
    imgUrl: projImg2,
  },
  {
    title: "This Portfolio",
    description: "React, Bootstrap, CSS",
    imgUrl: projImg3,
  },
];

export const socialLinksData = [
  {
    href: "https://www.linkedin.com/in/nenad-shkurtevski-b49b20250/",
    imgSrc: linkedinIcon,
    altText: "LinkedIn",
  },
  {
    href: "https://github.com/Shkurtevski",
    imgSrc: githubIcon,
    altText: "GitHub",
  },
  {
    href: "https://www.instagram.com/nenad.shkurtevski/",
    imgSrc: instagramIcon,
    altText: "Instagram",
  },
];

export const navLinks = [
  { to: "/#home", text: "Home" },
  { to: "/#skills", text: "Skills" },
  { to: "/#projects", text: "Projects" },
];

export const bannerText: string[] = [
  "Frontend Developer.",
  "React Developer.",
  "Javascript Developer.",
];
