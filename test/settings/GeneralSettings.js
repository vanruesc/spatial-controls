import test from "ava";
import { GeneralSettings } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new GeneralSettings());

});

test("can be cloned", t => {

	const object = new GeneralSettings();
	object.clone();
	t.pass();

});
