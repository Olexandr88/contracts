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

export interface VRFV2WrapperConsumerBaseInterface extends Interface {
  getFunction(nameOrSignature: "rawFulfillRandomWords"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
}

export interface VRFV2WrapperConsumerBase extends BaseContract {
  connect(runner?: ContractRunner | null): VRFV2WrapperConsumerBase;
  waitForDeployment(): Promise<this>;

  interface: VRFV2WrapperConsumerBaseInterface;

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

  rawFulfillRandomWords: TypedContractMethod<
    [_requestId: BigNumberish, _randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "rawFulfillRandomWords"
  ): TypedContractMethod<
    [_requestId: BigNumberish, _randomWords: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  filters: {};
}
