/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
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
} from "../../../../common";

export interface RoyaltyInitInterface extends Interface {
  getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
}

export namespace DefaultRoyaltyEvent {
  export type InputTuple = [
    newRoyaltyRecipient: AddressLike,
    newRoyaltyBps: BigNumberish
  ];
  export type OutputTuple = [
    newRoyaltyRecipient: string,
    newRoyaltyBps: bigint
  ];
  export interface OutputObject {
    newRoyaltyRecipient: string;
    newRoyaltyBps: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RoyaltyInit extends BaseContract {
  connect(runner?: ContractRunner | null): RoyaltyInit;
  waitForDeployment(): Promise<this>;

  interface: RoyaltyInitInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "DefaultRoyalty"
  ): TypedContractEvent<
    DefaultRoyaltyEvent.InputTuple,
    DefaultRoyaltyEvent.OutputTuple,
    DefaultRoyaltyEvent.OutputObject
  >;

  filters: {
    "DefaultRoyalty(address,uint256)": TypedContractEvent<
      DefaultRoyaltyEvent.InputTuple,
      DefaultRoyaltyEvent.OutputTuple,
      DefaultRoyaltyEvent.OutputObject
    >;
    DefaultRoyalty: TypedContractEvent<
      DefaultRoyaltyEvent.InputTuple,
      DefaultRoyaltyEvent.OutputTuple,
      DefaultRoyaltyEvent.OutputObject
    >;
  };
}
