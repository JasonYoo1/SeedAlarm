import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <embed src="https://maps.t-mobile.com/pcc.html?map=mvno-noroam-34l"style={{width:'1000px', height: "650px"}} ></embed>
    );
  }
}
 
export default SimpleMap;