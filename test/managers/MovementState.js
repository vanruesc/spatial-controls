import test from "ava";
import { MovementState } from "../../";

test("can be instantiated", t => {

	const object = new MovementState();

	t.truthy(object);

});
