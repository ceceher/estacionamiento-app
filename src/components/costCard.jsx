import React, { Component } from "react";
import CostValue from "./costValue";

class CostCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="cost">
        <label className="label">Costo</label>
        <CostValue />
      </div>
    );
  }
}

export default CostCard;
