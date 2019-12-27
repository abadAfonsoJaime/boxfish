import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { About, Career, Contact, Home, NotFound, Work } from "../pages";

export default function Routing() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/career" component={Career} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/home" component={Home} />
        <Redirect exact from="/" to="/home" />
        <Redirect from="/" to="/not-found" />
      </Switch>
    </div>
  );
}
