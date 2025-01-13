import { assert } from "chai";
import { ParsedIdlInstruction, SolanaParser } from "../src/index";
import { TestUtils } from "./utils";
import { ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction } from "@solana/spl-token";
import { AssociatedTokenProgramIdl } from "../src";

const parser = new SolanaParser([]);
const pk = TestUtils.pk();

describe("parse associated account", () => {
	it("should parse createAssociatedTokenAccount instruction", async () => {
		const inst = createAssociatedTokenAccountInstruction(pk, pk, pk, pk);
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<AssociatedTokenProgramIdl, "createAssociatedTokenAccount">;
		assert.isDefined(result);
		assert.equal(result.name, "createAssociatedTokenAccount");
		assert.equal(result.programId.toBase58(), ASSOCIATED_TOKEN_PROGRAM_ID.toBase58());
		assert.equal(result.accounts[0].pubkey, pk);
	});
});
