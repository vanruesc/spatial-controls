import test from "ava";
import { DollySettings } from "spatial-controls";

test("can be instantiated", t => {

	t.truthy(new DollySettings());

});

test("can be cloned", t => {

	const object = new DollySettings();
	object.clone();
	t.pass();

});
