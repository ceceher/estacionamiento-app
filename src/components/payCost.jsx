import React, { Component } from "react";
import CostCard from "./costCard";
import Pay from "./pay";

class PayCost extends Component {
  state = {};
  render() {
    return (
      <div className="payCost-block cost-wrap">
        <CostCard />
        <Pay />
      </div>
    );
  }
}

export default PayCost;
