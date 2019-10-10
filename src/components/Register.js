import React, { useState } from "react";
import {
  Form,
  FormInput,
  FormGroup,
  Container,
  Row,
  Col,
  Collapse,
} from "shards-react";

import {
  Card
} from 'react-bootstrap'

import axiosWithAuth from '../Utils/axiosWithAuth'

import {ReactLoading, cylon, color} from 'react-loading';

import axios from "axios";

import '../App.css'

import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import Sim2 from './Sim2.png'
import Blocks from './Blocks2.gif'

const Register = ({ history }) => {
  const [activate, setActivate] = useState({ sim: "", zip:"", fullName:"", city: "", contact: "", email:"", state: "", collapse: false});

  let toggle = () => {
    setActivate({ collapse: !activate.collapse });
  }

  const handleChange = event => {
    setActivate({ ...activate, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://cors-anywhere.herokuapp.com/https://portal.speedtalk.mobi/service.aspx?cmd=stActivate&agid=symbol%40seedalarm.com&agpass=ZynetInc4199&sku=8035&amount=1.5&sim=${activate.sim}&firstName=${activate.fullName}&lastName=&address1=&address2=&city=&state=&zip=${activate.zip}&phone=&email=&campaign=`, activate)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("register", res.data);
        localStorage.setItem("sim", activate.sim);
        localStorage.setItem("token", null);
        if(localStorage.getItem('register') == '<net><ret>99</ret></net>'){
          history.push("/activationInfo");
        }else{
        history.push("/checkout");}
      })
      .catch(err => console.log(err.response));
  };

  let sim = localStorage.getItem('sim')

  let myFunction= () => {
    var x = document.getElementById("myDIV");
    console.log('click click')
    if (x.innerHTML === "ACTIVATE") {
      x.innerHTML = `<img className ='responsiveImg' width= "45rem" src = ${Blocks}/> Activating Sim ... Please Wait`
    } 
  }

  return (
    <div>
      <Card className="backgroundTesting">
      <Card.Img className="backgroundTest" src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        <br></br>
       <Container className="activateContainer">
       <Row>
         <Col lg="6">
           <h3 className = 'responsiveTitle'> Activate your SIM card </h3>
           <p>
            To activate, enter the 19 digit code located on the back of the SIM. Do not enter the letters, Please enter the numbers only.
                       <br/>
           <br/>
           <p>
               <img className ='responsiveImg' width= "100%" src = {Sim2}></img>
            </p>
           </p>
         </Col>
         <Col lg="6">
           <Form className='responsiveRegForm' onSubmit={handleSubmit}>
           <FormGroup className = 'FormGroup' >
               <label htmlFor="#username">Full Name</label>
               <FormInput
                id="#fullName"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                value={activate.fullName}
              />
            </FormGroup>
            <FormGroup className = 'FormGroup'>
              <label htmlFor="#username">Sim Card Number</label>
              <FormInput
                onClick={toggle}
                id="#sim"
                name="sim"
                placeholder = 'SIM Card Number'
                onChange={handleChange}
                value={activate.sim}
              /><Collapse open={activate.collapse}>
              <div c>
                <h5 className ='fontRED'>😄 Only Numbers Please!</h5>
              </div>
            </Collapse>
            </FormGroup>
            <FormGroup className = 'FormGroup'>
              <label htmlFor="#username">City Zip Code</label>
              <FormInput
                id="#zip"
                // type='number'
                name="zip"
                placeholder="This will generate your area code"
                onChange={handleChange}
                value={activate.zip}
              />
            </FormGroup>
            <FormGroup className = 'FormGroup'>
              <label htmlFor="#username">Email</label>
              <FormInput
                id="#email"
                name="email"
                type='email'
                placeholder="Email"
                onChange={handleChange}
                value={activate.email}
              />
              <Row className="activateBtn">
              <button id="myDIV" onClick={myFunction} className="actualButton" block>
                ACTIVATE
              </button>

            </Row>
            </FormGroup>

          </Form>
        </Col>
      </Row>
    </Container>
  </Card.ImgOverlay>
</Card>
{console.log(` https://www.linkedin.com/in/jasonyoo1/ `)}
    </div>
  );
};


export default Register;