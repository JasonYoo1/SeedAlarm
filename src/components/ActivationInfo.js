import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import {
  Form,
  FormInput,
  FormTextarea,
  FormGroup,
  Col,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  Row
} from "shards-react";


const ActivateInfo = (event) => {

    // let register = localStorage.getItem('register')
    // console.log('this is from site', register)
    // let XMLParser = require('react-xml-parser');
    // let xml = new XMLParser().parseFromString(register);
    // console.log(xml.children[3].value)
    // let newPhone = xml.children[3].value
    // let plan = xml.children[4].value
    // localStorage.setItem('newPhone', newPhone)


    if(localStorage.getItem('register') == "<net><ret>99</ret></net>"){
      let newPhone = 'Error in registering. Please Try again'
      return (
        <div> 
          <h2>
          Welcome to the Speed Talk Family!
        Your Phone Number is {newPhone}<br/>
        Custom Plan (70 SMS, 5 MB) (NO VOICE) for 30 days <br/>
          </h2>

        {Date()}
        <Link to='/dashboard'>
                <Button block squared >
                  Back to Dashboard
                </Button>
        </Link>
    </div>
      
        );
      }else{
        let register = localStorage.getItem('register')
        console.log('this is from site', register)
        let XMLParser = require('react-xml-parser');
        let xml = new XMLParser().parseFromString(register);
        console.log(xml.children[3].value)
        let newPhone = xml.children[3].value
        let plan = xml.children[4].value
        localStorage.setItem('newPhone', newPhone)


      
          return (
            <div>
            Welcome to the Speed Talk Family!
            Your Phone Number is <strong>{newPhone}</strong><br/>
            Custom Plan (70 SMS, 5 MB) (NO VOICE) for 30 days <br/>
            {Date()}
            <Link to='/dashboard'>
                    <Button block squared >
                      Back to Dashboard
                    </Button>
            </Link>
        </div>
            );
      }



}


export default ActivateInfo
