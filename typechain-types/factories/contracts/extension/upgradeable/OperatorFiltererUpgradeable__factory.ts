/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OperatorFiltererUpgradeable,
  OperatorFiltererUpgradeableInterface,
} from "../../../../contracts/extension/upgradeable/OperatorFiltererUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "restriction",
        type: "bool",
      },
    ],
    name: "OperatorRestriction",
    type: "event",
  },
  {
    inputs: [],
    name: "operatorRestriction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_restriction",
        type: "bool",
      },
    ],
    name: "setOperatorRestriction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class OperatorFiltererUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): OperatorFiltererUpgradeableInterface {
    return new Interface(_abi) as OperatorFiltererUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OperatorFiltererUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as OperatorFiltererUpgradeable;
  }
}
