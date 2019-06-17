import React, { Component } from "react";
// import HomeCarousel from "../components/HomeCarousel";
import CardServices from "../components/CardServices";
import CardImg from "../components/CardImg";
import { Container, Row, Col } from "react-bootstrap";
import "../home.css";
import "../services.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.cards = [
      {
        id: 1,
        title: "Media strategy for business",
        text:
          "We will create a media strategy for your business. We will make your business more understandable for customers, which will bring you closer to them, increasing trust in the company. Our common efforts will bring your brand to a new level, we will teach your employees the correct presentation of media data about the company at all levels. Understanding the behavior of your customers, we can make your services more customer-oriented.",
        link: "#",
        linkText: "Learn More."
      },
      {
        id: 2,
        title: "Media design",
        text:
          "Our goal is to create a workable product that will help the company. That's why we have talented designers, photographers and animators with a lot of knowledge, great experience, who love their work and know what to offer to the client. ",
        link: "#",
        linkText: "Learn More."
      },
      {
        id: 3,
        title: "Paid media services",
        text:
          "In order to save money, we will explore paid media platforms that will be the best way to provide information to customers. We know which ones are most effective and best promote product. We will coordinate with you the budget, analyze needs for each project and choose the most effective ways to promote it.",
        link: "#",
        linkText: "Learn More."
      },
      {
        id: 4,
        title: "E-commerce",
        text:
          "For e-commerce, we offer market research, brand analysis, media strategy optimization, logo design and advertising products. As well we will promote the brand taking into account the target audience, business needs, competitiveness, profitability of projects and goods. For the existing business, we can reform the web content so it becomes more understandable and more efficiently sold. For start-ups, we offer completely new websites and online stores, filling up their required media, developing media strategies and promoting brands.",
        link: "#",
        linkText: "Learn More."
      },
      {
        id: 5,
        title: "Events support",
        text:
          "If you plan to organize events - we will develop a high-quality advertising company, provide media products, and provide media assistance directly in the event organization and media support during the event.",
        link: "#",
        linkText: "Learn More."
      },
      {
        id: 6,
        title: "BRAND MARKETING",
        text:
          "We provide branding from the inside-out, so when it comes to creating a logo or other elements, we've got you covered.",
        link: "#",
        linkText: "Learn More."
      }
    ];
    this.state.cardsImg = 
    [
      {
        id: 1,
        title: "Tom Hanks",
        subtitle: "PRESIDENT",
        srcImg:
          "http://drive.google.com/uc?export=download&id=1WI_eZBEbwcT9G4jqNeIfqEi1kpCsdWWt",
        text:
          "The founder and visionary behind our company, with over 36 years experience."
      },
      {
        id: 2,
        title: "Amy Adams",
        subtitle: "ACCOUNT COORDINATOR",
        srcImg:
          "http://drive.google.com/uc?export=download&id=1bs89HDqf80klVD8VhYUtvbq02nsksUEL",
        text:
          "The face behind our emails, managing our client's accounts and social medias."
      },
      {
        id: 3,
        title: "Christine Ko",
        subtitle: "DESIGN | SOCIAL MEDIA",
        srcImg:
          "http://drive.google.com/uc?export=download&id=1kL2yJEU9ygn_ZW6Q1u1RdYaaaPmKCn6_",
        text:
          "Lending a hand wherever needed, whether it's design or social media content."
      },
      {
        id: 4,
        title: "Morgan Freeman",
        subtitle: "ART DIRECTOR",
        srcImg:
          "http://drive.google.com/uc?export=download&id=187fh57OOI_V9h_uU8HD5SpzwnLIJlpBg",
        text:
          "Creates fresh, compelling design. Solves problems and tells effective stories."
      },
      {
        id: 5,
        title: "Halle Berry",
        subtitle: "SOCIAL MEDIA COORDINATOR",
        srcImg:
          "http://drive.google.com/uc?export=download&id=1v1XeK-_YEDTrnNcHFxHkW1ni7RvJzaXg",
        text: "The whiz behind our social media curtain."
      },
      {
        id: 6,
        title: "Jack Nicholson",
        subtitle: "CHIEF FINANCIAL OFFICER",
        srcImg:
          "http://drive.google.com/uc?export=download&id=1MV85rcXhBn_TTZT6bGNwmkqzpQMAJEtq",
        text:
          "The founder and visionary behind our company, with over 36 years experience."
      }
    ];
  }

  getCardItems() {
    return this.state.cards.map(card => {
      return (
        <Col md={6} xs={12} key={card.id + Math.random} className=" d-flex justify-content-center">
          <CardServices card={card} />
        </Col>
      );
    });
  }

  getCardImgItems() {
    return this.state.cardsImg.map(item => {
      return (
        <Col md={4} sm={6} xs={6} key={item.id + Math.random}>
          <CardImg cardImg={item} />
        </Col>
      );
    });
  }

  render() {
    return (
      <div className="home-content">
        <div id="home" className="home-start">
          {/* <HomeCarousel /> */}
          <div className="home-start-style">
            <div className="home-main-slogan">
              <h1 className="slogan-1">Think Different</h1>
              <h4 className="slogan-2">The Pursuit Of Perfection</h4>
            </div>
          </div>
        </div>
        <div id="services" >
          <h2 className="services-title">HOW WE CAN HELP</h2>
          <h4 className="services-subtitle">
            We are a full-service marketing and design firm.
          </h4>
          <Container>
            <Row>{this.getCardItems()}</Row>
          </Container>
        </div>
        <div id="team">
          <h2 className="services-title">MEET THE TEAM</h2>
          <h3 className="services-subtitle">
            Lorem ipsum dolor sit ament, consenter advising elite.
          </h3>
          <Container>
            <Row>{this.getCardImgItems()}</Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
