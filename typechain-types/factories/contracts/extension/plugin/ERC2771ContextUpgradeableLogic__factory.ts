/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ERC2771ContextUpgradeableLogic,
  ERC2771ContextUpgradeableLogicInterface,
} from "../../../../contracts/extension/plugin/ERC2771ContextUpgradeableLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
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
] as const;

export class ERC2771ContextUpgradeableLogic__factory {
  static readonly abi = _abi;
  static createInterface(): ERC2771ContextUpgradeableLogicInterface {
    return new Interface(_abi) as ERC2771ContextUpgradeableLogicInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC2771ContextUpgradeableLogic {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ERC2771ContextUpgradeableLogic;
  }
}
