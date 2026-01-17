import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { MovementState } from "spatial-controls";

describe("MovementState", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new MovementState());

	});

});
