import test from "ava";
import { TranslationManager } from "../../";

test("can be instantiated", t => {

	const object = new TranslationManager();

	t.truthy(object);

});
