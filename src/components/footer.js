import React from "react";
import { Container, Row, Col } from "shards-react";

import {
  Card,
  Button
} from 'react-bootstrap'


export default class Footer extends React.Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Header>Need Help?</Card.Header>
        <Card.Footer className="text-muted">info@seedalarm.com<br/>1.800.201.0674</Card.Footer>
      </Card>
    );
  }
}
