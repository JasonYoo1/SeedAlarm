import React, { useState, useRef, useEffect, Component } from 'react';
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { PayPalButton } from "react-paypal-button-v2";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth'
import plan from './plan.png'



import "../App.css"
import "../index.css"

import {
    Form,
    FormInput,
    FormTextarea,
    FormGroup,
    Col,
    Card,
    CardHeader,
    CardBody,
    Container,
    Button,
    Row
  } from "shards-react";

// toast.configure();

// function CheckOut() {
//   const [product] = React.useState({
//     name: "PLANS",
//     price: 14.99,
//     description: "something"
//   });

//   async function handleToken(token, addresses) {
//     const response = await axios.post(
//       "https://ry7v05l6on.sse.codesandbox.io/checkout",
//       { token, product }
//     );
//     const { status } = response.data;
//     console.log("Response:", response.data);
//     if (status === "success") {
//       toast("Success! Check email for details", { type: "success" });
//     } else {
//       toast("Something went wrong", { type: "error" });
//     }
//   }

//   return (
//     <div className="container">
//       <div className="product">       
//        <Row>
//        <Container style={{ maxWidth: "250px" }}  className="card-container">
//       <Card className="card">
//         <CardHeader className="card-header">PLAN 1</CardHeader>
//         <CardBody className="card-body">
//          <p>
//          30 Days<br></br>
//          2¢ per MIN<br></br>
//          2¢ per SMS<br></br>
//          2¢ per MB
//          </p>
//         </CardBody>
//       </Card>
//       </Container>
//       <Container style={{ maxWidth: "250px" }}  className="card-container">
//       <Card className="card">
//         <CardHeader className="card-header">PLAN 2</CardHeader>
//         <CardBody className="card-body">
//          <p>
//          30 Days<br></br>
//          2¢ per MIN<br></br>
//          2¢ per SMS<br></br>
//          2¢ per MB
//          </p>
//         </CardBody>
//       </Card>
//       </Container>
//       <Container style={{ maxWidth: "250px" }}  className="card-container">
//       <Card className="card">
//         <CardHeader className="card-header">PLAN 3</CardHeader>
//         <CardBody className="card-body">
//          <p>
//          30 Days<br></br>
//          2¢ per MIN<br></br>
//          2¢ per SMS<br></br>
//          2¢ per MB
//          </p>
//         </CardBody>
//       </Card>
//       </Container>
//         </Row>

      
//       </div>
//       <br></br>
//       <StripeCheckout
//         stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
//         token={handleToken}
//         amount={product.price * 100}
//         name="Speed Talk Payment"
//         billingAddress
//         shippingAddress
//       />
//     </div>
    
//   );
// }

// export default CheckOut



export default class CheckOut extends React.Component {
  
    render() {
      return (
          <div className='checkout'>
            Current Plans<br/>
                <img width="200rem" src={plan} alt="hello" margin-bottom="30%"></img>
        {/* <PayPalButton
          amount="0.01"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            localStorage.setItem("token", true);
            axiosWithAuth()
            window.location.href='/activate'
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderId: data.orderID
              }),
            });
          }}
          options={{
            clientId: "Ac82qeONuJNMP32o8kE_DVQOpFZCoTtr2ovk5AM-oSotdXq6Xe1XdBCN1s_E-1NTEICVMSOJLwUaofOY"
          }}
        /> */}

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"></input>
        <input type="hidden" name="hosted_button_id" value="85ZW2K2LS9RCA"></input>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>
        </div>
      );
    }
  }