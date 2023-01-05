import React, { Component } from "react";
import { Amplify } from "@aws-amplify/core";
import awsconfig from "../src/aws-exports.js";
import "./styles.css";
import NavBar from "./components/navbar";
import Form from "./components/Form";
import PayCost from "./components/payCost";
import { DataStore } from "aws-amplify";
import TableCars from "./components/cars.jsx";
import SelectedCar from "./components/selectedCar.jsx";

Amplify.configure(awsconfig);
DataStore.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div class="wrapper">
          <Form />
          <SelectedCar />
          <PayCost />
        </div>
        <TableCars class="cars-w" />
      </React.Fragment>
    );
  }
}

export default App;
