//Create a standard React template jsx listing all the courses I have undertaken under categories by subsject: Computer Sicence Theory, Mathematics, Physics and Others.
// 
// Path: mysite/src/components/Courses.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Courses() {
    return (
        <Container>
            <h2>Courses</h2>
            <Row>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Body>
                            <Card.Title>Computer Science Theory</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Introduction to Algorithms</li>
                                    <li>Discrete Mathematics</li>
                                    <li>Computer Systems</li>
                                    <li>Computer Networks</li>
                                    <li>Operating Systems</li>
                                    <li>Database Systems</li>
                                    <li>Compiler Design</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Body>
                            <Card.Title>Mathematics</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Calculus I</li>
                                    <li>Calculus II</li>
                                    <li>Linear Algebra</li>
                                    <li>Discrete Mathematics</li>
                                    <li>Statistics</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Body>
                            <Card.Title>Physics</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Physics I</li>
                                    <li>Physics II</li>
                                    <li>Physics III</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Body>
                            <Card.Title>Others</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Japanese Language</li>
                                    <li>Public Speaking</li>
                                    <li>Artificial Intelligence</li>
                                    <li>Machine Learning</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Courses;