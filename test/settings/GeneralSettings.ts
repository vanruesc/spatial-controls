import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { GeneralSettings } from "spatial-controls";

describe("GeneralSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new GeneralSettings());

	});

	it("can be copied", () => {

		const object1 = new GeneralSettings();
		const object2 = new GeneralSettings();
		assert.doesNotThrow(() => object1.copy(object2));

	});

	it("can be cloned", () => {

		const object = new GeneralSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
