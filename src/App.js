import React, { useState, useEffect, Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axiosWithAuth from "./Utils/axiosWithAuth.js";
import axios from 'axios'

// Context
import { UserContext } from "./components/context/UserContext";

// Components
import Footer from "./components/footer";
import Menu from "./components/menu";
import Dashboard from "./components/Dashboard";
import Registration from './components/Register'
import SearchInfo from './components/Search'
import CheckOut from './components/Checkout'
import PrivateRoute from './PrivateRoute'
import Refill from './components/Refill'
import RefillInfo from './components/RefillInfo'
import ActivateInfo from './components/ActivationInfo'
import RefillCheckOut from './components/RefillCheckOut'
import SimpleMap from './components/Maps'


function App() {
  // const [creds, setCreds] = useState([]);
  // const id = localStorage.getItem("data");
  // console.log(creds);
  // const getUserInfo = () => {
  //   return
  //   axios
  //     .get(`https://portal.speedtalk.mobi/service.aspx?cmd=agInformation&agid=${creds.username}&agpass=${creds.password}&review=${Date.now()}`)
  //     .then(res => {
  //       console.log("act req", res);
  //       // setUserInfo(res.data);
  //     })
  //     .catch(err => {
  //       console.log("This is bad", err.response);
  //     });
  // };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);
  const TITLE = 'My Page Title'

  return (
    // <ReflectionContext.Provider value={{ reflectionsArray }}>
      // <UserContext.Provider value={{ creds }}>
        <div className="App">
          <Menu/>
          <Switch>
            <Route exact path="/dashboard" title="Index Page" component={Dashboard} />
            <Route exact path="/activate" component={Registration} />
            <Route exact path ="/search" component={SearchInfo}/>
            <Route exact path="/checkout" component={CheckOut} />
            <PrivateRoute exact path="/refill" component={Refill} />
            <Route exact path="/refillinfo" component={RefillInfo} />
            <PrivateRoute exact path="/activationinfo" component={ActivateInfo}/>
            <Route exact path="/RefillCheckOut" component={RefillCheckOut}/>
            <Route exact path="/coverage" component={SimpleMap}/>
          </Switch>
          <Footer/>
        </div>

    //  {/* </ActivityContext.Provider> */}
    // </UserContext.Provider>
  );
}
export default App;

