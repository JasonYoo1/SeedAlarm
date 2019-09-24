import React, { useState } from "react";
import {
  Form,
  FormInput,
  FormGroup,
  Button,
  Container,
  Row,
  Col
} from "shards-react";

import{
  Card
} from 'react-bootstrap'

import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Menu from "./menu";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

import { UserContext } from './context/UserContext'

import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern.png'

const Login = ({ history }) => {
  const [creds, setCreds] = useState({ sim: "",});

  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, props) => {
    event.preventDefault();
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stSIM&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&sim=${creds.sim}`, creds)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("test", res.data);
        localStorage.setItem("sim", creds.sim);
        // console.log('wtf is this', creds.sim)
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };

  return (
    
    <div>
    {/* <Container className="login-container">
      <Row>
        <Col lg="6">
          <h1> Speed Talk  </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <p>
              {" "}
            </p>
          </p>
        </Col>
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="#username">Check Status</label>
              <FormInput
                id="#sim"
                name="sim"
                placeholder="SpeedTalk Mobile Sim Card Number (only numbers)"
                onChange={handleChange}
                value={creds.sim}
              />
            </FormGroup>
            <Row className="login-btn">
              <Button block squared>
                Enter
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container> */}
          <Card className="backgroundTesting">
      <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
       <Container className="login-container">
       <Row>
         <Col lg="6">

               {/* <img width= "100%" src = {Sim2}></img> */}

         </Col>
         <Col lg="6">
           <h2>Account</h2>
           <p>Enter your 10 cellphone number you recieved when activating your SiM card or enter the 19 digit code located on the SIM. Do not enter the letters.(Numbers Only)</p>
           <Form  onSubmit={handleSubmit}>
            <FormGroup className = 'FormGroup'>
              <label htmlFor="#username">E-mail</label>
              <FormInput
                id="#email"
                name="email"
                placeholder="Please Enter an email"
                onChange={handleChange}
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

export default Login;

