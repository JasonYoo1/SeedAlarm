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

// Context

const UserInfo = () => {
  //dashboard info state
  const [userInfo, setUserInfo] = useState([]);
  //new account state
  const [newAccountInfo, setNewAccountInfo] = useState ({ phone: "", sku: "", amount:"" })
  const simCard = localStorage.getItem("sim");
 


//storing account info to the key 'test'
let accInfo = localStorage.getItem('test')



const handleChange = event => {
  setNewAccountInfo({ ...newAccountInfo, [event.target.name]: event.target.value });
};

//statement === NULL
if(localStorage.getItem('test')===null){
  let currentInfo = null
  return (
    <Container className="card-container">
      <Card className="card">
        <CardHeader className="card-header">Welcome</CardHeader>
        <CardBody className="card-body">
         <p>Current Info:<br/>
            {currentInfo}<br/>
         PLAN: Custom Plan (70 SMS, 5MB) <br></br>
         (NO VOICE) for 30 days
         </p>
        </CardBody>
      </Card>
      <CardBody className='testing'>
      <Form>
    </Form>
      </CardBody>
    </Container>
    //this is the activate sim below:

  );
} else {
  //this is the XML parser
  var XMLParser = require('react-xml-parser');
var xml = new XMLParser().parseFromString(accInfo);    // Assume xmlText contains the example XML
//this is going through the data being given back. console log XML to see children
let currentInfo= xml.children[1].value;
return (
  <Container className="card-container">
    <Card className="card">
      <CardHeader className="card-header">Welcome</CardHeader>
      <CardBody className="card-body">
       <p>Current Info:<br/>
          {currentInfo}<br/>
       PLAN: Custom Plan (70 SMS, 5MB) <br></br>
       (NO VOICE) for 30 days
       </p>
      </CardBody>
    </Card>
    <CardBody className='testing'>
    <Form>
    <Link to={"/checkout"}>
      <Button style={{margin:"auto" , maxWidth: "250px" }}block squared >
        Select a Plan
      </Button>
    </Link>
  </Form>
    </CardBody>
  </Container>

);
}
};

export default UserInfo;
