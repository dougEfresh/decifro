import { assert } from "chai";
import { SystemProgram as SystemProgramIdl } from "@coral-xyz/anchor";
import { ParsedIdlInstruction, SolanaParser } from "../src/index";
import { TestUtils, serialize } from "./utils";
import {
	AuthorizeStakeParams,
	AuthorizeWithSeedStakeParams,
	Authorized,
	DeactivateStakeParams,
	DelegateStakeParams,
	MergeStakeParams,
	SplitStakeParams,
	StakeProgram,
	SystemProgram,
	WithdrawStakeParams,
} from "@solana/web3.js";
import { StakeLayout } from "../src/programs/stake.program";

const connection = TestUtils.getConnection("devnet");
const parser = new SolanaParser([]);
const pk = TestUtils.pk();

describe("parse stake", () => {
	it("should parse StakeProgram.createAccount instruction", async () => {
		const authorized = new Authorized(TestUtils.pk(), TestUtils.pk());
		const tx = serialize(
			StakeProgram.createAccount({
				stakePubkey: pk,
				fromPubkey: pk,
				authorized,
				lamports: 1,
			}).instructions,
		);
		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 2);
		const createAccount = result[0] as ParsedIdlInstruction<StakeLayout, "initialize">;
		const auth = result[1] as ParsedIdlInstruction<StakeLayout, "authorize">;
		assert.equal(createAccount.name, "createAccount");
		assert.equal(auth.name, "initialize");
		assert.equal(auth.accounts[0].pubkey.toBase58(), pk.toBase58());
	});

	it("should parse StakeProgram.withdraw instruction", async () => {
		const params: WithdrawStakeParams = {
			stakePubkey: pk,
			authorizedPubkey: pk,
			toPubkey: pk,
			lamports: 10000001,
		};
		const tx = serialize(StakeProgram.withdraw(params).instructions);

		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 1);
		const withdraw = result[0] as ParsedIdlInstruction<StakeLayout, "withdraw">;
		assert.equal(withdraw.name, "withdraw");
		assert.equal(withdraw.args.lamports.toString(), "10000001");
	});

	it("should parse StakeProgram.delegate instruction", async () => {
		const params: DelegateStakeParams = {
			stakePubkey: pk,
			authorizedPubkey: pk,
			votePubkey: TestUtils.pk(),
		};
		const tx = serialize(StakeProgram.delegate(params).instructions);
		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 1);
		const delegate = result[0] as ParsedIdlInstruction<StakeLayout, "delegate">;
		assert.equal(delegate.name, "delegate");
		assert.equal(delegate.accounts[1].pubkey.toBase58(), params.votePubkey.toBase58());
	});

	it("should parse StakeProgram.spliit instruction", async () => {
		const params: SplitStakeParams = {
			stakePubkey: pk,
			authorizedPubkey: pk,
			splitStakePubkey: TestUtils.pk(),
			lamports: 11123,
		};
		const tx = serialize(StakeProgram.split(params, 123).instructions);
		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 2);
		//console.log(JSON.stringify(result, undefined, 2));
		const ca = result[0] as ParsedIdlInstruction<SystemProgramIdl, "createAccount">;
		assert.equal(ca.name, "createAccount");
		assert.equal(ca.programId.toBase58(), SystemProgram.programId.toBase58());
		const split = result[1] as ParsedIdlInstruction<StakeLayout, "split">;
		assert.equal(split.programId.toBase58(), StakeProgram.programId.toBase58());
		assert.equal(split.args.lamports.toString(), "11123");
	});

	it("should parse StakeProgram.authorized instruction", async () => {
		const params: AuthorizeStakeParams = {
			stakePubkey: pk,
			authorizedPubkey: pk,
			newAuthorizedPubkey: TestUtils.pk(),
			stakeAuthorizationType: {
				index: 0,
			},
		};
		const tx = serialize(StakeProgram.authorize(params).instructions);
		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 1);
		//console.log(JSON.stringify(result, undefined, 2));
		const auth = result[0] as ParsedIdlInstruction<StakeLayout, "authorize">;
		assert.equal(auth.name, "authorize");
		assert.equal(auth.programId.toBase58(), StakeProgram.programId.toBase58());
		assert.equal(auth.args.newAuthorized.toString(), params.newAuthorizedPubkey.toBase58());
	});

	it("should parse StakeProgram.authorizedWithSeed instruction", async () => {
		const params: AuthorizeWithSeedStakeParams = {
			stakePubkey: pk,
			newAuthorizedPubkey: TestUtils.pk(),
			stakeAuthorizationType: {
				index: 0,
			},
			authorityBase: TestUtils.pk(),
			authoritySeed: "asdasd",
			authorityOwner: TestUtils.pk(),
		};
		const tx = serialize(StakeProgram.authorizeWithSeed(params).instructions);
		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 1);
		//console.log(JSON.stringify(result, undefined, 2));
		const auth = result[0] as ParsedIdlInstruction<StakeLayout, "authorizeWithSeed">;
		assert.equal(auth.name, "authorizeWithSeed");
		assert.equal(auth.programId.toBase58(), StakeProgram.programId.toBase58());
		assert.equal(auth.args.newAuthorized.toString(), params.newAuthorizedPubkey.toBase58());
	});

	it("should parse StakeProgram.deactivate instruction", async () => {
		const params: DeactivateStakeParams = {
			stakePubkey: pk,
			authorizedPubkey: TestUtils.pk(),
		};
		const tx = serialize(StakeProgram.deactivate(params).instructions);
		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 1);
		//console.log(JSON.stringify(result, undefined, 2));
		const auth = result[0] as ParsedIdlInstruction<StakeLayout, "deactivate">;
		assert.equal(auth.name, "deactivate");
		assert.equal(auth.programId.toBase58(), StakeProgram.programId.toBase58());
		assert.equal(auth.args.stakePubkey.toBase58(), params.stakePubkey.toBase58());
		assert.equal(auth.args.authorizedPubkey.toBase58(), params.authorizedPubkey.toBase58());
	});

	it("should parse StakeProgram.merge instruction", async () => {
		const params: MergeStakeParams = {
			stakePubkey: pk,
			sourceStakePubKey: pk,
			authorizedPubkey: TestUtils.pk(),
		};
		const tx = serialize(StakeProgram.merge(params).instructions);
		const result = await parser.parseTransactionDump(connection, tx);
		assert.isDefined(result);
		assert.equal(result.length, 1);
		//console.log(JSON.stringify(result, undefined, 2));
		const auth = result[0] as ParsedIdlInstruction<StakeLayout, "merge">;
		assert.equal(auth.name, "merge");
		assert.equal(auth.programId.toBase58(), StakeProgram.programId.toBase58());
	});

	it("should parse StakeProgram.createAccountWithSeed instruction", async () => {
		const tx = serialize(
			StakeProgram.createAccountWithSeed({
				stakePubkey: pk,
				fromPubkey: pk,
				authorized: new Authorized(pk, pk),
				lamports: 1,
				seed: "asd",
				basePubkey: TestUtils.pk(),
			}).instructions,
		);

		const result = await parser.parseTransactionDump(connection, tx);
		//console.log(JSON.stringify(result, undefined, 2));
		assert.isDefined(result);
		assert.equal(result.length, 2);
		const createAccount = result[0] as ParsedIdlInstruction<SystemProgramIdl, "createAccountWithSeed">;
		const auth = result[1] as ParsedIdlInstruction<StakeLayout, "authorize">;
		assert.equal(createAccount.name, "createAccountWithSeed");
		assert.equal(createAccount.programId.toBase58(), SystemProgram.programId.toBase58());
		assert.equal(auth.name, "initialize");
		assert.equal(auth.programId.toBase58(), StakeProgram.programId.toBase58());
	});
});
