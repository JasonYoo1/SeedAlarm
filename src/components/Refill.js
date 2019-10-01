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
  Col
} from "shards-react";
import {
  Card 
} from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";
import {CardElement, injectStripe} from 'react-stripe-elements';

import Footer from "./footer";
import Menu from "./menu";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

import { UserContext } from './context/UserContext'

import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern.png'
import clockwise from './clockwise.gif'
import '../App.css'



const Refill = ({ history }) => {
  const [newRefill, setnewRefill] = useState({ phone: ''});

  const handleChange = event => {
    setnewRefill({ ...newRefill, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stAutorefill&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&phone=${newRefill.phone}overage=&overageCash=&anniversary=1&sku=8035`, newRefill)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("refillInfo", res.data);
        localStorage.setItem('currentPhone', newRefill.phone)
        // localStorage.setItem("sim", newRefill.sim);
        localStorage.setItem("token", false);
        history.push("/refillInfo");
      })
      .catch(err => console.log(err.response));
  };

  // let sim = localStorage.getItem('sim')

  return (
    
    <div>
          {console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)}
      <br/>
      <Card className="backgroundTesting">
            <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
            <Card.ImgOverlay >
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Container className="refillCont">
      <Row>
        <Col lg="6">
          {/* <h1>Refill Your Account </h1> */}
          <p>
            <p>
              <img className='responsiveImg' width='80%' src ={clockwise} />
            </p>
          </p>
        </Col>
        <Col lg="6">
          <Form className='responsiveForm' onSubmit={handleSubmit}>
            <FormGroup>
              <h1 htmlFor="#username">Auto Refill</h1>
              <p className='refillFont'>Enter your 10 digit cellphone number you recived when activating your SIM card or enter the 19 digit code located on the SIM. Do not enter the letters. Only Numbers.</p>
              <FormInput
                id="#phone"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={newRefill.phone}
              />
            </FormGroup>
            <Row className="login-btn">
            <button className="refillBtn" block>
                ACTIVATE
              </button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
        </Card.ImgOverlay>
          </Card>

    </div>
  );
};

export default Refill;
