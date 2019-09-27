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

import {
  Card
} from 'react-bootstrap'


import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern.png'

import '../App.css'
import profileIcon from './profileIcon.png'


const SearchInfo = () => {
    let searchInfo = localStorage.getItem('testing')
    console.log('this is from site', searchInfo)

    if(localStorage.getItem('testing') == "<net><ret>1</ret><retmess>Account not found</retmess></net>"){
        let phoneNumber = 'That account does not exist'
        return (
      
          <Container className="card-container">
          <Card className="backgroundTesting">
          <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
          <Card.ImgOverlay >
            <br></br>
            <br></br>
            <br></br>
            
           <Container style={{width :'90%', height: '95%'}}className="searchCont">
             <div className='accountInfo'>
<svg xmlns="http://www.w3.org/2000/svg" width="500" className ='tryingTest' height="483" viewBox="0 0 608 483">
<g id="Group_648" data-name="Group 648" transform="translate(-339 -277)">
<g id="Component_1" data-name="Component 1" transform="translate(339 277)">
  <g id="Rectangle_293" data-name="Rectangle 293" fill="#fff" stroke="#dadbe6" stroke-width="1">
    <rect width="608" height="483" rx="10" stroke="none"/>
    <rect x="0.5" y="0.5" width="607" height="482" rx="9.5" fill="none"/>
  </g>
  <rect id="Rectangle_294" data-name="Rectangle 294" width="608" height="264" transform="translate(0 88)" fill="#fff"/>
  <text id="Account" transform="translate(145 69)" font-size="25" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="0">Account</tspan></text>
  <text id="Current_cycle" data-name="Current cycle" transform="translate(64 238)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">CURRENT CYCLE</tspan></text>
  <text id="Phone_Number" data-name="Phone Number" transform="translate(64 121.5)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">PHONE NUMBER</tspan></text>
  <text id="Usage" transform="translate(64 182)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">USAGE</tspan></text>
  <text id="_555-555-5555" data-name="555-555-5555" transform="translate(208 133)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="0" y="0">{phoneNumber}</tspan></text>
  <text id="Ends_August_15_2019" data-name="Ends August 15, 2019" transform="translate(208 250)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="0" y="0"></tspan></text>
  <text id="_70_SMS_5MB" data-name="70 SMS, 5MB" transform="translate(208 312)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="0" y="0">70 SMS, 5MB</tspan></text>
  <text id="_10_Texts" data-name="10 Texts" transform="translate(241 193)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="-29.652" y="0"></tspan></text>
  <text id="_3_MB_Data" data-name="3 MB Data" transform="translate(355 193)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="-37.793" y="0"> MB Data</tspan></text>
  <text id="Plan" transform="translate(64 300)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">PLAN</tspan></text>
  <text id="Billed_monthly" data-name="Billed monthly" transform="translate(358 354)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="86.398" y="12">Billed monthly</tspan></text>
  <text id="Total_14.99_month" data-name="Total $14.99/month" transform="translate(290 371)" font-size="25" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="-224.585" y="0">Total $14.99/month</tspan></text>
  <line id="Line_175" data-name="Line 175" x2="480.836" transform="translate(64 160)" fill="none" stroke="#dadbe6" stroke-width="1"/>
  <line id="Line_176" data-name="Line 176" x2="480.836" transform="translate(64.5 216.5)" fill="none" stroke="#dadbe6" stroke-width="1"/>
  <line id="Line_177" data-name="Line 177" x2="480.836" transform="translate(64.5 272.5)" fill="none" stroke="#dadbe6" stroke-width="1"/>
  <line id="Line_179" data-name="Line 179" y2="26" transform="translate(292.5 175.5)" fill="none" stroke="#9597a6" stroke-width="1"/>
</g>
</g>
</svg>
</div>
              <div className = 'searchBtns'>
                  <Link to='/RefillCheckOut'>
                    <button className="activationInfoBtn" id='backSeedSearch' >
                      Refill
                    </button>
                    </Link>
                    <Link to='/dashboard'>
                    <button className="activationInfoBtn" id='backDashSearch' >
                      Back to SeedAlarm
                    </button>
                    </Link>
                  </div>
        </Container>
      </Card.ImgOverlay>
        </Card>
            </Container>
    
          );
        }else{
            let searchInfo = localStorage.getItem('testing')
            console.log('this is from site', searchInfo)
            let XMLParser = require('react-xml-parser');
            let xml = new XMLParser().parseFromString(searchInfo);
            
            let phoneNumber = xml.children[2].value
            let simNumber = xml.children[1].value
            let status = xml.children[4].value
            let endDate = xml.children[5].value
            let useageData = xml.children[6].value
            let useageSMS = xml.children[7].value
            let activationDate = xml.children[8].value
            return (  
      
                <Container className="card-container">
              <Card className="backgroundTesting">
              <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
              <Card.ImgOverlay >
                <br></br>
                <br></br>
                <br></br>
               <Container style={{width :'90%', height: '95%'}} className="searchCont">

<svg xmlns="http://www.w3.org/2000/svg" margin= 'auto' width="500" className ='tryingTest' height="483" viewBox="0 0 608 483">
  <g id="Group_648" data-name="Group 648" transform="translate(-339 -277)">
    <g id="Component_1" data-name="Component 1" transform="translate(339 277)">
      <g id="Rectangle_293" data-name="Rectangle 293" fill="#fff" stroke="#dadbe6" stroke-width="1">
        <rect width="608" height="483" rx="10" stroke="none"/>
        <rect x="0.5" y="0.5" width="607" height="482" rx="9.5" fill="none"/>
      </g>
      <rect id="Rectangle_294" data-name="Rectangle 294" width="608" height="264" transform="translate(0 88)" fill="#fff"/>
      <text id="Account" transform="translate(145 69)" font-size="25" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="0">Account</tspan></text>
      <text id="Current_cycle" data-name="Current cycle" transform="translate(64 238)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">CURRENT CYCLE</tspan></text>
      <text id="Phone_Number" data-name="Phone Number" transform="translate(64 121.5)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">PHONE NUMBER</tspan></text>
      <text id="Usage" transform="translate(64 182)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">USAGE</tspan></text>
      <text id="_555-555-5555" data-name="555-555-5555" transform="translate(208 133)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="0" y="0">{phoneNumber}</tspan></text>
      <text id="Ends_August_15_2019" data-name="Ends August 15, 2019" transform="translate(208 250)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="0" y="0">{endDate}</tspan></text>
      <text id="_70_SMS_5MB" data-name="70 SMS, 5MB" transform="translate(208 312)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="0" y="0">70 SMS, 5MB</tspan></text>
      <text id="_10_Texts" data-name="10 Texts" transform="translate(241 193)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="-29.652" y="0">{useageSMS} Texts</tspan></text>
      <text id="_3_MB_Data" data-name="3 MB Data" transform="translate(355 193)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="-37.793" y="0">{useageData} MB Data</tspan></text>
      <text id="Plan" transform="translate(64 300)" fill="#9597a6" font-size="12" font-family="Helvetica-Bold, Helvetica" font-weight="700" letter-spacing="0.1em"><tspan x="0" y="9">PLAN</tspan></text>
      <text id="Billed_monthly" data-name="Billed monthly" transform="translate(358 354)" fill="#9597a6" font-size="16" font-family="Helvetica"><tspan x="86.398" y="12">Billed monthly</tspan></text>
      <text id="Total_14.99_month" data-name="Total $14.99/month" transform="translate(290 371)" font-size="25" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="-224.585" y="0">Total $14.99/month</tspan></text>
      <line id="Line_175" data-name="Line 175" x2="480.836" transform="translate(64 160)" fill="none" stroke="#dadbe6" stroke-width="1"/>
      <line id="Line_176" data-name="Line 176" x2="480.836" transform="translate(64.5 216.5)" fill="none" stroke="#dadbe6" stroke-width="1"/>
      <line id="Line_177" data-name="Line 177" x2="480.836" transform="translate(64.5 272.5)" fill="none" stroke="#dadbe6" stroke-width="1"/>
      <line id="Line_179" data-name="Line 179" y2="26" transform="translate(292.5 175.5)" fill="none" stroke="#9597a6" stroke-width="1"/>
    </g>
  </g>
</svg>
                  <div className = 'searchBtns'>
                  <Link to='/RefillCheckOut'>
                    <button className="activationInfoBtn" id='backSeedSearch' >
                      Refill
                    </button>
                    </Link>
                    <Link to='/dashboard'>
                    <button className="activationInfoBtn" id='backDashSearch' block>
                      Back to SeedAlarm
                    </button>
                    </Link>
                  </div>
            </Container>
          </Card.ImgOverlay>
            </Card>
                </Container>
                //this is the activate sim below:
            
              );
        }



}

export default SearchInfo