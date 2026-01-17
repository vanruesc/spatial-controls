import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { InputManager } from "spatial-controls";

describe("InputManager", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new InputManager());

	});

});
