"use strict";

const DeltaControls = require("../../build/delta-controls").DeltaControls;
const three = require("three");
const Vector3 = three.Vector3;
const Quaternion = three.Quaternion;

module.exports = {

	"DeltaControls": {

		"can be instantiated": function(test) {

			const controls = new DeltaControls(new Vector3(), new Quaternion(), null);
			test.ok(controls);
			test.done();

		},

		"can copy another instance": function(test) {

			const controls1 = new DeltaControls(new Vector3(), new Quaternion(), null);
			const controls2 = new DeltaControls(new Vector3(), new Quaternion(), null);
			test.ok(controls1.copy(controls2));
			test.done();

		}

	}

};
