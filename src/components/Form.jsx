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
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    this.setState({
      placas: "",
      modelo: "",
      color: "",
    });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const { placas, modelo, color } = this.state;

    console.log(placas, modelo, color, moment().format("hh:mm:ss DD-MM-YYYY"));

    await DataStore.save(
      new Cars({
        placas: placas,
        modelo: modelo,
        color: color,
        fechaEntrada: moment().format("hh:mm:ss DD-MM-YYYY"),
        fechaSalida: "",
        status: "ACTIVE",
      })
    );

    this.handleReset();
  };

  render() {
    return (
      <form onSubmit={this.handleRegister} className="form">
        <label className="titlelabel">Nuevo auto</label>
        <Input
          ref={this.inputElement}
          name={"placas"}
          label={"Placas"}
          onChange={this.handleChange}
          value={this.state.placas}
        />
        <Input
          ref={this.inputElement}
          name={"modelo"}
          label={"Modelo"}
          onChange={this.handleChange}
          value={this.state.modelo}
        />
        <Input
          ref={this.inputElement}
          name={"color"}
          label={"Color"}
          onChange={this.handleChange}
          value={this.state.color}
        />

        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
    );
  }
}

export default Form;
