import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiProlog,
  DiDjango,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiC,
  SiGnubash,
  SiLatex,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiC/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiProlog />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiDjango />
      </Col>
      
      <Col xs={4} md={1} className="tech-icons">
        <SiGnubash/>
      </Col>      
      <Col xs={4} md={1} className="tech-icons">
        <SiLatex/>
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <FaAngular />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
