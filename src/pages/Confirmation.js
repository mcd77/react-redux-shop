import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {actionCreators } from "./../redux/index"


const Confirmation = () =>{
  const dispatch = useDispatch()
  const { emptyCart } = bindActionCreators(actionCreators, dispatch)
  emptyCart();
  return (
    <div>
      <Container>
      <h3>Order Confirmed!</h3>
      <div>
        <p>Thank you for your order from our Coffee Shop.</p>
      </div>
      </Container>
    </div>
  );
}
export default Confirmation;