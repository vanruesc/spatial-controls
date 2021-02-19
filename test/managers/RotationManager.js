import test from "ava";
import { RotationManager } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new RotationManager();

	t.pass();

});
