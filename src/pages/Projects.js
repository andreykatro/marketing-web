import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectModalWindow from "../components/ProjectModalWindow";

const defaultImg = 
"https://lh3.googleusercontent.com/YMth67O18Xf5Gf8ClcA_toFW_iPGDZM7-ER7W770V5mC8pnj4XmXErb9C0ABIdNWbQw5m0yJnQ5pZXYPdt_ciREVgYg-IxMJf-c4LcQc-ZsVHlzls1dLGrvuo5h7Wsw71fss4vGkfw=w12";
class Projects extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
    this.state = { modalShow: false, imgCard: "" };
    this.state.projects = [
      {
        id: 1,
        name: "accounting-analytics-apple",
        link:
          "https://lh3.googleusercontent.com/YMth67O18Xf5Gf8ClcA_toFW_iPGDZM7-ER7W770V5mC8pnj4XmXErb9C0ABIdNWbQw5m0yJnQ5pZXYPdt_ciREVgYg-IxMJf-c4LcQc-ZsVHlzls1dLGrvuo5h7Wsw71fss4vGkfw=w1200"
      },
      {
        id: 2,
        name: "america-analysis-cellphone",
        link:
          "https://lh3.googleusercontent.com/Jsqds56Tn0lYNU3hpbnGaWJLukNLplK_BdjYLr1v8hGdnkDpMnzEswbJnwgKiqICIyuBeTYK1l0SyYgMOCJcD1Ux5yW3zXnYL6BHD0Uj1xttgDhVudrhQlsrzXMKBQt945Eh7h58JQ=w1200"
      },
      {
        id: 3,
        name: "analysis-coffee-cup",
        link:
          "https://lh3.googleusercontent.com/vVWLEXdFzvMLoTmPKnKR32MUsp4qXD2Sa7vmZ8xRUHaJRtY2HP54LsguC7pRc0PkiVdaTTPm3d986ZiyRZEtDpcCp0V2LW9d3YarO1bKJzxTE_ipNIEXUKASxIvePtdoCjv_fF-6tw=w1200"
      },
      {
        id: 4,
        name: "analytics-chart-charts",
        link:
          "https://lh3.googleusercontent.com/vW742PdpFISqIpbo7wgKRPqB3AlGZ-JGkP9KVsel9bZ28UtM8RrE8-1ivIbPKUBzWnmbp8Qz0Z9EABvMFEJCI3oRk6mm7cVxeKJ7Pu69RXdZdyypRid7T4R0MV7zt6FxZgqN4g-qhg=w1200"
      },
      {
        id: 5,
        name: "apple-button-cell",
        link:
          "https://lh3.googleusercontent.com/Ath-CL-lAppYdD87dqtlnCKgxL7lZvBHWADuL_cnKVam3f-sO-Vxe9ZRmnL-ugTA_nbpfywybxotV8f9M-6UKFe31XSnCtkYtNi-fOcId6ArdgvdZkmO5L1zCt799nY5haLB6tFHbw=w1200"
      },
      {
        id: 6,
        name: "black-and-white-chart-cost",
        link:
          "https://lh3.googleusercontent.com/REbc5qzJS89DhsU4jO4BnfJGGsupnRcWkY4wZzD8T-w64P__hh1bGcXjsYJcd0Wew39qf-FjFdvlsXaj-yWvRx7D9boabeMbIjoTQvXUXfZRSu-fv_ba32myEUjISxzvcsnbt1YMDA=w1200"
      },
      {
        id: 7,
        name: "brainstorming-branding-businesspeople",
        link:
          "https://lh3.googleusercontent.com/_zqkCe-MR_48mVjyQEkoxAuNhbUocTYbRwwol1QR1g9vP8UXDvp44K3K4Vf55ogTVF8oKwEPVKKKoMlq6_bpw8nKEk2FVBbq9VssmSi-XJCOm07fEaNDKkE2hnh8C8lZbL18BH4z-w=w1200"
      },
      {
        id: 8,
        name: "cellphone-device-digital-marketing",
        link:
          "https://lh3.googleusercontent.com/2D3FmKUDUQOMnrv-IbgDEfcqHgjOgqoUqVKM-N-ac1MhqN8E4JBKDKbITaFz60v5SuucfhhdzHYBmQ_L2PWN0M2rpg1JAXtB4NdDIk4INdRQ_JIsWVja139z2ijg-89ZGDsaiOk-3g=w1200"
      },
      {
        id: 9,
        name: "charts-commerce-data",
        link:
          "https://lh3.googleusercontent.com/CUt_wky2X4afnTQreAQvXsa88lwpRMR0jH1TZYWvM0zHje-rJRmxJdY7PdgkhHYT8hegaCvdggTaoxI6IN0yW6YDXdSsgeNNP_rYO7W4QJSqxtCGEOlE6zRiGPkYadmMTsmjlGkiBQ=w1200"
      },
      {
        id: 10,
        name: "close-up-commerce-data",
        link:
          "https://lh3.googleusercontent.com/bR2j99puhxVa1h7ZfaXfImko9RQSX8At44tjFuQIFszKYPeVGrLOFXWzz9chI7np0vl2OFLmlcBjmc8DGAr2v8ojH8M28iHnHy3IKzfvvNXPvz9b-nY2uIV3pQK-afO_z0wFTdow-g=w1200"
      },
      {
        id: 11,
        name: "coffee-cup-of-coffee-desk",
        link:
          "https://lh3.googleusercontent.com/T1iRaUht2FrjEeHxUy2VAHPO5XrDZibkkCimzeirA8LG7gNEmy3fxB84yBV6o6dg87kThWFU99D1kqxgynji7Xz988a_tsfLrVgbOLvj3pWVEzbSdD-mb-W_diLzYwH5iXIScMXeGA=w1200"
      },
      {
        id: 12,
        name: "data-graphs-laptop",
        link:
          "https://lh3.googleusercontent.com/lntbNtPrvEaByE7piKlh6w0CPSHRq9hJGZDwwxC-ytGcFQstlIZMYJglEmSzLgHp6VtucTnw-MsNdFP-SYuxOl7kc5kmoMKQJY5etg1zeQIz5A-4pwr_iU9_Qbzpve4djmdX67F__A=w1200"
      }
    ];
  }
  
  componentDidMount() {
    const img = new Image();
    img.src = defaultImg;
    img.onload = function() {
      document.querySelectorAll(".asyncImage").forEach(function(imgItem) {
        imgItem.src = imgItem.dataset.src;
      });
    };
  }

  getProjItems() {
    let i = 0;
   
    return this.state.projects.map(img => {
      const res = img.name.replace(/-/g, " ");

      return (
        <Col
          key={++i + "" + Math.random}
          style={{ marginTop: "2rem" }}
          md={6}
          xs={10}
          className="img-card-container"
        >
          <Card
             data-aos="zoom-in"
            md={4}
            onClick={() =>
              this.setState({
                modalShow: true,
                imgCard: img.link,
                title: res.charAt(0).toUpperCase() + res.slice(1)
              })
            }
          >
            <div className="img-container">
              <Card.Img
                className="asyncImage"
                md="4"
                src={defaultImg}
                data-src={img.link}
                key={++i + "_" + Math.random}
              />
            </div>
            <Card.Title>
              {res.charAt(0).toUpperCase() + res.slice(1)}
            </Card.Title>
            <div className="overlay">
              <div className="text">Learn more...</div>
            </div>
          </Card>
        </Col>
      );
    });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
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
        <Row className=" d-flex justify-content-center">{this.getProjItems()}</Row>
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
