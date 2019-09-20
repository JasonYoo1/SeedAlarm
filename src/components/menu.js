import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react";

import Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern from './Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern.png'

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
      <Navbar sticky="true" type="dark" className="navbar" expand="md">
      <NavbarBrand>				
        <img src= { Seed_Alarm___No_Background_01_A1_Rectangle_4_pattern } />
	    </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink active href="#">
                Seed Alarm
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Activate
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Refill
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Account
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
