import test from "ava";
import { ZoomStrategy } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new ZoomStrategy();

	t.pass();

});
