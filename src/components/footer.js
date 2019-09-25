import React from "react";
import { Container, Row, Col } from "shards-react";

import {
  Card,
  Button,
  Navbar
} from 'react-bootstrap'

import '../App.css'


export default class Footer extends React.Component {
  render() {
    return (

      <Navbar className='footer' fixed="bottom" expand="lg" variant="light" bg="light">
  <Container className='footerContainer'>
    <h6 className='footerText'><h2 className='footerText'>Need Help?</h2>info@seedalarm.com<br/>
    1.800.201.0674</h6>

  </Container>
</Navbar>
    );
  }
}
