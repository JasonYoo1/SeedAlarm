import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import {
  Form,
  FormInput,
  FormTextarea,
  FormGroup,
  Col,
  CardHeader,
  CardBody,
  Container,
  Button,
  Row
} from "shards-react";

import{
  Card
} from 'react-bootstrap'

import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern.png'



const RefillInfo = () => {
    let refillInfo = localStorage.getItem('testing')
    // console.log('this is from site', refillInfo)

    if(localStorage.getItem('testing') == "<net><ret>1</ret><retmess>No web-credit available.</retmess></net>" || "<net><ret>1</ret><retmess>Account not found</retmess></net>"){
        let simNumber = 'Error'
        return (
          <Card className="backgroundTesting">
          <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
          <Card.ImgOverlay >
            <br></br>
            <br></br>
            <br></br>
            <br/>
           <Container className="refillInfoCont">
              <h1 className='congratsRefill'>There was a problem with your request. </h1>
              <br/>
              <p className='congratsRefill'>Please check if you have credit's available.</p>
              <br/>
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
      {console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)}
        </Card>        
          );
        }else{
            let refillInfo = localStorage.getItem('refillInfo')
            // console.log('this is from site', refillInfo)
            let XMLParser = require('react-xml-parser');
            let xml = new XMLParser().parseFromString(refillInfo);
            // console.log(xml)
            let effective = xml.children[3].value
            let plan = xml.children[2].value
            return (
      
              <Card className="backgroundTesting">
              <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
              <Card.ImgOverlay >
                <br></br>
                <br></br>
                <br></br>
                <br/>
               <Container className="refillInfoCont">
                  <h1 className='congratsRefill'>Congratulations!</h1>
                  <br/>
                  <p className='congratsRefill'>Your automactic refill has been successful and effective : {effective} and will be charged monthly 3-days prior to the current plan end date.</p>
                  <br/>
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
                
              );
        }



}

export default RefillInfo