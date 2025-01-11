import { assert } from "chai";
import { SolanaParser } from "../src";
import { ParsedIdlInstruction } from "../src/interfaces";

import { IDL as DlnDstIdl, DlnDst } from "./idl/dst";
import { TestUtils } from "./utils";

const parser = new SolanaParser([{ idl: DlnDstIdl, programId: "dst5MGcFPoBeREFAA5E3tU5ij8m5uVYwkzkSAbsLbNo" }]);
const connection = TestUtils.getConnection("mainnet-beta");
describe("Test parse transaction", () => {
	it("can parse fulfill tx", async () => {
		const result = await connection.getTransaction("2H1jBCXaqoy8XZFvdsbZzC9bKU3V2C43YoDEJZVBMUg5wKf12LMt4fqT8j65D7SZY1PNfgMFiTRFXqpcAt5Wdc4z", {
			maxSupportedTransactionVersion: 0,
		});

		const txm = result?.transaction.message!;
		const parsed = parser.parseTransactionData(txm, result?.meta?.loadedAddresses);

		const fulfillOrder = parsed?.parsedInstructions.find((pix) => pix.name === "fulfill_order") as ParsedIdlInstruction<DlnDst, "fulfill_order">;
		assert.equal(fulfillOrder.args.unvalidated_order.maker_order_nonce.toString(), "1730296839695");
	});

	it("can parse send_batch_unlock tx", async () => {
		const result = await connection.getTransaction("HLNFpn7Aj9AgL5umSKQyKPHgvnK5YvmLMBfJQnRZTQQ23ZFRh9wi1gxusj7WWGgFG1DFZ5zmsPnZ7N6AtC4Tzaq", {
			maxSupportedTransactionVersion: 0,
		});

		const txm = result?.transaction.message!;
		const parsed = parser.parseTransactionData(txm, result?.meta?.loadedAddresses);
		const unlock = parsed?.parsedInstructions.find((v) => v.name === "send_batch_unlock") as ParsedIdlInstruction<DlnDst, "send_batch_unlock">;
		assert.equal(unlock.accounts[10].name, "sending.bridge");
	});
});
