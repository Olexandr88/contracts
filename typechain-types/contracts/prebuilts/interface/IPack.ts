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

export declare namespace ITokenBundle {
  export type TokenStruct = {
    assetContract: AddressLike;
    tokenType: BigNumberish;
    tokenId: BigNumberish;
    totalAmount: BigNumberish;
  };

  export type TokenStructOutput = [
    assetContract: string,
    tokenType: bigint,
    tokenId: bigint,
    totalAmount: bigint
  ] & {
    assetContract: string;
    tokenType: bigint;
    tokenId: bigint;
    totalAmount: bigint;
  };
}

export interface IPackInterface extends Interface {
  getFunction(nameOrSignature: "createPack" | "openPack"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "PackCreated" | "PackOpened" | "PackUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createPack",
    values: [
      ITokenBundle.TokenStruct[],
      BigNumberish[],
      string,
      BigNumberish,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openPack",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "createPack", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openPack", data: BytesLike): Result;
}

export namespace PackCreatedEvent {
  export type InputTuple = [
    packId: BigNumberish,
    recipient: AddressLike,
    totalPacksCreated: BigNumberish
  ];
  export type OutputTuple = [
    packId: bigint,
    recipient: string,
    totalPacksCreated: bigint
  ];
  export interface OutputObject {
    packId: bigint;
    recipient: string;
    totalPacksCreated: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PackOpenedEvent {
  export type InputTuple = [
    packId: BigNumberish,
    opener: AddressLike,
    numOfPacksOpened: BigNumberish,
    rewardUnitsDistributed: ITokenBundle.TokenStruct[]
  ];
  export type OutputTuple = [
    packId: bigint,
    opener: string,
    numOfPacksOpened: bigint,
    rewardUnitsDistributed: ITokenBundle.TokenStructOutput[]
  ];
  export interface OutputObject {
    packId: bigint;
    opener: string;
    numOfPacksOpened: bigint;
    rewardUnitsDistributed: ITokenBundle.TokenStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PackUpdatedEvent {
  export type InputTuple = [
    packId: BigNumberish,
    recipient: AddressLike,
    totalPacksCreated: BigNumberish
  ];
  export type OutputTuple = [
    packId: bigint,
    recipient: string,
    totalPacksCreated: bigint
  ];
  export interface OutputObject {
    packId: bigint;
    recipient: string;
    totalPacksCreated: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IPack extends BaseContract {
  connect(runner?: ContractRunner | null): IPack;
  waitForDeployment(): Promise<this>;

  interface: IPackInterface;

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

  createPack: TypedContractMethod<
    [
      contents: ITokenBundle.TokenStruct[],
      numOfRewardUnits: BigNumberish[],
      packUri: string,
      openStartTimestamp: BigNumberish,
      amountDistributedPerOpen: BigNumberish,
      recipient: AddressLike
    ],
    [[bigint, bigint] & { packId: bigint; packTotalSupply: bigint }],
    "payable"
  >;

  openPack: TypedContractMethod<
    [packId: BigNumberish, amountToOpen: BigNumberish],
    [ITokenBundle.TokenStructOutput[]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createPack"
  ): TypedContractMethod<
    [
      contents: ITokenBundle.TokenStruct[],
      numOfRewardUnits: BigNumberish[],
      packUri: string,
      openStartTimestamp: BigNumberish,
      amountDistributedPerOpen: BigNumberish,
      recipient: AddressLike
    ],
    [[bigint, bigint] & { packId: bigint; packTotalSupply: bigint }],
    "payable"
  >;
  getFunction(
    nameOrSignature: "openPack"
  ): TypedContractMethod<
    [packId: BigNumberish, amountToOpen: BigNumberish],
    [ITokenBundle.TokenStructOutput[]],
    "nonpayable"
  >;

  getEvent(
    key: "PackCreated"
  ): TypedContractEvent<
    PackCreatedEvent.InputTuple,
    PackCreatedEvent.OutputTuple,
    PackCreatedEvent.OutputObject
  >;
  getEvent(
    key: "PackOpened"
  ): TypedContractEvent<
    PackOpenedEvent.InputTuple,
    PackOpenedEvent.OutputTuple,
    PackOpenedEvent.OutputObject
  >;
  getEvent(
    key: "PackUpdated"
  ): TypedContractEvent<
    PackUpdatedEvent.InputTuple,
    PackUpdatedEvent.OutputTuple,
    PackUpdatedEvent.OutputObject
  >;

  filters: {
    "PackCreated(uint256,address,uint256)": TypedContractEvent<
      PackCreatedEvent.InputTuple,
      PackCreatedEvent.OutputTuple,
      PackCreatedEvent.OutputObject
    >;
    PackCreated: TypedContractEvent<
      PackCreatedEvent.InputTuple,
      PackCreatedEvent.OutputTuple,
      PackCreatedEvent.OutputObject
    >;

    "PackOpened(uint256,address,uint256,tuple[])": TypedContractEvent<
      PackOpenedEvent.InputTuple,
      PackOpenedEvent.OutputTuple,
      PackOpenedEvent.OutputObject
    >;
    PackOpened: TypedContractEvent<
      PackOpenedEvent.InputTuple,
      PackOpenedEvent.OutputTuple,
      PackOpenedEvent.OutputObject
    >;

    "PackUpdated(uint256,address,uint256)": TypedContractEvent<
      PackUpdatedEvent.InputTuple,
      PackUpdatedEvent.OutputTuple,
      PackUpdatedEvent.OutputObject
    >;
    PackUpdated: TypedContractEvent<
      PackUpdatedEvent.InputTuple,
      PackUpdatedEvent.OutputTuple,
      PackUpdatedEvent.OutputObject
    >;
  };
}
