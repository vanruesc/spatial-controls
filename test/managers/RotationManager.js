import test from "ava";
import { RotationManager } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new RotationManager());

});
