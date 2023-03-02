import React from 'react';
import logo from './../images/coffee.jpg'; 
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Home = () =>{
  return (
    <div>
      <Container className="mb-3 text-center">
        <Image className="mb-3" style={{"width":"175px", "height":"175px"}} src={logo} roundedCircle />
        <Card className="mb-3 text-center">
        <Card.Body>
              <Card.Title>
                Welcome to our Coffee Shop!
              </Card.Title>
              <Card.Text>
                Your one stop shop for all things coffee. 
              </Card.Text>
              <Card.Text>
                "I love the coffee! It's the best" -Loyal customer
              </Card.Text>
        </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Home;