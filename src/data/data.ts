import { Project } from "./dataTypes";

// Project Images
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

// Social Media Icons
import linkedinIcon from "../assets/img/linkedin.svg";
import githubIcon from "../assets/img/github.svg";
import instagramIcon from "../assets/img/instagram.svg";

// Skill Icons
import javascriptIcon from "../assets/img/javascript-logo.png";
import typescriptIcon from "../assets/img/typescript-logo.jpg";
import reactIcon from "../assets/img/React-icon.png";
import cssIcon from "../assets/img/css-logo.png";
import htmlIcon from "../assets/img/html-logo.png";
import sassIcon from "../assets/img/sass-logo.png";
import bootstrapIcon from "../assets/img/bootstrap-logo.svg"

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

export const skillsData = [
  {
    id: 1,
    icon: javascriptIcon,
    title: "JavaScript",
  },
  {
    id: 2,
    icon: typescriptIcon,
    title: "Typescript",
  },
  {
    id: 3,
    icon: reactIcon,
    title: "React",
  },
  {
    id: 4,
    icon: cssIcon,
    title: "CSS",
  },
  {
    id: 5,
    icon: htmlIcon,
    title: "HTML",
  },
  {
    id: 6,
    icon: sassIcon,
    title: "Sass",
  },
  {
    id: 7,
    icon: bootstrapIcon,
    title: "Bootstrap",
  },
];
