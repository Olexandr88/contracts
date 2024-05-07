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

export interface NFTStakeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "claimRewards"
      | "contractType"
      | "contractURI"
      | "contractVersion"
      | "depositRewardTokens"
      | "getRewardTokenBalance"
      | "getRewardsPerUnitTime"
      | "getRoleAdmin"
      | "getRoleMember"
      | "getRoleMemberCount"
      | "getStakeInfo"
      | "getTimeUnit"
      | "grantRole"
      | "hasRole"
      | "hasRoleWithSwitch"
      | "indexedTokens"
      | "initialize"
      | "isIndexed"
      | "isTrustedForwarder"
      | "multicall"
      | "onERC721Received"
      | "renounceRole"
      | "revokeRole"
      | "rewardToken"
      | "setContractURI"
      | "setRewardsPerUnitTime"
      | "setTimeUnit"
      | "stake"
      | "stakerAddress"
      | "stakers"
      | "stakersArray"
      | "stakingToken"
      | "supportsInterface"
      | "withdraw"
      | "withdrawRewardTokens"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ContractURIUpdated"
      | "Initialized"
      | "RewardTokensDepositedByAdmin"
      | "RewardTokensWithdrawnByAdmin"
      | "RewardsClaimed"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "TokensStaked"
      | "TokensWithdrawn"
      | "UpdatedRewardsPerUnitTime"
      | "UpdatedTimeUnit"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositRewardTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsPerUnitTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimeUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRoleWithSwitch",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "indexedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      string,
      AddressLike[],
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isIndexed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsPerUnitTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTimeUnit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "stakerAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakersArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRewardTokens",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositRewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsPerUnitTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasRoleWithSwitch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isIndexed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsPerUnitTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTimeUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakersArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRewardTokens",
    data: BytesLike
  ): Result;
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

