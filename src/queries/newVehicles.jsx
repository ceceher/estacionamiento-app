import { API } from "aws-amplify";
import { createVehiculos } from "./graphql/mutations";
import React, { Component } from "react";

// const newVehiculos = await API.graphql({
//   query: createVehiculos,
//   variables: {
//     input: {
//       placas: "Lorem ipsum dolor sit amet",
//       modelo: "Lorem ipsum dolor sit amet",
//       color: "Lorem ipsum dolor sit amet",
//       fechaEntrada: "1970-01-01Z",
//       fechaSalida: "1970-01-01Z",
//       horaEntrada: "12:30:23.999Z",
//       horaSalida: "12:30:23.999Z",
//     },
//   },
// });

class newVehiculos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placas: "",
      modelo: "",
      color: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        placas: this.state.placas,
        modelo: this.state.modelo,
        color: this.state.color,
      },
    });
  }

  render() {
    return <div></div>;
  }
}

export default newVehiculos;
