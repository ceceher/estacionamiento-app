import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "form-group",
    };
  }

  render() {
    return (
      <div className={this.state.className}>
        <label>{this.props.label}</label>
        <input {...this.props} />
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
