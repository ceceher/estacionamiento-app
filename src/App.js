import React, { Component } from "react";
import "./styles.css";
import NavBar from "./components/navbar";
import Form from "./components/Form";
import CostCard from "./components/costCard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Form />
          <CostCard />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
