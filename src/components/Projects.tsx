import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../data/data";
import ProjectCard from "./sub-components/ProjectCard";

interface Props {
    title: string;
    text: string;
}

const Projects = ({title, text}: Props) => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
