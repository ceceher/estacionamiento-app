import React, { Component } from "react";
import LabelBlock from "./labelBlock";

class SelectedCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placas: "placasA",
      modelo: "modeloA",
      color: "AZUL",
      entrada: "hh:mm:ss DD-MM-YYYY",
      salida: "hh:mm:ss DD-MM-YYYY",
      costo: "$20.00",
    };
  }

  render() {
    return (
      <div className="selected">
        <label className="titlelabel">Seleccionado </label>
        <br />
        <LabelBlock label={"Placas"} value={this.state.placas} />
        <LabelBlock label={"Modelo"} value={this.state.modelo} />
        <LabelBlock label={"Color"} value={this.state.color} />
        <LabelBlock label={"Entrada"} value={this.state.entrada} />
        <LabelBlock label={"Salida"} value={this.state.salida} />
        <label className="cost-value">{this.state.costo}</label>
        <br />
        <button className="btn-Pay">Cobrar</button>
      </div>
    );
  }
}

export default SelectedCar;
