import React, { Component } from "react";

export default class LabelBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "",
    };
  }

  render() {
    return (
      <div>
        <label className="labelName">{this.props.label}</label>
        <label {...this.props} className="labelBlock">
          {this.props.value}
        </label>
        <br />
      </div>
    );
  }
}

LabelBlock.defaultProps = {
  label: "",
  name: "label",
  value: "",
};
