import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#90a4ae",
      light: "#cfd8dc",
      dark: "#607d8b",
      contrastText: "#eceff1"
    },
    secondary: {
      main: "#c8e6c9",
      light: "#69f0ae",
      dark: "#a5d6a7"
    },
    background: {
      default: "#fff3e0",
      paper: "#ffe0b2"
    }
  }
});

render(
  <MuiThemeProvider theme={customTheme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();