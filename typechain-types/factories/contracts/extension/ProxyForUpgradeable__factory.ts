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
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../common";
import type {
  ProxyForUpgradeable,
  ProxyForUpgradeableInterface,
} from "../../../contracts/extension/ProxyForUpgradeable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x00020000000000020005000000000002000000000301001900000060033002700000008b0330019700010000003103550000000102200190000000220000c13d000000000431034f0000008002000039000000400020043f0000009202000041000000000202041a0000008d02200197000000000503004b000000710000c13d0000000001000414000000040320008c000000a80000c13d00000000030000310000001f0230018f00000005013002720000001f0000613d00000000050000190000000506500210000000000764034f000000000707043b00000000007604350000000105500039000000000615004b000000180000413d000000000502004b0000009b0000c13d000000f60000013d0000001f023000390000008c022001970000008002200039000000400020043f0000001f0230018f0000000504300272000000320000613d00000000050000190000000506500210000000000761034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b0000002a0000413d000000000502004b000000410000613d0000000504400210000000000141034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000101043b0000010002200089000000000121022f00000000012101cf000000000151019f0000000000140435000000400130008c0000006f0000413d000000800700043d0000008d097001970000008d0170009c0000006f0000213d000000a00200043d0000008e0120009c0000006f0000213d0000001f012000390000008f04000041000000000531004b000000000500001900000000050480190000008f01100197000000000601004b00000000040080190000008f0110009c000000000405c019000000000104004b0000006f0000c13d000000800120003900000000010104330000008e0410009c000001a30000213d0000001f04100039000000200800008a000000000484016f0000003f04400039000000000484016f000000400a00043d00000000044a00190000000005a4004b000000000500001900000001050040390000008e0640009c000001a30000213d0000000105500190000001a30000c13d0000008003300039000000400040043f00000000061a0436000000a0022000390000000004210019000000000334004b000000fd0000a13d000000000100001900000227000104300000001f0630018f00000005053002720000007c0000613d00000000070000190000000508700210000000000981034f000000000909043b00000000009804350000000107700039000000000857004b000000750000413d000000000706004b0000008a0000613d00000003066002100000000505500210000000000705043300000000076701cf000000000767022f000000000151034f000000000101043b0000010006600089000000000161022f00000000016101cf000000000171019f00000000001504350000000001000414000000040520008c000000cf0000c13d00000000030000310000001f0230018f0000000501300272000000990000613d00000000050000190000000506500210000000000764034f000000000707043b00000000007604350000000105500039000000000615004b000000920000413d000000000502004b000000f60000613d00000003022002100000000501100210000000000501043300000000052501cf000000000525022f000000000414034f000000000404043b0000010002200089000000000424022f00000000022401cf000000000252019f0000000000210435000000f60000013d0000008b030000410000008b0410009c0000000001038019000000c001100210022502200000040f0001000000010355000000000301001900000060033002700000001f0430018f0000008b0030019d0000008b033001970000000505300272000000bd0000613d00000000060000190000000507600210000000000871034f000000000808043b00000000008704350000000106600039000000000756004b000000b60000413d000000000604004b000000cb0000613d00000003044002100000000505500210000000000605043300000000064601cf000000000646022f000000000151034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f00000000001504350000000101200190000000f60000c13d000000600130021000000227000104300000008b040000410000008b0510009c0000000001048019000000c0011002100000006003300210000000000131019f022502200000040f0001000000010355000000000301001900000060033002700000001f0430018f0000008b0030019d0000008b033001970000000505300272000000e60000613d00000000060000190000000507600210000000000871034f000000000808043b00000000008704350000000106600039000000000756004b000000df0000413d000000000604004b000000f40000613d00000003044002100000000505500210000000000605043300000000064601cf000000000646022f000000000151034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f00000000001504350000000101200190000000fb0000613d0000008b010000410000008b0230009c00000000030180190000006001300210000002260001042e0000006001300210000002270001043000020000000a001d000300000009001d000500000008001d000000000301004b0000010a0000613d000000000300001900000000046300190000000005230019000000000505043300000000005404350000002003300039000000000413004b000001030000413d000100000006001d0000000001160019000000000001043500000090010000410000000000100439000400000007001d00000004007004430000008b0100004100000000020004140000008b0320009c0000000002018019000000c00120021000000091011001c700008002020000390225021b0000040f0000000102200190000001fe0000613d000000000101043b000000000101004b000001330000c13d000000400100043d00000064021000390000009d03000041000000000032043500000044021000390000009e03000041000000000032043500000024021000390000002d0300003900000000003204350000009a0200004100000000002104350000000402100039000000200300003900000000003204350000008b020000410000008b0310009c000000000102801900000040011002100000009f011001c700000227000104300000009201000041000000000201041a00000093022001970000000305000029000000000252019f000000000021041b0000008b0100004100000000020004140000008b0320009c0000000002018019000000c00120021000000094011001c70000800d0200003900000002030000390000009504000041022502160000040f000000010120019000000004060000290000000505000029000000020300002900000001080000290000006f0000613d0000000001030433000000000101004b000001510000c13d0000002001000039000001000010044300000120000004430000009c01000041000002260001042e000000400700043d000000960170009c000001a30000213d0000006001700039000000400010043f000000400170003900000097020000410000000000210435000000270100003900000000021704360000009801000041000300000002001d000000000012043500000000020304330000000001000414000000040360008c000001650000c13d000000010200003900000000040000310000017c0000013d0000008b030000410000008b0480009c000000000803801900000040048002100000008b0520009c00000000020380190000006002200210000000000242019f0000008b0410009c0000000001038019000000c001100210000000000112019f0000000002060019000200000007001d022502200000040f000000020700002900000005050000290000000406000029000000010220018f000100000001035500000060011002700000008b0010019d0000008b04100197000000000104004b000001a10000c13d000000600300003900000080010000390000000003030433000000000202004b000001da0000c13d000000000203004b000001ff0000c13d000000400400043d000400000004001d0000009a0100004100000000001404350000000401400039000000200200003900000000002104350000000003070433000200000003001d0000002401400039000000000031043500000044024000390000000301000029022502080000040f00000002010000290000001f01100039000000050110017f00000044011000390000008b020000410000008b0310009c000000000102801900000004040000290000008b0340009c000000000402801900000040024002100000006001100210000000000121019f00000227000104300000008e0140009c000001a90000a13d000000a00100004100000000001004350000004101000039000000040010043f000000a10100004100000227000104300000001f01400039000000000151016f0000003f01100039000000000151016f000000400300043d0000000001130019000000000531004b000000000500001900000001050040390000008e0610009c000001a30000213d0000000105500190000001a30000c13d000000000a070019000000400010043f0000001f0540018f000000000143043600000001060003670000000504400272000001c60000613d000000000700001900000005087002100000000009810019000000000886034f000000000808043b00000000008904350000000107700039000000000847004b000001be0000413d000000000705004b000001d50000613d0000000504400210000000000646034f00000000044100190000000305500210000000000704043300000000075701cf000000000757022f000000000606043b0000010005500089000000000656022f00000000055601cf000000000575019f0000000000540435000000040600002900000000070a00190000000003030433000000000202004b000001830000613d000000000103004b0000014c0000c13d0000009001000041000000000010043900000004006004430000008b0100004100000000020004140000008b0320009c0000000002018019000000c00120021000000091011001c700008002020000390225021b0000040f0000000102200190000001fe0000613d000000000101043b000000000101004b0000014c0000c13d000000400100043d00000044021000390000009903000041000000000032043500000024021000390000001d0300003900000000003204350000009a0200004100000000002104350000000402100039000000200300003900000000003204350000008b020000410000008b0310009c000000000102801900000040011002100000009b011001c70000022700010430000000000001042f0000008b020000410000008b0430009c00000000030280190000008b0410009c000000000102801900000040011002100000006002300210000000000112019f0000022700010430000000000403004b000002120000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b0000020b0000413d00000000012300190000000000010435000000000001042d000000000001042f00000219002104210000000102000039000000000001042d0000000002000019000000000001042d0000021e002104230000000102000039000000000001042d0000000002000019000000000001042d00000223002104250000000102000039000000000001042d0000000002000019000000000001042d0000022500000432000002260001042e0000022700010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000001ffffffe0000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff80000000000000000000000000000000000000000000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b830200000200000000000000000000000000000024000000000000000000000000360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbcffffffffffffffffffffffff00000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000bc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000008c379a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000002000000000000000000000000000000400000010000000000000000006f74206120636f6e747261637400000000000000000000000000000000000000455243313936373a206e657720696d706c656d656e746174696f6e206973206e00000000000000000000000000000000000000840000000000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000b7437797880cbbebb3daa2fb964e0ff33b6172f5e0eea1654122731364c3202a";

type ProxyForUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyForUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyForUpgradeable__factory extends ContractFactory {
  constructor(...args: ProxyForUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _logic: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  override deploy(
    _logic: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_logic, _data, overrides || {}) as Promise<
      ProxyForUpgradeable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ProxyForUpgradeable__factory {
    return super.connect(runner) as ProxyForUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyForUpgradeableInterface {
    return new Interface(_abi) as ProxyForUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ProxyForUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ProxyForUpgradeable;
  }
}
