/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITokenERC1155,
  ITokenERC1155Interface,
} from "../../../../../contracts/prebuilts/interface/token/ITokenERC1155";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
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
        indexed: true,
        internalType: "uint256",
        name: "tokenIdMinted",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mintedTo",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenIdMinted",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "royaltyRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "royaltyBps",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "primarySaleRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
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
        ],
        indexed: false,
        internalType: "struct ITokenERC1155.MintRequest",
        name: "mintRequest",
        type: "tuple",
      },
    ],
    name: "TokensMintedWithSignature",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "royaltyRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "royaltyBps",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "primarySaleRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
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
        ],
        internalType: "struct ITokenERC1155.MintRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "mintWithSignature",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "royaltyRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "royaltyBps",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "primarySaleRecipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
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
        ],
        internalType: "struct ITokenERC1155.MintRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
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

export class ITokenERC1155__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenERC1155Interface {
    return new Interface(_abi) as ITokenERC1155Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITokenERC1155 {
    return new Contract(address, _abi, runner) as unknown as ITokenERC1155;
  }
}
