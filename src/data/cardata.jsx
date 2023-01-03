import { DataStore } from "aws-amplify";
import { Cars } from "../models";

export default async function CarData() {
  const cardata = await DataStore.query(Cars);
  return cardata;
}
