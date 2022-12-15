/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCars = /* GraphQL */ `
  query GetCars($id: ID!) {
    getCars(id: $id) {
      id
      placas
      modelo
      color
      createdAt
      updatedAt
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        placas
        modelo
        color
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
