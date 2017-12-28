"use strict";

const RotationManager = require("../../build/delta-controls").RotationManager;

module.exports = {

	"RotationManager": {

		"can be instantiated": function(test) {

			const manager = new RotationManager();
			test.ok(manager);
			test.done();

		}

	}

};
