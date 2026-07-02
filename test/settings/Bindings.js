import test from "ava";
import { Bindings } from "spatial-controls";

test("can be instantiated", t => {

	t.notThrows(() => new Bindings());

});

test("can be cloned", t => {

	const object = new Bindings();
	object.clone();
	t.pass();

});
