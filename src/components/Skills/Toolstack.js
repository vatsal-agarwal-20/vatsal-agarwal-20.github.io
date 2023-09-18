import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiRender,
  SiVercel,
  SiMysql
} from "react-icons/si";
import './Skills.css'

const Toolstack = () => {
  return (
    <div  className='tech-stack' style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="tech-icons">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icons">
        <SiPostman />
      </div>
      <div className="tech-icons">
        <SiVercel />
      </div>
      <div className="tech-icons">
        <SiMysql />
      </div>
      <div className="tech-icons">
        <SiRender />
      </div>
    </div>
  );
}

export default Toolstack;
