import React, { Component } from "react";
import { CarsTable } from "./carData";

class TableCars extends Component {
  render() {
    return (
      <div className="cars table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
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
      </div>
    );
  }
}

export default TableCars;
