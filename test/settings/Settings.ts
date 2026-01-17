import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { Settings } from "spatial-controls";

describe("Settings", () => {

	it("can be instantiated", () => {

		assert.doesNotThrow(() => new Settings());

	});

	it("can be copied", () => {

		const object1 = new Settings();
		const object2 = new Settings();
		assert.doesNotThrow(() => object1.copy(object2));

	});

	it("can be cloned", () => {

		const object = new Settings();
		assert.doesNotThrow(() => object.clone());

	});

	it("can be serialized", () => {

		const object = new Settings();
		assert.doesNotThrow(() => JSON.stringify(object));

	});

	it("can be deserialized", () => {

		const object0 = new Settings();
		const object1 = new Settings();

		object1.fromJSON(JSON.stringify(object0));

		// Compare JSON strings to ignore unrelated internal properties.
		assert.equal(JSON.stringify(object0), JSON.stringify(object1));

	});

});
