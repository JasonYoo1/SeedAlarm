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
<div className='theFooter'>
      <Navbar className='footer' expand="lg" variant="light" bg="light">
  <Container className='footerContainer'>
    <h6 className='footerText'><h2 className='footerText'>Need Help?</h2><a href="mailto:info@seedalarm.com" >info@seedalarm.com</a><br/>
    1.800.201.0674</h6>
  </Container>
</Navbar>
</div>
    );
  }
}
