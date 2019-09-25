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
      <div className='footerSht'>
      <Card fixed="bottom" className="text-center" id ='footerCard'>
        <Card.Header>Need Help?</Card.Header>
        <Card.Footer className="text-muted">info@seedalarm.com<br/>1.800.201.0674</Card.Footer>
      </Card>
      </div>
      
    );
  }
}
