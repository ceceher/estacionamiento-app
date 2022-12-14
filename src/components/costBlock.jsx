import React, { Component } from "react";
import PriceLabel from "./priceLabel";

class CostBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cost-wrap cost-block">
        <label>costo</label>
        <PriceLabel />
      </div>
    );
  }
}

export default CostBlock;
