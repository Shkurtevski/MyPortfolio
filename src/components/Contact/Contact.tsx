import { Container, Row, Col } from "react-bootstrap";
import { contactInformations } from "../../data/data";
import ContactInformation from "./sub-components/ContactInformation";

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12} className="contact-informations">
            {contactInformations.map((contact, index) => (
              <ContactInformation key={index} {...contact} />
            ))}
          </Col>
          <Col md={6} sm={12}>
            <div>
              <h2>Get In Touch</h2>
              <form action="" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      required
                      type="text"
                      name="surname"
                      placeholder="Last Name"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      required
                      type="tel"
                      name="tel"
                      placeholder="Phone No."
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      required
                      rows={6}
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <button type="submit">
                      <span>Send</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
