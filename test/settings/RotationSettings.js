"use strict";

const RotationSettings = require("../../build/delta-controls").RotationSettings;

module.exports = {

	"RotationSettings": {

		"can be instantiated": function(test) {

			const settings = new RotationSettings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new RotationSettings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
