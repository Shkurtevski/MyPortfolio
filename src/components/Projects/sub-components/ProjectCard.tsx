import React from "react";
import { Col } from "react-bootstrap";
import { Project } from "../../../data/dataTypes";

const ProjectCard = ({ title, description, imgUrl, btnText1, btnText2 }: Project) => {
  return (
    <React.Fragment>
      <Col xs={12} md={6} className="mb-2 project-card">
        <div className="project-content-wrapper">
          <img src={imgUrl} alt="projects" />
          <div className="project-content-text">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="button-wrapper">
              <button className="vvd left">
                <span>{btnText1}</span>
              </button>
              <button className="vvd right">
                <span>{btnText2}</span>
              </button>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default ProjectCard;
