/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPack,
  IPackInterface,
} from "../../../../contracts/prebuilts/interface/IPack";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "packId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalPacksCreated",
        type: "uint256",
      },
    ],
    name: "PackCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "packId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "opener",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numOfPacksOpened",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "assetContract",
            type: "address",
          },
          {
            internalType: "enum ITokenBundle.TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ITokenBundle.Token[]",
        name: "rewardUnitsDistributed",
        type: "tuple[]",
      },
    ],
    name: "PackOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "packId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalPacksCreated",
        type: "uint256",
      },
    ],
    name: "PackUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "assetContract",
            type: "address",
          },
          {
            internalType: "enum ITokenBundle.TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ITokenBundle.Token[]",
        name: "contents",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "numOfRewardUnits",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "packUri",
        type: "string",
      },
      {
        internalType: "uint128",
        name: "openStartTimestamp",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amountDistributedPerOpen",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "createPack",
    outputs: [
      {
        internalType: "uint256",
        name: "packId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "packTotalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "packId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToOpen",
        type: "uint256",
      },
    ],
    name: "openPack",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "assetContract",
            type: "address",
          },
          {
            internalType: "enum ITokenBundle.TokenType",
            name: "tokenType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
        ],
        internalType: "struct ITokenBundle.Token[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPack__factory {
  static readonly abi = _abi;
  static createInterface(): IPackInterface {
    return new Interface(_abi) as IPackInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPack {
    return new Contract(address, _abi, runner) as unknown as IPack;
  }
}
