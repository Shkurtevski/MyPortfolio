import React from "react";
import { Col } from "react-bootstrap";
import { Project } from "../../../data/dataTypes";
import ProjectButton from "./ProjectButton";

const ProjectCard = ({
  title,
  description,
  imgUrl,
  btnText1,
  btnText2,
  website,
  github,
}: Project) => {
  return (
    <Col xs={12} md={6} lg={4} className="project-card d-flex">
      <div className="project-content-wrapper flex-column d-flex">
        <img src={imgUrl} alt="projects" className="img-fluid" />
        <div className="project-content-text flex-grow-1 d-flex flex-column">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="button-wrapper mt-auto">
            <ProjectButton text={btnText1} url={website} target="_blank" />
            <ProjectButton text={btnText2} url={github} target="_blank" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
