import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placas: {
        name: "placas",
        label: "placas",
        defaultValue: "",
        placeholder: "placas...",
      },
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: { ...this.state.name, value },
    });
  }

  render() {
    return (
      <div className="container">
        <Input
          name={this.state.placas.name}
          placeholder={this.state.placas.placeholder}
          label={this.state.placas.label}
          defaultValue={this.state.placas.defaultValue}
        />
      </div>
    );
  }
}

export default Form;
