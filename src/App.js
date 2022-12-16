import React, { Component } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import "./styles.css";
import NavBar from "./components/navbar";
import Form from "./components/Form";
import PayCost from "./components/payCost";
import Cars from "./components/cars";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Form />
          <PayCost />
          <Cars />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
