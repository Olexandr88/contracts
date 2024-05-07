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
  Permissions,
  PermissionsInterface,
} from "../../../../../contracts/extension/upgradeable/Permissions.sol/Permissions";

const _abi = [
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
  "0x000200000000000200050000000000020001000000010355000000000301001900000060033002700000012d0030019d0000008004000039000000400040043f0000012d0330019700000001022001900000001d0000c13d000000040230008c000001710000413d000000000201043b000000e0022002700000012f0420009c000000250000a13d000001300420009c0000003c0000213d000001330120009c000000540000613d000001340120009c000001710000c13d0000000001000416000000000101004b000001710000c13d000000800000043f0000013d01000041000004af0001042e0000000001000416000000000101004b000001710000c13d0000002001000039000001000010044300000120000004430000012e01000041000004af0001042e000001350420009c000000710000613d000001360420009c000000810000613d000001370220009c000001710000c13d0000000002000416000000440330008c000001710000413d000000000202004b000001710000c13d0000002402100370000000000302043b000001390230009c000001710000213d0000000002000411000000000332004b000001130000c13d0000000401100370000000000101043b04ae03680000040f0000000001000019000004af0001042e000001310420009c000000c80000613d000001320120009c000001710000c13d0000000001000416000000000101004b000001710000c13d000000000103001904ae024b0000040f000400000001001d000500000002001d00000000001004350000013801000041000000200010043f000000000100001904ae04920000040f000000000101041a000000000200041104ae026d0000040f0000000401000029000000050200002904ae03680000040f0000000001000019000004af0001042e0000000001000416000000000101004b000001710000c13d000000000103001904ae024b0000040f000500000002001d00000000001004350000013a01000041000000200010043f000000000100001904ae04920000040f000000050200002900000139022001970000000000200435000000200010043f000000000100001904ae04920000040f000000000101041a000000ff011001900000000001000019000000010100c039000000400200043d00000000001204350000012d010000410000012d0320009c000000000201801900000040012002100000013c011001c7000004af0001042e0000000002000416000000240330008c000001710000413d000000000202004b000001710000c13d0000000401100370000000000101043b00000000001004350000013801000041000000200010043f000000000100001904ae04920000040f000000000101041a000000800010043f0000013d01000041000004af0001042e0000000002000416000000440330008c000001710000413d000000000202004b000001710000c13d0000002402100370000000000202043b000500000002001d000001390220009c000001710000213d0000000401100370000000000101043b000400000001001d00000000001004350000013801000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b000000000101041a000300000001001d00000000001004350000013a01000041000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f00000000040004110000000102200190000001710000613d000000000101043b0000013902400197000200000002001d0000000000200435000000200010043f0000012d0100004100000000020004140000012d0320009c0000000002018019000000c0012002100000013b011001c70000801002000039000100000004001d04ae04a90000040f0000000102200190000001710000613d000000000101043b000000000101041a000000ff01100190000001200000c13d000000400300043d000001450130009c000001730000413d000001500100004100000000001004350000004101000039000000040010043f0000015101000041000004b0000104300000000002000416000000440330008c000001710000413d000000000202004b000001710000c13d0000002402100370000000000202043b000500000002001d000001390220009c000001710000213d0000000401100370000000000101043b000400000001001d00000000001004350000013a01000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b0000000000000435000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b000000000101041a000000ff011001900000011d0000c13d000000040100002900000000001004350000013a01000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b00000005020000290000000000200435000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b000000000101041a000000ff011001900000000001000019000000010100c0390000011e0000013d0000013e01000041000000800010043f0000002001000039000000840010043f0000001a01000039000000a40010043f0000013f01000041000000c40010043f0000014001000041000004b0000104300000000101000039000000010110018f000000690000013d000000040100002900000000001004350000013a01000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b00000005020000290000000000200435000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b000000000101041a000000ff01100190000001920000c13d000000040100002900000000001004350000013a01000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000001710000613d000000000101043b00000005020000290000000000200435000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f00000001070000290000000102200190000001710000613d000000000101043b000000000201041a000001000300008a000000000232016f00000001022001bf000000000021041b0000012d0100004100000000020004140000012d0320009c0000000002018019000000c00120021000000143011001c70000800d02000039000000040300003900000144040000410000000405000029000000050600002904ae04a40000040f0000000101200190000001710000613d0000000001000019000004af0001042e0000000001000019000004b0000104300000006001300039000000400010043f0000002a01000039000000000213043600000000010000310000000101100367000000000400001900000000050200190000000506400210000000000661034f000000000606043b00000000056504360000000104400039000000020640008c0000017b0000413d0000000004030433000000000404004b0000018c0000613d0000000004020433000001460440019700000147044001c700000000004204350000000004030433000000020440008c0000019e0000813d000001500100004100000000001004350000003201000039000000040010043f0000015101000041000004b000010430000000400100043d00000044021000390000014103000041000000000032043500000024021000390000001d0300003900000000003204350000013e02000041000000000021043500000004021000390000002003000039000002440000013d00000021043000390000000005040433000001460550019700000148055001c700000000005404350000002904000039000000020800002900000000060800190000000007030433000000000747004b0000018c0000a13d0000000307600210000000780770018f000001490770021f0000000008240019000000000908043300000146099001970000014a07700197000000000779019f00000000007804350000000408600270000000010440008a000000010740008c000001a50000213d000000100460008c0000023a0000813d000000400500043d0000014b0450009c000000c20000213d0000008004500039000000400040043f00000042040000390000000004450436000000000600001900000000070400190000000508600210000000000881034f000000000808043b00000000078704360000000106600039000000030860008c000001c10000413d0000000001050433000000000101004b0000018c0000613d0000000001040433000001460110019700000147011001c700000000001404350000000001050433000000020110008c0000018c0000413d00000021015000390000000006010433000001460660019700000148066001c700000000006104350000004101000039000000030900002900000000070900190000000008050433000000000818004b0000018c0000a13d0000000308700210000000780880018f000001490880021f0000000009410019000000000a090433000001460aa001970000014a0880019700000000088a019f00000000008904350000000409700270000000010110008a000000010810008c000001d90000213d000000100170008c0000023a0000813d000000400600043d00000020016000390000014d07000041000000000071043500000035076000390000000003030433000000000803004b000001fc0000613d00000000080000190000000009780019000000000a280019000000000a0a04330000000000a904350000002008800039000000000938004b000001f50000413d00000000027300190000000000020435000000000263001900000035072000390000014e08000041000000000087043500000046072000390000000002050433000000000502004b0000020e0000613d000000000500001900000000087500190000000009450019000000000909043300000000009804350000002005500039000000000825004b000002070000413d0000000004720019000000000004043500000000023200190000002603200039000000000036043500000065022000390005002000000092000000050220017f0000000003620019000000000223004b0000000002000019000000010200403900000000040300190000014f0330009c000000c20000213d0000000102200190000000c20000c13d000400000004001d000000400040043f0000013e0200004100000000002404350000000402400039000000200300003900000000003204350000000003060433000300000003001d00000024024000390000000000320435000000440240003904ae02600000040f00000003010000290000001f01100039000000050110017f0000012d0200004100000004040000290000012d0340009c000000000402801900000044011000390000012d0310009c000000000102801900000040024002100000006001100210000000000121019f000004b000010430000000400100043d00000044021000390000014c0300004100000000003204350000013e020000410000000000210435000000240210003900000020030000390000000000320435000000040210003900000000003204350000012d020000410000012d0310009c0000000001028019000000400110021000000142011001c7000004b0000104300000015202000041000000430310008c000000000300001900000000030220190000015201100197000000000401004b0000000002008019000001520110009c000000000203c019000000000102004b0000025e0000613d00000001010003670000002402100370000000000202043b000001390320009c0000025e0000213d0000000401100370000000000101043b000000000001042d0000000001000019000004b000010430000000000403004b0000026a0000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b000002630000413d00000000012300190000000000010435000000000001042d0003000000000002000300000002001d000200000001001d00000000001004350000013a01000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000002910000613d000000000101043b00000003020000290000013902200197000300000002001d0000000000200435000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000002910000613d000000000101043b000000000101041a000000ff01100190000002930000613d000000000001042d0000000001000019000004b000010430000000400300043d000001530130009c0000029c0000a13d000001500100004100000000001004350000004101000039000000040010043f0000015101000041000004b0000104300000006001300039000000400010043f0000002a01000039000000000213043600000000010000310000000101100367000000000400001900000000050200190000000506400210000000000661034f000000000606043b00000000056504360000000104400039000000020640008c000002a40000413d0000000004030433000000000404004b000002b50000613d0000000004020433000001460440019700000147044001c700000000004204350000000004030433000000020440008c000002bb0000813d000001500100004100000000001004350000003201000039000000040010043f0000015101000041000004b00001043000000021043000390000000005040433000001460550019700000148055001c700000000005404350000002904000039000000030800002900000000060800190000000007030433000000000747004b000002b50000a13d0000000307600210000000780770018f000001490770021f0000000008240019000000000908043300000146099001970000014a07700197000000000797019f00000000007804350000000408600270000000010440008a000000010740008c000002c20000213d000000100460008c000003570000813d000000400500043d0000014b0450009c000002960000213d0000008004500039000000400040043f00000042040000390000000004450436000000000600001900000000070400190000000508600210000000000881034f000000000808043b00000000078704360000000106600039000000030860008c000002de0000413d0000000001050433000000000101004b000002b50000613d0000000001040433000001460110019700000147011001c700000000001404350000000001050433000000020110008c000002b50000413d00000021015000390000000006010433000001460660019700000148066001c700000000006104350000004101000039000000020900002900000000070900190000000008050433000000000818004b000002b50000a13d0000000308700210000000780880018f000001490880021f0000000009410019000000000a090433000001460aa001970000014a088001970000000008a8019f00000000008904350000000409700270000000010110008a000000010810008c000002f60000213d000000100170008c000003570000813d000000400600043d00000020016000390000014d07000041000000000071043500000035076000390000000003030433000000000803004b000003190000613d00000000080000190000000009780019000000000a280019000000000a0a04330000000000a904350000002008800039000000000938004b000003120000413d00000000027300190000000000020435000000000263001900000035072000390000014e08000041000000000087043500000046072000390000000002050433000000000502004b0000032b0000613d000000000500001900000000087500190000000009450019000000000909043300000000009804350000002005500039000000000825004b000003240000413d0000000004720019000000000004043500000000022300190000002603200039000000000036043500000065022000390003002000000092000000030220017f0000000003620019000000000223004b0000000002000019000000010200403900000000040300190000014f0330009c000002960000213d0000000102200190000002960000c13d000200000004001d000000400040043f0000013e0200004100000000002404350000000402400039000000200300003900000000003204350000000003060433000100000003001d00000024024000390000000000320435000000440240003904ae02600000040f00000001010000290000001f01100039000000030110017f0000012d0200004100000002040000290000012d0340009c000000000402801900000044011000390000012d0310009c000000000102801900000040024002100000006001100210000000000121019f000004b000010430000000400100043d00000044021000390000014c0300004100000000003204350000013e020000410000000000210435000000240210003900000020030000390000000000320435000000040210003900000000003204350000012d020000410000012d0310009c0000000001028019000000400110021000000142011001c7000004b0000104300003000000000002000200000002001d000300000001001d00000000001004350000013a01000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000003bb0000613d000000000101043b00000002020000290000013902200197000200000002001d0000000000200435000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000003bb0000613d000000000101043b000000000101041a000000ff01100190000003bd0000613d000000030100002900000000001004350000013a01000041000000200010043f0000012d0300004100000000010004140000012d0210009c0000000001038019000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000003bb0000613d000000000101043b00000002020000290000000000200435000000200010043f00000000010004140000012d0210009c0000012d01008041000000c0011002100000013b011001c7000080100200003904ae04a90000040f0000000102200190000003bb0000613d000000000101043b000000000201041a000001000300008a000000000232016f000000000021041b0000012d0100004100000000020004140000012d0320009c0000000002018019000000c00120021000000143011001c70000800d020000390000000403000039000000000700041100000154040000410000000305000029000000020600002904ae04a40000040f0000000101200190000003bb0000613d000000000001042d0000000001000019000004b000010430000000400300043d000001450130009c000003c60000413d000001500100004100000000001004350000004101000039000000040010043f0000015101000041000004b0000104300000006001300039000000400010043f0000002a01000039000000000213043600000000010000310000000101100367000000000400001900000000050200190000000506400210000000000661034f000000000606043b00000000056504360000000104400039000000020640008c000003ce0000413d0000000004030433000000000404004b000003df0000613d0000000004020433000001460440019700000147044001c700000000004204350000000004030433000000020440008c000003e50000813d000001500100004100000000001004350000003201000039000000040010043f0000015101000041000004b00001043000000021043000390000000005040433000001460550019700000148055001c700000000005404350000002904000039000000020800002900000000060800190000000007030433000000000747004b000003df0000a13d0000000307600210000000780770018f000001490770021f0000000008240019000000000908043300000146099001970000014a07700197000000000779019f00000000007804350000000408600270000000010440008a000000010740008c000003ec0000213d000000100460008c000004810000813d000000400500043d0000014b0450009c000003c00000213d0000008004500039000000400040043f00000042040000390000000004450436000000000600001900000000070400190000000508600210000000000881034f000000000808043b00000000078704360000000106600039000000030860008c000004080000413d0000000001050433000000000101004b000003df0000613d0000000001040433000001460110019700000147011001c700000000001404350000000001050433000000020110008c000003df0000413d00000021015000390000000006010433000001460660019700000148066001c700000000006104350000004101000039000000030900002900000000070900190000000008050433000000000818004b000003df0000a13d0000000308700210000000780880018f000001490880021f0000000009410019000000000a090433000001460aa001970000014a0880019700000000088a019f00000000008904350000000409700270000000010110008a000000010810008c000004200000213d000000100170008c000004810000813d000000400600043d00000020016000390000014d07000041000000000071043500000035076000390000000003030433000000000803004b000004430000613d00000000080000190000000009780019000000000a280019000000000a0a04330000000000a904350000002008800039000000000938004b0000043c0000413d00000000027300190000000000020435000000000263001900000035072000390000014e08000041000000000087043500000046072000390000000002050433000000000502004b000004550000613d000000000500001900000000087500190000000009450019000000000909043300000000009804350000002005500039000000000825004b0000044e0000413d0000000004720019000000000004043500000000023200190000002603200039000000000036043500000065022000390003002000000092000000030220017f0000000003620019000000000223004b0000000002000019000000010200403900000000040300190000014f0330009c000003c00000213d0000000102200190000003c00000c13d000200000004001d000000400040043f0000013e0200004100000000002404350000000402400039000000200300003900000000003204350000000003060433000100000003001d00000024024000390000000000320435000000440240003904ae02600000040f00000001010000290000001f01100039000000030110017f0000012d0200004100000002040000290000012d0340009c000000000402801900000044011000390000012d0310009c000000000102801900000040024002100000006001100210000000000121019f000004b000010430000000400100043d00000044021000390000014c0300004100000000003204350000013e020000410000000000210435000000240210003900000020030000390000000000320435000000040210003900000000003204350000012d020000410000012d0310009c0000000001028019000000400110021000000142011001c7000004b0000104300000012d020000410000012d0310009c000000000102801900000000030004140000012d0430009c0000000003028019000000c0023002100000004001100210000000000121019f0000013b011001c7000080100200003904ae04a90000040f0000000102200190000004a20000613d000000000101043b000000000001042d0000000001000019000004b000010430000004a7002104210000000102000039000000000001042d0000000002000019000000000001042d000004ac002104230000000102000039000000000001042d0000000002000019000000000001042d000004ae00000432000004af0001042e000004b00001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000002000000000000000000000000000000400000010000000000000000000000000000000000000000000000000000000000000000000000000091d1485300000000000000000000000000000000000000000000000000000000a32fa5b200000000000000000000000000000000000000000000000000000000a32fa5b300000000000000000000000000000000000000000000000000000000d547741f0000000000000000000000000000000000000000000000000000000091d1485400000000000000000000000000000000000000000000000000000000a217fddf00000000000000000000000000000000000000000000000000000000248a9ca3000000000000000000000000000000000000000000000000000000002f2ff15d0000000000000000000000000000000000000000000000000000000036568abe0a7b0f5c59907924802379ebe98cdc23e2ee7820f63d30126e10b3752010e501000000000000000000000000ffffffffffffffffffffffffffffffffffffffff0a7b0f5c59907924802379ebe98cdc23e2ee7820f63d30126e10b3752010e50002000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002000000080000000000000000008c379a00000000000000000000000000000000000000000000000000000000043616e206f6e6c792072656e6f756e636520666f722073656c66000000000000000000000000000000000000000000000000006400000080000000000000000043616e206f6e6c79206772616e7420746f206e6f6e20686f6c64657273000000000000000000000000000000000000000000006400000000000000000000000002000000000000000000000000000000000000000000000000000000000000002f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d000000000000000000000000000000000000000000000000ffffffffffffffa000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3000000000000000000000000000000000000000000000000000000000000000780000000000000000000000000000000000000000000000000000000000000030313233343536373839616263646566000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff7f537472696e67733a20686578206c656e67746820696e73756666696369656e745065726d697373696f6e733a206163636f756e74200000000000000000000000206973206d697373696e6720726f6c6520000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff4e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff9ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b0000000000000000000000000000000000000000000000000000000000000000306a11bd1549256afc188c8219e8b82a6978855d1cd43e64ea6031a5bfd1698b";

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
