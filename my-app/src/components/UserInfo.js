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
    // const password = localStorage.getItem("password");
    // console.log(simCard)
  //this is for the dashboard info
  // const getUserInfo = () => {
  //   return axios
  //     .get(`https://portal.speedtalk.mobi/service.aspx?cmd=agInformation&agid=${username}&agpass=${password}&review=${Date.now()*.13}`)
  //     .then(res => {
  //       // console.log("act req", res.data);
  //       setUserInfo(res.data);
  //       localStorage.setItem("info", res.data);
  //     })
  //     .catch(err => {
  //       console.log("This is bad", err.response);
  //     });
  // };
  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  //SAVE JUST IN CASE
  //this is for the new account
//   const handleSubmit = e => {
//     e.preventDefault();
//   return axios
//   .post(`https://portal.speedtalk.mobi/service.aspx?cmd=stRefill&agid=symbol%seedalarm.com&agpass=ZynetInc4199&phone=${newAccountInfo.phone}&sku=${newAccountInfo.sku}&amount=${newAccountInfo.amount}`)
//   .then(res => {
//     console.log("act req", res);
//     // setNewAccountInfo(res.data);
//     // localStorage.setItem("info", res.data);
//   })
//   .catch(err => {
//     console.log("This is bad", err.response);
//   });
// };

//this is the info for the new account



let accInfo = localStorage.getItem('test')
// console.log('this is acc', accInfo)



const handleChange = event => {
  setNewAccountInfo({ ...newAccountInfo, [event.target.name]: event.target.value });
};

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
      <Link to={"/activate"}>
        <Button block squared >
          Activate a new Line
        </Button>
      </Link>
    </Form>

      </CardBody>
    </Container>
    //this is the activate sim below:

  );
} else {
  var XMLParser = require('react-xml-parser');
var xml = new XMLParser().parseFromString(accInfo);    // Assume xmlText contains the example XML
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
    <Link to={"/activate"}>
      <Button style={{ maxWidth: "250px" }}block squared >
        Activate a new Line
      </Button>
    </Link>
    <Link to={"/checkout"}>
      <Button style={{ background: "red", maxWidth: "250px" }}block squared >
        Select a Plan
      </Button>
    </Link>
  </Form>
    </CardBody>
  </Container>
  //this is the activate sim below:

);
}

  // console.log('onchange',this.state)

// const text = localStorage.getItem('info');
// // console.log('this is local storage', text)  

// var XMLParser =  require('react-xml-parser');
// var xml = new XMLParser().parseFromString(text)



};

export default UserInfo;
