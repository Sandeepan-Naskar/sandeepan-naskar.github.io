//Create a standard React template jsx listing all my travel destinations with a breif description and some photos
// 
// Path: mysite/src/components/Travel.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Travel() {
    return (
        <Container>
            <h2>Travel</h2>
            <Row>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Travel Destination</Card.Title>
                            <Card.Text>
                                Description of Travel Destination
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Travel Destination</Card.Title>
                            <Card.Text>
                                Description of Travel Destination
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Travel Destination</Card.Title>
                            <Card.Text>
                                Description of Travel Destination
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Travel;