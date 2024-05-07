/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
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
} from "../../../common";

export interface IPrimarySaleInterface extends Interface {
  getFunction(
    nameOrSignature: "primarySaleRecipient" | "setPrimarySaleRecipient"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "primarySaleRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPrimarySaleRecipient",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "primarySaleRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrimarySaleRecipient",
    data: BytesLike
  ): Result;
}

export namespace PrimarySaleRecipientUpdatedEvent {
  export type InputTuple = [recipient: AddressLike];
  export type OutputTuple = [recipient: string];
  export interface OutputObject {
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPrimarySale extends BaseContract {
  connect(runner?: ContractRunner | null): IPrimarySale;
  waitForDeployment(): Promise<this>;

  interface: IPrimarySaleInterface;

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

  primarySaleRecipient: TypedContractMethod<[], [string], "view">;

  setPrimarySaleRecipient: TypedContractMethod<
    [_saleRecipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "primarySaleRecipient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setPrimarySaleRecipient"
  ): TypedContractMethod<[_saleRecipient: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "PrimarySaleRecipientUpdated"
  ): TypedContractEvent<
    PrimarySaleRecipientUpdatedEvent.InputTuple,
    PrimarySaleRecipientUpdatedEvent.OutputTuple,
    PrimarySaleRecipientUpdatedEvent.OutputObject
  >;

  filters: {
    "PrimarySaleRecipientUpdated(address)": TypedContractEvent<
      PrimarySaleRecipientUpdatedEvent.InputTuple,
      PrimarySaleRecipientUpdatedEvent.OutputTuple,
      PrimarySaleRecipientUpdatedEvent.OutputObject
    >;
    PrimarySaleRecipientUpdated: TypedContractEvent<
      PrimarySaleRecipientUpdatedEvent.InputTuple,
      PrimarySaleRecipientUpdatedEvent.OutputTuple,
      PrimarySaleRecipientUpdatedEvent.OutputObject
    >;
  };
}
