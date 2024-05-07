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

export declare namespace Airdrop {
  export type AirdropContentERC1155Struct = {
    recipient: AddressLike;
    tokenId: BigNumberish;
    amount: BigNumberish;
  };

  export type AirdropContentERC1155StructOutput = [
    recipient: string,
    tokenId: bigint,
    amount: bigint
  ] & { recipient: string; tokenId: bigint; amount: bigint };

  export type AirdropRequestERC1155Struct = {
    uid: BytesLike;
    tokenAddress: AddressLike;
    expirationTimestamp: BigNumberish;
    contents: Airdrop.AirdropContentERC1155Struct[];
  };

  export type AirdropRequestERC1155StructOutput = [
    uid: string,
    tokenAddress: string,
    expirationTimestamp: bigint,
    contents: Airdrop.AirdropContentERC1155StructOutput[]
  ] & {
    uid: string;
    tokenAddress: string;
    expirationTimestamp: bigint;
    contents: Airdrop.AirdropContentERC1155StructOutput[];
  };

  export type AirdropContentERC20Struct = {
    recipient: AddressLike;
    amount: BigNumberish;
  };

  export type AirdropContentERC20StructOutput = [
    recipient: string,
    amount: bigint
  ] & { recipient: string; amount: bigint };

  export type AirdropRequestERC20Struct = {
    uid: BytesLike;
    tokenAddress: AddressLike;
    expirationTimestamp: BigNumberish;
    contents: Airdrop.AirdropContentERC20Struct[];
  };

  export type AirdropRequestERC20StructOutput = [
    uid: string,
    tokenAddress: string,
    expirationTimestamp: bigint,
    contents: Airdrop.AirdropContentERC20StructOutput[]
  ] & {
    uid: string;
    tokenAddress: string;
    expirationTimestamp: bigint;
    contents: Airdrop.AirdropContentERC20StructOutput[];
  };

  export type AirdropContentERC721Struct = {
    recipient: AddressLike;
    tokenId: BigNumberish;
  };

  export type AirdropContentERC721StructOutput = [
    recipient: string,
    tokenId: bigint
  ] & { recipient: string; tokenId: bigint };

  export type AirdropRequestERC721Struct = {
    uid: BytesLike;
    tokenAddress: AddressLike;
    expirationTimestamp: BigNumberish;
    contents: Airdrop.AirdropContentERC721Struct[];
  };

  export type AirdropRequestERC721StructOutput = [
    uid: string,
    tokenAddress: string,
    expirationTimestamp: bigint,
    contents: Airdrop.AirdropContentERC721StructOutput[]
  ] & {
    uid: string;
    tokenAddress: string;
    expirationTimestamp: bigint;
    contents: Airdrop.AirdropContentERC721StructOutput[];
  };
}

