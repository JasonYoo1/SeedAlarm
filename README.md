# SEED ALARM

## Description
This application allows users to Activate, enroll in recurring payments, refill data, and check status of a SIM card provided by Speed Talk.

## Getting Started
For an example of how to implement this code on the client side see the link below: 
https://github.com/JasonYoo1/SeedAlarm


## Prerequisites
All of the below dependencies can be installed using:
npm install
npm add < name_of_dependency >
npm start
for dev dependencies simply add --dev after the < name_of_dependency >

## Installation
This project was created using yarn and designed for react client side. Other dependencies include:
```
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.25",
    "@fortawesome/free-brands-svg-icons": "^5.11.2",
    "@fortawesome/free-solid-svg-icons": "^5.11.2",
    "axios": "^0.19.0",
    "bootstrap": "^4.3.1",
    "google-map-react": "^1.1.4",
    "google-maps-react": "^2.0.2",
    "react": "^16.9.0",
    "react-bootstrap": "^1.0.0-beta.12",
    "react-dom": "^16.9.0",
    "react-loading": "^2.0.3",
    "react-paypal-button-v2": "^2.4.1",
    "react-paypal-express-checkout": "^1.0.5",
    "react-private-route": "^1.1.2",
    "react-router-dom": "^5.0.1",
    "react-scripts": "3.1.1",
    "react-stripe-checkout": "^2.6.3",
    "react-stripe-elements": "^5.0.0",
    "react-toastify": "^5.3.2",
    "react-xml-parser": "^1.1.3",
    "shards-react": "^1.0.3",
    "shards-vue": "^1.0.7",
    "styled-components": "^4.3.2"
  },
```

Examples of Tables
```
User table {

SIM <-- Required
Full Name <-- Required
}
Usage
EndPoints (activate, dashboard, activationInfo, refill, refillInfo, checkout, refillCheckout)
User
```

## Register a SIM - POST

https://avtivatesaapi.com/activate

## Check Status - POST

https://avtivatesaapi.com/dashboard


## Dashboard -POST

https://avtivatesaapi.com/dashboard

## Add Data -POST

https://avtivatesaapi.com/RefillCheckOut

## Payment Activation -POST

https://avtivatesaapi.com/checkout



## Support
- GITHUB: https://github.com/JasonYoo1 
- email: jyoojs@gmail.com

## Authors and acknowledgment
This application was made by Jason Yoo 
https://www.linkedin.com/in/jasonyoo1/


## Project status
This project may have updates from time to time to keep it up to date so if you have an issue see the support section.
