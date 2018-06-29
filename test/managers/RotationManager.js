import test from "ava";
import { RotationManager } from "../../build/bundle.js";

test("can be instantiated", t => {

	const object = new RotationManager();

	t.truthy(object);

});
