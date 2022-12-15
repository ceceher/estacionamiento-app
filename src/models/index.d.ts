import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerVehiculos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vehiculos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly placas: string;
  readonly modelo?: string | null;
  readonly color?: string | null;
  readonly fechaEntrada?: string | null;
  readonly fechaSalida?: string | null;
  readonly horaEntrada?: string | null;
  readonly horaSalida?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVehiculos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vehiculos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly placas: string;
  readonly modelo?: string | null;
  readonly color?: string | null;
  readonly fechaEntrada?: string | null;
  readonly fechaSalida?: string | null;
  readonly horaEntrada?: string | null;
  readonly horaSalida?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Vehiculos = LazyLoading extends LazyLoadingDisabled ? EagerVehiculos : LazyVehiculos

export declare const Vehiculos: (new (init: ModelInit<Vehiculos>) => Vehiculos) & {
  copyOf(source: Vehiculos, mutator: (draft: MutableModel<Vehiculos>) => MutableModel<Vehiculos> | void): Vehiculos;
}