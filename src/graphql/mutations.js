/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCars = /* GraphQL */ `
  mutation CreateCars(
    $input: CreateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    createCars(input: $input, condition: $condition) {
      id
      placas
      modelo
      color
      fechaEntrada
      fechaSalida
      status
      costo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCars = /* GraphQL */ `
  mutation UpdateCars(
    $input: UpdateCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    updateCars(input: $input, condition: $condition) {
      id
      placas
      modelo
      color
      fechaEntrada
      fechaSalida
      status
      costo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCars = /* GraphQL */ `
  mutation DeleteCars(
    $input: DeleteCarsInput!
    $condition: ModelCarsConditionInput
  ) {
    deleteCars(input: $input, condition: $condition) {
      id
      placas
      modelo
      color
      fechaEntrada
      fechaSalida
      status
      costo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
