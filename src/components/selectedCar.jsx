import React, { Component } from "react";

class SelectedCar extends Component {
  state = {};
  render() {
    return (
      <div className="selected">
        <label className="label">Seleccionado: </label> <br />
        <label className="label"> Placas</label> <br />
        <label className="label"> Modelo</label> <br />
        <label className="label"> Color</label> <br />
        <label className="label"> Entrada</label>
      </div>
    );
  }
}

export default SelectedCar;
