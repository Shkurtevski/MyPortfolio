import React from "react";
import { Col } from "react-bootstrap";

interface Props {
  title: string;
  description: string;
  imgUrl: string;
  altText?: string;
}

const ProjectCard = ({ title, description, imgUrl, altText }: Props) => {
  return (
    <React.Fragment>
      <Col xs={12} sm={6} md={4}>
        <div className="project-content-wrapper">
          <img src={imgUrl} alt={altText} />
          <div className="project-content-text">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default ProjectCard;
