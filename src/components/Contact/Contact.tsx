import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
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
                      type="tel"
                      name="tel"
                      placeholder="Phone No. (optional)"
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
