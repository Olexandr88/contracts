/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMintableERC20,
  IMintableERC20Interface,
} from "../../../../contracts/extension/interface/IMintableERC20";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mintedTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantityMinted",
        type: "uint256",
      },
    ],
    name: "TokensMinted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMintableERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IMintableERC20Interface {
    return new Interface(_abi) as IMintableERC20Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMintableERC20 {
    return new Contract(address, _abi, runner) as unknown as IMintableERC20;
  }
}
