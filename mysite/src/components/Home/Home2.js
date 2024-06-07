import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{marginTop:"-150px"}}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
            A small introduction about myself..
              <br />
              <br />
            I'm an <span className="purple">IIT Bombay graduate</span> with a <span className="purple">Bachelor's degree in Computer Science & Engineering</span> and a <span className="purple">Minor in AI and Data Science</span>. Currently a <span className="purple">software developer at Wells Fargo</span>, I specialize in <span className="purple">full stack development</span>, <span className="purple">reinforcement learning</span>, and <span className="purple">deep learning</span>. My interests include <span className="purple">data-driven astronomy</span>, college <span className="purple">quizzing</span>, and the <span className="purple">finance and quant industry</span>. I love coding with my earphones on, playing my favorite tunes.
            <br />
              <br />
            To know in detail about my journey, please check out the rest of my portfolio. You can also find me on various social media platforms. Feel free to connect with me!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
        <Row style={{marginBottom:"-17px"}}>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sandeepan-Naskar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandeepan-naskar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gurubeanxd/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:naskarsandeepan8@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
