import test from "ava";
import { BoostStrategy } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new BoostStrategy());

});
