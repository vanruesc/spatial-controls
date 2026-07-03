import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SpatialControls } from "spatial-controls";

describe("SpatialControls", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new SpatialControls());

	});

	it("can copy another instance", () => {

		const controls1 = new SpatialControls();
		const controls2 = new SpatialControls();
		assert.doesNotThrow(() => controls1.copy(controls2));

	});

	it("can be cloned", () => {

		const controls1 = new SpatialControls();
		assert.doesNotThrow(() => controls1.clone());

	});

});
