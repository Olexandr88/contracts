/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPlatformFee,
  IPlatformFeeInterface,
} from "../../../../../../contracts/legacy-contracts/extension/interface/IPlatformFee_V1.sol/IPlatformFee";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "platformFeeRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformFeeBps",
        type: "uint256",
      },
    ],
    name: "PlatformFeeInfoUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "getPlatformFeeInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_platformFeeRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_platformFeeBps",
        type: "uint256",
      },
    ],
    name: "setPlatformFeeInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPlatformFee__factory {
  static readonly abi = _abi;
  static createInterface(): IPlatformFeeInterface {
    return new Interface(_abi) as IPlatformFeeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPlatformFee {
    return new Contract(address, _abi, runner) as unknown as IPlatformFee;
  }
}
