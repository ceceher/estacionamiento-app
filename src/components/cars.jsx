import React, { Component } from "react";
import { CarsTable } from "./carData";

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
          <CarsTable />
        </tbody>
      </table>
    );
  }
}

export default TableCars;
