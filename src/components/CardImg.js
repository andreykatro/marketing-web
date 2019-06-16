import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CardImg extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.cardImg = props.cardImg;
    }
  render() {
    const cardImg = this.state.cardImg;
    return (
      <Card className="card-img-component" data-aos="zoom-out">
        <Card.Img variant="top" src={cardImg.srcImg} />
        <Card.Body>
          <Card.Title>{cardImg.title}</Card.Title>
          <Card.Subtitle>{cardImg.subtitle}</Card.Subtitle>
          <Card.Text>{cardImg.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default CardImg;