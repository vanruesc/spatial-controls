import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { Bindings } from "spatial-controls";

describe("Bindings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new Bindings());

	});

	it("can be cloned", () => {

		const object = new Bindings();
		assert.doesNotThrow(() => object.clone());

	});

});
