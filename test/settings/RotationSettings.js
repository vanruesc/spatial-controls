import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { RotationSettings } from "spatial-controls";

describe("RotationSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new RotationSettings());

	});

	it("can be cloned", () => {

		const object = new RotationSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
