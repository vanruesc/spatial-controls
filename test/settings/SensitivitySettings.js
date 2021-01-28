import test from "ava";
import { SensitivitySettings } from "../../";

test("can be instantiated", t => {

	const object = new SensitivitySettings();

	t.truthy(object);

});

test("can be cloned", t => {

	const object = new SensitivitySettings();

	t.truthy(object.clone());

});
