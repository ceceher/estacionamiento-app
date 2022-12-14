import React, { Component } from "react";
import Input from "./Input";
import validate from "../helpers/validations";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placas: {
        name: "placas",
        label: "placas",
        defaultValue: "",
        placeholder: "",
        validationRules: {
          isRequired: true,
          minLenght: 2,
        },
      },
      color: {
        name: "color",
        label: "color",
        defaultValue: "",
        placeholder: "",
        validationRules: {
          isRequired: true,
          minLenght: 2,
        },
      },
      modelo: {
        name: "modelo",
        label: "modelo",
        defaultValue: "",
        placeholder: "",
        validationRules: {
          isRequired: true,
          minLenght: 2,
        },
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
      <div className="form form-wrap">
        <Input
          name={this.state.placas.name}
          placeholder={this.state.placas.placeholder}
          label={this.state.placas.label}
          defaultValue={this.state.placas.defaultValue}
          onChange={this.handleChange}
        />
        <Input
          name={this.state.modelo.name}
          placeholder={this.state.modelo.placeholder}
          label={this.state.modelo.label}
          defaultValue={this.state.modelo.defaultValue}
          onChange={this.handleChange}
        />
        <Input
          name={this.state.color.name}
          placeholder={this.state.color.placeholder}
          label={this.state.color.label}
          defaultValue={this.state.color.defaultValue}
          onChange={this.handleChange}
        />

        <button className="btn">Registrar</button>
      </div>
    );
  }
}

export default Form;
