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

		}

	}

};
