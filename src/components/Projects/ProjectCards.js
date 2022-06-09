import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="main-name">{props.title}</Card.Title>
        <Card.Text className="card-text" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {"View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
