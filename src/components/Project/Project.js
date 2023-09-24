import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-4 projectImg">
          <img src={project.img} alt="" className="img-fluid pb-3" data-aos="zoom-in"
            data-aos-duration="500" />
        </div>
        <div className="col-md-8 project-details" data-aos="fade-up"
          data-aos-duration="500">
          <h3 className="project-card__title mt-md-0 mt-sm-5">{project.name}</h3>
          <p>{project.date}</p>
          <ul className="my-item">{
            project.des.map((item) => <li>{item}</li>)
          }</ul>
          <ul className="tags">{
            project.Technology.map((item) => <li>{item}</li>)
          }</ul>
          <div className="project-link">
            {(project.website !== "") ? <a id="project-links" href={project?.website} target="_blank" rel="noreferrer">Live Site</a> : ""}
            <a id="project-links" href={project?.sourceCode} target="_blank" rel="noreferrer">Source Code</a>
            {/* {
              project?.backendGit && <a href={project?.backendGit} target="_blank" rel="noreferrer"><i className="fa fa-github"></i> Server Side</a>
            } */}
            {/* <a href={project?.linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i> Linkedin</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;