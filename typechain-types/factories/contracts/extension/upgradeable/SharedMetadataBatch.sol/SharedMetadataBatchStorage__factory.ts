/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  SharedMetadataBatchStorage,
  SharedMetadataBatchStorageInterface,
} from "../../../../../contracts/extension/upgradeable/SharedMetadataBatch.sol/SharedMetadataBatchStorage";

const _abi = [
  {
    inputs: [],
    name: "SHARED_METADATA_BATCH_STORAGE_POSITION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0000008003000039000000400030043f00000001022001900000000f0000c13d00000000020100190000000902200198000000170000613d000000000101043b0000000a011001970000000b0110009c000000170000c13d0000000c01000041000000800010043f0000000d010000410000001a0001042e0000000001000416000000000101004b000000170000c13d00000020010000390000010000100443000001200000044300000008010000410000001a0001042e00000000010000190000001b0001043000000019000004320000001a0001042e0000001b000104300000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000fffffffc000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000a361dc9a00000000000000000000000000000000000000000000000000000000f85ae2b98503142dac20c6561e88360cff7f1cb5634b6ad090b7f724e2f67a000000000000000000000000000000000000000020000000800000000000000000edf3619e00bc6362364edf934053638d33d4eda423ac14cd828e77afbf73b758";

type SharedMetadataBatchStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SharedMetadataBatchStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SharedMetadataBatchStorage__factory extends ContractFactory {
  constructor(...args: SharedMetadataBatchStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SharedMetadataBatchStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): SharedMetadataBatchStorage__factory {
    return super.connect(runner) as SharedMetadataBatchStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SharedMetadataBatchStorageInterface {
    return new Interface(_abi) as SharedMetadataBatchStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SharedMetadataBatchStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SharedMetadataBatchStorage;
  }
}
