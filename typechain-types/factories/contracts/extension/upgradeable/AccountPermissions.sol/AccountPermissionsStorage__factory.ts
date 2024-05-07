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
  AccountPermissionsStorage,
  AccountPermissionsStorageInterface,
} from "../../../../../contracts/extension/upgradeable/AccountPermissions.sol/AccountPermissionsStorage";

const _abi = [
  {
    inputs: [],
    name: "ACCOUNT_PERMISSIONS_STORAGE_POSITION",
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
  "0x0000008003000039000000400030043f00000001022001900000000f0000c13d00000000020100190000000902200198000000170000613d000000000101043b0000000a011001970000000b0110009c000000170000c13d0000000c01000041000000800010043f0000000d010000410000001a0001042e0000000001000416000000000101004b000000170000c13d00000020010000390000010000100443000001200000044300000008010000410000001a0001042e00000000010000190000001b0001043000000019000004320000001a0001042e0000001b000104300000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000fffffffc000000000000000000000000ffffffff0000000000000000000000000000000000000000000000000000000076a00512000000000000000000000000000000000000000000000000000000003181e78fc1b109bc611fd2406150bf06e33faa75f71cba12c3e1fd670f2def0000000000000000000000000000000000000000200000008000000000000000007dd7fe1bf8440041b2a0e9efc57033c25842f210d0c63936ca5d3e10a092c2d1";

type AccountPermissionsStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountPermissionsStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccountPermissionsStorage__factory extends ContractFactory {
  constructor(...args: AccountPermissionsStorageConstructorParams) {
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
      AccountPermissionsStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): AccountPermissionsStorage__factory {
    return super.connect(runner) as AccountPermissionsStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountPermissionsStorageInterface {
    return new Interface(_abi) as AccountPermissionsStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AccountPermissionsStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AccountPermissionsStorage;
  }
}
