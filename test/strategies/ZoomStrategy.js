import test from "ava";
import { ZoomStrategy } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new ZoomStrategy());

});