export namespace RewardTokensDepositedByAdminEvent {
  export type InputTuple = [_amount: BigNumberish];
  export type OutputTuple = [_amount: bigint];
  export interface OutputObject {
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardTokensWithdrawnByAdminEvent {
  export type InputTuple = [_amount: BigNumberish];
  export type OutputTuple = [_amount: bigint];
  export interface OutputObject {
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardsClaimedEvent {
  export type InputTuple = [staker: AddressLike, rewardAmount: BigNumberish];
  export type OutputTuple = [staker: string, rewardAmount: bigint];
  export interface OutputObject {
    staker: string;
    rewardAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensStakedEvent {
  export type InputTuple = [staker: AddressLike, tokenIds: BigNumberish[]];
  export type OutputTuple = [staker: string, tokenIds: bigint[]];
  export interface OutputObject {
    staker: string;
    tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensWithdrawnEvent {
  export type InputTuple = [staker: AddressLike, tokenIds: BigNumberish[]];
  export type OutputTuple = [staker: string, tokenIds: bigint[]];
  export interface OutputObject {
    staker: string;
    tokenIds: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedRewardsPerUnitTimeEvent {
  export type InputTuple = [
    oldRewardsPerUnitTime: BigNumberish,
    newRewardsPerUnitTime: BigNumberish
  ];
  export type OutputTuple = [
    oldRewardsPerUnitTime: bigint,
    newRewardsPerUnitTime: bigint
  ];
  export interface OutputObject {
    oldRewardsPerUnitTime: bigint;
    newRewardsPerUnitTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedTimeUnitEvent {
  export type InputTuple = [
    oldTimeUnit: BigNumberish,
    newTimeUnit: BigNumberish
  ];
  export type OutputTuple = [oldTimeUnit: bigint, newTimeUnit: bigint];
  export interface OutputObject {
    oldTimeUnit: bigint;
    newTimeUnit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NFTStake extends BaseContract {
  connect(runner?: ContractRunner | null): NFTStake;
  waitForDeployment(): Promise<this>;

  interface: NFTStakeInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  claimRewards: TypedContractMethod<[], [void], "nonpayable">;

  contractType: TypedContractMethod<[], [string], "view">;

  contractURI: TypedContractMethod<[], [string], "view">;

  contractVersion: TypedContractMethod<[], [bigint], "view">;

  depositRewardTokens: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "payable"
  >;

  getRewardTokenBalance: TypedContractMethod<[], [bigint], "view">;

  getRewardsPerUnitTime: TypedContractMethod<[], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getRoleMember: TypedContractMethod<
    [role: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;

  getRoleMemberCount: TypedContractMethod<[role: BytesLike], [bigint], "view">;

  getStakeInfo: TypedContractMethod<
    [_staker: AddressLike],
    [[bigint[], bigint] & { _tokensStaked: bigint[]; _rewards: bigint }],
    "view"
  >;

  getTimeUnit: TypedContractMethod<[], [bigint], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  hasRoleWithSwitch: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  indexedTokens: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      _defaultAdmin: AddressLike,
      _contractURI: string,
      _trustedForwarders: AddressLike[],
      _rewardToken: AddressLike,
      _stakingToken: AddressLike,
      _timeUnit: BigNumberish,
      _rewardsPerUnitTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  isIndexed: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "view"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardToken: TypedContractMethod<[], [string], "view">;

  setContractURI: TypedContractMethod<[_uri: string], [void], "nonpayable">;

  setRewardsPerUnitTime: TypedContractMethod<
    [_rewardsPerUnitTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTimeUnit: TypedContractMethod<
    [_timeUnit: BigNumberish],
    [void],
    "nonpayable"
  >;

  stake: TypedContractMethod<[_tokenIds: BigNumberish[]], [void], "nonpayable">;

  stakerAddress: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  stakers: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        amountStaked: bigint;
        conditionIdOflastUpdate: bigint;
        timeOfLastUpdate: bigint;
        unclaimedRewards: bigint;
      }
    ],
    "view"
  >;

  stakersArray: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  stakingToken: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  withdraw: TypedContractMethod<
    [_tokenIds: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  withdrawRewardTokens: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claimRewards"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "contractType"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "contractURI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "contractVersion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "depositRewardTokens"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "getRewardTokenBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRewardsPerUnitTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleMember"
  ): TypedContractMethod<
    [role: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleMemberCount"
  ): TypedContractMethod<[role: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStakeInfo"
  ): TypedContractMethod<
    [_staker: AddressLike],
    [[bigint[], bigint] & { _tokensStaked: bigint[]; _rewards: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTimeUnit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasRoleWithSwitch"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "indexedTokens"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _defaultAdmin: AddressLike,
      _contractURI: string,
      _trustedForwarders: AddressLike[],
      _rewardToken: AddressLike,
      _stakingToken: AddressLike,
      _timeUnit: BigNumberish,
      _rewardsPerUnitTime: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isIndexed"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rewardToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setContractURI"
  ): TypedContractMethod<[_uri: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardsPerUnitTime"
  ): TypedContractMethod<
    [_rewardsPerUnitTime: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTimeUnit"
  ): TypedContractMethod<[_timeUnit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[_tokenIds: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakerAddress"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "stakers"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        amountStaked: bigint;
        conditionIdOflastUpdate: bigint;
        timeOfLastUpdate: bigint;
        unclaimedRewards: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "stakersArray"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "stakingToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[_tokenIds: BigNumberish[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawRewardTokens"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

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
    key: "RewardTokensDepositedByAdmin"
  ): TypedContractEvent<
    RewardTokensDepositedByAdminEvent.InputTuple,
    RewardTokensDepositedByAdminEvent.OutputTuple,
    RewardTokensDepositedByAdminEvent.OutputObject
  >;
  getEvent(
    key: "RewardTokensWithdrawnByAdmin"
  ): TypedContractEvent<
    RewardTokensWithdrawnByAdminEvent.InputTuple,
    RewardTokensWithdrawnByAdminEvent.OutputTuple,
    RewardTokensWithdrawnByAdminEvent.OutputObject
  >;
  getEvent(
    key: "RewardsClaimed"
  ): TypedContractEvent<
    RewardsClaimedEvent.InputTuple,
    RewardsClaimedEvent.OutputTuple,
    RewardsClaimedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "TokensStaked"
  ): TypedContractEvent<
    TokensStakedEvent.InputTuple,
    TokensStakedEvent.OutputTuple,
    TokensStakedEvent.OutputObject
  >;
  getEvent(
    key: "TokensWithdrawn"
  ): TypedContractEvent<
    TokensWithdrawnEvent.InputTuple,
    TokensWithdrawnEvent.OutputTuple,
    TokensWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedRewardsPerUnitTime"
  ): TypedContractEvent<
    UpdatedRewardsPerUnitTimeEvent.InputTuple,
    UpdatedRewardsPerUnitTimeEvent.OutputTuple,
    UpdatedRewardsPerUnitTimeEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedTimeUnit"
  ): TypedContractEvent<
    UpdatedTimeUnitEvent.InputTuple,
    UpdatedTimeUnitEvent.OutputTuple,
    UpdatedTimeUnitEvent.OutputObject
  >;

  filters: {
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

    "RewardTokensDepositedByAdmin(uint256)": TypedContractEvent<
      RewardTokensDepositedByAdminEvent.InputTuple,
      RewardTokensDepositedByAdminEvent.OutputTuple,
      RewardTokensDepositedByAdminEvent.OutputObject
    >;
    RewardTokensDepositedByAdmin: TypedContractEvent<
      RewardTokensDepositedByAdminEvent.InputTuple,
      RewardTokensDepositedByAdminEvent.OutputTuple,
      RewardTokensDepositedByAdminEvent.OutputObject
    >;

    "RewardTokensWithdrawnByAdmin(uint256)": TypedContractEvent<
      RewardTokensWithdrawnByAdminEvent.InputTuple,
      RewardTokensWithdrawnByAdminEvent.OutputTuple,
      RewardTokensWithdrawnByAdminEvent.OutputObject
    >;
    RewardTokensWithdrawnByAdmin: TypedContractEvent<
      RewardTokensWithdrawnByAdminEvent.InputTuple,
      RewardTokensWithdrawnByAdminEvent.OutputTuple,
      RewardTokensWithdrawnByAdminEvent.OutputObject
    >;

    "RewardsClaimed(address,uint256)": TypedContractEvent<
      RewardsClaimedEvent.InputTuple,
      RewardsClaimedEvent.OutputTuple,
      RewardsClaimedEvent.OutputObject
    >;
    RewardsClaimed: TypedContractEvent<
      RewardsClaimedEvent.InputTuple,
      RewardsClaimedEvent.OutputTuple,
      RewardsClaimedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "TokensStaked(address,uint256[])": TypedContractEvent<
      TokensStakedEvent.InputTuple,
      TokensStakedEvent.OutputTuple,
      TokensStakedEvent.OutputObject
    >;
    TokensStaked: TypedContractEvent<
      TokensStakedEvent.InputTuple,
      TokensStakedEvent.OutputTuple,
      TokensStakedEvent.OutputObject
    >;

    "TokensWithdrawn(address,uint256[])": TypedContractEvent<
      TokensWithdrawnEvent.InputTuple,
      TokensWithdrawnEvent.OutputTuple,
      TokensWithdrawnEvent.OutputObject
    >;
    TokensWithdrawn: TypedContractEvent<
      TokensWithdrawnEvent.InputTuple,
      TokensWithdrawnEvent.OutputTuple,
      TokensWithdrawnEvent.OutputObject
    >;

    "UpdatedRewardsPerUnitTime(uint256,uint256)": TypedContractEvent<
      UpdatedRewardsPerUnitTimeEvent.InputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputObject
    >;
    UpdatedRewardsPerUnitTime: TypedContractEvent<
      UpdatedRewardsPerUnitTimeEvent.InputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputTuple,
      UpdatedRewardsPerUnitTimeEvent.OutputObject
    >;

    "UpdatedTimeUnit(uint256,uint256)": TypedContractEvent<
      UpdatedTimeUnitEvent.InputTuple,
      UpdatedTimeUnitEvent.OutputTuple,
      UpdatedTimeUnitEvent.OutputObject
    >;
    UpdatedTimeUnit: TypedContractEvent<
      UpdatedTimeUnitEvent.InputTuple,
      UpdatedTimeUnitEvent.OutputTuple,
      UpdatedTimeUnitEvent.OutputObject
    >;
  };
}
