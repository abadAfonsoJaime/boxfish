import React from "react";

// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/NavBar";
import NavigationRouter from "./navigation/NavigationRouter";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ marginTop: 100 }}>
        <NavigationRouter />
      </main>
    </>
  );
}

export default App;
