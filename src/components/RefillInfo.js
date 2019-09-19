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





const RefillInfo = () => {
    let refillInfo = localStorage.getItem('testing')
    console.log('this is from site', refillInfo)

    if(localStorage.getItem('testing') == "<net><ret>1</ret><retmess>No web-credit available.</retmess></net>"){
        let simNumber = 'Error'
        return (
      
            <Container className="card-container">
              <Card className="card">
                <CardHeader className="card-header">Welcome</CardHeader>
                <CardBody className="card-body">
                 <p>Search Info:<br/>
                 {simNumber}<br/>
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
            let refillInfo = localStorage.getItem('refillInfo')
            console.log('this is from site', refillInfo)
            let XMLParser = require('react-xml-parser');
            let xml = new XMLParser().parseFromString(refillInfo);
            console.log(xml)
            let effective = xml.children[3].value
            let plan = xml.children[2].value


        
            return (
      
                <Container className="card-container">
                  <Card className="card">
                    <CardHeader className="card-header">Welcome</CardHeader>
                    <CardBody className="card-body">
                     <p>
                         Thank you!<br/><br/>
                         {effective}<br/><br/>
                        {plan}
                         
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

export default RefillInfo