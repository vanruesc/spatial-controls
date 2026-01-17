import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { SpatialControls } from "spatial-controls";

describe("SpatialControls", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new EventTarget());

	});

	it("can be copied", () => {

		const object1 = new SpatialControls();
		const object2 = new SpatialControls();
		assert.doesNotThrow(() => object1.copy(object2));

	});

	it("can be cloned", () => {

		const object = new SpatialControls();
		assert.doesNotThrow(() => object.clone());

	});

});
