import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCars = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cars, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly placas: string;
  readonly modelo: string;
  readonly color: string;
  readonly fechaEntrada: string;
  readonly fechaSalida: string;
  readonly status?: string | null;
  readonly costo?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCars = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cars, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly placas: string;
  readonly modelo: string;
  readonly color: string;
  readonly fechaEntrada: string;
  readonly fechaSalida: string;
  readonly status?: string | null;
  readonly costo?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cars = LazyLoading extends LazyLoadingDisabled ? EagerCars : LazyCars

export declare const Cars: (new (init: ModelInit<Cars>) => Cars) & {
  copyOf(source: Cars, mutator: (draft: MutableModel<Cars>) => MutableModel<Cars> | void): Cars;
}