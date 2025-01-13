import { ComputeBudgetProgram } from "@solana/web3.js";
import { ComputeBudgetIdl, ParsedIdlInstruction, SolanaParser } from "../src";
import { assert } from "chai";

const parser = new SolanaParser([]);
describe("computebudget", () => {
	it(`should parse requestHeapFrame`, () => {
		const inst = ComputeBudgetProgram.requestHeapFrame({ bytes: 1000 });
		let result = parser.parseInstruction(inst) as ParsedIdlInstruction<ComputeBudgetIdl, "requestHeapFrame">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), ComputeBudgetProgram.programId.toBase58());
		assert.equal(result.name, "requestHeapFrame");
		assert.equal(result.args.bytes.toString(), "1000");
	});

	it(`should parse requestUnits`, () => {
		const inst = ComputeBudgetProgram.requestUnits({ units: 1000, additionalFee: 1234 });
		let result = parser.parseInstruction(inst) as ParsedIdlInstruction<ComputeBudgetIdl, "requestUnits">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), ComputeBudgetProgram.programId.toBase58());
		assert.equal(result.name, "requestUnits");
		assert.equal(result.args.units.toString(), "1000");
		assert.equal(result.args.additionalFee.toString(), "1234");
	});

	it(`should parse setComputeUnits`, () => {
		const inst = ComputeBudgetProgram.setComputeUnitLimit({ units: 9999 });
		let result = parser.parseInstruction(inst) as ParsedIdlInstruction<ComputeBudgetIdl, "setComputeUnitLimit">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), ComputeBudgetProgram.programId.toBase58());
		assert.equal(result.name, "setComputeUnitLimit");
		assert.equal(result.args.units.toString(), "9999");
	});
	it(`should parse setComputeLimit`, () => {
		const inst = ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1999 });
		let result = parser.parseInstruction(inst) as ParsedIdlInstruction<ComputeBudgetIdl, "setComputeUnitPrice">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), ComputeBudgetProgram.programId.toBase58());
		assert.equal(result.name, "setComputeUnitPrice");
		assert.equal(result.args.microLamports.toString(), "1999");
	});
});
