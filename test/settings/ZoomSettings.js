import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ZoomSettings } from "spatial-controls";

describe("ZoomSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new ZoomSettings());

	});

	it("can be cloned", () => {

		const object = new ZoomSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
