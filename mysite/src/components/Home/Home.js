import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import me2 from "../../Assets/me2_no_back.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const styles = {
    image: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '65vh',
    },
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <div style={{ marginTop: 50 }}>
                <img src={me2} alt="My Image" style={styles.image} />
              </div>
            </Col>
            <Col md={7} className="home-header" style={{ fontFamily: "Times New Roman, Times, serif" }}>
              <h1 className="heading-name">
                <strong className="main-name" style={{ color: "white" }}>Sandeepan Naskar</strong>
              </h1>
              <h1 style={{ marginTop: -30 , marginLeft: -150}}>
                <pre style={{ textAlign: "center" }}>________</pre>
              </h1>
              <div style={{ padding: 50, paddingTop: 0, textAlign: "left", fontSize: "0.8em" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
