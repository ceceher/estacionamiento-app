import React, { Component } from "react";
import CarData from "../data/cardata";

class TableCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  render() {
    console.log(CarData);
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
            {this.state.cars.map((cars, key) => {
              return (
                <tr key={key}>
                  <td>{cars.id}</td>
                  <td>{cars.placas}</td>
                  <td>{cars.modelo}</td>
                  <td>{cars.color}</td>
                  <td>{cars.fechaEntrada}</td>
                  <td>{cars.fechaSalida}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableCars;
