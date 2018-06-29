import test from "ava";
import { TranslationManager } from "../../build/bundle.js";

test("can be instantiated", t => {

	const object = new TranslationManager();

	t.truthy(object);

});
