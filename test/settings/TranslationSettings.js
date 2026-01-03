import test from "ava";
import { TranslationSettings } from "spatial-controls";

test("can be instantiated", t => {

	t.truthy(new TranslationSettings());

});

test("can be cloned", t => {

	const object = new TranslationSettings();
	object.clone();
	t.pass();

});
