/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TokenStore,
  TokenStoreInterface,
} from "../../../contracts/extension/TokenStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nativeTokenWrapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bundleId",
        type: "uint256",
      },
    ],
    name: "getTokenCountOfBundle",
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
        internalType: "uint256",
        name: "_bundleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getTokenOfBundle",
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
        internalType: "struct ITokenBundle.Token",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bundleId",
        type: "uint256",
      },
    ],
    name: "getUriOfBundle",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
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
  "0x000100000000000200040000000000020000000003020019000000000001035500000000020100190000006002200270000000940220019700000001033001900000007d0000c13d0000008003000039000000400030043f000000040420008c000001cd0000413d000000000401043b000000e004400270000000980540009c000000ad0000a13d000000990540009c000000ff0000213d0000009c0540009c000001180000613d0000009d0440009c000001cd0000c13d0000000004000416000000a40520008c000001cd0000413d000000000404004b000001cd0000c13d0000000404100370000000000404043b000000960440009c000001cd0000213d0000002404100370000000000404043b000000960440009c000001cd0000213d0000004404100370000000000404043b000000a10540009c000001cd0000213d0000002305400039000000000525004b000001cd0000813d0000000405400039000000000551034f000000000605043b000000a10560009c000001cf0000213d00000005056002100000003f07500039000000a507700197000000a60870009c000001cf0000213d0000008007700039000000400070043f000000800060043f00000024044000390000000005450019000000000725004b000001cd0000213d000000000606004b000000450000613d000000000641034f000000000606043b000000200330003900000000006304350000002004400039000000000654004b0000003e0000413d0000006403100370000000000303043b000000a10430009c000001cd0000213d0000002304300039000000a705000041000000000624004b00000000060000190000000006058019000000a704400197000000000704004b0000000005008019000000a70440009c000000000506c019000000000405004b000001cd0000c13d0000000404300039000000000441034f000000000504043b000000a10450009c000001cf0000213d00000005065002100000003f04600039000000a507400197000000400400043d0000000007740019000000000847004b00000000080000190000000108004039000000a10970009c000001cf0000213d0000000108800190000001cf0000c13d000000400070043f000000000054043500000024033000390000000006360019000000000726004b000001cd0000213d000000000505004b000000750000613d000000000531034f000000000505043b000000200440003900000000005404350000002003300039000000000563004b0000006e0000413d0000008401100370000000000101043b000000a10310009c000001cd0000213d0000000401100039024b01e20000040f000000a801000041000001630000013d0000000003000416000000000303004b000001cd0000c13d0000001f032000390000009503300197000000a003300039000000400030043f0000001f0320018f0000000504200272000000900000613d00000000050000190000000506500210000000000761034f000000000707043b000000a00660003900000000007604350000000105500039000000000645004b000000880000413d000000000503004b0000009f0000613d0000000504400210000000000141034f0000000303300210000000a004400039000000000504043300000000053501cf000000000535022f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f0000000000140435000000200120008c000001cd0000413d000000a00100043d000000960210009c000001cd0000213d000000800010043f00000140000004430000016000100443000000200100003900000100001004430000000101000039000001200010044300000097010000410000024c0001042e0000009e0340009c0000013e0000613d0000009f0340009c0000014f0000613d000000a00340009c000001cd0000c13d0000000003000416000000440220008c000001cd0000413d000000000203004b000001cd0000c13d0000010002000039000000400020043f000000800000043f000000a00000043f000000c00000043f000000e00000043f0000000401100370000000000101043b0000000000100435000000200000043f00000094030000410000000001000414000000940210009c0000000001038019000000c001100210000000a9011001c70000801002000039024b02460000040f0000000102200190000001cd0000613d000000000101043b00000024020000390000000002200367000000000202043b00000000002004350000000201100039000000200010043f0000000001000414000000940210009c0000009401008041000000c001100210000000a9011001c70000801002000039024b02460000040f0000000102200190000001cd0000613d000000000201043b000000400100043d000000ad0310009c000001cf0000813d0000008003100039000000400030043f000000000402041a00000096034001970000000003310436000000a004400270000000ff0440018f000000030540008c000000f90000813d00000000004304350000000104200039000000000504041a000000400410003900000000005404350000000202200039000000000502041a0000006002100039000000000052043500000000010104330000009605100197000000400100043d00000000055104360000000003030433000000020630008c000001d50000a13d000000ab0100004100000000001004350000002101000039000000040010043f000000ac010000410000024d000104300000009a0340009c0000016b0000613d0000009b0340009c000001cd0000c13d0000000003000416000000a40420008c000001cd0000413d000000000303004b000001cd0000c13d0000000403100370000000000303043b000000960330009c000001cd0000213d0000002403100370000000000303043b000000960330009c000001cd0000213d0000008401100370000000000101043b000000a10310009c000001cd0000213d0000000401100039024b01e20000040f000000a201000041000001630000013d0000000003000416000000240220008c000001cd0000413d000000000203004b000001cd0000c13d0000000401100370000000000101043b0000000000100435000000200000043f00000094010000410000000002000414000000940320009c0000000002018019000000c001200210000000a9011001c70000801002000039024b02460000040f0000000102200190000001cd0000613d000000400500043d000000000101043b0000000101100039000000000701041a000000010370019000000001067002700000007f0260018f00000000060260190000001f0460008c00000000040000190000000104002039000000000443004b0000017b0000613d000000ab0100004100000000001004350000002201000039000000040010043f000000ac010000410000024d000104300000000003000416000000240220008c000001cd0000413d000000000203004b000001cd0000c13d0000000401100370000000000101043b000000b002100198000001cd0000c13d000000b10210009c00000000020000190000000102006039000000b20110009c00000001022061bf000000800020043f000000a4010000410000024c0001042e0000000003000416000000840420008c000001cd0000413d000000000303004b000001cd0000c13d0000000403100370000000000303043b000000960330009c000001cd0000213d0000002403100370000000000303043b000000960330009c000001cd0000213d0000006401100370000000000101043b000000a10310009c000001cd0000213d0000000401100039024b01e20000040f000000af01000041000000400200043d00000000001204350000009401000041000000940320009c00000000020180190000004001200210000000a3011001c70000024c0001042e0000000003000416000000240220008c000001cd0000413d000000000203004b000001cd0000c13d0000000401100370000000000101043b0000000000100435000000200000043f00000040020000390000000001000019024b02300000040f000000000101041a000000800010043f000000a4010000410000024c0001042e0000000008650436000000000303004b000001850000c13d000001000100008a000000000117016f0000000000180435000000000102004b00000020020000390000000002006019000001a40000013d000100000007001d000200000006001d000300000005001d000400000008001d000000000010043500000094010000410000000002000414000000940320009c0000000002018019000000c001200210000000aa011001c70000801002000039024b02460000040f0000000102200190000001cd0000613d0000000102000029000000020220008c0000000002000019000000040800002900000003050000290000000206000029000001a40000413d000000000101043b00000000020000190000000003280019000000000401041a000000000043043500000001011000390000002002200039000000000362004b0000019d0000413d0000003f01200039000000200200008a000000000321016f0000000001530019000000000331004b00000000030000190000000103004039000000a10410009c000001cf0000213d0000000103300190000001cf0000c13d000000400010043f00000020030000390000000004310436000000000305043300000000003404350000004004100039000000000503004b000001bf0000613d000000000500001900000000064500190000000007580019000000000707043300000000007604350000002005500039000000000635004b000001b80000413d0000001f05300039000000000225016f0000000003340019000000000003043500000040022000390000009403000041000000940420009c0000000002038019000000940410009c000000000103801900000040011002100000006002200210000000000112019f0000024c0001042e00000000010000190000024d00010430000000ab0100004100000000001004350000004101000039000000040010043f000000ac010000410000024d0001043000000000003504350000000003040433000000400410003900000000003404350000000002020433000000600310003900000000002304350000009402000041000000940310009c00000000010280190000004001100210000000ae011001c70000024c0001042e0000001f03100039000000a704000041000000000523004b00000000050000190000000005044019000000a706200197000000a703300197000000000763004b000000000400a019000000000363013f000000a70330009c000000000405c019000000000304004b0000022e0000613d0000000005000367000000000315034f000000000303043b000000b30430009c000002280000813d0000001f04300039000000200600008a000000000464016f0000003f04400039000000000664016f000000400400043d0000000006640019000000000746004b00000000070000190000000107004039000000a10860009c000002280000213d0000000107700190000002280000c13d000000400060043f000000000434043600000020011000390000000006310019000000000226004b0000022e0000213d000000000215034f0000001f0130018f0000000505300272000002160000613d000000000600001900000005076002100000000008740019000000000772034f000000000707043b00000000007804350000000106600039000000000756004b0000020e0000413d000000000601004b000002250000613d0000000505500210000000000252034f00000000055400190000000301100210000000000605043300000000061601cf000000000616022f000000000202043b0000010001100089000000000212022f00000000011201cf000000000161019f000000000015043500000000013400190000000000010435000000000001042d000000ab0100004100000000001004350000004101000039000000040010043f000000ac010000410000024d0001043000000000010000190000024d000104300000009403000041000000940410009c00000000010380190000004001100210000000940420009c00000000020380190000006002200210000000000112019f0000000002000414000000940420009c0000000002038019000000c002200210000000000112019f000000b4011001c70000801002000039024b02460000040f0000000102200190000002440000613d000000000101043b000000000001042d00000000010000190000024d0001043000000249002104230000000102000039000000000001042d0000000002000019000000000001042d0000024b000004320000024c0001042e0000024d000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000001ffffffe0000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000002000000000000000000000000000000800000010000000000000000000000000000000000000000000000000000000000000000000000000061195e9300000000000000000000000000000000000000000000000000000000d0d2fe2400000000000000000000000000000000000000000000000000000000d0d2fe2500000000000000000000000000000000000000000000000000000000f23a6e610000000000000000000000000000000000000000000000000000000061195e9400000000000000000000000000000000000000000000000000000000bc197c810000000000000000000000000000000000000000000000000000000001ffc9a700000000000000000000000000000000000000000000000000000000150b7a02000000000000000000000000000000000000000000000000000000001da799c9000000000000000000000000000000000000000000000000fffffffffffffffff23a6e6100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000008000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0000000000000000000000000000000000000000000000000ffffffffffffff7f8000000000000000000000000000000000000000000000000000000000000000bc197c8100000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000004000000000000000000000000002000000000000000000000000000000000000200000000000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff800000000000000000000000000000000000000080000000000000000000000000150b7a020000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff01ffc9a7000000000000000000000000000000000000000000000000000000004e2312e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000da1071c9aa0d07d3e77446c289babf0c104d0a2252028c78f37d1fa59e338908";

type TokenStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenStore__factory extends ContractFactory {
  constructor(...args: TokenStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _nativeTokenWrapper: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_nativeTokenWrapper, overrides || {});
  }
  override deploy(
    _nativeTokenWrapper: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_nativeTokenWrapper, overrides || {}) as Promise<
      TokenStore & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenStore__factory {
    return super.connect(runner) as TokenStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenStoreInterface {
    return new Interface(_abi) as TokenStoreInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TokenStore {
    return new Contract(address, _abi, runner) as unknown as TokenStore;
  }
}
