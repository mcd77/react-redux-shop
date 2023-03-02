import React, {useState} from 'react';
import logo from './../images/coffee.jpg'; 
import { useSelector, useDispatch } from "react-redux"
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Image, Row, Col, Card } from 'react-bootstrap';
import { bindActionCreators } from "redux"
import {actionCreators } from "./../redux/index"

const Cart = () =>{
  const state = useSelector((state) => state);
  const [quantity, setTotal] = useState(state.cart.cartTotal);
  let body;
  const dispatch = useDispatch()
  const { removeFromCart } = bindActionCreators(actionCreators, dispatch)
  if (state.cart.itemCount > 0) {
    body = (
    <div>
    <Container>
      <Row className="mb-4 text-center">
        <Col>
        <Image className="mb-3" style={{"width":"175px", "height":"175px"}} src={logo} roundedCircle />
          <h2 className="mb-4 text-center">Your cart contains {state.cart.itemCount} item(s)</h2>
          {state.cart.items.map((item,index) => { 
            return(
            <div>
              <Card className="mb-3 text-center" key={index}>
                <Card.Body>
                  <Card.Title>
                    {item.item}
                  </Card.Title>
                  <Card.Text>
                    Price: {Math.round(item.price * 100) / 100} 
                  </Card.Text>
                  <Card.Text>
                    Quantity: {item.quantity}
                  </Card.Text>
                  <Button onClick={() => { removeFromCart(index); setTotal(state.cart.cartTotal)}}>Remove</Button>
                </Card.Body>
              </Card>
            </div>
            )}
          )}
          <h3 className="mb-4 text-center" >Item Total: ${Math.round(quantity * 100) / 100}</h3>
          <h3 className="mb-4 text-center" >Shipping: $10</h3>
          <LinkContainer to="/checkout">
            <Button variant="success">Checkout</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
    </div>
    );
  } else {
    body = (
    <div>
    <Container>
    <h3>Cart</h3>
    <div>
    <p>Your cart is empty.</p>
    </div>
    </Container>
    </div>
    );
  }
  return (
    body
  );
}
export default Cart;