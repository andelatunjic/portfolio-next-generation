//Covers
import Culturio from "../assets/cover-culturio.png";
import Inventory from "../assets/cover-inventory.png";
import Portfolio from "../assets/portfolio-home.jpg";
import Sushi from "../assets/sushi.jpg";
import SpeckProject from "../assets/cover-speck.png";
import SpeckHandsOn from "../assets/speck-hands-on.jpg";

//Gallery
import PortfolioContact from "../assets/portfolio-contact.jpg";
import PortfolioDark from "../assets/portfolio-experience-dark.jpg";
import PortfolioLight from "../assets/portfolio-experience-light.jpg";
import PortfolioSkills from "../assets/portfolio-skills.jpg";

import SpeckList from "../assets/speck-list.jpg";
import SpeckLectures from "../assets/speck-lectures.jpg";
import SpeckAchievements from "../assets/speck-achievements.jpg";
import SpeckResults from "../assets/speck-results.jpg";

import SpeckBrowse from "../assets/speck-hands-on-browse.jpg";

import InventoryList from "../assets/inventory-list.png";
import InventoryLogin from "../assets/inventory-login.png";

const projectsData = [
  {
    title: "Sushiman",
    role: "Frontend Developer",
    description:
      "Developed and maintained web applications with a focus on UI/UX design and responsive layouts.",
    img: Sushi,
    path: "/sushiman",
    gallery: [Sushi],
    tags: ["HTML", "CSS"],
  },
  {
    title: "Portfolio",
    role: "Frontend Developer",
    description:
      "Developed and maintained web applications with a focus on UI/UX design and responsive layouts.",
    img: Portfolio,
    path: "/portfolio",
    gallery: [
      Portfolio,
      PortfolioContact,
      PortfolioDark,
      PortfolioLight,
      PortfolioSkills,
    ],
    tags: ["React.js", "Styled components", "Firebase", "MUI"],
  },
  {
    title: "Speck Academy",
    role: "Frontend Developer",
    description:
      "Completed intensive training in React and Redux, gaining hands-on projects in real-world projects.",
    img: SpeckProject,
    path: "/speck-final-project",
    gallery: [SpeckList, SpeckLectures, SpeckAchievements, SpeckResults],
    tags: ["TEST", "TEST"],
  },
  {
    title: "Speck Hands-On",
    role: "Full-Stack Developer",
    description:
      "Graduated with a degree in Information Technology, specializing in web development and software engineering.",
    img: SpeckHandsOn,
    path: "/speck-hands-on",
    gallery: [SpeckHandsOn, SpeckBrowse],
    tags: ["TEST", "TEST"],
  },
  {
    title: "Culturio",
    role: "Software Engineer",
    description:
      "Graduated with a degree in Information Technology, specializing in web development and software engineering.",
    img: Culturio,
    path: "/culturio",
    gallery: [],
    tags: ["TEST", "TEST"],
  },
  {
    title: "Inventory App",
    role: "Software Engineer",
    description:
      "Graduated with a degree in Information Technology, specializing in web development and software engineering.",
    img: Inventory,
    path: "/inventory",
    gallery: [InventoryList, InventoryLogin],
    tags: ["TEST", "TEST"],
  },
];

export default projectsData;
