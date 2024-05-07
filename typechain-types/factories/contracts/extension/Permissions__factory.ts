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
import type { NonPayableOverrides } from "../../../common";
import type {
  Permissions,
  PermissionsInterface,
} from "../../../contracts/extension/Permissions";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "PermissionsAlreadyGranted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "expected",
        type: "address",
      },
      {
        internalType: "address",
        name: "actual",
        type: "address",
      },
    ],
    name: "PermissionsInvalidPermission",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "PermissionsUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRoleWithSwitch",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0001000000000002000500000000000200000000000103550000008003000039000000400030043f00000000030100190000006003300270000000910330019700000001022001900000001c0000c13d000000040230008c0000016c0000413d000000000201043b000000e002200270000000930420009c000000240000a13d000000940420009c0000003b0000213d000000970120009c000000530000613d000000980120009c0000016c0000c13d0000000001000416000000000101004b0000016c0000c13d000000800000043f0000009f010000410000023f0001042e0000000001000416000000000101004b0000016c0000c13d00000020010000390000010000100443000001200000044300000092010000410000023f0001042e000000990420009c0000006f0000613d0000009a0420009c0000007f0000613d0000009b0220009c0000016c0000c13d0000000002000416000000440330008c0000016c0000413d000000000202004b0000016c0000c13d0000002402100370000000000302043b0000009c0230009c0000016c0000213d0000000002000411000000000432004b000001140000c13d0000000401100370000000000101043b023e01c00000040f00000000010000190000023f0001042e000000950420009c000000cb0000613d000000960120009c0000016c0000c13d0000000001000416000000000101004b0000016c0000c13d0000000001030019023e01770000040f000400000001001d000500000002001d00000000001004350000000101000039000000200010043f0000000001000019023e02220000040f000000000101041a0000000002000411023e018c0000040f00000004010000290000000502000029023e01c00000040f00000000010000190000023f0001042e0000000001000416000000000101004b0000016c0000c13d0000000001030019023e01770000040f000500000002001d0000000000100435000000200000043f0000000001000019023e02220000040f00000005020000290000009c022001970000000000200435000000200010043f0000000001000019023e02220000040f000000000101041a000000ff011001900000000001000019000000010100c039000000400200043d00000000001204350000009101000041000000910320009c000000000201801900000040012002100000009e011001c70000023f0001042e0000000002000416000000240330008c0000016c0000413d000000000202004b0000016c0000c13d0000000401100370000000000101043b00000000001004350000000101000039000000200010043f0000000001000019023e02220000040f000000000101041a000000800010043f0000009f010000410000023f0001042e0000000002000416000000440330008c0000016c0000413d000000000202004b0000016c0000c13d0000002402100370000000000202043b000500000002001d0000009c0220009c0000016c0000213d0000000401100370000000000101043b000400000001001d00000000001004350000000101000039000000200010043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b000000000101041a000300000001001d0000000000100435000000200000043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f000000000400041100000001022001900000016c0000613d000000000101043b0000009c02400197000200000002001d0000000000200435000000200010043f00000091010000410000000002000414000000910320009c0000000002018019000000c0012002100000009d011001c70000801002000039000100000004001d023e02390000040f00000001022001900000016c0000613d000000000101043b000000000101041a000000ff011001900000011d0000c13d000000400100043d000000240210003900000003030000290000000000320435000000a60200004100000000002104350000000402100039000000020300002900000000003204350000009102000041000000910310009c00000000010280190000004001100210000000a3011001c700000240000104300000000002000416000000440330008c0000016c0000413d000000000202004b0000016c0000c13d0000002402100370000000000202043b000500000002001d0000009c0220009c0000016c0000213d0000000401100370000000000101043b000400000001001d0000000000100435000000200000043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b0000000000000435000000200010043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b000000000101041a000000ff011001900000011a0000c13d00000004010000290000000000100435000000200000043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b00000005020000290000000000200435000000200010043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b000000000101041a000000ff011001900000000001000019000000010100c0390000011b0000013d000000a001000041000000800010043f000000840020043f000000a40030043f000000a10100004100000240000104300000000101000039000000010110018f000000670000013d00000004010000290000000000100435000000200000043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b00000005020000290000000000200435000000200010043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b000000000101041a000000ff011001900000016e0000c13d00000004010000290000000000100435000000200000043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f00000001022001900000016c0000613d000000000101043b00000005020000290000000000200435000000200010043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f000000010700002900000001022001900000016c0000613d000000000101043b000000000201041a000001000300008a000000000232016f00000001022001bf000000000021041b00000091010000410000000002000414000000910320009c0000000002018019000000c001200210000000a4011001c70000800d020000390000000403000039000000a50400004100000004050000290000000506000029023e02340000040f00000001012001900000016c0000613d00000000010000190000023f0001042e00000000010000190000024000010430000000400100043d000000240210003900000004030000290000000000320435000000a202000041000000000021043500000004021000390000000503000029000000c40000013d000000a702000041000000430310008c00000000030000190000000003022019000000a701100197000000000401004b0000000002008019000000a70110009c000000000203c019000000000102004b0000018a0000613d00000000010003670000002402100370000000000202043b0000009c0320009c0000018a0000213d0000000401100370000000000101043b000000000001042d000000000100001900000240000104300002000000000002000200000002001d000100000001001d0000000000100435000000200000043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f0000000102200190000001af0000613d000000000101043b00000002020000290000009c02200197000200000002001d0000000000200435000000200010043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f0000000102200190000001af0000613d000000000101043b000000000101041a000000ff01100190000001b10000613d000000000001042d00000000010000190000024000010430000000400100043d000000240210003900000001030000290000000000320435000000a60200004100000000002104350000000402100039000000020300002900000000003204350000009102000041000000910310009c00000000010280190000004001100210000000a3011001c700000240000104300002000000000002000100000002001d000200000001001d0000000000100435000000200000043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f0000000102200190000002110000613d000000000101043b00000001020000290000009c02200197000100000002001d0000000000200435000000200010043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f0000000102200190000002110000613d000000000101043b000000000101041a000000ff01100190000002130000613d00000002010000290000000000100435000000200000043f00000091030000410000000001000414000000910210009c0000000001038019000000c0011002100000009d011001c70000801002000039023e02390000040f0000000102200190000002110000613d000000000101043b00000001020000290000000000200435000000200010043f0000000001000414000000910210009c0000009101008041000000c0011002100000009d011001c70000801002000039023e02390000040f0000000102200190000002110000613d000000000101043b000000000201041a000001000300008a000000000232016f000000000021041b00000091010000410000000002000414000000910320009c0000000002018019000000c001200210000000a4011001c70000800d0200003900000004030000390000000007000411000000a80400004100000002050000290000000106000029023e02340000040f0000000101200190000002110000613d000000000001042d00000000010000190000024000010430000000400100043d000000240210003900000002030000290000000000320435000000a60200004100000000002104350000000402100039000000010300002900000000003204350000009102000041000000910310009c00000000010280190000004001100210000000a3011001c700000240000104300000009102000041000000910310009c00000000010280190000000003000414000000910430009c0000000003028019000000c0023002100000004001100210000000000121019f0000009d011001c70000801002000039023e02390000040f0000000102200190000002320000613d000000000101043b000000000001042d0000000001000019000002400001043000000237002104210000000102000039000000000001042d0000000002000019000000000001042d0000023c002104230000000102000039000000000001042d0000000002000019000000000001042d0000023e000004320000023f0001042e000002400001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000002000000000000000000000000000000400000010000000000000000000000000000000000000000000000000000000000000000000000000091d1485300000000000000000000000000000000000000000000000000000000a32fa5b200000000000000000000000000000000000000000000000000000000a32fa5b300000000000000000000000000000000000000000000000000000000d547741f0000000000000000000000000000000000000000000000000000000091d1485400000000000000000000000000000000000000000000000000000000a217fddf00000000000000000000000000000000000000000000000000000000248a9ca3000000000000000000000000000000000000000000000000000000002f2ff15d0000000000000000000000000000000000000000000000000000000036568abe000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0200000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000200000008000000000000000004169c622000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044000000800000000000000000d49c166a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004400000000000000000000000002000000000000000000000000000000000000000000000000000000000000002f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d0878b106000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b0000000000000000000000000000000000000000000000000000000000000000ca1dbf922e256f4694a11c415c03e6d662db5eb2e41f3f2778a41e38affcfb9f";

type PermissionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PermissionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Permissions__factory extends ContractFactory {
  constructor(...args: PermissionsConstructorParams) {
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
      Permissions & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Permissions__factory {
    return super.connect(runner) as Permissions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermissionsInterface {
    return new Interface(_abi) as PermissionsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Permissions {
    return new Contract(address, _abi, runner) as unknown as Permissions;
  }
}
