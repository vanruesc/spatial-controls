import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ZoomStrategy } from "spatial-controls";

describe("ZoomStrategy", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new ZoomStrategy());

	});

});
