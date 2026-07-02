import test from "ava";
import { MovementStrategy } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new MovementStrategy());

});
