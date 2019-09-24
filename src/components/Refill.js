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
import axios from "axios";
import { Link } from "react-router-dom";
import {CardElement, injectStripe} from 'react-stripe-elements';

import Footer from "./footer";
import Menu from "./menu";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

import { UserContext } from './context/UserContext'

import simTest2 from './simTest2.gif'



const Refill = ({ history }) => {
  const [newRefill, setnewRefill] = useState({ phone: ''});

  const handleChange = event => {
    setnewRefill({ ...newRefill, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stRefill&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&phone=${newRefill.phone}&sku=8035&amount=1.5`, newRefill)
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
      <br/>
      <br/>
      <br/>
    <Container className="login-container">
      <Row>
        <Col lg="6">
          {/* <h1>Refill Your Account </h1> */}
          <p>
            <p>
              <img width='80%' src ={simTest2} />
            </p>
          </p>
        </Col>
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <h1 htmlFor="#username">Refill</h1>
              <p>Enter your 10 digit cellphone number you recived when activating your SIM card or enter the 19 digit code located on the SIM. Do not enter the letters. Only Numbers.</p>
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

    </div>
  );
};

export default Refill;
