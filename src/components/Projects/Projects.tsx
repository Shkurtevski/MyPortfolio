import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../../data/data";
import ProjectCard from "./sub-components/ProjectCard";

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="Project">
              <h2>Projects</h2>
              <p>
                Explore a diverse range of my recent projects, each showcasing
                my passion and skills in web development. From dynamic web
                applications to creative design solutions, these projects
                reflect my dedication to creating innovative and user-friendly
                digital experiences.
              </p>
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