export interface AirdropInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "airdropERC1155"
      | "airdropERC1155WithSignature"
      | "airdropERC20"
      | "airdropERC20WithSignature"
      | "airdropERC721"
      | "airdropERC721WithSignature"
      | "airdropNativeToken"
      | "claimERC1155"
      | "claimERC20"
      | "claimERC721"
      | "contractURI"
      | "eip712Domain"
      | "initialize"
      | "isClaimed"
      | "owner"
      | "processed"
      | "setContractURI"
      | "setMerkleRoot"
      | "setOwner"
      | "tokenConditionId"
      | "tokenMerkleRoot"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Airdrop"
      | "AirdropClaimed"
      | "AirdropWithSignature"
      | "ContractURIUpdated"
      | "Initialized"
      | "OwnerUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "airdropERC1155",
    values: [AddressLike, Airdrop.AirdropContentERC1155Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropERC1155WithSignature",
    values: [Airdrop.AirdropRequestERC1155Struct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropERC20",
    values: [AddressLike, Airdrop.AirdropContentERC20Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropERC20WithSignature",
    values: [Airdrop.AirdropRequestERC20Struct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropERC721",
    values: [AddressLike, Airdrop.AirdropContentERC721Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropERC721WithSignature",
    values: [Airdrop.AirdropRequestERC721Struct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropNativeToken",
    values: [Airdrop.AirdropContentERC20Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimERC1155",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimERC20",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimERC721",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleRoot",
    values: [AddressLike, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenConditionId",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenMerkleRoot",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "airdropERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropERC1155WithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropERC20WithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropERC721WithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropNativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimERC20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "processed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenConditionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenMerkleRoot",
    data: BytesLike
  ): Result;
}

export namespace AirdropEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AirdropClaimedEvent {
  export type InputTuple = [token: AddressLike, receiver: AddressLike];
  export type OutputTuple = [token: string, receiver: string];
  export interface OutputObject {
    token: string;
    receiver: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AirdropWithSignatureEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ContractURIUpdatedEvent {
  export type InputTuple = [prevURI: string, newURI: string];
  export type OutputTuple = [prevURI: string, newURI: string];
  export interface OutputObject {
    prevURI: string;
    newURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerUpdatedEvent {
  export type InputTuple = [prevOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [prevOwner: string, newOwner: string];
  export interface OutputObject {
    prevOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Airdrop extends BaseContract {
  connect(runner?: ContractRunner | null): Airdrop;
  waitForDeployment(): Promise<this>;

  interface: AirdropInterface;

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

  airdropERC1155: TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _contents: Airdrop.AirdropContentERC1155Struct[]
    ],
    [void],
    "nonpayable"
  >;

  airdropERC1155WithSignature: TypedContractMethod<
    [req: Airdrop.AirdropRequestERC1155Struct, signature: BytesLike],
    [void],
    "nonpayable"
  >;

  airdropERC20: TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _contents: Airdrop.AirdropContentERC20Struct[]
    ],
    [void],
    "nonpayable"
  >;

  airdropERC20WithSignature: TypedContractMethod<
    [req: Airdrop.AirdropRequestERC20Struct, signature: BytesLike],
    [void],
    "nonpayable"
  >;

  airdropERC721: TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _contents: Airdrop.AirdropContentERC721Struct[]
    ],
    [void],
    "nonpayable"
  >;

  airdropERC721WithSignature: TypedContractMethod<
    [req: Airdrop.AirdropRequestERC721Struct, signature: BytesLike],
    [void],
    "nonpayable"
  >;

  airdropNativeToken: TypedContractMethod<
    [_contents: Airdrop.AirdropContentERC20Struct[]],
    [void],
    "payable"
  >;

  claimERC1155: TypedContractMethod<
    [
      _token: AddressLike,
      _receiver: AddressLike,
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _proofs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  claimERC20: TypedContractMethod<
    [
      _token: AddressLike,
      _receiver: AddressLike,
      _quantity: BigNumberish,
      _proofs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  claimERC721: TypedContractMethod<
    [
      _token: AddressLike,
      _receiver: AddressLike,
      _tokenId: BigNumberish,
      _proofs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  contractURI: TypedContractMethod<[], [string], "view">;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  initialize: TypedContractMethod<
    [_defaultAdmin: AddressLike, _contractURI: string],
    [void],
    "nonpayable"
  >;

  isClaimed: TypedContractMethod<
    [_receiver: AddressLike, _token: AddressLike, _tokenId: BigNumberish],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  processed: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  setContractURI: TypedContractMethod<[_uri: string], [void], "nonpayable">;

  setMerkleRoot: TypedContractMethod<
    [
      _token: AddressLike,
      _tokenMerkleRoot: BytesLike,
      _resetClaimStatus: boolean
    ],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;

  tokenConditionId: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  tokenMerkleRoot: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "airdropERC1155"
  ): TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _contents: Airdrop.AirdropContentERC1155Struct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "airdropERC1155WithSignature"
  ): TypedContractMethod<
    [req: Airdrop.AirdropRequestERC1155Struct, signature: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "airdropERC20"
  ): TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _contents: Airdrop.AirdropContentERC20Struct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "airdropERC20WithSignature"
  ): TypedContractMethod<
    [req: Airdrop.AirdropRequestERC20Struct, signature: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "airdropERC721"
  ): TypedContractMethod<
    [
      _tokenAddress: AddressLike,
      _contents: Airdrop.AirdropContentERC721Struct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "airdropERC721WithSignature"
  ): TypedContractMethod<
    [req: Airdrop.AirdropRequestERC721Struct, signature: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "airdropNativeToken"
  ): TypedContractMethod<
    [_contents: Airdrop.AirdropContentERC20Struct[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "claimERC1155"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _receiver: AddressLike,
      _tokenId: BigNumberish,
      _quantity: BigNumberish,
      _proofs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimERC20"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _receiver: AddressLike,
      _quantity: BigNumberish,
      _proofs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimERC721"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _receiver: AddressLike,
      _tokenId: BigNumberish,
      _proofs: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "contractURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_defaultAdmin: AddressLike, _contractURI: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isClaimed"
  ): TypedContractMethod<
    [_receiver: AddressLike, _token: AddressLike, _tokenId: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "processed"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "setContractURI"
  ): TypedContractMethod<[_uri: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMerkleRoot"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _tokenMerkleRoot: BytesLike,
      _resetClaimStatus: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "tokenConditionId"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokenMerkleRoot"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;

  getEvent(
    key: "Airdrop"
  ): TypedContractEvent<
    AirdropEvent.InputTuple,
    AirdropEvent.OutputTuple,
    AirdropEvent.OutputObject
  >;
  getEvent(
    key: "AirdropClaimed"
  ): TypedContractEvent<
    AirdropClaimedEvent.InputTuple,
    AirdropClaimedEvent.OutputTuple,
    AirdropClaimedEvent.OutputObject
  >;
  getEvent(
    key: "AirdropWithSignature"
  ): TypedContractEvent<
    AirdropWithSignatureEvent.InputTuple,
    AirdropWithSignatureEvent.OutputTuple,
    AirdropWithSignatureEvent.OutputObject
  >;
  getEvent(
    key: "ContractURIUpdated"
  ): TypedContractEvent<
    ContractURIUpdatedEvent.InputTuple,
    ContractURIUpdatedEvent.OutputTuple,
    ContractURIUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnerUpdated"
  ): TypedContractEvent<
    OwnerUpdatedEvent.InputTuple,
    OwnerUpdatedEvent.OutputTuple,
    OwnerUpdatedEvent.OutputObject
  >;

  filters: {
    "Airdrop(address)": TypedContractEvent<
      AirdropEvent.InputTuple,
      AirdropEvent.OutputTuple,
      AirdropEvent.OutputObject
    >;
    Airdrop: TypedContractEvent<
      AirdropEvent.InputTuple,
      AirdropEvent.OutputTuple,
      AirdropEvent.OutputObject
    >;

    "AirdropClaimed(address,address)": TypedContractEvent<
      AirdropClaimedEvent.InputTuple,
      AirdropClaimedEvent.OutputTuple,
      AirdropClaimedEvent.OutputObject
    >;
    AirdropClaimed: TypedContractEvent<
      AirdropClaimedEvent.InputTuple,
      AirdropClaimedEvent.OutputTuple,
      AirdropClaimedEvent.OutputObject
    >;

    "AirdropWithSignature(address)": TypedContractEvent<
      AirdropWithSignatureEvent.InputTuple,
      AirdropWithSignatureEvent.OutputTuple,
      AirdropWithSignatureEvent.OutputObject
    >;
    AirdropWithSignature: TypedContractEvent<
      AirdropWithSignatureEvent.InputTuple,
      AirdropWithSignatureEvent.OutputTuple,
      AirdropWithSignatureEvent.OutputObject
    >;

    "ContractURIUpdated(string,string)": TypedContractEvent<
      ContractURIUpdatedEvent.InputTuple,
      ContractURIUpdatedEvent.OutputTuple,
      ContractURIUpdatedEvent.OutputObject
    >;
    ContractURIUpdated: TypedContractEvent<
      ContractURIUpdatedEvent.InputTuple,
      ContractURIUpdatedEvent.OutputTuple,
      ContractURIUpdatedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnerUpdated(address,address)": TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;
    OwnerUpdated: TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;
  };
}
