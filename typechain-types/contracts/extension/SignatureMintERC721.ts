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
} from "../../common";

export declare namespace ISignatureMintERC721 {
  export type MintRequestStruct = {
    to: AddressLike;
    royaltyRecipient: AddressLike;
    royaltyBps: BigNumberish;
    primarySaleRecipient: AddressLike;
    uri: string;
    quantity: BigNumberish;
    pricePerToken: BigNumberish;
    currency: AddressLike;
    validityStartTimestamp: BigNumberish;
    validityEndTimestamp: BigNumberish;
    uid: BytesLike;
  };

  export type MintRequestStructOutput = [
    to: string,
    royaltyRecipient: string,
    royaltyBps: bigint,
    primarySaleRecipient: string,
    uri: string,
    quantity: bigint,
    pricePerToken: bigint,
    currency: string,
    validityStartTimestamp: bigint,
    validityEndTimestamp: bigint,
    uid: string
  ] & {
    to: string;
    royaltyRecipient: string;
    royaltyBps: bigint;
    primarySaleRecipient: string;
    uri: string;
    quantity: bigint;
    pricePerToken: bigint;
    currency: string;
    validityStartTimestamp: bigint;
    validityEndTimestamp: bigint;
    uid: string;
  };
}

export interface SignatureMintERC721Interface extends Interface {
  getFunction(
    nameOrSignature: "mintWithSignature" | "verify"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "TokensMintedWithSignature"): EventFragment;

  encodeFunctionData(
    functionFragment: "mintWithSignature",
    values: [ISignatureMintERC721.MintRequestStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [ISignatureMintERC721.MintRequestStruct, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "mintWithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
}

export namespace TokensMintedWithSignatureEvent {
  export type InputTuple = [
    signer: AddressLike,
    mintedTo: AddressLike,
    tokenIdMinted: BigNumberish,
    mintRequest: ISignatureMintERC721.MintRequestStruct
  ];
  export type OutputTuple = [
    signer: string,
    mintedTo: string,
    tokenIdMinted: bigint,
    mintRequest: ISignatureMintERC721.MintRequestStructOutput
  ];
  export interface OutputObject {
    signer: string;
    mintedTo: string;
    tokenIdMinted: bigint;
    mintRequest: ISignatureMintERC721.MintRequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SignatureMintERC721 extends BaseContract {
  connect(runner?: ContractRunner | null): SignatureMintERC721;
  waitForDeployment(): Promise<this>;

  interface: SignatureMintERC721Interface;

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

  mintWithSignature: TypedContractMethod<
    [req: ISignatureMintERC721.MintRequestStruct, signature: BytesLike],
    [string],
    "payable"
  >;

  verify: TypedContractMethod<
    [_req: ISignatureMintERC721.MintRequestStruct, _signature: BytesLike],
    [[boolean, string] & { success: boolean; signer: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "mintWithSignature"
  ): TypedContractMethod<
    [req: ISignatureMintERC721.MintRequestStruct, signature: BytesLike],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "verify"
  ): TypedContractMethod<
    [_req: ISignatureMintERC721.MintRequestStruct, _signature: BytesLike],
    [[boolean, string] & { success: boolean; signer: string }],
    "view"
  >;

  getEvent(
    key: "TokensMintedWithSignature"
  ): TypedContractEvent<
    TokensMintedWithSignatureEvent.InputTuple,
    TokensMintedWithSignatureEvent.OutputTuple,
    TokensMintedWithSignatureEvent.OutputObject
  >;

  filters: {
    "TokensMintedWithSignature(address,address,uint256,tuple)": TypedContractEvent<
      TokensMintedWithSignatureEvent.InputTuple,
      TokensMintedWithSignatureEvent.OutputTuple,
      TokensMintedWithSignatureEvent.OutputObject
    >;
    TokensMintedWithSignature: TypedContractEvent<
      TokensMintedWithSignatureEvent.InputTuple,
      TokensMintedWithSignatureEvent.OutputTuple,
      TokensMintedWithSignatureEvent.OutputObject
    >;
  };
}
