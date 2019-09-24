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
import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import uploadingPlan from './uploadingPlan.png'

import paypalbtn from './paypalbtn.png'


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
    Carousel,
    Card
  } from 'react-bootstrap'



const RefillCheckOut = ({ history }) => {
  

      return (
        
          <div>


<Card >
      <Card.Img src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
        <Container className="login-container">
       <Row >
         <Col className =' refillLeft' sm="4">
           <h3>Refill</h3>
           <p className='refillText'>1. Pay to refill your Plan<br/><br/>
           2. Enter SIM card phone number<br/><br/>
           3. ENJOY! </p>
         <PayPalButton 
          amount="0.01"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            localStorage.setItem("token", true);
            axiosWithAuth()
            window.location.href='/refill'
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
        />
         </Col>
         <Col sm="4">
           {/* <h2>Account</h2>
           <p>Enter your 10 cellphone number you recieved when activating your SiM card or enter the 19 digit code located on the SIM. Do not enter the letters.(Numbers Only)</p> */}
           <Form >
            <FormGroup className = 'refillFormGroup'>
              <Row className="activateBtn">
              <Card style={{ margin: 'auto', width: '15rem' }}>
            <h3 className='paraText'>Plan 1</h3>
             <p className='paraText' >Texts: 70</p>
            <p className='paraText' id ='paraborder'>DATA: 5 MB</p>
            <p className='paraText' id ='paraborder'>30 Days</p>
            <h3 className= 'paraText' id ='textamount'>$ 14.99</h3>
           </Card>
            </Row>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  </Card.ImgOverlay>
</Card>





    </div>
      );
    }

  export default RefillCheckOut
