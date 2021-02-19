import test from "ava";
import { GeneralSettings } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new GeneralSettings();

	t.pass();

});

test("can be cloned", t => {

	const object = new GeneralSettings();

	object.clone();
	t.pass();

});
