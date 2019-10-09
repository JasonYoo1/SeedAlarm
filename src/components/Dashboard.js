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
  CardHeader,
  CardBody,
  Container,
  Button,
  Row
} from "shards-react";

import {
  Card
} from 'react-bootstrap'

import "../App.css";

import UserInfo from './UserInfo'
import SearchInfo from './Search'
import SimpleMap from './Maps'
import Refill from './Refill'
import dashboardimage from './dashboardimage.png'
import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern.png'
import Blocks from './Blocks2.gif'


export default function Dashboard({history}) {
  const [searchCreds, setSearchCreds] = useState({ phone:"", searchSim: ""});
  const [newRefill, setNewRefill] = useState({refillPhone:""})

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


  let myFunction= () => {
    var x = document.getElementById("myDIV");
    console.log('click click')
    if (x.innerHTML === "Search") {
      x.innerHTML = `<img className ='responsiveImg' width= "45rem" src = ${Blocks}/> Searching ... Please Wait`
    } 
  }

  return (
      <div>
        {console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)}
              <Card className="backgroundTesting">
      <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <Container  className="dashcontainer">
      <Row>
        <Col lg="6">
          <img className = 'dashImg' width = '80%' src = {dashboardimage}/>
        </Col>
        <Col lg="6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
            <h2 className='dashText'>Account</h2>
           <p className='dashText'>Enter your 10 digit cellphone number you recieved when activating your SiM card or enter the 19 digit code located on the SIM. Do not enter the letters.(Numbers Only)</p>
              <label htmlFor="#searchSim">Search By Sim OR Phone Number</label>
              <FormInput
                id="#searchSim"
                name="searchSim"
                placeholder="Search by Sim Card Number (only numbers)"
                onChange={handleChange}
                value={searchCreds.searchSim}
              />
            </FormGroup>
            <FormGroup>
              {/* <label htmlFor="#searchSim">Search By Phone</label> */}
              <FormInput
                id="#phone"
                name="phone"
                placeholder="Search by Phone Number (only numbers)"
                onChange={handleChange}
                value={searchCreds.phone}
              />
            </FormGroup>
            <Row className="login-btn">
            <button id="myDIV" onClick={myFunction} width='80%' className="dashboardBtn" block>
                Search
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
}