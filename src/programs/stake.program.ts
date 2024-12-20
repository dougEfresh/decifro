export declare type StakeLayout = {
	accounts: [];
	address: "Stake11111111111111111111111111111111111111";
	constants: [];
	errors: [];
	events: [];
	instructions: [
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "clockSysvar";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "authorized";
					type: {
						defined: {
							generics: [];
							name: "AuthorizedType";
						};
					};
				},
				{
					name: "lockup";
					type: {
						defined: {
							generics: [];
							name: "COption<LockupType>";
						};
					};
				},
			];
			discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
			name: "initialize";
		},
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "clockSysvar";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "authorizedPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "custodianPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "newAuthorized";
					type: "pubkey";
				},
				{
					name: "stakeAuthorizationType";
					type: {
						defined: {
							generics: [];
							name: "StakeAuthorizationType";
						};
					};
				},
			];
			discriminator: [173, 193, 102, 210, 219, 137, 113, 120];
			name: "authorize";
		},
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "authorizedPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "clockSysvar";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "custodianPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "newAuthorized";
					type: "pubkey";
				},
				{
					name: "stakeAuthorizationType";
					type: {
						defined: {
							generics: [];
							name: "StakeAuthorizationType";
						};
					};
				},
				{
					name: "authoritySeed";
					type: "string";
				},
				{
					name: "authorityOwner";
					type: "pubkey";
				},
			];
			discriminator: [7, 18, 211, 41, 76, 83, 115, 61];
			name: "authorizeWithSeed";
		},
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "clockSysvar";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "authorizedPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "stakePubkey";
					type: "pubkey";
				},
				{
					name: "authorizedPubkey";
					type: "pubkey";
				},
			];
			discriminator: [44, 112, 33, 172, 113, 28, 142, 13];
			name: "deactivate";
		},
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "votePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "clockSysvar";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "sysvarStakeHistory";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "stakeConfig";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "authorizedPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
			];
			discriminator: [90, 147, 75, 178, 85, 88, 4, 137];
			name: "delegate";
		},
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "sourceStakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "clockSysvar";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "sysvarStakeHistory";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "authorizedPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
			];
			discriminator: [148, 141, 236, 47, 174, 126, 69, 111];
			name: "merge";
		},
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "splitStakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "authorizedPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "lamports";
					type: "u64";
				},
			];
			discriminator: [124, 189, 27, 43, 216, 40, 147, 66];
			name: "split";
		},
		{
			accounts: [
				{
					docs: [];
					name: "stakePubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "toPubkey";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "clockSysvar";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "sysvarStakeHistory";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "authorizedPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "custodianPubkey";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
			];
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "lamports";
					type: "u64";
				},
			];
			discriminator: [183, 18, 70, 156, 148, 109, 161, 34];
			name: "withdraw";
		},
	];
	metadata: {
		name: "stake_program";
		version: "1.0.0";
		spec: "0.1.0";
	};
	types: [
		{
			name: "AuthorizedType";
			type: {
				fields: [
					{
						name: "staker";
						type: "pubkey";
					},
					{
						name: "withdrawer";
						type: "pubkey";
					},
				];
				kind: "struct";
			};
		},
		{
			name: "LockupType";
			type: {
				fields: [
					{
						name: "unixTimestamp";
						type: "u64";
					},
					{
						name: "epoch";
						type: "u64";
					},
					{
						name: "custodian";
						type: "pubkey";
					},
				];
				kind: "struct";
			};
		},
		{
			name: "StakeAuthorizationType";
			type: {
				fields: [
					{
						name: "index";
						type: "u32";
					},
				];
				kind: "struct";
			};
		},
	];
};
