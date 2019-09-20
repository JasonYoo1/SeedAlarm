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

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" overflow="visible">
  <Navbar.Brand href="#home">
  <img width="50%" src= { Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern2x } />
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
      <Nav.Link href="#deets">Seed Alarm</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Activate
      </Nav.Link>
      <Nav.Link href="#deets">Refill</Nav.Link>
      <Nav.Link href="#deets">Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
