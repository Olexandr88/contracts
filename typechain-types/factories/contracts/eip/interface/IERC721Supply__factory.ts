/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC721Supply,
  IERC721SupplyInterface,
} from "../../../../contracts/eip/interface/IERC721Supply";

const _abi = [
  {
    inputs: [],
    name: "totalSupply",
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

export class IERC721Supply__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721SupplyInterface {
    return new Interface(_abi) as IERC721SupplyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC721Supply {
    return new Contract(address, _abi, runner) as unknown as IERC721Supply;
  }
}
