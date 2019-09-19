import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";
import axios from 'axios'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { PayPalButton } from "react-paypal-button-v2";

import { Link } from "react-router-dom";
import {
  Form,
  FormInput,
  FormGroup,
  Col,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  Row
} from "shards-react";
import "../App.css";

import UserInfo from './UserInfo'
import SearchInfo from './Search'
import SimpleMap from './Maps'
import Refill from './Refill'




export default function Dashboard({history}) {
  const [searchCreds, setSearchCreds] = useState({ phone:"", searchSim: ""});

  const handleChange = event => {
    setSearchCreds({ ...searchCreds, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, props) => {
    event.preventDefault();
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stCheckMDN&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&phone=${searchCreds.phone}&sim=${searchCreds.searchSim}`)
      .then(res => {
        console.log('intitial search request', res.data);
        localStorage.setItem("testing", res.data);
        // localStorage.setItem("sim", searchCreds.sim);
        history.push("/search");
        window.location.reload();
      })
      .catch(err => console.log(err.response));
  };
  return (
      <div>
        <UserInfo/>
        <Container className="login-container">
      <Row>
        <Col lg="6">
          Refill Your Account!
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
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="#searchSim">Search By Sim</label>
              <FormInput
                id="#searchSim"
                name="searchSim"
                placeholder="Search by Sim Card Number (only numbers)"
                onChange={handleChange}
                value={searchCreds.searchSim}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="#searchSim">Search By Phone</label>
              <FormInput
                id="#phone"
                name="phone"
                placeholder="Search by Phone Number (only numbers)"
                onChange={handleChange}
                value={searchCreds.phone}
              />
            </FormGroup>
            <Row className="login-btn">
              <Button block squared>
                Search
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
      </div>
  );
}