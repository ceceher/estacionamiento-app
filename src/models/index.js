// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cars } = initSchema(schema);

export {
  Cars
};