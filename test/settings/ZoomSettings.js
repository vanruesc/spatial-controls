import test from "ava";
import { ZoomSettings } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new ZoomSettings());

});

test("can be cloned", t => {

	const object = new ZoomSettings();
	object.clone();
	t.pass();

});
