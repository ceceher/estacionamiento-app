import React, { Component } from "react";

class PriceLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "price",
    };
  }
  render() {
    return (
      <div className={this.state.className}>
        <label id="selectedCostL" className="label">
          $20.00
        </label>
      </div>
    );
  }
}

export default PriceLabel;
