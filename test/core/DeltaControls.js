import test from "ava";
import { Quaternion, Vector3 } from "math-ds";
import { DeltaControls } from "../../build/delta-controls.js";

test("can be instantiated", t => {

	const object = new DeltaControls(new Vector3(), new Quaternion(), null);

	t.truthy(object);

});

test("can copy another instance", t => {

	const controls1 = new DeltaControls(new Vector3(), new Quaternion(), null);
	const controls2 = new DeltaControls(new Vector3(), new Quaternion(), null);

	t.truthy(controls1.copy(controls2));

});
