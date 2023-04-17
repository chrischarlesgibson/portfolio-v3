import blogspotPic from "../images/Blogspot.png";
import livHealthyPic from "../images/LivHealthy.png";
import noteTakerPic from "../images/noteTaker3000.png";
import purpleWaivePic from "../images/purpleWaive.png";
import weatherCastPic from "../images/weathercast.png";
import loveisblurPic from "../images/loveisblurPic.png";
import businessWebPic from "../images/BusinessWeb.png";
import angularPortfolioPic from "../images/angularPortfolio.png";
import socialMediaPic from "../images/socialMedia.png";

export const projects = [
  {
    id: 1,
    title: "Purple Waive",
    description:
      "Purple wAIve uses DALLE2's artifical intellingence system to generate pictures based on user input.",
    thumbnail: purpleWaivePic,
    repo: "https://github.com/chrischarlesgibson/purple_wAIve",
    appUrl: "https://purple-waive.herokuapp.com/",
    tech: [
      "Express",
      "Handlebars",
      "Javascript",
      "Sequelize",
      "mySQL2",
      "node-sass",
      "Cloudinary",
      "openai",
      "Exress-Session",
      "Bulma",
    ],
  },
  {
    id: 2,
    title: "Love is blur",
    description: "a dating app for people who value values.",
    thumbnail: loveisblurPic,
    repo: "https://github.com/DraconMarius/love-is-blurr",
    appUrl: "https://love-is-blur.herokuapp.com/",
    tech: [
      "React",
      "node",
      "Javascript",
      "MUI",
      "Framer",
      "react-tinder-card",
      "Bulma",
    ],
  },
  {
    id: 3,
    title: "LivHealthy",
    description:
      "This is an app for guidance on living healthy(or, LivHealthy).",
    thumbnail: livHealthyPic,
    repo: "https://github.com/chrischarlesgibson/LivHealthy",
    appUrl: "https://thedomconrad.github.io/LivHealthy/",
    tech: [
      "HTML",
      "jQuery",
      "Javascript",
      "Chart.js",
      "RESTful APIs",
      "Materilize",
    ],
  },
  {
    id: 4,
    title: "NoteMaker3000",
    description: "NoteMaker3000 is the ultimate note-taking app. ",
    thumbnail: noteTakerPic,
    repo: "https://github.com/chrischarlesgibson/The-NoteMaker-3000",
    appUrl: "https://the-notemaker-3000.herokuapp.com/",
    tech: ["express", "uuid", "javascript", "node"],
  },
  {
    id: 5,
    title: "Blogspot",
    description:
      "Blogspot is a webpage built for tech people who want to read and write all things tech related.",
    thumbnail: blogspotPic,
    repo: "https://github.com/chrischarlesgibson/blogspot",
    appUrl: "https://warm-coast-31406.herokuapp.com/",
    tech: [
      "Express",
      "Handlebars",
      "Javascript",
      "Sequelize",
      "mySQL2",
      "Exress-Session",
      "Materialize",
      "bcrypt",
      "dotenv",
      "connect-session-sequelize",
    ],
  },
  {
    id: 6,
    title: "WeatherCast",
    description:
      "WeatherCast is an application that presents a current day forecast as well as a five day future forecast for each city the user searchs for.",
    thumbnail: weatherCastPic,
    repo: "https://github.com/chrischarlesgibson/Weather-Dashboard",
    appUrl: "https://chrischarlesgibson.github.io/Weather-Dashboard/",
    tech: [
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "OpenWeather API",
      "Moment.js",
    ],
  },
  {
    id: 7,
    title: "BusinessWeb",
    description:
      "BusinessWeb is a command line application that helps business owners create a database for thier business.",
    thumbnail: businessWebPic,
    repo: "https://github.com/chrischarlesgibson/BusinessWeb",
    demo: "https://youtu.be/Iqzj7Y3wqA4",
    tech: ["mySQL2", "Inquirer", "console.table", "Javascript", "node.js"],
  },
  {
    id: 8,
    title: "Angular Portfolio",
    description: "This is my portfolio page made using TypeScript and Angular.",
    thumbnail: angularPortfolioPic,
    repo: "https://github.com/chrischarlesgibson/angular-portfolio",
    demo: "https://chrischarlesgibson.github.io/angular-portfolio/",
    tech: ["Angular", "InquiAngular-Material", "TypeScript", "HTML", "CSS"],
  },
  {
    id: 9,
    title: "Social Media API",
    description:
      "The purpose of this project was to create the backend API of a future social media site. ",
    thumbnail: socialMediaPic,
    repo: "https://github.com/chrischarlesgibson/social-network-API",
    demo: "https://youtu.be/_zijhVlMA2o",
    tech: [
      "Express",
      "Mongoose",
      "Insomnia",
      "MongoDB",
      "Day.js",
      "MongoDB Compass",
      "Javascript",
    ],
  },
];
