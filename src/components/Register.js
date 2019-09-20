import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import {CardElement, injectStripe} from 'react-stripe-elements';

import Footer from "./footer";
import Menu from "./menu";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

import { UserContext } from './context/UserContext'

import '../App.css'

import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import SIM_card_with_barcode_01_A1_Rectangle_13_pattern from './SIM_card_with_barcode_01_A1_Rectangle_13_pattern.png'
import Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern from './Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern.png'
const Register = ({ history }) => {
  const [activate, setActivate] = useState({ sim: "", zip:"", fullName:"", city: "", contact: "", email:"", state: ""});

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
        history.push("/activationinfo");
      })
      .catch(err => console.log(err.response));
  };

  let sim = localStorage.getItem('sim')

  return (
    // <div>
    // <Container classNameName="login-container">
    //   <Row>
    //     <Col lg="6">
    //       <h1> Speed Talk </h1>
    //       <p>
    //         <p>
    //           {" "}
    //         </p>
    //       </p>
    //     </Col>
    //     <Col lg="6">
    //       <Form onSubmit={handleSubmit}>
    //       <FormGroup>
    //           <label htmlFor="#username">Full Name</label>
    //           <FormInput
    //             id="#fullName"
    //             name="fullName"
    //             placeholder="Full Name"
    //             onChange={handleChange}
    //             value={activate.fullName}
    //           />
    //         </FormGroup>
    //         <FormGroup>
    //           <label htmlFor="#username">Sim Card Number</label>
    //           <FormInput
    //             id="#sim"
    //             name="sim"
    //             placeholder = {sim}
    //             onChange={handleChange}
    //             value={activate.sim}
    //           />
    //         </FormGroup>
    //         <FormGroup>
    //           <label htmlFor="#username">Required: ZIP CODE</label>
    //           <FormInput
    //             id="#zip"
    //             name="zip"
    //             placeholder="ZIP CODE for the new phone number"
    //             onChange={handleChange}
    //             value={activate.zip}
    //           />
    //         </FormGroup>
    //         <FormGroup>
    //           <label htmlFor="#username">City</label>
    //           <FormInput
    //             id="#city"
    //             name="city"
    //             placeholder="City"
    //             onChange={handleChange}
    //             value={activate.city}
    //           />
    //         </FormGroup>
    //         <FormGroup>
    //           <label htmlFor="#username">State</label>
    //           <FormInput
    //             id="#state"
    //             name="state"
    //             placeholder="State"
    //             onChange={handleChange}
    //             value={activate.state}
    //           />
    //         </FormGroup>
    //         <FormGroup>
    //           <label htmlFor="#username">E-mail</label>
    //           <FormInput
    //             id="#email"
    //             name="email"
    //             placeholder="Please Enter an email"
    //             onChange={handleChange}
    //             value={activate.email}
    //           />
    //         </FormGroup>
    //         {/* <label htmlFor="#username">Amount</label>
    //           <InputGroup classNameName="mb-2">
    //             <InputGroupText>$</InputGroupText>
    //             <FormInput id="#amount"
    //             name="amount"
    //             placeholder="Amount"
    //             onChange={handleChange}
    //             value={activate.amount}/>
    //           <InputGroupAddon type="append">
    //           </InputGroupAddon>
    //          </InputGroup> */}
    //         <Row classNameName="login-btn">
    //           <Button block squared>
    //             CONTINUE
    //           </Button>
    //         </Row>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>

    // </div>
    <Container className="card-container">
	<svg className="bg">
		<pattern elementId="bg_A1_Rectangle_2" id="bg_A1_Rectangle_2_pattern" x="0" y="0" width="100%" height="100%">
			<image  width="100%" height="100%" href="bg_A1_Rectangle_2_pattern.png" href={bg_A1_Rectangle_2_pattern}></image>
		</pattern>
		<rect fill="url(#bg_A1_Rectangle_2_pattern)" id="bg" rx="0" ry="0" x="0" y="0" width="1440" height="827">
		</rect>
	</svg>
	<div id="Seed_Alarm">
		<span>Seed Alarm</span>
	</div>
	<div id="Activate_A1_Text_2">
		<span>Activate</span>
	</div>
	<div id="Refill">
		<span>Refill</span>
	</div>
	<div id="Account">
		<span>Account</span>
	</div>
	<svg className="Seed_Alarm___No_Background_01">
		<pattern elementId="Seed_Alarm___No_Background_01_A1_Rectangle_4" id="Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern" x="0" y="0" width="100%" height="100%">
			<image width="100%" height="100%" href={Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern} href={Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern}></image>
		</pattern>
		<rect fill="url(#Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern)" id="Seed_Alarm___No_Background_01" rx="0" ry="0" x="0" y="0" width="186.109" height="72.071">
		</rect>
	</svg>
	<div id="Group_641">
		<svg className="bg_A1_Rectangle_5">
			<rect fill="rgba(238,238,238,1)" id="bg_A1_Rectangle_5" rx="0" ry="0" x="0" y="0" width="1440" height="347">
			</rect>
		</svg>
		<div id="Group_640">
			<div id="Need_Help_">
				<span>Need Help?</span>
			</div>
			<div id="Group_639">
				<div id="info_seedalarm_com">
					<span>info@seedalarm.com</span>
				</div>
				<div id="ID1_800_201_0674">
					<span>1.800.201.0674</span>
				</div>
			</div>
		</div>
	</div>
	<div id="Group_650">
		<svg className="Rectangle_320">
			<rect fill="rgba(255,255,255,1)" id="Rectangle_320" rx="18" ry="18" x="0" y="0" width="1022" height="557">
			</rect>
		</svg>
		<div id="Activate_your_SIM_card">
			<span>Activate your SIM card</span>
		</div>
		<div id="Group_630">
			<div id="Button" className="Button">
			</div>
			<div id="Activate_A1_Text_9">
				<span>Activate</span>
			</div>
		</div>
		<div id="Repeat_Grid_44">
			<div id="Repeat_Grid_44_0">
				<div id="Group_633">
					<svg className="Rectangle_319">
						<rect fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="0.25px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Rectangle_319" rx="8" ry="8" x="0" y="0" width="408" height="52">
						</rect>
					</svg>
					<div id="Full_Name">
						<span>Full Name</span>
					</div>
				</div>
				<div id="Full_Name_A1_Text_11">
					<span>Full Name</span>
				</div>
			</div>
			<div id="Repeat_Grid_44_1">
				<div id="Group_633_A1_Group_12">
					<svg className="Rectangle_319_A1_Rectangle_9">
						<rect fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="0.25px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Rectangle_319_A1_Rectangle_9" rx="8" ry="8" x="0" y="0" width="408" height="52">
						</rect>
					</svg>
					<div id="SIM_Card_Number">
						<span>SIM Card Number</span>
					</div>
				</div>
				<div id="SIM_Card_Number__">
					<span>SIM Card Number </span><span >*</span>
				</div>
			</div>
			<div id="Repeat_Grid_44_2">
				<div id="Group_633_A1_Group_14">
					<svg className="Rectangle_319_A1_Rectangle_10">
						<rect fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="0.25px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Rectangle_319_A1_Rectangle_10" rx="8" ry="8" x="0" y="0" width="408" height="52">
						</rect>
					</svg>
					<div id="City">
						<span>City</span>
					</div>
				</div>
				<div id="ZIP_Code__">
					<span>ZIP Code </span><span >*</span>
				</div>
			</div>
			<div id="Repeat_Grid_44_3">
				<div id="Group_633_A1_Group_16">
					<svg className="Rectangle_319_A1_Rectangle_11">
						<rect fill="rgba(255,255,255,1)" stroke="rgba(112,112,112,1)" stroke-width="0.25px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Rectangle_319_A1_Rectangle_11" rx="8" ry="8" x="0" y="0" width="408" height="52">
						</rect>
					</svg>
					<div id="Email">
						<span>Email</span>
					</div>
				</div>
				<div id="Email_A1_Text_17">
					<span>Email</span>
				</div>
			</div>
		</div>
		<div id="Required__">
			<span>Required *</span>
		</div>
		<svg className="SIM_card_with_barcode_01">
			<pattern elementId="SIM_card_with_barcode_01_A1_Rectangle_13" id="SIM_card_with_barcode_01_A1_Rectangle_13_pattern" x="0" y="0" width="100%" height="100%">
				<image x="0" y="0" width="100%" height="100%" href={SIM_card_with_barcode_01_A1_Rectangle_13_pattern} href={SIM_card_with_barcode_01_A1_Rectangle_13_pattern}></image>
			</pattern>
			<rect fill="url(#SIM_card_with_barcode_01_A1_Rectangle_13_pattern)" id="SIM_card_with_barcode_01" rx="0" ry="0" x="0" y="0" width="448.231" height="281.032">
			</rect>
		</svg>
		<div id="To_activate__enter_the_19_digi">
			<span>To activate, enter the 19 digit code located on the back of the SIM. Do not enter the letters only numbers.</span>
		</div>
	</div>
</Container>
  );
};

export default Register;