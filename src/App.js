import React, { Component } from "react";
import "./styles.css";
import NavBar from "./components/navbar";
import Form from "./components/Form";
import CostBlock from "./components/costBlock";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Form />
          <CostBlock />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
