"use strict";

const SensitivitySettings = require("../../build/delta-controls").SensitivitySettings;

module.exports = {

	"SensitivitySettings": {

		"can be instantiated": function(test) {

			const settings = new SensitivitySettings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new SensitivitySettings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
