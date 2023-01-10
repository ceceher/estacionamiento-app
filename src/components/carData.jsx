import React, { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Cars } from "../models";
import moment, { parseTwoDigitYear } from "moment";

export const CarData = ({ search, today }) => {
  const [car, updateCars] = useState([]);

  const fetchCars = async () => {
    const car = await DataStore.query(Cars);
    updateCars(car);
  };

  useEffect(() => {
    fetchCars();
    const subscription = DataStore.observe(Cars).subscribe(() => fetchCars());
    return () => {
      subscription.unsubscribe();
    };
  });

  const data = today
    ? []
        .concat(car)
        .sort((a, b) => (a.fechaEntrada < b.fechaEntrada ? 1 : -1))
        .filter((a) => moment().startOf("day").isBefore(a.fechaEntrada))
        .filter(
          (a) =>
            a.placas.includes(search) ||
            a.modelo.includes(search) ||
            a.color.includes(search)
        )
    : []
        .concat(car)
        .sort((a, b) => (a.fechaEntrada < b.fechaEntrada ? 1 : -1))
        .filter(
          (a) =>
            a.placas.includes(search) ||
            a.modelo.includes(search) ||
            a.color.includes(search)
        );

  return data.map((car) => (
    <tr
      key={car.id}
      className={car.status === "ACTIVE" ? "activetr" : "inactivetr"}
      data-item={car}
    >
      <td>{car.placas}</td>
      <td>{car.modelo}</td>
      <td>{car.color}</td>
      <td>{moment(car.fechaEntrada).format("hh:mm DD-MM-YYYY")}</td>
      <td>{car.fechaSalida}</td>
    </tr>
  ));
};
