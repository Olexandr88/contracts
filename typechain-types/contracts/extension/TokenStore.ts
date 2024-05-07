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
} from "../../common";

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

export interface TokenStoreInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getTokenCountOfBundle"
      | "getTokenOfBundle"
      | "getUriOfBundle"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getTokenCountOfBundle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenOfBundle",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUriOfBundle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getTokenCountOfBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenOfBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUriOfBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
}

export interface TokenStore extends BaseContract {
  connect(runner?: ContractRunner | null): TokenStore;
  waitForDeployment(): Promise<this>;

  interface: TokenStoreInterface;

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

  getTokenCountOfBundle: TypedContractMethod<
    [_bundleId: BigNumberish],
    [bigint],
    "view"
  >;

  getTokenOfBundle: TypedContractMethod<
    [_bundleId: BigNumberish, index: BigNumberish],
    [ITokenBundle.TokenStructOutput],
    "view"
  >;

  getUriOfBundle: TypedContractMethod<
    [_bundleId: BigNumberish],
    [string],
    "view"
  >;

  onERC1155BatchReceived: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getTokenCountOfBundle"
  ): TypedContractMethod<[_bundleId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTokenOfBundle"
  ): TypedContractMethod<
    [_bundleId: BigNumberish, index: BigNumberish],
    [ITokenBundle.TokenStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUriOfBundle"
  ): TypedContractMethod<[_bundleId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  filters: {};
}
