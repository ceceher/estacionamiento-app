import React, { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Cars } from "../models";
import moment, { parseTwoDigitYear } from "moment";

export const CarsTable = () => {
  const [car, updateCars] = useState([]);

  const [search, setSearch] = useState([]);
  const [today, setToday] = useState([]);

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

  const data = []
    .concat(car)
    .sort((a, b) => (a.fechaEntrada < b.fechaEntrada ? 1 : -1));
  //.filter(car.fechaEntrada >= moment().format("DD-MM-YYYY"));

  return data.map((car) => (
    <tr
      key={car.id}
      className={car.status === "ACTIVE" ? "activetr" : "inactivetr"}
      data-item={car}
    >
      <td>{car.placas}</td>
      <td>{car.modelo}</td>
      <td>{car.color}</td>
      <td>{car.fechaEntrada}</td>
      <td>{car.fechaSalida}</td>
    </tr>
  ));
};
