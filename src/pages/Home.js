import React, { Component } from "react";
import HomeCarousel from "../components/HomeCarousel";
import CardServices from "../components/CardServices";
import CardImg from "../components/CardImg";
import { Container, Row, Col } from "react-bootstrap";
import employee1 from "../img/employees/employee1.jpg";
import employee2 from "../img/employees/employee2.jpg";
import employee3 from "../img/employees/employee3.jpg";
import employee4 from "../img/employees/employee4.jpg";
import employee5 from "../img/employees/employee5.jpg";
import employee6 from "../img/employees/employee6.jpg";

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
        title: "Ecommerce",
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
    this.state.cardsImg = [
      {
        id: 1,
        title: "Tom Hanks",
        subtitle: "PRESIDENT",
        srcImg: employee1,
        text:
          "The founder and visionary behind our company, with over 36 years experience."
      },
      {
        id: 2,
        title: "Amy Adams",
        subtitle: "ACCOUNT COORDINATOR",
        srcImg: employee2,
        text:
          "The face behind our emails, managing our client's accounts and social medias."
      },
      {
        id: 3,
        title: "Christine Ko",
        subtitle: "DESIGN | SOCIAL MEDIA",
        srcImg: employee3,
        text:
          "Lending a hand wherever needed, whether it's design or social media content."
      },
      {
        id: 4,
        title: "Morgan Freeman",
        subtitle: "ART DIRECTOR",
        srcImg: employee4,
        text:
          "Creates fresh, compelling design. Solves problems and tells effective stories."
      },
      {
        id: 5,
        title: "Halle Berry",
        subtitle: "SOCIAL MEDIA COORDINATOR",
        srcImg: employee5,
        text: "The whiz behind our social media curtain."
      },
      {
        id: 6,
        title: "Jack Nicholson",
        subtitle: "CHIEF FINANCIAL OFFICER",
        srcImg: employee6,
        text:
          "The founder and visionary behind our company, with over 36 years experience."
      }
    ];
  }

  getCardItems() {
    return this.state.cards.map(card => {
      return (
        <Col md={4} key={card.id + Math.random}>
          <CardServices card={card} />
        </Col>
      );
    });
  }

  getCardImgItems() {
    return this.state.cardsImg.map(item => {
      return (
        <Col md={4} key={item.id + Math.random}>
          <CardImg cardImg={item} />
        </Col>
      );
    });
  }

  render() {
    return (
      <div className="home-content">
        <div id="home">
          <HomeCarousel />
        </div>
        <div id="services">
          <h2 className="services-title">HOW WE CAN HELP</h2>
          <h3 className="services-subtitle">
            We are a full-service marketing and design firm.
          </h3>
          <Container>
            <Row>{this.getCardItems()}</Row>
          </Container>
        </div>
        <div id="about">
          <Container>
            <h2 className="services-title">ABOUT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              tempus, nisl quis lacinia consectetur, velit nulla varius nisl, a
              pharetra erat augue in lorem. Praesent nulla dolor, tincidunt nec
              efficitur nec, tempus ac augue. Ut vehicula massa vel convallis
              elementum. Duis ultrices tristique ex a volutpat. Fusce lobortis,
              urna ut egestas faucibus, diam tellus porta nulla, eu imperdiet
              elit lectus at tortor. Etiam neque nunc, suscipit vitae tempor et,
              vestibulum eget odio. Morbi pellentesque mi ac est venenatis
              ultrices. Phasellus eu porttitor mauris. Pellentesque eget nunc
              accumsan felis auctor efficitur eu quis felis. Donec eget nunc
              aliquam, suscipit nulla sit amet, auctor leo. Phasellus venenatis
              vulputate lectus a maximus. Maecenas sollicitudin diam non
              consequat feugiat. Mauris maximus lectus arcu, nec efficitur
              mauris facilisis ut. Maecenas id velit id lorem accumsan
              vulputate. Curabitur vel mi dui. Duis lobortis orci commodo,
              consequat ante in, ornare lacus. Integer mollis dignissim est eget
              vestibulum. Curabitur congue lacus eget consequat vulputate.
              Maecenas sagittis urna ultrices, luctus lorem at, convallis augue.
              Cras consequat sapien quam, at placerat arcu convallis a. Proin
              sagittis eleifend elit eget fringilla. Donec eu purus tortor.
              Mauris congue erat ligula. Integer laoreet tortor tortor, quis
              ornare sem convallis a. Ut in scelerisque sapien. Donec in lorem
              pellentesque, volutpat tellus sit amet, sollicitudin turpis. In
              hac habitasse platea dictumst. Aenean ornare sed sem vitae
              suscipit. Etiam sodales, augue at tincidunt fringilla, tortor
              libero venenatis risus, varius suscipit dui magna nec urna.
              Phasellus aliquam, erat quis dignissim suscipit, eros nisl
              elementum purus, sit amet tristique sem nulla non lorem. Donec ut
              nibh nec justo congue scelerisque. Nam malesuada, lorem at
              imperdiet finibus, diam metus scelerisque magna, sit amet eleifend
              eros mauris ut erat. Aenean quis mattis elit. Phasellus maximus
              ullamcorper quam sit amet luctus. Quisque tincidunt nulla vitae mi
              fringilla pharetra. Proin dictum diam dolor, quis sagittis odio
              pharetra a. Vivamus elementum erat eget urna ullamcorper
              vulputate. Pellentesque lobortis dui sem, eget semper risus congue
              a. Sed condimentum laoreet ex et viverra. Quisque imperdiet in
              massa vitae blandit. Sed consectetur et turpis eget molestie. Nam
              porttitor interdum nibh id venenatis. Phasellus eu feugiat justo,
              sit amet venenatis lacus. Mauris faucibus tincidunt risus, at
              vestibulum erat venenatis eu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed in congue turpis. Pellentesque
              nec mauris vitae ipsum vulputate egestas. Curabitur et eleifend
              urna. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nullam finibus luctus posuere.
              Vivamus euismod purus sem, nec placerat nulla dignissim vitae.
              Cras ut dictum nisl. Vivamus fermentum posuere mollis. Donec
              egestas sed dui at lobortis.
            </p>
          </Container>
        </div>
        <div id="team">
          <h2 className="services-title">MEET THE TEAM</h2>
          <h3 className="services-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <Container className="team-container">
            <Row>{this.getCardImgItems()}</Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
