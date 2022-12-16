import React, { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Cars } from "../models";

const carAdd = async (values) => await DataStore.save(new Cars({ ...values }));
