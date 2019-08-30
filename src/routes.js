import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Dashboard } from "./containers";
export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/login" component={Login} />
  </Switch>
);
