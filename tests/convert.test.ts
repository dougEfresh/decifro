import { convertLegacyIdlToV30 } from "../src";
import { IDL as LegacyIdl } from "./idl/jupiterv6-legacy";

describe("legacy-idl", () => {
	it("convert-legacy-idl", async () => {
		const typeName = "JupiterV6";
		const address = "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4";
		const res = convertLegacyIdlToV30(LegacyIdl, address);
		//const stringified = JSON.stringify(res, undefined, 2);
		//console.log(`\nexport declare type ${typeName} = ${stringified};\n\n`);
	});
});
