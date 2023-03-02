import React from 'react';
import { useSelector } from "react-redux"
import { Container, Form, Button, Card } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

const Checkout = () =>{
  const state = useSelector((state) => state);
  
  return (
    <div>
      <div>
        <Container className="mb-5">
        <h1 className="mb-4">Checkout</h1>
        <Form className="mb-4">
            <Form.Label>Email Address</Form.Label>
            <Form.Group className="mb-4" controlId="formEmail">
                <Form.Control type="email" placeholder="example@example.com" />
            </Form.Group>
            <Form.Label>Shipping Information</Form.Label>
            <Form.Group className="mb-4" controlId="formShipping"> 
                <Form.Text>First Name</Form.Text>
                <Form.Control type="text" placeholder="John" />
                <Form.Text>Last Name</Form.Text>
                <Form.Control type="text" placeholder="Smith" />
                <Form.Text>Phone Number</Form.Text>
                <Form.Control type="text" placeholder="(123)-123-1234" />
                <Form.Text>Address</Form.Text>
                <Form.Control type="text" placeholder="12345 North Coffee Street" />
                <Form.Text>State/Province</Form.Text>
                <Form.Control type="text" placeholder="Hawaii" />
                <Form.Text>Zip/Postal Code</Form.Text>
                <Form.Control type="text" placeholder="12345" />
                <Form.Text>Country</Form.Text>
                <Form.Control type="text" placeholder="USA" />
            </Form.Group>
            <Form.Label>Billing Information</Form.Label>
            <Form.Group className="mb-4" controlId="formBilling"> 
                <Form.Text>Card Number</Form.Text>
                <Form.Control type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
                <Form.Text>Expiry Date</Form.Text>
                <Form.Control type="text" placeholder="MM/DD/YYYY" />
                <Form.Text>Verification</Form.Text>
                <Form.Control type="text" placeholder="CVV" />
            </Form.Group>
        </Form>
        <Card className="mb-4">
        <Card.Body>
              <Card.Title className="mb-3">
                Total
              </Card.Title>
              <Card.Text>
                Subtotal: ${Math.round(state.cart.cartTotal * 100) / 100}
              </Card.Text>
              <Card.Text>
                Shipping: $10
              </Card.Text>
              <Card.Text>
                Taxes: ${Math.round((state.cart.cartTotal * .0625) * 100) / 100}
              </Card.Text>
              <Card.Text>
                Total: ${Math.round((state.cart.cartTotal + (state.cart.cartTotal * .0625) + 10) * 100) / 100}
              </Card.Text>
        </Card.Body>
        </Card>
        <LinkContainer to="/confirmation">
            <Button>Confirm Purchase</Button>
        </LinkContainer>
        <br></br>
        </Container>
      </div>
    </div>
  );
}
export default Checkout;