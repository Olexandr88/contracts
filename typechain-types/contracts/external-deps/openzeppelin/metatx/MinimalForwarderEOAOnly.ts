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
  AddressLike,
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
} from "../../../../common";

export declare namespace MinimalForwarderEOAOnly {
  export type ForwardRequestStruct = {
    from: AddressLike;
    to: AddressLike;
    value: BigNumberish;
    gas: BigNumberish;
    nonce: BigNumberish;
    data: BytesLike;
  };

  export type ForwardRequestStructOutput = [
    from: string,
    to: string,
    value: bigint,
    gas: bigint,
    nonce: bigint,
    data: string
  ] & {
    from: string;
    to: string;
    value: bigint;
    gas: bigint;
    nonce: bigint;
    data: string;
  };
}

export interface MinimalForwarderEOAOnlyInterface extends Interface {
  getFunction(
    nameOrSignature: "execute" | "getNonce" | "verify"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [MinimalForwarderEOAOnly.ForwardRequestStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNonce",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [MinimalForwarderEOAOnly.ForwardRequestStruct, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
}

export interface MinimalForwarderEOAOnly extends BaseContract {
  connect(runner?: ContractRunner | null): MinimalForwarderEOAOnly;
  waitForDeployment(): Promise<this>;

  interface: MinimalForwarderEOAOnlyInterface;

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

  execute: TypedContractMethod<
    [req: MinimalForwarderEOAOnly.ForwardRequestStruct, signature: BytesLike],
    [[boolean, string]],
    "payable"
  >;

  getNonce: TypedContractMethod<[from: AddressLike], [bigint], "view">;

  verify: TypedContractMethod<
    [req: MinimalForwarderEOAOnly.ForwardRequestStruct, signature: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [req: MinimalForwarderEOAOnly.ForwardRequestStruct, signature: BytesLike],
    [[boolean, string]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getNonce"
  ): TypedContractMethod<[from: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "verify"
  ): TypedContractMethod<
    [req: MinimalForwarderEOAOnly.ForwardRequestStruct, signature: BytesLike],
    [boolean],
    "view"
  >;

  filters: {};
}
