import test from "ava";
import { MovementState } from "../../build/delta-controls.js";

test("can be instantiated", t => {

	const object = new MovementState();

	t.truthy(object);

});
