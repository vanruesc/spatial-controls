import test from "ava";
import { RotationSettings } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new RotationSettings();

	t.pass();

});

test("can be cloned", t => {

	const object = new RotationSettings();

	object.clone();
	t.pass();

});
