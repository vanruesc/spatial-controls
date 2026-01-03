import test from "ava";
import { MovementState } from "spatial-controls";

test("can be instantiated", t => {

	t.truthy(new MovementState());

});
