import React, { Component } from "react";
import { Card } from "react-bootstrap";

class CardServices extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.card = props.card;
    }
  render() {
    const card = this.state.card;
    return (
      <div className="card-deck">
        <Card className="card-services-component">
          <Card.Body>
            <Card.Title className="card-title">{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Card.Link href={card.link}>{card.linkText}</Card.Link>
          </Card.Body>
        </Card>
        </div>
    );
  }
}

export default CardServices;
