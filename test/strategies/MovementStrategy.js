import test from "ava";
import { MovementStrategy } from "../../build/bundle.js";

test("can be instantiated", t => {

	const object = new MovementStrategy();

	t.truthy(object);

});
