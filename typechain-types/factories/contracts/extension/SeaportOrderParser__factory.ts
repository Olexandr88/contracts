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
  SeaportOrderParser,
  SeaportOrderParserInterface,
} from "../../../contracts/extension/SeaportOrderParser";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x000a0000000000020000000101200190000001320000613d0000014001000039000000400010043f0000000001000416000000000101004b000001320000c13d0000018001000039000000400010043f0000000701000039000001400010043f0000005501000041000001600010043f00000056010000410000000002000414000000560320009c0000000002018019000000c00120021000000057011001c70000801002000039014f014a0000040f0000000102200190000001320000613d000000000301043b000000400100043d000000580210009c000000770000813d000a00000003001d0000004002100039000000400020043f000000030200003900000000012104360000005902000041000000000021043500000056020000410000000003000414000000560430009c0000000003028019000000560410009c00000000010280190000004001100210000000c002300210000000000121019f0000005a011001c70000801002000039014f014a0000040f0000000102200190000001320000613d000000000301043b000000400500043d0000005b0150009c000000770000213d000000a001500039000000400010043f00000080015000390000005c02000041000000000021043500000060015000390000005d02000041000000000021043500000040015000390000005e0200004100000000002104350000006a0100003900000000041504360000005f010000410000000000140435000000400600043d000000600160009c000000770000213d000000c001600039000000400010043f000000a001600039000000610200004100000000002104350000008001600039000000620200004100000000002104350000006001600039000000630200004100000000002104350000004001600039000000640200004100000000002104350000008401000039000000000716043600000065010000410000000000170435000000400800043d000000660180009c000000770000213d0000010001800039000000400010043f000000e00180003900000067020000410000000000210435000000c00180003900000068020000410000000000210435000000a0018000390000006902000041000000000021043500000080018000390000006a02000041000000000021043500000060018000390000006b02000041000000000021043500000040018000390000006c020000410000000000210435000000d40100003900000000091804360000006d010000410000000000190435000000400100043d0000006e0210009c0000007d0000a13d000000760100004100000000001004350000004101000039000000040010043f00000077010000410000015100010430000300000009001d000400000008001d000600000007001d000700000006001d000800000005001d000900000004001d000500000003001d0000008002100039000000400020043f00000060021000390000006f030000410000000000320435000000400210003900000070030000410000000000320435000000520200003900000000012104360000007102000041000000000021043500000056040000410000000002000414000000560320009c0000000002048019000000560310009c00000000010480190000004001100210000000c002200210000000000121019f00000072011001c70000801002000039014f014a0000040f0000000102200190000001320000613d0000000903000029000000560230009c000000560500004100000000020500190000000002034019000000400220021000000008030000290000000003030433000000560430009c00000000030580190000006003300210000000000223019f000000000101043b000200000001001d0000000001000414000000560310009c0000000001058019000000c001100210000000000121019f00000073011001c70000801002000039014f014a0000040f0000000102200190000001320000613d00000056020000410000000604000029000000560340009c00000000030200190000000003044019000000400330021000000007040000290000000004040433000000560540009c00000000040280190000006004400210000000000334019f000000000101043b000100000001001d0000000001000414000000560410009c0000000001028019000000c001100210000000000131019f00000073011001c70000801002000039014f014a0000040f000000000301034f0000000101200190000001320000613d000000400200043d0000002001200039000000000a03043b00000004030000290000000003030433000000000403004b0000000307000029000000df0000613d000000000400001900000000051400190000000006740019000000000606043300000000006504350000002004400039000000000534004b000000d80000413d0000000003130019000000000003043500000007040000290000000004040433000000000504004b00000009080000290000000609000029000000ef0000613d000000000500001900000000063500190000000007950019000000000707043300000000007604350000002005500039000000000645004b000000e80000413d0000000003340019000000000003043500000008040000290000000004040433000000000504004b000000fd0000613d000000000500001900000000063500190000000007850019000000000707043300000000007604350000002005500039000000000645004b000000f60000413d000000000334001900000000000304350000000003230049000000200430008a00000000004204350000001f03300039000000200400008a000000000443016f0000000003240019000000000443004b00000000040000190000000104004039000000740530009c000000770000213d0000000104400190000000770000c13d000000400030043f000000000202043300090000000a001d014f01340000040f000001200010043f0000000906000029000001000060043f0000000105000029000000e00050043f0000000204000029000000c00040043f0000000503000029000000a00030043f0000000a02000029000000800020043f0000014000000443000001600020044300000020020000390000018000200443000001a0003004430000004003000039000001c000300443000001e000400443000000600300003900000200003004430000022000500443000000800300003900000240003004430000026000600443000000a0030000390000028000300443000002a0001004430000010000200443000000060100003900000120001004430000007501000041000001500001042e000000000100001900000151000104300000005603000041000000560410009c00000000010380190000004001100210000000560420009c00000000020380190000006002200210000000000112019f0000000002000414000000560420009c0000000002038019000000c002200210000000000112019f00000073011001c70000801002000039014f014a0000040f0000000102200190000001480000613d000000000101043b000000000001042d000000000100001900000151000104300000014d002104230000000102000039000000000001042d0000000002000019000000000001042d0000014f00000432000001500001042e000001510001043000000000000000000000000000000000536561706f72740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0200000000000000000000000000000000000007000001600000000000000000000000000000000000000000000000000000000000000000ffffffffffffffc0312e3500000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff5f656e64416d6f756e7429000000000000000000000000000000000000000000007269612c75696e74323536207374617274416d6f756e742c75696e743235362020746f6b656e2c75696e74323536206964656e7469666965724f7243726974654f666665724974656d2875696e7438206974656d547970652c61646472657373000000000000000000000000000000000000000000000000ffffffffffffff3f656e74290000000000000000000000000000000000000000000000000000000075696e7432353620656e64416d6f756e742c6164647265737320726563697069724f7243726974657269612c75696e74323536207374617274416d6f756e742c2c6164647265737320746f6b656e2c75696e74323536206964656e7469666965436f6e73696465726174696f6e4974656d2875696e7438206974656d54797065000000000000000000000000000000000000000000000000fffffffffffffeff4b65792c75696e7432353620636f756e746572290000000000000000000000006173682c75696e743235362073616c742c6279746573333220636f6e647569746d652c75696e7432353620656e6454696d652c62797465733332207a6f6e65482c75696e7438206f72646572547970652c75696e7432353620737461727454696f6e73696465726174696f6e4974656d5b5d20636f6e73696465726174696f6e61646472657373207a6f6e652c4f666665724974656d5b5d206f666665722c434f72646572436f6d706f6e656e74732861646472657373206f6666657265722c000000000000000000000000000000000000000000000000ffffffffffffff7f766572696679696e67436f6e747261637429000000000000000000000000000076657273696f6e2c75696e7432353620636861696e49642c6164647265737320454950373132446f6d61696e28737472696e67206e616d652c737472696e672002000000000000000000000000000000000000520000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff00000002000000000000000000000000000001c00000010000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000f341f6968dc6a54254dec40c5db4382661baf258554296acf768aa9fdadd0962";

type SeaportOrderParserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SeaportOrderParserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SeaportOrderParser__factory extends ContractFactory {
  constructor(...args: SeaportOrderParserConstructorParams) {
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
      SeaportOrderParser & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SeaportOrderParser__factory {
    return super.connect(runner) as SeaportOrderParser__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SeaportOrderParserInterface {
    return new Interface(_abi) as SeaportOrderParserInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SeaportOrderParser {
    return new Contract(address, _abi, runner) as unknown as SeaportOrderParser;
  }
}
