import { assert } from "chai";
import { ParsedIdlInstruction, SolanaParser, SplTokenIdl, SplToken22Idl } from "../src/index";
import { TestUtils } from "./utils";
import {
	TOKEN_PROGRAM_ID,
	createMintToInstruction,
	createMintToCheckedInstruction,
	createTransferInstruction,
	createTransferCheckedInstruction,
	createInitializeMintInstruction,
	createInitializeMint2Instruction,
	createInitializeAccountInstruction,
	createInitializeAccount2Instruction,
	createInitializeAccount3Instruction,
	createApproveInstruction,
	createApproveCheckedInstruction,
	createBurnInstruction,
	createBurnCheckedInstruction,
	createCloseAccountInstruction,
	createFreezeAccountInstruction,
	createRevokeInstruction,
	createSetAuthorityInstruction,
	createSyncNativeInstruction,
	createThawAccountInstruction,
	createUiAmountToAmountInstruction,
	createAmountToUiAmountInstruction,
	createInitializeMultisigInstruction,
	createInitializeImmutableOwnerInstruction,
	TOKEN_2022_PROGRAM_ID,
	AuthorityType,
} from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
const parser = new SolanaParser([]);
const pk = TestUtils.pk();

const programs = [TOKEN_PROGRAM_ID, TOKEN_2022_PROGRAM_ID];
function programToName(program: PublicKey): string {
	return program === TOKEN_PROGRAM_ID ? "Token" : "Token22";
}

describe("token createBurnInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);
		it(`should parse createBurnInstruction for ${programName}`, () => {
			const inst = createBurnInstruction(pk, pk, pk, 12312, TestUtils.signers(), program);
			let result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "burn">;
			if (program == TOKEN_2022_PROGRAM_ID) {
				result = result as ParsedIdlInstruction<SplToken22Idl, "burn">;
			}
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "burn");
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createBurnCheckedInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);
		it(`should parse createBurnInstruction for ${programName}`, () => {
			const inst = createBurnCheckedInstruction(pk, pk, pk, 12312, 6, TestUtils.signers(), program);
			let result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "burnChecked">;
			if (program == TOKEN_2022_PROGRAM_ID) {
				result = result as ParsedIdlInstruction<SplToken22Idl, "burnChecked">;
			}
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "burnChecked");
			assert.equal(result.args.decimals, 6);
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createApproveInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createApproveInstruction for ${programName}`, () => {
			const inst = createApproveInstruction(pk, pk, pk, 12312, TestUtils.signers(), program);
			let result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "approve">;
			if (program == TOKEN_2022_PROGRAM_ID) {
				result = result as ParsedIdlInstruction<SplToken22Idl, "approve">;
			}

			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "approve");
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createApproveCheckInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createApproveCheckedInstruction for ${programName}`, () => {
			const inst = createApproveCheckedInstruction(pk, pk, pk, pk, 12312, 6, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "approveChecked">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "approveChecked");
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.accounts[0].pubkey, pk);
			assert.equal(result.args.decimals, 6);
		});
	}
});

