import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="main-name">Rachit Singhal</span> a Full
            Stack Developer, Competitive Programmer and Environment enthusiast.
            <br />
            For web development I uses MERN stack. I primarily uses React and
            Redux for frontend development. I am experienced in building RESTful
            APIs using Node.js and express, User Auth with PassportJS and
            Firebase.
            <br />I am also a competitive programmer and love to participate in
            contests with a passion of improving myself with every passing
            contest. Besides all these tech stuffs, I consider myself a chess
            player also🙂.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
