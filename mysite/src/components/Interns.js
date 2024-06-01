// Create a standard React template jsx listing 2 internships and 1 reserahc project.
// 
// Path: mysite/src/components/Interns.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Interns () {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Internship</Card.Title>
                            <Card.Text>
                                Description of Internship
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Internship</Card.Title>
                            <Card.Text>
                                Description of Internship
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Research Project</Card.Title>
                            <Card.Text>
                                Description of Research Project
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Interns;