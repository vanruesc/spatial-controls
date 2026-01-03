import test from "ava";
import { TransformationData } from "spatial-controls";

test("can be instantiated", t => {

	t.truthy(new TransformationData());

});

test("can copy another instance", t => {

	const data1 = new TransformationData();
	const data2 = new TransformationData();
	data1.copy(data2);
	t.pass();

});
