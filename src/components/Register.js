import React, { useState } from "react";
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
} from "shards-react";

import {
  Carousel,
  Card
} from 'react-bootstrap'

import { PayPalButton } from "react-paypal-button-v2";
import axiosWithAuth from '../Utils/axiosWithAuth'



import axios from "axios";
import { Link } from "react-router-dom";
import {CardElement, injectStripe} from 'react-stripe-elements';

import Footer from "./footer";
import Menu from "./menu";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

import { UserContext } from './context/UserContext'

import '../App.css'

import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import SIM_card_with_barcode_01_A1_Rectangle_13_pattern from './SIM_card_with_barcode_01_A1_Rectangle_13_pattern.png'
import Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern from './Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern.png'
import Sim2 from './Sim2.png'

var sectionStyle = {
  width: "100%",
  height: "9000px",
  backgroundImage: `url(${bg_A1_Rectangle_2_pattern})`
};

const Register = ({ history }) => {
  const [activate, setActivate] = useState({ sim: "", zip:"", fullName:"", city: "", contact: "", email:"", state: ""});

  const handleChange = event => {
    setActivate({ ...activate, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stActivate&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&sku=8035&amount=1.5&sim=${activate.sim}&firstName=${activate.fullName}&lastName=&address1=&address2=&city=&state=&zip=${activate.zip}&phone=&email=&campaign=`, activate)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("register", res.data);
        localStorage.setItem("sim", activate.sim);
        localStorage.setItem("token", null);
        history.push("/activationinfo");
      })
      .catch(err => console.log(err.response));
  };

  let sim = localStorage.getItem('sim')

  return (
    <div>
      <Card className="backgroundTesting">
      <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
       <Container className="login-container">
       <Row>
         <Col lg="6">
           <h3 className = 'responsiveTitle'> Activate your SIM card </h3>
           <p>
            To activate, enter the 19 digit code located on the back of the SIM. Do not enter the letters, Please enter the numbers only.
                       <br/>
           <br/>
           <p>
               <img className ='responsiveImg' width= "100%" src = {Sim2}></img>
            </p>
           </p>
         </Col>
         <Col lg="6">
           <Form className='responsiveForm' onSubmit={handleSubmit}>
           <FormGroup className = 'FormGroup' >
               <label htmlFor="#username">Full Name</label>
               <FormInput
                id="#fullName"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                value={activate.fullName}
              />
            </FormGroup>
            <FormGroup className = 'FormGroup'>
              <label htmlFor="#username">Sim Card Number</label>
              <FormInput
                id="#sim"
                name="sim"
                placeholder = 'SIM Card Number'
                onChange={handleChange}
                value={activate.sim}
              />
            </FormGroup>
            <FormGroup className = 'FormGroup'>
              <label htmlFor="#username">Required: ZIP CODE</label>
              <FormInput
                id="#zip"
                name="zip"
                placeholder="City Zip Code"
                onChange={handleChange}
                value={activate.zip}
              />
            </FormGroup>
            <FormGroup className = 'FormGroup'>
              <label htmlFor="#username">Email</label>
              <FormInput
                id="#email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={activate.email}
              />
              <Row className="activateBtn">
              <button className="actualButton" block>
                ACTIVATE
              </button>
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
};

export default Register;