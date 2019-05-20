import React, { Component } from "react";
import { Form, Container, Button, Row, Col, Card} from "react-bootstrap";
import imgBackground from "../img/contact.jpg"
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.contact = {};
    this.state = {
      FullName:  '',
      Company: '',
      Email: '',
      Phone: '',
      ProjectedMonthlyBudget: '',
      Comments: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const contact = {};
    contact.Id = 0;
    contact.FullName = this.state.FullName;
    contact.Company =  this.state.Company;
    contact.Email = this.state.Email;
    contact.Phone = this.state.Phone;
    contact.ProjectedMonthlyBudget =  this.state.ProjectedMonthlyBudget;
    contact.Comments =  this.state.Comments;

    axios.post(`https://localhost:44340/api/contact`, contact)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          FullName:  '',
          Company: '',
          Email: '',
          Phone: '',
          ProjectedMonthlyBudget: '',
          Comments: ''
        }
        );

      })
  }

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
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="contact-control-input">
                  <Form.Control name='FullName' placeholder="Full Name:" required onChange={this.handleInputChange} value={this.state.FullName} />
                  <Form.Control name='Company' placeholder="Company:" onChange={this.handleInputChange} value={this.state.Company} />
                  <Form.Control
                   value={this.state.Email}
                    name='Email'
                    type="email"
                    placeholder="name@example.com"
                    required
                    onChange={this.handleInputChange}
                  />
                  <Form.Control
                  value={this.state.Phone}
                    name='Phone'
                    type="tel"
                    placeholder="Phone:"
                    required
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="contact-control-select">
                  <Form.Control value={this.state.ProjectedMonthlyBudget} name='ProjectedMonthlyBudget' as="select" onChange={this.handleInputChange}>
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
                  value={this.state.Comments}
                    name='Comments'
                    as="textarea"
                    rows="4"
                    placeholder="Questions/Comments:"
                    onChange={this.handleInputChange}
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
                      <Card.Link href="tel:888-33-7777" className="contact-button-link justify-content-center"><i className="fa fa-mobile-phone"></i> 888-33-7777</Card.Link>
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
