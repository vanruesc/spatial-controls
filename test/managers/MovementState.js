import test from "ava";
import { MovementState } from "spatial-controls";

test("can be instantiated", t => {

	const object = new MovementState();
	t.pass();

});
