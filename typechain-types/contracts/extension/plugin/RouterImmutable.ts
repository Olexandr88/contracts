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

export declare namespace IPluginMap {
  export type PluginStruct = {
    functionSelector: BytesLike;
    functionSignature: string;
    pluginAddress: AddressLike;
  };

  export type PluginStructOutput = [
    functionSelector: string,
    functionSignature: string,
    pluginAddress: string
  ] & {
    functionSelector: string;
    functionSignature: string;
    pluginAddress: string;
  };
}

export interface RouterImmutableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_getPluginForFunction"
      | "addPlugin"
      | "getAllFunctionsOfPlugin"
      | "getAllPlugins"
      | "getPluginForFunction"
      | "multicall"
      | "pluginMap"
      | "removePlugin"
      | "supportsInterface"
      | "updatePlugin"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "PluginAdded"
      | "PluginRemoved"
      | "PluginSet"
      | "PluginUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_getPluginForFunction",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addPlugin",
    values: [IPluginMap.PluginStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllFunctionsOfPlugin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPlugins",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPluginForFunction",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "pluginMap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removePlugin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePlugin",
    values: [IPluginMap.PluginStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "_getPluginForFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPlugin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllFunctionsOfPlugin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPlugins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPluginForFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pluginMap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePlugin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePlugin",
    data: BytesLike
  ): Result;
}

export namespace PluginAddedEvent {
  export type InputTuple = [
    functionSelector: BytesLike,
    pluginAddress: AddressLike
  ];
  export type OutputTuple = [functionSelector: string, pluginAddress: string];
  export interface OutputObject {
    functionSelector: string;
    pluginAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PluginRemovedEvent {
  export type InputTuple = [
    functionSelector: BytesLike,
    pluginAddress: AddressLike
  ];
  export type OutputTuple = [functionSelector: string, pluginAddress: string];
  export interface OutputObject {
    functionSelector: string;
    pluginAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PluginSetEvent {
  export type InputTuple = [
    functionSelector: BytesLike,
    functionSignature: string,
    pluginAddress: AddressLike
  ];
  export type OutputTuple = [
    functionSelector: string,
    functionSignature: string,
    pluginAddress: string
  ];
  export interface OutputObject {
    functionSelector: string;
    functionSignature: string;
    pluginAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PluginUpdatedEvent {
  export type InputTuple = [
    functionSelector: BytesLike,
    oldPluginAddress: AddressLike,
    newPluginAddress: AddressLike
  ];
  export type OutputTuple = [
    functionSelector: string,
    oldPluginAddress: string,
    newPluginAddress: string
  ];
  export interface OutputObject {
    functionSelector: string;
    oldPluginAddress: string;
    newPluginAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RouterImmutable extends BaseContract {
  connect(runner?: ContractRunner | null): RouterImmutable;
  waitForDeployment(): Promise<this>;

  interface: RouterImmutableInterface;

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

  _getPluginForFunction: TypedContractMethod<
    [_selector: BytesLike],
    [string],
    "view"
  >;

  addPlugin: TypedContractMethod<
    [_plugin: IPluginMap.PluginStruct],
    [void],
    "nonpayable"
  >;

  getAllFunctionsOfPlugin: TypedContractMethod<
    [_pluginAddress: AddressLike],
    [string[]],
    "view"
  >;

  getAllPlugins: TypedContractMethod<
    [],
    [IPluginMap.PluginStructOutput[]],
    "view"
  >;

  getPluginForFunction: TypedContractMethod<
    [_selector: BytesLike],
    [string],
    "view"
  >;

  multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;

  pluginMap: TypedContractMethod<[], [string], "view">;

  removePlugin: TypedContractMethod<
    [_selector: BytesLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  updatePlugin: TypedContractMethod<
    [_plugin: IPluginMap.PluginStruct],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_getPluginForFunction"
  ): TypedContractMethod<[_selector: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "addPlugin"
  ): TypedContractMethod<
    [_plugin: IPluginMap.PluginStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllFunctionsOfPlugin"
  ): TypedContractMethod<[_pluginAddress: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "getAllPlugins"
  ): TypedContractMethod<[], [IPluginMap.PluginStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getPluginForFunction"
  ): TypedContractMethod<[_selector: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "multicall"
  ): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
  getFunction(
    nameOrSignature: "pluginMap"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removePlugin"
  ): TypedContractMethod<[_selector: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "updatePlugin"
  ): TypedContractMethod<
    [_plugin: IPluginMap.PluginStruct],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "PluginAdded"
  ): TypedContractEvent<
    PluginAddedEvent.InputTuple,
    PluginAddedEvent.OutputTuple,
    PluginAddedEvent.OutputObject
  >;
  getEvent(
    key: "PluginRemoved"
  ): TypedContractEvent<
    PluginRemovedEvent.InputTuple,
    PluginRemovedEvent.OutputTuple,
    PluginRemovedEvent.OutputObject
  >;
  getEvent(
    key: "PluginSet"
  ): TypedContractEvent<
    PluginSetEvent.InputTuple,
    PluginSetEvent.OutputTuple,
    PluginSetEvent.OutputObject
  >;
  getEvent(
    key: "PluginUpdated"
  ): TypedContractEvent<
    PluginUpdatedEvent.InputTuple,
    PluginUpdatedEvent.OutputTuple,
    PluginUpdatedEvent.OutputObject
  >;

  filters: {
    "PluginAdded(bytes4,address)": TypedContractEvent<
      PluginAddedEvent.InputTuple,
      PluginAddedEvent.OutputTuple,
      PluginAddedEvent.OutputObject
    >;
    PluginAdded: TypedContractEvent<
      PluginAddedEvent.InputTuple,
      PluginAddedEvent.OutputTuple,
      PluginAddedEvent.OutputObject
    >;

    "PluginRemoved(bytes4,address)": TypedContractEvent<
      PluginRemovedEvent.InputTuple,
      PluginRemovedEvent.OutputTuple,
      PluginRemovedEvent.OutputObject
    >;
    PluginRemoved: TypedContractEvent<
      PluginRemovedEvent.InputTuple,
      PluginRemovedEvent.OutputTuple,
      PluginRemovedEvent.OutputObject
    >;

    "PluginSet(bytes4,string,address)": TypedContractEvent<
      PluginSetEvent.InputTuple,
      PluginSetEvent.OutputTuple,
      PluginSetEvent.OutputObject
    >;
    PluginSet: TypedContractEvent<
      PluginSetEvent.InputTuple,
      PluginSetEvent.OutputTuple,
      PluginSetEvent.OutputObject
    >;

    "PluginUpdated(bytes4,address,address)": TypedContractEvent<
      PluginUpdatedEvent.InputTuple,
      PluginUpdatedEvent.OutputTuple,
      PluginUpdatedEvent.OutputObject
    >;
    PluginUpdated: TypedContractEvent<
      PluginUpdatedEvent.InputTuple,
      PluginUpdatedEvent.OutputTuple,
      PluginUpdatedEvent.OutputObject
    >;
  };
}
