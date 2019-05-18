import React, { Component } from "react";
import { Form, Container, Button, Row, Col, Card} from "react-bootstrap";
import imgBackground from "../img/contact.jpg"

class Contact extends Component {
  render() {
    return (
      <Container>
        <Row>
            <Col>
                <h2 className="contact-title">We are happy to answer all your questions.</h2>
            </Col>
        </Row>
        <Row className="justify-content-lg-center">
          <Col lg={4}>
            <div className="contact-container">
              <Form >
                <Form.Group controlId="contact-control-input">
                  <Form.Control placeholder="Full Name:" required />
                  <Form.Control placeholder="Company:" />
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <Form.Control
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone:"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="contact-control-select">
                  <Form.Control as="select">
                    <option value="">Projected Monthly Budget For Project:</option>
                    <option value="Unknown">Unknown</option>
                    <option value="300-750/mo">$300 – $750/mo.</option>
                    <option value="750-1500/mo">$750 – $1,500/mo.</option>
                    <option value="1500-3500/mo">$1,500 – $3,500/mo.</option>
                    <option value="3500-10000/mo">$3,500 – $10,000/mo.</option>
                    <option value="10000+/mo">$10,000+/mo.</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="contact-control-textarea">
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Questions/Comments:"
                  />
                </Form.Group>
                <Button variant="success" type="submit" size="lg" block>
                  Please Contact Me
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={7}>
              <div className="contact-container d-flex justify-content-center">
                <Card className="bg-dark text-white ">
                  <Card.Img src={imgBackground} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title className="card-title-ls text-white d-flex justify-content-center font-weight-bold text-center">Would you prefer to talk to someone in person?</Card.Title>
                    <div className="contact-block">
                      <Card.Text className="d-flex justify-content-center">Last updated 3 mins ago:</Card.Text>
                      <Card.Link href="tel:888-33-7777" className="contact-button-link justify-content-center"><i class="fa fa-mobile-phone"></i> 888-33-7777</Card.Link>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
