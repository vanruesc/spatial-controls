import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { MovementStrategy } from "spatial-controls";

describe("MovementStrategy", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new MovementStrategy());

	});

});
