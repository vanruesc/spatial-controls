import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { TranslationManager } from "spatial-controls";

describe("TranslationManager", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new TranslationManager());

	});

});
