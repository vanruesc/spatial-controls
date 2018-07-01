import test from "ava";
import { ZoomStrategy } from "../../build/delta-controls.js";

test("can be instantiated", t => {

	const object = new ZoomStrategy();

	t.truthy(object);

});
