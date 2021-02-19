import test from "ava";
import { TranslationManager } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new TranslationManager();

	t.pass();

});
