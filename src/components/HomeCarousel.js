import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class HomeCarousel extends Component {
  constructor(){
    super();
    this.state={
      carouselItems: [
        {
          id: 1,
          src: "https://picsum.photos/id/201/1062/501?grayscale",
          atl: "First slide",
          captionTitle: "First slide label",
          captionText: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
          id: 2,
          src: "https://picsum.photos/id/180/1062/501?grayscale",
          alt: "Third slide",
          captionTitle: "Second slide label",
          captionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          id: 3,
          src: "https://picsum.photos/id/2/1062/501?grayscale",
          alt: "Third slide",
          captionTitle: "Third slide label",
          captionText: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
      ]
    };
  }

  getCaptionItems(){
    const items = this.state.carouselItems; 
    return items.map(item => {
        return (
          <Carousel.Item key={item.id+Math.random} >
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
          />
          <Carousel.Caption className="text-center">
            <h3>{item.captionTitle}</h3>
            <p>{item.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
        );
      })
  }
  
  render() {
    return (
      <Carousel className="carousel-fade">
          { this.getCaptionItems() }
      </Carousel>
    );
  }
}
export default HomeCarousel;
