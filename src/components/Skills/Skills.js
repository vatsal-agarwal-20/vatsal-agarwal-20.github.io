import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Leetcode from "./Leetcode";

const Skills = () => {
  return (
    <Container fluid className="about-section" data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="500">
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Leetcode />
      </Container>
  )
}

export default Skills