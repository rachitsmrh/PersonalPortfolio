import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know <strong className="main-name">About</strong> me
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Technical <strong className="main-name">Skills </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-css3-plain" />
          <Techstack iconName="devicon-sass-original" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain" />
          <Techstack iconName="devicon-mongodb-plain" />

          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" /> */}
            <div className="techs">
              <li>
                <i className="fab react fa-react"></i>
                <p className="d">React</p>
              </li>

              <li>
                <i className="fab node fa-node"></i>
                <p className="d">Node</p>
              </li>
              <li>
                <i className="fab html fa-html5"></i> <p className="d">HTML5</p>
              </li>
              <li>
                <i className="fab css fa-css3"></i>
                <p className="d">CSS3</p>
              </li>
              <li>
                <i className="fab bootstrap fa-bootstrap"></i>
                <p className="d">Bootstrap</p>
              </li>
              <li>
                <i className="fab javascript fa-js"></i>
                <p className="d">Javascript</p>
              </li>

              <li>
                <i className="fab python fa-python"></i>
                <p className="d">Python</p>
              </li>
            </div>
          </Row>
          <h1 className="project-heading">
            <strong className="main-name">Tools</strong> I use
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Techstack iconName="devicon-github-original" />
            <Techstack iconName="cib-visual-studio-code" />
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default About;
