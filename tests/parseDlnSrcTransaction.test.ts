import { assert } from "chai";
import { SolanaParser } from "../src";
import { ParsedIdlInstruction } from "../src/interfaces";
import { TestUtils } from "./utils";
import { IDL as DlnSrcIdl, DlnSrc } from "./idl/src";

const parser = new SolanaParser([{ idl: DlnSrcIdl, programId: "src5qyZHqTqecJV4aY6Cb6zDZLMDzrDKKezs22MPHr4" }]);

describe("Test parse transaction", () => {
	it("can parse create tx", async () => {
		const connection = TestUtils.getConnection("mainnet-beta");
		const result = await connection.getTransaction("3ggTVbZvk38HfKTQ8fcTYkvTeDc1uw75KTGUzpm1MVHFJWHhFSbQBALshBmszepZDULqTqxnMJhAPiT6UgXMUK5d", {
			maxSupportedTransactionVersion: 0,
		});

		const txm = result?.transaction.message!;
		const parsed = parser.parseTransactionData(txm, result?.meta?.loadedAddresses);

		const createOrder = parsed?.parsedInstructions.find((pix) => pix.name === "create_order_with_nonce") as ParsedIdlInstruction<
			DlnSrc,
			"create_order_with_nonce"
		>;
		assert.equal(createOrder.args.order_args.give_original_amount.toString(), "3011764280");
		assert.equal(createOrder.accounts[0].name, "maker");
	});
});
