import React, { Component } from "react";
import { Amplify } from "@aws-amplify/core";
import awsconfig from "../src/aws-exports.js";
import "./styles.css";
import NavBar from "./components/navbar";
import { DataStore } from "aws-amplify";
import NewAndTable from "./components/NewAndTable.jsx";
import Information from "./components/information.jsx";

Amplify.configure(awsconfig);
DataStore.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="wrapper">
          <NewAndTable />
          <Information />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
