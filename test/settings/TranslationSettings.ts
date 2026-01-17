import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { TranslationSettings } from "spatial-controls";

describe("TranslationSettings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new TranslationSettings());

	});

	it("can be copied", () => {

		const object1 = new TranslationSettings();
		const object2 = new TranslationSettings();
		assert.doesNotThrow(() => object1.copy(object2));

	});

	it("can be cloned", () => {

		const object = new TranslationSettings();
		assert.doesNotThrow(() => object.clone());

	});

});
