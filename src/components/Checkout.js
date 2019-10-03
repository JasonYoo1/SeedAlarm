import React, { useState, useRef, useEffect, Component } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth'
import plan from './plan.png'
import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png';
import checkmark from './checkmark.png'


import paypalbtn from './paypalbtn1.png'

import { PayPalButton } from "react-paypal-button-v2";

import "../App.css"
import "../index.css"

import {
    Form,
    FormInput,
    FormTextarea,
    FormGroup,
    Col,
    // Card,
    CardHeader,
    CardBody,
    Container,
    Button,
    Row
  } from "shards-react";

  import {
    Card
  } from 'react-bootstrap'



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



const CheckOut = ({ history }) => {
  
  function handleClick(e) {
    localStorage.setItem("token", true);
  }

      return (
        
          <div className='flexing'>
            {console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)}
            <h1 className='font'>Plans</h1>

<div className='ridBorder'>
<Card  style={{height: '10%'}}>
      <Card.Img src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        {/* <br></br> */}
        {/* <br></br> */}
        <Container className="refillContainer">
       <Row >
       <Col id='activateCheckoutCon' sm="4">
           {/* <h2>Account</h2>
           <p>Enter your 10 cellphone number you recieved when activating your SiM card or enter the 19 digit code located on the SIM. Do not enter the letters.(Numbers Only)</p> */}
           <Form >
            <FormGroup className = 'refillFormGroup'>
              <Row className="activateBtn">
              <Card style={{ margin: 'auto', width: '15rem' }}>
            <h3 className='paraText'>Security Plan</h3>
             <p className='paraText' ><span role="img" aria-label="sheep">✔️</span> Texts something else </p>
            <p className='paraText' id ='paraborder'><span role="img" aria-label="sheep">✔️</span> DATA something else </p>
            <p className='paraText' id ='paraborder'><span role="img" aria-label="sheep">✔️</span> 30 Days</p>
            {/* <br></br> */}
            <h3 className= 'paraText'>$ 14.99</h3>
           </Card>
           <div onClick={handleClick} className = 'checkoutPay'>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="94VU4QSDD9QZL"/>
            <input type="image" width="100%" src={paypalbtn} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
            </form>

            </div>
            </Row>
            </FormGroup>
          </Form>
        </Col>
         <Col id='activateCheckoutCon' sm="4">
           {/* <h2>Account</h2>
           <p>Enter your 10 cellphone number you recieved when activating your SiM card or enter the 19 digit code located on the SIM. Do not enter the letters.(Numbers Only)</p> */}
           <Form >
            <FormGroup className = 'refillFormGroup'>
              <Row className="activateBtn">
              <Card style={{ margin: 'auto', width: '15rem' }}>
            <h3 className='paraText'>Caregiver Plan</h3>
             <p className='paraText' > <span role="img" aria-label="sheep">✔️</span> Texts something else </p>
            <p className='paraText' id ='paraborder'><span role="img" aria-label="sheep">✔️</span> DATA something else </p>
            <p className='paraText' id ='paraborder'> <span role="img" aria-label="sheep">✔️</span> 30 days </p>
            <h3 className= 'paraText'>$ 5.99</h3>
           </Card>
           <div onClick={handleClick} className = 'checkoutPay'>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="HECCT5GQ82F4S"/>
            <input type="image" width="100%" src={paypalbtn} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
            </form>


               </div>
            </Row>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  </Card.ImgOverlay>
</Card>
</div>
    </div>
      );
    }

  export default CheckOut

