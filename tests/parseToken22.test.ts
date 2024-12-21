import { assert } from "chai";
import { ParsedIdlInstruction, SolanaParser } from "../src/index";
import { TestUtils } from "./utils";
import {
	TOKEN_2022_PROGRAM_ID,
	createSetTransferFeeInstruction,
	createTransferCheckedWithFeeInstruction,
	createInitializePermanentDelegateInstruction,
	createUpdateMetadataPointerInstruction,
	createInitializeMintCloseAuthorityInstruction,
	createCreateNativeMintInstruction,
	AuthorityType,
	createSetAuthorityInstruction,
} from "@solana/spl-token";

import { SplToken22 } from "../src/programs/spl-token-22.program";
const parser = new SolanaParser([]);
const pk = TestUtils.pk();

describe("parse token22 program", () => {
	it("should parse createInitializePermanentDelegateInstruction instruction", async () => {
		const mint = TestUtils.pk();
		const inst = createCreateNativeMintInstruction(mint, pk);
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplToken22, "createNativeMint">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());
		assert.equal(result.name, "createNativeMint");
		assert.equal(result.accounts[0].pubkey.toBase58(), mint.toBase58());
	});

	it("should parse createInitializePermanentDelegateInstruction instruction", async () => {
		const mint = TestUtils.pk();
		const inst = createInitializePermanentDelegateInstruction(mint, pk, TOKEN_2022_PROGRAM_ID);
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplToken22, "initializePermanentDelegate">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());
		assert.equal(result.name, "initializePermanentDelegate");
		assert.equal(result.accounts[0].pubkey.toBase58(), mint.toBase58());
	});

	it("should parse createInitializeMetadataPointerInstruction instruction", async () => {
		const mint = TestUtils.pk();
		const inst = createUpdateMetadataPointerInstruction(mint, pk, null);
		// @ts-ignore
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplToken22, "updateMetadataPointer">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());
		assert.equal(result.name, "updateMetadataPointer");
	});

	it("should parse createSetTransferFeeInstruction instruction", async () => {
		const mint = TestUtils.pk();
		const inst = createSetTransferFeeInstruction(mint, pk, [pk], 1234, BigInt(213));
		// @ts-ignore
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplToken22, "setTransferFee">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());
		assert.equal(result.name, "setTransferFee");
	});

	it("should parse createTransferCheckedWithFeeInstruction instruction", () => {
		const mint = TestUtils.pk();
		const inst = createTransferCheckedWithFeeInstruction(pk, mint, TestUtils.pk(), pk, BigInt(1234), 6, BigInt(99));
		// @ts-ignore
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplToken22, "transferCheckedWithFee">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());
		assert.equal(result.name, "transferCheckedWithFee");
	});

	it(`should parse createInitializeMintCloseAuthorityInstruction`, () => {
		const closeAuth = TestUtils.pk();
		const inst = createInitializeMintCloseAuthorityInstruction(pk, closeAuth, TOKEN_2022_PROGRAM_ID);
		const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplToken22, "initializeMintCloseAuthority">;
		assert.isDefined(result);
		assert.equal(result.programId.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());
		assert.equal(result.name, "initializeMintCloseAuthority");
		assert.equal(closeAuth.toBase58(), closeAuth.toBase58());
		assert.equal(result.accounts[0].pubkey, pk);
	});
});

describe("token createSetAuthorityInstruction", () => {
	const authrorityTypes = [
		AuthorityType.AccountOwner,
		AuthorityType.CloseAccount,
		AuthorityType.FreezeAccount,
		AuthorityType.MintTokens,
		AuthorityType.CloseMint,
		AuthorityType.ConfidentialTransferFeeConfig,
		AuthorityType.ConfidentialTransferMint,
		AuthorityType.GroupMemberPointer,
		AuthorityType.GroupPointer,
		AuthorityType.InterestRate,
		AuthorityType.MetadataPointer,
		AuthorityType.PermanentDelegate,
		AuthorityType.TransferFeeConfig,
		AuthorityType.TransferHookProgramId,
		AuthorityType.WithheldWithdraw,
	];

	for (const authType of authrorityTypes) {
		it(`should parse createSetAuthorityInstruction for authType:${authType}`, () => {
			const newAuth = TestUtils.pk();
			const inst = createSetAuthorityInstruction(pk, pk, authType, newAuth, undefined, TOKEN_2022_PROGRAM_ID);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplToken22, "setAuthority">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());
			assert.equal(result.name, "setAuthority");
			//const actual = JSON.stringify(result.args.authorityType);
			//assert.equal(actual, "blah");
		});
	}
});
