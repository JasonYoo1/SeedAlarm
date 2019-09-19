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
  const [refill, setRefill] = useState({ phone: ""});

  const handleChange = event => {
    setRefill({ ...refill, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stRefill&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&phone=${refill.phone}&sku=8035&amount=14.99`, refill)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("register", res.data);
        localStorage.setItem("sim", refill.sim);
        localStorage.setItem("token", null);
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };

  let sim = localStorage.getItem('sim')

  return (
    
    <div>
    <Container className="login-container">
      <Row>
        <Col lg="6">
          <h2> Refill Account </h2>
          <p>
            <p>
              {" "}
            </p>
          </p>
        </Col>
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
          <FormGroup>
              <label htmlFor="#username">Refill Your account!</label>
              <FormInput
                id="#phone"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={refill.phone}
              />
            </FormGroup>
            <Row className="login-btn">
              <Button block squared>
                Refill!
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
