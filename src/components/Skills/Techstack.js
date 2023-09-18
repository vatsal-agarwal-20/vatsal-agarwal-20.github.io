import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiCss3,
  SiMongodb,
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import './Skills.css'

const Techstack = () => {
  return (
    <div className='tech-stack' style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="tech-icons">
        <TbBrandCpp />
      </div>
      <div className="tech-icons">
        <SiHtml5 />
      </div>
      <div className="tech-icons">
        <SiCss3 />
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
      </div>
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <DiNodejs />
      </div>
      <div className="tech-icons">
        <SiMongodb />
      </div>
      <div className="tech-icons">
        <SiExpress />
      </div>
      <div className="tech-icons">
        <SiBootstrap />
      </div>
      <div className="tech-icons">
        <SiTailwindcss />
      </div>
    </div>
  );
}

export default Techstack;
