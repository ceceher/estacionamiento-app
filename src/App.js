import React, { Component } from "react";
import "./styles.css";
import NavBar from "./components/navbar";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Form />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
