export declare type JupiterV6 = {
	accounts: [
		{
			discriminator: [156, 247, 9, 188, 54, 108, 85, 77];
			name: "TokenLedger";
		},
	];
	address: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4";
	constants: [];
	errors: [
		{
			code: 6000;
			msg: "Empty route";
			name: "EmptyRoute";
		},
		{
			code: 6001;
			msg: "Slippage tolerance exceeded";
			name: "SlippageToleranceExceeded";
		},
		{
			code: 6002;
			msg: "Invalid calculation";
			name: "InvalidCalculation";
		},
		{
			code: 6003;
			msg: "Missing platform fee account";
			name: "MissingPlatformFeeAccount";
		},
		{
			code: 6004;
			msg: "Invalid slippage";
			name: "InvalidSlippage";
		},
		{
			code: 6005;
			msg: "Not enough percent to 100";
			name: "NotEnoughPercent";
		},
		{
			code: 6006;
			msg: "Token input index is invalid";
			name: "InvalidInputIndex";
		},
		{
			code: 6007;
			msg: "Token output index is invalid";
			name: "InvalidOutputIndex";
		},
		{
			code: 6008;
			msg: "Not Enough Account keys";
			name: "NotEnoughAccountKeys";
		},
		{
			code: 6009;
			msg: "Non zero minimum out amount not supported";
			name: "NonZeroMinimumOutAmountNotSupported";
		},
		{
			code: 6010;
			msg: "Invalid route plan";
			name: "InvalidRoutePlan";
		},
		{
			code: 6011;
			msg: "Invalid referral authority";
			name: "InvalidReferralAuthority";
		},
		{
			code: 6012;
			msg: "Token account doesn't match the ledger";
			name: "LedgerTokenAccountDoesNotMatch";
		},
		{
			code: 6013;
			msg: "Invalid token ledger";
			name: "InvalidTokenLedger";
		},
		{
			code: 6014;
			msg: "Token program ID is invalid";
			name: "IncorrectTokenProgramID";
		},
		{
			code: 6015;
			msg: "Token program not provided";
			name: "TokenProgramNotProvided";
		},
		{
			code: 6016;
			msg: "Swap not supported";
			name: "SwapNotSupported";
		},
		{
			code: 6017;
			msg: "Exact out amount doesn't match";
			name: "ExactOutAmountNotMatched";
		},
		{
			code: 6018;
			msg: "Source mint and destination mint cannot the same";
			name: "SourceAndDestinationMintCannotBeTheSame";
		},
	];
	events: [
		{
			discriminator: [64, 198, 205, 232, 38, 8, 113, 226];
			name: "SwapEvent";
		},
		{
			discriminator: [73, 79, 78, 127, 184, 213, 13, 220];
			name: "FeeEvent";
		},
	];
	instructions: [
		{
			accounts: [
				{
					docs: [];
					name: "tokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "userTransferAuthority";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "userSourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "userDestinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationTokenAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "platformFeeAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
			];
			args: [
				{
					name: "routePlan";
					type: {
						vec: {
							defined: {
								generics: [];
								name: "RoutePlanStep";
							};
						};
					};
				},
				{
					name: "inAmount";
					type: "u64";
				},
				{
					name: "quotedOutAmount";
					type: "u64";
				},
				{
					name: "slippageBps";
					type: "u16";
				},
				{
					name: "platformFeeBps";
					type: "u8";
				},
			];
			discriminator: [229, 23, 203, 151, 122, 227, 173, 42];
			name: "route";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "userTransferAuthority";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "userSourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "userDestinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationTokenAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "platformFeeAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "tokenLedger";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "routePlan";
					type: {
						vec: {
							defined: {
								generics: [];
								name: "RoutePlanStep";
							};
						};
					};
				},
				{
					name: "quotedOutAmount";
					type: "u64";
				},
				{
					name: "slippageBps";
					type: "u16";
				},
				{
					name: "platformFeeBps";
					type: "u8";
				},
			];
			discriminator: [150, 86, 71, 116, 167, 93, 14, 104];
			name: "routeWithTokenLedger";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "programAuthority";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "userTransferAuthority";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "sourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "programSourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "programDestinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "sourceMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "destinationMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "platformFeeAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "token2022Program";
					optional: true;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "id";
					type: "u8";
				},
				{
					name: "routePlan";
					type: {
						vec: {
							defined: {
								generics: [];
								name: "RoutePlanStep";
							};
						};
					};
				},
				{
					name: "inAmount";
					type: "u64";
				},
				{
					name: "quotedOutAmount";
					type: "u64";
				},
				{
					name: "slippageBps";
					type: "u16";
				},
				{
					name: "platformFeeBps";
					type: "u8";
				},
			];
			discriminator: [193, 32, 155, 51, 65, 214, 156, 129];
			name: "sharedAccountsRoute";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "programAuthority";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "userTransferAuthority";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "sourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "programSourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "programDestinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "sourceMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "destinationMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "platformFeeAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "token2022Program";
					optional: true;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "tokenLedger";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "id";
					type: "u8";
				},
				{
					name: "routePlan";
					type: {
						vec: {
							defined: {
								generics: [];
								name: "RoutePlanStep";
							};
						};
					};
				},
				{
					name: "quotedOutAmount";
					type: "u64";
				},
				{
					name: "slippageBps";
					type: "u16";
				},
				{
					name: "platformFeeBps";
					type: "u8";
				},
			];
			discriminator: [230, 121, 143, 80, 119, 159, 106, 170];
			name: "sharedAccountsRouteWithTokenLedger";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "userTransferAuthority";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "userSourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "userDestinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationTokenAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "sourceMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "destinationMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "platformFeeAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "token2022Program";
					optional: true;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "routePlan";
					type: {
						vec: {
							defined: {
								generics: [];
								name: "RoutePlanStep";
							};
						};
					};
				},
				{
					name: "outAmount";
					type: "u64";
				},
				{
					name: "quotedInAmount";
					type: "u64";
				},
				{
					name: "slippageBps";
					type: "u16";
				},
				{
					name: "platformFeeBps";
					type: "u8";
				},
			];
			discriminator: [208, 51, 239, 151, 123, 43, 237, 92];
			name: "exactOutRoute";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "programAuthority";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "userTransferAuthority";
					optional: false;
					relations: [];
					signer: true;
					writable: false;
				},
				{
					docs: [];
					name: "sourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "programSourceTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "programDestinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "sourceMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "destinationMint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "platformFeeAccount";
					optional: true;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "token2022Program";
					optional: true;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "id";
					type: "u8";
				},
				{
					name: "routePlan";
					type: {
						vec: {
							defined: {
								generics: [];
								name: "RoutePlanStep";
							};
						};
					};
				},
				{
					name: "outAmount";
					type: "u64";
				},
				{
					name: "quotedInAmount";
					type: "u64";
				},
				{
					name: "slippageBps";
					type: "u16";
				},
				{
					name: "platformFeeBps";
					type: "u8";
				},
			];
			discriminator: [176, 209, 105, 168, 154, 125, 69, 62];
			name: "sharedAccountsExactOutRoute";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenLedger";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "tokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [];
			discriminator: [228, 85, 185, 112, 78, 79, 77, 2];
			name: "setTokenLedger";
		},
		{
			accounts: [
				{
					docs: [];
					name: "openOrders";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "payer";
					optional: false;
					relations: [];
					signer: true;
					writable: true;
				},
				{
					docs: [];
					name: "dexProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "systemProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "rent";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "market";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [];
			discriminator: [229, 194, 212, 172, 8, 10, 134, 147];
			name: "createOpenOrders";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "user";
					optional: false;
					relations: [];
					signer: true;
					writable: true;
				},
				{
					docs: [];
					name: "mint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "tokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "systemProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "bump";
					type: "u8";
				},
			];
			discriminator: [147, 241, 123, 100, 244, 132, 174, 118];
			name: "createTokenAccount";
		},
		{
			accounts: [
				{
					docs: [];
					name: "openOrders";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "payer";
					optional: false;
					relations: [];
					signer: true;
					writable: true;
				},
				{
					docs: [];
					name: "programAuthority";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "dexProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "systemProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "rent";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "market";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "id";
					type: "u8";
				},
			];
			discriminator: [28, 226, 32, 148, 188, 136, 113, 171];
			name: "createProgramOpenOrders";
		},
		{
			accounts: [
				{
					docs: [];
					name: "wallet";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "programAuthority";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "systemProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "id";
					type: "u8";
				},
			];
			discriminator: [62, 198, 214, 193, 213, 159, 108, 210];
			name: "claim";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "payer";
					optional: false;
					relations: [];
					signer: true;
					writable: true;
				},
				{
					docs: [];
					name: "wallet";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "programAuthority";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "programTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "destinationTokenAccount";
					optional: false;
					relations: [];
					signer: false;
					writable: true;
				},
				{
					docs: [];
					name: "mint";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "associatedTokenTokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "associatedTokenProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
				{
					docs: [];
					name: "systemProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [
				{
					name: "id";
					type: "u8";
				},
			];
			discriminator: [116, 206, 27, 191, 166, 19, 0, 73];
			name: "claimToken";
			returns: "u64";
		},
		{
			accounts: [
				{
					docs: [];
					name: "tokenLedger";
					optional: false;
					relations: [];
					signer: true;
					writable: true;
				},
				{
					docs: [];
					name: "payer";
					optional: false;
					relations: [];
					signer: true;
					writable: true;
				},
				{
					docs: [];
					name: "systemProgram";
					optional: false;
					relations: [];
					signer: false;
					writable: false;
				},
			];
			args: [];
			discriminator: [232, 242, 197, 253, 240, 143, 129, 52];
			name: "createTokenLedger";
		},
	];
	metadata: {
		name: "jupiter";
		version: "0.1.0";
		spec: "0.1.0";
	};
	types: [
		{
			name: "AmountWithSlippage";
			type: {
				fields: [
					{
						name: "amount";
						type: "u64";
					},
					{
						name: "slippageBps";
						type: "u16";
					},
				];
				kind: "struct";
			};
		},
		{
			name: "RoutePlanStep";
			type: {
				fields: [
					{
						name: "swap";
						type: {
							defined: {
								generics: [];
								name: "Swap";
							};
						};
					},
					{
						name: "percent";
						type: "u8";
					},
					{
						name: "inputIndex";
						type: "u8";
					},
					{
						name: "outputIndex";
						type: "u8";
					},
				];
				kind: "struct";
			};
		},
		{
			name: "PlatformFeeType";
			type: {
				kind: "enum";
				variants: [
					{
						fields: [
							{
								name: "mint";
								type: "pubkey";
							},
						];
						name: "SourceMint";
					},
					{
						fields: [
							{
								name: "mint";
								type: "pubkey";
							},
						];
						name: "DestinationMint";
					},
					{
						name: "Zero";
					},
				];
			};
		},
		{
			name: "Side";
			type: {
				kind: "enum";
				variants: [
					{
						name: "Bid";
					},
					{
						name: "Ask";
					},
				];
			};
		},
		{
			name: "Swap";
			type: {
				kind: "enum";
				variants: [
					{
						name: "Saber";
					},
					{
						name: "SaberAddDecimalsDeposit";
					},
					{
						name: "SaberAddDecimalsWithdraw";
					},
					{
						name: "TokenSwap";
					},
					{
						name: "Sencha";
					},
					{
						name: "Step";
					},
					{
						name: "Cropper";
					},
					{
						name: "Raydium";
					},
					{
						fields: [
							{
								name: "aToB";
								type: "bool";
							},
						];
						name: "Crema";
					},
					{
						name: "Lifinity";
					},
					{
						name: "Mercurial";
					},
					{
						name: "Cykura";
					},
					{
						fields: [
							{
								name: "side";
								type: {
									defined: {
										generics: [];
										name: "Side";
									};
								};
							},
						];
						name: "Serum";
					},
					{
						name: "MarinadeDeposit";
					},
					{
						name: "MarinadeUnstake";
					},
					{
						fields: [
							{
								name: "side";
								type: {
									defined: {
										generics: [];
										name: "Side";
									};
								};
							},
						];
						name: "Aldrin";
					},
					{
						fields: [
							{
								name: "side";
								type: {
									defined: {
										generics: [];
										name: "Side";
									};
								};
							},
						];
						name: "AldrinV2";
					},
					{
						fields: [
							{
								name: "aToB";
								type: "bool";
							},
						];
						name: "Whirlpool";
					},
					{
						fields: [
							{
								name: "xToY";
								type: "bool";
							},
						];
						name: "Invariant";
					},
					{
						name: "Meteora";
					},
					{
						name: "GooseFX";
					},
					{
						fields: [
							{
								name: "stable";
								type: "bool";
							},
						];
						name: "DeltaFi";
					},
					{
						name: "Balansol";
					},
					{
						fields: [
							{
								name: "xToY";
								type: "bool";
							},
						];
						name: "MarcoPolo";
					},
					{
						fields: [
							{
								name: "side";
								type: {
									defined: {
										generics: [];
										name: "Side";
									};
								};
							},
						];
						name: "Dradex";
					},
					{
						name: "LifinityV2";
					},
					{
						name: "RaydiumClmm";
					},
					{
						fields: [
							{
								name: "side";
								type: {
									defined: {
										generics: [];
										name: "Side";
									};
								};
							},
						];
						name: "Openbook";
					},
					{
						fields: [
							{
								name: "side";
								type: {
									defined: {
										generics: [];
										name: "Side";
									};
								};
							},
						];
						name: "Phoenix";
					},
					{
						fields: [
							{
								name: "fromTokenId";
								type: "u64";
							},
							{
								name: "toTokenId";
								type: "u64";
							},
						];
						name: "Symmetry";
					},
					{
						name: "TokenSwapV2";
					},
					{
						name: "HeliumTreasuryManagementRedeemV0";
					},
					{
						name: "StakeDexStakeWrappedSol";
					},
					{
						fields: [
							{
								name: "bridgeStakeSeed";
								type: "u32";
							},
						];
						name: "StakeDexSwapViaStake";
					},
					{
						name: "GooseFXV2";
					},
					{
						name: "Perps";
					},
					{
						name: "PerpsAddLiquidity";
					},
					{
						name: "PerpsRemoveLiquidity";
					},
					{
						name: "MeteoraDlmm";
					},
					{
						fields: [
							{
								name: "side";
								type: {
									defined: {
										generics: [];
										name: "Side";
									};
								};
							},
						];
						name: "OpenBookV2";
					},
					{
						name: "RaydiumClmmV2";
					},
					{
						fields: [
							{
								name: "bridgeStakeSeed";
								type: "u32";
							},
						];
						name: "StakeDexPrefundWithdrawStakeAndDepositStake";
					},
					{
						fields: [
							{
								name: "poolIndex";
								type: "u8";
							},
							{
								name: "quantityIsInput";
								type: "bool";
							},
							{
								name: "quantityIsCollateral";
								type: "bool";
							},
						];
						name: "Clone";
					},
					{
						fields: [
							{
								name: "srcLstValueCalcAccs";
								type: "u8";
							},
							{
								name: "dstLstValueCalcAccs";
								type: "u8";
							},
							{
								name: "srcLstIndex";
								type: "u32";
							},
							{
								name: "dstLstIndex";
								type: "u32";
							},
						];
						name: "SanctumS";
					},
					{
						fields: [
							{
								name: "lstValueCalcAccs";
								type: "u8";
							},
							{
								name: "lstIndex";
								type: "u32";
							},
						];
						name: "SanctumSAddLiquidity";
					},
					{
						fields: [
							{
								name: "lstValueCalcAccs";
								type: "u8";
							},
							{
								name: "lstIndex";
								type: "u32";
							},
						];
						name: "SanctumSRemoveLiquidity";
					},
					{
						name: "RaydiumCP";
					},
					{
						fields: [
							{
								name: "aToB";
								type: "bool";
							},
							{
								name: "remainingAccountsInfo";
								type: {
									option: {
										defined: {
											generics: [];
											name: "RemainingAccountsInfo";
										};
									};
								};
							},
						];
						name: "WhirlpoolSwapV2";
					},
					{
						name: "OneIntro";
					},
					{
						name: "PumpdotfunWrappedBuy";
					},
					{
						name: "PumpdotfunWrappedSell";
					},
					{
						name: "PerpsV2";
					},
					{
						name: "PerpsV2AddLiquidity";
					},
					{
						name: "PerpsV2RemoveLiquidity";
					},
					{
						name: "MoonshotWrappedBuy";
					},
					{
						name: "MoonshotWrappedSell";
					},
					{
						name: "StabbleStableSwap";
					},
					{
						name: "StabbleWeightedSwap";
					},
					{
						fields: [
							{
								name: "xToY";
								type: "bool";
							},
						];
						name: "Obric";
					},
					{
						name: "FoxBuyFromEstimatedCost";
					},
					{
						fields: [
							{
								name: "isY";
								type: "bool";
							},
						];
						name: "FoxClaimPartial";
					},
					{
						fields: [
							{
								name: "isQuoteToBase";
								type: "bool";
							},
						];
						name: "SolFi";
					},
				];
			};
		},
		{
			name: "RemainingAccountsSlice";
			type: {
				fields: [
					{
						name: "accountsType";
						type: {
							defined: {
								generics: [];
								name: "AccountsType";
							};
						};
					},
					{
						name: "length";
						type: "u8";
					},
				];
				kind: "struct";
			};
		},
		{
			name: "RemainingAccountsInfo";
			type: {
				fields: [
					{
						name: "slices";
						type: {
							vec: {
								defined: {
									generics: [];
									name: "RemainingAccountsSlice";
								};
							};
						};
					},
				];
				kind: "struct";
			};
		},
		{
			name: "AccountsType";
			type: {
				kind: "enum";
				variants: [
					{
						name: "TransferHookA";
					},
					{
						name: "TransferHookB";
					},
				];
			};
		},
		{
			name: "TokenLedger";
			type: {
				fields: [
					{
						name: "tokenAccount";
						type: "pubkey";
					},
					{
						name: "amount";
						type: "u64";
					},
				];
				kind: "struct";
			};
		},
		{
			name: "SwapEvent";
			type: {
				fields: [
					{
						name: "amm";
						type: "pubkey";
					},
					{
						name: "inputMint";
						type: "pubkey";
					},
					{
						name: "inputAmount";
						type: "u64";
					},
					{
						name: "outputMint";
						type: "pubkey";
					},
					{
						name: "outputAmount";
						type: "u64";
					},
				];
				kind: "struct";
			};
		},
		{
			name: "FeeEvent";
			type: {
				fields: [
					{
						name: "account";
						type: "pubkey";
					},
					{
						name: "mint";
						type: "pubkey";
					},
					{
						name: "amount";
						type: "u64";
					},
				];
				kind: "struct";
			};
		},
	];
};
