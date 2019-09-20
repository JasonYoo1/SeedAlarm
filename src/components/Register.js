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

import '../App.css'

import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import SIM_card_with_barcode_01_A1_Rectangle_13_pattern from './SIM_card_with_barcode_01_A1_Rectangle_13_pattern.png'
import Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern from './Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern.png'
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
    <Container classNameName="login-container">
      <Row>
        <Col lg="6">
          <h1> Speed Talk </h1>
          <p>
            <p>
              {" "}
            </p>
          </p>
        </Col>
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
          <FormGroup>
              <label htmlFor="#username">Full Name</label>
              <FormInput
                id="#fullName"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                value={activate.fullName}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">Sim Card Number</label>
              <FormInput
                id="#sim"
                name="sim"
                placeholder = {sim}
                onChange={handleChange}
                value={activate.sim}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">Required: ZIP CODE</label>
              <FormInput
                id="#zip"
                name="zip"
                placeholder="ZIP CODE for the new phone number"
                onChange={handleChange}
                value={activate.zip}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">E-mail</label>
              <FormInput
                id="#email"
                name="email"
                placeholder="Please Enter an email"
                onChange={handleChange}
                value={activate.email}
              />
            </FormGroup>
            <Row classNameName="login-btn">
              <Button block squared>
                CONTINUE
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>

    </div>
  );
};

export default Register;