import React, { Component } from "react";
import { Modal} from "react-bootstrap";

class ProjectModalWindow extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.props.title}</h4>
          <img src={this.props.img} alt={this.props.title} md={4} sx={6} className="img-project-modal-win"/>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur ipsa maxime repellat nam voluptatum aut tempora.
            Distinctio repellat corporis, ratione quo illo debitis unde hic
            voluptatem, nobis repudiandae a rerum! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam inventore, ab provident harum
            quisquam numquam neque at in quaerat iure quam modi enim
            repellendus? Minima quae earum dolor? Earum, adipisci.
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ProjectModalWindow;
