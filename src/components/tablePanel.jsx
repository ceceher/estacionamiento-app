import React, { Component } from "react";
import TableCars from "./cars";
import Input from "./Input";

class TablePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buscar: "",
    };
    this.inputElement = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  handleSearch() {
    const search = this.state.buscar.value;
    return search;
  }

  render() {
    return (
      <div className="tablePanel">
        <button className="btn"> Mostrar Todo</button>
        <button className="btn"> Mostrar Hoy</button>
        <Input
          ref={this.inputElement}
          name={"buscar"}
          label={"Buscar"}
          onChange={this.handleChange}
          value={this.state.buscar}
        />
        <TableCars />
      </div>
    );
  }
}

export default TablePanel;
