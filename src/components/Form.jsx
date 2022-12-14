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
        valid: 0,
        touched: 0,
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
        valid: 0,
        touched: 0,
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
        valid: 0,
        touched: 0,
        validationRules: {
          isRequired: true,
          minLenght: 2,
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const valid = validate(value, this.state[name].validationRules);
    const touched = 1;

    this.setState((state, props) => ({
      ...state,
      [name]: { ...state[name], value, valid, touched },
    }));
  }

  render() {
    return (
      <div className="block form-wrap">
        <Input
          valid={this.state.placas.valid}
          touched={this.state.placas.touched}
          name={this.state.placas.name}
          placeholder={this.state.placas.placeholder}
          label={this.state.placas.label}
          defaultValue={this.state.placas.defaultValue}
          onChange={this.handleChange}
        />
        <Input
          valid={this.state.modelo.valid}
          touched={this.state.modelo.touched}
          name={this.state.modelo.name}
          placeholder={this.state.modelo.placeholder}
          label={this.state.modelo.label}
          defaultValue={this.state.modelo.defaultValue}
          onChange={this.handleChange}
        />
        <Input
          valid={this.state.color.valid}
          touched={this.state.color.touched}
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
