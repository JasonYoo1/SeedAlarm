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
    <div id="Activate">
	<svg className="bg">
		<pattern elementId="bg_A1_Rectangle_2" id="bg_A1_Rectangle_2_pattern" x="0" y="0" width="100%" height="100%">
			<image x="0" y="0" width="100%" height="100%" href="bg_A1_Rectangle_2_pattern.png" href={bg_A1_Rectangle_2_pattern}></image>
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
			<image x="0" y="0" width="100%" height="100%" href={Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern} href={Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern}></image>
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
				<div id="Group_637">
					<svg className="Ellipse_2">
						<ellipse fill="rgba(0,0,0,0)" stroke="rgba(0,0,0,1)" stroke-width="1px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="10" shape-rendering="auto" id="Ellipse_2" rx="23.609149932861328" ry="23.609149932861328" cx="23.609149932861328" cy="23.609149932861328">
						</ellipse>
					</svg>
					<div id="Group_636">
						<svg className="Path_430" viewBox="411.422 75.992 9.096 18.192">
							<path fill="rgba(0,0,0,1)" id="Path_430" d="M 420.5176086425781 85.08842468261719 C 417.4859924316406 82.05600738525391 414.4535827636719 79.02442932128906 411.4219970703125 75.99199676513672 L 411.4219970703125 94.18401336669922 C 414.4535827636719 91.15243530273438 417.4859924316406 88.12000274658203 420.5176086425781 85.08842468261719 Z">
							</path>
						</svg>
						<svg className="Path_431" viewBox="411.694 87.477 15.113 9.516">
							<path fill="rgba(0,0,0,1)" id="Path_431" d="M 421.2100830078125 87.47709655761719 L 411.6937866210938 96.99329376220703 L 422.8865966796875 96.99329376220703 L 426.8064270019531 93.07346343994141 L 421.2100830078125 87.47709655761719 Z">
							</path>
						</svg>
						<svg className="Path_432" viewBox="412.295 75.331 30.507 15.254">
							<path fill="rgba(0,0,0,1)" id="Path_432" d="M 442.8017272949219 75.33100128173828 L 412.2950134277344 75.33100128173828 C 417.3796081542969 80.41559600830078 422.4642028808594 85.50019836425781 427.5487976074219 90.58479309082031 L 442.8017272949219 75.33100128173828 Z">
							</path>
						</svg>
						<svg className="Path_433" viewBox="438.061 76.099 9.291 18.582">
							<path fill="rgba(0,0,0,1)" id="Path_433" d="M 447.351806640625 94.68056488037109 L 447.351806640625 76.0989990234375 L 438.06103515625 85.38977813720703 C 441.1578979492188 88.48670959472656 444.2548828125 91.58364105224609 447.351806640625 94.68056488037109 Z">
							</path>
						</svg>
						<svg className="Path_434" viewBox="431.035 87.813 14.543 9.231">
							<path fill="rgba(0,0,0,1)" id="Path_434" d="M 436.34619140625 87.81300354003906 L 431.0350036621094 93.12420654296875 C 432.3420104980469 94.43121337890625 433.6481628417969 95.73737335205078 434.9551696777344 97.04438018798828 L 445.5775756835938 97.04438018798828 L 436.34619140625 87.81300354003906 Z">
							</path>
						</svg>
						<svg className="Path_435" viewBox="424.882 94.071 9.142 3.92">
							<path fill="rgba(0,0,0,1)" id="Path_435" d="M 428.8017272949219 94.07109832763672 L 429.4080505371094 94.68683624267578 L 430.1044921875 94.07109832763672 L 434.0242614746094 97.99092864990234 L 424.8818969726562 97.99092864990234 L 428.8017272949219 94.07109832763672 Z">
							</path>
						</svg>
					</div>
				</div>
				<div id="Group_638">
					<svg className="Path_437" viewBox="-0.053 -0.053 43.811 43.397">
						<path fill="rgba(0,0,0,0)" stroke="rgba(2,2,2,1)" stroke-width="1px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Path_437" d="M 21.90551948547363 -0.05246574059128761 C 34.00360488891602 -0.08144176751375198 43.78754806518555 9.609866142272949 43.75857162475586 21.59367561340332 C 43.72959899902344 33.57748413085938 33.89867401123047 43.31577301025391 21.80058860778809 43.34474563598633 C 9.70250415802002 43.37372207641602 -0.08144176751375198 33.68241500854492 -0.05246574059128761 21.69860649108887 C -0.02348971366882324 9.714797973632812 9.807435989379883 -0.02348971366882324 21.90551948547363 -0.05246574059128761 Z">
						</path>
					</svg>
					<svg className="Path_436" viewBox="60.559 173.778 25.023 28.417">
						<path fill="rgba(0,0,0,1)" id="Path_436" d="M 75.54499816894531 194.9299926757812 C 72.8489990234375 192.7879943847656 69.41400146484375 189.4369964599609 66.59799957275391 184.6670074462891 C 68.19100189208984 184.5399932861328 69.802001953125 183.9389953613281 70.92299652099609 183 C 69.73300170898438 174.77099609375 63.19900131225586 173.7779998779297 63.19900131225586 173.7779998779297 C 61.48899841308594 175.2100067138672 60.34600067138672 177.8970031738281 60.59299850463867 180.1670074462891 L 60.55899810791016 180.1660003662109 C 60.55899810791016 180.1660003662109 61.81999969482422 195.4179992675781 78.78800201416016 202.0180053710938 L 78.81099700927734 201.9409942626953 C 81.00599670410156 202.5950012207031 83.86599731445312 201.9409942626953 85.58200073242188 200.5030059814453 C 84.39299774169922 192.2749938964844 77.85900115966797 191.2819976806641 77.85900115966797 191.2819976806641 C 76.81500244140625 192.1569976806641 75.98100280761719 193.5 75.54499816894531 194.9299926757812 Z">
						</path>
					</svg>
				</div>
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
				<svg className="Rectangle_301">
					<rect fill="rgba(0,204,255,1)" id="Rectangle_301" rx="7" ry="7" x="0" y="0" width="415" height="59">
					</rect>
				</svg>
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
</div>

  );
};

export default Register;
