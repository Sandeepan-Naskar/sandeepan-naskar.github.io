import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import image from "../../Assets/grad1.jfif";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              // paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.2em", marginTop: "-50px", paddingBottom: "10px",  fontFamily: "Times New Roman, Times, serif"}} >
              About Me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{  paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={image} style={{marginTop: "-20px"}}width="85%" alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 style={{ fontSize: "2.2em", paddingBottom: "10px", fontFamily: "Times New Roman, Times, serif"}}>
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 style={{ fontSize: "2.2em", paddingBottom: "10px", fontFamily: "Times New Roman, Times, serif"}}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
