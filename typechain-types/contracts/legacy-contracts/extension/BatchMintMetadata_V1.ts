/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface BatchMintMetadata_V1Interface extends Interface {
  getFunction(
    nameOrSignature: "getBaseURICount" | "getBatchIdAtIndex"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBaseURICount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBatchIdAtIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBaseURICount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBatchIdAtIndex",
    data: BytesLike
  ): Result;
}

export interface BatchMintMetadata_V1 extends BaseContract {
  connect(runner?: ContractRunner | null): BatchMintMetadata_V1;
  waitForDeployment(): Promise<this>;

  interface: BatchMintMetadata_V1Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getBaseURICount: TypedContractMethod<[], [bigint], "view">;

  getBatchIdAtIndex: TypedContractMethod<
    [_index: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getBaseURICount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBatchIdAtIndex"
  ): TypedContractMethod<[_index: BigNumberish], [bigint], "view">;

  filters: {};
}
