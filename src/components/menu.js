import React from "react";
import { Link } from "react-router-dom";

import {  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse} from 'react-bootstrap';

import Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern from './Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern.png'
import Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern2x from './Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern2x.png'
import newlogo from './newlogo.png'

import "../App.css"


export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar className='menuBar' collapseOnSelect expand="lg" overflow="visible">
        {/* // <Navbar className='menuBar' collapseOnSelect expand="lg" variant="dark" overflow="visible"> */}
  <Navbar.Brand href="https://landingseedalarm.netlify.com/">
  <img width="50%" src= {newlogo} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features"> </Nav.Link>
      <Nav.Link href="#pricing"> </Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"> </NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link className='fontColorNav' href="https://www.seedalarm.com">Seed Alarm</Nav.Link>
      <Nav.Link eventKey={2} href="/checkout" className='fontColorNav'>
        Activate
      </Nav.Link>
      <Nav.Link className='fontColorNav' href="/RefillCheckOut">Refill</Nav.Link>
      <Nav.Link className='fontColorNav' href="/dashboard">Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}