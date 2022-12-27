import test from "ava";
import { RotationManager } from "spatial-controls";

test("can be instantiated", t => {

	const object = new RotationManager();
	t.pass();

});
