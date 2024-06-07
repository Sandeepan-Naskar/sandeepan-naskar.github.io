import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiOctave,
  SiGithub,
  SiJupyter,
  SiAndroidstudio,
  SiGitlab,
  SiDocker
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiOctave />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <FaDocker />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
