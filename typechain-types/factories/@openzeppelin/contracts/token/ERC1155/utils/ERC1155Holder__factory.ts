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
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  ERC1155Holder,
  ERC1155HolderInterface,
} from "../../../../../../@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
] as const;

const _bytecode =
  "0x0001000000000002000000000302001900000000000103550000008004000039000000400040043f0000000002010019000000600220027000000043022001970000000103300190000000250000c13d000000040320008c000000b10000413d000000000301043b000000e003300270000000450530009c0000002d0000613d000000460530009c000000490000613d000000470330009c000000b10000c13d0000000003000416000000240220008c000000b10000413d000000000203004b000000b10000c13d0000000401100370000000000101043b0000005302100198000000b10000c13d000000540210009c00000000020000190000000102006039000000550110009c00000001022061bf000000800020043f0000005601000041000001060001042e0000000001000416000000000101004b000000b10000c13d0000002001000039000001000010044300000120000004430000004401000041000001060001042e0000000003000416000000a40420008c000000b10000413d000000000303004b000000b10000c13d0000000403100370000000000303043b000000480330009c000000b10000213d0000002403100370000000000303043b000000480330009c000000b10000213d0000008401100370000000000101043b000000490310009c000000b10000213d0000000401100039010500b70000040f0000004a01000041000000400200043d00000000001204350000004301000041000000430320009c000000000201801900000040012002100000004b011001c7000001060001042e0000000003000416000000a40520008c000000b10000413d000000000303004b000000b10000c13d0000000403100370000000000303043b000000480330009c000000b10000213d0000002403100370000000000303043b000000480330009c000000b10000213d0000004403100370000000000303043b000000490530009c000000b10000213d0000002305300039000000000525004b000000b10000813d0000000405300039000000000551034f000000000605043b0000004c0560009c000000670000813d00000005056002100000003f075000390000004d077001970000004e0870009c0000006d0000a13d000000510100004100000000001004350000004101000039000000040010043f000000520100004100000107000104300000008007700039000000400070043f000000800060043f00000024033000390000000005350019000000000725004b000000b10000213d000000000606004b0000007d0000613d000000000631034f000000000606043b000000200440003900000000006404350000002003300039000000000653004b000000760000413d0000006403100370000000000303043b000000490430009c000000b10000213d00000023043000390000004f05000041000000000624004b000000000600001900000000060580190000004f04400197000000000704004b00000000050080190000004f0440009c000000000506c019000000000405004b000000b10000c13d0000000404300039000000000441034f000000000504043b000000490450009c000000670000213d00000005065002100000003f046000390000004d07400197000000400400043d0000000007740019000000000847004b00000000080000190000000108004039000000490970009c000000670000213d0000000108800190000000670000c13d000000400070043f000000000054043500000024033000390000000006360019000000000726004b000000b10000213d000000000505004b000000ad0000613d000000000531034f000000000505043b000000200440003900000000005404350000002003300039000000000563004b000000a60000413d0000008401100370000000000101043b000000490310009c000000b30000a13d000000000100001900000107000104300000000401100039010500b70000040f0000005001000041000000410000013d0000001f031000390000004f04000041000000000523004b000000000500001900000000050440190000004f062001970000004f03300197000000000763004b000000000400a019000000000363013f0000004f0330009c000000000405c019000000000304004b000001030000613d0000000005000367000000000315034f000000000303043b0000004c0430009c000000fd0000813d0000001f04300039000000200600008a000000000464016f0000003f04400039000000000664016f000000400400043d0000000006640019000000000746004b00000000070000190000000107004039000000490860009c000000fd0000213d0000000107700190000000fd0000c13d000000400060043f000000000434043600000020011000390000000006310019000000000226004b000001030000213d000000000215034f0000001f0130018f0000000505300272000000eb0000613d000000000600001900000005076002100000000008740019000000000772034f000000000707043b00000000007804350000000106600039000000000756004b000000e30000413d000000000601004b000000fa0000613d0000000505500210000000000252034f00000000055400190000000301100210000000000605043300000000061601cf000000000616022f000000000202043b0000010001100089000000000212022f00000000011201cf000000000161019f000000000015043500000000013400190000000000010435000000000001042d000000510100004100000000001004350000004101000039000000040010043f00000052010000410000010700010430000000000100001900000107000104300000010500000432000001060001042e0000010700010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000000000000000000000000000f23a6e6100000000000000000000000000000000000000000000000000000000bc197c810000000000000000000000000000000000000000000000000000000001ffc9a7000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000fffffffffffffffff23a6e6100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000100000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0000000000000000000000000000000000000000000000000ffffffffffffff7f8000000000000000000000000000000000000000000000000000000000000000bc197c81000000000000000000000000000000000000000000000000000000004e487b7100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff01ffc9a7000000000000000000000000000000000000000000000000000000004e2312e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000008000000000000000000000000000000000000000000000000000000000000000000000000000000000c7eb18d3bd3209b8efbdbbefe861b783dc4b7122c5b6cc90b455e09ce01c33df";

type ERC1155HolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155HolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Holder__factory extends ContractFactory {
  constructor(...args: ERC1155HolderConstructorParams) {
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
      ERC1155Holder & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC1155Holder__factory {
    return super.connect(runner) as ERC1155Holder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155HolderInterface {
    return new Interface(_abi) as ERC1155HolderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC1155Holder {
    return new Contract(address, _abi, runner) as unknown as ERC1155Holder;
  }
}
