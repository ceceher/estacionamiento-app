import React, { Component } from "react";
import { CarData } from "./carData";

class TableCars extends Component {
  render() {
    return (
      <table className="cars">
        <thead>
          <tr>
            <th>Placas</th>
            <th>Modelo</th>
            <th>Color</th>
            <th>Entrada</th>
            <th>Salida</th>
          </tr>
        </thead>
        <tbody>
          <CarData today={this.props.today} search={this.props.search} />
        </tbody>
      </table>
    );
  }
}

export default TableCars;
