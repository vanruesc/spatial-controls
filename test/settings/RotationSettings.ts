import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { RotationSettings } from "spatial-controls";

describe("RotationSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new RotationSettings());

	});

	it("can be copied", () => {

		const object1 = new RotationSettings();
		const object2 = new RotationSettings();
		assert.doesNotThrow(() => object1.copy(object2));

	});

	it("can be cloned", () => {

		const object = new RotationSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
