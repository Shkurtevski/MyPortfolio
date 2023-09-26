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
    <React.Fragment>
      <Col xs={12} md={6} lg={4} className="project-card">
        <div className="project-content-wrapper">
          <img src={imgUrl} alt="projects" />
          <div className="project-content-text">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="button-wrapper">
              <ProjectButton text={btnText1} url={website} target="_blank" />
              <ProjectButton text={btnText2} url={github} target="_blank" />
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default ProjectCard;
