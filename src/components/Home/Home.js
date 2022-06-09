import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Particle from "../Particle";
import Type from "./Type";
import feelingProud from "../../Assets/images/feelingProud.svg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi everyone!<span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Rachit Singhal</strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="m-auto">
              {/* <img
                src={homeLogo}
                style={{ width: "75%" }}
                alt="home pic"
                className="d-block mx-auto img-fluid"
              /> */}
              <motion.div
                className="svg-container"
                animate={{ translateY: [-20, 0, -20, 0] }}
                transition={{ yoyo: Infinity, duration: 6 }}
              >
                <img
                  className=" d-block mx-auto img-fluid"
                  src={feelingProud}
                  alt=""
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
