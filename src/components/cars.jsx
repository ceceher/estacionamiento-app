import React, { Component } from "react";

class Cars extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    cars: [{ id: 1, placas: "fzg307b", modelo: "mazda2", color: "gris" }],
  };
  render() {
    return (
      <div className="cars table-wrap">
        <table>
          <tr>
            <th>Placas</th>
            <th>Modelo</th>
            <th>Color</th>
          </tr>
          {this.state.cars.map((cars, key) => {
            return (
              <tr key={key}>
                <td>{cars.placas}</td>
                <td>{cars.modelo}</td>
                <td>{cars.color}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Cars;
