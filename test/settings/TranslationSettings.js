import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { TranslationSettings } from "spatial-controls";

describe("TranslationSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new TranslationSettings());

	});

	it("can be cloned", () => {

		const object = new TranslationSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
