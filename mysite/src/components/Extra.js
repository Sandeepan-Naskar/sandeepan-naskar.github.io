//Create a standard React template jsx listing all my extra-curriclars with a breif description and some photos
// 
// Path: mysite/src/components/Extra.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Extra() {
    return (
        <Container>
            <h2>Extra-curricular</h2>
            <Row>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Extra-curricular</Card.Title>
                            <Card.Text>
                                Description of Extra-curricular
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Extra-curricular</Card.Title>
                            <Card.Text>
                                Description of Extra-curricular
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="align-items-center">
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Extra-curricular</Card.Title>
                            <Card.Text>
                                Description of Extra-curricular
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Extra;