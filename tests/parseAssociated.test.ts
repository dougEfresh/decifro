import { assert } from "chai";
import { AssociatedTokenProgramIdlLike, ParsedIdlInstruction, SolanaParser } from "../src/index";
import { TestUtils } from "./utils";
import { createAssociatedTokenAccountInstruction } from "@solana/spl-token";

const parser = new SolanaParser([]);
const pk = TestUtils.pk();

describe("parse associated account", () => {
	it("should parse createAssociatedTokenAccount instruction", async () => {
		const inst = createAssociatedTokenAccountInstruction(pk, pk, pk, pk);
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<AssociatedTokenProgramIdlLike, "createAssociatedTokenAccount">;
		assert.isDefined(result);
		assert.equal(result.accounts[0].pubkey, pk);
	});
});
