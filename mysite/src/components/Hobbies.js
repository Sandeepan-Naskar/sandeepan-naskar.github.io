//Create a standard React template jsx listing all my hobbies with a breif description and some photos
// 
// Path: mysite/src/components/Hobbies.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Hobbies() {
    return (
        <Container>
            <h2>Hobbies</h2>
            <Row>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Hobby</Card.Title>
                            <Card.Text>
                                Description of Hobby
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Hobby</Card.Title>
                            <Card.Text>
                                Description of Hobby
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Hobby</Card.Title>
                            <Card.Text>
                                Description of Hobby
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Hobbies;