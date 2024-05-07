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
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface BatchMintMetadataInterface extends Interface {
  getFunction(
    nameOrSignature: "batchFrozen" | "getBaseURICount" | "getBatchIdAtIndex"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "BatchMetadataUpdate" | "MetadataFrozen"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchFrozen",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBaseURICount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBatchIdAtIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchFrozen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBaseURICount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBatchIdAtIndex",
    data: BytesLike
  ): Result;
}

export namespace BatchMetadataUpdateEvent {
  export type InputTuple = [
    _fromTokenId: BigNumberish,
    _toTokenId: BigNumberish
  ];
  export type OutputTuple = [_fromTokenId: bigint, _toTokenId: bigint];
  export interface OutputObject {
    _fromTokenId: bigint;
    _toTokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MetadataFrozenEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BatchMintMetadata extends BaseContract {
  connect(runner?: ContractRunner | null): BatchMintMetadata;
  waitForDeployment(): Promise<this>;

  interface: BatchMintMetadataInterface;

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

  batchFrozen: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

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
    nameOrSignature: "batchFrozen"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "getBaseURICount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBatchIdAtIndex"
  ): TypedContractMethod<[_index: BigNumberish], [bigint], "view">;

  getEvent(
    key: "BatchMetadataUpdate"
  ): TypedContractEvent<
    BatchMetadataUpdateEvent.InputTuple,
    BatchMetadataUpdateEvent.OutputTuple,
    BatchMetadataUpdateEvent.OutputObject
  >;
  getEvent(
    key: "MetadataFrozen"
  ): TypedContractEvent<
    MetadataFrozenEvent.InputTuple,
    MetadataFrozenEvent.OutputTuple,
    MetadataFrozenEvent.OutputObject
  >;

  filters: {
    "BatchMetadataUpdate(uint256,uint256)": TypedContractEvent<
      BatchMetadataUpdateEvent.InputTuple,
      BatchMetadataUpdateEvent.OutputTuple,
      BatchMetadataUpdateEvent.OutputObject
    >;
    BatchMetadataUpdate: TypedContractEvent<
      BatchMetadataUpdateEvent.InputTuple,
      BatchMetadataUpdateEvent.OutputTuple,
      BatchMetadataUpdateEvent.OutputObject
    >;

    "MetadataFrozen()": TypedContractEvent<
      MetadataFrozenEvent.InputTuple,
      MetadataFrozenEvent.OutputTuple,
      MetadataFrozenEvent.OutputObject
    >;
    MetadataFrozen: TypedContractEvent<
      MetadataFrozenEvent.InputTuple,
      MetadataFrozenEvent.OutputTuple,
      MetadataFrozenEvent.OutputObject
    >;
  };
}
