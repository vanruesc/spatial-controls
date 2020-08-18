import test from "ava";
import { TranslationSettings } from "../../build/spatial-controls.esm.js";

test("can be instantiated", t => {

	const object = new TranslationSettings();

	t.truthy(object);

});

test("can be cloned", t => {

	const object = new TranslationSettings();

	t.truthy(object.clone());

});
