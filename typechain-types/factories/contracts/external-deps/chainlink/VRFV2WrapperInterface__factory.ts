/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  VRFV2WrapperInterface,
  VRFV2WrapperInterfaceInterface,
} from "../../../../contracts/external-deps/chainlink/VRFV2WrapperInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
    ],
    name: "calculateRequestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_requestGasPriceWei",
        type: "uint256",
      },
    ],
    name: "estimateRequestPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRequestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class VRFV2WrapperInterface__factory {
  static readonly abi = _abi;
  static createInterface(): VRFV2WrapperInterfaceInterface {
    return new Interface(_abi) as VRFV2WrapperInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): VRFV2WrapperInterface {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as VRFV2WrapperInterface;
  }
}
