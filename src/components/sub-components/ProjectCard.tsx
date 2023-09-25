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
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={altText} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
