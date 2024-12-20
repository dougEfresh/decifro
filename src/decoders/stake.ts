import { StakeInstruction, StakeProgram, TransactionInstruction } from "@solana/web3.js";

import { StakeLayout } from "../programs/stake.program";
import { ParsedIdlInstruction, ParsedInstruction } from "../interfaces";

function decodeStakeInstruction(instruction: TransactionInstruction): ParsedInstruction<StakeLayout> {
	const parseAccount = (key: any) => ({
		pubkey: key.pubkey,
		isSigner: key.isSigner,
		isWritable: key.isWritable,
	});

	let parsed: ParsedIdlInstruction<StakeLayout> | null;
	const decoded = StakeInstruction.decodeInstructionType(instruction);

	switch (decoded) {
		case "Initialize": {
			const decodedIx = StakeInstruction.decodeInitialize(instruction);
			parsed = {
				name: "initialize",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "clockSysvar",
						...parseAccount(instruction.keys[1]),
					},
				],
				args: {
					authorized: decodedIx.authorized,
					lockup: decodedIx.lockup,
				},
			} as ParsedIdlInstruction<StakeLayout, "initialize">;
			break;
		}
		case "Authorize": {
			const decodedIx = StakeInstruction.decodeAuthorize(instruction);
			parsed = {
				name: "authorize",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "clockSysvar",
						...parseAccount(instruction.keys[1]),
					},
					{
						name: "authorizedPubkey",
						...parseAccount(instruction.keys[2]),
					},
					...[instruction.keys.length > 3 ? { name: "custodianPubkey", ...instruction.keys[3] } : undefined],
				],
				args: {
					index: 0,
					newAuthorized: decodedIx.newAuthorizedPubkey,
					stakeAuthorizationType: decodedIx.stakeAuthorizationType,
				},
			} as ParsedIdlInstruction<StakeLayout, "authorize">;

			break;
		}
		case "AuthorizeWithSeed": {
			const decodedIx = StakeInstruction.decodeAuthorizeWithSeed(instruction);
			parsed = {
				name: "authorizeWithSeed",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "authorizedPubkey",
						...parseAccount(instruction.keys[1]),
					},
					{
						name: "clockSysvar",
						...parseAccount(instruction.keys[2]),
					},
					...[instruction.keys.length > 3 ? { name: "custodianPubkey", ...instruction.keys[3] } : undefined],
				],
				args: {
					newAuthorized: decodedIx.newAuthorizedPubkey,
					stakeAuthorizationType: decodedIx.stakeAuthorizationType,
					authoritySeed: decodedIx.authoritySeed,
					authorityOwner: decodedIx.authorityOwner,
				},
			} as ParsedIdlInstruction<StakeLayout, "authorizeWithSeed">;

			break;
		}
		case "Deactivate": {
			const decodedIx = StakeInstruction.decodeDeactivate(instruction);
			parsed = {
				name: "deactivate",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "clockSysvar",
						...parseAccount(instruction.keys[1]),
					},
					{
						name: "authorizedPubkey",
						...parseAccount(instruction.keys[2]),
					},
				],
				args: {
					stakePubkey: decodedIx.stakePubkey,
					authorizedPubkey: decodedIx.authorizedPubkey,
				},
			} as ParsedIdlInstruction<StakeLayout, "deactivate">;
			break;
		}
		case "Delegate": {
			const decodedIx = StakeInstruction.decodeDelegate(instruction);
			parsed = {
				name: "delegate",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "votePubkey",
						...parseAccount(instruction.keys[1]),
					},
					{
						name: "clockSysvar",
						...parseAccount(instruction.keys[2]),
					},
					{
						name: "sysvarStakeHistory",
						...parseAccount(instruction.keys[3]),
					},
					{
						name: "stakeConfig",
						...parseAccount(instruction.keys[4]),
					},
					{
						name: "authorizedPubkey",
						...parseAccount(instruction.keys[5]),
					},
				],
				args: {
					stakePubkey: decodedIx.stakePubkey,
					authorizedPubkey: decodedIx.authorizedPubkey,
					votePubkey: decodedIx.votePubkey,
				} as any,
			} as ParsedIdlInstruction<StakeLayout, "delegate">;
			break;
		}
		case "Merge": {
			const decodedIx = StakeInstruction.decodeMerge(instruction);
			parsed = {
				name: "merge",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "sourceStakePubkey",
						...parseAccount(instruction.keys[1]),
					},
					{
						name: "clockSysvar",
						...parseAccount(instruction.keys[2]),
					},
					{
						name: "sysvarStakeHistory",
						...parseAccount(instruction.keys[3]),
					},
					{
						name: "authorizedPubkey",
						...parseAccount(instruction.keys[4]),
					},
				],
				args: {
					stakePubkey: decodedIx.stakePubkey,
					authorizedPubkey: decodedIx.authorizedPubkey,
					sourceStakePubKey: decodedIx.sourceStakePubKey,
				} as any,
			} as ParsedIdlInstruction<StakeLayout, "merge">;
			break;
		}
		case "Split": {
			const decodedIx = StakeInstruction.decodeSplit(instruction);
			parsed = {
				name: "split",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "splitStakePubkey",
						...parseAccount(instruction.keys[1]),
					},
					{
						name: "authorizedPubkey",
						...parseAccount(instruction.keys[2]),
					},
				],
				args: {
					stakePubkey: decodedIx.stakePubkey,
					authorizedPubkey: decodedIx.authorizedPubkey,
					splitStakePubkey: decodedIx.splitStakePubkey,
					lamports: decodedIx.lamports,
				} as any,
			} as ParsedIdlInstruction<StakeLayout, "split">;
			break;
		}
		case "Withdraw": {
			const decodedIx = StakeInstruction.decodeWithdraw(instruction);
			parsed = {
				name: "withdraw",
				accounts: [
					{
						name: "stakePubkey",
						...parseAccount(instruction.keys[0]),
					},
					{
						name: "toPubkey",
						...parseAccount(instruction.keys[1]),
					},
					{
						name: "clockSysvar",
						...parseAccount(instruction.keys[2]),
					},
					{
						name: "sysvarStakeHistory",
						...parseAccount(instruction.keys[3]),
					},
					{
						name: "authorizedPubkey",
						...parseAccount(instruction.keys[4]),
					},
					...[instruction.keys.length > 5 ? { name: "custodianPubkey", ...instruction.keys[5] } : undefined],
				],
				args: {
					stakePubkey: decodedIx.stakePubkey,
					authorizedPubkey: decodedIx.authorizedPubkey,
					toPubkey: decodedIx.toPubkey,
					custodianPubkey: decodedIx.custodianPubkey,
					lamports: decodedIx.lamports,
				} as any,
			} as ParsedIdlInstruction<StakeLayout, "withdraw">;
			break;
		}
		default: {
			parsed = null;
			break;
		}
	}

	return parsed
		? {
				...parsed,
				programId: StakeProgram.programId,
			}
		: {
				programId: StakeProgram.programId,
				name: "unknown",
				accounts: instruction.keys,
				args: { unknown: instruction.data },
			};
}

export { decodeStakeInstruction };
