import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

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
import {
  Card
} from 'react-bootstrap'


import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import '../App.css'



const ActivateInfo = ({history}) => {
  const [newRefill, setnewRefill] = useState({ phone: ''});

  const handleChange = event => {
    setnewRefill({ ...newRefill, [event.target.name]: event.target.value });
  };

  function handleClick(e) {
    localStorage.removeItem('token');
  }

  //cors-anywhere.heroku bypasses the cors policy. keep in axios calls
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stAutorefill&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&phone=${newRefill.phone}&overage=&overageCash=&anniversary=1&sku=8035`, newRefill)
      .then(res => {
        // console.log(res.data);
        localStorage.setItem("refillInfo", res.data);
        localStorage.setItem('currentPhone', newRefill.phone)
        // localStorage.setItem("sim", newRefill.sim);
        localStorage.setItem("token", undefined);
        history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  };

    if(localStorage.getItem('register') == "<net><ret>99</ret></net>" || !(localStorage.getItem('register')) ){
      let newPhone = 'Error in registering. Please Try again'
      return (
        <div> 
      <Card className="backgroundTesting">
      <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
       <Container style = {{}}className="login-container" id ='activationCont'>
          <h1 className='congratsfont'>There was an error in your request</h1>
          <br/>
          {/* <p className='activationParagraph'>Not enough credits available</p> */}
          <br/>
          <h3 className='congratsfont'>Number: {newPhone}</h3>
          <div className = 'actBtnCont'>
          <Link to='/dashboard'>
                    <button onClick={handleClick} className="activationInfoBtn" id='backSeed' >
                      Account Dashboard
                    </button>
                    </Link>
                    <button onClick={handleClick} className="activationInfoBtn" id='backDash' >
                    <a onClick={handleClick} className ='linkingBack' href="https://landingseedalarm.netlify.com/">Back to Seed Alarm</a>
                    </button>
          </div>
    </Container>
  </Card.ImgOverlay>
    </Card>
    </div>
      
        );
      }else{
        let register = localStorage.getItem('register')
        // console.log('this is from site', register)
        let XMLParser = require('react-xml-parser');
        let xml = new XMLParser().parseFromString(register);
        // console.log(xml.children[3].value)
        let newPhone = xml.children[3].value
        let plan = xml.children[4].value
        localStorage.setItem('newPhone', newPhone)

          return (
            <div> 
            <Card className="backgroundTesting">
            <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
            <Card.ImgOverlay >
              <br></br>
              <br></br>
              <br></br>
             <Container className="login-container">
                <h1 className='congratsfont'><br/>Congratulations!</h1>
                <br/>
                <h3 className='congratsfont'><svg xmlns="http://www.w3.org/2000/svg" width="520" height="72" viewBox="0 0 520 72">
                <text id="Your_activation_has_been_successful_thank_you_for_choosing_Seed_Alarm._See_your_SIM_cards_phone_number_below._We_recommend_writing_down_for_your_reference." data-name="Your activation has been successful, thank you for choosing Seed Alarm. See your SIM cards phone number below. We recommend writing down for your reference." font-size="16" font-family="ArialMT, Arial"><tspan x="0" y="14">Your activation has been successful, Thank You for choosing Seed Alarm. </tspan><tspan x="0" y="39">See your SIM cards phone number below. We recommend writing down </tspan><tspan x="0" y="64">for your reference.</tspan></text>
                </svg>
                </h3>
                <br/>
                <h3 className='congratsfont'>Number: {newPhone}</h3>
                
                <div className = 'actBtnCont'>
                <Form className='responsiveForm' onSubmit={handleSubmit}>
            <FormGroup>
              <p className='actRefillFont'>Enter your 10 digit cellphone number to complete your activation: {newPhone}</p>
              <FormInput
                id="#phone"
                name="phone"
                placeholder="Please enter your NEW phone number"
                onChange={handleChange}
                value={newRefill.phone}
                style={{width: "40%", margin:'auto'}}
              />
            </FormGroup>
            <Row onClick={handleClick} className="login-btn">
            <button className="actRefillBtn" block>
                Confirm
              </button>
            </Row>
          </Form>
                  {/* <Link to='/checkout'>
                  <button className="activationInfoBtn" id='backDash' >
                    Back to SeedAlarm
                  </button>
                </Link> */}
                </div>
          </Container>
        </Card.ImgOverlay>
          </Card>
          </div>
    );}



}


export default ActivateInfo
