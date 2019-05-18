import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../img/projects/", false, /\.(png|jpe?g|svg)$/)
);

class Projects extends Component {
  getProjItems() {
    let i = 0;
    return images.map(img => {
      //const str = "For more information, see Chapter 3.4.5.1";
      const re = /[ \w-]+\./;
      const found = img.match(re) + '';
      const res = found.replace(/-/g, " ");

      return (
        <Col key={++i + "_" + Math.random} style={{ marginTop: "2rem" }}>
          <Card style={{ width: "18rem", height: "18rem", border: 0 }}>
            <Card.Img src={img} key={++i + "_" + Math.random} />
            <Card.Title>{res.charAt(0).toUpperCase()+res.slice(1)}</Card.Title>
          </Card>
        </Col>
      );
    });
  }

  render() {
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
      </Container>
    );
  }
}

export default Projects;
