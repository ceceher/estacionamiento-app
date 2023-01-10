import React, { Component } from "react";
import TableCars from "./cars";
import Input from "./Input";

class TablePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      today: true,
    };
    this.inputElement = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleToday = this.handleToday.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value.toUpperCase(),
    });
    console.log(this.state);
  }

  handleToday() {
    this.setState((prevState) => ({ today: !prevState.today }));
  }

  render() {
    return (
      <div className="tablePanel">
        <button className="btn" onClick={this.handleToday}>
          Mostrar {this.state.today && "Todo"}
          {!this.state.today && "Hoy"}
        </button>
        <Input
          ref={this.inputElement}
          name={"search"}
          label={"Buscar"}
          onChange={this.handleChange}
          value={this.state.search}
        />
        <TableCars today={this.state.today} search={this.state.search} />
      </div>
    );
  }
}

export default TablePanel;
