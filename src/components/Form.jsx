import React, { Component } from "react";
import Input from "./Input";
import validate from "../helpers/validations";

import { DataStore } from "@aws-amplify/datastore";
import { Cars } from "../models";

const carAdd = async (values) => await DataStore.save(new Cars({ ...values }));

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placas: {
        name: "placasInp",
        label: "placas",
        defaultValue: "",
        placeholder: "",
        inputValue: "",
        validationRules: {
          isRequired: true,
          minLenght: 2,
        },
      },
      color: {
        name: "colorInp",
        label: "color",
        defaultValue: "",
        placeholder: "",
        inputValue: "",
        validationRules: {
          isRequired: true,
          minLenght: 2,
        },
      },
      modelo: {
        name: "modeloInp",
        label: "modelo",
        defaultValue: "",
        placeholder: "",
        inputValue: "",
        validationRules: {
          isRequired: true,
          minLenght: 2,
        },
      },
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    const val = event.target.value;
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
          value={this.state.placas.inputValue}
        />
        <Input
          name={this.state.modelo.name}
          placeholder={this.state.modelo.placeholder}
          label={this.state.modelo.label}
          defaultValue={this.state.modelo.defaultValue}
          onChange={this.handleChange}
          value={this.state.modelo.inputValue}
        />
        <Input
          name={this.state.color.name}
          placeholder={this.state.color.placeholder}
          label={this.state.color.label}
          defaultValue={this.state.color.defaultValue}
          onChange={this.handleChange}
          value={this.state.color.inputValue}
        />

        <button
          onClick={carAdd(
            this.state.placas.value,
            this.state.modelo.value,
            this.state.color.value
          )}
          className="btn"
        >
          Registrar
        </button>
      </div>
    );
  }
}

export default Form;
