import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { DollySettings } from "spatial-controls";

describe("DollySettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new DollySettings());

	});

	it("can be copied", () => {

		const object1 = new DollySettings();
		const object2 = new DollySettings();
		assert.doesNotThrow(() => object1.copy(object2));

	});

	it("can be cloned", () => {

		const object = new DollySettings();
		assert.doesNotThrow(() => object.clone());

	});

});
