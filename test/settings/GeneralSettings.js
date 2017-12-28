"use strict";

const GeneralSettings = require("../../build/delta-controls").GeneralSettings;

module.exports = {

	"GeneralSettings": {

		"can be instantiated": function(test) {

			const settings = new GeneralSettings();
			test.ok(settings);
			test.done();

		},

		"can be cloned": function(test) {

			const settings = new GeneralSettings();
			test.ok(settings.clone());
			test.done();

		}

	}

};
