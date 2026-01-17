import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { TransformationData } from "spatial-controls";

describe("TransformationData", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new TransformationData());
		assert.doesNotThrow(() => TransformationData.from(null));

	});

	it("can be copied", () => {

		const object1 = new TransformationData();
		const object2 = new TransformationData();
		assert.doesNotThrow(() => object1.copy(object2));

	});

});
