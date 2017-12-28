"use strict";

const PointerSettings = require("../../build/delta-controls").PointerSettings;

module.exports = {

	"PointerSettings": {

		"can be instantiated": function(test) {

			const settings = new PointerSettings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new PointerSettings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
