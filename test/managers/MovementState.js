import test from "ava";
import { MovementState } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new MovementState();

	t.pass();

});
