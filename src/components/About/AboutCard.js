import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hafid Roihan </span>
            from <span className="purple"> Tangerang Selatan, Indonesia.</span>
            <br />
            Currently I work as a programmer at my own business agency.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to get what you want!"{" "}
          </p>
          <footer className="blockquote-footer">Hafid Roihan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
