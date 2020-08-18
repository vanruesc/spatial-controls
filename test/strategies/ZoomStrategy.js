import test from "ava";
import { ZoomStrategy } from "../../build/spatial-controls.esm.js";

test("can be instantiated", t => {

	const object = new ZoomStrategy();

	t.truthy(object);

});
