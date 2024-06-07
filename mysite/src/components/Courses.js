import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Particle from './Particle';

function Courses() {
    return (
        <Container className="app-container">
            <Particle />
            <Container className="main-content">
                <h1 style={{ paddingTop: "80px", marginBottom: "-30px", color: "white", fontFamily: "Times New Roman, Times, serif" }}>Courses Completed</h1>
                <Row>
                    <Col xs={12} md={6} lg={4} style={{ padding: "0px", marginBottom: "-80px" }}>
                        <Card className="course-card" style={{ background: "transparent", color: "white", textAlign: "left", border: "transparent" }}>
                            <Card.Body>
                                <Card.Title className="purple"><strong><u>Computer Science Systems</u></strong></Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Computer Programming and Utilization - <span className="purple">CS 101</span></li>
                                        <li>Abstractions and Paradigms for Programming <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 152, CS 154</span></li>
                                        <li>Software Systems Lab - <span className="purple">CS 251</span></li>
                                        <li>Computer Networks <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 224, CS 252</span></li>
                                        <li>Digital Logic Design and Computer Architecture <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 230, CS 232</span></li>
                                        <li>Operating Systems <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 347, CS 333</span></li>
                                        <li>Implementation of Programming Languages <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 302, CS 316</span></li>
                                        <li>Database and Information Systems <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 317, CS 387</span></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: "0px", marginBottom: "-80px" }}>
                        <Card className="course-card" style={{ background: "transparent", color: "white", textAlign: "left", border: "transparent" }}>
                            <Card.Body>
                                <Card.Title className="purple"><strong><u>Computer Science Theory</u></strong></Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Discrete Structures - <span className="purple">CS 207</span></li>
                                        <li>Data Structures and Algorithms <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 213, CS 293</span></li>
                                        <li>Design and Analysis of Algorithms - <span className="purple">CS 218</span></li>
                                        <li>Logic for Computer Science - <span className="purple">CS 228</span></li>
                                        <li>Automata Theory - <span className="purple">CS 310</span></li>
                                        <li>Geometric Algorithms - <span className="purple">CS 603</span></li>
                                        <li>Game Theory and Algorithmic Mechanism Design - <span className="purple">CS 6001</span></li>
                                        <li>Advanced Network Security and Cryptography - <span className="purple">CS 741</span></li>
                                        <li>Extremal Combinatorics - <span className="purple">CS 779</span></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: "0px", marginBottom: "-80px" }}>
                        <Card className="course-card" style={{ background: "transparent", color: "white", textAlign: "left", border: "transparent" }}>
                            <Card.Body>
                                <Card.Title className="purple"><strong><u>Mathematics & Statistics</u></strong></Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Calculus I - <span className="purple">MA 109</span></li>
                                        <li>Calculus II - <span className="purple">MA 111</span></li>
                                        <li>Linear Algebra - <span className="purple">MA 106</span></li>
                                        <li>Differential Equations - <span className="purple">MA 108</span></li>
                                        <li>Introduction to Numerical Analysis - <span className="purple">MA 214</span></li>
                                        <li>Optimization - <span className="purple">SI 416</span></li>
                                        <li>Linear Systems - <span className="purple">IE 614</span></li>
                                        <li>Probability and Stochastic Processes II - <span className="purple">IE 622</span></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: "0px", marginBottom: "20px" }}>
                        <Card className="course-card" style={{ background: "transparent", color: "white", textAlign: "left", border: "transparent" }}>
                            <Card.Body>
                                <Card.Title className="purple"><strong><u>Machine Learning & Data Science</u></strong></Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Data Analysis and Interpretation - <span className="purple">CS 215</span></li>
                                        <li>Artificial Intelligence and Machine Learning <span className="purple"><i>(Theory, Lab)</i></span> - <span className="purple">CS 337, CS 335</span></li>
                                        <li>Foundations of Intelligent and Learning Agents - <span className="purple">CS 747</span></li>
                                        <li>Advanced Machine Learning - <span className="purple">CS 726</span></li>
                                        <li>Advanced Image Processing - <span className="purple">CS 754</span></li>
                                        <li>Advanced Methods in Satellite Image Processing - <span className="purple">GNR 602</span></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: "0px", marginBottom: "20px" }}>
                        <Card className="course-card" style={{ background: "transparent", color: "white", textAlign: "left", border: "transparent" }}>
                            <Card.Body>
                                <Card.Title className="purple"><strong><u>Pure Sciences</u></strong></Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Quantum Physics and Application - <span className="purple">PH 107</span></li>
                                        <li>Introduction to Special Theory of <br />Relativity - <span className="purple">PH 207</span></li>
                                        <li>Basics of Electricity & Magnetism - <span className="purple">PH 108</span></li>
                                        <li>Astrophysics - <span className="purple">PH 556</span></li>
                                        <li>Advanced Astrophysics - <span className="purple">PH 819</span></li>
                                        <li>Biology - <span className="purple">BB 101</span></li>
                                        <li>Biomedical Microsystems - <span className="purple">BB 610</span></li>
                                        <li>Introduction to Evolutionary <br />Biology - <span className="purple">BB 647</span></li>
                                        <li>Genetics - <span className="purple">BB 421</span></li>
                                        <li>Organic & Inorganic Chemistry - <span className="purple">CH 105</span></li>
                                        <li>Physical Chemistry - <span className="purple">CH 107</span></li>
                                        <li>Physical Organic Chemistry - <span className="purple">CH 404</span></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: "0px", marginBottom: "20px" }}>
                        <Card className="course-card" style={{ background: "transparent", color: "white", textAlign: "left", border: "transparent" }}>
                            <Card.Body>
                                <Card.Title className="purple"><strong><u>Others</u></strong></Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Engineering Graphics & Drawing - <span className="purple">ME 119</span></li>
                                        <li>Economics - <span className="purple">HS 101</span></li>
                                        <li>Introduction to Electrical and Electronics Circuits - <span className="purple">EE 101</span></li>
                                        <li>Sociology - <span className="purple">HS 107</span></li>
                                        <li>Environmental Studies: Science and Engineering - <span className="purple">ES 200</span></li>
                                        <li>Environmental Studies - <span className="purple">HS 200</span></li>
                                        <li>Introduction to Public Health <br />Informatics - <span className="purple">DH 302</span></li>
                                        <li>Computer Programming for <br />Geosciences - <span className="purple">GS 543</span></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Courses;
