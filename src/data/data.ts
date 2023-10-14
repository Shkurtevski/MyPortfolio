import { Project } from "./dataTypes";

// Project Images
import portfolioImg from "../assets/img/portfolio.png";
import brainsterLabsImg from "../assets/img/brainster-labs.png";
import streetArtistsImg from "../assets/img/street-artists.png";
import carRacingGameImg from "../assets/img/Car-Racing-Game-img.png";
import codingChallengesImg from "../assets/img/coding-challenges.jpg";

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
import bootstrapIcon from "../assets/img/bootstrap-logo.png";
import tailwindIcon from "../assets/img/tailwind-logo.png";
import jqueryIcon from "../assets/img/jquery-logo.png";
import gitIcon from "../assets/img/git-logo.png";
import nextjsIcon from "../assets/img/next-js-logo.svg";
import uiuxIcon from "../assets/img/ui-ux.png";

export const projects: Project[] = [
  {
    title: "This Portfolio",
    description: "Tech Stack: React | Typescript | CSS | Bootstrap",
    imgUrl: portfolioImg,
    btnText1: "Website",
    btnText2: "Github",
    website: "https://shkurtevski.dev/",
    github: "https://github.com/Shkurtevski/MyPortfolio",
  },
  {
    title: "Brainster Labs",
    description: "Tech Stack: Javascript | HTML | Regex | SCSS(SASS)",
    imgUrl: brainsterLabsImg,
    btnText1: "Website",
    btnText2: "Github",
    website: "https://shkurtevski.github.io/BrainsterLabs/",
    github: "https://github.com/Shkurtevski/BrainsterLabs",
  },
  {
    title: "Street Artists",
    description: "Tech Stack: Javascript | Chart.js | SCSS(SASS)",
    imgUrl: streetArtistsImg,
    btnText1: "Website",
    btnText2: "Github",
    website: "https://thoughtful-pig-coveralls.cyclic.cloud/",
    github: "https://github.com/Shkurtevski/StreetArtists",
  },
  {
    title: "Car Racing Game",
    description: "Tech Stack: Javascript | jQuery | Bootstrap | CSS",
    imgUrl: carRacingGameImg,
    btnText1: "Website",
    btnText2: "Github",
    website: "https://shkurtevski.github.io/Car-Racing-Game/",
    github: "https://github.com/Shkurtevski/Car-Racing-Game",
  },
  {
    title: "Various Coding Challenges",
    description: "Tech Stack: HTML | CSS | Javascript | React | SCSS(SASS)",
    imgUrl: codingChallengesImg,
    btnText1: "Learn More",
    btnText2: "Github",
    website: "https://github.com/Shkurtevski/CodingChallenges",
    github: "https://github.com/Shkurtevski/CodingChallenges",
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
    icon: nextjsIcon,
    title: "Next js (Basic Knowledge)",
  },
  {
    id: 5,
    icon: cssIcon,
    title: "CSS",
  },
  {
    id: 6,
    icon: htmlIcon,
    title: "HTML",
  },
  {
    id: 7,
    icon: sassIcon,
    title: "Sass",
  },
  {
    id: 8,
    icon: jqueryIcon,
    title: "jQuery",
  },
  {
    id: 9,
    icon: bootstrapIcon,
    title: "Bootstrap",
  },
  {
    id: 10,
    icon: tailwindIcon,
    title: "Tailwind CSS (Basic Knowledge)",
  },
  {
    id: 11,
    icon: gitIcon,
    title: "git",
  },
  {
    id: 12,
    icon: uiuxIcon,
    title: "UI/UX (Basic Knowledge)",
  },
];
