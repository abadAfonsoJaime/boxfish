import React from "react";

import { Container, CssBaseline } from "@material-ui/core";
import Navbar from "./components/NavBar";
import NavigationRouter from "./navigation/NavigationRouter";

function App() {
  return (
    <>
      <CssBaseline />
      <header>
        <Navbar />
      </header>
      <main
        style={{ marginTop: 100, backgroundColor: "yellow", width: "100%" }}
      >
        {/* <Container maxWidth="md"> */}
        <NavigationRouter />
        {/* </Container>   */}
      </main>
    </>
  );
}

export default App;
