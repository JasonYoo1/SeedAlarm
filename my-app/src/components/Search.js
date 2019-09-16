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





const SearchInfo = () => {
    let searchInfo = localStorage.getItem('testing')
    console.log('this is from site', searchInfo)

    if(localStorage.getItem('testing') == null){
        let phoneNumber = null
        let simNumber = null
        let status = null
        let endDate = null
        let useageData = null
        let useageSMS = null
        let activationDate = null
        return (
      
            <Container className="card-container">
              <Card className="card">
                <CardHeader className="card-header">Welcome</CardHeader>
                <CardBody className="card-body">
                 <p>Search Info:<br/>
                 {simNumber}<br/>
                  Phone#: {phoneNumber}<br/>
                  Status: {status} <br/>
                  Activation: {activationDate}<br/>
                  End Cycle: {endDate}<br/>
                  Current Usage: {useageData}<br/>
                  SMS Usage: {useageSMS}<br/>
                 </p>
                </CardBody>
              </Card>
              <CardBody className='testing'>
              <Form>
              <Link to='/dashboard'>
                <Button block squared >
                  Back to Dashboard
                </Button>
                <Button block squared >
                  Search Another SIM/PHONE
                </Button>
              </Link>
            </Form>
        
              </CardBody>
            </Container>
            //this is the activate sim below:
        
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
                  <Card className="card">
                    <CardHeader className="card-header">Welcome</CardHeader>
                    <CardBody className="card-body">
                     <p>Search Info:<br/>
                     {simNumber}<br/>
                      Phone#: {phoneNumber}<br/>
                      Status: {status} <br/>
                      Activation: {activationDate}<br/>
                      End Cycle: {endDate}<br/>
                      Current Usage: {useageData}<br/>
                      SMS Usage: {useageSMS}<br/>
                     </p>
                    </CardBody>
                  </Card>
                  <CardBody className='testing'>
                  <Form>
                  <Link to='/dashboard'>
                    <Button block squared >
                      Back to Dashboard
                    </Button>
                    <Button block squared >
                      Search Another SIM/PHONE
                    </Button>
                  </Link>
                </Form>
            
                  </CardBody>
                </Container>
                //this is the activate sim below:
            
              );
        }



}

export default SearchInfo