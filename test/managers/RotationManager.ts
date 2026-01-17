import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { RotationManager } from "spatial-controls";

describe("RotationManager", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new RotationManager());

	});

});
