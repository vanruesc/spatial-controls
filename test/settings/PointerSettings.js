import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { PointerSettings } from "spatial-controls";

describe("PointerSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new PointerSettings());

	});

	it("can be cloned", () => {

		const object = new PointerSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
