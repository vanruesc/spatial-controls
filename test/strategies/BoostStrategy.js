import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { BoostStrategy } from "spatial-controls";

describe("BoostStrategy", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new BoostStrategy());

	});

});
