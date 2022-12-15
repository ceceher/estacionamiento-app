// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vehiculos } = initSchema(schema);

export {
  Vehiculos
};