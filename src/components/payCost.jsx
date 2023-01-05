import React, { Component } from "react";
import CostCard from "./costCard";
import Pay from "./pay";

class PayCost extends Component {
  state = {};
  render() {
    return (
      <div>
        <CostCard />
        <Pay />
      </div>
    );
  }
}

export default PayCost;
