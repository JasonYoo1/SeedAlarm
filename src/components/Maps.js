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
      <div className='tmobilemap'>
      <embed src="https://maps.t-mobile.com/pcc.html?map=mvno-noroam-34l"style={{width:'87%', height: "650px"}} ></embed>
      </div>
    );
  }
}
 
export default SimpleMap;