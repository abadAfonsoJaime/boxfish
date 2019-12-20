import React, { useContext } from "react";
import { Switch, Route, Redirect, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { About, Career, Contact, Home, NotFound, Work } from "../pages";

function NavigationRouter() {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }
  });
  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/about" component={About} />
            <Route path="/career" component={Career} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
            <Route path="/work" component={Work} />
            <Redirect exact from="/" to="/home" />
            <Redirect exact from="/" to="/not-found" component={NotFound} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
}

export default NavigationRouter;
