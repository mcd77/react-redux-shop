import React, { useState } from 'react';
import VanillaImage from './../../images/vanilla.jpg';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../../redux/index"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';


const Vanilla = () =>{
  const [quantity, setQuantity] = useState(0);
  const handleInput = event => {
    let intValue = parseInt(event.target.value);
    if(!isNaN(intValue)) {
      setQuantity(intValue);  
    }
  };
  const notify = (message) => { 
    let cartCount = 0;
    for (let i = 0; i < state.cart.items.length; i++) {
      if (state.cart.items[i].item === "Vanilla Coffee") {
        cartCount = state.cart.items[i].quantity;
        if (cartCount >= 100) {
          toast.error("Error: Out of stock.");
          return;
        }
      }
    }
    if (message > 100) {
      toast.info("Only " + (100-cartCount) + " in stock.");
    }
    else if (message > 1) {
      if ((message + cartCount) > 100) {
        toast.info("Only " + (100-cartCount) + " in stock.");
        return;
      }
      addCart({itemName: "Vanilla Coffee", quantity: message, price: 3999.99})
      toast.success("Added " + quantity + " Vanilla Coffee's to the cart", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else if (message === 1) {
      addCart({itemName: "Vanilla Coffee", quantity: message, price: 3999.99})
      toast.success("Added 1 Vanilla Coffee to the cart", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const { addCart } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>

      <Container>
        <Row>
          <Col>
            <Card className="mb-3 text-center">
              <Card.Img variant="top"   src={VanillaImage} />
              <Card.Body>
                <Card.Title>
                  Vanilla Coffee
                </Card.Title>
                <Card.Text>
                  Try our most popular coffee today! Vanilla medium brew flavor makes for a bold roast. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
        <Col className="mb-3 text-center">
            <Form.Label className="mb-3">Price: $3999.99</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>Quantity: </InputGroup.Text>
                <FormControl onChange={handleInput} type="number" min="1"/>
            </InputGroup>    
            <Button variant='success' onClick={() => { notify(quantity);}}>ADD TO CART</Button>
          </Col>
          <Col>
          <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />      
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Vanilla;