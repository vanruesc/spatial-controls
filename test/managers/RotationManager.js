import test from "ava";
import { RotationManager } from "../../build/delta-controls.js";

test("can be instantiated", t => {

	const object = new RotationManager();

	t.truthy(object);

});
