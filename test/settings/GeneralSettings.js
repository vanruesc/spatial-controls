import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { GeneralSettings } from "spatial-controls";

describe("GeneralSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new GeneralSettings());

	});

	it("can be cloned", () => {

		const object = new GeneralSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
