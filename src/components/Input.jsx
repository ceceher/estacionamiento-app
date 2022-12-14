import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "",
    };
  }
  render() {
    const className =
      !this.props.touched || this.props.valid ? "input" : "input control-error";
    return (
      <div className={this.state.className}>
        <label className="label">{this.props.label}</label> <br />
        <input {...this.props} className={className} />
      </div>
    );
  }
}

Input.defaultProps = {
  type: "text",
  label: "",
  name: "input",
  placehoder: "",
  defaultValue: "",
};
