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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  MinimalForwarderEOAOnly,
  MinimalForwarderEOAOnlyInterface,
} from "../../../../../contracts/external-deps/openzeppelin/metatx/MinimalForwarderEOAOnly";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
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
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarderEOAOnly.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
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
    ],
    name: "getNonce",
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
        components: [
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
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct MinimalForwarderEOAOnly.ForwardRequest",
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
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x00040000000000020005000000000002000000000301034f000000000103001900000060041002700000013e01400197000300000013035500020000000303550000013e0040019d0000000102200190000000290000c13d0000008007000039000000400070043f000000040210008c000000aa0000413d000000000203043b000000e002200270000001480420009c000000780000613d000001490420009c000000880000613d0000014a0220009c000000aa0000c13d0000000002000416000000240110008c000000aa0000413d000000000102004b000000aa0000c13d0000000401300370000000000101043b000001520210009c000000aa0000213d0000000000100435000000200000043f0000004002000039000000000100001904f304d30000040f000000000101041a000000800010043f0000015a01000041000004f40001042e0000014001000039000000400010043f0000000001000416000000000101004b000000aa0000c13d0000000f01000039000001400010043f0000013f01000041000001600010043f000001c001000039000000400010043f0000000501000039000001800010043f0000014001000041000001a00010043f0000013e0300004100000000010004140000013e0210009c0000000001038019000000c00110021000000141011001c7000080100200003904f304ee0000040f0000000102200190000000aa0000613d000000000101043b000500000001001d00000000010004140000013e0210009c0000013e01008041000000c00110021000000142011001c7000080100200003904f304ee0000040f0000000102200190000000aa0000613d000000000201043b0000000501000029000000e00010043f000400000002001d000001000020043f000001430100004100000000001004390000013e0100004100000000020004140000013e0320009c0000000002018019000000c00120021000000144011001c70000800b0200003904f304ee0000040f0000000102200190000001010000613d000000000101043b000000a00010043f000000400200043d00000080032000390000000000130435000000600120003900000004030000290000000000310435000000400120003900000005030000290000000000310435000000a0040000390000000001420436000000a0032000390000000005000410000000000053043500000145030000410000000000310435000001460320009c000000ac0000413d000001550100004100000000001004350000004101000039000000040010043f0000015601000041000004f5000104300000000002000416000000000202004b000000aa0000c13d04f3021f0000040f04f3024f0000040f000000000101004b0000000001000019000000010100c039000000400200043d00000000001204350000013e010000410000013e0320009c000000000201801900000040012002100000014b011001c7000004f40001042e000000440210008c000000aa0000413d0000000402300370000000000802043b0000014c0280009c000000aa0000213d00000000028100490000014d04000041000000c40520008c000000000500001900000000050440190000014d02200197000000000602004b000000000400a0190000014d0220009c000000000405c019000000000204004b000000aa0000c13d0000002402300370000000000202043b0000014c0420009c000000aa0000213d0000002304200039000000000414004b000000aa0000813d0000000404200039000000000343034f000000000403043b0000014c0340009c000000aa0000213d00000024032000390000000002340019000000000112004b000000d00000a13d0000000001000019000004f500010430000000c003200039000000400030043f0000000002020433000500000004001d000400000005001d04f304d30000040f000000800010043f0000000403000029000000c00030043f0000014504000041000001200040043f000001400000044300000160001004430000002001000039000000a00200043d0000018000100443000001a0002004430000004002000039000001c000200443000001e0003004430000006002000039000000e00300043d000002000020044300000220003004430000008002000039000001000300043d0000024000200443000002600030044300000005020000290000028000200443000002a0004004430000010000100443000000060100003900000120001004430000014701000041000004f40001042e000300000003001d000400000004001d000500000008001d000200000007001d0000014e0100004100000000001004390000013e0100004100000000020004140000013e0320009c0000000002018019000000c00120021000000144011001c70000800b0200003904f304ee0000040f0000000102200190000001010000613d000000000101043b0000000002000411000000000112004b000001020000c13d00000005010000290000000401100039000100000001001d0000000302000029000000040300002904f3024f0000040f000000000101004b000001140000c13d000000400100043d000000640210003900000157030000410000000000320435000000440210003900000158030000410000000000320435000000240210003900000032030000390000000000320435000001500200004100000000002104350000000402100039000000200300003900000000003204350000013e020000410000013e0310009c0000000001028019000000400110021000000159011001c7000004f500010430000000000001042f000000400100043d00000044021000390000014f030000410000000000320435000000240210003900000007030000390000000000320435000001500200004100000000002104350000000402100039000000200300003900000000003204350000013e020000410000013e0310009c0000000001028019000000400110021000000151011001c7000004f500010430000000050100002900000084011000390000000202000367000000000312034f000000000303043b000000010430003a00000000030000190000000103006039000000010330008c000001240000c13d000001550100004100000000001004350000001101000039000000040010043f0000015601000041000004f500010430000300000004001d00040080001000920000000401200360000000000101043b000001520210009c000000aa0000213d0000000000100435000000200000043f0000013e0100004100000000020004140000013e0320009c0000000002018019000000c00120021000000153011001c7000080100200003904f304ee0000040f00000005050000290000000102200190000000aa0000613d000000000101043b0000000302000029000000000021041b000000040100002900000020021000390000000201000367000000000321034f000000000403043b000001520340009c000000aa0000213d00000000030000310000000005530049000000230650008a0000008005200039000000000551034f000000000505043b0000014d07000041000000000865004b000000000800001900000000080780190000014d066001970000014d09500197000000000a69004b0000000007008019000000000669013f0000014d0660009c000000000708c0190000004002200039000000000221034f000000000202043b000500000002001d000000000207004b000000aa0000c13d0000000105500029000000000251034f000000000202043b0000014c0620009c000000aa0000213d000000000323004900000020055000390000014d06000041000000000735004b000000000700001900000000070620190000014d033001970000014d08500197000000000938004b0000000006008019000000000338013f0000014d0330009c000000000607c019000000000306004b000000aa0000c13d0000000403100360000000000303043b000001520630009c000000aa0000213d000000000851034f0000001f0720018f000000400500043d000000200650003900000005092002720000017f0000613d000000000a000019000000050ba00210000000000cb60019000000000bb8034f000000000b0b043b0000000000bc0435000000010aa00039000000000b9a004b000001770000413d000000000a07004b0000018e0000613d0000000509900210000000000898034f00000000099600190000000307700210000000000a090433000000000a7a01cf000000000a7a022f000000000808043b0000010007700089000000000878022f00000000077801cf0000000007a7019f00000000007904350000000007260019000000600330021000000000003704350000001403200039000000000035043500000053022000390003002000000092000000030220017f0000000002250019000000000352004b000000000300001900000001030040390000014c0720009c000000720000213d0000000103300190000000720000c13d000000400020043f00000004020000290000004002200039000000000121034f000000000301043b000000040140008c000001a80000c13d00000001020000390000000103000031000001c20000013d0000013e010000410000013e0260009c0000000006018019000000400260021000000000050504330000013e0650009c00000000050180190000006005500210000000000225019f00000005060000290000013e0560009c0000000001064019000000c001100210000000000112019f000000000203004b000001ba0000c13d0000000002040019000001bd0000013d00000154011001c70000800902000039000000000500001904f304e90000040f000300000001035500000060011002700001013e0010019d0000013e03100197000000000103004b000001ed0000c13d000000600100003900000005030000290000003f4330011a0000000004000414000000000334004b0000021c0000a13d000000400300043d000000200430003900000040050000390000000000540435000000010220018f00000000002304350000000001010433000000400230003900000000001204350000006002300039000000000401004b0000000207000029000001df0000613d000000000400001900000000052400190000000006470019000000000606043300000000006504350000002004400039000000000514004b000001d80000413d0000001f04100039000000030440017f0000000001120019000000000001043500000060014000390000013e020000410000013e0410009c00000000010280190000013e0430009c000000000302801900000040023002100000006001100210000000000121019f000004f40001042e0000014c0130009c000000720000213d0000001f01300039000000030110017f0000003f01100039000000030410017f000000400100043d0000000004410019000000000514004b000000000500001900000001050040390000014c0640009c000000720000213d0000000105500190000000720000c13d000000400040043f0000001f0430018f0000000009310436000000030500036700000005033002720000020b0000613d000000000600001900000005076002100000000008790019000000000775034f000000000707043b00000000007804350000000106600039000000000736004b000002030000413d000200000009001d000000000604004b000001c50000613d0000000503300210000000000535034f00000002033000290000000304400210000000000603043300000000064601cf000000000646022f000000000505043b0000010004400089000000000545022f00000000044501cf000000000464019f0000000000430435000001c50000013d000000010100008a000000000001043500000000000004310000014d02000041000000430310008c000000000300001900000000030220190000014d04100197000000000504004b00000000020080190000014d0440009c000000000203c019000000000202004b0000024d0000613d00000002020003670000000403200370000000000403043b0000014c0340009c0000024d0000213d00000000034100490000014d05000041000000c40630008c000000000600001900000000060540190000014d03300197000000000703004b000000000500a0190000014d0330009c000000000506c019000000000305004b0000024d0000c13d0000002403200370000000000503043b0000014c0350009c0000024d0000213d0000002303500039000000000313004b0000024d0000813d0000000403500039000000000232034f000000000302043b0000014c0230009c0000024d0000213d00000024025000390000000005320019000000000115004b0000024d0000213d0000000401400039000000000001042d0000000001000019000004f500010430000b000000000002000a00000003001d000600000002001d000000020a000367000b00000001001d00000000021a034f000000000b02043b0000015b02b0009c0000046f0000813d0000000b01000029000000200210003900000000032a034f000000000c03043b0000015203c0009c0000046f0000213d00000000030000310000000b0430006a0000001f0540008a000000800420003900000000044a034f000000000404043b0000014d06000041000000000754004b000000000700001900000000070680190000014d055001970000014d08400197000000000958004b0000000006008019000000000558013f0000014d0550009c000000000607c019000000600220003900000000022a034f000000000102043b000700000001001d000000000206004b0000046f0000c13d0000000b0440002900000000024a034f000000000202043b0000014c0520009c0000046f0000213d000000000523004900000020064000390000014d04000041000000000756004b000000000700001900000000070420190000014d055001970000014d08600197000000000958004b0000000004008019000000000558013f0000014d0550009c000000000407c019000000000404004b0000046f0000c13d0000001f042000390005002000000092000000050440017f0000003f04400039000000050540017f000000400400043d0000000005540019000000000745004b000000000700001900000001070040390000014c0850009c000004720000213d0000000107700190000004720000c13d000000400050043f00000000052404360000000007620019000000000337004b0000046f0000213d00000000036a034f0000001f0120018f0000000506200272000002a90000613d000000000700001900000005087002100000000009850019000000000883034f000000000808043b00000000008904350000000107700039000000000867004b000002a10000413d00080000000c001d00090000000b001d000000000701004b000002ba0000613d0000000506600210000000000363034f00000000066500190000000301100210000000000706043300000000071701cf000000000717022f000000000303043b0000010001100089000000000313022f00000000011301cf000000000171019f0000000000160435000000000125001900000000000104350000013e010000410000013e0250009c0000000005018019000000400250021000000000030404330000013e0430009c00000000030180190000006003300210000000000223019f00000000030004140000013e0430009c0000000003018019000000c001300210000000000121019f00000154011001c7000080100200003904f304ee0000040f0000000102200190000000090400002900000008050000290000046f0000613d000000000301043b000000400100043d000000600210003900000000005204350000004002100039000000000042043500000020021000390000015c0400004100000000004204350000000b0700002900000040047000390000000204400367000000000404043b0000008006100039000000000046043500000060047000390000000204400367000000000404043b000000e0051000390000000000350435000000c00310003900000007050000290000000000530435000000a0031000390000000000430435000000e00300003900000000003104350000015d0310009c000004720000213d0000010003100039000000400030043f0000013e040000410000013e0320009c0000000002048019000000400220021000000000010104330000013e0310009c00000000010480190000006001100210000000000121019f00000000020004140000013e0320009c0000000002048019000000c002200210000000000112019f00000154011001c7000080100200003904f304ee0000040f00000001022001900000046f0000613d000000000101043b000400000001001d0000015e0100004100000000001004390000000001000412000800000001001d00000004001004430000004001000039000000240010044300000000010004140000013e0210009c0000013e01008041000000c0011002100000015f011001c7000080050200003904f304ee0000040f0000000102200190000004710000613d000000000101043b00000152011001970000000002000410000300000002001d000000000112004b0000034b0000c13d0000015e01000041000000000010043900000008010000290000000400100443000000200100003900000024001004430000013e0300004100000000010004140000013e0210009c0000000001038019000000c0011002100000015f011001c7000080050200003904f304ee0000040f0000000102200190000004710000613d000000000101043b000900000001001d0000014301000041000000000010043900000000010004140000013e0210009c0000013e01008041000000c00110021000000144011001c70000800b0200003904f304ee0000040f0000000102200190000004710000613d000000000101043b000000090110006c0000034b0000c13d0000015e0100004100000000001004390000000801000029000000040010044300000024000004430000013e0100004100000000020004140000013e0320009c0000000002018019000000c0012002100000015f011001c7000080050200003904f304ee0000040f0000000102200190000004710000613d000003b70000013d000000400100043d000900000001001d0000015e01000041000000000010043900000008010000290000000400100443000000a001000039000200000001001d00000024001004430000013e0300004100000000010004140000013e0210009c0000000001038019000000c0011002100000015f011001c7000080050200003904f304ee0000040f0000000102200190000004710000613d00000009020000290000002002200039000000000101043b000100000002001d00000000001204350000015e010000410000000000100439000000080100002900000004001004430000006001000039000000240010044300000000010004140000013e0210009c0000013e01008041000000c0011002100000015f011001c7000080050200003904f304ee0000040f0000000102200190000004710000613d000000000101043b0000000902000029000000400220003900000000001204350000015e01000041000000000010043900000008010000290000000400100443000000800100003900000024001004430000013e0300004100000000010004140000013e0210009c0000000001038019000000c0011002100000015f011001c7000080050200003904f304ee0000040f0000000102200190000004710000613d000000000101043b0000000902000029000000600220003900000000001204350000014301000041000000000010043900000000010004140000013e0210009c0000013e01008041000000c00110021000000144011001c70000800b0200003904f304ee0000040f0000000102200190000004710000613d000000000101043b0000000904000029000000a002400039000000030300002900000000003204350000008002400039000000000012043500000002010000290000000000140435000001600140009c000004720000213d0000000903000029000000c001300039000000400010043f0000013e0100004100000001040000290000013e0240009c0000000004018019000000400240021000000000030304330000013e0430009c00000000030180190000006003300210000000000223019f00000000030004140000013e0430009c0000000003018019000000c001300210000000000121019f00000154011001c7000080100200003904f304ee0000040f00000001022001900000046f0000613d000000000101043b000000400200043d00000022032000390000000404000029000000000043043500000161030000410000000000320435000000020320003900000000001304350000013e0100004100000000030004140000013e0430009c00000000030180190000013e0420009c00000000020180190000004001200210000000c002300210000000000121019f00000162011001c7000080100200003904f304ee0000040f00000001022001900000046f0000613d0000000003000031000000000101043b0000000a020000290000014c0220009c000004720000213d0000000a020000290000001f02200039000000050220017f0000003f02200039000000050420017f000000400200043d0000000004420019000000000524004b000000000500001900000001050040390000014c0640009c000004720000213d0000000105500190000004720000c13d000000400040043f0000000a0500002900000000045204360000000605500029000000000335004b0000046f0000213d0000000a060000290000001f0360018f000000060500002900000002055003670000000506600272000003f60000613d000000000700001900000005087002100000000009840019000000000885034f000000000808043b00000000008904350000000107700039000000000867004b000003ee0000413d000000000703004b000004050000613d0000000506600210000000000565034f00000000066400190000000303300210000000000706043300000000073701cf000000000737022f000000000505043b0000010003300089000000000535022f00000000033501cf000000000373019f00000000003604350000000a034000290000000000030435000000400300043d0000000005020433000000410550008c000004780000c13d00000040052000390000000005050433000001640650009c000004890000213d0000006002200039000000000202043300000000040404330000006006300039000000000056043500000040053000390000000000450435000000f80220027000000020043000390000000000240435000000000013043500000000000004350000013e0100004100000000020004140000013e0420009c00000000020180190000013e0430009c00000000030180190000004001300210000000c002200210000000000112019f00000165011001c7000000010200003904f304ee0000040f000000000301001900000060033002700000013e03300197000000200430008c000000000403001900000020040080390000001f0540018f0000000504400272000004380000613d00000000060000190000000507600210000000000871034f000000000808043b00000000008704350000000106600039000000000746004b000004310000413d000000000605004b000004460000613d00000003055002100000000504400210000000000604043300000000065601cf000000000656022f000000000741034f000000000707043b0000010005500089000000000757022f00000000055701cf000000000565019f0000000000540435000100000003001f000300000001035500000001022001900000049d0000613d0000000001000433000a00000001001d0000015201100198000004c00000613d0000000b010000290000000201100367000000000101043b000001520210009c0000046f0000213d0000000000100435000000200000043f0000013e0100004100000000020004140000013e0320009c0000000002018019000000c00120021000000153011001c7000080100200003904f304ee0000040f00000001022001900000046f0000613d000000000101043b000000000101041a000000070110006c00000000010000190000046d0000c13d0000000b010000290000000201100367000000000101043b000001520210009c0000046f0000213d0000000a0110014f000001520110019800000000010000190000000101006039000000010110018f000000000001042d0000000001000019000004f500010430000000000001042f000001550100004100000000001004350000004101000039000000040010043f0000015601000041000004f50001043000000044013000390000016302000041000000000021043500000024013000390000001f020000390000000000210435000001500100004100000000001304350000000401300039000000200200003900000000002104350000013e010000410000013e0230009c0000000003018019000000400130021000000151011001c7000004f500010430000000640130003900000167020000410000000000210435000000440130003900000168020000410000000000210435000000240130003900000022020000390000000000210435000001500100004100000000001304350000000401300039000000200200003900000000002104350000013e010000410000013e0230009c0000000003018019000000400130021000000159011001c7000004f500010430000000400200043d0000001f0430018f0000000505300272000004aa0000613d000000000600001900000005076002100000000008720019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000004a20000413d000000000604004b000004b90000613d0000000505500210000000000151034f00000000055200190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f00000000001504350000013e010000410000013e0420009c000000000201801900000040012002100000006002300210000000000121019f000004f500010430000000400100043d000000440210003900000166030000410000000000320435000000240210003900000018030000390000000000320435000001500200004100000000002104350000000402100039000000200300003900000000003204350000013e020000410000013e0310009c0000000001028019000000400110021000000151011001c7000004f500010430000000000001042f0000013e030000410000013e0410009c000000000103801900000040011002100000013e0420009c00000000020380190000006002200210000000000112019f00000000020004140000013e0420009c0000000002038019000000c002200210000000000112019f00000154011001c7000080100200003904f304ee0000040f0000000102200190000004e70000613d000000000101043b000000000001042d0000000001000019000004f500010430000004ec002104210000000102000039000000000001042d0000000002000019000000000001042d000004f1002104230000000102000039000000000001042d0000000002000019000000000001042d000004f300000432000004f40001042e000004f5000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff47534e763220466f727761726465720000000000000000000000000000000000302e302e31000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000f0000016000000000000000000200000000000000000000000000000000000005000001a000000000000000009a8a0592ac89c5ad3bc6df8224c17b485976f597df104ee20d0df415241f670b02000002000000000000000000000000000000040000000000000000000000008b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f000000000000000000000000000000000000000000000000ffffffffffffff4000000002000000000000000000000000000001c000000100000000000000000000000000000000000000000000000000000000000000000000000000bf5d3bdb0000000000000000000000000000000000000000000000000000000047153f82000000000000000000000000000000000000000000000000000000002d0335ab0000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff8000000000000000000000000000000000000000000000000000000000000000938b5f3299a1f3b18e458564efbb950733226014eece26fae19012d850b48d836e6f7420454f410000000000000000000000000000000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff020000000000000000000000000000000000004000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000206e6f74206d61746368207265717565737400000000000000000000000000004d696e696d616c466f727761726465723a207369676e617475726520646f6573000000000000000000000000000000000000008400000000000000000000000000000000000000000000000000000000000000200000008000000000000000000000000000000000000000010000000000000000000000000000000000000000dd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e48000000000000000000000000000000000000000000000000fffffffffffffeff310ab089e4439a4c15d089f94afb7896ff553aecb10793d0ab882de59d99a32e0200000200000000000000000000000000000044000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff3f1901000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000004200000000000000000000000045434453413a20696e76616c6964207369676e6174757265206c656e677468007fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0000000000000000000000000000000000000008000000000000000000000000045434453413a20696e76616c6964207369676e61747572650000000000000000756500000000000000000000000000000000000000000000000000000000000045434453413a20696e76616c6964207369676e6174757265202773272076616c0000000000000000000000000000000000000000000000000000000000000000f7b36688b1d71d0790030fc2afd58a84f343b0873f5604e6af397257a45ab52f";

type MinimalForwarderEOAOnlyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinimalForwarderEOAOnlyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinimalForwarderEOAOnly__factory extends ContractFactory {
  constructor(...args: MinimalForwarderEOAOnlyConstructorParams) {
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
      MinimalForwarderEOAOnly & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MinimalForwarderEOAOnly__factory {
    return super.connect(runner) as MinimalForwarderEOAOnly__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalForwarderEOAOnlyInterface {
    return new Interface(_abi) as MinimalForwarderEOAOnlyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MinimalForwarderEOAOnly {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MinimalForwarderEOAOnly;
  }
}
