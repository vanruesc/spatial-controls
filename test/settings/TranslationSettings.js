import test from "ava";
import { TranslationSettings } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new TranslationSettings();

	t.pass();

});

test("can be cloned", t => {

	const object = new TranslationSettings();

	object.clone();
	t.pass();

});
