import { Connection, Cluster, clusterApiUrl, Keypair, PublicKey, TransactionInstruction, Transaction } from "@solana/web3.js";

import * as dotenv from "dotenv";

function createDummyTx() {
	const tx = new Transaction();
	tx.feePayer = TestUtils.pk();
	tx.recentBlockhash = "Lv7CUSLxXD8NyDSxswt1J2REbGNYL53amJ53G8UTisg";
	return tx;
}

export function serialize(instructions: TransactionInstruction[]): Buffer {
	const tx = createDummyTx();
	tx.add(...instructions);
	return tx.serialize({
		requireAllSignatures: false,
	});
}

class TestUtils {
	static blockhash(): string {
		return "Lv7CUSLxXD8NyDSxswt1J2REbGNYL53amJ53G8UTisg";
	}
	static devnet: Connection;
	static mainnet: Connection;

	static pk(): PublicKey {
		return Keypair.generate().publicKey;
	}

	static kp(): Keypair {
		return Keypair.generate();
	}

	static signers(): PublicKey[] {
		return [Keypair.generate().publicKey];
	}

	static getConnection(cluster: Cluster) {
		if (!TestUtils.devnet) {
			dotenv.config();
			if (process.env.DEVNET) {
				TestUtils.devnet = new Connection(process.env.DEVNET);
			} else {
				TestUtils.devnet = new Connection(clusterApiUrl("devnet"));
			}
		}
		if (!TestUtils.mainnet) {
			if (process.env.MAINNET) {
				TestUtils.mainnet = new Connection(process.env.MAINNET);
			} else {
				TestUtils.mainnet = new Connection(clusterApiUrl("mainnet-beta"));
			}
		}
		return cluster === "devnet" ? TestUtils.devnet : TestUtils.mainnet;
	}
}

export { TestUtils };
