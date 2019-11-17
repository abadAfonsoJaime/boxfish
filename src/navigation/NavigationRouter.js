import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { About, Career, Contact, Home, NotFound, Work } from "../pages";

function NavigationRouter() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route path="/home" component={Home} />
      <Route path="/work" component={Work} />
      <Redirect exact from="/" to="/home" />
      <Redirect exact from="/" to="/not-found" component={NotFound} />
    </Switch>
  );
}

export default NavigationRouter;
