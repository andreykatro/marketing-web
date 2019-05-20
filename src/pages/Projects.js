import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectModalWindow from '../components/ProjectModalWindow'

class Projects extends Component {

  constructor(...args){
    super(...args);
    this.state = {};
    this.state = { modalShow: false, imgCard: '' };
    this.state.projects = [{
        "name": "accounting-analytics-apple",
        "link": "http://drive.google.com/uc?export=download&id=1VavHeEEwcLvXBXOeJcnnSbLgS9HrZq98"
    },
    {
        "name": "america-analysis-cellphone",
        "link": "http://drive.google.com/uc?export=download&id=1FX1pSak8sWLKVIf9hTIPizWYEGOAbXE7"
    },{
        "name": "analysis-coffee-cup",
        "link": "http://drive.google.com/uc?export=download&id=1pSjOupYRtPRmDMsOCUkXQ4AtO387ouKE"
    },{
        "name": "analytics-chart-charts",
        "link": "http://drive.google.com/uc?export=download&id=1F3Aq9XJeNuUZBB4XXXpbmmza8urBpuLd"
    },{
        "name": "apple-button-cell",
        "link": "http://drive.google.com/uc?export=download&id=1BxPl887V5EbAQFcWr7w5uxfXGYdnp5ZS"
    },{
        "name": "black-and-white-chart-cost",
        "link": "http://drive.google.com/uc?export=download&id=18sxJ-6gN4E-vUqnJCQY3jv9aUU73mF3a"
    },{
        "name": "brainstorming-branding-businesspeople",
        "link": "http://drive.google.com/uc?export=download&id=1z-wpyETu_szBFJo-NLDqxIRFKlTG2-aI"
    },{
        "name": "cellphone-device-digital-marketing",
        "link": "http://drive.google.com/uc?export=download&id=1P8Nog7047XaP4w-HhiRjnaWy8nW0SE-Z"
    },{
        "name": "charts-commerce-data",
        "link": "http://drive.google.com/uc?export=download&id=17bdMdVATd3rOvY62w5Zidx_DEhI1iKlx"
    },{
        "name": "close-up-commerce-data",
        "link": "http://drive.google.com/uc?export=download&id=1JJHM9mO0M8iUeezxmLlgd7kbbzH8PZ5K"
    },{
        "name": "coffee-cup-of-coffee-desk",
        "link": "http://drive.google.com/uc?export=download&id=1VrJKPng2ueWghh2RFakzJv0J9jMV2lv2"
    },{
        "name": "data-graphs-laptop",
        "link": "http://drive.google.com/uc?export=download&id=15s3wTSMIzVpo0Vo4YJFkiPOhtgOVJi6z"
    }
    ]
  }

  getProjItems() {
    let i = 0;
    return this.state.projects.map(img => {
      const res = img.name.replace(/-/g, " ");

      return (
        <Col key={++i + "_" + Math.random} style={{ marginTop: "2rem" }} md={6} className="img-card-container">
          <Card md={4} onClick={() => this.setState({ modalShow: true, imgCard: img.link, title: res.charAt(0).toUpperCase()+res.slice(1)})} >
            <Card.Img src={img.link} key={++i + "_" + Math.random} />
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
      <Container className="text-center projects-container">
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
