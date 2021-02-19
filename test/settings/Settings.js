import test from "ava";
import { Settings } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new Settings();

	t.pass();

});

test("can be cloned", t => {

	const object = new Settings();

	object.clone();
	t.pass();

});

test("can be serialized", t => {

	const object = new Settings();

	JSON.stringify(object);
	t.pass();

});

test("can be deserialized", t => {

	const object0 = new Settings();
	const object1 = new Settings();

	object1.fromJSON(JSON.stringify(object0));

	// Compare JSON strings to ignore unrelated internal properties.
	t.is(JSON.stringify(object0), JSON.stringify(object1));

});
