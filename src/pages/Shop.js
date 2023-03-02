import React from 'react';
import MugImage from './../images/mug.jpg'; 
import VanillaImage from './../images/vanilla.jpg';
import BeansImage from './../images/coffee.jpg'; 
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const Shop = () =>{
  return (
    <div>
      <div>
        <Container className="mb-3">
        <Row>
          <Col md>
          <Card className="mb-3 text-center">
            <Card.Img variant="top"   src={VanillaImage} />
            <Card.Body>
              <Card.Title>
                Vanilla Coffee
              </Card.Title>
              <Card.Text>
                Limited edition. While supplies last. 
              </Card.Text>
              <LinkContainer to="/vanilla">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
          <Col md> 
          <Card className="mb-3 text-center">
            <Card.Img src={MugImage} />
            <Card.Body>
              <Card.Title>
                Coffee Mug
              </Card.Title>
              <Card.Text>
                Enjoy your morning coffee in style. Supports chai too!
              </Card.Text>
              <LinkContainer to="/mug">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col md>
          <Card className="mb-3 text-center">
            <Card.Img src={BeansImage} />
            <Card.Body>
              <Card.Title>
                Beans
              </Card.Title>
              <Card.Text>
                Shop bulk coffee beans now!
              </Card.Text>
              <LinkContainer to="/beans">
                <Button size="lg">Purchase</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}
export default Shop;