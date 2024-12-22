import { assert } from "chai";
import { BN, SystemProgram as SystemProgramIdl } from "@coral-xyz/anchor";
import { Keypair, PublicKey, SystemProgram, Transaction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { ParsedIdlInstruction, SolanaParser } from "../src/index";
import { TestUtils, serialize } from "./utils";

const connection = TestUtils.getConnection("devnet");
const parser = new SolanaParser([]);
const kp = Keypair.generate();

function createDummyTx() {
	const tx = new Transaction();
	tx.feePayer = kp.publicKey;
	tx.recentBlockhash = "Lv7CUSLxXD8NyDSxswt1J2REbGNYL53amJ53G8UTisg";
	return tx;
}

describe("parse system transaction", () => {
	it("should parse SystemProgram.nonceAdvance instruction", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.nonceAdvance({
				noncePubkey: kp.publicKey,
				authorizedPubkey: kp.publicKey,
			}),
		);
		const b64 = Buffer.from(tx.serialize({ requireAllSignatures: false })).toString("base64");
		const parsed = await parser.parseTransactionDump(connection, b64);
		assert.equal(parsed.length, 1);
		const i = parsed[0] as ParsedIdlInstruction<SystemProgramIdl, "advanceNonceAccount">;
		assert.equal(i.programId, SystemProgram.programId);
		assert.equal(i.name, "advanceNonceAccount");
	});

	it("should parse SystemProgram.createNonceAccount instruction", async () => {
		const tx = serialize(
			SystemProgram.createNonceAccount({
				noncePubkey: kp.publicKey,
				authorizedPubkey: kp.publicKey,
				fromPubkey: kp.publicKey,
				lamports: 121321,
			}).instructions,
		);

		const parsed = await parser.parseTransactionDump(connection, tx);
		// this creates the nonce account and inits
		assert.equal(parsed.length, 2);
	});

	it("should parse SystemProgram.nonceWithdraw instruction", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.nonceWithdraw({
				noncePubkey: kp.publicKey,
				authorizedPubkey: kp.publicKey,
				toPubkey: kp.publicKey,
				lamports: 1,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.nonceAuthorize instruction", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.nonceAuthorize({
				authorizedPubkey: kp.publicKey,
				noncePubkey: kp.publicKey,
				newAuthorizedPubkey: kp.publicKey,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.allocate instruction (without seed)", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.allocate({
				space: 123,
				accountPubkey: kp.publicKey,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.allocate instruction (with seed)", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.allocate({
				space: 123,
				accountPubkey: kp.publicKey,
				seed: "blah",
				basePubkey: Keypair.generate().publicKey,
				programId: SystemProgram.programId,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.assign instruction (without seed)", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.assign({
				accountPubkey: kp.publicKey,
				programId: SystemProgram.programId,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.assign instruction (with seed)", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.assign({
				accountPubkey: kp.publicKey,
				programId: SystemProgram.programId,
				seed: "!23",
				basePubkey: Keypair.generate().publicKey,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.nonceInitialize instruction", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.nonceInitialize({
				noncePubkey: kp.publicKey,
				authorizedPubkey: kp.publicKey,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.createAccount instruction", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.createAccount({
				fromPubkey: kp.publicKey,
				newAccountPubkey: kp.publicKey,
				lamports: 1,
				space: 63,
				programId: SystemProgram.programId,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.createAccountWithSeed instruction", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.createAccountWithSeed({
				seed: "asdsad",
				fromPubkey: kp.publicKey,
				basePubkey: kp.publicKey,
				newAccountPubkey: kp.publicKey,
				lamports: 1,
				space: 63,
				programId: SystemProgram.programId,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("should parse SystemProgram.transfer instruction", async () => {
		const tx = createDummyTx();
		tx.add(
			SystemProgram.transfer({
				fromPubkey: Keypair.generate().publicKey,
				basePubkey: kp.publicKey,
				toPubkey: kp.publicKey,
				lamports: 1213,
				seed: "asd",
				programId: SystemProgram.programId,
			}),
		);

		const parsed = await parser.parseTransactionDump(
			connection,
			tx.serialize({
				requireAllSignatures: false,
			}),
		);
		assert.equal(parsed.length, 1);
	});

	it("parse-lookup", async () => {
		const lookup = (await connection.getAddressLookupTable(new PublicKey("BHucaGQGBaas1k4EKkgy4s6eBN9ufPUe6bBEM4Re6W2K"))).value;
		const addresses = [
			"Bd1MS8L2yhGuSYrtYWtSSofg1bfpZ1CTM37Mz1fTKqpn",
			"68UdXWQSX74oSmriYDSGZx3pfg1L3hCu3MbMHYE6s3D",
			"E4SfgGV2v9GLYsEkCQhrrnFbBcYmAiUZZbJ7swKGzZHJ",
			"6NCs7ZnMhmQP61bhhbp75Py5eHjGNRqg8y6grehnJumS",
			"AyAve7qhCuxaEvHHNN7PeYEmAjtBEkiwBCp9WJ286Hq8",
		].map((a) => new PublicKey(a));
		const instructions = addresses.map((a) =>
			SystemProgram.transfer({
				fromPubkey: kp.publicKey,
				toPubkey: a,
				lamports: 231931,
			}),
		);

		const txm = new TransactionMessage({
			payerKey: kp.publicKey,
			instructions,
			recentBlockhash: "Lv7CUSLxXD8NyDSxswt1J2REbGNYL53amJ53G8UTisg",
		});

		const tx = new VersionedTransaction(txm.compileToV0Message([lookup!]));

		const dump = Buffer.from(tx.serialize());
		const parsed = await parser.parseTransactionDump(connection, dump);
		const parsedTxLookup = await parser.parseLookupTable(connection, dump);
		await parser.parseTx(dump.toString("base64"), parsedTxLookup.lookup);
		const transfers = parsed.filter((pix) => pix.name === "transfer");
		assert(transfers.length === 5, `expect 5 transfers, got ${transfers.length}`);
		for (let i = 0; i < transfers.length; i++) {
			const pix = transfers[i] as ParsedIdlInstruction<SystemProgramIdl, "transfer">;
			assert.equal(pix.args.lamports.toString(), new BN(231931).toString());
			assert.equal(pix.accounts[0].pubkey.toBase58(), kp.publicKey.toBase58());
			assert.equal(pix.accounts[1].pubkey.toBase58(), addresses[i].toBase58());
		}
	});
});
