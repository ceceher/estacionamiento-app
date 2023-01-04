import React, { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Cars } from "../models";

export const CarsTable = () => {
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

  return car.map((car) => (
    <tr key={car.id}>
      <td>{car.id}</td>
      <td>{car.placas}</td>
      <td>{car.modelo}</td>
      <td>{car.color}</td>
      <td>{car.fechaEntrada}</td>
      <td>{car.fechaSalida}</td>
    </tr>
  ));
};
