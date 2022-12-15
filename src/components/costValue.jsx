import React, { Component } from "react";

class CostValue extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <label className="cost-value">$20.00</label>
      </div>
    );
  }
}

export default CostValue;