describe("token createMintToInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createMintToInstruction for ${programName}`, () => {
			const inst = createMintToInstruction(pk, pk, pk, 12312, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "mintTo">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.name, "mintTo");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createMintToCheckedInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createMintToCheckedInstruction for ${programName}`, () => {
			const inst = createMintToCheckedInstruction(pk, pk, pk, 12312, 6, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "mintToChecked">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.name, "mintToChecked");
			assert.equal(result.args.decimals, 6);
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createTransferInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createTransferInstruction for ${programName}`, () => {
			const inst = createTransferInstruction(pk, pk, pk, 12312, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "transfer">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.name, "transfer");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createTransferCheckedInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createTransferCheckedInstruction for ${programName}`, () => {
			const inst = createTransferCheckedInstruction(pk, pk, pk, pk, 12312, 6, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "transferChecked">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.args.amount.toString(), "12312");
			assert.equal(result.name, "transferChecked");
			assert.equal(result.args.decimals, 6);
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});
describe("token createInitializeMintInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createInitializeMintInstruction for ${programName}`, () => {
			const inst = createInitializeMintInstruction(pk, 6, pk, pk, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "initializeMint">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "initializeMint");
			assert.equal(result.args.decimals, 6);
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createInitializeMint2Instruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createInitializeMint2Instruction for ${programName}`, () => {
			const inst = createInitializeMint2Instruction(pk, 6, pk, pk, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "initializeMint2">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "initializeMint2");
			assert.equal(result.args.decimals, 6);
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createCloseAccountInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createCloseAccountInstruction for ${programName}`, () => {
			const inst = createCloseAccountInstruction(pk, pk, pk, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "closeAccount">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "closeAccount");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createFreezeAccountInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createCloseAccountInstruction for ${programName}`, () => {
			const inst = createFreezeAccountInstruction(pk, pk, pk, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "freezeAccount">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "freezeAccount");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createInitializeAccountInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createInitializeAccountInstruction for ${programName}`, () => {
			const inst = createInitializeAccountInstruction(pk, pk, pk, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "initializeAccount">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "initializeAccount");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createInitializeAccount2Instruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createInitializeAccount2Instruction for ${programName}`, () => {
			const inst = createInitializeAccount2Instruction(pk, pk, pk, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "initializeAccount2">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "initializeAccount2");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createInitializeAccount3Instruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createInitializeAccount3Instruction for ${programName}`, () => {
			const inst = createInitializeAccount3Instruction(pk, pk, pk, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "initializeAccount3">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "initializeAccount3");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createRevokeInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createRevokeInstruction for ${programName}`, () => {
			const inst = createRevokeInstruction(pk, pk, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "revoke">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "revoke");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createSyncNativeInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createSyncNativeInstruction for ${programName}`, () => {
			const inst = createSyncNativeInstruction(pk, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "syncNative">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "syncNative");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createThawAccountInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createThawAccountInstruction for ${programName}`, () => {
			const inst = createThawAccountInstruction(pk, pk, pk, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "thawAccount">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "thawAccount");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createUiAmountToAmountInstruction ", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createUiAmountToAmountInstruction for ${programName}`, () => {
			const inst = createUiAmountToAmountInstruction(pk, "1", program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "uiAmountToAmount">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "uiAmountToAmount");
			//assert.equal(result.args.uiAmount, "12");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createAmountToUiAmountInstruction ", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createAmountToUiAmountInstruction for ${programName}`, () => {
			const inst = createAmountToUiAmountInstruction(pk, 12, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "amountToUiAmount">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "amountToUiAmount");
			//assert.equal(result.args.amount.toString(), "12");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createInitializeMultisigInstruction ", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createInitializeMultisigInstruction for ${programName}`, () => {
			const inst = createInitializeMultisigInstruction(pk, TestUtils.signers(), 1, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "initializeMultisig">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "initializeMultisig");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createInitializeImmutableOwnerInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createInitializeImmutableOwnerInstruction for ${programName}`, () => {
			const inst = createInitializeImmutableOwnerInstruction(pk, program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "initializeImmutableOwner">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "initializeImmutableOwner");
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});

describe("token createSetAuthorityInstruction", () => {
	for (const program of programs) {
		const programName = programToName(program);

		it(`should parse createSetAuthorityInstruction for ${programName}`, () => {
			const newAuth = TestUtils.pk();
			const inst = createSetAuthorityInstruction(pk, pk, AuthorityType.CloseAccount, newAuth, TestUtils.signers(), program);
			const result = parser.parseInstruction(inst) as ParsedIdlInstruction<SplTokenIdl, "setAuthority">;
			assert.isDefined(result);
			assert.equal(result.programId.toBase58(), program.toBase58());
			assert.equal(result.name, "setAuthority");
			assert.equal(result.args.newAuthority?.toBase58(), newAuth.toBase58());
			//assert.equal(result.args.authorityType.closeAccount, AuthorityType.CloseMint.toString());
			assert.equal(result.accounts[0].pubkey, pk);
		});
	}
});
