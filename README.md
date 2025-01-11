# Decifro

A Solana transaction parser / decoder inspired from [debridge-finance](https://github.com/debridge-finance/solana-tx-parser-public)

![Codecov](https://img.shields.io/codecov/c/github/dougEfresh/decifro)

# Quick Start

```typesript
import { BN, SystemProgram as SystemProgramIdl } from "@coral-xyz/anchor";
import { Keypair, PublicKey, SystemProgram, Transaction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { ParsedIdlInstruction, SolanaParser } from "decifro";

const parser = new SolanaParser([]);
const lookup = (await connection.getAddressLookupTable(new PublicKey("BHucaGQGBaas1k4EKkgy4s6eBN9ufPUe6bBEM4Re6W2K"))).value;
const parser = new SolanaParser([]);
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

// Or parse lookup table explicitly
// const parsedTxLookup = await parser.parseLookupTable(connection, dump);
// await parser.parseTx(dump.toString("base64"), parsedTxLookup.lookup);

// Find the transfers
const transfers = parsed.parsedInstructions.filter((pix) => pix.name === "transfer");
assert(transfers.length === 5, `expect 5 transfers, got ${transfers.length}`);

for (let i = 0; i < transfers.length; i++) {
	const pix = transfers[i] as ParsedIdlInstruction<SystemProgramIdl, "transfer">;
	assert.equal(pix.args.lamports.toString(), new BN(231931).toString());
    // 0 is source or from
	assert.equal(pix.accounts[0].pubkey.toBase58(), kp.publicKey.toBase58());
    // 1 is destinations
	assert.equal(pix.accounts[1].pubkey.toBase58(), addresses[i].toBase58());
}
```

# Limitations

TBD

# Custom Parser

TBD

# Acknowledgements

* [debridge](https://github.com/debridge-finance/solana-tx-parser-public)
* [shfyt](https://github.com/Shyft-to/solana-tx-parser-public)
