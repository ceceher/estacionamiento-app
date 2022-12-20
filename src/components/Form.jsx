import React, { Component, createRef } from "react";
import Input from "./Input";

import { DataStore } from "@aws-amplify/datastore";
import { Cars } from "../models";

const carAdd = async (values) => await DataStore.save(new Cars({ ...values }));

const inputParsers = {
  uppercase(input) {
    return input.toUpperCase();
  },
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placas: "",
      modelo: "",
      color: "",
    };
    this.inputElement = React.createRef();
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleRegister = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleRegister} className="form form-wrap">
        <Input
          ref={this.inputElement}
          type={"text"}
          name={"placas"}
          label={"placas"}
          onChange={this.handleChange}
          defaultValue={this.state.placas}
        />
        <Input
          ref={this.inputElement}
          type={"text"}
          name={"modelo"}
          label={"modelo"}
          onChange={this.handleChange}
          defaultValue={this.state.modelo}
        />
        <Input
          ref={this.inputElement}
          type={"text"}
          name={"color"}
          label={"color"}
          onChange={this.handleChange}
          defaultValue={this.state.color}
        />

        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
    );
  }
}

export default Form;
