/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  SignatureAction,
  SignatureActionInterface,
} from "../../../contracts/extension/SignatureAction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "validityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "validityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct ISignatureAction.GenericRequest",
        name: "_req",
        type: "tuple",
      },
    ],
    name: "RequestExecuted",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "validityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "validityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct ISignatureAction.GenericRequest",
        name: "_req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class SignatureAction__factory {
  static readonly abi = _abi;
  static createInterface(): SignatureActionInterface {
    return new Interface(_abi) as SignatureActionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SignatureAction {
    return new Contract(address, _abi, runner) as unknown as SignatureAction;
  }
}
