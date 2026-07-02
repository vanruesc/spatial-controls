import test from "ava";
import { RotationSettings } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new RotationSettings());

});

test("can be cloned", t => {

	const object = new RotationSettings();
	object.clone();
	t.pass();

});
