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
    <Container className="login-container">
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
              <label htmlFor="#username">City</label>
              <FormInput
                id="#city"
                name="city"
                placeholder="City"
                onChange={handleChange}
                value={activate.city}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">State</label>
              <FormInput
                id="#state"
                name="state"
                placeholder="State"
                onChange={handleChange}
                value={activate.state}
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
            {/* <label htmlFor="#username">Amount</label>
              <InputGroup className="mb-2">
                <InputGroupText>$</InputGroupText>
                <FormInput id="#amount"
                name="amount"
                placeholder="Amount"
                onChange={handleChange}
                value={activate.amount}/>
              <InputGroupAddon type="append">
              </InputGroupAddon>
             </InputGroup> */}
            <Row className="login-btn">
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
