import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { CollisionManager } from "spatial-controls";

describe("CollisionManager", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new CollisionManager());

	});

});
