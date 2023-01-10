import React, { Component } from "react";
import Clock from "./todayDate";
import SelectedCar from "./selectedCar";

class Information extends Component {
  state = {};
  render() {
    return (
      <div className="information">
        <Clock />
        <SelectedCar />
      </div>
    );
  }
}

export default Information;
