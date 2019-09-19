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
    <Container className="login-container">
      <Row>
        <Col lg="6">
          <h1>Refill Your Account </h1>
          <p>
            <p>
              {" "}
            </p>
          </p>
        </Col>
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="#username">Phone</label>
              <FormInput
                id="#phone"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={newRefill.phone}
              />
            </FormGroup>
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

export default Refill;
