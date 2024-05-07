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

export interface OperatorFiltererUpgradeableInterface extends Interface {
  getFunction(
    nameOrSignature: "operatorRestriction" | "setOperatorRestriction"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OperatorRestriction"): EventFragment;

  encodeFunctionData(
    functionFragment: "operatorRestriction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setOperatorRestriction",
    values: [boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "operatorRestriction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperatorRestriction",
    data: BytesLike
  ): Result;
}

export namespace OperatorRestrictionEvent {
  export type InputTuple = [restriction: boolean];
  export type OutputTuple = [restriction: boolean];
  export interface OutputObject {
    restriction: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OperatorFiltererUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): OperatorFiltererUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: OperatorFiltererUpgradeableInterface;

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

  operatorRestriction: TypedContractMethod<[], [boolean], "view">;

  setOperatorRestriction: TypedContractMethod<
    [_restriction: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "operatorRestriction"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "setOperatorRestriction"
  ): TypedContractMethod<[_restriction: boolean], [void], "nonpayable">;

  getEvent(
    key: "OperatorRestriction"
  ): TypedContractEvent<
    OperatorRestrictionEvent.InputTuple,
    OperatorRestrictionEvent.OutputTuple,
    OperatorRestrictionEvent.OutputObject
  >;

  filters: {
    "OperatorRestriction(bool)": TypedContractEvent<
      OperatorRestrictionEvent.InputTuple,
      OperatorRestrictionEvent.OutputTuple,
      OperatorRestrictionEvent.OutputObject
    >;
    OperatorRestriction: TypedContractEvent<
      OperatorRestrictionEvent.InputTuple,
      OperatorRestrictionEvent.OutputTuple,
      OperatorRestrictionEvent.OutputObject
    >;
  };
}
