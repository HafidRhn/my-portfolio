import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/1.png";
import editor from "../../Assets/Projects/2.png";
import chatify from "../../Assets/Projects/3.png";
import suicide from "../../Assets/Projects/4.png";
import oto from "../../Assets/Projects/5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Natura Hills"
              description="This is a landing page project for a housing project made with HTML, CSS and JS programming languages."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sewa Ruangan"
              description="This is my UAS project, a room rental platform built using modern web technologies: HTML, CSS, and JavaScript. This website is designed to provide an optimal and intuitive user experience, as well as showcase technical skills in web development."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Booking Doctor"
              description="Next, this is a service website project made for booking doctors, in this project I made it with PHP and CSS programming languages."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oto}
              isBlog={false}
              title="Blog Otomotif"
              description="an automotive blog designed for vehicle and automotive technology enthusiasts. Built using HTML, CSS, and JavaScript, this blog features the latest news, in-depth reviews, and practical tips about the automotive world."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Kasuari Secure App"
              description="A project from housing in Bintaro called Kasuari, in this project my team and I were appointed to create a security application in the housing. This application is made with the Ionic framework and the language used Typescript and Angular."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
