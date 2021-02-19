import test from "ava";
import { KeyBindings } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new KeyBindings();

	t.pass();

});

test("can be cloned", t => {

	const object = new KeyBindings();

	object.clone();
	t.pass();

});
