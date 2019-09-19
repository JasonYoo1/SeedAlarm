import React, { useState, useEffect, Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axiosWithAuth from "./Utils/axiosWithAuth.js";
import axios from 'axios'

// Context
import { UserContext } from "./components/context/UserContext";

// Components
import Footer from "./components/footer";
import Login from "./components/Login";
import Menu from "./components/menu";
import Dashboard from "./components/Dashboard";
import Registration from './components/Register'
import SearchInfo from './components/Search'
import CheckOut from './components/Checkout'
import PrivateRoute from './PrivateRoute'
import Refill from './components/Refill'
import RefillInfo from './components/RefillInfo'
import ActivateInfo from './components/ActivationInfo'

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

  return (
    // <ReflectionContext.Provider value={{ reflectionsArray }}>
      // <UserContext.Provider value={{ creds }}>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/activate" component={Registration} />
            <Route exact path ="/search" component={SearchInfo}/>
            <Route exact path="/checkout" component={CheckOut} />
            <PrivateRoute exact path="/refill" component={Refill} />
            <PrivateRoute exact path="/refillinfo" component={RefillInfo} />
            <Route exact path="/activationinfo" component={ActivateInfo}/>
          </Switch>
          <Footer />
        </div>

    //  {/* </ActivityContext.Provider> */}
    // </UserContext.Provider>
  );
}
export default App;
