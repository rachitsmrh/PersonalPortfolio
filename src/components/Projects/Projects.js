import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Covid from "../../Assets/images/Covider.png";
import Tickle from "../../Assets/images/tickle.png";
import Event from "../../Assets/images/event.png";
import Netflix from "../../Assets/images/netflix.png";
import Amazon from "../../Assets/images/amazon.png";
import Bulk from "../../Assets/images/bulk.png";
import Article from "../../Assets/images/article.png";

function Projects() {
  return (
    <section>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">Projects I have Built</h1>
          <p style={{ color: "white" }}>
            Here are the projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Bulk}
                title="Bulk certificate generator"
                description="A platform that generates bulk certificates for all the input names for the given template"
                link="https://github.com/rachitsmrh/COVID19"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Covid}
                title="Covider"
                description="A platform that addressed all the current news, statistics of Covid 19 of more than 100+ countries
and the information and guidelines related to Covid 19"
                link="https://github.com/rachitsmrh/COVID19"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Article}
                title="Article Finder"
                description="A platform where users can search relevant articles according to their interests and read a summary of those articles along with the original articles.
"
                link="https://github.com/rachitsmrh/bulk-certificate-generate"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Amazon}
                title="Amazon Clone"
                description="A clone of amazon website that compromises functionalities like authentication, the listing of
more than 20+ products, add to cart, and buying options"
                link="https://github.com/rachitsmrh/Amazon-clone"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Event}
                title="Event Manager"
                description="A event managing platform where organizers can host events and students can registered in those events with their individual profile"
                link="https://github.com/manas03/event-manager"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Tickle}
                title="Tickle"
                description="A Web app where users could share memes, like and comment on other user’s memes
which would be updated in a real-time, and can interact with each other"
                link="https://github.com/Ticklers/WebApp"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Netflix}
                title="Netflix Clone"
                description="A Clone of Netflix website which contain various webseries and movies"
                link="https://github.com/rachitsmrh/Netflix-clone"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
