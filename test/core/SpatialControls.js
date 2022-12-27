import test from "ava";
import { SpatialControls } from "spatial-controls";

test("can be instantiated", t => {

	const object = new SpatialControls();
	t.pass();

});

test("can copy another instance", t => {

	const controls1 = new SpatialControls();
	const controls2 = new SpatialControls();
	controls1.copy(controls2);
	t.pass();

});

test("can be cloned", t => {

	const controls1 = new SpatialControls();
	controls1.clone();
	t.pass();

});
