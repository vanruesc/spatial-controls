import test from "ava";
import { CollisionManager } from "spatial-controls";

test("can be instantiated", t => {

	t.truthy(new CollisionManager());

});
