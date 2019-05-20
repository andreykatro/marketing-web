import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectModalWindow from '../components/ProjectModalWindow'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../img/projects/", false, /\.(png|jpe?g|svg)$/)
);

class Projects extends Component {

  constructor(...args){
    super(...args);
    this.state = {};
    this.state = { modalShow: false, imgCard: '' };
  }

  handleCard() {

  }

  getProjItems() {
    let i = 0;
    return images.map(img => {
      const re = /[ \w-]+\./;
      const found = img.match(re) + '';
      const res = found.replace(/-/g, " ");

      return (
        <Col key={++i + "_" + Math.random} style={{ marginTop: "2rem" }} md={6} className="img-card-container">
          <Card md={4} onClick={() => this.setState({ modalShow: true, imgCard: img, title: res.charAt(0).toUpperCase()+res.slice(1)})} >
            <Card.Img src={img} key={++i + "_" + Math.random} />
            <Card.Title>{res.charAt(0).toUpperCase()+res.slice(1)}</Card.Title>
            <div className="overlay">
              <div className="text">Learn more...</div>
            </div>
          </Card>
        </Col>
      );
    });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })
    return (
      <Container className="text-center" style={{ marginTop: 100 }}>
        <Row>
          <Col>
            <h3 className="text-uppercase">HIGHLIGHTED PROJECTS</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>
              Here you can see our projects we made for clients, it will help
              you to understand what exactly we are doing and how effective we
              are.
            </h5>
          </Col>
        </Row>
        <Row>{this.getProjItems()}</Row>
        <ProjectModalWindow
          show={this.state.modalShow}
          onHide={modalClose}
          img={this.state.imgCard}
          title={this.state.title}
        />
      </Container>
    );
  }
}

export default Projects;
