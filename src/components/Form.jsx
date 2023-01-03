import React, { Component } from "react";
import Input from "./Input";
import { DataStore } from "@aws-amplify/datastore";
import { Cars } from "../models";
import moment from "moment";

// const carAdd = async (values) => await DataStore.save(new Cars({ ...values }));

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
        [name]: value.toUpperCase(),
      }
      // () => {
      //   console.log(this.state);
      // }
    );
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const { placas, modelo, color } = this.state;

    console.log(
      placas,
      modelo,
      color,
      moment().format("YYYY-MM-DDThh:mm:ss.sssZ")
    );

    await DataStore.save(
      new Cars({
        placas: placas,
        modelo: modelo,
        color: color,
        fechaEntrada: moment().format("YYYY-MM-DDThh:mm:ss.sssZ"),
        fechaSalida: "",
      })
    );
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
