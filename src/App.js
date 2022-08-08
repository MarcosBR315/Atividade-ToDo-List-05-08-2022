import React from "react";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  };
};