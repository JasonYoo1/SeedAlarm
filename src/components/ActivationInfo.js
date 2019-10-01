import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
} from "shards-react";

import {
  Card
} from 'react-bootstrap'


import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import '../App.css'



const ActivateInfo = (event) => {

    if(localStorage.getItem('register') == "<net><ret>99</ret></net>" || !(localStorage.getItem('register')) ){
      let newPhone = 'Error in registering. Please Try again'
      return (
        <div> 
        {console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)}
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
                    <button className="activationInfoBtn" id='backSeed' >
                      Account Dashboard
                    </button>
                    <button className="activationInfoBtn" id='backDash' >
                      Back to SeedAlarm
                    </button>
          </Link>
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
        console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)

          return (
            <div> 
              {console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)}
            <Card className="backgroundTesting">
            <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
            <Card.ImgOverlay >
              <br></br>
              <br></br>
              <br></br>
             <Container className="login-container">
                <h1 className='congratsfont'>Congratulations! Enjoy the first month on us! See plans to continue your service</h1>
                <br/>
                <h3 className='congratsfont'><svg xmlns="http://www.w3.org/2000/svg" width="520" height="72" viewBox="0 0 520 72">
                <text id="Your_activation_has_been_successful_thank_you_for_choosing_Seed_Alarm._See_your_SIM_cards_phone_number_below._We_recommend_writing_down_for_your_reference." data-name="Your activation has been successful, thank you for choosing Seed Alarm. See your SIM cards phone number below. We recommend writing down for your reference." font-size="16" font-family="ArialMT, Arial"><tspan x="0" y="14">Your activation has been successful, thank you for choosing Seed Alarm. </tspan><tspan x="0" y="39">See your SIM cards phone number below. We recommend writing down </tspan><tspan x="0" y="64">for your reference.</tspan></text>
                </svg>
                </h3>
                <br/>
                <h3 className='congratsfont'>Number: {newPhone}</h3>
                <div className = 'actBtnCont'>
                {/* <Link to='/dashboard'>
                  <button className="activationInfoBtn" id='backSeed' >
                    Account Dashboard
                  </button></Link> */}
                  <Link to='/checkout'>
                  <button className="activationInfoBtn" id='backDash' >
                    Back to SeedAlarm
                  </button>
                </Link>
                </div>
          </Container>
        </Card.ImgOverlay>
          </Card>
          </div>
    );}



}


export default ActivateInfo
