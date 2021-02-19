import test from "ava";
import { MovementStrategy } from "../../dist/spatial-controls.js";

test("can be instantiated", t => {

	const object = new MovementStrategy();

	t.pass();

});
