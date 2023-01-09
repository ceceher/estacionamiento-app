import React, { Component } from "react";
import Form from "./Form";
import TablePanel from "./tablePanel";

class NewAndTable extends Component {
  state = {};
  render() {
    return (
      <div className="NewAndTable">
        <Form />
        <TablePanel />
      </div>
    );
  }
}

export default NewAndTable;
