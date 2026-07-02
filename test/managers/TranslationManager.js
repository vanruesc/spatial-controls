import test from "ava";
import { TranslationManager } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new TranslationManager());

});
