import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import React, { Component } from "react";
import Login from "./containers/Login";
import {  Route, Switch } from 'react-router-dom';
import Home from "./App";



export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    {/* <Route component={NotFound} /> */}
  </Switch>;