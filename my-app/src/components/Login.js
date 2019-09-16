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
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Menu from "./menu";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

import { UserContext } from './context/UserContext'

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
    <Container className="login-container">
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
              <label htmlFor="#username">Username</label>
              <FormInput
                id="#sim"
                name="sim"
                placeholder="SpeedTalk Mobile Sim Card Number (only numbers)"
                onChange={handleChange}
                value={creds.sim}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#username">Username</label>
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
                Login
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>

    </div>
  );
};

export default Login;
