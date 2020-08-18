import test from "ava";
import { MovementState } from "../../build/spatial-controls.esm.js";

test("can be instantiated", t => {

	const object = new MovementState();

	t.truthy(object);

});
