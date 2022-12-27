import test from "ava";
import { MovementStrategy } from "spatial-controls";

test("can be instantiated", t => {

	const object = new MovementStrategy();
	t.pass();

});
