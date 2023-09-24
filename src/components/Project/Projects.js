import React from 'react';
import Project from './Project.js';
import img1 from "../img/proj1.png";
import img2 from "../img/proj2.png";
import img3 from "../img/proj3.png";

const projectsData = [
  {
    "id": 1,
    "img": img1,
    "name": "❖ PitchPassta - Your Own Footy Community",
    "date": "Feb 2022 - Present",
    "website": "",
    "sourceCode": "https://github.com/vatsal-agarwal-20/PitchPassta",
    "linkedin": "https://www.linkedin.com/in/vatsal-agarwal09/",
    "des": [
      "➣ A community-driven football forum",
      "➣ Engage in meaningful conversations and discussions around their favorite teams and players.",
      "➣ Keep yourself updated with the latest football news and events.",
    ],
    "Technology": [
      "#HTML",
      "#CSS",
      "#JavaScript",
      "#ReactJS",
      "#React Router",
      "#Node.js",
      "#Express",
      "#MongoDB",
    ]
  },
  {
    "id": 2,
    "img": img2,
    "name": "❖ MyKicks - One Stop Kicks Store",
    "date": "Jul 2023",
    "website": "https://mykicks.vercel.app/",
    "sourceCode": "https://github.com/vatsal-agarwal-20/MyKicks",
    "linkedin": "https://www.linkedin.com/in/vatsal-agarwal09/",
    "des": [
      "➣ A web application for sneaker enthusiasts to purchase trending sneakers.",
      "➣ Stripe API provides a seamless, secure payment process.",
      "➣ A seamless shopping experience for sneakerheads.",
    ],
    "Technology": [
      "#HTML",
      "#TailwindCSS",
      "#JavaScript",
      "#Vite + ReactJS",
      "#React Router",
      "#React Redux",
      "#StripeAPI",
      "#Node.js",
      "#Express",
    ]
  },
  {
    "id": 3,
    "img": img3,
    "name": "❖ FitSoul - Your Workout Partner",
    "date": "Mar 2023",
    "website": "https://fitsoul.vercel.app/",
    "sourceCode": "https://github.com/vatsal-agarwal-20/FitSoul",
    "linkedin": "https://www.linkedin.com/in/vatsal-agarwal09/",
    "des": [
      "➣ A personal trainer web application to monitor your movements during exercises.",
      "➣ Provides the number of repetitions to track and enhance your form and performance.",
      "➣ The pose detection model used tracks 3 body landmarks to determine body movements.",
    ],
    "Technology": [
      "#HTML",
      "#CSS",
      "#BootStrap",
      "#JavaScript",
      "#ReactJS",
      "#React Router",
      "#MediaPipe API"
    ]
  },
  // {
  //   "id": 4,
  //   "img": "https://i.ibb.co/3mbq7xd/hondaCBR.png",
  //   "name": "❖ Honda CBR - Best Bike Accessories Shop",
  //   "date": "July 2021 - July 2021",
  //   "website": "https://honda-cbr-rafi.netlify.app/",
  //   "frontendGit": "https://github.com/hellorafiul/honda-cbr",
  //   "linkedin": "https://www.linkedin.com/in/vatsal-agarwal09/",
  //   "des": [
  //     "➣  This was my very first static responsive website focused on UI using HTML5, CSS3, Bootstrap and JavaScript",
  //     "➣ Used fancy carousel & hosted on netlify",
  //     "➣ Amzging UI exprience",
  //   ],
  //   "Technology": [
  //     "#HTML5",
  //     "#CSS3",
  //     "#BootStrap",
  //     "#JavaScript",
  //   ]
  // }
]
const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-start pb-5 mb-5 container">My projects_</h2>
      {projectsData.map((project) => <Project key={project.id} project={project}></Project>)}
    </div>
  );
};

export default Projects;