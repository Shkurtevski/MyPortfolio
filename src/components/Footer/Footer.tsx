import { Container, Row, Col } from "react-bootstrap";
import { socialLinksData } from "../../data/data";
import SocialLink from "../Navbar/sub-components/SocialLink";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div className="social-icon">
              <SocialLink socialLinks={socialLinksData} />
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
