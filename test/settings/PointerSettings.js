import test from "ava";
import { PointerSettings } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new PointerSettings());

});

test("can be cloned", t => {

	const object = new PointerSettings();
	object.clone();
	t.pass();

});
